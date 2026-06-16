const leftPoints = [
  "Accurate Diagnosis in First Visit",
  "DM-Qualified Rheumatology Specialist",
  "Biologic & Biosimilar Therapies Available",
  "Internationally Approved Treatment Protocols",
]

const rightPoints = [
  "Persistent Joint Pain & Swelling",
  "Morning Stiffness Lasting Over 30 Minutes",
  "Autoimmune Flares & Skin Rashes",
  "Undiagnosed Muscle or Bone Pain",
]

function WhyChooseCards() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

        {/* Left card */}
        <div style={{ backgroundColor: "#eef3fb", borderRadius: "16px", padding: "2.5rem 2.5rem", minHeight: "320px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", fontWeight: 700, color: "#0f616e", whiteSpace: "nowrap", marginBottom: "1.5rem", lineHeight: 1.4 }}>
            Why Choose Omni RheumaCare?
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {leftPoints.map((p, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "#1e1e1e", fontFamily: "var(--font-base)", fontWeight: 400 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="#0f616e" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right card */}
        <div style={{ backgroundColor: "#eef3fb", borderRadius: "16px", padding: "2.5rem 2.5rem", minHeight: "320px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", fontWeight: 700, color: "#0f616e", whiteSpace: "nowrap", marginBottom: "1.5rem", lineHeight: 1.4 }}>
            When Should You See a Rheumatologist?
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            {rightPoints.map((p, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "#1e1e1e", fontFamily: "var(--font-base)", fontWeight: 400 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z" fill="#0f616e" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default WhyChooseCards
