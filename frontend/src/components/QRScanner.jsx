// src/components/QRScanner.jsx
import { useState } from "react";
import { QrReader } from "react-qr-reader";
import ResultCard from "./ResultCard";

export default function QRScanner({ onDetected }) {
  // onDetected(hash) => parent can send to verify API
  const [scan, setScan] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <div className="w-72 h-72 rounded-2xl overflow-hidden border-4 border-purple-300 shadow-md">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const text = result?.text ?? result;
              if (text && text !== scan) {
                setScan(text);
                if (onDetected) onDetected(text);
              }
            }
            if (error) {
              // console.error(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {scan ? (
        <div className="mt-3 w-full">
          <ResultCard status="valid" certId="--" holderName="--" issueDate="--" hash={scan} />
        </div>
      ) : (
        <p className="mt-3 text-gray-600">Point your camera at a certificate QR</p>
      )}
    </div>
  );
}
