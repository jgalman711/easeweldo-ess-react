import React, { useState } from 'react';
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";
import client from "api/axios";

const PersonalInformation = ({ data }) => {

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    email_address: (data?.data?.email_address || '').toString(),
    mobile_number: (data?.data?.mobile_number || '').toString(),
    date_of_birth: (data?.data?.date_of_birth || '').toString(),
    address_line: (data?.data?.address_line || '').toString(),
    barangay_town_city_province: (data?.data?.barangay_town_city_province || '').toString(),
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.put(`/companies/${companySlug}/employees/${employeeId}`, formData);
    } catch (error) {
    }
  };

  return (
    <Card extra={"w-full p-4"}>
    <div className="ml-3 pb-5 w-full">
      <h4 className="text-xl font-bold text-navy-700 dark:text-white">
        Personal Information
      </h4>
      <p className="mt-2 text-base text-gray-600">
        Here you can change your personal information
      </p>
    </div>
    {/* Project 1 */}
    <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
      <InputField
        label="Email"
        id="email_address"
        type="text"
        extra="col-span-4"
        value={formData.email_address !== '' ? formData.email_address : data?.data?.email_address || ''}
        onChange={handleInputChange}
      />
      <InputField
        label="Mobile Number"
        id="mobile_number"
        type="text"
        extra="col-span-2"
        value={formData.mobile_number !== '' ? formData.mobile_number : data?.data?.mobile_number || ''}
        onChange={handleInputChange}
      />
      <InputField
        label="Date of Birth"
        id="date_of_birth"
        type="text"
        extra="col-span-2"
        value={formData.date_of_birth !== '' ? formData.date_of_birth : data?.data?.date_of_birth || ''}
        onChange={handleInputChange}
      />
      <InputField
        label="Address Line"
        id="address_line"
        type="text"
        extra="col-span-4"
        value={formData.address_line !== '' ? formData.address_line : data?.data?.address_line || ''}
        onChange={handleInputChange}
      />
      <InputField
        label="Barangay / Town / City / Province"
        id="barangay_town_city_province"
        type="text"
        extra="col-span-4"
        value={formData.barangay_town_city_province !== '' ? formData.barangay_town_city_province : data?.data?.barangay_town_city_province || ''}
        onChange={handleInputChange}
      />
    </div>
    <div className="col-span-4 flex justify-end my-3">
      <Button
        id="savePersonalInformation"
        label="Save Changes"
        status="positive"
        onClick={handleFormSubmit}
      />
    </div>
  </Card>
  );
};

export default PersonalInformation;
