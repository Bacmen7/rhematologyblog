const treatments = [
  {
    icon: "pill",
    title: "JAK Inhibitors",
    description: "Safety profiles, monitoring requirements, and comparative efficacy in clinical practice.",
  },
  {
    icon: "medication",
    title: "NSAID Management",
    description: "Balancing cardiovascular and GI risks in long-term osteoarthritis management.",
  },
  {
    icon: "biotech",
    title: "Biosimilar Protocols",
    description: "Evidence-based transition strategies and patient communication guides.",
  },
]

function TreatmentDeepDives() {
  return (
    <section className="w-full py-24 bg-navy-deep text-white my-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Treatment Deep-dives</h2>
          <p className="text-white/90 max-w-2xl text-lg">
            Detailed clinical pathways and prescribing information for the most critical therapies in modern rheumatology.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="bg-primary text-navy-deep w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-white/85 mb-6 leading-relaxed">{item.description}</p>
              <span className="text-white font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                Read Guide <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreatmentDeepDives
