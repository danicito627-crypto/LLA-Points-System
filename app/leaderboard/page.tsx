import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function LeaderboardPage() {
  const { data: students } = await supabase.from("students").select();
  const { data: checkIns } = await supabase.from("check_ins").select("*, events(points)");

  const studentsWithPoints = students?.map((student) => {
    const studentCheckIns = checkIns?.filter((c) => c.student_id === student.id) || [];
    const totalPoints = studentCheckIns.reduce((sum, c) => sum + c.events.points, 0);
    return { ...student, totalPoints };
  }) || [];

  const ranked = studentsWithPoints.sort((a, b) => b.totalPoints - a.totalPoints);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 py-10 md:px-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black" style={{ fontFamily: 'var(--font-oswald)' }}>
          Leaderboard
        </h1>
        <p className="mt-2 text-gray-600">Top LLA students by total points.</p>

        <div className="mt-8 flex flex-col gap-3">
          {ranked.map((student, index) => (
            <div key={student.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
              <p className="text-black font-medium">{index + 1}. {student.name}</p>
              <p className="text-[#CEB888] font-bold">{student.totalPoints} pts</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}