import SimpleTable from "components/table/SimpleTable";
import { headersData } from "./variables/headersData";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const Leaves = () => {
  const [leavesData, setLeavesData] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await client.get(`/companies/${companySlug}/employees/${employeeId}/leaves`);
        setLeavesData(response.data?.data);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };

    if (companySlug && employeeId) {
      fetchLeaves();
    } else {
      console.error('Company slug or employee ID not available');
    }
  }, [companySlug, employeeId]);
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <SimpleTable
          columnsData={headersData}
          tableData={leavesData}
        />
      </div>
    </div>
  );
};

export default Leaves;
