function Hero() {
  return (
    <>
      {/* Desktop Layout */}
      <section
        className="custom-approach-section relative overflow-hidden hidden lg:block"
        style={{
          background: "#0f616e",
        }}
      >
        <div className="grid grid-cols-2 items-stretch min-h-[100vh]">
          <div className="flex flex-col justify-center gap-8 py-20 pl-[max(8rem,calc((100%-80rem)/2+8rem))] pr-10">
            <h1 className="text-[4.375rem] font-light leading-[1.03] tracking-[-1.6px]" style={{ color: "#ffffff" }}>
              Advanced Care for{" "}
              <span className="relative inline-block">
                Rheumatic
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 12"
                >
                  <path d="M2 10C80 4 200 2 398 6" stroke="#a0e2e4" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>{" "}
              Health
            </h1>
            <p className="text-xl font-light text-white/75 leading-relaxed max-w-xl">
              Empowering clinicians and patients with research-driven insights, clinical evidence, and personalized care protocols for complex autoimmune conditions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors hover:opacity-90" style={{ backgroundColor: "#e86531" }}>
                Get Started →
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover object-center"
              src="/images/hero-doctor.jpg"
              alt="Rheumatologist consulting a patient"
            />
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div
          className="flex flex-col items-center text-center px-6 pt-20 pb-8"
          style={{
            background: "#0f616e",
          }}
        >
          <h1 className="text-[3.0625rem] font-light leading-[1.06] tracking-[-1.4px] mb-5" style={{ color: "#ffffff" }}>
            Advanced Care for{" "}
            <span className="relative inline-block">
              Rheumatic
              <svg
                className="absolute -bottom-1 left-0 w-full h-2.5"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 400 12"
              >
                <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>{" "}
            Health
          </h1>
          <p className="text-base text-white/65 leading-relaxed max-w-sm" style={{ marginBottom: "48px" }}>
            Find lasting relief with expert care from a team of specialists. Virtual visits within days, not weeks. And in-network with insurance.
          </p>
          <button className="text-white px-8 py-3.5 rounded-full font-bold text-base transition-colors hover:opacity-90" style={{ backgroundColor: "#e86531", marginBottom: "20px" }}>
            Get Started →
          </button>
          {/* <p className="text-sm text-white/60">
            See a provider{" "}
            <strong className="font-semibold" style={{ color: "#ffffff", background: "#fa885a", padding: "2px 6px", borderRadius: "3px" }}>
              as soon as tomorrow
            </strong>
          </p> */}
        </div>
        <img
          className="w-full block"
          src="/images/hero-doctor.jpg"
          alt="Rheumatologist consulting a patient"
        />
      </section>
    </>
  )
}

export default Hero
