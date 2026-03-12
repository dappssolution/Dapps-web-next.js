"use client";
import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4 font-bold text-xl">Dapps Admin</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
