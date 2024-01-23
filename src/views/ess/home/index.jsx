import Widget from "components/widget/Widget";
import Clock from "./components/Clock";
import Week from "./components/Week";
import PayrollsTable from "./components/PayrollsTable";
import { MdAccessTime, MdToday } from "react-icons/md";
import React, { useState, useEffect } from "react";
import client from "api/axios"
import LeavesTable from "./components/LeavesTable";

const Home = () => {
  const [data, setData] = useState([])
  const [currentDaySchedule, setCurrentDaySchedule] = useState({});
  const [clockInTime, setClockInTime] = useState("--:--:--");
  const [clockOutTime, setClockOutTime] = useState("--:--:--");
  const [formattedToday, setFormattedToday] = useState("");
  const [nextAction, setNextAction] = useState("");
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchInfo = () => {
      return client
        .get(`/companies/${companySlug}/employees/${employeeId}/work-schedules/latest`)
        .then((response) => setData(response.data));
    }

    const fetchTimeRecords = () => {
      return client
        .get(`/companies/${companySlug}/employees/${employeeId}/time-records?date_from=${formattedToday}&date_to=${formattedToday}`)
        .then((response) => {
          const records = (response.data?.data || [])[0] || {};
          setClockInTime(records?.clock_in?.substring(11, 19) || "--:--:--");
          setClockOutTime(records?.clock_out?.substring(11, 19) || "--:--:--");
          setNextAction(records?.next_action)
        });
    };

    const getFormattedToday = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      setFormattedToday(formattedDate);
    };

    fetchInfo();
    fetchTimeRecords();
    getFormattedToday();

  }, [companySlug, employeeId, formattedToday])

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      const getCurrentDaySchedule = () => {
        const currentDate = new Date();
        const currentDay = currentDate.getDay();

        const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const currentDayName = dayNames[currentDay];

        const clockInTime = data?.data?.[`${currentDayName}_clock_in_time`];
        const clockOutTime = data?.data?.[`${currentDayName}_clock_out_time`];

        setCurrentDaySchedule({ clockInTime, clockOutTime });
      };

      getCurrentDaySchedule();
    }
  }, [data]);

  const renderSubtitle = () => {
    if (currentDaySchedule.clockInTime && currentDaySchedule.clockOutTime) {
      return `${currentDaySchedule.clockInTime} - ${currentDaySchedule.clockOutTime}`;
    } else {
      return "Rest Day";
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-ful mt-3 flex h-fit flex-col gap-4 lg:grid lg:grid-cols-12">
        <div className="col-span-12 sm:col-span-5 3xl:col-span-4 lg:!mb-0">
          <Clock nextAction={nextAction}/>
        </div>
        <div className="col-span-12 sm:col-span-7 3xl:col-span-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 3xl:grid-cols-3">
            <Widget
              icon={<MdToday className="h-7 w-7" />}
              title={"Work Today"}
              subtitle={renderSubtitle()}
              extraClass="col-span-1 lg:col-span-2 3xl:col-span-1"
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
          <div className="grid mt-4">
            <Week data={data} />
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1">
        <PayrollsTable />
      </div>
      <div className="mt-5 grid grid-cols-1">
        <LeavesTable />
      </div>
    </div>
  );
};

export default Home;
