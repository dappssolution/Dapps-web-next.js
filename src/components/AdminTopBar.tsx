"use client";
import { useRouter } from "next/navigation";

export default function AdminTopBar() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };
  return (
    <header
      className="bg-[#1a2236] border-b border-[#5A189A]/30 shadow flex items-center justify-between w-full max-w-full m-0 p-0"
      style={{
        overflow: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <style>{`
        header::-webkit-scrollbar { display: none; }
        header { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="flex items-center gap-2 md:gap-3">
        <img
          src="/dapps-logo.png"
          alt="Admin Logo"
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <span className="text-[#E1AAFF] font-nohemi text-base md:text-xl lg:text-2xl font-bold tracking-wide whitespace-nowrap">
          Admin Dashboard
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#ff6600] text-white px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold hover:scale-105 transition text-xs md:text-base lg:text-lg"
      >
        Logout
      </button>
    </header>
  );
}
