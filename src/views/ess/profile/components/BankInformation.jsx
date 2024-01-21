import React from "react";
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";

const BankInformation = ({ data }) => {
  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Bank Information
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can change your bank information
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
        <InputField
          label="Bank Name"
          id="bank_name"
          type="text"
          extra="col-span-4"
          value= {data?.data?.bank_name || ''}
        />
        <InputField
          label="Account Number"
          id="bank_account_number"
          type="text"
          extra="col-span-4"
          value= {data?.data?.bank_account_number || ''}
        />
        <InputField
          label="Account Name"
          id="bank_account_name"
          type="text"
          extra="col-span-4"
          value= {data?.data?.bank_account_name || ''}
        />
      </div>
      <div className="col-span-4 flex justify-end my-3">
        <Button
          id="saveBankInformation"
          label="Save Changes"
          status="positive"
        />
      </div>
    </Card>
  );
};

export default BankInformation;
