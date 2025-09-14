// src/components/ResultCard.jsx
export default function ResultCard({ status = "valid", certId, holderName, issueDate, hash }) {
  return (
    <div className={`p-4 rounded-2xl shadow-lg border ${status === "valid" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-gray-800">Certificate</h3>
        <span className={`px-2 py-1 rounded-full text-sm font-semibold ${status === "valid" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"}`}>
          {status === "valid" ? "✅ Valid" : "❌ Invalid"}
        </span>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <div><strong>ID:</strong> {certId || "—"}</div>
        <div><strong>Holder:</strong> {holderName || "—"}</div>
        <div><strong>Issued:</strong> {issueDate || "—"}</div>
        <div className="truncate"><strong>Hash:</strong> {hash || "—"}</div>
      </div>
    </div>
  );
}
