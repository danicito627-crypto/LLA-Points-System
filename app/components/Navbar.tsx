export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <a href="/" className="text-xl font-bold text-black hover:underline">
        LLA Point Tracker
      </a>
      <div className="flex gap-6 text-black items-center">
        <a href="/" className="hover:underline">Home</a>
        <a href="/dashboard" className="hover:underline">Dashboard</a>
        <a href="/events" className="hover:underline">Events</a>
        <a href="/leaderboard" className="hover:underline">Leaderboard</a>
        <a href="/rewards" className="hover:underline">Rewards</a>
      </div>
    </nav>
  );
}