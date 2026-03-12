import Link from 'next/link';

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-4 font-bold text-xl">Dapps Admin</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li><Link href="/admin/dashboard">Dashboard</Link></li>
          <li><Link href="/admin/projects">Projects</Link></li>
          <li><Link href="/admin/services">Services</Link></li>
          <li><Link href="/admin/leads">Leads</Link></li>
          <li><Link href="/admin/testimonials">Testimonials</Link></li>
          <li><Link href="/admin/blog">Blog</Link></li>
          <li><Link href="/admin/team">Team</Link></li>
          <li><Link href="/admin/admins">Admins</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
