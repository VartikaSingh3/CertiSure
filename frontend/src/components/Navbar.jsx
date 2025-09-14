// src/components/Navbar.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // rolePrefix must match route naming in App.jsx (student | employer | university)
  const rolePrefix = user?.userType?.toLowerCase();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/"); // go to home after logout
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/src/assets/Logo.png" alt="logo" className="w-10 h-10 rounded-full shadow-md" />
          <span className="text-white text-2xl font-bold">CertiSure</span>
        </Link>

        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition ${isActive ? "bg-white text-purple-700 shadow-md" : "text-white hover:text-teal-200"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md font-medium transition ${isActive ? "bg-white text-purple-700 shadow-md" : "text-white hover:text-teal-200"}`
            }
          >
            Help
          </NavLink>

          {!user ? (
            <Link to="/login" className="text-white font-medium hover:text-teal-200">Login</Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen((s) => !s)}
                className="flex items-center gap-2 bg-white text-purple-700 px-3 py-2 rounded-lg shadow-md"
              >
                {user.name || "User"} ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden">
                  {/* note: routes must match App.jsx exactly (lowercase) */}
                  <Link to={`/${rolePrefix}/dashboard`} onClick={() => setOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                  <Link to={`/${rolePrefix}/profile`} onClick={() => setOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to={`/${rolePrefix}/history`} onClick={() => setOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
