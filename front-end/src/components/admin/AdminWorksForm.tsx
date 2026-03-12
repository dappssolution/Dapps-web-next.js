import { useState, useEffect } from "react";
import { apiUrl } from "@/lib/api";

export interface WorkFormPayload {
  _id?: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies?: string[];
  projectLink?: string;
}

interface WorkFormProps {
  onWorkAdded: () => void;
  initialData?: WorkFormPayload;
  isEdit?: boolean;
  onEdit?: (work: WorkFormPayload) => Promise<void>;
}

export default function AdminWorksForm({ onWorkAdded, initialData, isEdit, onEdit }: WorkFormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "website",
    image: "",
    technologies: "",
    projectLink: ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "website",
        image: initialData.image || "",
        technologies: Array.isArray(initialData.technologies) ? initialData.technologies.join(", ") : initialData.technologies || "",
        projectLink: initialData.projectLink || ""
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setForm({ ...form, image: "" }); // Clear image URL if uploading
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      let imageUrl = form.image;
      if (imageFile) {
        // Upload image to backend or cloud storage
        const data = new FormData();
        data.append("file", imageFile);
        const uploadRes = await fetch(apiUrl("/api/upload"), {
          method: "POST",
          body: data
        });
        if (!uploadRes.ok) throw new Error("Image upload failed");
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }
      const payload: WorkFormPayload = {
        ...form,
        image: imageUrl,
        technologies: form.technologies.split(",").map(t => t.trim()).filter(Boolean)
      };
      if (isEdit && onEdit && initialData && initialData._id) {
        // Edit mode: call onEdit
        await onEdit({ ...payload, _id: initialData._id });
      } else {
        // Add mode: POST
        const res = await fetch(apiUrl("/api/works"), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Failed to add work");
        setForm({ title: "", description: "", category: "website", image: "", technologies: "", projectLink: "" });
        setImageFile(null);
        onWorkAdded();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 flex flex-col gap-6 border border-[#e0e7ef]">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Title</label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required className="px-3 py-2 rounded border border-[#e0e7ef]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="px-3 py-2 rounded border border-[#e0e7ef] min-h-[80px]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Category</label>
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required className="px-3 py-2 rounded border border-[#e0e7ef]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="px-3 py-2 rounded border border-[#e0e7ef]" />
        <span className="text-xs text-gray-500">or paste an image URL below</span>
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="px-3 py-2 rounded border border-[#e0e7ef]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Technologies</label>
        <input name="technologies" value={form.technologies} onChange={handleChange} placeholder="Technologies (comma separated)" className="px-3 py-2 rounded border border-[#e0e7ef]" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Project Link</label>
        <input name="projectLink" value={form.projectLink} onChange={handleChange} placeholder="Project Link" className="px-3 py-2 rounded border border-[#e0e7ef]" />
      </div>
      <button type="submit" disabled={loading} className="bg-[#00bcd4] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#ff9800] transition-colors">{isEdit ? 'Update Work' : 'Add Work'}</button>
      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </form>
  );
}
