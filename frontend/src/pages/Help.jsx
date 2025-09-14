// src/pages/Help.jsx
import { motion } from "framer-motion";

export default function Help() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-6">
      <motion.div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-lg max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">Help & Support</h1>
        <p className="text-gray-700 mb-4">How to use CertiSure — quick guide and FAQs.</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Start Validation → Login if you are not logged in.</li>
          <li>Students can upload a single certificate to validate.</li>
          <li>Employers can scan QR and upload single/bulk certificates.</li>
          <li>Universities can bulk upload and validate many certificates.</li>
        </ul>
      </motion.div>
    </div>
  );
}
