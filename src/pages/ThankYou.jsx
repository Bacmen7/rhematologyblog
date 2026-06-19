function ThankYou() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e8f4f6", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "3rem 2.5rem", maxWidth: "480px", width: "100%", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#e8f4f6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "#0f616e", margin: "0 0 12px" }}>
          Thank You!
        </h1>
        <p style={{ fontFamily: "var(--font-base)", fontSize: "16px", color: "#555", lineHeight: 1.7, margin: "0 0 32px" }}>
          Your appointment request has been received. We will call you back within 24 hours.
        </p>
        <a
          href="/"
          style={{ display: "inline-block", backgroundColor: "#e86531", color: "#fff", padding: "13px 32px", borderRadius: "50px", fontWeight: 700, fontSize: "15px", textDecoration: "none", fontFamily: "var(--font-base)" }}
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default ThankYou
