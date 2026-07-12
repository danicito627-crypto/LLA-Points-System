export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-black">Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">Manage your organization's events here.</p>

      <a href="/admin-dashboard/create-event" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
        + Create New Event
      </a>

      <div className="mt-8 bg-white rounded-lg shadow p-6 max-w-sm">
        <p className="font-semibold text-black">Resume Workshop</p>
        <p className="text-gray-600">Worth 10 points</p>
        <a href="/admin-dashboard/qr/resume-workshop" className="mt-2 inline-block text-sm text-blue-600 hover:underline">
          View QR Code
        </a>
      </div>
    </main>
  );
}