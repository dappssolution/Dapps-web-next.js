"use client";
import AdminWorksForm from './AdminWorksForm';
import { useRef, useState, useEffect } from 'react';

interface Work {
  _id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies?: string[];
  projectLink?: string;
}

export default function AdminDashboard() {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);
  const [editWork, setEditWork] = useState<Work | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const features = [
    "Works/Projects Management",
    "Client Management",
    "Task Assignment & Tracking",
    "Performance Analytics",
    "Invoicing & Payments",
    "Team Access Control",
    "Notifications & Activity Feed",
    "Calendar & Scheduling",
    "File & Asset Management",
    "Settings & Customization"
  ];
  const fetchWorks = () => {
    setLoading(true);
    fetch("http://localhost:5000/api/works")
      .then(res => res.json())
      .then(data => {
        setWorks(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load works.");
        setLoading(false);
      });
  };

  const handleEdit = (work: any) => {
    setEditWork(work);
    setShowEditModal(true);
  };

  const handleUpdate = async (updatedWork: any) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`http://localhost:5000/api/works/${updatedWork._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedWork)
      });
      if (!res.ok) throw new Error("Failed to update work");
      setShowEditModal(false);
      setEditWork(null);
      fetchWorks();
    } catch (err) {
      setError("Failed to update work.");
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this work?")) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/works/${id}`, {
        method: "DELETE"
      });
      if (!res.ok) throw new Error("Failed to delete work");
      fetchWorks();
    } catch (err) {
      setError("Failed to delete work.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWorks();
  }, []);
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#232946] font-poppins flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#232946] text-white flex flex-col py-8 px-4 shadow-lg min-h-screen">
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-[#00bcd4] rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">DS</div>
          <span className="text-2xl font-bold tracking-widest">Dashboard</span>
        </div>
        <nav className="flex-1">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`my-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${activeFeature === idx ? "bg-[#00bcd4] text-[#232946] font-bold" : "hover:bg-[#1a2236] text-[#f8fafc]"}`}
              onClick={() => setActiveFeature(idx)}
            >
              {feature}
            </div>
          ))}
        </nav>
        <div className="mt-10 flex items-center gap-3">
          <div className="bg-[#1a2236] rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">A</div>
          <span>Admin</span>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back, Admin!</h1>
          <button className="bg-[#00bcd4] text-[#232946] px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#ff9800] transition-colors">+ New Work</button>
        </header>
        {/* Dashboard Widgets */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
            <span className="text-xs text-gray-500">Total Works</span>
            <span className="text-2xl font-bold text-[#00bcd4]">{works.length}</span>
            <span className="text-xs text-green-600">+{works.length} this month</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
            <span className="text-xs text-gray-500">Active Categories</span>
            <span className="text-2xl font-bold text-[#ff9800]">{[...new Set(works.map(w => w.category))].length}</span>
            <span className="text-xs text-green-600">+2 new</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
            <span className="text-xs text-gray-500">Total Technologies</span>
            <span className="text-2xl font-bold text-[#232946]">{[...new Set(works.flatMap(w => w.technologies || []))].length}</span>
            <span className="text-xs text-green-600">+5 new</span>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
            <span className="text-xs text-gray-500">Page Views</span>
            <span className="text-2xl font-bold text-[#00bcd4]">284K</span>
            <span className="text-xs text-green-600">+24.7% vs last month</span>
          </div>
        </section>
        {/* Overview & Works Section */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Overview Chart Placeholder */}
          <div className="bg-white rounded-xl shadow p-8 col-span-2 border border-[#e0e7ef]">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <div className="h-64 flex items-center justify-center text-gray-400 text-lg">[Chart Coming Soon]</div>
          </div>
          {/* Works List */}
          <div className="bg-white rounded-xl shadow p-8 border border-[#e0e7ef]">
            <h2 className="text-xl font-bold mb-4">All Works</h2>
            {loading && <div className="text-center text-lg text-gray-400">Loading works...</div>}
            {error && <div className="text-center text-red-400">{error}</div>}
            <div className="flex flex-col gap-6">
              {works.length === 0 && !loading && (
                <div className="text-center text-gray-400 text-lg">No works found.</div>
              )}
              {works.map((work: Work) => (
                <div key={work._id} className="bg-[#f8fafc] border border-[#e0e7ef] rounded-lg p-6 flex flex-col gap-2 shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="font-bold text-lg text-[#00bcd4]">{work.title}</div>
                  </div>
                  <div className="text-gray-700 text-sm mb-1 line-clamp-3">{work.description}</div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-[#e0e7ef] text-[#00bcd4] px-2 py-1 rounded">Category: {work.category}</span>
                    <span className="bg-[#e0e7ef] text-[#ff9800] px-2 py-1 rounded">Tech: {work.technologies?.join(', ')}</span>
                  </div>
                  {work.image && <img src={work.image} alt={work.title} className="w-full h-32 object-cover rounded-md mt-2 border border-[#e0e7ef]" />}
                  {work.projectLink && <a href={work.projectLink} target="_blank" rel="noopener" className="text-[#4caf50] underline mt-2 text-sm">View Project</a>}
                  <div className="flex gap-2 mt-4 self-end">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-lg text-sm shadow-md transition-all flex items-center gap-2"
                      onClick={() => handleEdit(work)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white px-4 py-2 rounded-lg text-sm shadow-md transition-all flex items-center gap-2"
                      onClick={() => handleDelete(work._id)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Edit Modal */}
            {showEditModal && editWork && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl" onClick={() => setShowEditModal(false)}>&times;</button>
                  <h2 className="text-xl font-bold mb-4 text-[#00bcd4]">Edit Work</h2>
                  <AdminWorksForm
                    onWorkAdded={() => { setShowEditModal(false); setEditWork(null); fetchWorks(); }}
                    initialData={editWork}
                    isEdit={true}
                    onEdit={handleUpdate}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
