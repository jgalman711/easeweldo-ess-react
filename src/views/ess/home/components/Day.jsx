import React from "react";

const Day = (props) => {
  const { day, timein, timeout } = props;
  return (
    <div className="bg-white border-2 border-gray-100 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none rounded text-center">
        <p className="text-sm font-semibold text-gray-600 mb-2 md:text-lg">{day}</p>
        <p className="text-xs sm:text-lg xl:text-md 2xl:text-lg">{timein ?? "REST"}</p>
        <p className="text-xs sm:text-lg xl:text-md 2xl:text-lg">{timeout ?? "DAY"}</p>
    </div>
  );
};

export default Day;
