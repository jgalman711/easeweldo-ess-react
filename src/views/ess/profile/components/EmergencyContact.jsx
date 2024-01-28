import React from "react";
import InputField from "components/fields/InputField";
import Card from "components/card";

const EmergencyContact = () => {
  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Emergency Contact
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can change your contact information
        </p>
      </div>
       <div className="grid grid-cols-4 gap-4 rounded-2xl py-3">
        <InputField
          label="Contact Name"
          id="contact_name"
          type="text"
          extra="col-span-4"
        />
        <InputField
          label="Relationship"
          id="relationship"
          type="text"
          extra="col-span-4 lg:col-span-2"
        />
         <InputField
          label="Emergency Contact Number"
          id="emergency_contact_number"
          type="text"
          extra="col-span-4 lg:col-span-2"
        />
      </div>
    </Card>
  );
};

export default EmergencyContact;
