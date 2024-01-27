import TimesheetTable from "./components/TimesheetTable";
import { headersData } from "./variables/headersData";
import React, { useState, useEffect } from "react";
import client from "api/axios"
import Widget from "components/widget/Widget";
import { MdAccessTime, MdToday } from "react-icons/md";
// import Week from "../home/components/Week";

const Timesheet = () => {
  const [leavesData, setLeavesData] = useState([]);
  const [clockInTime, setClockInTime] = useState("--:--:--");
  const [clockOutTime, setClockOutTime] = useState("--:--:--");
  const [expectedClockInTime, setExpectedClockInTime] = useState("--:--:--");
  const [expectedClockOutTime, setExpectedClockOutTime] = useState("--:--:--");
  const [nextAction, setNextAction] = useState("");
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await client.get(`/companies/${companySlug}/employees/${employeeId}/time-records`);
        setLeavesData(response.data?.data);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };

    if (companySlug && employeeId) {
      fetchLeaves();
    } else {
      console.error('Company slug or employee ID not available');
    }
  }, [companySlug, employeeId]);

  useEffect(() => {
    // const fetchInfo = () => {
    //   return client
    //     .get(`/companies/${companySlug}/employees/${employeeId}/work-schedules/latest`)
    //     .then((response) => setData(response.data));
    // }

    const fetchTimeRecords = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      return client
        .get(`/companies/${companySlug}/employees/${employeeId}/time-records?date_from=${formattedDate}&date_to=${formattedDate}`)
        .then((response) => {
          const records = (response.data?.data || [])[0] || {};
          setClockInTime(records?.clock_in || "--:--:--");
          setClockOutTime(records?.clock_out || "--:--:--");
          setExpectedClockInTime(records?.clock_in || "");
          setExpectedClockOutTime(records?.clock_out || "");
          setNextAction(records?.next_action)
        });
    };

    // fetchInfo();
    fetchTimeRecords();

  }, [companySlug, employeeId])

  const renderSubtitle = () => {
    if (expectedClockInTime && expectedClockOutTime) {
      return `${expectedClockInTime} - ${expectedClockOutTime}`;
    } else {
      return "Rest Day";
    }
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-3 col-span-12 sm:col-span-7 3xl:col-span-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          <Widget
            icon={<MdToday className="h-7 w-7" />}
            title={"Work Today"}
            subtitle={renderSubtitle()}
            extraClass="col-span-2 md:col-span-1"
          />
          <Widget
            icon={<MdAccessTime className="h-7 w-7" />}
            title={"Clock In"}
            subtitle={clockInTime}
            />
          <Widget
            icon={<MdAccessTime className="h-7 w-7" />}
            title={"Clock Out"}
            subtitle={clockOutTime}
            />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <TimesheetTable
          columnsData={headersData}
          tableData={leavesData}
        />
      </div>
    </div>
  );
};

export default Timesheet;
