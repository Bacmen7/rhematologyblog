import { Link } from "react-router-dom"

const rows = [
  "DM-Qualified Rheumatology Specialist",
  "Accurate Diagnosis in First Visit",
  "Advanced Therapies",
  "Personalised Treatment Plans",
  "1-on-1 Care by Senior Doctor",
  "Between Clinic Visits Patient Care",
  "Customized Diet Plans for Your Rheumatology",
]

function ComparisonTable() {
  return (
    <section className="comparison-section" style={{ backgroundColor: "#fff", padding: "4rem 1.5rem" }}>
      <div className="comparison-wrapper" style={{ maxWidth: "860px", margin: "0 auto" }}>

        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: "#0f616e", textAlign: "center", marginBottom: "2.5rem", letterSpacing: "-0.8px", lineHeight: 1.1 }}>
          Why Choose Omni Rheuma?
        </h2>

        {/* Table */}
        <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0" }}>

          {/* Header row */}
          <div className="comparison-table-header" style={{ backgroundColor: "#f8fafc" }}>
            <div style={{ padding: "16px 20px", fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, color: "#0f2044" }}>
              Advantages
            </div>
            <div style={{ padding: "16px 20px", textAlign: "center", fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, color: "#0f616e", backgroundColor: "#e8f4f8" }}>
              <span className="hide-mobile">Omni Rheuma</span>
              <span className="show-mobile">Omni</span>
            </div>
            <div style={{ padding: "16px 20px", textAlign: "center", fontFamily: "var(--font-base)", fontSize: "16px", fontWeight: 700, color: "#666" }}>
              <span className="hide-mobile">Other Clinics / Hospitals</span>
              <span className="show-mobile">Others</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="comparison-table-row"
              style={{ borderTop: "1px solid #e2e8f0", backgroundColor: i % 2 === 0 ? "#fff" : "#fafcff" }}
            >
              <div style={{ padding: "16px 20px", fontFamily: "var(--font-base)", fontSize: "15px", fontWeight: 500, color: "#333" }}>
                {row}
              </div>
              <div className="comparison-icon-cell" style={{ padding: "16px 20px", textAlign: "center", backgroundColor: "#eef6f8" }}>
                <img src="/rheumatologist-doctor-bangalore/right_icon.webp" alt="Yes" width="32" height="32" style={{ display: "inline-block" }} />
              </div>
              <div className="comparison-icon-cell" style={{ padding: "16px 20px", textAlign: "center", backgroundColor: "#eef6f8" }}>
                <img src="/rheumatologist-doctor-bangalore/wrong_icon.webp" alt="No" width="32" height="32" style={{ display: "inline-block" }} />
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            href="#book-consultation"
            onClick={(e) => { e.preventDefault(); document.getElementById("book-consultation")?.scrollIntoView({ behavior: "smooth" }) }}
            style={{ display: "inline-block", backgroundColor: "#e86531", color: "#fff", padding: "14px 40px", borderRadius: "50px", fontWeight: 700, fontSize: "15px", textDecoration: "none", fontFamily: "var(--font-base)", cursor: "pointer" }}
          >
            Book Consultation
          </a>
        </div>

      </div>
    </section>
  )
}

export default ComparisonTable
