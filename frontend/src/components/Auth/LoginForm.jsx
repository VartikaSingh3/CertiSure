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
    <div className="w-full max-w-md glass-effect p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
      <p className="text-gray-600 mb-8">Sign in to your account</p>
      
      <form onSubmit={submit} className="space-y-6">
        <div>
          <input
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email address"
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        
        <div>
          <input
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Password"
            type="password"
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-4 btn-primary text-white font-semibold rounded-xl"
        >
          Login
        </button>
      </form>
      
      <p className="mt-8 text-center text-gray-600">
        New user?{" "}
        <Link className="text-purple-600 font-medium hover:underline" to="/signup">
          Create account
        </Link>
      </p>
    </div>
  );
}