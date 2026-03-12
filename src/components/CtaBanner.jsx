function CtaBanner() {
  return (
    <section className="cta-wrapper relative w-full overflow-hidden md:py-[80px] py-0">
      {/* Mobile solid navy background — hidden on desktop */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{ backgroundColor: "#142131", zIndex: 0 }}
      />

      {/* Desktop wavy background — hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full hidden md:block" style={{ zIndex: 1 }}>
        <svg className="w-full h-full block" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M0,80 C 400,80 900,180 1440,380 L1440,800 L0,800 Z" fill="#142131" />
        </svg>
      </div>

      <div
        className="relative flex flex-col md:flex-row items-stretch max-w-[1280px] mx-auto px-0 md:px-10"
        style={{ zIndex: 2 }}
      >
        {/* Left — Text */}
        <div className="flex-[1.1] flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1 md:pr-[50px] mt-0 md:mt-[100px] mb-0 md:mb-10 px-6 md:px-0 pt-3 md:pt-0 pb-[80px] md:pb-0">
          <h2
            className="leading-[1.1] font-normal mb-9 md:mb-10 max-w-[320px] md:max-w-none mx-auto md:mx-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5.5vw, 68px)",
              letterSpacing: "-0.5px",
              color: "#ffffff",
            }}
          >
            Ready to get started?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <a
              href="#"
              className="inline-block rounded-full font-semibold text-[17px] md:text-[16px] transition-all hover:opacity-90 w-full md:w-auto max-w-[340px] text-center"
              style={{ backgroundColor: "#b7efea", color: "#142131", padding: "18px 36px" }}
            >
              Schedule An Appointment
            </a>
            <a href="#" className="text-[17px]" style={{ color: "#ffffff" }}>
              or{" "}
              <span className="font-semibold underline underline-offset-[6px] decoration-2">
                let&apos;s get in touch
              </span>
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div className="flex-1 flex items-center order-1 md:order-2 mt-0 md:mt-0 relative">
          <img
            src="/images/hero-consult.jpg"
            alt="Doctor consulting with patient"
            className="w-full block md:rounded-[4px] rounded-none"
            style={{
              height: "550px",
              objectFit: "cover",
              objectPosition: "center 20%",
            }}
          />
          {/* Mobile wave overlay on bottom of image — hidden on desktop */}
          <div className="block md:hidden absolute bottom-[-1px] left-0 w-full" style={{ height: "100px", zIndex: 5 }}>
            <svg className="w-full h-full block" viewBox="0 0 1440 200" preserveAspectRatio="none">
              <path d="M0,150 C 400,150 800,0 1440,0 L1440,200 L0,200 Z" fill="#142131" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
