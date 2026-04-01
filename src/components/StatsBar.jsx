function StatsBar() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-[60px]">
        {/* Left — Heading */}
        <div className="flex-[1.5] text-center md:text-left">
          <h2
            className="leading-[1.1] font-normal mb-5 text-navy-deep"
            style={{ fontFamily: "var(--font-display)", fontSize: "48px" }}
          >
            Clinically Proven
            <br />
            Rheumatology Care
          </h2>
          <p className="text-[15px] leading-[1.7] text-navy-muted max-w-md" style={{ marginTop: "40px", marginBottom: "32px" }}>
            Our approach focuses on early diagnosis, personalized treatment plans, and modern therapies to control inflammation, prevent joint damage, and improve long-term quality of life.
          </p>

        </div>

        {/* Stat 1 */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="leading-none mb-3 text-navy-deep font-light"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            90%+
          </p>
          <p className="text-[15px] leading-[1.6] font-light tracking-[0.3px] text-navy-muted">
            of patients find relief in{" "}
            <strong className="font-semibold text-navy-deep">10 weeks or less</strong>
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="leading-none mb-3 text-navy-deep font-light"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            86%
          </p>
          <p className="text-[15px] leading-[1.6] font-light tracking-[0.3px] text-navy-muted">
            of undiagnosed patients get a{" "}
            <strong className="font-semibold text-navy-deep">clear diagnosis within 3 months</strong>
          </p>
        </div>
      </div>

      {/* Source — Full Width */}
      <div style={{ maxWidth: "80rem", margin: "4px auto 0", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "12px" }}>
          <div className="w-[32px] h-[32px] rounded-full bg-[#fdd3bc] flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-[12px]" fill="#192333">
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <p className="text-[11px] leading-[1.4] text-navy-muted">
            Source: Outcomes based on clinical studies in rheumatoid arthritis and autoimmune disease management.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StatsBar
