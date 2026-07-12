"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { supabase } from "../../lib/supabase";

export default function CheckInPage() {
  const [status, setStatus] = useState<"scanning" | "checking" | "success" | "invalid">("scanning");
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
    const expiresAt = new Date(tokenResult.data.expires_at);

    if (now > expiresAt) {
      setStatus("invalid");
      return;
    }

    const eventResult = await supabase.from("events").select().eq("id", eventId).single();

    if (!eventResult.data) {
      setStatus("invalid");
      return;
    }

    await supabase.from("check_ins").insert({
      student_id: 1,
      event_id: eventId,
    });

    setEventName(eventResult.data.name);
    setEventPoints(eventResult.data.points);
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
        </p>)}

      {status === "invalid" && (
        <p className="text-xl font-bold text-red-600 text-center">
          This QR code is invalid or expired. Please scan the current code at the event.
        </p>
      )}
    </main>
  );
}