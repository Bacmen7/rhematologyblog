import { Link } from "react-router-dom"

const services = [
  {
    title: "Specialist Consultation",
    desc: "One-on-one with Dr. Raghavendra H",
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    title: "Diet Consultation",
    desc: "Personalised dietary guidance",
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2s-4 2-4 7c0 3.1 2 5 4 5z"/></svg>,
  },
  {
    title: "Lab Facility",
    desc: "Guided lab testing and clear results",
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2h-4m-5 0h5"/></svg>,
  },
  {
    title: "Flexible Timings",
    desc: "Morning and evening slots",
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: "Personalised Treatment",
    desc: "Built around your condition and life",
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
  },
]

function OmniRheumaAbout() {
  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div className="omni-about-grid" style={{
        maxWidth: "1140px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.4fr 1fr",
        gap: "48px", alignItems: "center",
      }}>

        {/* LEFT */}
        <div>
          <p style={{
            fontFamily: "var(--font-base)", fontSize: "11px", fontWeight: 700,
            letterSpacing: "2px", textTransform: "uppercase", color: "#e86531",
            margin: "0 0 16px",
          }}>
            Why Choose
          </p>

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700, lineHeight: 1.0,
            color: "#0f616e", margin: "0 0 16px",
            letterSpacing: "-1px",
          }}>
            Omni Rheuma
          </h2>


          <blockquote style={{
            backgroundColor: "#f4f9fa", borderRadius: "12px",
            padding: "20px 24px", margin: "0 0 1.5rem",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "16px",
              lineHeight: 1.65, color: "#1a3a4a", fontStyle: "italic",
              margin: "0 0 10px",
            }}>
              "We built Omni Rheuma because too many patients spend years on the wrong treatment, not because the condition is untreatable, but because they never reached the right specialist."
            </p>
            <cite style={{
              fontFamily: "var(--font-base)", fontSize: "11px", fontWeight: 700,
              color: "#e86531", letterSpacing: "1.5px",
              textTransform: "uppercase", fontStyle: "normal",
            }}>
              — Omni Rheuma
            </cite>
          </blockquote>

          <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.75, color: "#555", marginBottom: "1rem" }}>
            In India, most people suffering from joint pain are older adults with limited access to specialist care. They spend years on painkillers prescribed by general physicians, never reaching a rheumatologist who can identify the real cause.
          </p>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.75, color: "#555", marginBottom: "1rem" }}>
            We connect patients directly to qualified rheumatologists across India. No long referral chains, no months-long waiting periods. Whether you are newly diagnosed, dealing with a flare, or want a second opinion on a diagnosis you have been living with for years, we get you to the right specialist faster.
          </p>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.75, color: "#555", marginBottom: "1rem" }}>
            We are not here to manage symptoms. We are here to find the cause, treat it precisely, and support you through every step of recovery.
          </p>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "15px", lineHeight: 1.75, color: "#555", marginBottom: "1.5rem" }}>
            Find a rheumatologist near you today.
          </p>
          <a href="/book-appointment" style={{
            display: "inline-block",
            backgroundColor: "#e86531", color: "#fff",
            padding: "13px 32px", borderRadius: "50px",
            fontWeight: 700, fontSize: "15px",
            textDecoration: "none",
            fontFamily: "var(--font-base)",
          }}>
            Book your consultation on Omni Rheuma
          </a>
        </div>

        {/* RIGHT */}
        <div>
          <p style={{
            fontFamily: "var(--font-base)", fontSize: "10.5px", fontWeight: 700,
            letterSpacing: "2px", textTransform: "uppercase", color: "#888",
            margin: "0 0 14px",
          }}>
            The Care We Provide
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                padding: "18px 0",
                borderBottom: i < services.length - 1 ? "1px solid #edf2f4" : "none",
              }}>
                <div style={{
                  flexShrink: 0,
                  width: "38px", height: "38px",
                  borderRadius: "10px",
                  backgroundColor: s.green ? "rgba(22,163,74,0.08)" : s.highlight ? "rgba(232,101,49,0.08)" : "#eef6f8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {s.svg}
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-base)", fontSize: "14px", fontWeight: 700,
                    color: s.green ? "#16a34a" : s.highlight ? "#e86531" : "#0f2044", margin: "0 0 3px",
                  }}>
                    {s.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-base)", fontSize: "13px",
                    color: "#777", margin: 0, lineHeight: 1.5,
                  }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default OmniRheumaAbout
