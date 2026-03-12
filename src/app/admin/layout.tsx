"use client";
// import AdminSidebar from "@/components/AdminSidebar";
// import AdminTopBar from "@/components/AdminTopBar";
// import AdminFooter from "@/components/AdminFooter";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-gray-100 w-full h-full m-0 p-0">
      <main className="flex-1 w-full h-full m-0 p-0">{children}</main>
    </div>
  );
}
