import React from "react";

const Day = (props) => {
  const { day, timein, timeout } = props;
  return (
    <div className="bg-white border-2 border-gray-100 px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none px-1 py-4 lg:p-4 rounded text-center">
        <p className="text-sm font-semibold text-gray-600 mb-2 xl:text-lg">{day}</p>
        <p className="text-xs sm:text-sm xl:text-lg">{timein ?? "REST"}</p>
        <p className="text-xs sm:text-sm xl:text-lg">{timeout ?? "DAY"}</p>
    </div>
  );
};

export default Day;
