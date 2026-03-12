"use client"

import { useState, useEffect } from "react"
import { categorySections } from "@/app/works/worksData";
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/contexts/LanguageContext"
import { useRef } from "react";
// ...existing code...

// Define project categories

type Category = "all" | "website" | "app" | "branding" | "social"

export default function WorkMain() {
  // State for fetched projects and loading/error
  const [projects, setProjects] = useState<Array<Record<string, any>>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const { language } = useLanguage();
  // State to track active category
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  // Removed unused mousePosition and hoveredProjectId
  // Removed local isLoading state, rely on global loading
  // ...existing code...

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle RTL support for this component
  useEffect(() => {
    const contentContainer = document.querySelector('.work-content');
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    }
  }, [language]);

  // Add useEffect to handle initial category from URL and history state
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const categoryParam = searchParams.get('category') as Category;
    // Check URL parameters first
    if (categoryParam) {
      setActiveCategory(categoryParam);
      // Store in history state
      window.history.replaceState({ category: categoryParam }, '');
    } else {
      // If no URL param, check history state
      const historyState = window.history.state;
      if (historyState?.category) {
        setActiveCategory(historyState.category);
      } else {
        setActiveCategory('all'); // Default to 'all' if nothing is set
      }
    }
  }, []);

  // Responsive items per page
  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 640) {
        setItemsPerPage(6)
      } else {
        setItemsPerPage(9)
      }
    }
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
  }, [])

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    // Update history state when category changes
    window.history.replaceState({ category }, '');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    window.requestAnimationFrame(() => {
      setMousePosition({ x, y });
    });
  }
  const handleProjectClick = (project: any) => {
    if (project.route) {
      router.push(`/works/${project.route}?category=${activeCategory}`);
    } else if (project.title && typeof project.title === "string") {
      const fallbackRoute = project.title.toLowerCase().replace(/\s+/g, '-');
      router.push(`/works/${fallbackRoute}?category=${activeCategory}`);
    }
  };

  // Sample project data for all categories

  // Filter projects by active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Category labels and counts
  const categories = [
    { id: "all", label: categorySections.all[language === "ar" ? "ar" : "en"].title, count: projects.length },
    { id: "website", label: categorySections.website[language === "ar" ? "ar" : "en"].title, count: projects.filter((p) => p.category === "website").length },
    { id: "branding", label: categorySections.branding[language === "ar" ? "ar" : "en"].title, count: projects.filter((p) => p.category === "branding").length },
    { id: "social", label: categorySections.social[language === "ar" ? "ar" : "en"].title, count: projects.filter((p) => p.category === "social").length },
  ];


  // ...existing code...

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/works")
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  // Helper for pagination range with ellipsis
  function getPaginationRange(current: number, total: number): (number | string)[] {
    const delta = 2;
    const range: (number | string)[] = [];
    for (let i = Math.max(1, current - delta); i <= Math.min(total, current + delta); i++) {
      range.push(i);
    }
    if (typeof range[0] === 'number' && range[0] > 2) {
      range.unshift('...');
      range.unshift(1);
    } else if (typeof range[0] === 'number' && range[0] === 2) {
      range.unshift(1);
    }
    if (typeof range[range.length - 1] === 'number' && range[range.length - 1] < total - 1) {
      range.push('...');
      range.push(total);
    } else if (typeof range[range.length - 1] === 'number' && range[range.length - 1] === total - 1) {
      range.push(total);
    }
    return range;
  }

  return (
    (
      <main ref={sectionRef} className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 font-poppins work-content ${language === 'ar' ? 'text-right' : ''}`}>
        {loading && <div className="text-center text-lg text-gray-500">Loading projects...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        {/* Navigation - Responsive with horizontal scrolling on mobile */}
        <nav className="w-full mb-6 md:mb-12">
          <div className="flex flex-wrap  justify-center gap-3 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id as Category)}
                className={`px-3 md:px-7 py-2 md:py-3 cursor-pointer rounded-[8px] text-[12px] md:text-sm whitespace-nowrap border border-gray-300 transition-colors ${
                  activeCategory === category.id ? "bg-[#000539] text-white" : "text-[#000539] hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Section Title and Description */}
        <div className="mb-8 md:mb-14">
          <h1 className="text-[25px] md:text-[48px] font-medium inline-flex items-start">
            {categorySections[activeCategory][language === "ar" ? "ar" : "en"].title}
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            {categorySections[activeCategory][language === "ar" ? "ar" : "en"].description}
          </p>
        </div>

        {/* Projects Grid - Strict 3x3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {paginatedProjects.map((project) => (
            <div
              key={project._id || project.id}
              className="project-card sm:mb-4 bg-white border border-gray-100 cursor-pointer rounded-[8px] shadow-sm transition-shadow hover:shadow-lg p-3 md:p-4"
              onClick={() => handleProjectClick(project)}
            >
              <div
                className="mb-3 md:mb-4 overflow-hidden relative rounded-[8px]"
                // Removed mouse events for hover effect
              >
                {project.featuredImage && (
                  <Image src={project.featuredImage} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg text-[#1a2236]">{project.title}</div>
                <div className="text-sm text-gray-600">{project.shortDesc}</div>
                <div className="text-xs text-gray-400">Category: {project.category}</div>
                <div className="text-xs text-gray-400">Client: {project.client}</div>
                <div className="text-xs text-gray-400">Technologies: {project.technologies}</div>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">Live Site</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">GitHub</a>}
                {project.demoVideo && <a href={project.demoVideo} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">Demo Video</a>}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8">
            <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white ">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#120E43] hover:bg-[#000000]'}`}
              >
                <span className="text-lg">&#60;</span>  
              </button>
              {getPaginationRange(currentPage, totalPages).map((page, idx) =>
                typeof page === 'number' ? (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-base font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-[#000000] text-white shadow'
                        : 'bg-indigo-50 text-[#120E43] hover:bg-indigo-100'
                    }`}
                    style={{ minWidth: 32 }}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={"ellipsis-" + idx} className="px-2 text-gray-400 select-none">...</span>
                )
              )}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                <span className="text-lg">&#62;</span>
              </button>
            </div>
          </div>
        )}
      </main>
    )
  );
}
