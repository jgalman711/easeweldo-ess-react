import React from "react";
import InputField from "components/fields/InputField";
import Card from "components/card";

const WorkInformation = ({ data }) => {
  return (
    <Card extra={"w-full p-4"}>
      <div className="ml-3 pb-5 w-full">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Employment Details
        </h4>
        <p className="mt-2 text-base text-gray-600">
          Here you can change your contact information
        </p>
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-4 gap-4 rounded-2xl bg-white py-3 dark:!bg-navy-700">
        <InputField
          label="Company"
          id="company"
          type="text"
          extra="col-span-4"
          value= {data?.data?.company || ''}
          disabled={true}
        />
        <InputField
          label="Employment Type"
          id="employment_type"
          type="text"
          extra="col-span-2"
          value= {data?.data?.employment_type || ''}
          disabled={true}
        />
        <InputField
          label="Status"
          id="employment_status"
          type="text"
          extra="col-span-2"
          value= {data?.data?.employment_status || ''}
          disabled={true}
        />
        <InputField
          label="Job Title"
          id="job_title"
          type="text"
          extra="col-span-4"
          value= {data?.data?.job_title || ''}
          disabled={true}
        />
         <InputField
          label="Department"
          id="department"
          type="text"
          extra="col-span-4"
          value= {data?.data?.department || ''}
          disabled={true}
        />
        <InputField
          label="Date Hired"
          id="date_of_hire"
          type="text"
          extra="col-span-2"
          value= {data?.data?.date_of_hire || ''}
          disabled={true}
        />
        <InputField
          label="Date Terminated"
          id="date_of_termination"
          type="text"
          extra="col-span-2"
          value= {data?.data?.date_of_termination || ''}
          disabled={true}
        />
      </div>
    </Card>
  );
};

export default WorkInformation;
