import React from "react";
import Card from "components/card";
import InputField from "components/fields/InputField";
import Button from "components/button/Button";

const IdentificationNumbers = ({ data }) => {
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
          value= {data?.data?.sss_number || ''}
        />
        <InputField
          label="PagIbig"
          id="pagibig_number"
          type="text"
          extra="col-span-4"
          value= {data?.data?.pagibig_number || ''}
        />
        <InputField
          label="PhilHealth"
          id="philhealth_number"
          type="text"
          extra="col-span-4"
          value= {data?.data?.philhealth_number || ''}
        />
        <InputField
          label="Tax Identification Number"
          id="tax_identification_number"
          type="text"
          extra="col-span-4"
          value= {data?.data?.tax_identification_number || ''}
        />
      </div>
      <div className="col-span-4 flex justify-end my-3">
        <Button
          id="saveIdentificationNumber"
          label="Save Changes"
          status="positive"
        />
      </div>
    </Card>
  );
};

export default IdentificationNumbers;
