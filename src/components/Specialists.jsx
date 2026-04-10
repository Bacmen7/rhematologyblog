import { useState } from "react"
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
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="flex flex-col overflow-hidden cursor-pointer"
      style={{
        padding: "clamp(12px, 1.22vw, 20px)",
        paddingBottom: hovered ? "clamp(12px, 1.22vw, 20px)" : "32px",
        borderRadius: "34px",
        border: "1px solid #E8F0FA",
        backgroundColor: hovered ? "#E8F0FA" : "transparent",
        transition: "0.65s ease all",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ borderRadius: "20px" }}>
        <img
          src={doc.image}
          alt={doc.name}
          className="w-full object-cover object-top"
          style={{
            height: "300px",
            transition: "0.3s ease all",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </div>

      {/* Separator — scales in from left on hover */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#0f616e",
          marginTop: "18px",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "0.73s ease all",
        }}
      />

      {/* Name + Arrow */}
      <div
        className="flex items-center justify-between overflow-hidden"
        style={{
          paddingTop: hovered ? "16px" : "0px",
          transition: "0.5s ease all",
          gap: "10px",
        }}
      >
        <Link to={`/specialist/${doc.id}`}>
          <h3 style={{ fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "18px", lineHeight: 1.3, color: "#182439", marginBottom: "2px" }}>
            {doc.name}
          </h3>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#8a94a6" }}>
            Rheumatologist
          </p>
        </Link>
        {/* Arrow — slides down from top on hover */}
        <Link
          to={`/specialist/${doc.id}`}
          style={{
            position: "relative",
            top: hovered ? "0px" : "-30px",
            transition: hovered ? "0.3s ease all" : "0.65s ease all",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#182439" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </Link>
      </div>

      {/* Button — expands on hover */}
      <div
        className="overflow-hidden"
        style={{
          height: hovered ? "78px" : "0px",
          transition: "0.65s ease all",
        }}
      >
        <Link
          to={`/specialist/${doc.id}`}
          className="flex items-center justify-center gap-2 w-full rounded-full text-white font-semibold"
          style={{
            backgroundColor: "#1AA3B5",
            fontSize: "14px",
            fontFamily: "var(--font-base)",
            marginTop: "24px",
            minHeight: "48px",
            transition: "0.65s ease all",
          }}
        >
          Read more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Specialists
