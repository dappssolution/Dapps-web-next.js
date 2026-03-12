"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { categorySections } from "@/app/works/worksData"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

type Category = "all" | "website" | "app" | "branding" | "social"

interface Project {
  _id?: string
  id?: string
  title: string
  shortDesc?: string
  description?: string
  category: string
  technologies?: string | string[]
  client?: string
  featuredImage?: string
  liveUrl?: string
  githubUrl?: string
  demoVideo?: string
  route?: string
}

const normalizeTechnologies = (project: Project): string[] => {
  if (!project.technologies) return []
  if (Array.isArray(project.technologies)) return project.technologies
  return project.technologies.split(",").map((tech) => tech.trim()).filter(Boolean)
}

  const getPaginationRange = (current: number, total: number): (number | string)[] => {
    const delta = 2
    const range: (number | string)[] = []
    for (let i = Math.max(1, current - delta); i <= Math.min(total, current + delta); i++) {
      range.push(i)
    }
    const firstEntry = range[0]
    if (typeof firstEntry === "number" && firstEntry > 2) {
      range.unshift("...")
      range.unshift(1)
    } else if (typeof firstEntry === "number" && firstEntry === 2) {
      range.unshift(1)
    }
    const lastEntry = range[range.length - 1]
    if (typeof lastEntry === "number" && lastEntry < total - 1) {
      range.push("...")
      range.push(total)
    } else if (typeof lastEntry === "number" && lastEntry === total - 1) {
      range.push(total)
    }
    return range
  }

export default function WorkMain() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(9)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const contentContainer = document.querySelector('.work-content')
    if (contentContainer) {
      contentContainer.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr')
    }
  }, [language])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const categoryParam = searchParams.get('category') as Category
    if (categoryParam) {
      setActiveCategory(categoryParam)
      window.history.replaceState({ category: categoryParam }, '')
    } else {
      const historyState = window.history.state
      if (historyState?.category) {
        setActiveCategory(historyState.category)
      } else {
        setActiveCategory('all')
      }
    }
  }, [])

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 6 : 9)
    }
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [currentPage])

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:5000/api/works')
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load projects.')
        setLoading(false)
      })
  }, [])

  const uniqueTechnologies = new Set<string>()
  projects.forEach((project) => {
    normalizeTechnologies(project).forEach((tech) => uniqueTechnologies.add(tech))
  })

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const categories = [
    {
      id: 'all',
      label: categorySections.all[language === 'ar' ? 'ar' : 'en'].title,
      count: projects.length,
    },
    {
      id: 'website',
      label: categorySections.website[language === 'ar' ? 'ar' : 'en'].title,
      count: projects.filter((project) => project.category === 'website').length,
    },
    {
      id: 'branding',
      label: categorySections.branding[language === 'ar' ? 'ar' : 'en'].title,
      count: projects.filter((project) => project.category === 'branding').length,
    },
    {
      id: 'social',
      label: categorySections.social[language === 'ar' ? 'ar' : 'en'].title,
      count: projects.filter((project) => project.category === 'social').length,
    },
  ]

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category)
    window.history.replaceState({ category }, '')
  }

  const handleProjectClick = (project: Project) => {
    if (project.route) {
      router.push(`/works/${project.route}?category=${activeCategory}`)
    } else if (project.title) {
      const fallbackRoute = project.title.toLowerCase().replace(/\s+/g, '-')
      router.push(`/works/${fallbackRoute}?category=${activeCategory}`)
    }
  }

  return (
    <main
      ref={sectionRef}
      className={`container mx-auto px-4 py-10 md:py-20 w-full h-auto md:px-16 lg:px-32 font-poppins work-content ${
        language === 'ar' ? 'text-right' : ''
      }`}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
          <span className="text-xs text-gray-500">Total Works</span>
          <span className="text-2xl font-bold text-[#00bcd4]">{projects.length}</span>
          <span className="text-xs text-green-600">+{projects.length} this month</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
          <span className="text-xs text-gray-500">Active Categories</span>
          <span className="text-2xl font-bold text-[#ff9800]">
            {new Set(projects.map((project) => project.category)).size}
          </span>
          <span className="text-xs text-green-600">+2 new</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
          <span className="text-xs text-gray-500">Total Technologies</span>
          <span className="text-2xl font-bold text-[#232946]">{uniqueTechnologies.size}</span>
          <span className="text-xs text-green-600">+5 new</span>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 border border-[#e0e7ef]">
          <span className="text-xs text-gray-500">Page Views</span>
          <span className="text-2xl font-bold text-[#00bcd4]">284K</span>
          <span className="text-xs text-green-600">+24.7% vs last month</span>
        </div>
      </section>

      {loading && <div className="text-center text-lg text-gray-500">Loading projects...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      <nav className="w-full mb-6 md:mb-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id as Category)}
              className={`px-3 md:px-7 py-2 md:py-3 cursor-pointer rounded-[8px] text-[12px] md:text-sm whitespace-nowrap border border-gray-300 transition-colors ${
                activeCategory === category.id
                  ? "bg-[#000539] text-white"
                  : "text-[#000539] hover:bg-gray-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="mb-8 md:mb-14">
        <h1 className="text-[25px] md:text-[48px] font-medium inline-flex items-start">
          {categorySections[activeCategory][language === 'ar' ? 'ar' : 'en'].title}
        </h1>
        <p className="mt-2 text-base md:text-lg text-gray-600">
          {categorySections[activeCategory][language === 'ar' ? 'ar' : 'en'].description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {paginatedProjects.map((project) => {
          const techList = normalizeTechnologies(project)
          return (
            <div
              key={project._id || project.id}
              className="project-card sm:mb-4 bg-white border border-gray-100 cursor-pointer rounded-[8px] shadow-sm transition-shadow hover:shadow-lg p-3 md:p-4"
              onClick={() => handleProjectClick(project)}
            >
              <div className="mb-3 md:mb-4 overflow-hidden relative rounded-[8px]">
                {project.featuredImage && (
                  <Image src={project.featuredImage} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg text-[#1a2236]">{project.title}</div>
                <div className="text-sm text-gray-600">{project.shortDesc}</div>
                <div className="text-xs text-gray-400">Category: {project.category}</div>
                <div className="text-xs text-gray-400">Client: {project.client}</div>
                {techList.length > 0 && (
                  <div className="text-xs text-gray-400">Technologies: {techList.join(', ')}</div>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">
                    Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">
                    GitHub
                  </a>
                )}
                {project.demoVideo && (
                  <a href={project.demoVideo} target="_blank" rel="noopener" className="text-xs text-blue-600 underline">
                    Demo Video
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8">
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-[#120E43] hover:bg-[#000000]'
              }`}
            >
              <span className="text-lg">&lt;</span>
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
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">
                  ...
                </span>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-2 py-1 text-sm rounded transition-colors ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <span className="text-lg">&gt;</span>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
