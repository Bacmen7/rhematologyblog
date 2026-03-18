import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const diagnosisSteps = [
  {
    title: "Symptom review",
    desc: "Which joints, how long, morning stiffness, family history",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=120&q=80",
  },
  {
    title: "Physical examination",
    desc: "Joint count, swelling, tenderness, range of motion",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120&q=80",
  },
  {
    title: "Blood tests",
    desc: "RF, Anti-CCP, CRP, ESR, ANA — inflammation and antibody markers",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=120&q=80",
  },
  {
    title: "Imaging",
    desc: "X-ray, MRI, or ultrasound — to see joint damage and inflammation",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=120&q=80",
  },
]

const treatmentCards = [
  {
    title: "Medications",
    desc: "Pain relief, disease-modifying drugs, biologic therapies, and JAK inhibitors — the foundation of treatment for most rheumatic conditions.",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Injections & Procedures",
    desc: "Corticosteroid injections, hyaluronic acid, and joint aspiration — fast, localised relief delivered directly to the affected joint.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Surgery",
    desc: "Joint replacement, synovectomy, and spinal surgery — considered only when all other treatments have not provided enough relief.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=80",
  },
]

const journeySteps = [
  {
    title: "1. Your first appointment",
    content: "Your rheumatologist takes a full history, examines your joints, and arranges blood tests and imaging. They will explain what they think is happening and outline a treatment plan. Bring a list of your symptoms and any questions.",
    list: null,
  },
  {
    title: "2. Starting your first medication",
    content: "Most patients start Methotrexate — a weekly tablet or injection. It takes 6–12 weeks to work. Folic acid and a stomach tablet are prescribed alongside it.",
    list: [
      "Take once a week — always the same day",
      "Regular blood tests every 3 months",
      "Do not stop without speaking to your rheumatologist",
    ],
  },
  {
    title: "3. Your 3-month review",
    content: "Your rheumatologist scores your disease activity and reviews your blood results. If the target has not been reached, the dose is increased or a second medicine added. This continues every 3 months until remission.",
    list: null,
  },
  {
    title: "4. If tablets are not enough — biologics",
    content: "If conventional tablets have not worked after an adequate trial, biologic therapy is considered. These are injected medicines given fortnightly or monthly that target specific proteins driving the inflammation.",
    list: null,
  },
  {
    title: "5. Reaching remission",
    content: "Remission means no active joint swelling and normal inflammation markers. Most patients can then be maintained on a lower dose. Stopping treatment entirely is sometimes possible after prolonged remission.",
    list: null,
  },
]

const conditionRows = [
  { name: "Rheumatoid Arthritis", tag: "Autoimmune", tagColor: "#0f616e", tagBg: "#e0f3f5", first: "Methotrexate", next: "Biologic therapy or JAK inhibitor" },
  { name: "Osteoarthritis", tag: "Degenerative", tagColor: "#b45309", tagBg: "#fef3c7", first: "Physiotherapy + pain relief", next: "Joint injection, then joint replacement" },
  { name: "Ankylosing Spondylitis", tag: "Spinal", tagColor: "#9b1c1c", tagBg: "#fee2e2", first: "NSAIDs (continuous) + physiotherapy", next: "Secukinumab (biologic)" },
  { name: "Psoriatic Arthritis", tag: "Psoriatic", tagColor: "#5b21b6", tagBg: "#ede9fe", first: "Methotrexate", next: "IL-17 biologic — treats skin and joints" },
  { name: "Gout", tag: "Crystal", tagColor: "#0f616e", tagBg: "#e0f3f5", first: "Colchicine (attack) + diet change", next: "Allopurinol — long-term uric acid control" },
  { name: "Lupus (SLE)", tag: "Autoimmune", tagColor: "#5b21b6", tagBg: "#ede9fe", first: "Hydroxychloroquine", next: "Steroids, immunosuppressives, biologics" },
]

/* ─────────────────────────────────────────────
   ACCORDION
   ───────────────────────────────────────────── */

function Accordion({ steps }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div >
      {steps.map((step, i) => {
        const isOpen = openIdx === i
        return (
          <div key={i} style={{ borderBottom: "1.5px solid #e0e0e0" }}>
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between text-left cursor-pointer"
              style={{ padding: "1rem 0" }}
            >
              <h4 style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "14px", color: "#0f616e" }}>
                {step.title}
              </h4>
              <svg
                className="w-4 h-4 flex-shrink-0"
                style={{
                  color: "#9ca3af",
                  transition: "transform 0.25s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div style={{ paddingBottom: "1rem" }}>
                <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                  {step.content}
                </p>
                {step.list && (
                  <ul style={{ listStyle: "none", marginTop: "0.6rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {step.list.map((item, j) => (
                      <li key={j} className="text-sm text-navy-deep" style={{ fontFamily: "var(--font-base)", display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "#1AA3B5", flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────
   ARROW BUTTON (same as landing page)
   ───────────────────────────────────────────── */

function ArrowButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer flex-shrink-0"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  )
}

/* ─────────────────────────────────────────────
   MAIN PAGE
   ───────────────────────────────────────────── */

function TreatmentGuides() {
  const cardScrollRef = useRef(null)

  const scrollCards = (direction) => {
    if (cardScrollRef.current) {
      cardScrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-background-light text-navy-deep antialiased overflow-x-hidden">
      <Header />

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="bg-background-light py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6" style={{ textAlign: "center" }}>
          <h1
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.5vw, 68px)",
              fontWeight: 400,
              letterSpacing: "-0.5px",
              color: "#0f616e",
              marginBottom: "1rem",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            It's finally time to understand{" "}
your treatment
          </h1>
          <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, marginBottom: "2.4rem", textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
            Rheumatic conditions are highly treatable. Here is everything you need to know — diagnosis, medications, injections, and surgery — explained simply.
          </p>
          <a
            href="#diagnosis"
            className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90"
            style={{ backgroundColor: "#e86531", color: "#ffffff", padding: "16px 32px" }}
          >
            Explore treatment options
          </a>
        </div>
      </section>

      {/* ═══ SECTION 2 — DIAGNOSIS ═══ */}
      <section id="diagnosis" className="bg-white" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <p
              style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}
            >
              Step One
            </p>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
            >
              How is it diagnosed?
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Your rheumatologist uses four key steps to build the full picture. Click any step to learn more.
            </p>
          </div>

          {/* Split card */}
          <div

            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            style={{
              borderRadius: "10px",
            }}
          >
            {/* Left — dark */}
            <div className="flex flex-col justify-center" style={{ backgroundColor: "#0f616e", padding: "3rem" }}>
              <h3
                className="text-white text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem", color: "#ffffff" }}
              >
                Getting the <span style={{ color: "#1AA3B5" }}>right diagnosis</span>
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
                There is no single test for most rheumatic conditions. Diagnosis is built from your symptoms, an examination, blood tests, and imaging — together they tell the full story.
              </p>
              <a
                href="#"
                className="inline-block self-start rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1AA3B5", padding: "12px 24px", textDecoration: "none" }}
              >
                Book your first appointment
              </a>
            </div>

            {/* Right — steps */}
            <div className="bg-white" style={{ padding: "2.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#0f616e",
                  marginBottom: "1.2rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1.5px solid #e0e0e0",
                }}
              >
                What happens at your appointment
              </h3>
              <div className="flex flex-col" style={{ gap: "0.5rem" }}>
                {diagnosisSteps.map((step, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center group"
                    style={{
                      gap: "1rem",
                      padding: "12px",
                      border: "1.5px solid #e0e0e0",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      backgroundColor: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0f616e"
                      e.currentTarget.style.backgroundColor = "#f0f7f8"
                      e.currentTarget.style.transform = "translateX(4px)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#e0e0e0"
                      e.currentTarget.style.backgroundColor = "#fff"
                      e.currentTarget.style.transform = "translateX(0)"
                    }}
                  >
                    <img src={step.img} alt={step.title} className="flex-shrink-0" style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover", backgroundColor: "#F5F5F5" }} />
                    <div style={{ flex: 1 }}>
                      <h4 className="text-sm font-semibold text-navy-deep" style={{ fontFamily: "var(--font-base)", marginBottom: "2px" }}>{step.title}</h4>
                      <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", lineHeight: 1.45 }}>{step.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — TREATMENT OPTIONS ═══ */}
      <section id="treatment" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <p
              style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}
            >
              Step Two
            </p>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
            >
              Personalised treatment
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Treatment is tailored to your condition and how active the disease is. There are three main approaches — most patients need a combination.
            </p>
          </div>

          {/* Cards — carousel on mobile, grid on desktop (same pattern as SuccessStories) */}
          <div
            ref={cardScrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
          >
            {treatmentCards.map((card, i) => (
              <a
                key={i}
    
                href="#"
                className="w-[300px] min-w-[300px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink flex flex-col bg-white overflow-hidden group"
                style={{
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)" }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl leading-snug text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-navy-muted leading-relaxed flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "12px" }}>
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep" style={{ fontFamily: "var(--font-base)" }}>
                    Learn more
                    <span className="w-7 h-7 rounded-full bg-primary/40 flex items-center justify-center group-hover:bg-primary/60 transition-colors">
                      <svg className="w-3.5 h-3.5 text-navy-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — GETTING STARTED ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-16">
            {/* Left — journey card */}
            <div
              className="bg-[#fcfcfc] overflow-hidden border border-gray-100"
              style={{ borderRadius: "10px" }}
            >
              <div className="h-52 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Patient meeting with doctor" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl leading-snug text-navy-deep"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "12px" }}
                >
                  Your treatment journey
                </h3>
                <blockquote
                  style={{
                    fontFamily: "var(--font-base)",
                    fontSize: "15px",
                    color: "#0f616e",
                    lineHeight: 1.65,
                    margin: "0 0 12px",
                    borderLeft: "3px solid #1AA3B5",
                    paddingLeft: "0.9rem",
                  }}
                >
                  "Understanding each step gave me confidence — I reached remission within a year."
                </blockquote>
                <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                  Most people with inflammatory arthritis reach low disease activity or remission within 12–18 months of starting treatment.
                </p>
              </div>
            </div>

            {/* Right — title + accordion */}
            <div>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "1.5rem" }}
              >
                Getting started with treatment
              </h2>
              <Accordion steps={journeySteps} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — TREATMENT BY CONDITION ═══ */}
      <section id="by-condition" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <p
              style={{ fontFamily: "var(--font-base)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem" }}
            >
              Quick Reference
            </p>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "0.75rem" }}
            >
              Treatment by condition
            </h2>
            <p style={{ fontFamily: "var(--font-base)", fontSize: "1rem", color: "#5E5E5E", lineHeight: 1.75, textAlign: "center", maxWidth: "520px", marginLeft: "auto", marginRight: "auto" }}>
              Find your condition and see what is typically recommended first — and what comes next.
            </p>
          </div>

          {/* Condition table */}
          <div

            className="overflow-x-auto"
            style={{}}
          >
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#0f616e" }}>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)", borderRadius: "6px 0 0 0" }}>Condition</th>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)" }}>First treatment</th>
                  <th className="text-[11px] font-bold tracking-[0.08em] uppercase text-left" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-base)" }}>If that is not enough</th>
                  <th style={{ padding: "16px 20px", borderRadius: "0 6px 0 0", width: "50px" }}></th>
                </tr>
              </thead>
              <tbody>
                {conditionRows.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-white cursor-pointer"
                    style={{ transition: "background 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.querySelectorAll("td").forEach(td => td.style.backgroundColor = "#f0f7f8") }}
                    onMouseLeave={(e) => { e.currentTarget.querySelectorAll("td").forEach(td => td.style.backgroundColor = "") }}
                  >
                    <td style={{
                      padding: "14px 20px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: "#0f616e",
                      fontSize: "15px",
                      borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none",
                      borderRadius: i === conditionRows.length - 1 ? "0 0 0 6px" : undefined,
                    }}>
                      {row.name}{" "}
                      <span
                        className="text-[10px] font-bold tracking-wide uppercase inline-block align-middle"
                        style={{ padding: "2px 8px", borderRadius: "4px", marginLeft: "6px", color: row.tagColor, backgroundColor: row.tagBg, fontFamily: "var(--font-base)" }}
                      >
                        {row.tag}
                      </span>
                    </td>
                    <td className="text-sm text-navy-muted" style={{ padding: "14px 20px", fontFamily: "var(--font-base)", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                      {row.first}
                    </td>
                    <td className="text-sm text-navy-muted" style={{ padding: "14px 20px", fontFamily: "var(--font-base)", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                      {row.next}
                    </td>
                    <td style={{ padding: "14px 20px", textAlign: "center", borderBottom: i < conditionRows.length - 1 ? "1px solid #e0e0e0" : "none", borderRadius: i === conditionRows.length - 1 ? "0 0 6px 0" : undefined }}>
                      <svg className="w-4 h-4 text-primary inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="pb-20 md:pb-28 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center"
            style={{
              backgroundColor: "#0f616e",
              borderRadius: "10px",
              padding: "4rem 4.5rem",
              gap: "3rem",
            }}
          >
            <div>
              <h2
                className="text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, marginBottom: "0.6rem", color: "#ffffff" }}
              >
                Ready to start your<br />
                <span style={{ color: "#ffffff" }}>treatment journey?</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-lg" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,0.5)" }}>
                Our rheumatologists will assess your condition, explain your options clearly, and create a plan tailored to you. Early treatment leads to better outcomes.
              </p>
            </div>
            <div className="flex flex-col items-center flex-shrink-0" style={{ gap: "0.5rem" }}>
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-[15px] text-white whitespace-nowrap transition-all hover:opacity-90"
                style={{ backgroundColor: "#1AA3B5", padding: "14px 28px", textDecoration: "none" }}
              >
                Book a consultation
              </a>
              <span className="text-[11px]" style={{ fontFamily: "var(--font-base)", color: "rgba(255,255,255,0.3)" }}>
                Most patients seen within 2 weeks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <div className="bg-white">
        <Newsletter />
      </div>

      <BriefingFooter />
    </div>
  )
}

export default TreatmentGuides
