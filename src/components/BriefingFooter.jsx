function BriefingFooter() {
  return (
    <footer className="bg-background-light py-20 border-t border-navy-deep/5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="font-serif text-2xl font-bold mb-6">RheumaInsights</div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
            Synthesizing complex clinical data into strategic intelligence for executive decision-makers in the rheumatology space.
          </p>
          <div className="flex gap-6 opacity-40">
            <a href="#">
              <span className="material-symbols-outlined">description</span>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">analytics</span>
            </a>
            <a href="#">
              <span className="material-symbols-outlined">policy</span>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-teal-soft">Resources</h5>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-navy-deep/60">
            <li><a className="hover:text-primary transition-colors" href="#">Policy Briefs</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Market Reports</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Executive Summaries</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-teal-soft">Institutional</h5>
          <ul className="space-y-4 text-xs font-semibold uppercase tracking-widest text-navy-deep/60">
            <li><a className="hover:text-primary transition-colors" href="#">Editorial Board</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Disclosure Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Advisory</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-navy-deep/5 flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-500/60">&copy; 2024 RheumaInsights Medical Media. Strategic Resource Only.</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-500/60">Privacy | Compliance</p>
      </div>
    </footer>
  )
}

export default BriefingFooter
