const stats = [
  { number: "1500+", label: "Patients Treated" },
  { number: "90%+", label: "Relief in 10 Weeks" },
  { number: "14+", label: "Years of Expertise" },
  { number: "6", label: "Research Publications" },
]

function HeroStats() {
  return (
    <section style={{ backgroundColor: "#0f616e", padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "8px 16px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.5px",
              }}
            >
              {s.number}
            </div>
            <p
              style={{
                fontFamily: "var(--font-base)",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.88)",
                marginTop: "8px",
                marginBottom: 0,
                lineHeight: 1.3,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroStats
