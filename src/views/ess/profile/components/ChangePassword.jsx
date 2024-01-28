import React, { useState } from 'react';
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";
import client from "api/axios";

const ChangePassword = () => {

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    password: '',
    password_new: '',
    password_confirmation: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // try {
    //   await new Promise(resolve => setTimeout(resolve, 800));
    //   await client.put(`/companies/${companySlug}/employees/${employeeId}`, formData);

    //   setIsSuccess(true);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //     setIsSuccess(false);
    //   }, 1000);

    // } catch (error) {
    //   setIsLoading(false);
    //   setIsSuccess(false);
    // }
  };

  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Change Password
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Secure and update your account password
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
        <InputField
          label="Current Password"
          id="password"
          type="password"
          extra="col-span-4"
          value={formData.password}
          onChange={handleInputChange}
        />
        <InputField
          label="New Password"
          id="password_new"
          type="password"
          extra="col-span-4"
          value={formData.password_new}
          onChange={handleInputChange}
        />
         <InputField
          label="Confirm Password"
          id="password_confirmation"
          type="password"
          extra="col-span-4"
          value={formData.password_confirmation}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-2.5">
         <Button
          label={isLoading ? (isSuccess ? "Password Changed" : "Saving...") : "Change Password"}
          status="positive"
          onClick={handleFormSubmit}
          disabled={isLoading}
          isLoading={isLoading && !isSuccess}
          extra="w-44"
        />
      </div>
    </Card>
  );
};

export default ChangePassword;
