import React, { useState } from "react";
import Card from "components/card";
import banner from "assets/img/profile/banner.png";
import client from "api/axios";
import Button from "components/button/Button";


const Clock = (props) => {
  const { initialNextAction, onUpdateClockIn, onUpdateClockOut } = props;
  const [nextAction, setNextAction] = useState("");

  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const jobTitle = localStorage.getItem('jobTitle');
  const profilePicture = localStorage.getItem('profilePicture');
  const storageUrl = process.env.REACT_APP_ES_STORAGE_URL;
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');
  const [isLoading, setIsLoading] = useState(false);

  const handleClockButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const response = await client.post(`/companies/${companySlug}/employees/${employeeId}/clock`);
      const { data } = response.data;

      setTimeout(() => {
        setIsLoading(false);
        setNextAction(data.next_action);
        onUpdateClockIn(data?.clock_in || "--:--:--");
        onUpdateClockOut(data?.clock_out || "--:--:--")
      }, 1200);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
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

      <div className="my-3 flex flex-col w-full items-center">
        <Button
          label={(isLoading) ? "Processing..." : (nextAction || initialNextAction || "Clock In")}
          status="positive"
          onClick={handleClockButtonClick}
          disabled={isLoading}
          isLoading={isLoading}
          extra="w-full"
        />
      </div>
    </Card>
  );
};

export default Clock;
