import { payrollsHeadersData } from "components/table/headers/headersData"
import PayrollsTable from "components/table/PayrollsTable";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const Payrolls = () => {
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
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <PayrollsTable
          columnsData={payrollsHeadersData}
          tableData={payrollsData}
        />
      </div>
    </div>
  );
};

export default Payrolls;
