import Card from "components/card";
import QrScanner from "components/qr/QrScanner";
import { Link } from "react-router-dom";

const QrScan = () => {
  return (
    <div className="mt-5 flex items-center justify-center w-full">
      <Card extra={"items-center w-full max-w-xl p-[16px] bg-cover"}>
        <div className="p-4 w-full">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">Scan QR Code</h4>
          <p className="my-2 text-base text-gray-600">Record your attendance with a QR scan</p>
          <QrScanner />
        </div>
        <Link
          to='/ess/generate-qr'
          className="text-xl p-4 font-bold underline text-brand-500 hover:text-brand-600 dark:text-white"
        >
          Generate Your QR Code
        </Link>
      </Card>
    </div>
  );
};

export default QrScan;
