import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from 'api/axios';
import Widget from 'components/widget/Widget';
import { MdCheck } from 'react-icons/md';
import { IoMdCalendar, IoMdWallet } from 'react-icons/io';
import PayrollDetailsTable from './components/PayrollDetailsTable';
import { payrollHeadersData } from 'components/table/headers/headersData';

const PayrollDetails = () => {
  const { payrollId } = useParams();
  const [payrollDetails, PayrollDetails] = useState([]);
  const companySlug = localStorage.getItem('companySlug');
  const employeeId = localStorage.getItem('id');

  useEffect(() => {
    const fetchPayrollDetails = async () => {
      try {
        const response = await client.get(`/companies/${companySlug}/employees/${employeeId}/payrolls/${payrollId}`);
        PayrollDetails(response?.data?.data);
      } catch (error) {
        console.error('Error fetching payroll details:', error);
      }
    };

    fetchPayrollDetails();
  }, [companySlug, employeeId, payrollId]);

  // Render the payroll details using the fetched data
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="mt-3 gap-2 grid grid-cols-2 sm:gap-5 md:grid-cols-3">
        <Widget
          icon={<MdCheck className="h-7 w-7" />}
          title={"Status"}
          subtitle={payrollDetails?.status}
          extraClass="col-span-1"
        />
        <Widget
          icon={<IoMdCalendar className="h-7 w-7" />}
          title={"Pay Date"}
          subtitle={payrollDetails?.pay_date}
          extraClass="col-span-1"
        />
        <Widget
          icon={<IoMdWallet className="h-6 w-6" />}
          title={"Net Income"}
          subtitle={"$" + payrollDetails?.net_income}
          extraClass="col-span-2 md:col-span-1"
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <PayrollDetailsTable
          columnsData={payrollHeadersData}
          tableData={[]}
        />
      </div>
    </div>
  );
};

export default PayrollDetails;
