"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";
import AdminGuard from "../../components/AdminGuard";

export default function CreateEventPage() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const router = useRouter();

  async function handleCreate() {
    await supabase.from("events").insert({
      name: name,
      points: Number(points),
      starts_at: startsAt ? new Date(startsAt).toISOString() : null,
      ends_at: endsAt ? new Date(endsAt).toISOString() : null,
    });

    router.push("/events");
  }

  return (
    <AdminGuard>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-black mb-6">Create New Event</h1>

        <div className="bg-white rounded-lg shadow p-6 w-full max-w-sm">
          <label className="block text-sm text-gray-600 mb-1">Event Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="Resume Workshop"
          />

          <label className="block text-sm text-gray-600 mb-1">Points</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
            placeholder="10"
          />

          <label className="block text-sm text-gray-600 mb-1">Starts At (optional)</label>
          <input
            type="datetime-local"
            value={startsAt}
            onChange={(e) => setStartsAt(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <label className="block text-sm text-gray-600 mb-1">Ends At (optional)</label>
          <input
            type="datetime-local"
            value={endsAt}
            onChange={(e) => setEndsAt(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-4"
          />

          <button
            onClick={handleCreate}
            className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Create Event
          </button>
        </div>
      </main>
    </AdminGuard>
  );
}