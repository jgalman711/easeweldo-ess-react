import { payrollsHeadersData } from "components/table/headers/headersData"
import PayrollsTable from "components/table/PayrollsTable";
import React, { useState, useEffect } from "react";
import client from "api/axios"

const Payrolls = () => {
  const [payrollsData, setPayrollsData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');
  const itemsPerPage = 10; // for now static 10
  const [url, setUrl] = useState(`/companies/${companySlug}/employees/${employeeId}/payrolls?per_page=${itemsPerPage}&page=1`);

  useEffect(() => {
    const fetchPayrolls = async () => {
      try {
        const response = await client.get(url);
        setPayrollsData(response.data?.data);
        setPaginationData(response.data?.meta);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching payrolls:', error);
      }
    };

    if (companySlug && employeeId) {
      fetchPayrolls();
    } else {
      console.error('Company slug or employee ID not available');
    }
  }, [companySlug, employeeId, url]);

  const onPageChange = (url) => {
    if (url) {
      setUrl(`${url}&per_page=${itemsPerPage}`);
    }
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="mt-5 grid grid-cols-1">
        <PayrollsTable
          columnsData={payrollsHeadersData}
          tableData={payrollsData}
          paginationData={paginationData}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Payrolls;
