"use client";
import { useState } from "react";
import { apiUrl } from "@/lib/api";

const categories = [
  "Web Development",
  "Mobile App",
  "UI/UX Design",
  "AI Automation",
  "Branding",
];

export default function AdminAddProject() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [client, setClient] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [technologies, setTechnologies] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string>("");
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [demoVideo, setDemoVideo] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [featured, setFeatured] = useState(false);
  const [showOnHomepage, setShowOnHomepage] = useState(false);
  const [displayOrder, setDisplayOrder] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Auto-generate slug from title (robust)
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    // Remove special chars, spaces, and ensure uniqueness (for demo, just basic slug)
    setSlug(
      value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .replace(/--+/g, "-")
    );
  };

  // Featured image preview
  const handleFeaturedImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFeaturedImage(file);
      setFeaturedImagePreview(URL.createObjectURL(file));
    }
  };

  // Gallery images preview
  const handleGalleryImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setGalleryPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Full description handler
  const handleFullDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFullDesc(e.target.value);
  };

  // Form submit handler with robust validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Validation
    if (!title.trim()) {
      setError("Project title is required.");
      return;
    }
    if (!slug.trim()) {
      setError("Slug is required.");
      return;
    }
    if (!shortDesc.trim()) {
      setError("Short description is required.");
      return;
    }
    if (!fullDesc.trim()) {
      setError("Full description is required.");
      return;
    }
    if (!client.trim()) {
      setError("Client name is required.");
      return;
    }
    if (!category.trim()) {
      setError("Project category is required.");
      return;
    }
    if (!technologies.trim()) {
      setError("Technologies used are required.");
      return;
    }
    if (!featuredImage) {
      setError("Featured image is required.");
      return;
    }
    if (liveUrl && !/^https?:\/\//.test(liveUrl)) {
      setError("Live URL must be a valid http(s) link.");
      return;
    }
    if (githubUrl && !/^https?:\/\//.test(githubUrl)) {
      setError("GitHub URL must be a valid http(s) link.");
      return;
    }
    if (demoVideo && !/^https?:\/\//.test(demoVideo)) {
      setError("Demo video link must be a valid http(s) link.");
      return;
    }
    // API call to save project
    try {
      const res = await fetch(apiUrl("/api/works"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description: fullDesc,
          image: featuredImagePreview // For demo, send preview URL; for real, upload image and send URL/path
        })
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save project.");
        return;
      }
      setSuccess("Project saved successfully!");
    } catch {
      setError("Server error. Could not save project.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 font-montserrat">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#E1AAFF]">Add Project</h1>
      <form className="w-full max-w-3xl bg-[#1a2236]/80 rounded-2xl shadow-xl p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">Project Title *</label>
          <input type="text" value={title} onChange={handleTitleChange} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" required />
          <label className="font-semibold text-[#E1AAFF]">Slug / URL Path</label>
          <input type="text" value={slug} readOnly className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" />
          <label className="font-semibold text-[#E1AAFF]">Short Description *</label>
          <textarea value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" required />
          <label className="font-semibold text-[#E1AAFF]">Full Description *</label>
          <textarea
            value={fullDesc}
            onChange={handleFullDescChange}
            className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat min-h-[150px]"
            required
          />
        </div>
        {/* Project Details */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">Client Name *</label>
          <input type="text" value={client} onChange={(e) => setClient(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" required />
          <label className="font-semibold text-[#E1AAFF]">Project Category *</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <label className="font-semibold text-[#E1AAFF]">Technologies Used *</label>
          <input type="text" value={technologies} onChange={(e) => setTechnologies(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" placeholder="Comma separated" required />
        </div>
        {/* Media Upload */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">Featured Image *</label>
          <input type="file" accept="image/*" onChange={handleFeaturedImage} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" required />
          {featuredImagePreview && <img src={featuredImagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-xl mt-2" />}
          <label className="font-semibold text-[#E1AAFF]">Project Gallery Images</label>
          <input type="file" accept="image/*" multiple onChange={handleGalleryImages} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" />
          <div className="flex gap-2 mt-2">
            {galleryPreviews.map((src, idx) => (
              <img key={idx} src={src} alt="Gallery Preview" className="w-20 h-20 object-cover rounded-xl" />
            ))}
          </div>
          <label className="font-semibold text-[#E1AAFF]">Demo Video Link</label>
          <input type="url" value={demoVideo} onChange={(e) => setDemoVideo(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" placeholder="YouTube/Vimeo URL" />
        </div>
        {/* Project Links */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">Live Website URL</label>
          <input type="url" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" placeholder="https://" />
          <label className="font-semibold text-[#E1AAFF]">GitHub Repository URL</label>
          <input type="url" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" placeholder="https://" />
        </div>
        {/* SEO Fields */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">SEO Title</label>
          <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" />
          <label className="font-semibold text-[#E1AAFF]">Meta Description</label>
          <textarea value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" />
          <label className="font-semibold text-[#E1AAFF]">Keywords</label>
          <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" placeholder="Comma separated" />
        </div>
        {/* Display Controls */}
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-[#E1AAFF]">Featured Project</label>
          <input type="checkbox" checked={featured} onChange={() => setFeatured(!featured)} className="w-6 h-6" />
          <label className="font-semibold text-[#E1AAFF]">Show on Homepage</label>
          <input type="checkbox" checked={showOnHomepage} onChange={() => setShowOnHomepage(!showOnHomepage)} className="w-6 h-6" />
          <label className="font-semibold text-[#E1AAFF]">Display Order</label>
          <input type="number" value={displayOrder} onChange={(e) => setDisplayOrder(Number(e.target.value))} className="px-4 py-2 rounded-lg bg-[#24243e] text-white font-montserrat" min={0} />
        </div>
        {/* Error/Success */}
        {error && <div className="text-red-400 font-montserrat">{error}</div>}
        {success && <div className="text-green-400 font-montserrat">{success}</div>}
        <button type="submit" className="bg-[#E1AAFF] text-[#1a2236] px-6 py-2 rounded-lg font-semibold hover:bg-[#5A189A] transition font-montserrat mt-4">Save Project</button>
      </form>
    </div>
  );
}
