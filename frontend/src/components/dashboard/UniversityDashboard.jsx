// src/components/dashboard/UniversityDashboard.jsx
import UploadForm from "../UploadFrom";

export default function UniversityDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">University Dashboard</h1>

      <div className="bg-white/80 p-6 rounded-2xl shadow-lg">
        <h3 className="font-semibold text-indigo-700 mb-3">Bulk Upload & Validate</h3>
        <p className="text-sm text-gray-600 mb-4">Upload multiple certificates (ZIP or many files) and run bulk validation.</p>
        <UploadForm mode="bulk" onUpload={(files) => console.log("University bulk upload:", files)} />
      </div>
    </div>
  );
}
