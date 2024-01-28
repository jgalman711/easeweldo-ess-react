import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5
    });
  
    scanner.render(success, error);
  
    function success(result) {
      setScanResult(result);
      console.log(scanResult);
    }
  
    function error(err) {
    }
  });
  

  return (
    <div id="reader"></div>
  );
};

export default QrScanner;
