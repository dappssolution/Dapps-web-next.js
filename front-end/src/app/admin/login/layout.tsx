"use client";

import AdminLoginNavbar from "@/components/AdminLoginNavbar";
import AdminLoginFooter from "@/components/AdminLoginFooter";

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
      <body
        className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
        style={{ height: '100%', margin: 0, padding: 0, overflow: 'hidden' }}
      >
        <style>{`
          html, body { height: 100%; margin: 0; padding: 0; overflow: hidden; }
          ::-webkit-scrollbar { display: none; }
          body { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <AdminLoginNavbar />
        <div className="min-h-screen flex items-center justify-center w-full h-full m-0 p-0">
          {children}
        </div>
        <AdminLoginFooter />
      </body>
    </html>
  );
}
