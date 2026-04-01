function ApproachSection() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-[#1aa3b5] pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-white">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="!mb-14 md:!mb-16 max-w-[800px]" style={{ color: "#ffffff" }}>
          Experience relief to joint pain from{" "}
          <span className="relative inline-block">
            personalised care
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 400 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10C80 4 200 2 398 6" stroke="#ffffff" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-[72px] gap-x-[100px]">
          {/* Card 1 - Comprehensive Rheumatology Care */}
          <div className="flex items-start gap-6">
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: "26px", color: "#ffffff" }}>cardiology</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 !text-[20px] !font-semibold !leading-[1.4]">Comprehensive Rheumatology Care</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-white/70">
                Our specialists evaluate joints, muscles, immune health, and systemic symptoms to diagnose and manage rheumatic diseases effectively.
              </p>
            </div>
          </div>

          {/* Card 2 - Evidence-Based Treatments */}
          <div className="flex items-start gap-6">
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: "26px", color: "#ffffff" }}>biotech</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 !text-[20px] !font-semibold !leading-[1.4]">Evidence-Based Treatments</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-white/70">
                We use proven treatments including DMARDs, biologics, and targeted therapies to reduce inflammation, prevent joint damage, and improve quality of life.
              </p>
            </div>
          </div>

          {/* Card 3 - Early Diagnosis & Accurate Evaluation */}
          <div className="flex items-start gap-6">
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: "26px", color: "#ffffff" }}>diagnosis</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 !text-[20px] !font-semibold !leading-[1.4]">Early Diagnosis &amp; Accurate Evaluation</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-white/70">
                Advanced diagnostic tools and expert clinical assessment help detect arthritis and autoimmune diseases early.
              </p>
            </div>
          </div>

          {/* Card 4 - Patient-Centered Care */}
          <div className="flex items-start gap-6">
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: "26px", color: "#ffffff" }}>volunteer_activism</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 !text-[20px] !font-semibold !leading-[1.4]">Patient-Centered Care</h3>
              <p className="!text-[16px] !leading-[1.6] font-normal text-white/70">
                We focus on long-term disease management, personalized treatment plans, and helping patients maintain active, healthy lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f5f5f5" />
      </svg>
    </section>
  )
}

export default ApproachSection
