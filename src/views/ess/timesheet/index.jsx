import TimesheetTable from "./components/TimesheetTable";
import { headersData } from "./variables/headersData";
import React, { useState, useEffect } from "react";
import client from "api/axios"
import Widget from "components/widget/Widget";
import { MdAccessTime, MdToday } from "react-icons/md";

const Timesheet = () => {
  const [timeRecordsData, setTimeRecordsData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const [clockInTime, setClockInTime] = useState("--:--:--");
  const [clockOutTime, setClockOutTime] = useState("--:--:--");
  const [expectedClockInTime, setExpectedClockInTime] = useState("--:--:--");
  const [expectedClockOutTime, setExpectedClockOutTime] = useState("--:--:--");

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');
  const itemsPerPage = 10; // for now static 10

  const [url, setUrl] = useState(`/companies/${companySlug}/employees/${employeeId}/time-records?per_page=${itemsPerPage}&page=1`);

  useEffect(() => {
    const fetchTimeRecordsData = async () => {
      try {
        const response = await client.get(url);
        setTimeRecordsData(response.data?.data);
        setPaginationData(response.data?.meta)
      } catch (error) {
        console.error('Error fetching time records:', error);
      }
    };

    if (companySlug && employeeId) {
      fetchTimeRecordsData();
    } else {
      console.error('Company slug or employee ID not available');
    }
  }, [companySlug, employeeId, url]);

  useEffect(() => {
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
          setExpectedClockInTime(records?.expected_clock_in || "");
          setExpectedClockOutTime(records?.expected_clock_out || "");
        });
    };

    fetchTimeRecords();

  }, [companySlug, employeeId])

  const renderSubtitle = () => {
    if (expectedClockInTime && expectedClockOutTime) {
      return `${expectedClockInTime} - ${expectedClockOutTime}`;
    } else {
      return "Rest Day";
    }
  };

  const onPageChange = (url) => {
    if (url) {
      setUrl(`${url}&per_page=${itemsPerPage}`);
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
          tableData={timeRecordsData}
          paginationData={paginationData}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Timesheet;
