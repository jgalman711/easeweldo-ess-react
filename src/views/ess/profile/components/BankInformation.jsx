import React, { useEffect, useState } from 'react';
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";
import client from "api/axios";

const BankInformation = ({ data }) => {

  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    bank_name: '',
    bank_account_number: '',
    bank_account_name: ''
  });

  useEffect(() => {
    setFormData({
      bank_name: data?.data?.bank_name || '',
      bank_account_number: data?.data?.bank_account_number || '',
      bank_account_name: data?.data?.bank_account_name || ''
    });
  }, [data]);

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
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      await client.put(`/companies/${companySlug}/employees/${employeeId}`, formData);

      setIsSuccess(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Bank Information
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Manage and update your bank account details
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
        <InputField
          label="Bank Name"
          id="bank_name"
          type="text"
          extra="col-span-4"
          value={formData.bank_name}
          onChange={handleInputChange}
        />
        <InputField
          label="Account Number"
          id="bank_account_number"
          type="text"
          extra="col-span-4"
          value={formData.bank_account_number}
          onChange={handleInputChange}
        />
        <InputField
          label="Account Name"
          id="bank_account_name"
          type="text"
          extra="col-span-4"
          value={formData.bank_account_name}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-3">
        <Button
          id="saveBankInformation"
          label={isLoading ? (isSuccess ? "✔ Saved" : "Saving...") : "Save Changes"}
          status="positive"
          onClick={handleFormSubmit}
          disabled={isLoading}
          extra="w-36"
        />
      </div>
    </Card>
  );
};

export default BankInformation;
