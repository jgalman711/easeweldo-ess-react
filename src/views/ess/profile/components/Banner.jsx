import React from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = ({ data }) => {
  const profilePicture = localStorage.getItem('profilePicture');
  const storageUrl = process.env.REACT_APP_ES_STORAGE_URL

  const accountStatus = data?.data?.status || 'inactive';
  const statusClass =
    accountStatus === 'active'
      ? 'text-green-500'
      : accountStatus === 'inactive'
      ? 'text-red-500'
      : 'text-yellow-500';

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[165px] w-[165px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={storageUrl + profilePicture} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {data?.data?.full_name || ''}
        </h4>
        <p className={`text-sm font-normal`}>
          Status:
          <span className={`text-base font-semibold ${statusClass}`}> {accountStatus}</span>
        </p>
      </div>
    </Card>
  );
};

export default Banner;
