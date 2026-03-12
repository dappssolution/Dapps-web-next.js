"use client";
import Image from "next/image";

export default function AdminLoginNavbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#1a2236] border-b border-[#5A189A]/30 shadow">
      <div className="flex items-center gap-3">
        <Image
          src="/images/works/faq.jpeg"
          alt="FAQ"
          width={40}
          height={40}
          className="w-10 h-10 rounded-lg object-cover"
        />
        <span className="text-[#E1AAFF] font-nohemi text-xl font-bold tracking-wide">Admin Login</span>
      </div>
    </nav>
  );
}
