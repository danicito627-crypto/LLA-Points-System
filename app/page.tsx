import Navbar from "./components/Navbar";
import { QrCode, Award, Gift } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, #CEB888 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}></div>

        <div className="relative z-10">
          <p className="text-[#CEB888] text-sm font-semibold tracking-widest uppercase mb-4">
            Larsen Leaders Academy
          </p>
          <h1 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'var(--font-oswald)' }}>
            LLA Point Tracker
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-gray-300">
            Attendance. Rewards. Community. Earn points for showing up, redeem them for real rewards.
          </p>
          <a href="/login" className="mt-10 inline-block rounded-full bg-[#CEB888] px-10 py-4 text-black font-semibold hover:bg-[#b8a374] hover:scale-105 transition-all shadow-lg">
            Get Started
          </a>
        </div>
      </section>

      <section className="bg-[#CEB888] py-12 text-center px-6">
        <p className="text-3xl md:text-4xl text-black mb-1" style={{ fontFamily: 'var(--font-oswald)' }}>
          &ldquo;Mission first, people always.&rdquo;
        </p>
        <p className="mt-2 text-black/70 font-medium text-sm uppercase tracking-wide">— Larsen Leaders Academy</p>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-12" style={{ fontFamily: 'var(--font-oswald)' }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5 shadow-md">
              <QrCode className="text-[#CEB888]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black">Scan & Check In</h3>
            <p className="mt-2 text-gray-600 max-w-xs">
              Scan a QR code at any event to confirm your attendance.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5 shadow-md">
              <Award className="text-[#CEB888]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black">Earn Points</h3>
            <p className="mt-2 text-gray-600 max-w-xs">
              Points are automatically added to your account after check-in.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-5 shadow-md">
              <Gift className="text-[#CEB888]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-black">Redeem Rewards</h3>
            <p className="mt-2 text-gray-600 max-w-xs">
              Trade your points for merch, experiences, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-12 text-center px-6">
        <p className="text-3xl md:text-4xl text-[#CEB888] mb-1" style={{ fontFamily: 'var(--font-oswald)' }}>
          &ldquo;You can count on me.&rdquo;
        </p>
        <p className="mt-2 text-gray-400 font-medium text-sm uppercase tracking-wide">— Larsen Leaders Academy</p>
      </section>

      <footer className="bg-gray-100 border-t border-gray-200 py-6 px-8 flex justify-end">
        <a href="/admin-login" className="text-sm text-gray-500 hover:underline">
          Admin Login
        </a>
      </footer>
    </main>
  );
}