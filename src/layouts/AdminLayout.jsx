import AdminSidebar from '../components/admin/Sidebar';
import AdminNavbar from '../components/admin/AdminNavbar';
import ProtectedRoute from '../components/admin/ProtectedRoute';

export default function AdminLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminNavbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
