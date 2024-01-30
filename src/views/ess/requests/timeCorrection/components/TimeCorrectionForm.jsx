import React, { useEffect, useState } from 'react';
import Button from "components/button/Button";
import Card from "components/card";
import InputField from "components/fields/InputField";
import TextField from "components/fields/TextField";
import client from "api/axios";

const TimeCorrectionForm = ({data}) => {
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  const [formData, setFormData] = useState({
    date: '',
    clock_in: '',
    clock_out: '',
    remarks: ''
  });

  useEffect(() => {
    setFormData({
      date: data?.data?.date || '',
      clock_in: data?.data?.clock_in || '',
      clock_out: data?.data?.clock_out || '',
      remarks: data?.data?.remarks || ''
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
            Create
        </h4>
        <p className="mt-2 text-base text-gray-600">
            Time correction subtitle
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid gap-4 grid-cols-2 rounded-2xl py-3">
        <InputField
          label="Date"
          id="date"
          type="date"
          extra="col-span-2"
          // value={formData.bank_name}
          // onChange={handleInputChange}
          />
        <InputField
          label="Clock In"
          id="clock_in"
          type="time"
          extra="col-span-2 sm:col-span-1"
          // value={formData.bank_name}
          // onChange={handleInputChange}
        />
        <InputField
          label="Clock Out"
          id="clock_out"
          type="time"
          extra="col-span-2 sm:col-span-1"
          // value={formData.bank_name}
          // onChange={handleInputChange}
        />
        <TextField
          label="Remarks"
          id="remarks"
         extra="col-span-2"
          // value={formData.bank_name}
          // onChange={handleInputChange}
        />
      </div>
      <div className="col-span-4 flex justify-end my-2.5">
        <Button
          label="Save"
          status="positive"
          // onClick={handleFormSubmit}
          // disabled={isLoading}
          // isLoading={isLoading && !isSuccess}
          extra="w-28"
        />
      </div>
    </Card>
  )
}

export default TimeCorrectionForm;