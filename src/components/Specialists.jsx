import { useState, useRef, useEffect } from "react"

const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Chen, MD, MBA",
    title: "Chief of Clinical Research, Rheumatologist",
    image: "/images/specialist-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne, MD",
    title: "Senior Immunologist, RA Specialist",
    image: "/images/specialist-2.jpg",
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez, MD",
    title: "Lead Consultant, Pediatric Rheumatology",
    image: "/images/specialist-3.jpg",
  },
]

function Specialists() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.firstElementChild?.offsetWidth || 280
      const gap = 24
      const index = Math.round(scrollLeft / (cardWidth + gap))
      setActiveIndex(Math.min(index, specialists.length - 1))
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.firstElementChild?.offsetWidth || 280
    const gap = 24
    container.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep">
            Meet Our<br />
            <span className="text-navy-muted/40">Specialists</span>
          </h2>
          <p className="max-w-xs text-sm text-navy-muted pb-2">
            Our board-certified experts represent the global frontier of autoimmune research and clinical care.
          </p>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {specialists.map((doc) => (
              <div key={doc.id} className="snap-start shrink-0 w-[280px]">
                <SpecialistCard doc={doc} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-4">
            {specialists.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-navy-deep" : "bg-gray-300"}`}
                aria-label={`Go to specialist ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {specialists.map((doc) => (
            <div key={doc.id}>
              <SpecialistCard doc={doc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecialistCard({ doc }) {
  return (
    <div className="group">
      <div className="rounded-2xl overflow-hidden mb-8 bg-[#f0cfc4]">
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full aspect-[3/4] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.5px] text-navy-deep mb-3">
        {doc.name}
      </h3>
      <p className="text-sm text-navy-muted mb-6">
        {doc.title}
      </p>
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep group/link mt-6" style={{ fontFamily: "var(--font-base)" }}>
        Read bio
        <span className="w-7 h-7 rounded-full bg-primary/40 flex items-center justify-center group-hover/link:bg-primary/60 transition-colors">
          <svg className="w-3.5 h-3.5 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </a>
    </div>
  )
}

export default Specialists
