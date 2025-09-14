
export default function EmployerHistory() {
  const history = [
    { id: 1, action: "Scanned Certificate - ID12345", date: "2025-09-10" },
    { id: 2, action: "Uploaded Bulk Certificates", date: "2025-09-11" },
    { id: 3, action: "Verified Certificate - ID98765", date: "2025-09-12" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Employer Activity History</h2>
      <ul className="space-y-2">
        {history.map((item) => (
          <li
            key={item.id}
            className="border p-3 rounded flex justify-between bg-gray-50"
          >
            <span>{item.action}</span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
