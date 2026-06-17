const IconFrame = ({ children }) => (
  <svg width="78" height="78" viewBox="0 0 78 78" fill="none" aria-hidden="true">
    {children}
  </svg>
)

const iconStyle = {
  stroke: "#0f616e",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

const conditions = [
  {
    name: "Rheumatoid Arthritis",
    description: "Autoimmune joint inflammation affecting hands, wrists, feet, and larger joints.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M24 42c4-7 9-10 15-10s11 3 15 10" />
        <path {...iconStyle} d="M28 45c3 5 7 8 11 8s8-3 11-8" />
        <path {...iconStyle} d="M20 28l7 8m31-8-7 8" />
        <path {...iconStyle} d="M30 21v10m18-10v10" />
        <circle {...iconStyle} cx="39" cy="39" r="4" />
      </IconFrame>
    ),
  },
  {
    name: "Psoriatic Arthritis",
    description: "Joint pain and swelling linked with psoriasis, nail changes, and tendon pain.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M23 50c9-20 23-28 33-20 7 6 4 18-7 22" />
        <path {...iconStyle} d="M25 50c8-2 16-1 24 4" />
        <path {...iconStyle} d="M31 35c5 2 9 2 14-1" />
        <circle {...iconStyle} cx="29" cy="25" r="3" />
        <circle {...iconStyle} cx="46" cy="24" r="2.5" />
      </IconFrame>
    ),
  },
  {
    name: "Lupus",
    description: "A systemic autoimmune condition that can involve skin, joints, kidneys, and blood.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M18 39c7-12 17-14 21-2 4-12 14-10 21 2" />
        <path {...iconStyle} d="M18 39c8 13 18 15 21 2 3 13 13 11 21-2" />
        <path {...iconStyle} d="M39 25v27" />
        <path {...iconStyle} d="M31 31c2 2 4 3 8 3s6-1 8-3" />
      </IconFrame>
    ),
  },
  {
    name: "Osteoarthritis",
    description: "Wear-and-tear cartilage changes causing stiffness, pain, and reduced mobility.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M25 22c6 2 10 7 10 15v19" />
        <path {...iconStyle} d="M53 22c-6 2-10 7-10 15v19" />
        <path {...iconStyle} d="M29 38h20" />
        <path {...iconStyle} d="M28 50h22" />
        <circle {...iconStyle} cx="25" cy="22" r="5" />
        <circle {...iconStyle} cx="53" cy="22" r="5" />
      </IconFrame>
    ),
  },
  {
    name: "Gout",
    description: "Sudden painful joint attacks caused by uric acid crystal buildup.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M24 50c4-10 11-17 20-21" />
        <path {...iconStyle} d="M32 58h18c5 0 9-4 9-9 0-4-3-7-7-7H41" />
        <path {...iconStyle} d="M23 50c-2 5 2 8 9 8" />
        <path {...iconStyle} d="M44 20l4 8 8 3-8 3-4 8-4-8-8-3 8-3 4-8z" />
      </IconFrame>
    ),
  },
  {
    name: "Spondylitis",
    description: "Inflammatory spine and sacroiliac joint pain, often worse with rest.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M40 18c-8 7-8 12 0 19s8 12 0 23" />
        <path {...iconStyle} d="M29 22h12m-15 9h14m-12 9h14m-12 9h14m-15 9h12" />
        <path {...iconStyle} d="M49 24c6 6 8 14 4 22" />
      </IconFrame>
    ),
  },
  {
    name: "Vasculitis",
    description: "Inflammation of blood vessels that may affect skin, nerves, kidneys, or lungs.",
    icon: (
      <IconFrame>
        <path {...iconStyle} d="M39 16v46" />
        <path {...iconStyle} d="M39 31c-8 0-15-5-18-12" />
        <path {...iconStyle} d="M39 31c8 0 15-5 18-12" />
        <path {...iconStyle} d="M39 45c-8 0-15 5-18 12" />
        <path {...iconStyle} d="M39 45c8 0 15 5 18 12" />
        <circle {...iconStyle} cx="39" cy="38" r="6" />
      </IconFrame>
    ),
  },
  {
    name: "Undiagnosed",
    description: "Persistent joint pain, swelling, stiffness, fatigue, or unexplained autoimmune symptoms.",
    icon: (
      <IconFrame>
        <circle {...iconStyle} cx="39" cy="39" r="24" />
        <path {...iconStyle} d="M31 32c1-6 6-10 12-8 5 1 8 5 8 10 0 7-9 8-10 14" />
        <path {...iconStyle} d="M39 57h.01" />
      </IconFrame>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ columnGap: "3.25rem", rowGap: "3.75rem" }}>
          {conditions.map((condition) => (
            <article key={condition.name} style={{ minWidth: 0 }}>
              <div style={{ height: "86px", display: "flex", alignItems: "flex-start", marginBottom: "1rem" }}>
                {condition.icon}
              </div>
              <h3 style={{
                color: "#111111",
                fontFamily: "var(--font-base)",
                fontSize: "16px",
                fontWeight: 800,
                lineHeight: 1.25,
                margin: "0 0 0.65rem",
              }}>
                {condition.name}
              </h3>
              <p style={{
                color: "#333333",
                fontFamily: "var(--font-base)",
                fontSize: "14px",
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
