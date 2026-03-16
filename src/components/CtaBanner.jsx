function CtaBanner() {
  return (
    <section className="w-full flex flex-col bg-white overflow-visible">
      {/* Spacer */}
      <div style={{ height: "80px", backgroundColor: "#ffffff" }} />
      {/* Wave SVG */}
      <svg
        className="w-full h-[24px] sm:h-[90px] md:h-[120px] text-[#0f616e] block"
        preserveAspectRatio="none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
          fill="currentColor"
        />
      </svg>

      {/* Content Area */}
      <div className="bg-[#0f616e] w-full overflow-visible">
        <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 pt-6 sm:pt-10">
          <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
            {/* Left — Text */}
            <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
              <h2
                className="leading-[1.1] font-normal !mb-10 md:!mb-14 text-center md:text-left"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 5.5vw, 68px)",
                  letterSpacing: "-0.5px",
                  color: "#ffffff",
                }}
              >
                Ready to get started?
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                <a
                  href="#"
                  className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                  style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "16px 32px" }}
                >
                  Schedule An Appointment
                </a>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-[15px] text-gray-100 opacity-90">or</span>
                  <a
                    href="#"
                    className="text-[15px] font-semibold underline decoration-2 underline-offset-[6px] hover:text-[#1AA3B5] transition-colors"
                    style={{ color: "#ffffff" }}
                  >
                    let&apos;s get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Image (overflow into wave) */}
            <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
              <img
                src="/images/hero-consult.jpg"
                alt="Doctor consulting with patient"
                className="w-full block rounded-[4px] absolute bottom-0"
                style={{
                  height: "clamp(300px, 50vw, 520px)",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
