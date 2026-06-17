import { useState } from "react"

const locations = [
  {
    name: "",
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

function ClinicAddress() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form[0].value
    const phone = form[1].value
    const message = form[2].value
    const subject = encodeURIComponent("New Appointment Request - Omni Rheuma")
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message || "—"}`)
    window.open(`mailto:omnirheuma@gmail.com?subject=${subject}&body=${body}`)
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
        <div style={{ flex: "1 1 0", padding: "3rem 2rem 3rem 3rem" }}>
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
                  <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "14px", lineHeight: 1.65, margin: 0, fontFamily: "var(--font-base)" }}>{loc.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Get in touch */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontWeight: 700, fontSize: "22px", color: "#fff", marginBottom: "6px", fontFamily: "var(--font-display)" }}>Get in touch</p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", fontFamily: "var(--font-base)" }}>
              +91 82906 38358 &nbsp;|&nbsp; omnirheuma@gmail.com
            </p>
          </div>
        </div>

        {/* Right: Book Consultation Form */}
        <div className="clinic-form-panel" style={{ backgroundColor: "#fff", borderRadius: "0", padding: "2.25rem 2.5rem", boxShadow: "0 8px 40px rgba(0,0,0,0.25)", margin: "2rem 2rem 2rem 0" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700, color: "#0f616e", marginBottom: "1.5rem", textAlign: "center" }}>
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
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <input
                type="text"
                placeholder="Name"
                required
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <textarea
                placeholder="Post Your Problem (optional)"
                rows={4}
                style={{ width: "100%", padding: "13px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", color: "#333", outline: "none", resize: "none", boxSizing: "border-box", fontFamily: "var(--font-base)", backgroundColor: "#fff" }}
              />
              <button
                type="submit"
                style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#e86531", color: "#fff", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "15px", border: "none", marginTop: "4px", cursor: "pointer", fontFamily: "var(--font-base)" }}
              >
                Book Appointment
              </button>
              <p style={{ textAlign: "center", fontSize: "12px", color: "#999", margin: 0, fontFamily: "var(--font-base)" }}>
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
