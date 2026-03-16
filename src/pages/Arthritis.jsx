import { useEffect, useState, useRef, useCallback } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */


const warningSignsEarly = [
  "Persistent joint pain or stiffness lasting more than 2 weeks",
  "Morning stiffness that takes over 30 minutes to improve",
  "Swelling in one or more joints without a clear injury",
  "Fatigue that doesn't improve with rest",
  "Joint symptoms that come and go in flares",
  "A family history of autoimmune or rheumatic disease",
]

const treatmentApproach = [
  {
    step: "01",
    title: "Rapid Diagnosis",
    desc: "Board-certified rheumatologists using advanced labs and imaging to identify your specific type of arthritis — often within the first 1–2 visits.",
    color: "#1AA3B5",
  },
  {
    step: "02",
    title: "Personalized Treatment Plan",
    desc: "Targeted therapy based on your arthritis type, disease activity, and life goals. From DMARDs and biologics to lifestyle interventions.",
    color: "#fa885a",
  },
  {
    step: "03",
    title: "Multidisciplinary Care Team",
    desc: "Rheumatologist, physical therapist, dietitian, and mental health support — all coordinated under one care plan.",
    color: "#1AA3B5",
  },
  {
    step: "04",
    title: "Ongoing Monitoring & Support",
    desc: "Regular check-ins, flare management protocols, and treatment adjustments to keep you in remission or low disease activity.",
    color: "#fa885a",
  },
]


const faqs = [
  { q: "What types of arthritis does Rheuma treat?", a: "Rheuma specializes in autoimmune and inflammatory forms of arthritis including rheumatoid arthritis (RA), psoriatic arthritis (PsA), ankylosing spondylitis, gout, lupus arthritis, and other systemic rheumatic conditions. We work alongside your primary care provider for osteoarthritis management as well." },
  { q: "How do I know if my joint pain is arthritis?", a: "Joint pain lasting more than 2 weeks, morning stiffness over 30 minutes, swelling without injury, and symmetric joint involvement are key indicators. Blood tests (RF, Anti-CCP, ESR, CRP) and imaging can confirm the diagnosis. Early evaluation is critical — the sooner treatment begins, the better the outcomes." },
  { q: "What is the difference between inflammatory and degenerative arthritis?", a: "Inflammatory arthritis (like RA, PsA) is caused by the immune system attacking joint tissues, causing swelling and damage. Degenerative arthritis (osteoarthritis) results from cartilage wearing down over time. Inflammatory types require immune-modulating medications, while OA is typically managed with pain relief, physical therapy, and sometimes surgery." },
  { q: "Can arthritis be reversed or cured?", a: "While there is no cure for most forms of arthritis, early and aggressive treatment of inflammatory arthritis can achieve clinical remission — meaning minimal symptoms and no ongoing joint damage. Modern biologics and JAK inhibitors have transformed outcomes. The key is starting treatment during the 'window of opportunity' in the first 12 weeks." },
  { q: "How quickly can I see a rheumatologist through Rheuma?", a: "Most patients are seen within 72 hours of signing up. We offer virtual and in-person appointments, including evenings and weekends. No more 4–6 month waitlists — early access to a specialist is one of the biggest advantages of the Rheuma model." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function Arthritis() {
  const [diagnosisActive, setDiagnosisActive] = useState(0)
  const diagnosisRef = useRef(null)

  const handleDiagnosisScroll = useCallback(() => {
    const el = diagnosisRef.current
    if (!el) return
    const scrollLeft = el.scrollLeft
    const cardWidth = el.firstChild?.offsetWidth || 1
    const gap = 20
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setDiagnosisActive(Math.min(index, 2))
  }, [])

  useEffect(() => {
    document.title = "Arthritis Care | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
  }, [])

  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main>

        {/* ═══════════ HERO (Oshi-style dark) ═══════════ */}
        <section className="relative" style={{ backgroundColor: "#0f616e" }}>

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
              <div className="grid grid-cols-[1fr_420px] gap-10 items-center">
                {/* Left — Text */}
                <div>
                  <span
                    className="inline-block"
                    style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#7eb8c4", marginBottom: "24px", display: "block" }}
                  >
                    Complete Patient Guide
                  </span>
                  <h1
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.08, color: "#ffffff", marginBottom: "20px" }}
                  >
                    Understanding{" "}
                    <span style={{ color: "#a0e2e4" }}>Arthritis</span>
                  </h1>

                  {/* Avatars */}
                  <div className="flex -space-x-2" style={{ marginBottom: "14px" }}>
                    <img src="/raghav.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
                    <img src="/d1.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#dce7f7]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
                  </div>

                  {/* Byline */}
                  <div style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "#ffffff" }}>
                      Written by <strong className="font-bold underline underline-offset-2 decoration-1">Steph Coelho, CPT</strong>
                    </span>
                    <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.5)" }}>
                      Medically reviewed by <strong className="font-bold underline underline-offset-2 decoration-1" style={{ color: "#ffffff" }}>Gabriella McCarty DNP, MSN, NP-C</strong>
                    </span>
                    <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.45)" }}>
                      Published: January 05, 2026
                    </span>
                  </div>
                </div>

                {/* Right — Image */}
                <div className="relative">
                  <div className="overflow-hidden" style={{ borderRadius: 0 }}>
                    <img
                      src="/images/dr-elena.jpg"
                      alt="Arthritis patient guide"
                      className="w-full h-[260px] object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            {/* Text content */}
            <div className="flex flex-col px-6 pt-14 pb-0">
              <span
                className="inline-block self-start"
                style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#7eb8c4", marginBottom: "28px" }}
              >
                Complete Patient Guide
              </span>
              <h1
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 9vw, 2.75rem)", fontWeight: 400, lineHeight: 1.08, color: "#ffffff", marginBottom: "16px" }}
              >
                Understanding <span style={{ color: "#a0e2e4" }}>Arthritis</span>
              </h1>

              {/* Avatars */}
              <div className="flex -space-x-2" style={{ marginBottom: "12px" }}>
                <img src="/raghav.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
                <img src="/d1.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#dce7f7]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
              </div>

              {/* Byline */}
              <div style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", display: "flex", flexDirection: "column", gap: "1px", marginBottom: "28px" }}>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "#ffffff" }}>
                  Written by <strong className="font-bold underline underline-offset-2 decoration-1">Steph Coelho, CPT</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.5)" }}>
                  Medically reviewed by <strong className="font-bold underline underline-offset-2 decoration-1" style={{ color: "#ffffff" }}>Gabriella McCarty DNP, MSN, NP-C</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.45)" }}>
                  Published: January 05, 2026
                </span>
              </div>
            </div>

            {/* Image with side padding like reference */}
            <div className="px-6" style={{ marginTop: "0" }}>
              <div style={{ backgroundColor: "#e0f3f5", borderRadius: "0" }}>
                <img src="/images/dr-elena.jpg" alt="Arthritis guide" className="w-full object-cover object-top" style={{ height: "300px" }} />
              </div>
            </div>
          </div>

          {/* Bottom wave — blends into ghost section below */}
          <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
          </svg>
        </section>

        {/* ═══════════ SCALE OF THE PROBLEM ═══════════ */}
        <section className="relative py-16 md:py-24 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-navy-deep"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.25rem" }}
            >
              Arthritis — The Scale of the Problem
            </h2>
            <p className="text-[15px] leading-[1.85] max-w-2xl text-navy-muted" style={{ marginBottom: "2.5rem" }}>
              Arthritis is among the most prevalent chronic conditions globally, yet underdiagnosed — especially in India. The gender split matters: several inflammatory forms disproportionately affect women, while AS predominantly targets young men.
            </p>

            {/* Horizontal scroll on mobile */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
              {[
                { value: "1%", label: "of the global population", desc: "has Rheumatoid Arthritis alone. Over 100 types of arthritis exist; combined, they are the leading cause of disability worldwide." },
                { value: "180M", label: "patients in India", desc: "Estimated adults affected — exceeding the combined burden of diabetes and all cancers. Average diagnosis delay: 6 years." },
                { value: "40%", label: "work disability in 10 yrs", desc: "Of RA patients experience significant work disability within 10 years without early, targeted therapy. Early treatment changes this outcome dramatically." },
              ].map((stat, i) => (
                <div key={i} className="min-w-[260px] sm:min-w-0 snap-start bg-white p-5 md:p-7 border border-gray-100" style={{ borderRadius: 0 }}>
                  <p className="mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1, color: "#1AA3B5" }}>
                    {stat.value}
                  </p>
                  <p className="text-[14px] font-semibold text-navy-deep mb-3">{stat.label}</p>
                  <p className="text-[13px] leading-[1.7] text-navy-muted">{stat.desc}</p>
                </div>
              ))}

              {/* Card 4 — gender bar */}
              <div className="min-w-[260px] sm:min-w-0 snap-start bg-white p-5 md:p-7 border border-gray-100" style={{ borderRadius: 0 }}>
                <p className="mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1, color: "#1AA3B5" }}>
                  3&times;
                </p>
                <p className="text-[14px] font-semibold text-navy-deep mb-3">more common in women</p>
                <p className="text-[13px] leading-[1.7] text-navy-muted">RA disproportionately affects women. Conversely, AS (Ankylosing Spondylitis) is 2–3&times; more prevalent in men, typically under 35 years old.</p>
              </div>
            </div>
          </div>
          {/* Bottom wave — commented out */}
          {/* <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#ffffff" />
          </svg> */}
        </section>

        {/* ═══════════ MAJOR TYPES OF ARTHRITIS ═══════════ */}
        <section id="types" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading — left aligned */}
            <div className="mb-8 md:mb-14 max-w-2xl">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.5rem" }}
              >
                Major Types of Arthritis
              </h2>
              <p className="text-[15.5px] leading-[1.85] text-navy-muted">
                While over 100 forms of arthritis exist, these four types account for the vast majority of rheumatology presentations. Each has a distinct mechanism, patient profile, and treatment pathway. Select any type to expand the detail.
              </p>
            </div>

            {/* 4 square cards — carousel on mobile */}
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
              {[
                { img: "/condition/Rheumatoid Arthritis (RA).png", label: "Rheumatoid Arthritis", abbr: "RA", link: "/health-guide/Rheumatoid-Arthritis" },
                { img: "/condition/Osteoarthritis.png", label: "Osteoarthritis", abbr: "OA", link: "/health-guide" },
                { img: "/condition/Psoriatic Arthritis.png", label: "Psoriatic Arthritis", abbr: "PSA", link: "/health-guide" },
                { img: "/condition/Ankylosing Spondylitis (AS).png", label: "Ankylosing Spondylitis", abbr: "AS", link: "/health-guide" },
              ].map((type, i) => (
                <Link
                  key={i}
                  to={type.link}
                  className="group min-w-[45vw] sm:min-w-0 snap-start overflow-hidden hover:border-2 hover:border-[#1AA3B5] transition-all duration-300"
                  style={{ borderRadius: 0 }}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-3">
                    <img src={type.img} alt={type.label} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400" />
                  </div>
                  <div className="p-4 text-center">
                    <h3
                      className="text-navy-deep mb-1.5 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.25 }}
                    >
                      {type.label}
                    </h3>
                    <span
                      className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1"
                      style={{ backgroundColor: "#f0f0f0", color: "#1A355D" }}
                    >
                      {type.abbr}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SYMPTOMS OF ARTHRITIS ═══════════ */}
        <section className="py-12 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 md:mb-14 max-w-2xl">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}
              >
                Symptoms of Arthritis
              </h2>
              <p className="text-[15.5px] leading-[1.85] text-navy-muted">
                Arthritis symptoms vary by type but share common patterns. Select any symptom to learn more with clinical illustrations.
              </p>
            </div>

            <div className="p-0 md:p-4">
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:overflow-visible sm:pb-0">
              {[
                { icon: "schedule", label: "Morning Stiffness", color: "#1AA3B5", bg: "#e0f3f5" },
                { icon: "favorite", label: "Joint Pain & Tenderness", color: "#e05a5a", bg: "#fde8e8" },
                { icon: "location_on", label: "Joint Swelling", color: "#e8993e", bg: "#fef3e2" },
                { icon: "bolt", label: "Fatigue", color: "#1A355D", bg: "#e8edf5" },
                { icon: "do_not_disturb_on", label: "Reduced Range of Motion", color: "#1AA3B5", bg: "#e0f3f5" },
                { icon: "thermostat", label: "Warmth & Redness", color: "#e05a5a", bg: "#fde8e8" },
                { icon: "monitoring", label: "Deformity & Loss of Function", color: "#1A355D", bg: "#e8edf5" },
                { icon: "emergency", label: "Systemic Symptoms", color: "#e05a5a", bg: "#fde8e8" },
              ].map((symptom, i) => (
                <button
                  key={i}
                  className="group min-w-[75vw] sm:min-w-0 snap-start flex items-center gap-3.5 bg-white p-4 md:p-5 border border-gray-100 hover:shadow-[0_4px_16px_rgba(24,36,57,0.07)] hover:-translate-y-0.5 transition-all duration-200 text-left"
                  style={{ borderRadius: "12px" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: symptom.bg }}
                  >
                    <span className="material-symbols-outlined text-[20px]" style={{ color: symptom.color }}>{symptom.icon}</span>
                  </div>
                  <span className="text-[14px] font-semibold text-navy-deep leading-snug flex-1">{symptom.label}</span>
                  <svg className="w-3.5 h-3.5 text-navy-muted/40 shrink-0 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ PATHOLOGY — HOW ARTHRITIS DEVELOPS ═══════════ */}
        <section className="relative py-12 md:py-20" style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="mb-8 md:mb-14 max-w-2xl">
              <h2
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.5rem", color: "#ffffff" }}
              >
                Pathology — How Arthritis Develops
              </h2>
              <p className="text-[15.5px] leading-[1.85]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Understanding the biological sequence shows patients exactly why early treatment prevents permanent damage — and why waiting is never safe in inflammatory arthritis.
              </p>
            </div>

            {/* Content: Diagram left + Steps right */}
            <div className="lg:flex lg:gap-12 xl:gap-16 items-start">

              {/* Left — Joint Diagram (sticky) */}
              <div className="flex-1 mb-12 lg:mb-0 lg:sticky lg:top-[140px] self-start">
                <div className="bg-white p-6 md:p-8" style={{ borderRadius: 0 }}>
                  <h3
                    className="text-navy-deep text-center mb-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.3 }}
                  >
                    Healthy Joint vs Inflamed Joint
                  </h3>
                  <p className="text-[13px] text-navy-muted text-center mb-6">
                    Normal synovial joint compared with an RA-affected joint
                  </p>

                  {/* SVG Diagram */}
                  <svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                    <defs>
                      <radialGradient id="bone1" cx="50%" cy="30%" r="70%"><stop offset="0%" stopColor="#f5f0e8" /><stop offset="100%" stopColor="#d4c8b0" /></radialGradient>
                      <radialGradient id="bone2" cx="50%" cy="70%" r="70%"><stop offset="0%" stopColor="#f5f0e8" /><stop offset="100%" stopColor="#d4c8b0" /></radialGradient>
                      <radialGradient id="cart-h" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#a8d8c8" /><stop offset="100%" stopColor="#7fc5b0" /></radialGradient>
                      <radialGradient id="cart-i" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#e8a09e" /><stop offset="100%" stopColor="#d97070" /></radialGradient>
                      <radialGradient id="fluid-h" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(74,184,162,.25)" /><stop offset="100%" stopColor="rgba(74,184,162,.1)" /></radialGradient>
                      <radialGradient id="fluid-i" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(217,79,79,.22)" /><stop offset="100%" stopColor="rgba(217,79,79,.08)" /></radialGradient>
                    </defs>

                    {/* HEALTHY JOINT */}
                    <text x="115" y="22" textAnchor="middle" fontFamily="var(--font-base)" fontSize="11" fontWeight="700" fill="#2e7d6a">HEALTHY JOINT</text>
                    <ellipse cx="115" cy="80" rx="52" ry="30" fill="url(#bone1)" stroke="#c8bfa0" strokeWidth="1.2" />
                    <text x="115" y="84" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fill="#7a6e52">Bone</text>
                    <rect x="72" y="108" width="86" height="12" rx="6" fill="url(#cart-h)" stroke="#5daa8f" strokeWidth="1" />
                    <text x="115" y="118" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#2e7d6a">Healthy Cartilage</text>
                    <ellipse cx="115" cy="138" rx="44" ry="14" fill="url(#fluid-h)" stroke="#4ab8a2" strokeWidth="1" strokeDasharray="3,2" />
                    <text x="115" y="142" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7" fill="#2e7d6a">Synovial Fluid</text>
                    <path d="M71 124 Q 71 148 71 152 Q 93 158 115 158 Q 137 158 159 152 Q 159 148 159 124" fill="none" stroke="#4ab8a2" strokeWidth="1.5" strokeDasharray="4,2" />
                    <rect x="72" y="158" width="86" height="12" rx="6" fill="url(#cart-h)" stroke="#5daa8f" strokeWidth="1" />
                    <ellipse cx="115" cy="200" rx="52" ry="28" fill="url(#bone2)" stroke="#c8bfa0" strokeWidth="1.2" />
                    <text x="115" y="204" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fill="#7a6e52">Bone</text>

                    {/* Healthy annotations */}
                    <line x1="159" y1="113" x2="185" y2="100" stroke="#2e7d6a" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="187" y="98" fontFamily="var(--font-base)" fontSize="7.5" fill="#2e7d6a">Smooth cartilage intact</text>
                    <line x1="159" y1="138" x2="185" y2="135" stroke="#4ab8a2" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="187" y="133" fontFamily="var(--font-base)" fontSize="7.5" fill="#2e7d6a">Clear synovial fluid</text>
                    <line x1="159" y1="124" x2="185" y2="158" stroke="#4ab8a2" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="187" y="156" fontFamily="var(--font-base)" fontSize="7.5" fill="#2e7d6a">Thin synovial membrane</text>

                    {/* Divider */}
                    <line x1="230" y1="30" x2="230" y2="240" stroke="#dde6ee" strokeWidth="1.5" strokeDasharray="5,4" />

                    {/* INFLAMED JOINT */}
                    <text x="345" y="22" textAnchor="middle" fontFamily="var(--font-base)" fontSize="11" fontWeight="700" fill="#c45c3a">INFLAMED JOINT (RA)</text>
                    <ellipse cx="345" cy="80" rx="52" ry="30" fill="url(#bone1)" stroke="#c8bfa0" strokeWidth="1.2" />
                    <ellipse cx="298" cy="98" rx="7" ry="5" fill="#f5f0e8" stroke="#d4c8b0" strokeWidth="1" />
                    <ellipse cx="392" cy="98" rx="6" ry="4" fill="#f5f0e8" stroke="#d4c8b0" strokeWidth="1" />
                    <text x="345" y="84" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fill="#7a6e52">Bone</text>
                    <path d="M302 110 Q315 106 328 112 Q339 107 352 111 Q365 106 378 110 Q388 107 392 110 L392 118 L302 118 Z" fill="url(#cart-i)" stroke="#c05050" strokeWidth=".8" />
                    <text x="345" y="116" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">Damaged Cartilage</text>
                    <path d="M301 118 Q 290 128 285 148 Q 295 168 345 172 Q 395 168 405 148 Q 400 128 389 118" fill="rgba(217,79,79,.1)" stroke="#d97070" strokeWidth="2" />
                    <text x="260" y="148" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a" textAnchor="middle">Pannus</text>
                    <text x="260" y="158" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a" textAnchor="middle">(inflamed</text>
                    <text x="260" y="168" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a" textAnchor="middle">membrane)</text>
                    <ellipse cx="345" cy="145" rx="44" ry="14" fill="url(#fluid-i)" stroke="#d97070" strokeWidth="1" />
                    <text x="345" y="149" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7" fill="#c45c3a">Inflamed Fluid (cytokines)</text>
                    <path d="M302 170 Q315 174 328 169 Q341 174 355 170 Q368 174 380 170 Q387 173 392 170 L392 180 L302 180 Z" fill="url(#cart-i)" stroke="#c05050" strokeWidth=".8" />
                    <ellipse cx="345" cy="210" rx="52" ry="28" fill="url(#bone2)" stroke="#c8bfa0" strokeWidth="1.2" />
                    <ellipse cx="298" cy="192" rx="7" ry="4" fill="#f5f0e8" stroke="#d4c8b0" strokeWidth="1" />
                    <text x="345" y="214" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fill="#7a6e52">Bone</text>

                    {/* Inflammatory dots */}
                    <circle cx="325" cy="138" r="2.5" fill="#d97070" opacity=".7" />
                    <circle cx="340" cy="133" r="2" fill="#d97070" opacity=".6" />
                    <circle cx="358" cy="140" r="2.5" fill="#d97070" opacity=".7" />
                    <circle cx="348" cy="155" r="2" fill="#d97070" opacity=".5" />
                    <circle cx="332" cy="152" r="2" fill="#d97070" opacity=".6" />

                    {/* Inflamed annotations */}
                    <line x1="405" y1="115" x2="418" y2="100" stroke="#c45c3a" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="420" y="98" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">Bone erosions</text>
                    <line x1="389" y1="143" x2="418" y2="133" stroke="#d97070" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="420" y="131" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">TNF-&#945; &#183; IL-6</text>
                    <text x="420" y="141" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">cytokines</text>
                    <line x1="405" y1="170" x2="418" y2="162" stroke="#c45c3a" strokeWidth=".8" strokeDasharray="2,2" />
                    <text x="420" y="160" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">Cartilage loss</text>

                    {/* Bottom labels */}
                    <text x="115" y="240" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#2e7d6a">&#10003; Normal joint space preserved</text>
                    <text x="345" y="240" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#c45c3a">&#10005; Joint space narrowed — irreversible without Tx</text>
                  </svg>

                  {/* Legend */}
                  <div className="flex flex-wrap items-center justify-center gap-5 mt-6 pt-5" style={{ borderTop: "1px solid #e8ecf2" }}>
                    {[
                      { color: "#4ab8a2", label: "Healthy cartilage" },
                      { color: "#d97070", label: "Inflamed tissue" },
                      { color: "#d4c8b0", label: "Bone erosion" },
                      { color: "#c47a1a", label: "Cytokines (TNF / IL-6)" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-[11px] text-navy-muted">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — 3 Steps */}
              <div className="flex-1 flex flex-col gap-6">
                {[
                  {
                    num: 1,
                    title: "Immune Trigger",
                    desc: "In RA, Anti-CCP antibodies form silently — up to 10 years before symptoms appear. In AS, the HLA-B27 gene initiates a low-grade spinal inflammatory cascade.",
                  },
                  {
                    num: 2,
                    title: "Synovitis & Joint Destruction",
                    desc: "Inflammatory cells release TNF-\u03B1 and IL-6, thickening the synovial lining into destructive pannus tissue. Cartilage and bone erosion begins within 3\u20136 months and is irreversible once established.",
                  },
                  {
                    num: 3,
                    title: "Systemic & Structural Consequences",
                    desc: "Untreated RA doubles cardiovascular risk and causes lung involvement in 10\u201320% of patients. In AS, spinal fusion produces the classic \u201Cbamboo spine\u201D. Early treatment prevents all of this.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="shrink-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold"
                        style={{ backgroundColor: "rgba(26,163,181,0.2)", color: "#1AA3B5", border: "2px solid #1AA3B5" }}
                      >
                        {step.num}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-base)", fontSize: "1rem", fontWeight: 600, lineHeight: 1.3, color: "#ffffff", marginBottom: "0.35rem" }}>
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* Bottom wave */}
          <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#ffffff" />
          </svg>
        </section>

        {/* ═══════════ DIAGNOSIS — TESTS AND WHAT THEY MEAN ═══════════ */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14 max-w-2xl">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.5rem" }}
              >
                Diagnosis — Tests and What They Mean
              </h2>
              <p className="text-[15.5px] leading-[1.85] text-navy-muted">
                No single test diagnoses arthritis. Diagnosis is clinical — combining history, physical examination, blood tests, and imaging. Understanding what each test looks for helps patients have better conversations with their rheumatologist.
              </p>
            </div>

            <div ref={diagnosisRef} onScroll={handleDiagnosisScroll} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:pb-0">
              {[
                {
                  icon: "bloodtype",
                  iconColor: "#e05a5a",
                  iconBg: "linear-gradient(135deg, #fde8e8 0%, #f9d4d4 100%)",
                  title: "Blood Tests",
                  desc: "Detect inflammation markers and autoantibodies. Must be interpreted in full clinical context — not in isolation.",
                  tags: ["RF", "Anti-CCP", "CRP", "ESR", "ANA", "HLA-B27", "Uric Acid", "FBC"],
                  accent: "#e05a5a",
                },
                {
                  icon: "image_search",
                  iconColor: "#0f616e",
                  iconBg: "linear-gradient(135deg, #e0f3f5 0%, #b8e6ea 100%)",
                  title: "Imaging",
                  desc: "X-rays show bone damage; MRI detects early inflammation before bone changes appear; ultrasound visualises active synovitis in real time.",
                  tags: ["X-Ray Hands/Feet", "MRI SI Joints", "MSUS", "Chest CT", "DEXA"],
                  accent: "#1AA3B5",
                },
                {
                  icon: "science",
                  iconColor: "#1A355D",
                  iconBg: "linear-gradient(135deg, #e8edf5 0%, #d4ddef 100%)",
                  title: "Joint Fluid Analysis",
                  desc: "Arthrocentesis is gold standard for gout — crystals are directly visible. Also essential to rule out septic arthritis, a medical emergency.",
                  tags: ["Crystal analysis", "WBC count", "Culture & sensitivity"],
                  accent: "#1A355D",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300 min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-start"
                  style={{ backgroundColor: "#faf7f2", borderRadius: 0, padding: "2.25rem 1.75rem 2rem", boxShadow: "none", border: "1px solid #e5e7eb" }}
                >

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: card.iconBg }}
                  >
                    <span className="material-symbols-outlined text-[28px]" style={{ color: card.iconColor }}>{card.icon}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.2 }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] leading-[1.75] text-navy-muted mb-6 max-w-[280px]">{card.desc}</p>

                  {/* Divider */}
                  <div className="w-10 h-[1px] mb-5" style={{ backgroundColor: "#ddd6ca" }} />

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11.5px] font-semibold px-3.5 py-1.5 hover:shadow-sm transition-shadow cursor-default"
                        style={{ backgroundColor: "#ffffff", color: "#1A355D", borderRadius: "20px", border: "1px solid #e8e0d4", letterSpacing: "0.01em" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel dots — mobile only */}
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: diagnosisActive === i ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: diagnosisActive === i ? "#1AA3B5" : "#d1d5db",
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 06 — TREATMENT OPTIONS ═══════════ */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14 max-w-2xl">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.5rem" }}>
                Treatment Options
              </h2>
              <p className="text-[15px] leading-[1.8] text-navy-muted">
                Arthritis is managed through two primary treatment pathways — medication therapy to control inflammation and slow disease progression, and surgery when structural joint damage is irreversible. Most patients are managed with medicines alone; surgery is reserved for advanced cases.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Card 1: Medicines */}
              <div className="overflow-hidden flex flex-col border border-gray-200" style={{ borderRadius: 0 }}>
                <div className="p-6 pb-5" style={{ background: "linear-gradient(135deg, rgba(26,163,181,.12) 0%, rgba(26,163,181,.04) 100%)", borderBottom: "1.5px solid rgba(26,163,181,.18)" }}>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.07em] px-2.5 py-1 rounded-full mb-2" style={{ color: "#0f616e", backgroundColor: "#e0f3f5" }}>First-Line Approach</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 400, color: "#1A355D" }}>Medicines</h3>
                  <p className="text-[13px] text-navy-muted mt-1">From symptom relief to disease-modifying and biologic therapy</p>
                </div>
                {/* SVG illustration */}
                <div className="p-5" style={{ backgroundColor: "#eef6fc", borderBottom: "1px solid #dde6ee" }}>
                  <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                    <ellipse cx="90" cy="85" rx="72" ry="60" fill="rgba(26,163,181,.06)" />
                    <ellipse cx="250" cy="75" rx="60" ry="50" fill="rgba(250,136,90,.05)" />
                    <rect x="18" y="65" width="80" height="36" rx="18" fill="none" stroke="#1AA3B5" strokeWidth="2.2" />
                    <line x1="58" y1="65" x2="58" y2="101" stroke="#1AA3B5" strokeWidth="2" strokeDasharray="3,2" />
                    <rect x="18" y="65" width="40" height="36" rx="18" fill="rgba(26,163,181,.14)" />
                    <text x="58" y="89" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fontWeight="700" fill="#0f616e">TABLET</text>
                    <rect x="118" y="45" width="104" height="40" rx="20" fill="none" stroke="#fa885a" strokeWidth="2.2" />
                    <rect x="118" y="45" width="52" height="40" rx="20" fill="rgba(250,136,90,.16)" />
                    <text x="170" y="70" textAnchor="middle" fontFamily="var(--font-base)" fontSize="8" fontWeight="700" fill="#c45c3a">CAPSULE</text>
                    <text x="58" y="118" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080">NSAIDs · DMARDs</text>
                    <text x="170" y="100" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080">Steroids · Gout agents</text>
                    <text x="268" y="120" textAnchor="middle" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080">Biologics · JAK inhibitors</text>
                  </svg>
                </div>
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  {[
                    { color: "#1AA3B5", text: "NSAIDs" },
                    { color: "#1AA3B5", text: "DMARDs — Methotrexate, Hydroxychloroquine, Sulfasalazine" },
                    { color: "#fa885a", text: "Corticosteroids" },
                    { color: "#6652a8", text: "Biologics — Adalimumab, Etanercept, Tocilizumab, Secukinumab" },
                    { color: "#e05a5a", text: "JAK Inhibitors — Upadacitinib, Baricitinib, Tofacitinib" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-navy-deep">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="mx-5 mb-5 p-3 text-[12px] text-navy-muted" style={{ backgroundColor: "rgba(26,163,181,.07)", border: "1px solid rgba(26,163,181,.2)", borderRadius: "9px" }}>
                  &#9888;&#65039; Never change medication without guidance from your rheumatologist.
                </div>
              </div>

              {/* Card 2: Surgery */}
              <div className="overflow-hidden flex flex-col border border-gray-200" style={{ borderRadius: 0 }}>
                <div className="p-6 pb-5" style={{ background: "linear-gradient(135deg, rgba(15,36,64,.07) 0%, rgba(15,36,64,.02) 100%)", borderBottom: "1.5px solid rgba(15,36,64,.1)" }}>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.07em] px-2.5 py-1 rounded-full mb-2" style={{ color: "#c45c3a", backgroundColor: "#fdf0eb" }}>When Medicines Are Not Enough</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 400, color: "#1A355D" }}>Surgery</h3>
                  <p className="text-[13px] text-navy-muted mt-1">Joint replacement or spinal procedures for irreversible structural damage</p>
                </div>
                <div className="p-5" style={{ backgroundColor: "#eef6fc", borderBottom: "1px solid #dde6ee" }}>
                  <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                    <ellipse cx="170" cy="85" rx="110" ry="70" fill="rgba(15,36,64,.04)" />
                    <ellipse cx="170" cy="42" rx="28" ry="36" fill="#e8e2d9" stroke="#ccc5bb" strokeWidth="1.5" />
                    <ellipse cx="170" cy="42" rx="14" ry="26" fill="#f2ede6" />
                    <path d="M138 78 Q170 86 202 78 L205 90 Q170 100 135 90 Z" fill="#1AA3B5" opacity=".85" />
                    <rect x="160" y="90" width="20" height="28" rx="4" fill="#1AA3B5" opacity=".75" />
                    <rect x="156" y="116" width="28" height="8" rx="4" fill="#0f8a7a" />
                    <ellipse cx="170" cy="138" rx="26" ry="30" fill="#e8e2d9" stroke="#ccc5bb" strokeWidth="1.5" />
                    <text x="215" y="82" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080">Femoral component</text>
                    <text x="215" y="118" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080">Tibial tray</text>
                    <text x="88" y="96" textAnchor="end" fontFamily="var(--font-base)" fontSize="7.5" fill="#1AA3B5">Prosthesis</text>
                  </svg>
                </div>
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Total Knee Replacement",
                    "Total Hip Replacement",
                    "Synovectomy",
                    "Arthroscopy",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-navy-deep">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#1A355D" }} />
                      {item}
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-[13px] text-navy-deep">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#c45c3a" }} />
                    Spinal Fusion — end-stage Ankylosing Spondylitis
                  </div>
                </div>
                <div className="mx-5 mb-5 p-3 text-[12px] text-navy-muted" style={{ backgroundColor: "rgba(217,79,79,.05)", border: "1px solid rgba(217,79,79,.2)", borderRadius: "9px" }}>
                  &#128309; Reserved as a last resort — only after all medical options are exhausted.
                </div>
              </div>

              {/* Card 3: Physiotherapy */}
              <div className="overflow-hidden flex flex-col border border-gray-200" style={{ borderRadius: 0 }}>
                <div className="p-6 pb-5" style={{ background: "linear-gradient(135deg, rgba(26,163,181,.1) 0%, rgba(212,235,248,.18) 100%)", borderBottom: "1.5px solid rgba(26,163,181,.15)" }}>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.07em] px-2.5 py-1 rounded-full mb-2" style={{ color: "#1a6e8a", backgroundColor: "#d4ebf8" }}>At Every Stage of Treatment</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", fontWeight: 400, color: "#1A355D" }}>Physiotherapy</h3>
                  <p className="text-[13px] text-navy-muted mt-1">Grade A evidence across all arthritis types — recommended at every stage</p>
                </div>
                <div className="p-5" style={{ backgroundColor: "#eef6fc", borderBottom: "1px solid #dde6ee" }}>
                  <svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                    <ellipse cx="170" cy="85" rx="120" ry="68" fill="rgba(26,163,181,.05)" />
                    <circle cx="170" cy="22" r="16" fill="#e8e2d9" stroke="#ccc5bb" strokeWidth="1.5" />
                    <path d="M150 45 Q157 40 170 38 Q183 40 190 45 L194 90 Q183 97 170 97 Q157 97 146 90 Z" fill="#d4ebf8" stroke="#1AA3B5" strokeWidth="1.5" />
                    <path d="M150 52 Q132 40 120 28" stroke="#1A355D" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <circle cx="120" cy="28" r="5" fill="#1AA3B5" />
                    <path d="M190 52 Q206 58 218 55" stroke="#1A355D" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <circle cx="218" cy="55" r="5" fill="#1AA3B5" />
                    <path d="M158 97 Q150 122 143 136" stroke="#1A355D" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M182 97 Q187 122 189 142" stroke="#1A355D" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <text x="88" y="26" fontFamily="var(--font-base)" fontSize="7.5" fill="#1AA3B5" textAnchor="middle">Range of Motion</text>
                    <text x="242" y="50" fontFamily="var(--font-base)" fontSize="7.5" fill="#1AA3B5">Strength Training</text>
                    <text x="133" y="152" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080" textAnchor="middle">Joint Mobility</text>
                    <text x="198" y="155" fontFamily="var(--font-base)" fontSize="7.5" fill="#5a7080" textAnchor="middle">Gait &amp; Balance</text>
                  </svg>
                </div>
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  {[
                    "Joint Mobilisation Exercises",
                    "Muscle Strengthening",
                    "Hydrotherapy",
                    "Gait & Balance Training",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-navy-deep">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#1AA3B5" }} />
                      {item}
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-[13px] text-navy-deep">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#1a6e8a" }} />
                    Post-Surgical Rehabilitation
                  </div>
                </div>
                <div className="mx-5 mb-5 p-3 text-[12px] text-navy-muted" style={{ backgroundColor: "rgba(212,235,248,.4)", border: "1px solid rgba(26,163,181,.2)", borderRadius: "9px" }}>
                  &#127939; Recommended alongside medications and post-surgery — not a standalone option.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ 07 — LIVING WELL WITH ARTHRITIS ═══════════ */}
        <section className="py-12 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-0 md:px-6">
            <div className="mb-8 md:mb-14 max-w-2xl px-5 md:px-0">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Living Well With Arthritis
              </h2>
            </div>

            {/* Photo + text row */}
            <div className="lg:grid lg:grid-cols-[400px_1fr] overflow-hidden mb-8" style={{ borderRadius: "0", border: "none" }}
              id="living-well-card"
            >
              <style>{`@media(min-width:1024px){#living-well-card{border-radius:20px !important;border:1.5px solid #dde6ee !important;}}`}</style>
              {/* Photo side */}
              <div className="relative h-[260px] lg:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85"
                  alt="Person exercising actively"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,36,64,.45) 0%, transparent 60%)" }} />
              </div>
              {/* Text side */}
              <div className="p-7 lg:p-8 flex flex-col gap-4" style={{ backgroundColor: "#0f616e" }}>
                <h4 style={{ fontFamily: "var(--font-base)", fontSize: "1.15rem", color: "#fff", lineHeight: 1.3, fontWeight: 700 }}>
                  What You Do Between Appointments Matters as Much as Medication
                </h4>
                <p className="text-[13px]" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>
                  Clinical research consistently shows that patient self-management has outcomes on par with medication choice. These habits are part of your treatment plan — not optional extras.
                </p>
                <ul className="flex flex-col gap-1.5" style={{ fontFamily: "var(--font-base)" }}>
                  {[
                    "Move every day — even 20 minutes of low-impact activity measurably reduces inflammatory markers",
                    "Keep a symptom diary — helps your rheumatologist spot patterns and adjust treatment accurately",
                    "Never skip medication doses — inconsistency leads to flares and faster disease progression",
                    "Know your blood test schedule and never miss monitoring appointments",
                    "Disclose all supplements and herbal remedies — many interact with DMARDs",
                    "Build a support network — isolation directly worsens pain perception and mental health",
                    "Discuss fatigue explicitly with your team — it is measurable and treatable",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-[13px] items-start" style={{ color: "rgba(255,255,255,.72)" }}>
                      <span className="shrink-0 font-bold" style={{ color: "#1AA3B5" }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "restaurant", iconColor: "#1AA3B5", iconBg: "#e0f3f5", title: "Diet & Nutrition", desc: "Mediterranean diet reduces CRP by up to 30% in clinical studies. Omega-3s from oily fish reduce synovial inflammation in RA. Avoid excess alcohol and ultra-processed food." },
                { icon: "bedtime", iconColor: "#1A355D", iconBg: "#e8edf5", title: "Sleep & Fatigue", desc: "Inflammatory fatigue is driven by the same cytokines causing joint inflammation. Prioritise sleep hygiene. Effective disease control is the best treatment for inflammatory fatigue." },
                { icon: "self_improvement", iconColor: "#6652a8", iconBg: "#ede8f5", title: "Mental Health", desc: "Chronic inflammatory pain is associated with a 2\u20133\u00D7 higher rate of depression and anxiety. Cognitive-behavioural therapy has strong clinical evidence in RA and fibromyalgia." },
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 border border-gray-100" style={{ borderRadius: 0 }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: card.iconBg }}>
                    <span className="material-symbols-outlined text-[20px]" style={{ color: card.iconColor }}>{card.icon}</span>
                  </div>
                  <h5 className="text-[15px] font-bold text-navy-deep mb-2">{card.title}</h5>
                  <p className="text-[13px] text-navy-muted leading-[1.65]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ 08 — RHEUMACARE ═══════════ */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14 max-w-2xl">
              <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1.5rem" }}>
                The Role of{" "}
                <span className="relative inline-block" style={{ color: "#1AA3B5" }}>
                  RheumaCare
                  <svg className="absolute -bottom-1 left-0 w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                    <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </span>
              </h2>
              <p className="text-[15px] leading-[1.8] text-navy-muted">
                RheumaCare is designed to bridge the gap between clinical appointments and everyday life — giving patients, caregivers, and clinicians the tools, knowledge, and support they need at every stage of the arthritis journey.
              </p>
            </div>

            {/* Impact stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10 overflow-hidden relative" style={{ backgroundColor: "#0f616e", borderRadius: "18px", padding: "2.2rem 2.5rem" }}>
              <div className="absolute -right-[60px] -bottom-[60px] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(26,163,181,.1) 0%, transparent 65%)" }} />
              {[
                { num: "6 yrs", label: "Average diagnosis delay in India", sub: "RheumaCare helps patients identify symptoms earlier and connect with specialists faster" },
                { num: "60%", label: "Reduction in joint damage", sub: "When inflammatory arthritis is treated within 3 months of symptom onset" },
                { num: "40%", label: "Work disability in 10 years", sub: "RheumaCare\u2019s treat-to-target tools and monitoring support help avoid this outcome" },
              ].map((stat, i) => (
                <div key={i} className="p-4 md:p-5">
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 3vw, 2.4rem)", fontWeight: 400, color: "#1AA3B5", lineHeight: 1, marginBottom: "0.3rem" }}>{stat.num}</p>
                  <p className="text-[14px] font-semibold mb-1" style={{ color: "rgba(255,255,255,.9)" }}>{stat.label}</p>
                  <p className="text-[12px]" style={{ color: "rgba(255,255,255,.4)", lineHeight: 1.55 }}>{stat.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ═══════════ WARNING SIGNS (COMMENTED) ═══════════ */}
        {/* <section className="py-20 md:py-28" style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:flex lg:gap-16 lg:items-center">
              <div className="flex-1 mb-12 lg:mb-0">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-6" style={{ backgroundColor: "#fa885a", color: "#1A355D" }}>
                  Early Detection
                </span>
                <h2
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px", color: "#ffffff", marginBottom: "1.5rem" }}
                >
                  When should you see a rheumatologist?
                </h2>
                <p className="text-[16px] leading-[1.8] mb-14" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Don&apos;t wait for joint damage to become irreversible. If you experience any of these warning signs, it&apos;s time to consult a specialist.
                </p>
                <a
                  href="#"
                  className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
                  style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "14px 32px" }}
                >
                  Take Our Symptom Assessment
                </a>
              </div>
              <div className="flex-1">
                <div className="space-y-3">
                  {warningSignsEarly.map((sign, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", borderRadius: 0 }}
                    >
                      <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1AA3B5" }}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="#fff" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.9)" }}>{sign}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ═══════════ TREATMENT APPROACH (COMMENTED) ═══════════ */}
        {/* <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.8px" }}
              >
                How Rheuma treats{" "}
                <span className="relative inline-block">
                  arthritis
                  <svg className="absolute -bottom-1 left-0 w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                    <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                  </svg>
                </span>
              </h2>
              <p className="text-[16px] text-navy-muted leading-relaxed mt-5 max-w-lg mx-auto text-center">
                Our evidence-based, multidisciplinary approach is designed to get you from diagnosis to remission as quickly as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {treatmentApproach.map((item, i) => (
                <div key={i} className="relative p-8 bg-ghost" style={{ borderRadius: 0 }}>
                  <span
                    className="block text-[40px] font-light leading-none mb-4"
                    style={{ fontFamily: "var(--font-display)", color: item.color, opacity: 0.4 }}
                  >
                    {item.step}
                  </span>
                  <h3
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.25 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.75] text-navy-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
                style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "14px 36px" }}
              >
                Start Your Care Journey
              </a>
            </div>
          </div>
        </section> */}

        {/* ═══════════ DEEP DIVE CTA CARDS ═══════════ */}
        <section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RA Guide Card */}
              <Link
                to="/health-guide/Rheumatoid-Arthritis"
                className="group relative overflow-hidden bg-navy-deep p-10 md:p-12 flex flex-col justify-end min-h-[300px] hover:shadow-[0_12px_40px_rgba(15,97,110,0.25)] transition-all duration-300"
                style={{ borderRadius: 0 }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-4 self-start" style={{ backgroundColor: "#1AA3B5", color: "#fff" }}>
                  In-Depth Guide
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.15, color: "#ffffff", marginBottom: "0.75rem" }}>
                  Rheumatoid Arthritis: Complete Guide
                </h3>
                <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Symptoms, causes, risk factors, diagnosis, and the latest treatment options — all reviewed by our rheumatology team.
                </p>
              </Link>

              {/* Health Guide Card */}
              <Link
                to="/health-guide"
                className="group relative overflow-hidden p-10 md:p-12 flex flex-col justify-end min-h-[300px] hover:shadow-[0_12px_40px_rgba(24,36,57,0.1)] transition-all duration-300"
                style={{ borderRadius: 0, backgroundColor: "#e0f3f5" }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-navy-deep/10 flex items-center justify-center group-hover:bg-navy-deep/20 transition-colors">
                  <svg className="w-5 h-5 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-4 self-start" style={{ backgroundColor: "#1A355D", color: "#ffffff" }}>
                  Health Guide
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.15, color: "#1A355D", marginBottom: "0.75rem" }}>
                  Explore All Conditions
                </h3>
                <p className="text-[14px] leading-[1.7] text-navy-muted">
                  Browse our comprehensive library of condition guides, treatment deep-dives, and patient resources.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ SUPPORTING YOUR JOURNEY ═══════════ */}
        <section className="py-12 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px", marginBottom: "1rem" }}
              >
                Supporting your arthritis journey at every step
              </h2>
              <p className="text-[15px] leading-[1.75] text-navy-muted">
                From first symptoms to sustained remission — RheumaCare connects patients and clinicians with the tools, specialists, and community they need.
              </p>
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[14px] mt-7 transition-all hover:opacity-90"
                style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "0.7rem 2rem" }}
              >
                Book a Consultation &#8594;
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "call", title: "Specialist Consultation", desc: "Direct access to experienced rheumatologists — in-person or teleconsult, cutting the average 6-year diagnosis delay.", link: "Book now" },
                { icon: "monitoring", title: "Symptom & Flare Monitoring", desc: "Log pain, stiffness, and medication adherence between appointments — giving your care team data for precise treat-to-target decisions.", link: "Start tracking" },
                { icon: "group", title: "Patient Community", desc: "A moderated peer network for people living with arthritis — shared experience, coping strategies, and support between appointments.", link: "Join now" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white p-6 md:p-7 flex flex-col border border-gray-100 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(15,36,64,.08)] transition-all duration-200"
                  style={{ borderRadius: 0 }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#e0f3f5" }}>
                    <span className="material-symbols-outlined text-[22px]" style={{ color: "#1AA3B5" }}>{card.icon}</span>
                  </div>
                  <h4
                    className="text-navy-deep mb-3"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 400, lineHeight: 1.25 }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-[13.5px] leading-[1.7] text-navy-muted flex-1">
                    {card.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-1 text-[13px] font-bold mt-5 hover:gap-2 transition-all" style={{ color: "#1AA3B5" }}>
                    {card.link} &#8594;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ ARTICLES ON ARTHRITIS ═══════════ */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#1AA3B5" }}>
                Latest Research
              </span>
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Articles on Arthritis
              </h2>
            </div>

            {/* Grid: 1.6fr 1fr */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 items-start">
              {/* Featured card */}
              <div className="rounded-2xl border border-[#dde6ee] overflow-hidden">
                <div className="relative h-[320px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800" alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,97,110,.8)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-1.5">
                      <span className="w-3 h-0.5 bg-[#1AA3B5] rounded-full" />
                      Research
                    </span>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-navy-deep mb-2.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400 }}>Treat-to-Target in RA: Does Achieving Remission Actually Prevent Long-Term Joint Damage?</h3>
                  <div className="flex items-center gap-2.5 text-xs text-navy-muted mb-4">
                    <span>Dr. Priya Menon</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#dde6ee]" />
                    <span>10 min read</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#dde6ee]" />
                    <span>March 2026</span>
                  </div>
                  <button className="py-2.5 px-6 rounded-full text-white font-semibold text-sm cursor-pointer border-none hover:opacity-90 transition-opacity" style={{ background: "#0f616e" }}>
                    Read Article
                  </button>
                </div>
              </div>

              {/* List cards */}
              <div className="flex flex-col gap-3">
                {[
                  { img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400", cat: "Medications", title: "Starting Methotrexate — What Every Patient Must Know", time: "8 min read" },
                  { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400", cat: "Patient Guide", title: "RA vs Osteoarthritis — How to Tell the Difference", time: "6 min read" },
                  { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400", cat: "Physiotherapy", title: "Best Exercises for Ankylosing Spondylitis", time: "7 min read" },
                  { img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400", cat: "Lifestyle", title: "Diet & Inflammation — What to Eat With Arthritis", time: "5 min read" },
                ].map((art, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-[#dde6ee] bg-white cursor-pointer items-center hover:border-primary transition-colors">
                    <img src={art.img} alt="" className="w-[72px] h-[72px] rounded-[10px] object-cover shrink-0" />
                    <div>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-0.5">
                        <span className="w-2 h-0.5 bg-[#1AA3B5] rounded-full" />
                        {art.cat}
                      </span>
                      <h4 className="text-navy-deep mb-0.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 400 }}>{art.title}</h4>
                      <span className="text-[11px] text-navy-muted">{art.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER ═══════════ */}
        <CtaBanner />

        {/* ═══════════ NEWSLETTER ═══════════ */}
        <div className="bg-white -mt-10 md:-mt-16">
          <Newsletter />
        </div>

        {/* ═══════════ FAQ (COMMENTED) ═══════════
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-navy-deep"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.8px" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-ghost border border-gray-100 overflow-hidden group" style={{ borderRadius: 0 }}>
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-45" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        ═══════════ */}

        {/* ═══════════ CTA BANNER (COMMENTED) ═══════════
        <section className="w-full flex flex-col bg-white overflow-visible">
          <svg
            className="w-full h-[24px] sm:h-[90px] md:h-[120px] text-navy-deep block"
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path
              d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
              fill="currentColor"
            />
          </svg>
          <div className="bg-navy-deep w-full overflow-visible">
            <div className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 pt-6 sm:pt-10">
              <div className="flex flex-col-reverse md:flex-row items-stretch gap-10 md:gap-16">
                <div className="flex-[1.1] flex flex-col items-center md:items-start justify-center py-4">
                  <h2
                    className="leading-[1.1] font-normal mb-6 text-center md:text-left"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5.5vw, 68px)", letterSpacing: "-0.5px", color: "#ffffff" }}
                  >
                    Take control of your arthritis today
                  </h2>
                  <p className="text-[16px] leading-relaxed mb-10 text-center md:text-left" style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}>
                    See a board-certified rheumatologist within 72 hours. No long waitlists. No guesswork.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                    <a
                      href="#"
                      className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                      style={{ backgroundColor: "#1AA3B5", color: "#ffffff", padding: "16px 32px" }}
                    >
                      Schedule An Appointment
                    </a>
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[15px] text-gray-100 opacity-90">or</span>
                      <a
                        href="#"
                        className="text-[15px] font-semibold underline decoration-2 underline-offset-[6px] hover:text-primary transition-colors"
                        style={{ color: "#ffffff" }}
                      >
                        let&apos;s get in touch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/hero-consult.jpg"
                    alt="Doctor consulting with patient"
                    className="w-full block rounded-[4px] absolute bottom-0"
                    style={{ height: "clamp(300px, 50vw, 520px)", objectFit: "cover", objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        ═══════════ */}

        {/* ═══════════ NEWSLETTER (COMMENTED) ═══════════
        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>
        ═══════════ */}

      </main>
      <BriefingFooter />
    </div>
  )
}

export default Arthritis
