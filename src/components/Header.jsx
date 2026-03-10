function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-md border-b border-teal-soft/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-navy-deep">
              <span className="material-symbols-outlined block text-2xl">rheumatology</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-navy-deep">RheumaInsights</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold hover:text-teal-soft transition-colors" href="#">Insights</a>
            <a className="text-sm font-semibold hover:text-teal-soft transition-colors" href="#">Treatments</a>
            <a className="text-sm font-semibold hover:text-teal-soft transition-colors" href="#">Diagnostic Guides</a>
            <a className="text-sm font-semibold hover:text-teal-soft transition-colors" href="#">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden lg:flex items-center gap-2 text-teal-soft">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="bg-primary hover:bg-primary/90 text-navy-deep px-6 py-2.5 rounded-full font-bold text-sm transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
