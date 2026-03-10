import { useEffect, useState } from "react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [partnershipOpen, setPartnershipOpen] = useState(false)
  const [partnershipMounted, setPartnershipMounted] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)
  const [learnMounted, setLearnMounted] = useState(false)
  const desktopNav = ["Our Approach", "Pricing & Insurance", "About Us"]
  const mobileQuickLinks = ["Our Approach", "Pricing & Insurance", "Partnerships", "Learn", "About Us"]
  const categories = [
    "Rheumatoid Arthritis",
    "Psoriatic Arthritis",
    "Lupus",
    "Osteoarthritis",
    "Gout",
    "Vasculitis",
    "Spondyloarthritis",
    "Ankylosing Spondylitis",
  ]
  const audiences = ["Individuals", "Employers", "Health Plans", "Clinicians"]
  const partnershipCards = [
    {
      audience: "For Employers",
      title: "Bring RheumaInsights to your employees",
      image: "/images/hero-consult.jpg",
      alt: "Workplace care partnership session",
    },
    {
      audience: "For Health Plans",
      title: "Add RheumaInsights to your value-based provider network",
      image: "/images/featured-main.jpg",
      alt: "Clinical team collaborating at computers",
    },
    {
      audience: "For Providers",
      title: "Expand your practice's clinical capacity",
      image: "/images/dr-sarah-miller.jpg",
      alt: "Provider portrait in clinic",
    },
  ]
  const learnLinks = [
    { icon: "edit", label: "Blog" },
    { icon: "menu_book", label: "Clinical Guides" },
    { icon: "bar_chart", label: "Research and Outcomes" },
    { icon: "group", label: "Patient Stories" },
  ]

  useEffect(() => {
    if (partnershipOpen) {
      setPartnershipMounted(true)
      return
    }

    const timer = setTimeout(() => setPartnershipMounted(false), 220)
    return () => clearTimeout(timer)
  }, [partnershipOpen])

  useEffect(() => {
    if (learnOpen) {
      setLearnMounted(true)
      return
    }

    const timer = setTimeout(() => setLearnMounted(false), 180)
    return () => clearTimeout(timer)
  }, [learnOpen])

  useEffect(() => {
    document.body.style.overflow = partnershipOpen || learnOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [partnershipOpen, learnOpen])

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
            {desktopNav.map((item) => (
              <a key={item} className="text-sm font-semibold hover:text-teal-soft transition-colors" href="#">
                {item}
              </a>
            ))}
            <button
              className="inline-flex items-center gap-1 text-sm font-semibold hover:text-teal-soft transition-colors"
              onClick={() => {
                setPartnershipOpen((prev) => !prev)
                setMobileMenuOpen(false)
                setLearnOpen(false)
              }}
              type="button"
            >
              Partnerships
              <span className="material-symbols-outlined text-base">{partnershipOpen ? "expand_less" : "expand_more"}</span>
            </button>
            <button
              aria-expanded={learnOpen}
              className="inline-flex items-center gap-1 text-sm font-semibold hover:text-teal-soft transition-colors"
              onClick={() => {
                setLearnOpen((prev) => !prev)
                setMobileMenuOpen(false)
                setPartnershipOpen(false)
              }}
              type="button"
            >
              Learn
              <span className="material-symbols-outlined text-base">{learnOpen ? "expand_less" : "expand_more"}</span>
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-navy-deep"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev)
              setPartnershipOpen(false)
              setLearnOpen(false)
            }}
            type="button"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
          </button>
          <button className="hidden lg:flex items-center gap-2 text-teal-soft">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="bg-primary hover:bg-primary/90 text-navy-deep px-5 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all">
            Subscribe
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-teal-soft/15 bg-white px-6 py-4">
          <nav className="grid grid-cols-2 gap-3">
            {mobileQuickLinks.map((item) =>
              item === "Partnerships" ? (
                <button
                  key={item}
                  className="text-sm text-left font-semibold text-navy-deep"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setPartnershipOpen(true)
                    setLearnOpen(false)
                  }}
                  type="button"
                >
                  {item}
                </button>
              ) : item === "Learn" ? (
                <button
                  key={item}
                  className="text-sm text-left font-semibold text-navy-deep"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setLearnOpen(true)
                    setPartnershipOpen(false)
                  }}
                  type="button"
                >
                  {item}
                </button>
              ) : (
                <a key={item} className="text-sm font-semibold text-navy-deep" href="#" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>
      )}

      {learnMounted && (
        <div
          className={`fixed inset-x-0 top-20 bottom-0 z-40 backdrop-blur-[2.5px] transition-all duration-200 ease-out ${
            learnOpen ? "bg-black/55 opacity-100 pointer-events-auto" : "bg-black/0 opacity-0 pointer-events-none"
          }`}
          onClick={() => setLearnOpen(false)}
        >
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-2 w-[min(1240px,calc(100%-16px))] rounded-[1.6rem] md:rounded-[2rem] overflow-hidden bg-[#e8edf5] transition-all duration-200 ease-out ${
              learnOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.98]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <div className="grid md:grid-cols-[1.05fr_1fr_1fr]">
              <div className="bg-white px-5 md:px-10 py-6 md:py-8">
                <h3 className="font-display text-3xl md:text-4xl mb-3 text-navy-deep">Rheuma Learn</h3>
                <p className="text-sm md:text-base text-navy-muted mb-5 md:mb-8">
                  Your go-to resource for expert advice and insights on chronic rheumatic care.
                </p>
                <div className="space-y-2">
                  {learnLinks.map((item) => (
                    <a
                      key={item.label}
                      className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#f4f7fc] transition-colors"
                      href="#"
                      onClick={() => setLearnOpen(false)}
                    >
                      <span className="flex items-center gap-3 text-navy-deep font-medium">
                        <span className="w-8 h-8 rounded-full bg-[#ecf2fb] inline-flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                        </span>
                        {item.label}
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-navy-muted">arrow_forward</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-5 md:px-8 py-6 md:py-8">
                <p className="text-[11px] tracking-[0.24em] uppercase font-bold text-navy-muted mb-4">Categories</p>
                <div className="space-y-2">
                  {categories.map((item) => (
                    <a
                      key={item}
                      className="flex items-center justify-between pb-2 text-[15px] font-medium text-navy-deep"
                      href="#"
                      onClick={() => setLearnOpen(false)}
                    >
                      {item}
                      <span className="w-7 h-7 rounded-full bg-primary inline-flex items-center justify-center">
                        <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-5 md:px-8 py-6 md:py-8">
                <p className="text-[11px] tracking-[0.24em] uppercase font-bold text-navy-muted mb-4">Audiences</p>
                <div className="space-y-2 mb-5 md:mb-7">
                  {audiences.map((item) => (
                    <a
                      key={item}
                      className="flex items-center justify-between pb-2 text-[15px] font-medium text-navy-deep"
                      href="#"
                      onClick={() => setLearnOpen(false)}
                    >
                      {item}
                      <span className="w-7 h-7 rounded-full bg-primary inline-flex items-center justify-center">
                        <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="rounded-2xl bg-[#bdd3f3] p-4 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-white/85 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#5178a7]">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-[#43658f] uppercase">Gut Check Weekly</p>
                    <p className="text-sm font-semibold text-navy-deep leading-snug">
                      Get exclusive access to new resources when you subscribe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {partnershipMounted && (
        <div
          className={`hidden md:block fixed inset-x-0 top-20 bottom-0 z-40 transition-all duration-200 ease-out ${
            partnershipOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setPartnershipOpen(false)}
        >
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2.5px]" />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-4 w-[min(1260px,calc(100%-32px))] rounded-[2rem] bg-[#eceff3] p-5 lg:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] transition-all duration-200 ease-out ${
              partnershipOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.985]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={() => setPartnershipOpen(false)}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {partnershipCards.map((card) => (
                <article key={card.title} className="rounded-[1.5rem] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
                  <div className="relative overflow-hidden rounded-xl">
                    <img className="h-48 lg:h-52 w-full object-cover" src={card.image} alt={card.alt} />
                    <span className="absolute top-3 left-3 rounded-full bg-[#b7d3f3] px-4 py-1 text-[11px] font-bold tracking-[0.16em] uppercase text-navy-deep">
                      {card.audience}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[20px] leading-[1.28] tracking-[-0.01em] font-display text-navy-deep">{card.title}</h3>
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-[16px] leading-none font-semibold text-navy-deep"
                    href="#"
                    onClick={() => setPartnershipOpen(false)}
                  >
                    Learn More
                    <span className="w-8 h-8 rounded-full bg-primary inline-flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-[#c9d1dd] flex flex-wrap items-center gap-4">
              {learnLinks.map((item) => (
                <a
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-deep hover:bg-[#f6f8fb] transition-colors"
                  href="#"
                  onClick={() => setPartnershipOpen(false)}
                >
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {partnershipMounted && (
        <div
          className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-200 ease-out ${
            partnershipOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setPartnershipOpen(false)}
        >
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2.5px]" />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-4 w-[calc(100%-24px)] rounded-3xl bg-[#eceff3] p-4 transition-all duration-200 ease-out ${
              partnershipOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-[0.985]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="space-y-4">
              {partnershipCards.map((card) => (
                <article key={card.title} className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  <div className="relative overflow-hidden rounded-xl">
                    <img className="h-40 w-full object-cover" src={card.image} alt={card.alt} />
                    <span className="absolute top-2 left-2 rounded-full bg-[#b7d3f3] px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase text-navy-deep">
                      {card.audience}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[20px] leading-[1.3] font-display text-navy-deep">{card.title}</h3>
                  <a className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-navy-deep" href="#" onClick={() => setPartnershipOpen(false)}>
                    Learn More
                    <span className="w-8 h-8 rounded-full bg-primary inline-flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                  </a>
                </article>
              ))}
              <div className="pt-1 pb-2 flex flex-wrap gap-2">
                {learnLinks.map((item) => (
                  <a
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-navy-deep"
                    href="#"
                    onClick={() => setPartnershipOpen(false)}
                  >
                    <span className="material-symbols-outlined text-[17px]">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
