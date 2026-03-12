"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/api";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const res = await fetch(apiUrl("/api/auth/login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("adminToken", data.token);
      router.push("/admin/dashboard");
    } else {
      setError(data.error || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0c29]">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center bg-transparent">
        {/* Left: Logo and Brand */}
        <div className="flex-1 flex flex-col items-center justify-center py-16 md:py-0">
          <img src="/images/works/faq.jpeg" alt="FAQ" className="w-48 h-48 mb-8 rounded-xl shadow-lg" />
          <span className="text-white text-3xl md:text-4xl font-bold tracking-wide font-montserrat">Dapps Solutions</span>
        </div>
        {/* Divider */}
        <div className="hidden md:block w-px h-96 bg-[#E1AAFF]/30 mx-8" />
        {/* Right: Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <form onSubmit={handleLogin} className="w-full max-w-md bg-[#1a2236] rounded-2xl shadow-xl p-10 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-center text-[#E1AAFF] mb-2">Welcome</h2>
            <p className="text-center text-[#E1AAFF]/80 mb-6 tracking-wide">Please login to Admin Dashboard.</p>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-3 rounded-lg border border-[#E1AAFF] bg-[#232946] text-white focus:outline-none focus:border-[#5A189A] text-lg placeholder-[#E1AAFF]/70"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="px-4 py-3 rounded-lg border border-[#E1AAFF] bg-[#232946] text-white focus:outline-none focus:border-[#5A189A] text-lg placeholder-[#E1AAFF]/70"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className="bg-[#ff6600] text-white font-semibold py-3 rounded-lg hover:scale-105 transition text-lg tracking-wide">Login</button>
            <div className="text-center mt-2">
              <a href="#" className="text-[#E1AAFF] hover:text-[#ff6600] transition text-sm">Forgotten your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
