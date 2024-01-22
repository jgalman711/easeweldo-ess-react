import Card from "components/card";
import React from "react";
import Day from "./Day";

const Week = ({ data }) => {
  return (
    <Card extra={"w-full p-4 md:p-5"}>
      <div className="mb-2 3xl:mb-10 w-full">
        <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
          This Week
        </h4>
        <p className="text-base text-gray-600 block lg:hidden 3xl:block">
          Your work schedule for this week
        </p>
      </div>
      <div className="grid grid-cols-7 gap-2 sm:gap-4 px-0">
        <Day
          day={data?.data?.day ?? "SUN"}
          timein={data?.data?.expected_clock_in ?? "REST"}
          timeout={data?.data?.expected_clock_out ?? "DAY"}
        />
        <Day
          day="MON"
          timein="08:00"
          timeout="17:00"
        />
        <Day
          day="TUE"
          timein="08:00"
          timeout="17:00"
        />
        <Day
          day="WED"
          timein="08:00"
          timeout="17:00"
        />
        <Day
          day="THU"
          timein="08:00"
          timeout="17:00"
        />
        <Day
          day="FRI"
          timein="08:00"
          timeout="17:00"
        />
        <Day
          day="SAT"
        />
      </div>
    </Card>
  );
};

export default Week;
