export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-black">Student Login</h1>

      <p className="mt-4 text-gray-600">
        (This is a placeholder login for now)
      </p>

      <a href="/dashboard" className="mt-8 rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
        Log In as Test Student
      </a>
    </main>
  );
}