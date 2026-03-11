function Hero() {
  return (
    <>
      {/* Desktop Layout */}
      <section
        className="custom-approach-section relative overflow-hidden hidden lg:block"
        style={{
          background: "radial-gradient(ellipse at 20% 0%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #b1efec 0%, transparent 45%), #f8fafd",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-10 items-stretch min-h-[76vh]">
          <div className="flex flex-col justify-center gap-6 py-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-teal-soft text-xs font-bold uppercase tracking-wider w-fit">
              Latest Research Update
            </div>
            <h1 className="font-display text-7xl leading-[0.96] tracking-tight text-navy-deep">
              Advanced Care for <span className="italic font-normal">Rheumatic Health</span>
            </h1>
            <p className="text-xl text-teal-soft/80 leading-relaxed max-w-xl">
              Empowering clinicians and patients with research-driven insights, clinical evidence, and personalized care protocols for complex autoimmune conditions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-primary hover:bg-primary-hover text-navy-deep px-6 py-2.5 rounded-full font-semibold text-base transition-colors">
                Get Started →
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src="/images/hero-doctor.jpg"
              alt="Rheumatologist consulting a patient"
            />
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div
          className="flex flex-col items-center text-center px-6 pt-14 pb-10"
          style={{
            background: "radial-gradient(ellipse at 20% 0%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #b1efec 0%, transparent 45%), #f8fafd",
          }}
        >
          <h1 className="text-[2.8rem] font-display text-navy-deep leading-[0.96] tracking-tight mb-5">
            Advanced Care for <span className="italic font-normal">Rheumatic Health</span>
          </h1>
          <p className="text-base text-navy-muted leading-relaxed mb-8 max-w-sm">
            Find lasting relief with expert care from a team of specialists. Virtual visits within days, not weeks. And in-network with insurance.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-navy-deep px-8 py-3.5 rounded-full font-bold text-base transition-colors mb-5">
            Get Started →
          </button>
          <p className="text-sm text-navy-muted">
            See a provider{" "}
            <span className="font-semibold text-navy-deep underline decoration-accent decoration-2 underline-offset-2">
              as soon as tomorrow
            </span>
          </p>
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
