import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function DashboardPage() {
  const { data: checkIns } = await supabase
    .from("check_ins")
    .select("*, events(name, points)")
    .eq("student_id", 1);

  const totalPoints = checkIns?.reduce((sum, checkIn) => sum + checkIn.events.points, 0) || 0;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="px-6 py-10 md:px-12 max-w-3xl mx-auto">
        <p className="text-[#CEB888] text-sm font-semibold tracking-widest uppercase mb-2">
          Welcome back
        </p>
        <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'var(--font-oswald)' }}>
          Test Student
        </h1>

        <div className="mt-8 bg-black rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-400 text-sm uppercase tracking-wide">Current Points</p>
          <p className="text-6xl font-bold text-[#CEB888] mt-2" style={{ fontFamily: 'var(--font-oswald)' }}>
            {totalPoints}
          </p>
        </div>

        <a href="/checkin" className="mt-6 block text-center rounded-lg bg-[#CEB888] px-6 py-3 text-black font-semibold hover:bg-[#b8a374] transition-colors">
          Scan to Check In
        </a>

        <h2 className="text-2xl font-bold text-black mt-12 mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
          Points by Event
        </h2>

        <div className="flex flex-col gap-3">
          {checkIns?.map((checkIn) => (
            <div key={checkIn.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
              <p className="text-black font-medium">{checkIn.events.name}</p>
              <p className="text-[#CEB888] font-bold">+{checkIn.events.points}</p>
            </div>
          ))}

          {(!checkIns || checkIns.length === 0) && (
            <p className="text-gray-400 text-center py-6">No check-ins yet. Scan a QR code at your next event!</p>
          )}
        </div>
      </div>
    </main>
  );
}