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

      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-black text-white">
        <p className="text-[#CEB888] text-sm font-semibold tracking-widest uppercase mb-4">
          Larsen Leaders Academy
        </p>
        <h1 className="text-6xl font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
          LLA Point Tracker
        </h1>
        <p className="mt-4 max-w-xl text-xl text-gray-300">
          Attendance. Rewards. Community. Earn points for showing up, redeem them for real rewards.
        </p>
        <a href="/login" className="mt-10 rounded-lg bg-[#CEB888] px-8 py-3 text-black font-semibold hover:bg-[#b8a374] transition-colors">
          Get Started
        </a>
      </section>

      <section className="bg-[#CEB888] py-10 text-center px-6">
        <p className="text-2xl md:text-3xl font-bold text-black italic" style={{ fontFamily: 'var(--font-oswald)' }}>
          "Mission first, people always."
        </p>
        <p className="mt-2 text-black font-medium">— Larsen Leaders Academy</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 max-w-4xl mx-auto text-center">
        <div>
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-black flex items-center justify-center text-[#CEB888] font-bold text-xl">1</div>
          <h3 className="text-lg font-semibold text-black">Scan & Check In</h3>
          <p className="mt-2 text-gray-600">
            Scan a QR code at any event to confirm your attendance.
          </p>
        </div>
        <div>
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-black flex items-center justify-center text-[#CEB888] font-bold text-xl">2</div>
          <h3 className="text-lg font-semibold text-black">Earn Points</h3>
          <p className="mt-2 text-gray-600">
            Points are automatically added to your account after check-in.
          </p>
        </div>
        <div>
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-black flex items-center justify-center text-[#CEB888] font-bold text-xl">3</div>
          <h3 className="text-lg font-semibold text-black">Redeem Rewards</h3>
          <p className="mt-2 text-gray-600">
            Trade your points for merch, experiences, and more.
          </p>
        </div>
      </section>

      <section className="bg-black py-10 text-center px-6">
        <p className="text-2xl md:text-3xl font-bold text-[#CEB888] italic" style={{ fontFamily: 'var(--font-oswald)' }}>
          "You can count on me."
        </p>
        <p className="mt-2 text-gray-400 font-medium">— Larsen Leaders Academy</p>
      </section>
    </main>
  );
}