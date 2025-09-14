// src/pages/Home.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <motion.div className="absolute w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40" animate={{ x: [0, 120, -120, 0] }} transition={{ duration: 18, repeat: Infinity }} />
      <motion.div className="absolute w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" animate={{ x: [50, -50, 0, 50] }} transition={{ duration: 16, repeat: Infinity }} />

      <div className="relative z-10 text-center max-w-2xl mt-20">
        <h1 className="text-5xl font-extrabold text-indigo-700">Welcome to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CertiSure</span></h1>
        <p className="mt-4 text-lg text-gray-700">Trusted certificate verification powered by blockchain for integrity.</p>

        <button
          onClick={() => (user ? navigate("/dashboard") : navigate("/login"))}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl shadow-lg"
        >
          Start Validation
        </button>
      </div>
    </div>
  );
}
