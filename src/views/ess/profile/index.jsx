import BankInformation from "./components/BankInformation";
import Banner from "./components/Banner";
import IdentificationNumbers from "./components/IdentificationNumbers";
import PersonalInformation from "./components/PersonalInformation";
import WorkInformation from "./components/WorkInformation";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const ProfileOverview = () => {
  const [data, setData] = useState([])
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchInfo = () => {
      return client
        .get(`/companies/${companySlug}/employees/${employeeId}`)
        .then((response) => setData(response.data));
    }
    fetchInfo();
  }, [companySlug, employeeId])

  return (
    <div className="flex w-full grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-ful mt-3 flex flex-col gap-5">
        <Banner data={data} />
        <PersonalInformation data={data} />
        <IdentificationNumbers data={data} />
      </div>
      <div className="w-full mt-3 flex flex-col gap-5">
        <WorkInformation data={data} />
        <BankInformation data={data} />
      </div>
    </div>
  );
};

export default ProfileOverview;
