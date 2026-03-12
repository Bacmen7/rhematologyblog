const updates = [
  {
    date: "JAN 24, 2024",
    title: "New Oral JAK Inhibitor Shows Promising Results for Psoriatic Arthritis",
    summary: "Findings from the latest Phase 3 trial indicate significant reduction in joint swelling with fewer side effects...",
  },
  {
    date: "JAN 18, 2024",
    title: "Study Links Gut Microbiome Diversity to Lupus Disease Activity",
    summary: "New research suggests that specific probiotic strains might help stabilize symptoms in SLE patients...",
  },
  {
    date: "JAN 05, 2024",
    title: "The Impact of Vitamin D on Chronic Joint Pain: A 5-Year Review",
    summary: "Analyzing data from 10,000 patients to understand the critical role of Vitamin D in bone health maintenance...",
  },
]

function ResearchUpdates() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2>Research Updates</h2>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        <div className="space-y-6">
          {updates.map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border hover:bg-white transition-colors cursor-pointer group"
            >
              <div className="text-navy-deep text-sm min-w-[120px]" style={{ fontFamily: "var(--font-base)", fontWeight: 600 }}>{item.date}</div>
              <div className="flex-1">
                <h4 className="text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-navy-muted">{item.summary}</p>
              </div>
              <span className="material-symbols-outlined self-center text-navy-muted/30">chevron_right</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchUpdates
