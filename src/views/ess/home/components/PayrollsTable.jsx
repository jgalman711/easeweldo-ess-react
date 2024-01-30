import PayrollTable from "components/table/PayrollsTable";
import { payrollsHeadersData } from "components/table/headers/headersData";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const PayrollsTable = () => {
  const [payrollsData, setPayrollsData] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchPayrolls = async () => {
      try {
        const response = await client.get(`/companies/${companySlug}/employees/${employeeId}/payrolls?per_page=5`);
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
    <PayrollTable
      columnsData={payrollsHeadersData}
      tableData={payrollsData}
      title="Payrolls"
      viewAll={true}
    />
  );
};

export default PayrollsTable;