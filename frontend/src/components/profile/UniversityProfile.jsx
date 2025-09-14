import { useState } from "react";

export default function UniversityProfile() {
  const [profile, setProfile] = useState({
    name: "XYZ University",
    email: "admin@xyzuniv.edu",
    userType: "University",
    contact: "",
    address: "",
    accreditation: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">University Profile</h2>
      <div className="space-y-3">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>User Type:</strong> {profile.userType}</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Additional Details</h3>
      <form className="space-y-3">
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={profile.contact}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="University Address"
          value={profile.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="accreditation"
          placeholder="Accreditation Details"
          value={profile.accreditation}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
}
