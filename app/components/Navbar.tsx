export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black shadow-md">
      <a href="/" className="text-2xl font-bold text-[#CEB888] tracking-wide hover:opacity-80">
        LLA POINT TRACKER
      </a>
      <div className="flex gap-6 text-white items-center font-medium">
        <a href="/" className="hover:text-[#CEB888] transition-colors">Home</a>
        <a href="/dashboard" className="hover:text-[#CEB888] transition-colors">Dashboard</a>
        <a href="/events" className="hover:text-[#CEB888] transition-colors">Events</a>
        <a href="/leaderboard" className="hover:text-[#CEB888] transition-colors">Leaderboard</a>
        <a href="/rewards" className="hover:text-[#CEB888] transition-colors">Rewards</a>
      </div>
    </nav>
  );
}