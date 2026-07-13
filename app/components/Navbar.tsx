"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md relative">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-[#CEB888] tracking-wide hover:opacity-80" style={{ fontFamily: 'var(--font-oswald)' }}>
          LLA POINT TRACKER
        </a>

        <div className="hidden md:flex gap-6 text-white items-center font-medium">
          <a href="/" className="hover:text-[#CEB888] transition-colors">Home</a>
          <a href="/dashboard" className="hover:text-[#CEB888] transition-colors">Dashboard</a>
          <a href="/events" className="hover:text-[#CEB888] transition-colors">Events</a>
          <a href="/leaderboard" className="hover:text-[#CEB888] transition-colors">Leaderboard</a>
          <a href="/rewards" className="hover:text-[#CEB888] transition-colors">Rewards</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-black px-6 pb-4 gap-4 text-white font-medium">
          <a href="/" className="hover:text-[#CEB888]" onClick={() => setOpen(false)}>Home</a>
          <a href="/dashboard" className="hover:text-[#CEB888]" onClick={() => setOpen(false)}>Dashboard</a>
          <a href="/events" className="hover:text-[#CEB888]" onClick={() => setOpen(false)}>Events</a>
          <a href="/leaderboard" className="hover:text-[#CEB888]" onClick={() => setOpen(false)}>Leaderboard</a>
          <a href="/rewards" className="hover:text-[#CEB888]" onClick={() => setOpen(false)}>Rewards</a>
        </div>
      )}
    </nav>
  );
}