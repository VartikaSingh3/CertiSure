import React from "react";

export default function StudentDashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">
        Student Dashboard
      </h2>

      {/* Upload Section */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">
          Upload Your Certificate
        </h3>
        <input type="file" className="mb-4" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Upload
        </button>
      </div>
    </div>
  );
}
