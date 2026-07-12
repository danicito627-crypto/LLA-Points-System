import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function DashboardPage() {
  const { data: checkIns, error } = await supabase
    .from("check_ins")
    .select("*, events(name, points)")
    .eq("student_id", 1);

  const totalPoints = checkIns?.reduce((sum, checkIn) => sum + checkIn.events.points, 0) || 0;

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-black">Welcome, Test Student</h1>
        <p className="mt-2 text-gray-600">Here is your points overview.</p>

        {error && (
          <p className="mt-4 text-red-600">Error: {error.message}</p>
        )}

        <div className="mt-8 bg-white rounded-lg shadow p-6 max-w-sm">
          <p className="text-gray-600">Current Points</p>
          <p className="text-5xl font-bold text-black mt-2">{totalPoints}</p>
        </div>
        <a href="/checkin" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
          Scan to Check In
        </a>

        <h2 className="text-2xl font-bold text-black mt-10">Points by Event</h2>
        <div className="mt-4 flex flex-col gap-3 max-w-sm">
          {checkIns?.map((checkIn) => (
            <div key={checkIn.id} className="bg-white rounded-lg shadow p-4 flex justify-between">
              <p className="text-black">{checkIn.events.name}</p>
              <p className="text-gray-600">+{checkIn.events.points}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}