import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const tocSections = [
  { id: "what-is-ra", label: "What is RA?" },
  { id: "symptoms", label: "Symptoms" },
  { id: "stages", label: "Stages of RA" },
  { id: "causes", label: "Causes & Risk Factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "managing-ra", label: "Managing RA" },
  { id: "faq", label: "FAQs" },
]

const symptoms = [
  "Warmth, pain, and swollen joints",
  "Morning stiffness that lasts for more than one hour",
  "Swelling and tenderness in small joints, such as the wrists and toes",
  "Low-grade fever, weakness, and feeling tired",
]

const stages = [
  { stage: "Stage 1", area: "The surrounding layer of the joint gets affected. No damage to bone.", symptoms: "Puffiness, tenderness and morning stiffness of the joint" },
  { stage: "Stage 2", area: "Damage increases and extends to the structure inside called cartilage.", symptoms: "Joint stiffness increases, and as a result, movements will be restricted." },
  { stage: "Stage 3", area: "Bone affected. Visible changes in X-ray.", symptoms: "Pain intensifies within the joints, and notable joint changes happen." },
  { stage: "Stage 4", area: "Irreversible bone damage", symptoms: "Severe restricted movements." },
]

const riskFactors = [
  { factor: "Familial Genetic History", detail: "You have a higher chance of getting affected if Rheumatoid arthritis is present within your close relatives (15% chance)." },
  { factor: "Sex", detail: "Women are affected 3 times more than men." },
  { factor: "Smoking", detail: "Smoking doubles the risk of RA." },
  { factor: "Obesity", detail: "You have a higher chance of Rheumatoid arthritis being affected if you are obese." },
  { factor: "Post-infections", detail: "Infections such as Chikungunya can increase the risk." },
]

const diagnosisBloodTests = [
  "Rheumatoid Factor (RF)",
  "Anti-CCP Antibody (ACPA)",
  "ESR (Erythrocyte Sedimentation Rate)",
]

const diagnosisImaging = [
  "X-rays",
  "Ultrasounds",
  "Magnetic Resonance Imaging (MRI)",
]

const medications = [
  { title: "NSAIDs and Corticosteroids", desc: "They are used to relieve short-term symptoms. But neither of them stops disease progression." },
  { title: "DMARDs", desc: "They alter our body's immune response. Methotrexate is the most common and widely used in India. Hydroxychloroquine, Sulfasalazine, and Leflunomide are the alternative drugs used." },
  { title: "Biologic DMARDs", desc: "When traditional DMARDs fail, their modified forms are used. It includes drugs like TNF inhibitors, IL-6 inhibitors, and Rituximab." },
  { title: "JAK Inhibitors", desc: "They can be used if the biologic DMARDs were found not to work in patients." },
]

const nonMedApproaches = [
  { title: "Physiotherapy", desc: "Helps to improve the movements of the joints" },
  { title: "Occupational Therapy", desc: "Helps to protect joints during daily activities" },
  { title: "Personalised Yoga", desc: "Chance of improvement from fatigue and pain" },
  { title: "Smoking Cessation", desc: "In smoker patients, to achieve a positive response" },
  { title: "Heat and Cold Therapy", desc: "Can provide relief from stiffness and acute swelling" },
]

const faqs = [
  { q: "Is Rheumatoid arthritis curable?", a: "Rheumatoid arthritis is not completely curable, but it can be effectively controlled. With early diagnosis and the right treatment, many people can reduce symptoms, prevent joint damage, and live a normal, active life." },
  { q: "What is the difference between RA and normal arthritis?", a: "RA is the attack of the body's own immune system. It is an autoimmune condition that affects both sides. Osteoarthritis is also called normal arthritis, which affects only one side. It is caused by excessive wear." },
  { q: "Does RA only affect elderly people?", a: "No, rheumatoid arthritis does not affect only elderly people. It can occur at any age, but it is most commonly seen in people between 30 and 60 years. It is also more common in women than in men." },
  { q: "Can I take Ayurvedic medicine with my RA treatment?", a: "Yes, some Ayurvedic treatments may be used alongside standard RA medications, but only under medical guidance. Always consult your rheumatologist before starting any Ayurvedic medicine, as some combinations may cause interactions." },
  { q: "How much does RA treatment cost in India?", a: "RA treatment costs in India vary widely, from around \u20B9500\u2013\u20B92,000 per consultation to \u20B910,000\u2013\u20B930,000 or more for advanced therapies. Many government schemes and insurance plans may help reduce the cost \u2014 talk to your doctor about available options." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function ArthritisGuide() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    document.title = "Understanding Rheumatoid Arthritis | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
  }, [])

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

        {/* ═══════════ DARK HERO + WAVE + TOC OVERLAP ═══════════ */}
        <div className="custom-approach-section relative">
          <div className="bg-navy-deep">
            <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-14 md:pb-20">
              <div className="max-w-[620px]">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-5"
                  style={{ backgroundColor: "#1AA3B5", color: "#1A355D" }}
                >
                  Complete Patient Guide
                </span>
                <h1
                  className="mb-6"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-1.2px", color: "#ffffff" }}
                >
                  Understanding{" "}
                  <span style={{ color: "#a0e2e4" }}>Rheumatoid Arthritis</span>
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
          <svg
            className="w-full block"
            style={{ height: "clamp(40px, 6vw, 90px)", marginTop: "-1px" }}
            preserveAspectRatio="none"
            viewBox="0 0 1440 120"
            fill="none"
          >
            <path d="M0 0H1440V40C1200 110 960 120 720 80C480 40 240 0 0 60V0Z" fill="#0f616e" />
          </svg>

          {/* TOC Card — absolute, overlaps from hero across wave into white */}
          <aside
            className="hidden lg:block absolute z-10"
            style={{ width: "340px", right: "max(24px, calc((100% - 1280px) / 2 + 24px))", top: "60px" }}
          >
            <div className="bg-[#edf2fc] py-6 px-7 shadow-[0_4px_24px_rgba(24,36,57,0.07)]" style={{ borderRadius: 0 }}>
              <h3
                className="text-navy-deep mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.2 }}
              >
                Table of Contents
              </h3>
              <nav className="flex flex-col">
                {tocSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className="text-left py-2.5 border-b border-navy-deep/8 last:border-0"
                  >
                    <span
                      className={`text-[14.5px] ${activeSection === s.id ? "text-navy-deep font-semibold" : "text-navy-deep/70 hover:text-navy-deep"}`}
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

        {/* ═══════════ ARTICLE BODY + CTA SIDEBAR ═══════════ */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
            <div className="lg:flex lg:gap-14">

              {/* ── Left: Article Content ── */}
              <div className="flex-1 min-w-0">

                {/* Author line */}
                <div className="flex items-center gap-3 mb-10">
                  <img src="/raghav.png" alt="Dr. Raghavendra H" className="w-10 h-10 rounded-full object-cover object-top bg-[#f0cfc4]" />
                  <div>
                    <p className="text-sm font-semibold text-navy-deep leading-tight">Dr. Raghavendra H</p>
                    <p className="text-xs text-navy-muted">Rheumatologist &middot; Reviewed Mar 2026</p>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    {["link", "mail", "share"].map((icon) => (
                      <button key={icon} className="w-8 h-8 rounded-full bg-ghost flex items-center justify-center text-navy-muted hover:text-navy-deep hover:bg-sky-faint transition-colors">
                        <span className="material-symbols-outlined text-[16px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Intro */}
                <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                  Have you ever experienced weakness or tiredness in your joints that makes it difficult to perform daily tasks? Do you often normalise these symptoms and ignore them? If you have experienced anything similar, this guide covers everything you need to know.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                  Rheumatoid Arthritis is a{" "}
                  <strong className="font-semibold" style={{ color: "#1A355D", background: "#fa885a", padding: "2px 6px", borderRadius: "3px" }}>
                    long-term health condition
                  </strong>{" "}
                  in which the body&apos;s immune system fights against itself. As a result, you often experience pain, swelling, and, when left untreated, long-lasting damage. The exact cause is unknown.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                  Rheumatoid arthritis is becoming increasingly common in India. It especially affects women between 40 and 60 years old. Many people think of it as regular joint pain and avoid a rheumatologist consultation, which can lead to serious health issues.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-10">
                  With early diagnosis and proper treatment, RA can be controlled effectively. This guide will help you understand all about Rheumatoid arthritis (RA), its various causes, how it presents, how doctors diagnose cases, and the available treatment options.
                </p>

                {/* ── WHAT IS RA ── */}
                <div id="what-is-ra" data-toc-section style={{ marginBottom: "3.5rem", marginTop: "2.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    What is Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Joints are where two bones meet, such as your knuckles, knees, or wrists. Inside each joint is a thin lining called the synovium. The synovium produces fluid that helps your joints move smoothly and stay healthy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    In rheumatoid arthritis (RA), your body becomes confused and starts attacking its own joints rather than protecting them. This is called an autoimmune condition. It often affects joints on both sides of your body, like both hands or both feet at the same time. Rheumatoid arthritis can also affect other parts of your body, like your skin, eyes, lungs, heart, and blood vessels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    Rheumatoid arthritis is different from osteoarthritis, which happens due to wear and tear as people age. Osteoarthritis often affects just one side of the body and does not cause tiredness like RA does.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    What are the symptoms of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    The main symptoms of rheumatoid arthritis (RA) are:
                  </p>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.map((s, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Rheumatoid arthritis symptoms don&apos;t stay the same all the time &mdash; they can come and go. Periods when symptoms get worse are called{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>flares</strong>, while times when you feel better are known as{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>remission</strong>. Early diagnosis plays an important role in preventing permanent joint damage.
                  </p>
                </div>

                {/* ── STAGES ── */}
                <div id="stages" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Stages of Rheumatoid Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Rheumatoid arthritis progresses from mild to severe stages:
                  </p>

                  {/* Stages table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left border-collapse" style={{ minWidth: "540px" }}>
                      <thead>
                        <tr style={{ backgroundColor: "#0f616e" }}>
                          <th className="px-4 py-3 text-[13px] font-bold text-white uppercase tracking-wide" style={{ width: "100px" }}>Stage</th>
                          <th className="px-4 py-3 text-[13px] font-bold text-white uppercase tracking-wide">Area Affected</th>
                          <th className="px-4 py-3 text-[13px] font-bold text-white uppercase tracking-wide">Symptoms</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stages.map((row, i) => (
                          <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f5f5f5" : "#ffffff", borderBottom: "1px solid #e8ecf2" }}>
                            <td className="px-4 py-4 text-[14px] font-semibold text-navy-deep align-top">{row.stage}</td>
                            <td className="px-4 py-4 text-[14px] leading-[1.6] text-navy-muted align-top">{row.area}</td>
                            <td className="px-4 py-4 text-[14px] leading-[1.6] text-navy-muted align-top">{row.symptoms}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Note */}
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5" style={{ color: "#fd956a" }}>info</span>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      <strong className="font-semibold">Note:</strong> Not everyone progresses through all the stages. Early treatment can stop progression.
                    </p>
                  </div>
                </div>

                {/* ── CAUSES & RISK FACTORS ── */}
                <div id="causes" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    What are the causes of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    The exact cause of Rheumatoid arthritis is unknown. Researchers think it&apos;s caused by a combination of{" "}
                    <strong className="font-bold" style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>genetics, hormones, and environmental factors</strong>.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">
                    Your immune system normally protects your body from infections. In rheumatoid arthritis, it gets confused and starts attacking your own joints instead. Certain factors, like smoking or infections, may trigger this response.
                  </p>

                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.25, marginBottom: "1.25rem" }}
                  >
                    Risk Factors of Rheumatoid Arthritis
                  </h3>
                  <ul className="space-y-5 mb-8" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {riskFactors.map((r, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-bold">{r.factor}.</strong> {r.detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── DIAGNOSIS ── */}
                <div id="diagnosis" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    How does a doctor diagnose Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor may refer you to a rheumatologist for the diagnosis of Rheumatoid arthritis. The diagnosis is based on several factors. Your doctor performs a complete physical examination, multiple blood tests, and X-rays to diagnose.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    A detailed history about pain, swelling, the duration it will last, and any other medical history will be taken. The doctor will check your joint movement, colour changes, and for any palpable firm swellings.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    There is no single test that confirms Rheumatoid Arthritis. Rheumatologists recommend blood and imaging tests to reach a final diagnosis.
                  </p>

                  {/* Blood tests + Imaging — two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Blood Tests */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginBottom: "0.75rem" }}>
                        Main blood tests include
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        Rheumatologists usually recommend blood tests such as &ndash;
                      </p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosisBloodTests.map((test, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Imaging */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginBottom: "0.75rem" }}>
                        Imaging test
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        The various imaging techniques help to understand the disease progression (how bad the disease has progressed).
                      </p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosisImaging.map((test, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ── TREATMENT ── */}
                <div id="treatment" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    What are the treatment options available for{" "}
                    <span className="relative inline-block">
                      Rheumatoid Arthritis?
                      <svg className="absolute -bottom-1 left-0 w-full h-[5px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                        <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="3" />
                      </svg>
                    </span>
                  </h2>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The main aim of treatment is to reduce the symptoms. Once treatment begins, you will be evaluated every 3&ndash;6 months to monitor the disease&apos;s progression. If it does not improve, your doctor will increase the medication dosage or implement other methodologies.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    Rheumatologists usually begin the treatment with medications and other non-medicated options. If the disease progression is not improved, surgery would be the last option.
                  </p>

                  {/* Medications */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginBottom: "1rem" }}>
                    Common medications used in Rheumatoid Arthritis
                  </h3>
                  <ul className="space-y-2" style={{ listStyleType: "decimal", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {medications.map((med, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{med.title}:</strong> {med.desc}
                      </li>
                    ))}
                  </ul>

                  {/* Non-Medication */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginBottom: "1rem" }}>
                    Non-Medication Approaches
                  </h3>
                  <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
                    {nonMedApproaches.map((item, i) => (
                      <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">
                        <strong className="font-semibold">{item.title}:</strong> {item.desc}
                      </li>
                    ))}
                  </ul>

                  {/* Surgery */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginBottom: "1rem" }}>
                    Surgery
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1rem" }}>
                    Last resort for severe deformity unresponsive to medication. Surgery does not replace DMARDs.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.5rem" }}>
                    Types of surgeries include: synovectomy, tendon repair, and joint replacement.
                  </p>
                </div>

                {/* ── MANAGING RA ── */}
                <div id="managing-ra" data-toc-section style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.3px", marginBottom: "1.5rem" }}
                  >
                    Managing Rheumatoid Arthritis on a Day-to-Day Basis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">
                    With appropriate treatment and supportive therapy, many people are leading an active life despite the disease having a lifelong predilection.
                  </p>

                  {/* Diet */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.25, color: "#0f616e", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
                    Importance of Diet and Nutrition
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    The diet plays an important role in our daily lives. In Rheumatoid arthritis, it plays a major role in keeping our body healthy, without any nutrient restrictions. Several anti-inflammatory foods, such as turmeric, ginger, black pepper, amla, flax seeds, spinach, and fenugreek, should be incorporated into daily meals.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    Vegetarian options such as dal, paneer, curd, and soya should be incorporated to meet protein requirements.
                  </p>

                  {/* Ayurvedic */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 400, lineHeight: 1.25, color: "#0f616e", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
                    Ayurvedic evidence in Rheumatoid Arthritis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Several ayurvedic products have been studied for their efficacy. Ashwagandha, Shallaki/Boswellia, Turmeric/Curcumin, and Panchakarma are indicated by Ayurveda. These products can be used as an adjunct therapy along with the use of DMARDs. Possible drug interactions were also noticed. Hence, it is safe to proceed with a Rheumatologist&apos;s opinion.
                  </p>
                </div>

                {/* ── EARLY RESPONSE ── */}
                <div style={{ marginBottom: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "1.25rem", textTransform: "uppercase" }}
                  >
                    Early Response is the Key
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    When symptoms like joint stiffness on either side, generalised severe fatigue, and abnormal joint pain occur, it is always better to consult a rheumatologist.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    The initial three-month duration is the window during which the damage is processed. If we take the initiative to treat early, we can make a difference for the rest of our lives.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginTop: "2rem" }}>
                    If you are experiencing persistent joint pain, stiffness, or swelling, don&apos;t ignore it. Early evaluation by a rheumatologist can make a significant difference in preventing long-term damage.
                  </p>
                </div>

              </div>

              {/* ── Right: CTA Sidebar (TOC is in hero above) ── */}
              <div className="hidden lg:block w-[280px] shrink-0">
                <div className="sticky top-[88px]">
                  {/* Spacer so CTA appears below where TOC card ends */}
                  <div style={{ height: "160px" }} />

                  <div className="bg-white p-6 border border-border/50" style={{ borderRadius: 0 }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "#e0f3f5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                      <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "#1A355D" }}>health_and_safety</span>
                    </div>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", fontWeight: 400, lineHeight: 1.3, color: "#1A355D", marginBottom: "12px" }}>
                      Don&apos;t ignore persistent joint pain
                    </h4>
                    <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#3b5b80", marginBottom: "20px" }}>
                      Early evaluation by a rheumatologist can prevent long-term damage. The first 3 months are critical.
                    </p>
                    <a
                      href="#"
                      style={{ display: "block", width: "100%", textAlign: "center", borderRadius: "9999px", fontWeight: 600, fontSize: "14px", padding: "12px 0", backgroundColor: "#1AA3B5", color: "#ffffff", transition: "opacity 0.2s" }}
                    >
                      Book Your First Visit
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════ FAQ ═══════════ */}
        <section id="faq" data-toc-section className="py-16 md:py-20 bg-ghost">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.08] tracking-[-1.2px] text-navy-deep mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group">
                  <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-[15px] font-semibold text-navy-deep pr-4 leading-snug">{faq.q}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-ghost flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="#1A355D" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
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

        {/* ═══════════ CTA BANNER WITH WAVE ═══════════ */}
        <section className="w-full flex flex-col bg-ghost overflow-visible">
          <div style={{ height: "60px", backgroundColor: "#F5F5F5" }} />
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
