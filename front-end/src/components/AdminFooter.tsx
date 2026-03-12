"use client";
export default function AdminFooter() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-4 mt-auto shadow-md">
      <span>&copy; {new Date().getFullYear()} Dapps Admin Panel. All rights reserved.</span>
    </footer>
  );
}
