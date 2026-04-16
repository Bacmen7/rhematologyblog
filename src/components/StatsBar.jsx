function StatsBar() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] items-start gap-10 md:gap-[60px]">
        {/* Left -Heading */}
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
        <div className="text-center md:text-left self-start pt-1">
          <p
            className="leading-none mb-3 text-navy-deep font-semibold"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 500 }}
          >
            90%+
          </p>
          <p className="max-w-[260px] text-[15px] leading-[1.6] font-light tracking-[0.3px] text-navy-muted mx-auto md:mx-0">
            of patients find relief in{" "}
            <strong className="font-semibold tracking-[0.1px] text-navy-deep">10 weeks or less</strong>
          </p>
        </div>

        {/* Stat 2 */}
        <div className="text-center md:text-left self-start pt-1">
          <p
            className="leading-none mb-3 text-navy-deep font-semibold"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 84px)", fontWeight: 500 }}
          >
            86%
          </p>
          <p className="max-w-[260px] text-[15px] leading-[1.6] font-light tracking-[0.3px] text-navy-muted mx-auto md:mx-0">
            of undiagnosed patients get a{" "}
            <strong className="font-semibold tracking-[0.1px] text-navy-deep">clear diagnosis within 3 months</strong>
          </p>
        </div>
      </div>

    </section>
  )
}

export default StatsBar
