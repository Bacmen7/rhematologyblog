import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Search } from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const categoryLinks = [
  { label: "Inflammatory Arthritis", href: "/conditions/rheumatoid-arthritis" },
  { label: "Degenerative Joint Disease", href: "/conditions/osteoarthritis" },
  { label: "Crystal Arthropathies", href: "/conditions/gout" },
  { label: "Autoimmune Conditions", href: "/conditions/lupus" },
  { label: "Soft Tissue Disorders", href: "/conditions/fibromyalgia" },
]

const subtypes = [
  "Rheumatoid Arthritis",
  "Psoriatic Arthritis",
  "Ankylosing Spondylitis",
  "Osteoarthritis",
  "Lupus",
  "Gout",
  "Fibromyalgia",
  "Back & Neck Pain",
  "Sjögren's Syndrome",
  "Vasculitis",
  "Scleroderma",
  "Polymyalgia Rheumatica",
]

function Conditions() {
  const [query, setQuery] = useState("")

  return (
    <div className="min-h-screen bg-ghost font-sans">
      <Header />

      <main>
        {/* Hero search */}
        <section className="py-16 w-full" style={{ background: "#0f616e" }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight" style={{ color: "#ffffff" }}>
              Browse rheumatic conditions reviewed by experts
            </h1>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.85)", marginTop: "24px", marginBottom: "40px" }}>
              Evidence-based information on hundreds of autoimmune and musculoskeletal conditions.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search conditions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full py-4 pl-6 pr-14 text-base outline-none placeholder:text-white/60"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2" size={20} style={{ color: "rgba(255,255,255,0.7)" }} />
            </div>
          </div>
        </section>

        {/* Explore by category */}
        <section className="py-12 w-full bg-ghost">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-border">
              <div className="px-8 py-6 border-b border-border">
                <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "1.75rem", fontWeight: 400, margin: 0 }}>Explore by category</h2>
              </div>
              {categoryLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="flex items-center justify-between px-8 py-6 hover:bg-sky-faint transition-colors group border-b border-border last:border-0"
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#0f2e33" }}>{item.label}</span>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-sky-faint group-hover:bg-sky-soft transition-colors">
                    <ChevronRight size={18} className="text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial note */}
        <section className="py-8 w-full bg-ghost">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-border">
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "1.2rem", fontWeight: 400, marginBottom: "8px" }}>Our Editorial Process</h3>
                <p className="text-navy-muted text-base leading-relaxed">
                  Every piece of educational content is thoroughly reviewed by a member of{" "}
                  <Link to="/about" className="text-primary font-medium hover:underline">our Clinical Team</Link>.
                </p>
              </div>
              <Link
                to="/about"
                className="text-white font-semibold text-sm py-3 px-7 rounded-xl whitespace-nowrap transition-all shrink-0"
                style={{ backgroundColor: "#e86531" }}
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        {/* Subtypes */}
        <section className="py-14 md:py-16 w-full bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "2.2rem", fontWeight: 400, marginBottom: "36px" }}>Explore by subtype</h2>
            <div className="flex flex-wrap gap-3 md:gap-x-4 md:gap-y-3">
              {subtypes.map((subtype, i) => (
                <Link
                  key={i}
                  to="/health-guide"
                  className="inline-flex min-h-[54px] items-center gap-3 rounded-full border border-border bg-ghost px-6 text-lg font-normal text-navy-deep transition-all hover:border-primary hover:text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-soft" aria-hidden="true" />
                  <span style={{ fontFamily: "var(--font-base)" }}>{subtype}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BriefingFooter />
    </div>
  )
}

export default Conditions
