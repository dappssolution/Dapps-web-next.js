import { useRouter } from 'next/router';

export default function AdminNavbar() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };
  return (
    <header className="bg-white shadow flex items-center justify-between p-4">
      <div className="font-bold text-lg">Admin Dashboard</div>
      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-[#5A189A] to-[#040150] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
      >
        Logout
      </button>
    </header>
  );
}
