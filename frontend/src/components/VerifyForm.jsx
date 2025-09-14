// src/components/VerifyForm.jsx
import { useState } from "react";

export default function VerifyForm({ onVerify }) {
  const [hash, setHash] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (!hash.trim()) return alert("Enter certificate hash or ID");
    console.log("verify:", hash);
    if (onVerify) onVerify(hash);
  };

  return (
    <form onSubmit={handle} className="p-4 bg-white rounded-xl shadow-sm">
      <h4 className="font-semibold text-indigo-700">Verify by Hash / ID</h4>
      <input value={hash} onChange={(e) => setHash(e.target.value)} placeholder="Certificate hash or ID" className="w-full mt-3 p-2 border rounded" />
      <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg">Verify</button>
    </form>
  );
}
