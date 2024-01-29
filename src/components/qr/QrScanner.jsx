import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';
import client from "api/axios"
import CryptoJS from 'crypto-js';
import SubtleAlert from "components/alert/SubtleAlert";

const QrScanner = () => {
  const [clockInResponse, setClockInResponse] = useState("");
  const [responseType, setResponseType] = useState("info");
  const companySlug = localStorage.getItem('companySlug');
  const secretKey = process.env.REACT_APP_ES_SECRET_KEY;

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5
    });

    const decryptId = (encryptedId) => {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey);
        const decryptedId = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedId;
      } catch (error) {
        console.error('Error decrypting ID:', error);
        return null;
      }
    };
  
    function success(result) {
      scanner.clear();
      const decryptedId = decryptId(result);
      client
        .post(`/companies/${companySlug}/employees/${decryptedId}/clock`)
        .then((response) => {
          setClockInResponse(response.data.message);
          setResponseType('success')
        })
        .catch((error) => {
          setClockInResponse(error.response.data.message);
          setResponseType('error')
        });
    }
  
    function error(err) {}
    if (!clockInResponse) {
      scanner.render(success, error);
    }
  }, [companySlug, clockInResponse, secretKey]);
  
  return (
    <div>
      {clockInResponse && (
         <SubtleAlert
          description={clockInResponse}
          type={responseType}
        />
      )}
      <div id="reader"></div>
    </div>
  );
};

export default QrScanner;
