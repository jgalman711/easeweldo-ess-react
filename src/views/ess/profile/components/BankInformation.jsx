import React from "react";
import Card from "components/card";
import InputField from "components/fields/InputField";

const BankInformation = () => {
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
        />
        <InputField
          label="Account Number"
          id="account_number"
          type="text"
          extra="col-span-4"
        />
        <InputField
          label="Account Name"
          id="account_name"
          type="text"
          extra="col-span-4"
        />
      </div>
    </Card>
  );
};

export default BankInformation;
