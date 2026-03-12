function StatsBar() {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left — Heading */}
          <div>
            <h2 className="text-[1.5rem] md:text-[1.75rem] leading-[1.2] tracking-[-0.5px] font-normal" style={{ color: "#ffffff" }}>
              Clinically-proven rheumatic care
            </h2>
          </div>

          {/* Stat 1 */}
          <div>
            <p className="text-[3.5rem] md:text-[4rem] font-light leading-none tracking-tight text-white mb-1">
              92%
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              of patients find relief in <strong className="text-white font-semibold">10 weeks or less</strong>
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-[3.5rem] md:text-[4rem] font-light leading-none tracking-tight text-white mb-1">
              88%
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              of undiagnosed patients get a <strong className="text-white font-semibold">clear diagnosis within 3 months</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "60px" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 60"
        fill="none"
      >
        <path
          d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z"
          fill="#f8fafd"
        />
      </svg>
    </section>
  )
}

export default StatsBar
