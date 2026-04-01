import { useEffect, useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const [whatWeCoverOpen, setWhatWeCoverOpen] = useState(false)
  const [whatWeCoverMounted, setWhatWeCoverMounted] = useState(false)
  const [whatWeCoverVisible, setWhatWeCoverVisible] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const desktopNav = [
    { label: "Patient Education", to: "/health-guide" },
    { label: "Doctors", to: "/doctors" },
    { label: "Locations", to: "/locations" },
    { label: "Book Appointment", to: "/book-appointment" },
  ]

  const mobileQuickLinks = [
    { label: "What We Cover", type: "dropdown" },
    { label: "Patient Education", to: "/health-guide" },
    { label: "Doctors", to: "/doctors" },
    { label: "Locations", to: "/locations" },
    { label: "Book Appointment", to: "/book-appointment" },
  ]

  const conditions = [
    "Rheumatoid Arthritis",
    "Psoriatic Arthritis",
    "Lupus",
    "Osteoarthritis",
    "Gout",
    "Vasculitis",
    "Spondyloarthritis",
    "Ankylosing Spondylitis",
  ]

  const treatments = [
    "Medications & Biologics",
    "Physical Therapy",
    "Joint Injections",
    "Lifestyle & Diet",
    "Surgical Options",
    "Pain Management",
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

  // What We Cover animation
  useEffect(() => {
    if (whatWeCoverOpen) {
      setWhatWeCoverMounted(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setWhatWeCoverVisible(true))
      })
    } else {
      setWhatWeCoverVisible(false)
      const timer = setTimeout(() => setWhatWeCoverMounted(false), 350)
      return () => clearTimeout(timer)
    }
  }, [whatWeCoverOpen])

  // Lock body scroll (mobile-safe)
  useEffect(() => {
    const isOpen = whatWeCoverOpen || mobileMenuOpen
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
  }, [whatWeCoverOpen, mobileMenuOpen])

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), [])
  const closeWhatWeCover = useCallback(() => setWhatWeCoverOpen(false), [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_20px_rgba(24,36,57,0.06)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* ===== Left: Logo + Nav ===== */}
        <div className="flex items-center gap-10 lg:gap-14">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-navy-deep">
            RHEUMA.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* What We Cover - Dropdown */}
            <button
              aria-expanded={whatWeCoverOpen}
              className={`relative inline-flex items-center gap-1 px-3.5 py-2 rounded-lg transition-all duration-200 ${
                whatWeCoverOpen
                  ? "bg-navy-deep/[0.06]"
                  : "hover:bg-navy-deep/[0.04]"
              }`}
              style={{ fontFamily: "var(--font-base)", fontSize: "14px", fontWeight: 600, lineHeight: "16px", color: whatWeCoverOpen ? "rgba(91,168,163,1)" : "#1A355D" }}
              onClick={() => {
                setWhatWeCoverOpen((prev) => !prev)
                setMobileMenuOpen(false)
              }}
              type="button"
            >
              What We Cover
              <span
                className="material-symbols-outlined text-[16px] transition-transform duration-300"
                style={{ transform: whatWeCoverOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                expand_more
              </span>
            </button>

            {/* Regular nav links */}
            {desktopNav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative px-3.5 py-2 rounded-lg hover:bg-navy-deep/[0.04] transition-all duration-200"
                style={{ fontFamily: "var(--font-base)", fontSize: "14px", fontWeight: 600, lineHeight: "16px", color: "#1A355D" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ===== Right: Actions ===== */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search */}
          <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-navy-muted hover:text-navy-deep hover:bg-navy-deep/[0.04] transition-all duration-200">
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          {/* Book Consultation CTA */}
          <Link
            to="/book-appointment"
            className="hidden md:inline-flex items-center gap-2 text-white pl-5 pr-4 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 hover:opacity-90 group"
            style={{ backgroundColor: "#e86531" }}
          >
            Book Consultation
            <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-navy-deep hover:bg-navy-deep/[0.04] transition-colors"
            onClick={() => {
              setMobileMenuOpen((prev) => !prev)
              setWhatWeCoverOpen(false)
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
            <Link to="/" className="text-xl font-extrabold tracking-tighter text-navy-deep" onClick={closeMobileMenu}>
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
              const staggerDelay = mobileMenuVisible ? `${index * 60 + 80}ms` : "0ms"
              const linkStyle = {
                opacity: mobileMenuVisible ? 1 : 0,
                transform: mobileMenuVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${staggerDelay}`,
              }
              const baseClass =
                "w-full max-w-xs flex items-center justify-between py-3.5 px-5 rounded-2xl text-[17px] font-semibold text-navy-deep hover:bg-white/80 transition-colors"

              if (item.type === "dropdown") {
                return (
                  <button
                    key={item.label}
                    className={baseClass}
                    style={linkStyle}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setTimeout(() => setWhatWeCoverOpen(true), 200)
                    }}
                    type="button"
                  >
                    {item.label}
                    <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                  </button>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={baseClass}
                  style={linkStyle}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px] text-navy-muted/50">chevron_right</span>
                </Link>
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
            <Link
              to="/book-appointment"
              className="w-full max-w-[300px] text-center text-white py-4 rounded-2xl font-bold text-[15px] transition-all shadow-[0_4px_20px_rgba(232,101,49,0.3)] hover:opacity-90"
              style={{ backgroundColor: "#e86531" }}
              onClick={closeMobileMenu}
            >
              Book Consultation
            </Link>
            <p className="text-[12px] text-navy-muted/60 font-medium">Free initial consultation</p>
          </div>
        </div>
      )}

      {/* ===== What We Cover - Desktop Dropdown ===== */}
      {whatWeCoverMounted && (
        <div
          className={`hidden md:block fixed inset-x-0 top-[72px] bottom-0 z-40 transition-all duration-300 ease-out ${
            whatWeCoverVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeWhatWeCover}
        >
          <div className={`absolute inset-0 transition-colors duration-300 ${whatWeCoverVisible ? "bg-black/10" : "bg-black/0"}`} />
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-3 w-[min(900px,calc(100%-24px))] rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(24,36,57,0.18)] transition-all duration-300 ease-out ${
              whatWeCoverVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-[0.97]"
            }`}
            onClick={(event) => event.stopPropagation()}
            onMouseLeave={closeWhatWeCover}
          >
            <div className="grid md:grid-cols-2">
              {/* Left Panel - Conditions */}
              <div className="bg-gradient-to-b from-[#f6f9ff] to-white px-10 py-9 border-r border-border/40">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-9 h-9 rounded-xl bg-[#1AA3B5]/10 inline-flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-[#1AA3B5]">rheumatology</span>
                  </span>
                  <h3 className="text-[13px] tracking-[0.15em] uppercase font-bold text-navy-muted/70">Conditions</h3>
                </div>
                <div className="space-y-0.5">
                  {conditions.map((item) => {
                    const conditionRoutes = { "Rheumatoid Arthritis": "/health-guide/Rheumatoid-Arthritis", "Gout": "/gout" }
                    const to = conditionRoutes[item]
                    const inner = (
                      <>
                        <span className="text-navy-deep font-medium text-[14.5px]">{item}</span>
                        <span className="w-7 h-7 rounded-full bg-[#a0e2e4] inline-flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-[15px] text-[#1A355D]">arrow_forward</span>
                        </span>
                      </>
                    )
                    return to ? (
                      <Link
                        key={item}
                        to={to}
                        className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-[#f0f5ff] transition-all duration-200 group"
                        onClick={closeWhatWeCover}
                      >
                        {inner}
                      </Link>
                    ) : (
                      <a
                        key={item}
                        className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-[#f0f5ff] transition-all duration-200 group cursor-pointer"
                        onClick={closeWhatWeCover}
                      >
                        {inner}
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Right Panel - Treatments */}
              <div className="px-10 py-9">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-9 h-9 rounded-xl bg-[#e86531]/10 inline-flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px] text-[#e86531]">medical_services</span>
                  </span>
                  <h3 className="text-[13px] tracking-[0.15em] uppercase font-bold text-navy-muted/70">Treatments</h3>
                </div>
                <div className="space-y-0.5">
                  {treatments.map((item) => (
                    <a
                      key={item}
                      className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-[#fff5f0] transition-all duration-200 group cursor-pointer"
                      onClick={closeWhatWeCover}
                    >
                      <span className="text-navy-deep font-medium text-[14.5px]">{item}</span>
                      <span className="w-7 h-7 rounded-full bg-[#e86531]/15 inline-flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-[15px] text-[#e86531]">arrow_forward</span>
                      </span>
                    </a>
                  ))}
                </div>

                {/* CTA inside dropdown */}
                <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1AA3B5]/10 to-[#e86531]/10 p-5">
                  <p className="text-[14px] font-semibold text-navy-deep mb-2">Not sure where to start?</p>
                  <p className="text-[13px] text-navy-muted mb-3">Our specialists can help identify your condition and the right treatment plan.</p>
                  <Link
                    to="/book-appointment"
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: "#e86531" }}
                    onClick={closeWhatWeCover}
                  >
                    Book Consultation
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== What We Cover - Mobile Full-Screen ===== */}
      {whatWeCoverMounted && (
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
            opacity: whatWeCoverVisible ? 1 : 0,
            transform: whatWeCoverVisible ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Top Bar: Back + Close */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep hover:text-navy-muted transition-colors"
              onClick={() => {
                setWhatWeCoverOpen(false)
                setTimeout(() => setMobileMenuOpen(true), 200)
              }}
              type="button"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back
            </button>
            <button
              className="w-10 h-10 rounded-xl bg-navy-deep text-white flex items-center justify-center"
              onClick={closeWhatWeCover}
              type="button"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 pt-4 pb-10">
            <h3
              className="text-[26px] mb-2 text-navy-deep"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 80ms, transform 0.35s ease 80ms",
              }}
            >
              What We Cover
            </h3>
            <p
              className="text-sm text-navy-muted mb-8"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.35s ease 150ms, transform 0.35s ease 150ms",
              }}
            >
              Explore the conditions we treat and the treatment options available.
            </p>

            {/* Conditions */}
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-4"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease 200ms, transform 0.35s ease 200ms",
              }}
            >
              Conditions
            </p>
            <div className="space-y-1 mb-8">
              {conditions.map((item, index) => {
                const condRoutes = { "Rheumatoid Arthritis": "/health-guide/Rheumatoid-Arthritis", "Gout": "/gout" }
                const condTo = condRoutes[item]
                const condStyle = {
                  opacity: whatWeCoverVisible ? 1 : 0,
                  transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.35s ease ${230 + index * 40}ms, transform 0.35s ease ${230 + index * 40}ms`,
                }
                const condInner = (
                  <>
                    <span className="flex items-center gap-3.5 text-navy-deep font-semibold text-[15px]">
                      <span className="w-8 h-8 rounded-full bg-[#a0e2e4] inline-flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[15px] text-[#0f616e]">rheumatology</span>
                      </span>
                      {item}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#a0e2e4] inline-flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[15px] text-[#0f616e]">arrow_forward</span>
                    </span>
                  </>
                )
                return condTo ? (
                  <Link
                    key={item}
                    to={condTo}
                    className="flex items-center justify-between py-4 border-b border-gray-100"
                    onClick={closeWhatWeCover}
                    style={condStyle}
                  >
                    {condInner}
                  </Link>
                ) : (
                  <a
                    key={item}
                    className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer"
                    onClick={closeWhatWeCover}
                    style={condStyle}
                  >
                    {condInner}
                  </a>
                )
              })}
            </div>

            {/* Treatments */}
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-bold text-navy-muted/70 mb-4"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease 500ms, transform 0.35s ease 500ms",
              }}
            >
              Treatments
            </p>
            <div className="space-y-1 mb-8">
              {treatments.map((item, index) => {
                const treatStyle = {
                  opacity: whatWeCoverVisible ? 1 : 0,
                  transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.35s ease ${530 + index * 40}ms, transform 0.35s ease ${530 + index * 40}ms`,
                }
                return (
                  <a
                    key={item}
                    className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer"
                    onClick={closeWhatWeCover}
                    style={treatStyle}
                  >
                    <span className="flex items-center gap-3.5 text-navy-deep font-semibold text-[15px]">
                      <span className="w-8 h-8 rounded-full bg-[#e86531]/15 inline-flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[15px] text-[#e86531]">medical_services</span>
                      </span>
                      {item}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#e86531]/15 inline-flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[15px] text-[#e86531]">arrow_forward</span>
                    </span>
                  </a>
                )
              })}
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl bg-gradient-to-r from-[#1AA3B5]/10 to-[#e86531]/10 p-5"
              style={{
                opacity: whatWeCoverVisible ? 1 : 0,
                transform: whatWeCoverVisible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.4s ease 650ms, transform 0.4s ease 650ms",
              }}
            >
              <p className="text-[14px] font-semibold text-navy-deep mb-2">Not sure where to start?</p>
              <p className="text-[13px] text-navy-muted mb-3">Our specialists can help identify your condition and the right treatment plan.</p>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: "#e86531" }}
                onClick={closeWhatWeCover}
              >
                Book Consultation
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}

    </header>
  )
}

export default Header
