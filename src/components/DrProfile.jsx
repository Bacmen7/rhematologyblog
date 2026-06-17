import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import specialists from "../data/specialists"

const stats = [
  { number: "13+", label: "Years of Experience" },
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

function DrProfile() {
  const doc = specialists[0]

  return (
    <section style={{ backgroundColor: "#0f616e", padding: "5% 5%" }}>
      <div className="dr-profile-wrapper" style={{ display: "flex", flexDirection: "row", gap: "60px", alignItems: "flex-start", maxWidth: "1140px", margin: "0 auto", flexWrap: "wrap" }}>

        {/* Left: Photo */}
        <div style={{ flex: "0 0 auto", width: "420px", marginRight: "40px" }} className="hidden md:block">
          <img
            src="/Drraghvendra.jpeg"
            alt={doc.name}
            style={{ width: "420px", display: "block", objectFit: "contain", maxWidth: "100%" }}
          />
        </div>

        {/* Right: Content */}
        <div className="dr-profile-content" style={{ flex: "1 1 0", minWidth: "0", maxWidth: "600px", color: "#ffffff", display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Eyebrow */}
          <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-base)" }}>
            Meet Your Specialist
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 400, letterSpacing: "-0.5px", lineHeight: 1.1, margin: 0, color: "#fff" }}>
            {doc.name}
          </h2>

          {/* Mobile photo */}
          <div className="block md:hidden">
            <img src="/Drraghvendra.jpeg" alt={doc.name} style={{ width: "100%", maxWidth: "320px", display: "block", margin: "8px 0" }} />
          </div>

          <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#fff" }}>
            {doc.qualification}
          </p>

          <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>
            DM Rheumatology Gold Medalist &nbsp;·&nbsp; Specialist in Joint, Bone &amp; Autoimmune Conditions &nbsp;·&nbsp; 14 Years of Clinical Experience
          </p>

          {/* Quote */}
          <blockquote style={{ margin: "8px 0 0", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "18px 22px", borderLeft: "3px solid rgba(255,255,255,0.3)" }}>
            <p style={{ margin: "0 0 10px", fontFamily: "var(--font-display)", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.9)", lineHeight: 1.65 }}>
              "Most patients who come to me have spent years being told their pain is normal. It is not. Every joint condition has a name, a cause, and a treatment. My job is to find all three."
            </p>
            <cite style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "1px", textTransform: "uppercase", fontStyle: "normal", fontFamily: "var(--font-base)" }}>
              — Dr. Raghavendra H, DM Rheumatologist
            </cite>
          </blockquote>

          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
              <Check size={15} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
              Gold Medalist in DM Rheumatology &amp; Clinical Immunology- TN MGR University
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
              <Check size={15} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
              6 Peer-Reviewed Publications in International Rheumatology Journals
            </li>
          </ul>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
            <Link
              to="/book-appointment"
              style={{ display: "inline-block", backgroundColor: "#e86531", color: "#fff", padding: "14px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
            >
              Book Consultation Now
            </Link>
            <Link
              to="/specialist/1"
              style={{ display: "inline-block", backgroundColor: "transparent", color: "#fff", padding: "14px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "15px", textDecoration: "none", border: "2px solid rgba(255,255,255,0.7)" }}
            >
              View Full Profile
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DrProfile
