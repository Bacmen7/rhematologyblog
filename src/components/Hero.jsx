function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4fb]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-stretch min-h-[68vh] lg:min-h-[76vh]">
        <div className="flex flex-col justify-center gap-6 py-12 lg:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-teal-soft text-xs font-bold uppercase tracking-wider w-fit">
            Latest Research Update
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-deep leading-[1.1] tracking-tight">
            Advanced Care for Rheumatic Health
          </h1>
          <p className="text-lg lg:text-xl text-teal-soft/80 leading-relaxed max-w-xl">
            Empowering clinicians and patients with research-driven insights, clinical evidence, and personalized care protocols for complex autoimmune conditions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-primary hover:bg-primary-hover text-navy-deep px-6 py-2.5 rounded-full font-semibold text-base transition-colors">
              Check Insurance
            </button>
            <button className="border-2 border-teal-soft/20 px-6 py-2.5 rounded-full font-semibold text-base hover:bg-teal-soft/5 transition-colors">
              Clinical Guides
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            className="w-full h-full object-cover"
            src="/images/hero-doctor.jpg"
            alt="Rheumatologist consulting a patient"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
