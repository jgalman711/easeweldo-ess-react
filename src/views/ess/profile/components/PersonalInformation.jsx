import React, { useEffect, useState } from 'react';
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";
import client from "api/axios";

const PersonalInformation = ({ data }) => {

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');
  const storageUrl = process.env.REACT_APP_ES_STORAGE_URL

  const [formData, setFormData] = useState({
    mobile_number: '',
    date_of_birth: '',
    address_line: '',
    barangay_town_city_province: ''
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  useEffect(() => {
    setFormData({
      profile_picture: data?.data?.profile_picture || '',
      mobile_number: data?.data?.mobile_number || '',
      date_of_birth: data?.data?.date_of_birth || '',
      address_line: data?.data?.address_line || '',
      barangay_town_city_province: data?.data?.barangay_town_city_province || '',
    });
    setProfilePicturePreview(data?.data?.profile_picture ? storageUrl + data?.data?.profile_picture : null);
  }, [data, storageUrl]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.id === 'profile_picture') {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        profile_picture: file,
      }));
      setProfilePicturePreview(URL.createObjectURL(file));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      const formDataUpload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataUpload.append(key, value);
      });

      const response = await client({
        method: 'POST',
        url: `/companies/${companySlug}/employees/${employeeId}?_method=PUT`,
        data: formDataUpload,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setIsSuccess(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
        localStorage.setItem('profilePicture', response?.data?.data?.profile_picture);
      }, 1200);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Personal Information
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Manage and update your personal details
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 rounded-2xl py-3">
        <div className="flex items-center space-x-6 col-span-4 pb-4 pl-2">
          <div className="shrink-0">
            <img
              className="h-24 w-24 object-cover rounded-full"
              src={profilePicturePreview}
              alt="Current"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" id="profile_picture" onChange={handleInputChange} className="block w-full text-sm text-slate-500 
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-brand-100 file:text-brand-700
              file:cursor-pointer
              hover:file:bg-brand-200
            "/>
          </label>
        </div>
        <InputField
          label="Full Name"
          type="text"
          extra="col-span-4"
          value={data?.data?.full_name ?? ''}
          disabled={true}
        />
        <InputField
          label="Email"
          type="text"
          extra="col-span-4"
          value={data?.data?.email_address ?? ''}
          disabled={true}
        />
        <InputField
          label="Mobile Number"
          id="mobile_number"
          type="text"
          extra="col-span-2"
          value={formData.mobile_number}
          onChange={handleInputChange}
        />
        <InputField
          label="Date of Birth"
          id="date_of_birth"
          type="text"
          extra="col-span-2"
          value={formData.date_of_birth}
          onChange={handleInputChange}
        />
        <InputField
          label="Address Line"
          id="address_line"
          type="text"
          extra="col-span-4"
          value={formData.address_line}
          onChange={handleInputChange}
        />
        <InputField
          label="Barangay / Town / City / Province"
          id="barangay_town_city_province"
          type="text"
          extra="col-span-4"
          value={formData.barangay_town_city_province}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-2.5">
        <Button
          id="savePersonalInformation"
          label={isLoading ? (isSuccess ? "Changes Saved" : "Saving...") : "Save Changes"}
          status="positive"
          onClick={handleFormSubmit}
          disabled={isLoading}
          isLoading={isLoading && !isSuccess}
          extra="w-40"
        />
      </div>
    </Card>
  );
};

export default PersonalInformation;
