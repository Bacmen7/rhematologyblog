import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import specialists from "../data/specialists"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const tocSections = [
  { id: "symptoms", label: "RA symptoms" },
  { id: "causes", label: "RA causes" },
  { id: "risk-factors", label: "Risk factors" },
  { id: "complications", label: "Complications" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "faq", label: "FAQs" },
]

const symptoms = [
  "Joint pain, tenderness, and swelling — typically in small joints of the hands and feet first",
  "Morning stiffness lasting more than 30 minutes (often 1–2 hours)",
  "Symmetric joint involvement — both sides of the body affected equally",
  "Fatigue, low-grade fever, and general malaise",
  "Firm lumps (rheumatoid nodules) under the skin near affected joints",
  "Gradual loss of joint range of motion and grip strength",
  "Warm, red, or puffy joints during active flares",
  "Numbness or tingling in the hands (carpal tunnel from wrist inflammation)",
]

const causes = [
  { title: "Autoimmune dysfunction", desc: "In RA, the immune system mistakenly attacks the synovium — the lining of the membranes that surround your joints. This causes inflammation that thickens the synovium, eventually destroying cartilage and bone within the joint." },
  { title: "Genetic predisposition", desc: "The HLA-DR4 gene and other HLA class II molecules are strongly associated with RA susceptibility. Having a first-degree relative with RA increases your risk 3–5 times. However, genetics alone don't cause RA — environmental triggers are needed." },
  { title: "Environmental triggers", desc: "Cigarette smoking is the strongest environmental risk factor, particularly in people with genetic susceptibility. Certain infections, hormonal changes, and exposure to silica dust or textile dust have also been implicated as triggers." },
]

const riskFactors = [
  { factor: "Sex", detail: "Women are 2–3 times more likely to develop RA than men. Hormonal factors, particularly estrogen fluctuations, may play a role." },
  { factor: "Age", detail: "RA can begin at any age, but onset most commonly occurs between ages 40 and 60. Elderly-onset RA (after 60) tends to affect larger joints." },
  { factor: "Smoking", detail: "Cigarette smoking increases RA risk by 40% in women and 80% in men. Smoking also makes RA harder to treat and more likely to cause joint damage." },
  { factor: "Obesity", detail: "Excess body weight increases RA risk and can reduce the effectiveness of treatment. Adipose tissue produces inflammatory cytokines that worsen joint inflammation." },
  { factor: "Family history", detail: "Having a parent or sibling with RA significantly increases your risk. The genetic component accounts for approximately 50–60% of RA susceptibility." },
]

const complications = [
  { title: "Joint destruction & deformity", desc: "Untreated RA progressively erodes cartilage and bone, leading to irreversible joint deformities — particularly swan-neck and boutonnière deformities in the fingers." },
  { title: "Cardiovascular disease", desc: "RA doubles the risk of heart attack and stroke. Chronic systemic inflammation accelerates atherosclerosis, making cardiovascular disease the leading cause of death in RA patients." },
  { title: "Lung complications", desc: "Interstitial lung disease, pleural effusion, and rheumatoid nodules in the lungs affect up to 10% of RA patients. Some RA medications can also cause lung toxicity." },
  { title: "Osteoporosis", desc: "Both RA itself and corticosteroid treatment increase bone loss. RA patients have a 2x higher risk of fractures compared to the general population." },
  { title: "Infections", desc: "RA and its immunosuppressive treatments increase susceptibility to infections. Patients should stay current on vaccinations and report any signs of infection promptly." },
]

const diagnosisSteps = [
  "Physical examination of joints for swelling, warmth, tenderness, and range of motion",
  "Blood tests: Rheumatoid Factor (RF), Anti-CCP antibodies, ESR, and CRP levels",
  "Imaging: X-rays to check for joint erosion; ultrasound or MRI for early inflammation",
  "Assessment against the 2010 ACR/EULAR classification criteria (score ≥ 6/10)",
  "Ruling out other conditions: gout, psoriatic arthritis, osteoarthritis, lupus",
]

const treatmentSteps = [
  {
    number: 1,
    title: "Prescribing or co-managing your medication",
    desc: "Your rheumatologist will evaluate your disease activity and prescribe a treatment plan tailored to your specific needs. The goal is to achieve remission or low disease activity as quickly as possible — ideally within the first 12 weeks (the \"window of opportunity\").",
    details: [
      "DMARDs like methotrexate as first-line therapy",
      "Biologics (TNF inhibitors, IL-6 blockers) for moderate-to-severe RA",
      "JAK inhibitors as an oral alternative to biologics",
      "Short-term corticosteroids to bridge while DMARDs take effect",
    ],
  },
  {
    number: 2,
    title: "Identifying triggers & reducing flare frequency",
    desc: "Understanding what triggers your RA flares is critical for long-term management. Common triggers include stress, infections, weather changes, overexertion, and certain foods.",
    details: [
      "Personal trigger identification and tracking",
      "Stress management techniques and activity pacing",
      "Sleep optimization strategies",
      "Flare action plan development",
    ],
  },
  {
    number: 3,
    title: "Working on the exercise connection",
    desc: "Regular physical activity is one of the most effective non-drug therapies for RA. A tailored exercise program can reduce pain, improve joint function, and combat fatigue.",
    details: [
      "Range-of-motion exercises for flexibility",
      "Strengthening exercises for supporting muscles",
      "Low-impact aerobics (swimming, cycling, walking)",
      "Program adapted around active inflammation",
    ],
  },
  {
    number: 4,
    title: "Whole-person care for rheumatoid arthritis",
    desc: "RA affects far more than your joints. Our integrated approach addresses the full spectrum of disease impact — from cardiovascular risk to mental health.",
    details: [
      "Cardiovascular risk monitoring and bone density screening",
      "Mental health support and counseling",
      "Nutritional guidance and anti-inflammatory diet",
      "Coordination with primary care and other specialists",
    ],
  },
]

const stats = [
  { value: "92", suffix: "%", desc: "of patients report meaningful improvement within 3 months of starting treatment with RheumaInsights" },
  { value: "88", suffix: "%", desc: "of undiagnosed patients receive a clear diagnosis within their first 3 appointments" },
  { value: "87", suffix: "%", desc: "reduction in RA flare frequency reported by patients in our care management program" },
]

const faqs = [
  { q: "What is the difference between RA and osteoarthritis?", a: "Rheumatoid arthritis is an autoimmune disease where the immune system attacks joint linings, causing inflammation. Osteoarthritis is a degenerative \"wear and tear\" condition where cartilage breaks down over time. RA typically affects joints symmetrically (both hands), causes prolonged morning stiffness (>30 min), and can involve systemic symptoms like fatigue and fever. OA usually affects weight-bearing joints asymmetrically with brief stiffness (<15 min)." },
  { q: "Can rheumatoid arthritis be cured?", a: "There is currently no cure for RA, but modern treatments can effectively control the disease. With early, aggressive treatment, up to 50–60% of patients achieve clinical remission — meaning minimal symptoms, normal blood markers, and no ongoing joint damage. The goal is to reach remission or low disease activity as quickly as possible to prevent irreversible joint destruction." },
  { q: "How is RA diagnosed?", a: "RA diagnosis involves a combination of physical examination, blood tests (Rheumatoid Factor, Anti-CCP antibodies, ESR, CRP), and imaging (X-rays, ultrasound, or MRI). The 2010 ACR/EULAR criteria use a scoring system based on joint involvement, serology, acute-phase reactants, and symptom duration. A score of 6 or more out of 10 confirms RA classification." },
  { q: "What are the best treatments for RA?", a: "First-line treatment is typically methotrexate, a DMARD that slows disease progression. If methotrexate alone isn't sufficient, your rheumatologist may add or switch to biologics (TNF inhibitors like adalimumab, IL-6 blockers like tocilizumab) or JAK inhibitors (tofacitinib, upadacitinib). Treatment is personalized based on disease severity, comorbidities, and patient preferences." },
  { q: "What lifestyle changes help manage RA?", a: "Evidence supports: regular low-impact exercise (150 min/week), an anti-inflammatory Mediterranean diet, adequate sleep (7–9 hours), stress management, smoking cessation, maintaining a healthy weight, and joint protection techniques. These lifestyle modifications complement medical treatment and can significantly reduce symptoms and flare frequency." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function ArthritisGuide() {
  const [activeSection, setActiveSection] = useState("")
  const [openFaq, setOpenFaq] = useState(null)

  /* ── Scroll-spy for TOC highlight ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    )
    const sections = document.querySelectorAll("[data-toc-section]")
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])


  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-white text-navy-deep antialiased">
      <Header />
      <main>

        {/* ═══════════ DARK HERO + WAVE ═══════════ */}
        <div className="custom-approach-section relative">
          {/* Dark bg */}
          <div className="bg-navy-deep relative z-0">
            <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-20">
              <div className="max-w-[620px]">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-5"
                  style={{ backgroundColor: "#92d9d5", color: "#182439" }}
                >
                  Rheuma&apos;s Approach
                </span>

                <h1
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)",
                    fontWeight: 400,
                    lineHeight: 1.06,
                    letterSpacing: "-1.2px",
                    color: "#ffffff",
                  }}
                >
                  Rheumatoid Arthritis
                </h1>

                <Link
                  to="/health-guide"
                  className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-white/80 hover:text-white transition-colors"
                >
                  All Conditions
                  <span className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Wave */}
          <svg
            className="w-full block relative z-0"
            style={{ height: "clamp(40px, 6vw, 90px)", marginTop: "-1px" }}
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path d="M0 0H1440V40C1200 110 960 120 720 80C480 40 240 0 0 60V0Z" fill="#182439" />
          </svg>

          {/* TOC Card — overlaps hero into white, sharp corners, compact */}
          <aside
            className="hidden lg:block absolute z-10"
            style={{ width: "380px", right: "max(24px, calc((100% - 1280px) / 2 + 24px))", top: "100px" }}
          >
            <div className="bg-[#edf2fc] py-5 px-8 shadow-[0_4px_30px_rgba(24,36,57,0.08)]" style={{ borderRadius: 0 }}>
              <h3
                className="text-navy-deep mb-3"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px" }}
              >
                Table of Contents
              </h3>
              <nav className="flex flex-col">
                {tocSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="text-left py-2 transition-colors border-b border-navy-deep/8 last:border-0"
                  >
                    <span
                      className={`text-[14px] ${
                        activeSection === s.id
                          ? "text-navy-deep font-semibold"
                          : "text-navy-deep/70 hover:text-navy-deep"
                      }`}
                      style={{ textDecoration: "underline", textDecorationColor: "currentColor", textUnderlineOffset: "4px", textDecorationThickness: "1px" }}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* ═══════════ ARTICLE BODY ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="flex gap-12 lg:gap-20">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0 max-w-[760px]">

                {/* Author line */}
                <div className="flex items-center gap-3 mb-10">
                  <img
                    src="/raghav.png"
                    alt="Dr. Raghavendra H"
                    className="w-10 h-10 rounded-full object-cover object-top bg-[#f0cfc4]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-navy-deep leading-tight">Dr. Raghavendra H</p>
                    <p className="text-xs text-navy-muted">Rheumatologist &middot; Reviewed Mar 2026</p>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    {["link", "mail", "share"].map((icon) => (
                      <button
                        key={icon}
                        className="w-8 h-8 rounded-full bg-ghost flex items-center justify-center text-navy-muted hover:text-navy-deep hover:bg-sky-faint transition-colors"
                      >
                        <span className="material-symbols-outlined text-[16px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Intro */}
                <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                  Rheumatoid arthritis (RA) is a{" "}
                  <strong className="font-semibold" style={{ color: "#182439", background: "#feccbc", padding: "2px 6px", borderRadius: "3px" }}>
                    chronic autoimmune disease
                  </strong>{" "}
                  that primarily affects the joints. Unlike osteoarthritis, which results from mechanical wear and tear, RA occurs when the immune system mistakenly attacks the body&apos;s own tissues — specifically the synovium, the lining of the membranes surrounding the joints.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                  This persistent inflammation can eventually lead to bone erosion and joint deformity. RA affects approximately 1.3 million Americans and is 2–3 times more common in women than men. Early diagnosis and aggressive treatment are critical — the first 12 weeks after symptom onset represent a crucial &ldquo;window of opportunity&rdquo; for preventing irreversible joint damage.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-14">
                  Read on to learn about RA symptoms, causes, risk factors, diagnostic approaches, and the latest treatment options available — including biologics, JAK inhibitors, and lifestyle strategies that can help you achieve remission.
                </p>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section className="mb-16">
                  <h2
                    className="text-navy-deep mb-6"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
                  >
                    Rheumatoid arthritis symptoms
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    RA symptoms typically develop gradually over weeks to months. Early symptoms often involve smaller joints — particularly the fingers and toes — before progressing to larger joints. The hallmark of RA is{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>symmetric inflammation</strong>: if the knuckles of your left hand are affected, the same knuckles on your right hand usually are too.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Read more about this in our blog:{" "}
                    <Link to="/blog" className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      Understanding your Blood Work: RF and Anti-CCP
                    </Link>.
                  </p>
                </div>

                {/* ── CAUSES ── */}
                <div id="causes" data-toc-section className="mb-16">
                  <h2
                    className="text-navy-deep mb-6"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
                  >
                    Rheumatoid arthritis causes
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    The exact cause of RA isn&apos;t fully understood, but researchers believe it results from a combination of{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>genetic susceptibility</strong>{" "}
                    and environmental triggers that activate the autoimmune response.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {causes.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{c.title}.</strong> {c.desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── RISK FACTORS ── */}
                <div id="risk-factors" data-toc-section className="mb-16">
                  <h2
                    className="text-navy-deep mb-6"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
                  >
                    Rheumatoid arthritis risk factors
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Several factors can{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>increase your risk</strong>{" "}
                    of developing rheumatoid arthritis. While some cannot be changed, others — like smoking and weight — are modifiable.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{r.factor}.</strong> {r.detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Having RA may also{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>increase your risk</strong>{" "}
                    of developing cardiovascular disease — the risk is higher with untreated RA.
                  </p>
                </div>

                {/* ── COMPLICATIONS ── */}
                <div id="complications" data-toc-section className="mb-16">
                  <h2
                    className="text-navy-deep mb-6"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
                  >
                    Rheumatoid arthritis complications
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    RA is a systemic disease — it doesn&apos;t just affect your joints. Chronic inflammation can damage organs and increase risk for several serious conditions.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {complications.map((c, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{c.title}.</strong> {c.desc}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    Read more about this link in our blog:{" "}
                    <Link to="/blog" className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      How RA affects your cardiovascular health
                    </Link>.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-bold">
                    Curious about your treatment options?{" "}
                    <a href="#treatment" className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      Connect with a Rheuma rheumatologist to find out which treatment plan is right for you
                    </a>.
                  </p>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section className="mb-6">
                  <h2
                    className="text-navy-deep mb-6"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
                  >
                    Rheumatoid arthritis diagnosis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    There is no single test that confirms RA. Diagnosis is based on a combination of clinical examination, laboratory tests, and imaging studies. Early diagnosis is critical — joint damage can begin within the first few months of disease onset.
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {diagnosisSteps.map((step, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* ── Right: empty spacer for layout ── */}
              <div className="hidden lg:block w-[300px] shrink-0" />

            </div>
          </div>
        </section>

        {/* ═══════════ STICKY CTA SIDEBAR (fixed, right side) ═══════════ */}
        <div
          className="hidden lg:block fixed z-30"
          style={{ top: "50%", right: "max(24px, calc((100% - 1280px) / 2 + 24px))", width: "280px", transform: "translateY(-50%)" }}
        >
          <div className="bg-white p-7 border border-border" style={{ borderRadius: 0 }}>
            <div className="w-11 h-11 rounded-full bg-sky-faint flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-[20px] text-navy-deep">health_and_safety</span>
            </div>

            <h4
              className="text-navy-deep mb-3"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px" }}
            >
              You don&apos;t have to live with the discomfort of RA
            </h4>

            <p className="text-[13px] text-navy-muted leading-relaxed mb-5">
              Get started on your path to symptom relief in 3 minutes or less — and get seen by a rheumatologist within days.
            </p>

            <a
              href="#"
              className="block w-full text-center rounded-full font-semibold text-[14px] py-3.5 transition-all hover:opacity-90"
              style={{ backgroundColor: "#92d9d5", color: "#182439" }}
            >
              Book Your First Visit
            </a>
          </div>
        </div>

        {/* ═══════════ TREATMENT SECTION ═══════════ */}
        <section id="treatment" data-toc-section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="text-navy-deep mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}
            >
              Rheumatoid arthritis{" "}
              <span className="relative inline-block">
                treatment
                <svg className="absolute -bottom-1 left-0 w-full h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                  <path d="M2 10C80 4 200 2 398 6" stroke="#8ebfff" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </span>
            </h2>
            <div className="h-px bg-border mt-4 mb-10 md:mb-14" />

            <p className="text-[17px] leading-[1.8] text-navy-deep max-w-[760px] mb-12 md:mb-14">
              We take a comprehensive approach to RA treatment by bringing together a multidisciplinary care team. Here&apos;s a sample of what whole-person care looks like — and how Rheuma&apos;s providers work together to support better outcomes for you.
            </p>

            {/* ── Care Team Card ── */}
            <div className="max-w-[760px] border border-border overflow-hidden mb-14 md:mb-18" style={{ borderRadius: 0 }}>
              <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                {/* Left — Doctor photo */}
                <div className="bg-[#f0cfc4] relative">
                  <img
                    src="/images/hero-doctor.jpg"
                    alt="Rheuma specialist consulting with patient"
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "360px" }}
                  />
                </div>

                {/* Right — Care team roles */}
                <div className="p-7 md:p-10">
                  <h3
                    className="text-navy-deep mb-8"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.2px" }}
                  >
                    Rheuma&apos;s care for RA
                  </h3>

                  {/* Doctor 1 — Rheumatologist */}
                  <div className="flex items-start gap-4 mb-7">
                    <img src="/raghav.png" alt="Dr. Raghavendra H" className="w-12 h-12 rounded-full object-cover object-top bg-[#f0cfc4] shrink-0" />
                    <div>
                      <p className="text-[14px] text-navy-deep mb-1">
                        <strong className="font-bold" style={{ color: "#92d9d5" }}>Rheumatologist:</strong>{" "}
                        Created a personalized treatment plan with disease-modifying therapy, along with a prescription for flare management.
                      </p>
                    </div>
                  </div>

                  {/* Doctor 2 — Pain Management */}
                  <div className="flex items-start gap-4 mb-7">
                    <img src="/d1.png" alt="Pain specialist" className="w-12 h-12 rounded-full object-cover object-top bg-[#dce7f7] shrink-0" />
                    <div>
                      <p className="text-[14px] text-navy-deep mb-1">
                        <strong className="font-bold" style={{ color: "#92d9d5" }}>Pain Management Specialist:</strong>{" "}
                        Began targeted pain relief therapy and recommended joint protection techniques and ergonomic adjustments.
                      </p>
                    </div>
                  </div>

                  {/* Doctor 3 — Physical Therapist */}
                  <div className="flex items-start gap-4">
                    <img src="/d2.png" alt="Physical therapist" className="w-12 h-12 rounded-full object-cover object-top bg-[#e3efff] shrink-0" />
                    <div>
                      <p className="text-[14px] text-navy-deep mb-1">
                        <strong className="font-bold" style={{ color: "#92d9d5" }}>Physical Therapist:</strong>{" "}
                        Introduced low-impact exercise programs and guided range-of-motion routines to maintain joint mobility and strength.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-navy-deep max-w-[760px] mb-12">
              Here&apos;s how our providers work together to put you on a path to better{" "}
              <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#92d9d5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>rheumatic health</strong>.
            </p>

            {/* ── Numbered Treatment Steps ── */}
            <div className="space-y-14 md:space-y-16 max-w-[760px]">
              {treatmentSteps.map((step) => (
                <div key={step.number}>
                  <h3
                    className="text-navy-deep mb-5"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.2px" }}
                  >
                    {step.number}. {step.title}
                  </h3>

                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">{step.desc}</p>

                  <ul className="space-y-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {step.details.map((d, j) => (
                      <li key={j} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ STATS BAR ═══════════ */}
        <section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <p
                    className="leading-none mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 6vw, 72px)",
                      fontWeight: 400,
                      color: "var(--color-navy-deep)",
                    }}
                  >
                    {s.value}<span className="text-primary">{s.suffix}</span>
                  </p>
                  <p className="text-[16px] leading-[1.7] text-navy-muted max-w-[300px] mx-auto">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="w-[32px] h-[32px] rounded-full bg-[#fdd3bc] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-[12px]" fill="#192333">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
              <p className="text-[11px] text-navy-muted">
                Source: RheumaInsights clinical outcomes data, 2024–2026. Results may vary.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-24 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <h2
              className="text-navy-deep mb-10"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px" }}
            >
              Frequently asked questions
            </h2>
            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[16px] font-semibold text-navy-deep pr-6 leading-snug">{faq.q}</span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${openFaq === i ? "rotate-45 bg-primary/20" : "bg-white"}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#182439" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? "400px" : "0px", opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p className="text-[16px] text-navy-muted leading-[1.75] pb-6">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ CTA BANNER WITH WAVE ═══════════ */}
        <section className="w-full flex flex-col bg-ghost overflow-visible">
          <div style={{ height: "60px", backgroundColor: "#f0f4fb" }} />
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
                    className="leading-[1.1] font-normal mb-10 md:mb-14 text-center md:text-left"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 5.5vw, 68px)",
                      letterSpacing: "-0.5px",
                      color: "#ffffff",
                    }}
                  >
                    Ready to get started?
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6">
                    <a
                      href="#"
                      className="inline-block rounded-full font-semibold text-[15px] transition-all hover:opacity-90 text-center"
                      style={{ backgroundColor: "#92d9d5", color: "#182439", padding: "16px 32px" }}
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

        {/* ═══════════ NEWSLETTER ═══════════ */}
        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default ArthritisGuide
