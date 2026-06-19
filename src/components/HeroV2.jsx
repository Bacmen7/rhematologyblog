import { useState, useRef } from "react"

const bullets = [
  "Rheumatoid Arthritis, Gout, Lupus, Ankylosing Spondylitis and more",
  "15,000+ patients treated successfully",
  "Advanced therapies for joint health and overall wellbeing",
]

const conditions = ["Rheumatoid Arthritis", "Gout", "Lupus", "Ankylosing Spondylitis", "Psoriatic Arthritis", "Osteoarthritis", "Vasculitis", "Fibromyalgia", "Other"]

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUDPYes__c1Zt8e_DM7Q5kgdiBIfFfPLrTr8MouZa1je8uGW8LgO6j83uE0qO_3RU0/exec"

function HeroV2() {
  const [loading, setLoading] = useState(false)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
  const cityRef = useRef(null)
  const messageRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current?.value || "",
          phone: phoneRef.current?.value || "",
          condition: cityRef.current?.value || "",
          message: messageRef.current?.value || "",
          source: "hero-form",
        }),
      })
    } catch (_) {}
    window.location.href = "/thank-you"
  }

  return (
    <section className="hero-v2-section" style={{
      width: "100%",
      background: "linear-gradient(135deg, #dbeaf5 0%, #e8f4f8 50%, #dff0f4 100%)",
      position: "relative",
      overflow: "hidden",
      margin: 0,
      padding: 0,
    }}>
      <div className="hero-v2-inner" style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 370px 400px",
        minHeight: "560px",
        alignItems: "center",
        padding: "3rem clamp(1.5rem, 4vw, 4rem)",
        gap: "2rem",
        position: "relative",
        zIndex: 2,
      }}>

        {/* LEFT: text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Mobile: heading+bullets left, image right */}
          <div className="hero-mobile-top">
            <div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.3vw, 3.1rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 8px",
              }}>
                <span style={{ color: "#e86531" }}>Specialist</span>
                <br />
                <span style={{ color: "#0f616e" }}>Rheumatology</span>
                <br />
                <span style={{ color: "#0f616e" }}>Clinic in Bengaluru</span>
              </h1>

              <p style={{
                fontFamily: "var(--font-base)",
                fontSize: "clamp(13px, 1.8vw, 20px)",
                fontWeight: 500,
                color: "#1AA3B5",
                margin: "0 0 14px",
              }}>
                Expert Care for Pain-Free Living
              </p>

              <ul style={{ listStyle: "none", margin: "0 0 16px", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {bullets.map((b, i) => (
                  <li key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: "8px",
                    fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 500,
                    color: "#0f616e",
                    fontFamily: "var(--font-base)",
                    lineHeight: 1.4,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
                      <circle cx="12" cy="12" r="10" stroke="#1AA3B5" strokeWidth="2" />
                      <polyline points="8 12 11 15 16 9" stroke="#1AA3B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile image — right of text */}
            <div className="hero-mobile-img" style={{ position: "relative", height: "220px" }}>
              <img
                src="/images/Ring.webp"
                alt=""
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
              />
              <img
                src="/images/hero-slide-3.webp"
                alt="Patient"
                style={{ position: "absolute", top: "9%", left: "9%", width: "82%", height: "82%", objectFit: "cover", objectPosition: "center top", borderRadius: "10px" }}
              />
            </div>
          </div>

          <div className="hero-desktop-ctAs" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "28px" }}>
            <a
              href="#book-consultation"
              onClick={(e) => { e.preventDefault(); document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" }) }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#e86531", color: "#fff",
                padding: "13px 24px", borderRadius: "100px",
                fontWeight: 700, fontSize: "14px",
                textDecoration: "none",
                fontFamily: "var(--font-base)",
                whiteSpace: "nowrap",
              }}
            >
              Book a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="tel:+918290638358"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                color: "#0f616e", padding: "13px 24px",
                borderRadius: "100px",
                fontWeight: 700, fontSize: "14px",
                textDecoration: "none",
                fontFamily: "var(--font-base)",
                whiteSpace: "nowrap",
                backgroundColor: "#fff",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e86531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.51a2 2 0 012.11.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>

        {/* CENTER: form card */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", order: 3, }}>
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "32px 28px",
            width: "100%",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              fontWeight: 700,
              color: "#0f616e",
              margin: "0 0 24px",
              textAlign: "center",
            }}>
              Book Doctor Consultation
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                ref={nameRef}
                type="text"
                placeholder="Name *"
                required
                style={{
                  width: "100%", padding: "13px 16px",
                  border: "1.5px solid #e2e8f0", borderRadius: "8px",
                  fontSize: "14px", color: "#1a3a4a",
                  outline: "none", boxSizing: "border-box",
                  fontFamily: "var(--font-base)",
                  backgroundColor: "#f8fafc",
                }}
              />
              <input
                ref={phoneRef}
                type="tel"
                placeholder="Mobile Number *"
                required
                style={{
                  width: "100%", padding: "13px 16px",
                  border: "1.5px solid #e2e8f0", borderRadius: "8px",
                  fontSize: "14px", color: "#1a3a4a",
                  outline: "none", boxSizing: "border-box",
                  fontFamily: "var(--font-base)",
                  backgroundColor: "#f8fafc",
                }}
              />


              <textarea
                ref={messageRef}
                placeholder="Post Your Problem (optional)"
                rows={3}
                style={{
                  width: "100%", padding: "13px 16px",
                  border: "1.5px solid #e2e8f0", borderRadius: "8px",
                  fontSize: "14px", color: "#1a3a4a",
                  outline: "none", boxSizing: "border-box",
                  fontFamily: "var(--font-base)",
                  backgroundColor: "#f8fafc",
                  resize: "none",
                }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%", padding: "14px",
                  backgroundColor: loading ? "#a0a4ac" : "#e86531",
                  color: "#fff",
                  border: "none", borderRadius: "8px",
                  fontWeight: 700, fontSize: "15px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-base)",
                  marginTop: "4px",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                }}
              >
                {loading ? "Booking..." : "Book Now"}
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT: ring + hero image */}
        <div className="hero-img-desktop" style={{ order: 2,
          position: "relative",
          minHeight: "480px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}>
          {/* Ring background */}
          <img
            src="/images/Ring.webp"
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              zIndex: 1,
            }}
          />
          {/* Hero slide image on top of ring */}
          <img
            src="/images/hero-slide-3.webp"
            alt="Patient"
            style={{
              position: "absolute",
              zIndex: 2,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center center",
              borderRadius: "12px",
              top: "0%",
              left: "0%",
            }}
          />
        </div>

      </div>

      {/* Mobile bottom buttons + image */}
      <div className="hero-mobile-bottom-img" style={{ display: "none", padding: "0 1.2rem 1.2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
          <a
            href="#book-consultation"
            onClick={(e) => { e.preventDefault(); document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" }) }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#e86531", color: "#fff", padding: "13px 24px", borderRadius: "100px", fontWeight: 700, fontSize: "14px", textDecoration: "none", fontFamily: "var(--font-base)" }}
          >
            Book a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="tel:+918290638358"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f616e", padding: "13px 24px", borderRadius: "100px", fontWeight: 700, fontSize: "14px", textDecoration: "none", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e86531" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.51a2 2 0 012.11.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
        <div style={{ position: "relative", width: "100%", height: "260px" }}>
        <img
          src="/images/Ring.webp"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        />
        <img
          src="/images/hero-slide-3.webp"
          alt="Patient"
          style={{ position: "absolute", top: "9%", left: "9%", width: "82%", height: "82%", objectFit: "cover", objectPosition: "center top", borderRadius: "10px" }}
        />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-v2-inner {
            grid-template-columns: 1fr 360px !important;
            order: unset !important;
          }
          .hero-img-desktop {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hero-v2-inner {
            grid-template-columns: 1fr !important;
            padding: 2rem 1.2rem 1.2rem !important;
            min-height: unset !important;
          }
          .hero-mobile-top {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            align-items: center !important;
            gap: 12px !important;
            margin-bottom: 16px !important;
          }
          .hero-mobile-img {
            display: block !important;
          }
          .hero-desktop-ctAs {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .hero-mobile-top {
            display: contents !important;
          }
        }
        @media (max-width: 768px) {
          .hero-mobile-img {
            display: none !important;
          }
          .hero-mobile-bottom-img {
            display: block !important;
          }
        }
        .hero-mobile-img {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default HeroV2
