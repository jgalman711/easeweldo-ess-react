import { leavesHeadersData } from "components/table/headers/headersData"
import React, { useState, useEffect } from "react";
import client from "api/axios"
import LeavesTable from "./components/LeavesTable";

const LeavesIndex = () => {
  const [leavesData, setTimeCorrectionData] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');
  const itemsPerPage = 10; // for now static 10
  const [url, setUrl] = useState(`/companies/${companySlug}/employees/${employeeId}/leaves?per_page=${itemsPerPage}&page=1`);
  
  useEffect(() => {
    const fetchTimeCorrectionRequests = async () => {
      try {
        const response = await client.get(url);
        setTimeCorrectionData(response.data?.data);
        setPaginationData(response.data?.meta);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    if (companySlug && employeeId) {
        fetchTimeCorrectionRequests();
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
        <LeavesTable
          columnsData={leavesHeadersData}
          tableData={leavesData}
          paginationData={paginationData}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default LeavesIndex;
