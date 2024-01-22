import SimpleTable from "components/table/SimpleTable";
import { columnsDataLeaves } from "../variables/columnsData";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const LeavesTable = () => {
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
    <SimpleTable
      columnsData={columnsDataLeaves}
      tableData={leavesData}
      title="Leaves"
    />
  );
};

export default LeavesTable;