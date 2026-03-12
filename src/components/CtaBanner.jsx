function CtaBanner() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-navy-deep text-white pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px]">
      {/* Top wave */}
      <svg className="absolute top-0 left-0 w-full rotate-180" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-stretch gap-10">
        {/* Left — Text */}
        <div className="flex-[1.1] flex flex-col justify-center md:pr-[50px] text-center md:text-left">
          <h2
            className="text-white leading-[1.1] font-normal mb-10"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5.5vw, 68px)", letterSpacing: "-0.5px" }}
          >
            Ready to get started?
          </h2>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <a
              href="#"
              className="inline-block rounded-full font-semibold text-[16px] transition-all hover:opacity-90"
              style={{ backgroundColor: "#b7efea", color: "#142131", padding: "20px 36px" }}
            >
              Schedule An Appointment
            </a>
            <a href="#" className="text-white text-[17px]">
              or <span className="font-semibold underline underline-offset-[6px] decoration-2">let&apos;s get in touch</span>
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div className="flex-1 flex items-center">
          <img
            src="/images/hero-consult.jpg"
            alt="Doctor consulting with patient"
            className="w-full block rounded-[4px]"
            style={{ height: "550px", objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
