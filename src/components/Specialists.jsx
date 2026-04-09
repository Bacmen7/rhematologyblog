import { Link } from "react-router-dom"
import specialists from "../data/specialists"

function Specialists() {
  const doc = specialists[0]

  return (
    <section className="py-16 md:py-24 pb-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "-0.8px", color: "#0f616e", marginBottom: "12px" }} className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Meet Our <span style={{ color: "#1AA3B5" }}>Specialist</span>
          </h2>
          <p style={{ fontSize: "15px", color: "#5E5E5E", lineHeight: 1.7, fontFamily: "var(--font-base)" }}>
            Our board-certified expert represents the global frontier of autoimmune research and clinical care.
          </p>
        </div>

        {/* Single Doctor Card */}
        <div className="max-w-[320px] mx-auto">
          <SpecialistCard doc={doc} />
        </div>
      </div>
    </section>
  )
}

function SpecialistCard({ doc }) {
  return (
    <Link to={`/specialist/${doc.id}`} className="group block cursor-pointer">
      <div className="rounded-2xl overflow-hidden mb-8 bg-[#f0cfc4]">
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full aspect-[3/4] object-cover object-top transition-all duration-700"
        />
      </div>
      <h3 className="text-[1.5rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.5px] text-navy-deep mb-3">
        {doc.name}
      </h3>
      <p className="text-sm text-navy-muted mb-6">
        {doc.title}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep group/link mt-6" style={{ fontFamily: "var(--font-base)" }}>
        Read bio
        <span className="w-7 h-7 rounded-full bg-primary/40 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
          <svg className="w-3.5 h-3.5 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </span>
    </Link>
  )
}

export default Specialists
