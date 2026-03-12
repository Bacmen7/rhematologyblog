import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ═══════ MAIN ═══════ */
function OurApproach() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <PillarsSection />
        <HowItWorks />
        <ComparisonSection />
        <PrinciplesSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <div className="bg-ghost">
          <Newsletter />
        </div>
      </main>
      <BriefingFooter />
    </div>
  )
}

/* ───────── 1. HERO ───────── */
function HeroSection() {
  return (
    <section
      className="custom-approach-section relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 0%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #b1efec 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
          <div className="lg:col-span-6 py-20 lg:py-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/30" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Approach</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight mb-8">
              Care that starts with{" "}
              <span className="italic font-normal">actually listening</span>
            </h1>
            <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg">
              Most rheumatology care treats symptoms in isolation. We bring together specialists, time, and technology to understand what's really going on.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="bg-navy-deep hover:bg-navy-deep/90 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-colors"
              >
                Get Started →
              </Link>
              <a
                href="#how-it-works"
                className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
              >
                See how it works
              </a>
            </div>
            <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-navy-muted/50">
              <span>Board-Certified</span>
              <span className="text-navy-deep/15">|</span>
              <span>72hr First Visit</span>
              <span className="text-navy-deep/15">|</span>
              <span>In-Network</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero-consult.jpg"
                alt="Doctor consulting with a patient"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -left-10 bottom-16 bg-white/90 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.08)] px-7 py-5 max-w-[220px]">
              <span className="block text-4xl font-extrabold tracking-tight text-navy-deep">92%</span>
              <span className="text-[13px] text-navy-muted leading-snug">of patients find relief within 10 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 2. PHILOSOPHY (full-width statement) ───────── */
function PhilosophySection() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white relative overflow-hidden pb-16">

      <div className="max-w-[1120px] mx-auto px-6 py-28 md:py-36 relative z-10">
        <p className="font-display text-3xl md:text-[2.8rem] lg:text-5xl leading-[1.25] font-normal max-w-4xl">
          We believe rheumatology care should be{" "}
          <span className="relative inline-block">
            collaborative
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#92d9d5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
          , transparent, and built around{" "}
          <span className="italic text-primary/80">your life</span> — not the other way around.
        </p>
      </div>
      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>
    </section>
  )
}

/* ───────── 3. PILLARS ───────── */
function PillarsSection() {
  return (
    <section
      className="custom-approach-section relative overflow-hidden px-5 py-[100px] md:py-[120px] text-navy-deep"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #b1efec 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-8 bg-navy-deep/30" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">What makes us different</span>
        </div>
        <h2 className="mb-16 max-w-[800px] text-[36px] md:text-[48px] leading-[1.2] font-normal">
          Four commitments we make to{" "}
          <span className="relative inline-block">
            every patient
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#92d9d5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-[60px] gap-x-[80px]">
          {[
            {
              icon: "volunteer_activism",
              title: "Whole-person & collaborative care",
              text: (
                <>
                  <strong className="font-semibold text-navy-deep">Rheumatologists, physiotherapists, and behavioral health</strong> specialists
                  working together on your case. Not passing you between departments — actually collaborating.
                </>
              ),
              dot: false,
            },
            {
              icon: "task_alt",
              title: "Results you can measure",
              text: (
                <>
                  Clinically-proven outcomes, with <strong className="font-semibold text-navy-deep">92% of patients</strong> finding
                  meaningful relief within 10 weeks.
                </>
              ),
              dot: false,
            },
            {
              icon: "chat",
              title: "Convenient & accessible",
              text: (
                <>
                  Easy to schedule, virtual-first visits{" "}
                  <strong className="font-semibold text-navy-deep">available anytime you need us.</strong> No waiting rooms, no commute.
                </>
              ),
              dot: true,
            },
            {
              icon: "hearing",
              title: "Be seen & heard",
              text: (
                <>
                  30-minute appointments, not 7. We hear the full story before making decisions.{" "}
                  <strong className="font-semibold text-navy-deep">98% patient satisfaction</strong> isn't an accident.
                </>
              ),
              dot: false,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <div className="absolute h-14 w-14 rounded-full bg-navy-deep/10" />
                {item.dot && <div className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-[#dcaea8]" />}
                <span className="material-symbols-outlined relative z-10 text-[32px] text-navy-deep">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">{item.title}</h3>
                <p className="text-[16px] leading-[1.6] font-normal text-navy-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 4. HOW IT WORKS ───────── */
function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">The Process</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              How it <span className="italic font-normal">works</span>
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed">
              From first contact to ongoing care. No surprises, no runaround.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {[
              {
                num: "01",
                title: "Tell us what's going on",
                desc: "Fill out a short intake about your symptoms, history, and what you've already tried. Takes about 10 minutes.",
              },
              {
                num: "02",
                title: "Get matched with your care team",
                desc: "We pair you with a rheumatologist and additional providers — dietitian, physiotherapist, behavioral health — based on your specific situation.",
              },
              {
                num: "03",
                title: "Your first visit",
                desc: "A real conversation about your health. Your doctor reviews your history, examines your symptoms, and builds a treatment plan with you — not for you.",
              },
              {
                num: "04",
                title: "Ongoing support",
                desc: "Regular check-ins, easy messaging with your care team, and treatment adjustments as needed. You're never left on your own between appointments.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-8 ${i < 3 ? "pb-14 mb-14 border-b border-border/50" : ""}`}
              >
                <span className="text-6xl md:text-7xl font-extrabold text-primary/20 leading-none shrink-0 select-none">
                  {step.num}
                </span>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-navy-muted text-[16px] leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 6. COMPARISON ───────── */
function ComparisonSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">The Difference</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Traditional care vs.{" "}
            <span className="italic font-normal">Rheuma</span>
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b-2 border-navy-deep/10 pb-4 mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-muted/50" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-muted/50 text-center">Traditional</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-deep text-center">Rheuma</span>
          </div>

          {[
            ["Wait time", "3–6 months", "Under 72 hours"],
            ["Visit length", "7 minutes avg.", "30+ minutes"],
            ["Care team", "Single doctor", "3+ specialists"],
            ["Between visits", "On your own", "Ongoing messaging"],
            ["Access", "Office hours only", "24/7 virtual"],
            ["Approach", "Symptom-focused", "Whole-person"],
          ].map(([cat, trad, us], i) => (
            <div
              key={cat}
              className={`grid grid-cols-[1.2fr_1fr_1fr] py-5 ${i < 5 ? "border-b border-border/40" : ""} group hover:bg-ghost/50 transition-colors -mx-4 px-4`}
            >
              <span className="font-semibold text-[15px]">{cat}</span>
              <span className="text-navy-muted text-[15px] text-center">{trad}</span>
              <span className="text-navy-deep font-semibold text-[15px] text-center">{us}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 7. PRINCIPLES ───────── */
function PrinciplesSection() {
  return (
    <section className="bg-ghost py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/20" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">What We Believe</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Guiding <span className="italic font-normal">principles</span>
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed max-w-sm">
              The non-negotiables behind every patient interaction.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {[
              { icon: "science", title: "Evidence over intuition", desc: "Every protocol grounded in peer-reviewed research. Clinical guidelines updated quarterly." },
              { icon: "visibility", title: "Transparency by default", desc: "You see the same data we do. Lab results, rationale, progress — nothing hidden." },
              { icon: "bolt", title: "Speed matters", desc: "Early intervention changes outcomes. First appointment within 72 hours, not 6 months." },
              { icon: "favorite", title: "Dignity always", desc: "Chronic illness is exhausting enough. We lead with empathy and respect your experience." },
              { icon: "handshake", title: "Continuity, not handoffs", desc: "Your care team stays with you. No repeating your story to a new face every visit." },
              { icon: "trending_up", title: "Outcomes over volume", desc: "Success = your quality of life. Not the number of patients we cycle through." },
            ].map((p) => (
              <div key={p.title}>
                <span className="material-symbols-outlined text-[28px] text-navy-deep/30 mb-4 block">{p.icon}</span>
                <h3 className="text-[18px] font-semibold mb-2 tracking-tight">{p.title}</h3>
                <p className="text-navy-muted text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 8. TEAM ───────── */
function TeamSection() {
  const team = [
    { name: "Dr. Sarah Mitchell", role: "Lead Rheumatologist", badge: "MD, FACR", image: "/images/specialist-1.jpg" },
    { name: "Dr. James Chen", role: "Immunology Specialist", badge: "MD, PhD", image: "/images/specialist-2.jpg" },
    { name: "Dr. Priya Sharma", role: "Rehabilitation Medicine", badge: "DPT, OCS", image: "/images/specialist-3.jpg" },
  ]
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-deep">
            Meet the<br />
            <span className="text-teal-soft">Care Team</span>
          </h2>
          <p className="max-w-xs text-sm text-navy-muted pb-2">
            Board-certified specialists who chose this model because they believe in doing things differently.
          </p>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {team.map((doc) => (
              <div key={doc.name} className="snap-start shrink-0 w-[220px]">
                <div className="group cursor-pointer">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-3 left-3 bg-white/60 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold text-navy-deep">
                      {doc.badge}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-deep mb-0.5">{doc.name}</h3>
                  <p className="text-navy-muted uppercase tracking-widest text-[10px] font-semibold">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {team.map((doc, i) => (
            <div key={doc.name} className={`group cursor-pointer ${i === 1 ? "md:translate-y-12" : ""}`}>
              <div className="aspect-[3/4] overflow-hidden mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.05)] relative">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-[8px] px-4 py-2 rounded-full text-xs font-bold text-navy-deep">
                  {doc.badge}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-navy-deep mb-1">{doc.name}</h3>
              <p className="text-navy-muted uppercase tracking-widest text-xs font-semibold">{doc.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 9. TESTIMONIALS ───────── */
function TestimonialsSection() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/30">Patient Stories</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
            In their <span className="italic">own words</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {[
            {
              quote: "After years of being dismissed, I finally found a team that listened. My RA is better managed than it's ever been.",
              name: "Maria G.",
              detail: "Rheumatoid Arthritis · 8 months",
            },
            {
              quote: "The coordinated care changed everything. My rheumatologist, dietitian, and therapist actually talk to each other.",
              name: "David K.",
              detail: "Psoriatic Arthritis · 1 year",
            },
            {
              quote: "72 hours from intake to my first appointment. I'd been waiting 5 months elsewhere. Night and day.",
              name: "Sarah L.",
              detail: "Lupus · 6 months",
            },
          ].map((t) => (
            <div key={t.name} className="bg-navy-deep p-8 md:p-10 flex flex-col">
              <p className="text-[17px] md:text-lg leading-[1.7] text-white/80 mb-8 flex-1">
                "{t.quote}"
              </p>
              <div>
                <span className="block font-semibold text-white">{t.name}</span>
                <span className="text-sm text-white/40">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 10. FAQ ───────── */
function FaqSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">FAQ</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Common <span className="italic font-normal">questions</span>
          </h2>
        </div>

        <div>
          {[
            {
              q: "How is this different from seeing a regular rheumatologist?",
              a: "Traditional visits average 7 minutes. We spend 30+ minutes per visit and coordinate care across multiple specialists working as one team — not sending you to separate offices.",
            },
            {
              q: "Do you accept insurance?",
              a: "Yes. We're in-network with most major plans including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. We also offer transparent self-pay pricing.",
            },
            {
              q: "What conditions do you treat?",
              a: "Rheumatoid arthritis, psoriatic arthritis, lupus, gout, osteoarthritis, vasculitis, spondyloarthritis, ankylosing spondylitis, and other autoimmune conditions.",
            },
            {
              q: "How quickly can I get an appointment?",
              a: "Most patients are seen within 72 hours of completing their intake. No 6-month waitlists.",
            },
            {
              q: "Is virtual care as effective as in-person?",
              a: "For most rheumatology care, yes. Research shows equivalent outcomes for virtual vs. in-person follow-ups. When hands-on examination is needed, we coordinate in-person visits seamlessly.",
            },
          ].map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 11. FINAL CTA ───────── */
function CtaSection() {
  return (
    <section
      className="custom-approach-section relative overflow-hidden py-28 md:py-40"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #b1efec 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
          Ready for a different kind of{" "}
          <span className="italic font-normal">rheumatology care?</span>
        </h2>
        <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg mx-auto">
          Book your first visit. If it's not the right fit, no pressure. Most people wish they'd started sooner.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-navy-deep hover:bg-navy-deep/90 text-white px-10 py-4 rounded-full font-semibold text-[15px] transition-colors"
          >
            Get Started →
          </Link>
          <Link
            to="/"
            className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
          >
            Back to home
          </Link>
        </div>
        <p className="mt-8 text-navy-muted/50 text-sm">
          No credit card required · Free 15-min consultation
        </p>
      </div>
    </section>
  )
}

/* ───────── UTILS ───────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/50">
      <button
        className="faq-btn w-full flex items-center justify-between py-7 text-left group"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="text-[17px] md:text-lg font-semibold text-navy-deep pr-8 group-hover:text-rheuma-blue transition-colors leading-snug">
          {q}
        </span>
        <span
          className="material-symbols-outlined text-[22px] text-navy-muted/40 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          add
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="pb-7 text-navy-muted leading-[1.7] text-[15px] pr-12">{a}</p>
      </div>
    </div>
  )
}

export default OurApproach
