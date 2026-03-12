"use client";
import React from "react";

const Sidebar = () => (
  <aside className="w-64 bg-gray-900 text-white h-screen fixed">
    <div className="p-4 font-bold text-xl">Dapps Admin</div>
    <nav>
      <ul className="space-y-2 p-4">
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Projects</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Services</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Contact Leads</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Testimonials</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Blog Posts</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Team Profiles</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Admin Users</li>
        <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Settings</li>
      </ul>
    </nav>
  </aside>
);

const TopBar = () => (
  <header className="ml-64 flex items-center justify-between bg-white shadow p-4">
    <div className="font-bold text-lg">Dashboard Overview</div>
    <div className="flex items-center space-x-4">
      <span>Admin</span>
      <img src="/dapps-logo.png" alt="Admin" className="w-8 h-8 rounded-full" />
    </div>
  </header>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 ml-64 bg-gray-100 w-full h-full m-0 p-0">
      <TopBar />
      <main className="w-full h-full m-0 p-0">{children}</main>
    </div>
  </div>
);

export default DashboardLayout;
