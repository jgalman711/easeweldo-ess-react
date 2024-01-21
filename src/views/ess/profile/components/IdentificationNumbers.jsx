import React, { useState } from 'react';
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";
import client from "api/axios";

const IdentificationNumbers = ({ data }) => {

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    sss_number: (data?.data?.sss_number || '').toString(),
    pagibig_number: (data?.data?.pagibig_number || '').toString(),
    philhealth_number: (data?.data?.philhealth_number || '').toString(),
    tax_identification_number: (data?.data?.tax_identification_number || '').toString(),
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
          Identification Numbers
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can change your identification numbers
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
        <InputField
          label="SSS"
          id="sss_number"
          type="text"
          extra="col-span-4"
          value={formData.sss_number !== '' ? formData.sss_number : data?.data?.sss_number || ''}
          onChange={handleInputChange}
        />
        <InputField
          label="PagIbig"
          id="pagibig_number"
          type="text"
          extra="col-span-4"
          value={formData.pagibig_number !== '' ? formData.pagibig_number : data?.data?.pagibig_number || ''}
          onChange={handleInputChange}
        />
        <InputField
          label="PhilHealth"
          id="philhealth_number"
          type="text"
          extra="col-span-4"
          value={formData.philhealth_number !== '' ? formData.philhealth_number : data?.data?.philhealth_number || ''}
          onChange={handleInputChange}
        />
        <InputField
          label="Tax Identification Number"
          id="tax_identification_number"
          type="text"
          extra="col-span-4"
          value={formData.tax_identification_number !== '' ? formData.tax_identification_number : data?.data?.tax_identification_number || ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-3">
        <Button
          id="saveIdentificationNumber"
          label="Save Changes"
          status="positive"
          onClick={handleFormSubmit}
        />
      </div>
    </Card>
  );
};

export default IdentificationNumbers;