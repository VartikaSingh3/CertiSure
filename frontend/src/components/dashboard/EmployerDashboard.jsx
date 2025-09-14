// src/components/dashboard/EmployerDashboard.jsx
import QRScanner from "../QRScanner";
import UploadForm from "../UploadFrom";
import { useState } from "react";

export default function EmployerDashboard() {
  const [lastDetected, setLastDetected] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Employer Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* QR scanner */}
        <div className="col-span-1 bg-white/80 p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-indigo-700 mb-3">Quick QR Verify</h3>
          <QRScanner onDetected={(v) => setLastDetected(v)} />
        </div>

        {/* Single & Bulk upload */}
        <div className="col-span-2 bg-white/80 p-6 rounded-2xl shadow-lg">
          <h3 className="font-semibold text-indigo-700 mb-3">Upload Certificate(s)</h3>
          <UploadForm mode="both" onUpload={(files) => console.log("Employer uploaded", files)} />
        </div>
      </div>

      <div className="mt-6 bg-white/80 p-4 rounded-2xl shadow-lg">
        <h4 className="font-semibold">Last scanned data</h4>
        <div className="mt-2 text-sm text-gray-700">{lastDetected ?? "No QR scanned yet"}</div>
      </div>
    </div>
  );
}
