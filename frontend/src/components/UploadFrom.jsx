// src/components/UploadForm.jsx
import { useState } from "react";

/**
 * Props:
 *  - mode: "single" | "bulk" | "both" (default "both")
 *  - onUpload(files) optional
 */
export default function UploadForm({ mode = "both", onUpload }) {
  const [singleFile, setSingleFile] = useState(null);
  const [bulkFiles, setBulkFiles] = useState([]);

  const handleSingle = (e) => setSingleFile(e.target.files?.[0] ?? null);
  const handleBulk = (e) => setBulkFiles(Array.from(e.target.files ?? []));

  const submitSingle = (e) => {
    e.preventDefault();
    if (!singleFile) return alert("Select a file");
    // TODO: send singleFile to backend
    console.log("Single upload:", singleFile);
    if (onUpload) onUpload([singleFile]);
  };

  const submitBulk = (e) => {
    e.preventDefault();
    if (bulkFiles.length === 0) return alert("Select files for bulk upload");
    console.log("Bulk upload:", bulkFiles);
    if (onUpload) onUpload(bulkFiles);
  };

  return (
    <div className="space-y-4">
      {(mode === "single" || mode === "both") && (
        <form onSubmit={submitSingle} className="p-4 bg-white rounded-xl shadow-sm">
          <h4 className="font-semibold text-indigo-700">Upload Single Certificate (PDF/Image)</h4>
          <input accept=".pdf,.png,.jpg,.jpeg" onChange={handleSingle} type="file" className="mt-3" />
          <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg">Upload Single</button>
        </form>
      )}

      {(mode === "bulk" || mode === "both") && (
        <form onSubmit={submitBulk} className="p-4 bg-white rounded-xl shadow-sm">
          <h4 className="font-semibold text-indigo-700">Upload Bulk Certificates (ZIP or multiple files)</h4>
          <input multiple accept=".pdf,.png,.jpg,.jpeg,.zip" onChange={handleBulk} type="file" className="mt-3" />
          <div className="mt-2 text-sm text-gray-600">{bulkFiles.length} file(s) selected</div>
          <button className="mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg">Upload Bulk</button>
        </form>
      )}
    </div>
  );
}
