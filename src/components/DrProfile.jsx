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

          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
            {["DM Rheumatology Gold Medalist", "Specialist in Joint, Bone & Autoimmune Conditions", "14 Years of Clinical Experience"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                <Check size={15} strokeWidth={3} style={{ color: "#1AA3B5", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>

          {/* Quote */}
          <div style={{ margin: "8px 0 0", position: "relative", padding: "24px 28px 20px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "14px" }}>
            <svg style={{ position: "absolute", top: "16px", left: "20px", opacity: 0.2 }} width="32" height="32" viewBox="0 0 24 24" fill="#fff">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L9.44 6.44c-.87.5-1.63 1.14-2.28 1.92-.65.78-1.14 1.64-1.47 2.57-.33.93-.49 1.84-.49 2.74 0 1.39.37 2.48 1.1 3.27.74.8 1.7 1.2 2.88 1.2.98 0 1.77-.3 2.38-.9.61-.6.91-1.38.91-2.34zm7.68 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01l-1.1-1.16c-.87.5-1.63 1.14-2.28 1.92-.65.78-1.14 1.64-1.47 2.57-.33.93-.49 1.84-.49 2.74 0 1.39.37 2.48 1.1 3.27.74.8 1.7 1.2 2.88 1.2.98 0 1.77-.3 2.38-.9.61-.6.91-1.38.91-2.34z"/>
            </svg>
            <p style={{ margin: "0 0 16px", fontFamily: "var(--font-display)", fontSize: "16px", fontStyle: "italic", color: "rgba(255,255,255,0.92)", lineHeight: 1.7, paddingLeft: "8px" }}>
              "Most patients who come to me have spent years being told their pain is normal. It is not. Every joint condition has a name, a cause, and a treatment. My job is to find all three."
            </p>
            <cite style={{ fontSize: "12px", fontWeight: 700, color: "#1AA3B5", letterSpacing: "0.5px", fontStyle: "normal", fontFamily: "var(--font-base)" }}>
              Dr. Raghavendra H, DM Rheumatologist
            </cite>
          </div>


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
