"use client";
import { ReactNode } from "react";
// import AdminSidebar from "@/components/AdminSidebar";
// import AdminTopBar from "@/components/AdminTopBar";
// import AdminFooter from "@/components/AdminFooter";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="bg-gray-100 w-full h-full m-0 p-0">
      <main className="flex-1 w-full h-full m-0 p-0">{children}</main>
    </div>
  );
}
