import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function LeaderboardPage() {
  const { data: students } = await supabase.from("students").select();

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black">Leaderboard</h1>
        <p className="mt-2 text-gray-600">Top students will show up here.</p>

        <div className="mt-8 flex flex-col gap-3 max-w-sm">
          {students?.map((student, index) => (
            <div key={student.id} className="bg-white rounded-lg shadow p-4 flex justify-between">
              <p className="text-black">{index + 1}. {student.name}</p>
              <p className="text-gray-600">0 points</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}