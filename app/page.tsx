import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="text-right px-8 pt-2">
        <a href="/admin-login" className="text-sm text-gray-500 hover:underline">
          Organization Login
        </a>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold text-black">
          LLA Point Tracker
        </h1>

        <p className="mt-4 max-w-xl text-xl text-gray-600">
          Attendance. Rewards. Community. Earn points for showing up, redeem them for real rewards.
        </p>

        <button className="mt-10 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
          Get Started
        </button>
      </section>

      {/* Feature Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 max-w-4xl mx-auto text-center">
        <div>
          <h3 className="text-lg font-semibold text-black">Scan & Check In</h3>
          <p className="mt-2 text-gray-600">
            Scan a QR code at any event to confirm your attendance.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Earn Points</h3>
          <p className="mt-2 text-gray-600">
            Points are automatically added to your account after check-in.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">Redeem Rewards</h3>
          <p className="mt-2 text-gray-600">
            Trade your points for merch, experiences, and more.
          </p>
        </div>
      </section>
    </main>
  );
}