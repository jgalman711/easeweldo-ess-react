import SimpleTable from "components/table/SimpleTable";
import { columnsDataLeaves } from "../variables/columnsData";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const PayrollsTable = () => {
  const [payrollsData, setPayrollsData] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchPayrolls = async () => {
      try {
        const response = await client.get(`/companies/${companySlug}/employees/${employeeId}/payrolls`);
        setPayrollsData(response.data?.data);
      } catch (error) {
        console.error('Error fetching payrolls:', error);
      }
    };

    if (companySlug && employeeId) {
      fetchPayrolls();
    } else {
      console.error('Company slug or employee ID not available');
    }
  }, [companySlug, employeeId]);

  return (
    <SimpleTable
      columnsData={columnsDataLeaves}
      tableData={payrollsData}
      title="Payrolls"
    />
  );
};

export default PayrollsTable;