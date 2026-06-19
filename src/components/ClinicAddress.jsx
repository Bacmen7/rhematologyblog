import { useState, useRef } from "react"

const locations = [
  {
    name: "Manipal",
    address: "No. 42 & 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru - 560077",
  },
  {
    name: "Consulting Hours",
    address: "Mon – Sat, 9:00 AM – 9:00 PM",
  },
  {
    name: "Video Consultation",
    address: "Available Online – Consult from anywhere in India",
    isVideo: true,
  },
]

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUDPYes__c1Zt8e_DM7Q5kgdiBIfFfPLrTr8MouZa1je8uGW8LgO6j83uE0qO_3RU0/exec"

function ClinicAddress() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)
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
          message: messageRef.current?.value || "",
          source: "clinic-form",
        }),
      })
    } catch (_) {}
    window.location.href = "/thank-you"
  }

  return (
    <section id="book-consultation" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="/h1.webp" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(15, 97, 110, 0.82)" }} />
      </div>

      <div className="clinic-address-layout" style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Left: Addresses */}
        <div style={{ flex: "1 1 0", padding: "3rem 2rem 2rem 3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "2.5rem", letterSpacing: "-0.5px" }}>
            Our Addresses
          </h2>

          <div className="clinic-locations-grid">
            {locations.map((loc, i) => (
              <div key={i} className={i < locations.length - 1 ? "clinic-location-divider" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", padding: "0 24px", borderRight: i < locations.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none" }}>
                {/* Pin icon */}
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {loc.isVideo ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                </div>
                {/* Vertical divider (except last col) */}
                <div>
                  <p style={{ fontWeight: 700, color: "#fff", fontSize: "16px", margin: "0 0 6px", fontFamily: "var(--font-base)" }}>{loc.name}</p>
                  <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "17px", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-base)" }}>{loc.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Get in touch */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontWeight: 700, fontSize: "22px", color: "#fff", marginBottom: "6px", fontFamily: "var(--font-display)" }}>Get in touch</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", fontFamily: "var(--font-base)" }}>
              <a href="tel:+918290638358" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>+91 82906 38358</a>
              &nbsp;|&nbsp;
              <a href="mailto:omnirheuma@gmail.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>omnirheuma@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Right: Book Consultation Form */}
        <div className="clinic-form-panel" style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "1.5rem 2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.25)", margin: "1.5rem 1.5rem 1.5rem 0", alignSelf: "center" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "#0f616e", marginBottom: "1rem", textAlign: "center" }}>
            Book Your Consultation
          </h3>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#e8f4f6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#0f616e", margin: "0 0 8px" }}>Successfully Booked!</p>
              <p style={{ fontFamily: "var(--font-base)", fontSize: "14px", color: "#666", margin: 0 }}>We'll call you back within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                ref={nameRef}
                type="text"
                placeholder="Name"
                required
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <input
                ref={phoneRef}
                type="tel"
                placeholder="Phone"
                required
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <textarea
                ref={messageRef}
                placeholder="Post Your Problem (optional)"
                rows={2}
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: loading ? "#a0a4ac" : "#e86531", color: "#fff", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", border: "none", marginTop: "4px", cursor: loading ? "not-allowed" : "pointer", fontFamily: "var(--font-base)" }}
              >
                {loading ? "Booking..." : "Book Appointment"}
              </button>
              <p style={{ textAlign: "center", fontSize: "12px", color: "#999", margin: "2px 0 0", fontFamily: "var(--font-base)" }}>
                We call back within 24 hours · No spam
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ClinicAddress
