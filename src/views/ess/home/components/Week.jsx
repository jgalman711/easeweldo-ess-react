import Card from "components/card";
import React from "react";
import Day from "./Day";

const Week = ({ data }) => {
  return (
    <Card extra={"w-full p-4"}>
      <div className="mb-2 3xl:mb-10 w-full">
        <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
          This Week
        </h4>
        <p className="text-base text-gray-600 block lg:hidden 3xl:block">
          Your work schedule for this week
        </p>
      </div>
      <div className="grid grid-cols-7 gap-1 sm:gap-2 3xl:gap-4 px-0">
        <Day
          day={data?.data?.day ?? "SUN"}
          timein={data?.data?.sunday_clock_in_time ?? "REST"}
          timeout={data?.data?.sunday_clock_out_time ?? "DAY"}
        />
        <Day
          day="MON"
          timein={data?.data?.monday_clock_in_time ?? "REST"}
          timeout={data?.data?.monday_clock_out_time ?? "DAY"}
        />
        <Day
          day="TUE"
          timein={data?.data?.tuesday_clock_in_time ?? "REST"}
          timeout={data?.data?.tuesday_clock_out_time ?? "DAY"}
        />
        <Day
          day="WED"
          timein={data?.data?.wednesday_clock_in_time ?? "REST"}
          timeout={data?.data?.wednesday_clock_out_time ?? "DAY"}
        />
        <Day
          day="THU"
          timein={data?.data?.thursday_clock_in_time ?? "REST"}
          timeout={data?.data?.thursday_clock_out_time ?? "DAY"}
        />
        <Day
          day="FRI"
          timein={data?.data?.friday_clock_in_time ?? "REST"}
          timeout={data?.data?.friday_clock_out_time ?? "DAY"}
        />
        <Day
          day="SAT"
          timein={data?.data?.saturday_clock_in_time ?? "REST"}
          timeout={data?.data?.saturday_clock_out_time ?? "DAY"}
        />
      </div>
    </Card>
  );
};

export default Week;
