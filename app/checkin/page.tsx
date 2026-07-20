"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { supabase } from "../../lib/supabase";

export default function CheckInPage() {
  const [status, setStatus] = useState<"scanning" | "checking" | "success" | "invalid" | "tooEarly" | "tooLate">("scanning");
  const [eventName, setEventName] = useState("");
  const [eventPoints, setEventPoints] = useState(0);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

    scanner.render(
      async (decodedText) => {
        scanner.clear();
        setStatus("checking");
        await handleScan(decodedText);
      },
      () => {
        // ignore ongoing scan attempts
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  async function handleScan(decodedText: string) {
    const parts = decodedText.split(":");
    const eventId = Number(parts[0]);
    const token = parts[1];

    if (!eventId || !token) {
      setStatus("invalid");
      return;
    }

    const tokenResult = await supabase
      .from("checkin_tokens")
      .select()
      .eq("event_id", eventId)
      .eq("token", token)
      .single();

    if (!tokenResult.data) {
      setStatus("invalid");
      return;
    }

    const now = new Date();
    const tokenExpiresAt = new Date(tokenResult.data.expires_at);

    if (now > tokenExpiresAt) {
      setStatus("invalid");
      return;
    }

    const eventResult = await supabase.from("events").select().eq("id", eventId).single();

    if (!eventResult.data) {
      setStatus("invalid");
      return;
    }

    const event = eventResult.data;

    if (event.starts_at) {
      const startsAt = new Date(event.starts_at);
      if (now < startsAt) {
        setEventName(event.name);
        setStatus("tooEarly");
        return;
      }
    }

    if (event.ends_at) {
      const endsAt = new Date(event.ends_at);
      if (now > endsAt) {
        setEventName(event.name);
        setStatus("tooLate");
        return;
      }
    }

    await supabase.from("check_ins").insert({
      student_id: 1,
      event_id: eventId,
    });

    setEventName(event.name);
    setEventPoints(event.points);
    setStatus("success");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-black mb-6">Scan to Check In</h1>

      {status === "scanning" && <div id="qr-reader" className="w-full max-w-sm"></div>}

      {status === "checking" && <p className="text-gray-600">Verifying code...</p>}

      {status === "success" && (
        <p className="text-2xl font-bold text-green-600 text-center">
          Checked in to {eventName}! +{eventPoints} points
        </p>
      )}

      {status === "invalid" && (
        <p className="text-xl font-bold text-red-600 text-center">
          This QR code is invalid or expired. Please scan the current code at the event.
        </p>
      )}

      {status === "tooEarly" && (
        <p className="text-xl font-bold text-orange-600 text-center">
          {eventName} hasn&apos;t started yet. Check-in isn&apos;t open until the event begins.
        </p>
      )}

      {status === "tooLate" && (
        <p className="text-xl font-bold text-orange-600 text-center">
          {eventName} has already ended. Check-in is now closed.
        </p>
      )}
    </main>
  );
}