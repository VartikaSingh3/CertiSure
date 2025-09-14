import React from "react";

export default function StudentProfile() {
  const student = {
    name: "Test Student",
    email: "student@test.com",
    userType: "Student",
    dob: "2000-01-01",
    address: "New Delhi, India",
    contact: "9876543210",
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">
        My Profile
      </h2>

      <div className="bg-white shadow rounded-2xl p-6">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>User Type:</strong> {student.userType}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Contact:</strong> {student.contact}</p>
        <p><strong>Address:</strong> {student.address}</p>
      </div>
    </div>
  );
}
