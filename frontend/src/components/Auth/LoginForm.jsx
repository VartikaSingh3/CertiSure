// src/components/auth/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = (e) => {
    e.preventDefault();

    // Mock login (replace later with API)
    const mockUser = {
      name: form.email.split("@")[0] || "User",
      email: form.email,
      userType: "student", // 🔹 change to "employer" / "university" for testing
    };

    // Save user in context
    login(mockUser);

    // 🔹 Redirect based on role
    if (mockUser.userType === "student") {
      navigate("/student/dashboard");
    } else if (mockUser.userType === "employer") {
      navigate("/employer/dashboard");
    } else if (mockUser.userType === "university") {
      navigate("/university/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
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
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        New user?{" "}
        <Link className="text-indigo-600" to="/signup">
          Create account
        </Link>
      </p>
    </div>
  );
}
