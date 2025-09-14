// src/pages/Login.jsx
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="mt-20 w-full max-w-md"><LoginForm /></div>
    </div>
  );
}
