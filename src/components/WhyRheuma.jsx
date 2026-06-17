const s = { stroke: "#0f616e", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }

const conditions = [
  {
    name: "Rheumatoid Arthritis",
    description: "Autoimmune joint inflammation affecting hands, wrists, feet, and larger joints.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M18 11V6a2 2 0 00-2-2 2 2 0 00-2 2" />
        <path d="M14 10V4a2 2 0 00-2-2 2 2 0 00-2 2v2" />
        <path d="M10 10.5V6a2 2 0 00-2-2 2 2 0 00-2 2v8" />
        <path d="M6 14v1a6 6 0 006 6h0a6 6 0 006-6v-5a2 2 0 00-2-2 2 2 0 00-2 2v-2.5" />
      </svg>
    ),
  },
  {
    name: "Psoriatic Arthritis",
    description: "Joint pain and swelling linked with psoriasis, nail changes, and tendon pain.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M12 2a5 5 0 015 5c0 3-2 5-5 7-3-2-5-4-5-7a5 5 0 015-5z" />
        <circle cx="12" cy="7" r="1.5" fill="#0f616e" stroke="none" />
        <path d="M8 17c0 2.5 1.8 4 4 4s4-1.5 4-4" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    name: "Lupus",
    description: "A systemic autoimmune condition that can involve skin, joints, kidneys, and blood.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    name: "Osteoarthritis",
    description: "Wear-and-tear cartilage changes causing stiffness, pain, and reduced mobility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v4" />
        <path d="M9 12h6" />
        <path d="M9 12l-2 8" />
        <path d="M15 12l2 8" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    name: "Gout",
    description: "Sudden painful joint attacks caused by uric acid crystal buildup.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Spondylitis",
    description: "Inflammatory spine and sacroiliac joint pain, often worse with rest.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M12 2v20" />
        <path d="M9 5h6" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M9 17h6" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    name: "Vasculitis",
    description: "Inflammation of blood vessels that may affect skin, nerves, kidneys, or lungs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <path d="M12 2a8 8 0 00-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 00-8-8z" />
        <path d="M12 6v4l2 2" />
      </svg>
    ),
  },
  {
    name: "Undiagnosed",
    description: "Persistent joint pain, swelling, stiffness, fatigue, or unexplained autoimmune symptoms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r=".5" fill="#0f616e" stroke="none" />
      </svg>
    ),
  },
]

function WhyRheuma() {
  return (
    <section className="custom-approach-section" style={{ backgroundColor: "#f4f6f8", padding: "4.75rem 0 4.25rem" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{
            color: "#0f616e",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.9rem, 3vw, 2.45rem)",
            lineHeight: 1.18,
            margin: "0 0 14px",
          }}>
            Our Specialities In Rheumatology
          </h2>
          <p style={{
            color: "#2f2f2f",
            fontFamily: "var(--font-base)",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto",
          }}>
            From osteoarthritis to complex autoimmune disorders, we diagnose and treat rheumatic and autoimmune conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "16px" }}>
          {conditions.map((condition) => (
            <article key={condition.name} style={{
              backgroundColor: "#fff",
              borderRadius: "14px",
              padding: "24px 20px",
              border: "1px solid #e2eef0",
              display: "flex", flexDirection: "column", gap: "12px",
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "12px",
                backgroundColor: "#e8f4f6",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {condition.icon}
              </div>
              <h3 style={{
                color: "#0f616e",
                fontFamily: "var(--font-base)",
                fontSize: "15px",
                fontWeight: 700,
                lineHeight: 1.25,
                margin: 0,
              }}>
                {condition.name}
              </h3>
              <p style={{
                color: "#555",
                fontFamily: "var(--font-base)",
                fontSize: "13px",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {condition.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyRheuma
