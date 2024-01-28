import React from 'react';
import QRCode from 'react-qr-code';
import CryptoJS from 'crypto-js';

const QrCodeGenerator = () => {
  const employeeId = localStorage.getItem('id');
  const secretKey = process.env.REACT_APP_ES_SECRET_KEY;
  console.log(secretKey);
  const encryptId = (id) => {
    return CryptoJS.AES.encrypt(id, secretKey).toString();
  };
  const encryptedId = encryptId(employeeId);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-lg p-6">
        <QRCode value={encryptedId} size={200} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
