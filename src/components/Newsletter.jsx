function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-primary/20 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Stay at the Forefront of Rheumatic Care
          </h2>
          <p className="text-teal-soft text-lg mb-10 leading-relaxed">
            Join 15,000+ clinicians receiving our bi-weekly digest of peer-reviewed insights and clinical guidelines.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-1 px-5 py-3 rounded-full bg-white border-none focus:ring-2 focus:ring-primary shadow-sm text-navy-deep"
              placeholder="professional@hospital.org"
              type="email"
            />
            <button className="bg-navy-deep text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Join Now
            </button>
          </form>
          <p className="mt-6 text-xs text-teal-soft/60">No spam. Only high-quality clinical evidence.</p>
        </div>
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg height="100%" viewBox="0 0 800 400" width="100%" xmlns="http://www.w3.org/2000/svg">
            <circle className="text-teal-soft" cx="0" cy="0" fill="currentColor" r="100" />
            <circle className="text-teal-soft" cx="800" cy="400" fill="currentColor" r="150" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
