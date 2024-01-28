import React from "react";
import Card from "components/card";
import banner from "assets/img/profile/banner.png";

const QrGenerate = () => {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const jobTitle = localStorage.getItem('jobTitle');
  const storageUrl = process.env.REACT_APP_ES_STORAGE_URL;
  const profilePicture = localStorage.getItem('profilePicture');

  return (
    <div className="flex items-center justify-center w-full">
      <Card extra={"items-center w-full max-w-4xl p-[16px] bg-cover"}>
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute -bottom-12 flex h-[165px] w-[165px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={storageUrl + profilePicture} alt="" />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center mb-auto">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {firstName} {lastName}
          </h4>
          <p className="text-base font-normal text-gray-600">{jobTitle}</p>
        </div>
      </Card>
    </div>
  );
};

export default QrGenerate;
