import React from "react";
import Card from "components/card";
import QrCodeGenerator from "components/qr/QrCodeGenerator";
import { Link } from "react-router-dom";

const QrGenerate = () => {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const jobTitle = localStorage.getItem('jobTitle');

  return (
    <div className="mt-5 flex items-center justify-center w-full">
      <Card extra={"items-center w-full max-w-xl p-[16px] bg-cover"}>
        <div className="p-4 flex flex-col items-center mb-auto">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            {firstName} {lastName}
          </h4>
          <p className="text-base font-normal text-gray-600">{jobTitle}</p>
        </div>
        <div className="my-1">
          <QrCodeGenerator />
        </div>
        <Link
          to='/ess/scan-qr'
          className="text-xl p-4 font-bold underline text-brand-500 hover:text-brand-600 dark:text-white"
        >
          Scan QR Code
        </Link>
      </Card>
    </div>
  );
};

export default QrGenerate;
