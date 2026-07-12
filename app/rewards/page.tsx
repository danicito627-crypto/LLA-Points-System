import Navbar from "../components/Navbar";

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-black">Rewards</h1>
        <p className="mt-2 text-gray-600">Redeemable rewards will show up here.</p>
        <div className="mt-8 bg-white rounded-lg shadow p-6 max-w-sm">
          <p className="font-semibold text-black">LLA Polo</p>
          <p className="text-gray-600">200 points</p>
        </div>
      </div>
    </main>
  );
}