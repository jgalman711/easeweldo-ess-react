import Card from "components/card";
import React from "react";

const Week = () => {
  return (
    <Card extra={"w-full p-4 md:p-5"}>
      {/* Header */}
      <div className="mb-2 3xl:mb-10 w-full">
        <h4 className="mb-2 text-xl font-bold text-navy-700 dark:text-white">
          This Week
        </h4>
        <p className="text-base text-gray-600 block lg:hidden 3xl:block">
          This week description
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-7 gap-2 sm:gap-4 px-0">
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">SUN</p>
          <p className="text-xs sm:text-sm xl:text-lg">REST</p>
          <p className="text-xs sm:text-sm xl:text-lg">DAY</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">NOW</p>
          <p className="text-xs sm:text-sm xl:text-lg">08:00</p>
          <p className="text-xs sm:text-sm xl:text-lg">17:00</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">TUE</p>
          <p className="text-xs sm:text-sm xl:text-lg">08:00</p>
          <p className="text-xs sm:text-sm xl:text-lg">17:00</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">WED</p>
          <p className="text-xs sm:text-sm xl:text-lg">08:00</p>
          <p className="text-xs sm:text-sm xl:text-lg">17:00</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">THU</p>
          <p className="text-xs sm:text-sm xl:text-lg">08:00</p>
          <p className="text-xs sm:text-sm xl:text-lg">17:00</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">FRI</p>
          <p className="text-xs sm:text-sm xl:text-lg">08:00</p>
          <p className="text-xs sm:text-sm xl:text-lg">17:00</p>
        </div>
        <div className="bg-white shadow px-1 py-4 lg:p-4 rounded text-center">
          <p className="text-sm font-semibold text-gray-800 mb-2 xl:text-lg">SAT</p>
          <p className="text-xs sm:text-sm xl:text-lg">REST</p>
          <p className="text-xs sm:text-sm xl:text-lg">DAY</p>
        </div>
      </div>
    </Card>
  );
};

export default Week;
