import { useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const [partnershipOpen, setPartnershipOpen] = useState(false)
  const [partnershipMounted, setPartnershipMounted] = useState(false)
  const [partnershipVisible, setPartnershipVisible] = useState(false)

  const [learnOpen, setLearnOpen] = useState(false)
  const [learnMounted, setLearnMounted] = useState(false)
  const [learnVisible, setLearnVisible] = useState(false)

  const [scrolled, setScrolled] = useState(false)

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

  // Track scroll for header shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile Menu animation
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setMobileMenuVisible(true))
      })
    } else {
      setMobileMenuVisible(false)
      const timer = setTimeout(() => setMobileMenuMounted(false), 350)
      return () => clearTimeout(timer)
    }
  }, [mobileMenuOpen])

  // Partnership animation
  useEffect(() => {
    if (partnershipOpen) {
      setPartnershipMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPartnershipVisible(true))
      })
    } else {
      setPartnershipVisible(false)
      const timer = setTimeout(() => setPartnershipMounted(false), 350)
      return () => clearTimeout(timer)
    }
  }, [partnershipOpen])

  // Learn animation
  useEffect(() => {
    if (learnOpen) {
      setLearnMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setLearnVisible(true))
      })
    } else {
      setLearnVisible(false)
      const timer = setTimeout(() => setLearnMounted(false), 350)
      return () => clearTimeout(timer)
    }
  }, [learnOpen])

  // Lock body scroll (mobile-safe)
  useEffect(() => {
    const isOpen = partnershipOpen || learnOpen || mobileMenuOpen
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.top = `-${window.scrollY}px`
      document.documentElement.style.overflow = "hidden"
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      document.documentElement.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
    return () => {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.top = ""
      document.documentElement.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  }, [partnershipOpen, learnOpen, mobileMenuOpen])

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const closePartnership = useCallback(() => setPartnershipOpen(false), [])
  const closeLearn = useCallback(() => setLearnOpen(false), [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_20px_rgba(24,36,57,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* ===== Left: Logo + Nav ===== */}
        <div className="flex items-center gap-10 lg:gap-14">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-rheuma-blue">
            RHEUMA.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {desktopNav.map((item) => {
              const routes = { "Our Approach": "/our-approach", "Pricing & Insurance": "/pricing", "About Us": "/about" }
              const to = routes[item]
              return to ? (
                <Link
                  key={item}
                  to={to}
                  className="relative px-3.5 py-2 text-[15px] font-bold text-navy-deep hover:text-teal-soft rounded-lg hover:bg-navy-deep/[0.04] transition-all duration-200"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  className="relative px-3.5 py-2 text-[15px] font-bold text-navy-deep hover:text-teal-soft rounded-lg hover:bg-navy-deep/[0.04] transition-all duration-200"
                  href="javascript:void(0)"
                >
                  {item}
                </a>
              )
            })}
            <button
              className={`relative inline-flex items-center gap-1 px-3.5 py-2 text-[15px] font-bold rounded-lg transition-all duration-200 ${
                partnershipOpen
                  ? "text-teal-soft bg-navy-deep/[0.06]"
                  : "text-navy-deep hover:text-teal-soft hover:bg-navy-deep/[0.04]"
              }`}
              onClick={() => {
                setPartnershipOpen((prev) => !prev)
                setMobileMenuOpen(false)
                setLearnOpen(false)
              }}
              type="button"
            >
              Partnerships
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-300"
                style={{ transform: partnershipOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
            <button
              aria-expanded={learnOpen}
              className={`relative inline-flex items-center gap-1 px-3.5 py-2 text-[15px] font-bold rounded-lg transition-all duration-200 ${
                learnOpen
                  ? "text-teal-soft bg-navy-deep/[0.06]"
                  : "text-navy-deep hover:text-teal-soft hover:bg-navy-deep/[0.04]"
              }`}
              onClick={() => {
                setLearnOpen((prev) => !prev)
                setMobileMenuOpen(false)
                setPartnershipOpen(false)
              }}
              type="button"
            >
              Learn
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-300"
                style={{ transform: learnOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>
          </nav>
        </div>

        {/* ===== Right: Actions ===== */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search */}
          <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-navy-muted hover:text-navy-deep hover:bg-navy-deep/[0.04] transition-all duration-200">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Subscribe CTA */}
          <button className="hidden md:inline-flex items-center gap-2 bg-navy-deep hover:bg-navy-deep/90 text-white pl-5 pr-4 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:shadow-[0_4px_16px_rgba(24,36,57,0.25)] group">
            Subscribe
            <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-navy-deep hover:bg-navy-deep/[0.04] transition-colors"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev)
              setPartnershipOpen(false)
              setLearnOpen(false)
            }}
            type="button"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? "rotate(45deg)" : "translateY(-4px)",
                }}
              />
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  transform: mobileMenuOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? "rotate(-45deg)" : "translateY(4px)",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ===== Mobile Full-Screen Menu ===== */}
      {mobileMenuMounted && (
        <div
          className="md:hidden flex flex-col"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
            opacity: mobileMenuVisible ? 1 : 0,
            transform: mobileMenuVisible ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: mobileMenuVisible ? "auto" : "none",
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 pt-5">
            {/* Logo in mobile menu */}
            <Link to="/" className="text-xl font-extrabold tracking-tighter text-rheuma-blue" onClick={closeMobileMenu}>
              RHEUMA.
            </Link>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center hover:bg-navy-deep/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-xl" style={{ pointerEvents: "none" }}>close</span>
            </button>
          </div>

          {/* Centered Nav Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-2 -mt-6 px-8">
            {mobileQuickLinks.map((item, index) => {
              const hasSubmenu = item === "Partnerships" || item === "Learn" || item === "Our Approach" || item === "About Us"
              const staggerDelay = mobileMenuVisible ? `${index * 60 + 80}ms` : "0ms"

              const linkStyle = {
                opacity: mobileMenuVisible ? 1 : 0,
                transform: mobileMenuVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}`,
              }

              const baseClass =
                "w-full max-w-xs flex items-center justify-between py-3.5 px-5 rounded-2xl text-[17px] font-semibold text-navy-deep hover:bg-white/80 transition-colors"

              return item === "Partnerships" ? (
                <button
                  key={item}
                  className={baseClass}
                  style={linkStyle}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => setPartnershipOpen(true), 200)
                  }}
                  type="button"
                >
                  {item}
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                </button>
              ) : item === "Learn" ? (
                <button
                  key={item}
                  className={baseClass}
                  style={linkStyle}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setTimeout(() => setLearnOpen(true), 200)
                  }}
                  type="button"
                >
                  {item}
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                </button>
              ) : item === "Our Approach" || item === "Pricing & Insurance" || item === "About Us" ? (
                <Link
                  key={item}
                  to={{ "Our Approach": "/our-approach", "Pricing & Insurance": "/pricing", "About Us": "/about" }[item]}
                  className={baseClass}
                  style={linkStyle}
                  onClick={closeMobileMenu}
                >
                  {item}
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                </Link>
              ) : (
                <a
                  key={item}
                  className={baseClass}
                  style={linkStyle}
                  href="javascript:void(0)"
                  onClick={closeMobileMenu}
                >
                  {item}
                  {hasSubmenu && (
                    <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                  )}
                </a>
              )
            })}
          </nav>

          {/* Bottom CTA */}
          <div
            className="px-8 pb-10 flex flex-col items-center gap-3"
            style={{
              opacity: mobileMenuVisible ? 1 : 0,
              transform: mobileMenuVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 400ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 400ms",
            }}
          >
            <button
              className="w-full max-w-[300px] bg-navy-deep hover:bg-navy-deep/90 text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-[0_4px_20px_rgba(24,36,57,0.2)]"
              onClick={closeMobileMenu}
            >
              Get Started
            </button>
            <p className="text-[12px] text-navy-muted/60 font-medium">No credit card required</p>
          </div>
        </div>
      )}

      {/* ===== Learn - Desktop Dropdown ===== */}
      {learnMounted && (
        <div
          className={`hidden md:block fixed inset-x-0 top-[72px] bottom-0 z-40 transition-all duration-300 ease-out ${
            learnVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeLearn}
        >
          <div className={`absolute inset-0 transition-colors duration-300 ${learnVisible ? "bg-black/10" : "bg-black/0"}`} />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-3 w-[min(1240px,calc(100%-24px))] rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(24,36,57,0.18)] transition-all duration-300 ease-out ${
              learnVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-[0.97]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={closeLearn}
          >
            <div className="grid md:grid-cols-[1.05fr_1fr_1fr]">
              {/* Left Panel */}
              <div className="bg-gradient-to-b from-[#f6f9ff] to-white px-10 py-9 border-r border-border/40">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-sky/15 inline-flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px] text-sky">school</span>
                  </span>
                  <h3 className="font-display text-2xl text-navy-deep">Rheuma Learn</h3>
                </div>
                <p className="text-[14px] text-navy-muted mb-8 leading-relaxed">
                  Your go-to resource for expert advice and insights on chronic rheumatic care.
                </p>
                <div className="space-y-1">
                  {learnLinks.map((item) => (
                    <a
                      key={item.label}
                      className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-[#f0f5ff] transition-all duration-200 group"
                      href="javascript:void(0)"
                      onClick={closeLearn}
                    >
                      <span className="flex items-center gap-3 text-navy-deep font-medium text-[14.5px]">
                        <span className="w-9 h-9 rounded-xl bg-[#ecf2fb] inline-flex items-center justify-center group-hover:bg-sky/20 transition-colors">
                          <span className="material-symbols-outlined text-[18px] text-navy-muted group-hover:text-sky transition-colors">{item.icon}</span>
                        </span>
                        {item.label}
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-navy-muted/40 group-hover:text-navy-muted group-hover:translate-x-0.5 transition-all">
                        arrow_forward
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Middle Panel - Categories */}
              <div className="px-8 py-9 border-r border-border/40">
                <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-5">Categories</p>
                <div className="space-y-0.5">
                  {categories.map((item) => (
                    <a
                      key={item}
                      className="flex items-center justify-between py-2.5 text-[14.5px] font-medium text-navy-deep hover:text-sky transition-colors group"
                      href="javascript:void(0)"
                      onClick={closeLearn}
                    >
                      {item}
                      <span className="w-7 h-7 rounded-full bg-ghost inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[15px] text-sky">arrow_forward</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Panel - Audiences */}
              <div className="px-8 py-9">
                <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-5">Audiences</p>
                <div className="space-y-0.5 mb-8">
                  {audiences.map((item) => (
                    <a
                      key={item}
                      className="flex items-center justify-between py-2.5 text-[14.5px] font-medium text-navy-deep hover:text-sky transition-colors group"
                      href="javascript:void(0)"
                      onClick={closeLearn}
                    >
                      {item}
                      <span className="w-7 h-7 rounded-full bg-ghost inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[15px] text-sky">arrow_forward</span>
                      </span>
                    </a>
                  ))}
                </div>

                {/* Newsletter CTA */}
                <div className="rounded-2xl bg-gradient-to-r from-[#e8f0ff] to-[#f0e8ff] p-4 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-white/90 flex-shrink-0 flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-sky">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest text-navy-muted/70 uppercase">Gut Check Weekly</p>
                    <p className="text-[13px] font-semibold text-navy-deep leading-snug mt-0.5">
                      Get exclusive access to new resources when you subscribe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Learn - Mobile Full-Screen ===== */}
      {learnMounted && (
        <div
          className="md:hidden flex flex-col overflow-y-auto"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
            opacity: learnVisible ? 1 : 0,
            transform: learnVisible ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Top Bar: Back + Close */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-navy-muted transition-colors"
              onClick={() => {
                setLearnOpen(false)
                setTimeout(() => setMobileMenuOpen(true), 200)
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center"
              onClick={closeLearn}
              type="button"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pt-4 pb-10">
            <div className="flex justify-center mb-3">
              <span
                className="w-10 h-10 rounded-xl bg-sky/15 inline-flex items-center justify-center"
                style={{
                  opacity: learnVisible ? 1 : 0,
                  transform: learnVisible ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.35s ease 80ms, transform 0.35s ease 80ms",
                }}
              >
                <span className="material-symbols-outlined text-[22px] text-sky">school</span>
              </span>
            </div>
            <h3
              className="font-display text-2xl text-center mb-2 text-navy-deep"
              style={{
                opacity: learnVisible ? 1 : 0,
                transform: learnVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 100ms, transform 0.35s ease 100ms",
              }}
            >
              Rheuma Learn
            </h3>
            <p
              className="text-sm text-navy-muted text-center mb-8 max-w-xs mx-auto"
              style={{
                opacity: learnVisible ? 1 : 0,
                transform: learnVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 150ms, transform 0.35s ease 150ms",
              }}
            >
              Your go-to resource for expert advice and insights on chronic rheumatic care.
            </p>

            {/* Learn Links */}
            <div className="space-y-1 mb-8">
              {learnLinks.map((item, index) => (
                <a
                  key={item.label}
                  className="flex items-center justify-between py-4 border-b border-gray-100"
                  href="javascript:void(0)"
                  onClick={closeLearn}
                  style={{
                    opacity: learnVisible ? 1 : 0,
                    transform: learnVisible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.35s ease ${200 + index * 60}ms, transform 0.35s ease ${200 + index * 60}ms`,
                  }}
                >
                  <span className="flex items-center gap-3.5 text-navy-deep font-medium text-[15px]">
                    <span className="w-10 h-10 rounded-xl bg-[#ecf2fb] inline-flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px] text-navy-muted">{item.icon}</span>
                    </span>
                    {item.label}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/40">arrow_forward</span>
                </a>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div
              className="rounded-2xl bg-gradient-to-r from-[#e8f0ff] to-[#f0e8ff] p-4 flex items-center gap-3"
              style={{
                opacity: learnVisible ? 1 : 0,
                transform: learnVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 450ms, transform 0.4s ease 450ms",
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/90 flex-shrink-0 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-sky">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-navy-muted/70 uppercase">Gut Check Weekly</p>
                <p className="text-sm font-semibold text-navy-deep leading-snug">
                  Get exclusive access to new resources when you subscribe.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Partnership - Desktop Dropdown ===== */}
      {partnershipMounted && (
        <div
          className={`hidden md:block fixed inset-x-0 top-[72px] bottom-0 z-40 transition-all duration-300 ease-out ${
            partnershipVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closePartnership}
        >
          <div className={`absolute inset-0 transition-colors duration-300 ${partnershipVisible ? "bg-black/10" : "bg-black/0"}`} />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-3 w-[min(1260px,calc(100%-32px))] rounded-3xl bg-white p-6 lg:p-8 shadow-[0_20px_60px_rgba(24,36,57,0.18)] transition-all duration-300 ease-out ${
              partnershipVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-[0.97]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={closePartnership}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {partnershipCards.map((card, index) => (
                <article
                  key={card.title}
                  className="group rounded-2xl bg-[#f7f9fc] hover:bg-white p-4 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(24,36,57,0.1)]"
                  style={{
                    opacity: partnershipVisible ? 1 : 0,
                    transform: partnershipVisible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.35s ease ${80 + index * 60}ms, transform 0.35s ease ${80 + index * 60}ms, background-color 0.3s, box-shadow 0.3s`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      className="h-48 lg:h-52 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      src={card.image}
                      alt={card.alt}
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1 text-[11px] font-bold tracking-[0.14em] uppercase text-navy-deep shadow-sm">
                      {card.audience}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[19px] leading-[1.3] tracking-[-0.01em] font-display text-navy-deep">{card.title}</h3>
                  <a
                    className="mt-5 inline-flex items-center gap-2.5 text-[14px] leading-none font-semibold text-navy-deep group-hover:text-sky transition-colors"
                    href="javascript:void(0)"
                    onClick={closePartnership}
                  >
                    Learn More
                    <span className="w-8 h-8 rounded-full bg-primary/20 group-hover:bg-sky/15 inline-flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                    </span>
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/50 flex flex-wrap items-center gap-2.5">
              {learnLinks.map((item) => (
                <a
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f5f7fa] hover:bg-[#edf1f7] px-4 py-2.5 text-[13px] font-semibold text-navy-deep transition-colors"
                  href="javascript:void(0)"
                  onClick={closePartnership}
                >
                  <span className="material-symbols-outlined text-[16px] text-navy-muted">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===== Partnership - Mobile Full-Screen ===== */}
      {partnershipMounted && (
        <div
          className="md:hidden flex flex-col overflow-y-auto"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            background: "linear-gradient(180deg, #ffffff 0%, #f4f7fc 100%)",
            opacity: partnershipVisible ? 1 : 0,
            transform: partnershipVisible ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Top Bar: Back + Close */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-navy-muted transition-colors"
              onClick={() => {
                setPartnershipOpen(false)
                setTimeout(() => setMobileMenuOpen(true), 200)
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center"
              onClick={closePartnership}
              type="button"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Partnership Cards */}
          <div className="px-5 pt-2 pb-10 space-y-5">
            {partnershipCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-2xl bg-white p-4 shadow-[0_2px_16px_rgba(24,36,57,0.06)]"
                style={{
                  opacity: partnershipVisible ? 1 : 0,
                  transform: partnershipVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${100 + index * 80}ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${100 + index * 80}ms`,
                }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img className="h-44 w-full object-cover" src={card.image} alt={card.alt} />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase text-navy-deep shadow-sm">
                    {card.audience}
                  </span>
                </div>
                <h3 className="mt-4 text-[19px] leading-[1.3] font-display text-navy-deep">{card.title}</h3>
                <a
                  className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-navy-deep"
                  href="javascript:void(0)"
                  onClick={closePartnership}
                >
                  Learn More
                  <span className="w-8 h-8 rounded-full bg-primary/20 inline-flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
