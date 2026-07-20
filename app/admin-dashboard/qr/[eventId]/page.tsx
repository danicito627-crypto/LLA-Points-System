"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { supabase } from "../../../../lib/supabase";
import AdminGuard from "../../../components/AdminGuard";

export default function QRPage({ params }: { params: Promise<{ eventId: string }> }) {
  const [eventId, setEventId] = useState<number | null>(null);
  const [eventName, setEventName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    params.then(async (p) => {
      const id = Number(p.eventId);
      setEventId(id);

      const { data } = await supabase.from("events").select().eq("id", id).single();
      if (data) {
        setEventName(data.name);
      }
    });
  }, [params]);

  useEffect(() => {
    if (eventId === null) return;

    async function generateToken() {
      const newToken = Math.random().toString(36).substring(2, 15);
      const expiresAt = new Date(Date.now() + 30000).toISOString();

      await supabase.from("checkin_tokens").insert({
        event_id: eventId,
        token: newToken,
        expires_at: expiresAt,
      });

      setToken(newToken);
    }

    generateToken();
    const interval = setInterval(generateToken, 30000);

    return () => clearInterval(interval);
  }, [eventId]);

  const checkInUrl = eventId ? `${eventId}:${token}` : "";

  return (
    <AdminGuard>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-black">{eventName}</h1>
        <p className="mt-2 text-gray-600">Students scan this to check in</p>
        <p className="mt-1 text-sm text-gray-400">Code refreshes every 30 seconds</p>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          {token && <QRCodeSVG value={checkInUrl} size={200} />}
        </div>
      </main>
    </AdminGuard>
  );
}