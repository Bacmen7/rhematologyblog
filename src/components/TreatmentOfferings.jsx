import { Pill, Syringe, Activity, Stethoscope } from "lucide-react"

const treatments = [
  {
    icon: <Pill size={32} strokeWidth={1.5} style={{ color: "#0f616e" }} />,
    title: "DMARDs Therapy",
    desc: "Disease-modifying drugs that slow joint damage at the root level, not just masking pain",
  },
  {
    icon: <Syringe size={32} strokeWidth={1.5} style={{ color: "#0f616e" }} />,
    title: "Biologic Injections",
    desc: "Targeted biologic therapies and affordable biosimilars for moderate to severe arthritis",
  },
  {
    icon: <Activity size={32} strokeWidth={1.5} style={{ color: "#0f616e" }} />,
    title: "Joint Injections",
    desc: "Corticosteroid and hyaluronic acid injections for direct, targeted joint pain relief",
  },
  {
    icon: <Stethoscope size={32} strokeWidth={1.5} style={{ color: "#0f616e" }} />,
    title: "Disease Monitoring",
    desc: "Structured follow-ups and lab reviews to track progress and adjust treatment as needed",
  },
]

function TreatmentOfferings() {
  return (
    <section className="treatment-section" style={{ backgroundColor: "#f8f9fb", padding: "7rem 1.5rem 5rem" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: "#0f616e", letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            We Offer Advanced Rheumatology Treatments With Modern Therapies
          </h2>
          <p style={{ fontSize: "15px", color: "#0f616e", lineHeight: 1.6 }}>
            Internationally approved protocols and personalised care, all under one roof
          </p>
        </div>

        <div className="treatment-grid">
          {treatments.map((t, i) => (
            <div key={i} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "#e0f3f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {t.icon}
              </div>
              <h3 style={{ fontFamily: "var(--font-base)", fontSize: "1rem", fontWeight: 600, color: "#0f616e", margin: 0, lineHeight: 1.3 }}>
                {t.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.65, margin: 0 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TreatmentOfferings
