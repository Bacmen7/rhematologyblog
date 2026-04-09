const conditions = [
  {
    name: "Rheumatoid Arthritis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Acid-Reflux-GERD.svg",
  },
  {
    name: "Psoriatic Arthritis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Irritable-Bowel-Syndrome.svg",
  },
  {
    name: "Lupus",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Bloating.svg",
  },
  {
    name: "Joint Pain",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Abdominal-Pain.svg",
  },
  {
    name: "Gout",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Crohns-Disease.svg",
  },
  {
    name: "Spondylitis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Ulcerative-Colitis.svg",
  },
  {
    name: "Vasculitis",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Small-Intestinal-Bacterial-Overgrowth.svg",
  },
  {
    name: "Undiagnosed",
    icon: "https://oshihealth.com/wp-content/uploads/2024/11/Icon-Undiagnosed-GI-Symptoms.svg",
  },
]

function WhyRheuma() {
  return (
    <section className="custom-approach-section" style={{ backgroundColor: "#e8f4f8", padding: "5rem 0 6rem" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center" style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.8px", marginBottom: "20px" }}>
            Expert care for all rheumatic
            <br />
            symptoms and conditions
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#5E5E5E", fontFamily: "var(--font-base)", maxWidth: "600px", margin: "0 auto" }}>
            From joint pain to complex autoimmune disorders, we diagnose and treat{" "}
            <strong style={{ color: "#ffffff", background: "#1AA3B5", padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>rheumatic and autoimmune conditions</strong>.
          </p>
        </div>

        {/* Cards Grid — 4 columns like reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5" style={{ marginTop: "3rem" }}>
          {conditions.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center justify-center text-center cursor-pointer"
              style={{ backgroundColor: "#ffffff", borderRadius: "0.5rem", padding: "2.5rem 1.5rem", minHeight: "200px" }}
            >
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#dbeef5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <img src={c.icon} alt={c.name} style={{ width: "28px", height: "28px" }} />
              </div>
              <p style={{ fontSize: "15px", fontWeight: 600, color: "#0f616e", fontFamily: "var(--font-base)", lineHeight: 1.3, marginBottom: "12px" }}>
                {c.name}
              </p>
              <span className="inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontSize: "13px", fontWeight: 700, color: "#1AA3B5", fontFamily: "var(--font-base)" }}>
                Read more
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#1AA3B5", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyRheuma
