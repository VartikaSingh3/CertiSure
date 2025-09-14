import { useState } from "react";

export default function EmployerProfile() {
  const [profile, setProfile] = useState({
    name: "ABC Pvt Ltd",
    email: "hr@abc.com",
    userType: "Employer",
    contact: "",
    address: "",
    website: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Employer Profile</h2>
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
          placeholder="Company Address"
          value={profile.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="website"
          placeholder="Company Website"
          value={profile.website}
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
