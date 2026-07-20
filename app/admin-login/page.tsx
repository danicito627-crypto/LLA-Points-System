// admin login
// "use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleLogin() {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin-dashboard");
    } else {
      setError(true);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-black">Organization Login</h1>
      <p className="mt-4 text-gray-600">Enter the admin password to continue</p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-6 border rounded px-4 py-2 w-full max-w-xs"
        placeholder="Admin password"
      />

      {error && (
        <p className="mt-2 text-red-600 text-sm">Incorrect password. Try again.</p>
      )}

      <button
        onClick={handleLogin}
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
      >
        Log In
      </button>
    </main>
  );
}