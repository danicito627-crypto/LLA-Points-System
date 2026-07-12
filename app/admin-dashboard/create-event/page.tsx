"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const router = useRouter();

  async function handleCreate() {
    await supabase.from("events").insert({
      name: name,
      points: Number(points),
    });

    router.push("/events");
  }

  return (
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

        <button
          onClick={handleCreate}
          className="w-full rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Create Event
        </button>
      </div>
    </main>
  );
}