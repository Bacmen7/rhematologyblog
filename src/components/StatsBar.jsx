function StatsBar() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-[60px]">
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
        <div className="flex-1 text-center md:text-left">
          <p
            className="leading-none mb-3 text-navy-deep font-bold"
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
            className="leading-none mb-3 text-navy-deep font-bold"
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

    </section>
  )
}

export default StatsBar
