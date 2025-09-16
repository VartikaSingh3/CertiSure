import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function SignupForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "student",
  });

  const submit = (e) => {
    e.preventDefault();

    // Mock signup (replace with API later)
    const newUser = {
      name: form.name,
      email: form.email,
      userType: form.userType,
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
    <div className="w-full max-w-md glass-effect p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
      <p className="text-gray-600 mb-8">Join CertiSure today</p>
      
      <form onSubmit={submit} className="space-y-6">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email address"
          type="email"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        
        <input
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          type="password"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <select
          name="userType"
          value={form.userType}
          onChange={(e) => setForm({ ...form, userType: e.target.value })}
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="student">Student</option>
          <option value="employer">Employer</option>
          <option value="university">University</option>
        </select>

        <button
          type="submit"
          className="w-full py-4 btn-primary text-white font-semibold rounded-xl"
        >
          Sign Up
        </button>
      </form>
      
      <p className="mt-8 text-center text-gray-600">
        Already have an account?{" "}
        <Link className="text-purple-600 font-medium hover:underline" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
}