import { Link } from "react-router-dom"

const bullets = [
  "Rheumatoid Arthritis, Gout, Lupus, Ankylosing Spondylitis and more",
  "1500+ patients treated successfully",
  "Advanced therapies for joint health and overall wellbeing",
  "One-on-one consultation with Dr. Raghavendra H",
]

const conditions = [
  "Rheumatoid Arthritis",
  "Gout",
  "Lupus",
  "Ankylosing Spondylitis",
  "Psoriatic Arthritis",
  "Fibromyalgia",
  "Osteoarthritis",
]

function HeroV2() {
  return (
    <section className="hero-v2-section" style={{
      width: "100%",
      backgroundColor: "#e8f4f6",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(420px, 1fr) 1.1fr 400px",
        alignItems: "stretch",
        minHeight: "520px",
      }}>

        {/* ── LEFT: content ── */}
        <div style={{
          padding: "3rem 2.5rem 3rem clamp(1.5rem, 5vw, 4rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.6rem",
        }}>

          {/* Heading */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.6vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            color: "#0f616e",
            margin: 0,
          }}>
            Specialist<br />Rheumatology<br />Clinic in Bengaluru
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "var(--font-base)",
            fontSize: "15px",
            fontWeight: 500,
            color: "#1AA3B5",
            fontStyle: "normal",
            margin: 0,
          }}>
            Expert Care for Pain-Free Living
          </p>

          {/* Bullets */}
          <ul style={{ listStyle: "none", margin: "1.2rem 0", padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {bullets.map((b, i) => (
              <li key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "10px",
                fontSize: "14px", fontWeight: 500,
                color: "#0f616e",
                fontFamily: "var(--font-base)",
                lineHeight: 1.4,
              }}>
                <span style={{
                  flexShrink: 0, marginTop: "3px",
                  width: "16px", height: "16px",
                  borderRadius: "50%", backgroundColor: "#1AA3B5",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link
              to="/book-appointment"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#e86531", color: "#fff",
                padding: "13px 24px", borderRadius: "100px",
                fontWeight: 700, fontSize: "14px",
                textDecoration: "none",
                fontFamily: "'usual', system-ui, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Book a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                color: "#0f616e", padding: "12px 20px",
                borderRadius: "100px",
                fontWeight: 700, fontSize: "13.5px",
                textDecoration: "none",
                fontFamily: "'usual', system-ui, sans-serif",
                whiteSpace: "nowrap",
                backgroundColor: "#fff",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e86531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.51a2 2 0 012.11.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 XXXXX XXXXX
            </a>
          </div>

        </div>

        {/* ── CENTER: full image ── */}
        <div style={{ overflow: "hidden", backgroundColor: "#e8f4f6", display: "flex" }}>
          <div style={{ position: "relative", flex: 1 }}>
            <img
              src="/herodadi.png"
              alt="Patient"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, #e8f4f6 0%, rgba(232,244,246,0.4) 12%, transparent 28%)",
              pointerEvents: "none",
            }} />
          </div>
        </div>

        {/* ── RIGHT: form panel ── */}
        <div style={{
          backgroundColor: "#0c5260",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 28px",
          gap: "24px",
        }}>

          {/* Doctor strip */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Avatar */}
            <div style={{
              width: "52px", height: "52px", borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.4)",
              flexShrink: 0,
              overflow: "hidden",
            }}>
              <img src="/Drraghvendra.jpeg" alt="Dr. Raghavendra H" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
            {/* Info */}
            <div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-base)", lineHeight: 1.3 }}>Dr. Raghavendra H</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-base)", marginBottom: "7px" }}>DM Rheumatology · Gold Medallist</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{
                  backgroundColor: "#e86531", color: "#fff",
                  fontSize: "10px", fontWeight: 700,
                  padding: "3px 10px", borderRadius: "100px",
                  fontFamily: "var(--font-base)", letterSpacing: "0.3px",
                }}>DM Rheumatologist</span>
                <span style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  borderRadius: "100px", padding: "3px 8px",
                  fontSize: "10.5px", fontWeight: 600,
                  color: "#fff", fontFamily: "var(--font-base)",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#FCB900" stroke="#FCB900" strokeWidth="1" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  4.9
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />

          {/* Form */}
          <div>
            <p style={{ fontFamily: "'usual', system-ui, sans-serif", fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "1.8px", textTransform: "uppercase", margin: "0 0 18px" }}>
              Book a Consultation
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Full Name *", "Mobile Number *"].map((ph, i) => (
                <input
                  key={i}
                  type={i === 1 ? "tel" : "text"}
                  placeholder={ph}
                  style={{
                    width: "100%", padding: "12px 14px",
                    border: "none", borderRadius: "8px",
                    backgroundColor: "#fff",
                    fontSize: "13px", color: "#1a3a4a",
                    outline: "none", boxSizing: "border-box",
                    fontFamily: "'usual', system-ui, sans-serif",
                  }}
                />
              ))}

              <textarea
                placeholder="Your Message (optional)"
                rows={3}
                style={{
                  width: "100%", padding: "12px 14px",
                  border: "none", borderRadius: "8px",
                  backgroundColor: "#fff",
                  fontSize: "13px", color: "#1a3a4a",
                  outline: "none", boxSizing: "border-box",
                  fontFamily: "'usual', system-ui, sans-serif",
                  resize: "none",
                }}
              />

              <button type="submit" style={{
                width: "100%", padding: "14px",
                backgroundColor: "#e86531", color: "#fff",
                border: "none", borderRadius: "8px",
                fontWeight: 700, fontSize: "14px",
                cursor: "pointer",
                fontFamily: "'usual', system-ui, sans-serif",
                marginTop: "4px",
                letterSpacing: "0.3px",
              }}>
                Book Now
              </button>

              <p style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.35)", fontFamily: "'usual', system-ui, sans-serif", margin: "10px 0 0" }}>
                We call back within 2 hours
              </p>

              <a href="https://wa.me/91XXXXXXXXXX" style={{
                marginTop: "12px",
                width: "100%", padding: "12px",
                backgroundColor: "#25D366", color: "#fff",
                borderRadius: "8px", fontWeight: 600, fontSize: "13px",
                fontFamily: "'usual', system-ui, sans-serif",
                textDecoration: "none",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                boxSizing: "border-box",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroV2
