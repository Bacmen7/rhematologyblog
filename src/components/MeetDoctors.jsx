import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import specialists from "../data/specialists.js"

const dr = specialists[0]

const stats = [
  { number: "14+", label: "Years of Experience" },
  { number: "1000+", label: "Patients Treated" },
  { number: "6", label: "Research Publications" },
]

const scopeLeft = [
  "Rheumatoid Arthritis",
  "Spondyloarthritis",
  "Psoriatic Arthritis",
  "Vasculitis",
]

const scopeRight = [
  "SLE & Autoimmune Disease",
  "Intra-Articular Injections",
  "Biologic Therapies",
  "Joint Injection Procedures",
]

function MeetDoctors() {
  return (
    <section style={{ backgroundColor: "#0f616e", padding: "4rem 1rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left: Photo */}
          <div className="w-full lg:w-[340px] shrink-0">
            <img
              src={dr.image}
              alt={dr.name}
              className="w-full lg:w-[340px] h-[380px] lg:h-[460px] object-cover object-top rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-white">
            {/* Name */}
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, marginBottom: "0.4rem" }}>
              {dr.name}
            </h2>

            {/* Qualification */}
            <p style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "0.75rem" }}>
              {dr.qualification}
            </p>

            {/* Tagline */}
            <p style={{ fontSize: "15px", fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: "1.25rem", lineHeight: 1.5 }}>
              DM Rheumatology Gold Medalist &mdash; Specialist in Joint, Bone &amp; Autoimmune Conditions with 13+ Years of Clinical Experience.
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-[14px] text-white/90">
                <Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#e86531]" />
                Gold Medalist in DM Rheumatology &amp; Clinical Immunology- TN MGR University
              </li>
              <li className="flex items-start gap-2 text-[14px] text-white/90">
                <Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-[#e86531]" />
                6 Peer-Reviewed Publications in International Rheumatology Journals
              </li>
            </ul>

            {/* Stats */}
            <div className="flex gap-0 mb-8 border border-white/20 rounded-lg overflow-hidden">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="flex-1 text-center py-4 px-2"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
                >
                  <div style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", marginTop: "0.3rem", lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Scope of Services */}
            <div className="mb-8">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem" }}>Scope Of Services</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {scopeLeft.map((item, i) => (
                  <div key={`l-${i}`} className="flex items-start gap-2 text-[14px] text-white/90">
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-[#e86531]" />
                    {item}
                  </div>
                ))}
                {scopeRight.map((item, i) => (
                  <div key={`r-${i}`} className="flex items-start gap-2 text-[14px] text-white/90">
                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-[#e86531]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/book-appointment"
              className="inline-block px-8 py-3.5 rounded-full font-bold text-white text-[15px] transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e86531" }}
            >
              Book Consultation Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MeetDoctors
