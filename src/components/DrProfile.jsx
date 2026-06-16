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
      <div style={{ display: "flex", flexDirection: "row", gap: "60px", alignItems: "flex-start", maxWidth: "1140px", margin: "0 auto", flexWrap: "wrap" }}>

        {/* Left: Photo */}
        <div style={{ flex: "0 0 auto", width: "320px", marginRight: "40px" }} className="hidden md:block">
          <img
            src={doc.image}
            alt={doc.name}
            style={{ width: "320px", display: "block" }}
          />
        </div>

        {/* Right: Content */}
        <div style={{ flex: "1 1 0", minWidth: "0", color: "#ffffff", display: "flex", flexDirection: "column", gap: "12px" }}>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 400, letterSpacing: "-0.5px", lineHeight: 1.1, margin: 0, color: "#fff" }}>
            {doc.name}
          </h2>

          {/* Mobile photo */}
          <div className="block md:hidden">
            <img src={doc.image} alt={doc.name} style={{ width: "100%", maxWidth: "320px", display: "block", margin: "8px 0" }} />
          </div>

          <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#fff" }}>
            {doc.qualification}
          </p>

          <p style={{ margin: 0, fontSize: "15px", fontWeight: 700, color: "#fff", lineHeight: 1.5 }}>
            DM Rheumatology Gold Medalist — Specialist in Joint, Bone &amp; Autoimmune Conditions with 13+ Years of Experience.
          </p>

          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
              <Check size={15} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
              Gold Medalist in DM Rheumatology &amp; Clinical Immunology — TN MGR University
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
              <Check size={15} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
              6 Peer-Reviewed Publications in International Rheumatology Journals
            </li>
          </ul>

          {/* Stats */}
          <div style={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
            {stats.map((s, i) => (
              <>
                <div key={i} style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.number}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", marginTop: "4px", lineHeight: 1.3 }}>{s.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: "1px", height: "48px", backgroundColor: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
                )}
              </>
            ))}
          </div>

          {/* Scope */}
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Scope Of Services</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 32px" }}>
            {scopeLeft.map((item, i) => (
              <div key={`l${i}`} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
                <Check size={14} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
                {item}
              </div>
            ))}
            {scopeRight.map((item, i) => (
              <div key={`r${i}`} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#fff" }}>
                <Check size={14} strokeWidth={3} style={{ color: "#fff", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
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
