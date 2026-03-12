import { useState, useRef, useEffect } from "react"

const specialists = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Chief of Clinical Research",
    badge: "Lupus Specialist",
    image: "/images/specialist-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    title: "Senior Immunologist",
    badge: "RA & Osteo",
    image: "/images/specialist-2.jpg",
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    title: "Lead Consultant",
    badge: "Pediatric Specialist",
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
      const cardWidth = container.firstElementChild?.offsetWidth || 220
      const gap = 16
      const index = Math.round(scrollLeft / (cardWidth + gap))
      setActiveIndex(Math.min(index, specialists.length - 1))
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index) => {
    const container = scrollRef.current
    if (!container) return
    const cardWidth = container.firstElementChild?.offsetWidth || 220
    const gap = 16
    container.scrollTo({ left: index * (cardWidth + gap), behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-navy-deep">
            Meet the<br />
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
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {specialists.map((doc) => (
              <div key={doc.id} className="snap-start shrink-0 w-[220px]">
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/60 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold text-navy-deep">
                      {doc.badge}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep mb-0.5">{doc.name}</h3>
                  <p className="text-navy-muted uppercase tracking-widest text-[10px] font-semibold">
                    {doc.title}
                  </p>
                </div>
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

        {/* Desktop: 3-Column Magazine Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {specialists.map((doc, index) => (
            <div
              key={doc.id}
              className={`group cursor-pointer ${index === 1 ? "md:translate-y-12" : ""}`}
            >
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
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative">
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-[8px] px-4 py-2 rounded-full text-xs font-bold text-navy-deep">
          {doc.badge}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-navy-deep mb-1">{doc.name}</h3>
      <p className="text-navy-muted uppercase tracking-widest text-xs font-semibold">
        {doc.title}
      </p>
    </div>
  )
}

export default Specialists
