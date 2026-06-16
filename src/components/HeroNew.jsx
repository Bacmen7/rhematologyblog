import { Link } from "react-router-dom"

const bullets = [
  "1500+ Successful Patient Outcomes",
  "Treating RA, Gout & Ankylosing Spondylitis",
  "DMARDs, Biologic & Joint Injection Therapies",
  "Most Advanced Rheumatology Treatments",
  "Minimally Invasive Joint Procedures",
]

function HeroNew() {
  return (
    <section style={{ backgroundColor: "#eef3fb", position: "relative", overflow: "hidden" }}>

      {/* RIGHT: image edge-to-edge */}
      <div className="hero-image-panel">
        <img
          src="/herodadi.png"
          alt="Happy patient"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
        {/* left edge fade into bg */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #eef3fb 0%, rgba(238,243,251,0.55) 14%, transparent 38%)", pointerEvents: "none" }} />
      </div>

      {/* CONTENT WRAPPER */}
      <div style={{ position: "relative", zIndex: 1, padding: "1.75rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>

        {/* TOP: centered heading + subheading */}
        <div style={{ textAlign: "center", marginBottom: "2rem", paddingRight: "0" }}>
          <h1 className="hero-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", color: "#0f616e", margin: 0 }}>
            No. 1 Clinic for Advanced Rheumatology<br />
            &amp; Autoimmune Care in Bengaluru
          </h1>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)", fontWeight: 500, color: "#0f616e", marginTop: "0.6rem", marginBottom: 0 }}>
            Expert Care For Pain-Free Living
          </p>
        </div>

        {/* BOTTOM ROW: bullets left | form center | spacer right */}
        <div className="hero-content-grid">

          {/* LEFT: bullets full width with dividers */}
          <div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14.5px", fontWeight: 500, color: "#1a2a5e", fontFamily: "var(--font-base)", padding: "9px 0", borderBottom: i < bullets.length - 1 ? "1px solid rgba(26,42,94,0.12)" : "none" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a2a5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: Form card */}
          <div>
            <div style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "1.75rem 1.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "#1a2a5e", textAlign: "center", margin: "0 0 1.25rem" }}>
                Book Doctor Consultation
              </h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                  type="text"
                  placeholder="Name *"
                  style={{ width: "100%", padding: "12px 16px", border: "none", borderRadius: "10px", fontSize: "14px", color: "#333", backgroundColor: "#eef3fb", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)" }}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  style={{ width: "100%", padding: "12px 16px", border: "none", borderRadius: "10px", fontSize: "14px", color: "#333", backgroundColor: "#eef3fb", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)" }}
                />
                <div style={{ position: "relative" }}>
                  <select
                    style={{ width: "100%", padding: "12px 16px", border: "none", borderRadius: "10px", fontSize: "14px", color: "#888", backgroundColor: "#eef3fb", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", appearance: "none" }}
                  >
                    <option value="">Select City *</option>
                    <option>Bengaluru</option>
                    <option>Other</option>
                  </select>
                  <svg style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 text-white font-bold tracking-wide transition-all duration-300 hover:opacity-90 group"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#e86531", color: "#fff", padding: "13px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", textDecoration: "none", marginTop: "4px", fontFamily: "var(--font-base)", width: "100%", boxSizing: "border-box" }}
                >
                  Book Now
                  <span style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              </form>
            </div>

          </div>

          {/* SPACER for image */}
          <div className="hero-spacer" />

        </div>
      </div>
    </section>
  )
}

export default HeroNew
