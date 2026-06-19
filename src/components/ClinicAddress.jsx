import { useState, useRef } from "react"

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
    <section id="book-consultation" style={{ position: "relative", overflow: "hidden", backgroundColor: "#0f616e" }}>

      <div className="clinic-address-layout" style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Left: Address content */}
        <div style={{ flex: "1 1 0", padding: "1rem 2rem 1rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Clinic name + address with icon */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "14px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "4px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, color: "#fff", fontSize: "26px", margin: "0 0 14px", fontFamily: "var(--font-base)", lineHeight: 1.3 }}>
                Omni Rheuma Clinics: Rachenahalli, Thanisandra
              </p>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "18px", lineHeight: 1.7, margin: 0, fontFamily: "var(--font-base)", maxWidth: "520px" }}>
                No. 42 &amp; 25, 1st Floor, 80 Feet Road, Dr. Shiva Ram Karanth Nagar, MCEHS Layout, Rachenahalli, Thanisandra, above Pepperfry Furniture, RK Hegde Nagar, Bengaluru - 560077
              </p>
            </div>
          </div>

          {/* Also practices at */}
          <p style={{ color: "#fff", fontSize: "18px", fontFamily: "var(--font-base)", margin: "1.5rem 0 14px", paddingLeft: "70px", lineHeight: 1.6 }}>
            Dr Raghavendra also practices at Manipal Hospital (Hebbal and Yelahanka)
          </p>

          {/* Contact */}
          <div style={{ paddingLeft: "70px", marginTop: "1.5rem" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", fontFamily: "var(--font-base)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 600 }}>
              For appointments, please call
            </p>
            <p style={{ margin: 0, fontFamily: "var(--font-base)", fontSize: "20px" }}>
              <a href="tel:+918290638358" style={{ color: "#fff", textDecoration: "none", fontWeight: 700 }}>+91 82906 38358</a>
              <span style={{ color: "rgba(255,255,255,0.35)", margin: "0 14px" }}>|</span>
              <a href="mailto:omnirheuma@gmail.com" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontWeight: 400 }}>omnirheuma@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Right: Book Consultation Form */}
        <div className="clinic-form-panel" style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "1.5rem 2rem", boxShadow: "0 8px 40px rgba(0,0,0,0.25)", margin: "0.75rem 8rem 0.75rem 2rem", alignSelf: "center" }}>
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
              <p style={{ fontFamily: "var(--font-base)", fontSize: "14px", color: "#666", margin: 0 }}>We'll call you back within 1 hour.</p>
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
                We call back within 1 hour · No spam
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

export default ClinicAddress
