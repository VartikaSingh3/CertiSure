// src/components/auth/SignupForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignupForm() {
  const { login } = useAuth(); // we’ll use login to save the new user in context
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "student", // default
  });

  const submit = (e) => {
    e.preventDefault();

    // Mock signup (replace with API later)
    const newUser = {
      name: form.name,
      email: form.email,
      userType: form.userType, // student / employer / university
    };

    // Save new user into context
    login(newUser);

    // Redirect based on role
    if (newUser.userType === "student") {
      navigate("/student/dashboard");
    } else if (newUser.userType === "employer") {
      navigate("/employer/dashboard");
    } else if (newUser.userType === "university") {
      navigate("/university/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Sign Up</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          type="email"
          className="w-full p-3 border rounded"
          required
        />
        <input
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          type="password"
          className="w-full p-3 border rounded"
          required
        />

        {/* Dropdown for role */}
        <select
          name="userType"
          value={form.userType}
          onChange={(e) => setForm({ ...form, userType: e.target.value })}
          className="w-full p-3 border rounded"
        >
          <option value="student">Student</option>
          <option value="employer">Employer</option>
          <option value="university">University</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <a className="text-indigo-600" href="/login">
          Login
        </a>
      </p>
    </div>
  );
}
