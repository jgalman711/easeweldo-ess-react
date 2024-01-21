import React from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Clock = () => {

  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const jobTitle = localStorage.getItem('jobTitle');
  const profilePicture = localStorage.getItem('profilePicture');
  const storageUrl = process.env.REACT_APP_ES_STORAGE_URL
  
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
      <div className="mt-16 flex flex-col items-center mb-auto">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {firstName} {lastName}
        </h4>
        <p className="text-base font-normal text-gray-600">{jobTitle}</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex flex-col w-full items-center">
        {/* <h5 className="text-left text-xl font-bold leading-9 text-navy-700 dark:text-white">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Stay on the pulse of distributed projects with an anline whiteboard to
          plan, coordinate and discuss
        </p> */}
        <button
          href=" "
          className="linear flex items-center justify-center rounded-lg bg-brand-500 w-full px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Clock In
        </button>
      </div>
    </Card>
  );
};

export default Clock;
