import React from "react";

export default function StudentHistory() {
  const certificates = [
    { id: "C-001", name: "B.Tech Degree", status: "Verified" },
    { id: "C-002", name: "Internship Certificate", status: "Pending" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">
        Certificate History
      </h2>

      <div className="bg-white shadow rounded-2xl p-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{cert.name}</span>
            <span
              className={`${
                cert.status === "Verified"
                  ? "text-green-600"
                  : "text-yellow-600"
              } font-semibold`}
            >
              {cert.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
