import { useEffect, useRef, useState } from "react"

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwUDPYes__c1Zt8e_DM7Q5kgdiBIfFfPLrTr8MouZa1je8uGW8LgO6j83uE0qO_3RU0/exec"

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  border: "1.5px solid #e2e8f0",
  borderRadius: "8px",
  fontSize: "14px",
  color: "#1a3a4a",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "var(--font-base)",
  backgroundColor: "#f8fafc",
}

export default function ConsultPopup({ delay = 4000 }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open) return null

  const close = () => setOpen(false)

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
          source: "consult-popup",
        }),
      })
    } catch (_) {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(15, 30, 35, 0.6)",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        className="consult-popup-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          fontFamily: "var(--font-base)",
          animation: "slideUp 0.3s ease",
          maxHeight: "94vh",
          minHeight: "480px",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="consult-popup-close"
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            zIndex: 10,
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="15" height="15" fill="none" stroke="#1a3a4a" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Content */}
        <div
          className="consult-popup-content"
          style={{
            padding: "clamp(28px, 4vw, 44px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "auto",
          }}
        >
          {!submitted ? (
            <>
              <h2
                className="consult-popup-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#0f616e",
                  margin: "0 0 10px",
                }}
              >
                Consult a Rheumatologist for Your Joint Pain
              </h2>
              <p
                className="consult-popup-subheading"
                style={{
                  fontFamily: "var(--font-base)",
                  fontSize: "14px",
                  color: "#5c6b6b",
                  lineHeight: 1.6,
                  margin: "0 0 22px",
                }}
              >
                Get evaluated by experienced rheumatologists — early diagnosis prevents long-term joint damage
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input ref={nameRef} type="text" placeholder="Name *" required style={inputStyle} />
                <input ref={phoneRef} type="tel" placeholder="Mobile Number *" required style={inputStyle} />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: loading ? "#a0a4ac" : "#e86531",
                    color: "#fff",
                    border: "none",
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontFamily: "var(--font-base)",
                    marginTop: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {loading ? "Booking..." : "Book My Online Consultation"}
                  {!loading && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  )}
                </button>
                <p style={{ textAlign: "center", fontSize: "12px", color: "#999", margin: "2px 0 0", fontFamily: "var(--font-base)" }}>
                  We call back within 1 hour · No spam
                </p>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div style={{ width: "54px", height: "54px", background: "#e6f2f2", borderRadius: "50%", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="26" height="26" fill="none" stroke="#0f616e" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", color: "#0f616e", fontSize: "clamp(1.8rem, 3.6vw, 2.4rem)", fontWeight: 700, margin: "0 0 8px" }}>
                Thank You!
              </h3>
              <p style={{ color: "#5c6b6b", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
                Our team will call you back shortly to confirm your consultation.
              </p>
            </div>
          )}
        </div>

        {/* Right: Image */}
        <div className="consult-popup-img" style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/rheumatologist-doctor-bangalore/popup.png"
            alt="Rheumatologist examining a patient's hand"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .consult-popup-card {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
            min-height: 420px !important;
          }
          .consult-popup-img {
            display: none !important;
          }
          .consult-popup-heading,
          .consult-popup-subheading {
            text-align: center !important;
          }
          .consult-popup-close {
            top: 8px !important;
            right: 8px !important;
            background: rgba(15,30,35,0.06) !important;
            box-shadow: none !important;
          }
          .consult-popup-content {
            padding-top: 52px !important;
          }
        }
      `}</style>
    </div>
  )
}
