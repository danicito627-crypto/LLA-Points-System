import Navbar from "../components/Navbar";
import { supabase } from "../../lib/supabase";

export default async function EventsPage() {
  const { data: events, error } = await supabase.from("events").select();

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black">Events</h1>
        <p className="mt-2 text-gray-600">Upcoming events will show up here.</p>

        {error && (
          <p className="mt-4 text-red-600">Error: {error.message}</p>
        )}

        <div className="mt-8 flex flex-col gap-4 max-w-sm">
          {events?.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow p-6">
              <p className="font-semibold text-black">{event.name}</p>
              <p className="text-gray-600">Earn {event.points} points</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}