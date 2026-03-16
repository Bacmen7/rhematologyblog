const footerLinks = {
  "Knowledge Base": ["Research Papers", "Treatment Guides", "Drug Monograph", "CME Activities"],
  "Professional": ["For Clinicians", "Practice Mgmt", "Board Review", "Podcasts"],
  "Support": ["Help Center", "Contact Us", "Advisors", "Privacy"],
  "Company": ["About Us", "Careers", "Editorial Policy", "Newsletter"],
}

function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-teal-soft/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-lg text-navy-deep">
                <span className="material-symbols-outlined block text-2xl">rheumatology</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-navy-deep">RheumaInsights</span>
            </div>
            <p className="text-teal-soft text-sm leading-relaxed mb-6 max-w-xs">
              The definitive clinical resource for autoimmune and musculoskeletal medicine. Peer-reviewed, evidence-based, and physician-led.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-teal-soft/10 flex items-center justify-center text-teal-soft hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-teal-soft/10 flex items-center justify-center text-teal-soft hover:bg-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-bold mb-6">{title}</h5>
              <ul className="space-y-4 text-sm text-teal-soft/80">
                {links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-teal-soft" href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-teal-soft/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-teal-soft/60">Medical disclaimer: This content is for professional educational purposes only.</p>
          <p className="text-xs text-teal-soft/60">&copy; 2024 RheumaInsights Medical Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
