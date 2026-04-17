import { useEffect } from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import GoutNewsletter from "../components/GoutNewsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const symptoms = [
  "Joint pain, swelling, and warmth, especially in the hands, wrists, and feet",
  "Morning stiffness that lasts longer than 30 to 60 minutes",
  "The same joints on both sides of the body getting affected together",
  "Tiredness, weakness, or low-grade fever along with joint symptoms",
]


const riskFactors = [
  { factor: "Family History", detail: "Your risk is higher if rheumatoid arthritis or other autoimmune diseases run in your family." },
  { factor: "Sex", detail: "Women are affected more often than men." },
  { factor: "Smoking", detail: "Smoking doubles the risk of RA." },
  { factor: "Obesity", detail: "Excess body weight can increase inflammation and may raise the risk of RA." },
  { factor: "Post-infections", detail: "Some infections may trigger joint symptoms in people who are already vulnerable." },
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
  { title: "NSAIDs and Corticosteroids", desc: "These help with pain, stiffness, and swelling in the short term, but they do not stop long-term joint damage." },
  { title: "DMARDs", desc: "These are the main medicines used to control RA. Methotrexate is the most common, while hydroxychloroquine, sulfasalazine, and leflunomide are also used." },
  { title: "Biologic DMARDs", desc: "These are advanced medicines used when regular DMARDs are not enough. Examples include TNF inhibitors, IL-6 inhibitors, and rituximab." },
  { title: "JAK Inhibitors", desc: "These are targeted tablets that may be used when other advanced treatments are not working well enough." },
]

const nonMedApproaches = [
  { title: "Physiotherapy", desc: "Helps improve movement, flexibility, and muscle support around painful joints." },
  { title: "Occupational Therapy", desc: "Teaches joint-protection techniques for work, home, and daily tasks." },
  { title: "Personalised Yoga", desc: "May help some people with stiffness, fatigue, and general wellbeing." },
  { title: "Smoking Cessation", desc: "Stopping smoking improves treatment response and lowers ongoing inflammation." },
  { title: "Heat and Cold Therapy", desc: "Can reduce stiffness, soothe pain, and calm sudden swelling." },
]

const faqs = [
  { q: "Is Rheumatoid arthritis curable?", a: "Rheumatoid arthritis is not completely curable, but it can be effectively controlled. With early diagnosis and the right treatment, many people can reduce symptoms, prevent joint damage, and live a normal, active life." },
  { q: "What is the difference between Rheumatoid arthritis and normal arthritis?", a: "Rheumatoid arthritis is the attack of the body's own immune system. It is an autoimmune condition that affects both sides. Osteoarthritis is also called normal arthritis, which affects only one side. It is caused by excessive wear." },
  { q: "Does Rheumatoid arthritis only affect elderly people?", a: "No, Rheumatoid arthritis does not affect only elderly people. It can occur at any age, but it is most commonly seen in people between 30 and 60 years. It is also more common in women than in men." },
  { q: "Can I take Ayurvedic medicine with my Rheumatoid arthritis treatment?", a: "Yes, some Ayurvedic treatments may be used alongside standard Rheumatoid arthritis medications, but only under medical guidance. Always consult your rheumatologist before starting any Ayurvedic medicine, as some combinations may cause interactions." },
  { q: "How much does Rheumatoid arthritis treatment cost in India?", a: "Rheumatoid arthritis treatment costs in India vary widely, from around \u20B9500-\u20B92,000 per consultation to \u20B910,000-\u20B930,000 or more for advanced therapies.\nMany government schemes and insurance plans may help reduce the cost - talk to your doctor about available options." },
]

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function ArthritisGuide() {
  useEffect(() => {
    document.title = "Understanding Rheumatoid Arthritis | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
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

        {/* ═══════════ HERO (Gout-style) ═══════════ */}
        <header>
          <div style={{ backgroundColor: "#0f616e" }} className="text-white">
            <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] pt-20 pb-12 flex flex-col items-start">
              <span
                className="inline-block"
                style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "24px" }}
              >
                Complete Patient Guide
              </span>

              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 6vw, 64px)",
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                }}
              >
                Understanding Rheumatoid Arthritis
              </h1>

              <div className="flex -space-x-2" style={{ marginBottom: "14px" }}>
                <img src="/raghav.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
                <img src="/d1.png" alt="" className="w-10 h-10 rounded-full object-cover object-top border-2 bg-[#e0f3f5]" style={{ borderColor: "rgba(255,255,255,.15)" }} />
              </div>

              <div style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "#ffffff" }}>
                  Written by <strong className="font-bold underline underline-offset-2 decoration-1">Dr. Raghavendra H</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.5)" }}>
                  Medically reviewed by <strong className="font-bold underline underline-offset-2 decoration-1" style={{ color: "#ffffff" }}>Dr. Raghavendra H</strong>
                </span>
                <span style={{ fontSize: "13px", lineHeight: "20px", fontWeight: 400, color: "rgba(255,255,255,.45)" }}>
                  Published: March 2026
                </span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#0a4f5a" }} className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 md:pl-[2%] md:pr-[8%] py-6 flex justify-start gap-5 overflow-x-auto">
              {[
                { label: "Symptoms &\nCauses", id: "symptoms" },
                { label: "Diagnosis &\nTreatment", id: "diagnosis" },
                { label: "Management", id: "managing-ra" },
              ].map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`inline-block rounded-full px-5 py-2.5 text-[13px] font-medium leading-tight text-left whitespace-nowrap transition-colors cursor-pointer ${
                    i === 0
                      ? "bg-white text-navy-deep"
                      : "bg-white/[0.12] text-white hover:bg-white/20"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

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
                  Rheumatoid arthritis can start quietly with joint pain, swelling, stiffness, and unusual tiredness. Many people ignore these early symptoms and assume it is just overuse, ageing, or temporary pain.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted" style={{ marginBottom: "1.25rem" }}>
                  Rheumatoid arthritis is a long-term autoimmune condition. That means the immune system attacks healthy joints by mistake, causing inflammation, pain, swelling, and joint damage if treatment is delayed.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-5">
                  It is more common in women, but it can affect adults of any age. The earlier RA is recognised, the better the chance of controlling symptoms and protecting the joints.
                </p>
                <p className="text-[16px] leading-[1.8] text-navy-muted mb-10">
                  This guide explains what rheumatoid arthritis is, its common symptoms, likely causes, how doctors diagnose it, and which treatment options are usually recommended.
                </p>

                {/* ── WHAT IS RA ── */}
                <div id="what-is-ra" style={{ marginBottom: "3.5rem", marginTop: "2.5rem" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What is Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis, or RA, is an autoimmune disease that mainly affects the joints. It causes the lining of the joints to become inflamed, which leads to pain, swelling, and stiffness.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    RA often affects the same joints on both sides of the body, such as both wrists, both hands, or both feet. In some people, it can also affect the eyes, lungs, skin, heart, or blood vessels.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep">
                    RA is different from osteoarthritis. Osteoarthritis is mostly a wear-and-tear condition, while RA is driven by the immune system and often causes tiredness and prolonged morning stiffness as well.
                  </p>
                </div>

                {/* ── SYMPTOMS ── */}
                <div id="symptoms" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
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
                    <strong className="font-bold">flares</strong>, while times when you feel better are known as{" "}
                    <strong className="font-bold">remission</strong>. Early diagnosis plays an important role in preventing permanent joint damage.
                  </p>
                </div>

                {/* ── MANAGEMENT ── */}
                <div id="stages" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Management of Rheumatoid Arthritis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    Good RA care starts early and stays consistent. The goal is to control inflammation quickly, reduce pain, and prevent permanent damage to the joints.
                  </p>

                  {/* Note */}
                  <div className="flex items-start gap-3 p-4" style={{ backgroundColor: "#fff3ec", borderRadius: "10px" }}>
                    <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5" style={{ color: "#fd956a" }}>info</span>
                    <p className="text-[14px] leading-[1.65] text-navy-deep">
                      <strong className="font-semibold">Note:</strong> Early treatment gives the best chance of avoiding long-term joint damage and disability.
                    </p>
                  </div>
                </div>

                {/* ── CAUSES & RISK FACTORS ── */}
                <div id="causes" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What are the causes of Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-5">
                    Doctors do not know one single cause of rheumatoid arthritis. It is thought to happen because of a mix of{" "}
                    <strong className="font-bold">genetics, immune system changes, hormones, and environmental triggers</strong>.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-8">
                    Your immune system normally protects you from infection. In RA, it starts attacking your own joints instead. Smoking, infections, and other triggers may increase the chance of this happening.
                  </p>

                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}
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
                <div id="diagnosis" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    How does a doctor diagnose Rheumatoid Arthritis?
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Rheumatoid arthritis is usually diagnosed by a rheumatologist. Diagnosis is based on your symptoms, joint examination, blood tests, and imaging.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.25rem" }}>
                    Your doctor will ask when the pain started, which joints are affected, how long morning stiffness lasts, and whether symptoms are getting worse. They will also check for swelling, tenderness, warmth, and reduced movement in the joints.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    There is no single test that confirms RA on its own. Doctors combine the clinical picture with blood reports and scans to reach the diagnosis.
                  </p>

                  {/* Blood tests + Imaging -two columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Blood Tests */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "1rem" }}>
                        Main blood tests include
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        Common blood tests used while assessing RA include:
                      </p>
                      <ul className="space-y-2" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {diagnosisBloodTests.map((test, i) => (
                          <li key={i} className="text-[17px] leading-[1.75] text-navy-deep pl-1">{test}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Imaging */}
                    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "12px", padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, marginBottom: "1rem" }}>
                        Imaging test
                      </h3>
                      <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "0.75rem" }}>
                        Imaging helps doctors look for joint inflammation, early damage, and disease progression.
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
                <hr style={{ border: "none", borderTop: "1px solid #dadfe8", marginTop: "3rem", marginBottom: "0" }} />
                <div style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: "-0.5px",
                      color: "#0f616e",
                      marginBottom: "2rem",
                    }}
                  >
                    Key factors to consider when managing RA
                  </h2>
                  <p className="text-[16px] leading-[1.8]" style={{ color: "#5e5e5e", marginBottom: "1.75rem" }}>
                    Effective rheumatoid arthritis care works best when a few important pieces come together:
                  </p>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginBottom: "2rem" }}>
                    {[
                      "Early diagnosis before joint damage becomes permanent",
                      "Regular monitoring of symptoms, swelling, and inflammatory markers",
                      "A treatment plan built around disease control, not just short-term pain relief",
                      "Consistent use of medicines along with physiotherapy and daily joint protection",
                      "Lifestyle support, including smoking cessation, weight management, and balanced nutrition",
                      "Follow-up with a rheumatologist so treatment can be adjusted quickly when needed",
                    ].map((item, i) => (
                      <li key={i} style={{ color: "#182439", fontSize: "16px", lineHeight: 1.8, marginBottom: "0.25rem", fontWeight: 500 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[16px] leading-[1.8]" style={{ color: "#5e5e5e" }}>
                    At RheumaCare, our goal is to help patients move toward lower inflammation, fewer flares, better daily function, and long-term joint protection through evidence-based care.
                  </p>
                </div>
                <hr style={{ border: "none", borderTop: "1px solid #dadfe8", marginBottom: "2.5rem" }} />

                <div id="treatment" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    What are the treatment options available for{" "}
                    <span
                      style={{ textDecoration: "underline", textDecorationColor: "#1AA3B5", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}
                    >
                      Rheumatoid Arthritis
                    </span>
                    ?
                  </h2>

                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "1.5rem" }}>
                    The aim of treatment is not only to reduce pain and swelling, but also to stop inflammation from damaging the joints. Most patients need regular follow-up so treatment can be adjusted if symptoms are still active.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2.5rem" }}>
                    Treatment usually includes medicines along with exercise, therapy, and lifestyle changes. Surgery is considered only in advanced cases when joints are badly damaged or function is severely limited.
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
                <div id="managing-ra" style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h2
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.3px", color: "#0f616e", marginBottom: "1.5rem" }}
                  >
                    Managing Rheumatoid Arthritis on a Day-to-Day Basis
                  </h2>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-10">
                    Many people with RA live active and productive lives when treatment is started early and followed regularly. Daily self-care also plays an important role.
                  </p>

                  {/* Diet */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>
                    Importance of Diet and Nutrition
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    There is no single RA diet, but balanced nutrition matters. A diet rich in fruits, vegetables, protein, whole grains, and anti-inflammatory foods may support overall health and energy.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-4">
                    If you are vegetarian, foods like dal, curd, paneer, and soya can help meet protein needs. Weight control and avoiding smoking are also important parts of long-term RA care.
                  </p>

                  {/* Ayurvedic */}
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, color: "#0f616e", marginTop: "2rem", marginBottom: "1rem" }}>
                    Ayurvedic evidence in Rheumatoid Arthritis
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep mb-6">
                    Some people explore Ayurveda or supplements alongside standard treatment. These should never replace DMARDs, and they should only be used after checking with your rheumatologist because interactions and side effects are possible.
                  </p>
                </div>

                {/* ── EARLY RESPONSE ── */}
                <div style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #dadfe8" }}>
                  <h3
                    className="text-navy-deep"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "1rem", textTransform: "uppercase" }}
                  >
                    Early Response is the Key
                  </h3>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginBottom: "2rem" }}>
                    If you notice persistent joint stiffness, swelling on both sides of the body, or unusual fatigue, it is better to see a rheumatologist sooner rather than later.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    The first few months after symptoms begin are especially important. Early treatment can make a major difference to long-term joint health, pain control, and quality of life.
                  </p>
                  <p className="text-[17px] leading-[1.8] text-navy-deep font-semibold" style={{ marginTop: "2rem" }}>
                    If you are living with ongoing joint pain, stiffness, or swelling, do not ignore it. Early evaluation can help prevent long-term damage.
                  </p>
                </div>

                <GoutNewsletter />

                <hr className="border-none border-t border-[#dcdcdc] mt-12" />

              </div>

              {/* ── Right: TOC + CTA Sidebar ── */}
              <div className="hidden lg:block w-[320px] shrink-0">
                <div className="sticky top-[88px]">

                  {/* Table of Contents */}
                  <div className="bg-[#edf2fc] py-5 px-6 mb-6" style={{ borderRadius: 0 }}>
                    <h3
                      className="text-navy-deep mb-3"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2 }}
                    >
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col">
                      {[
                        { id: "what-is-ra", label: "What is RA?" },
                        { id: "symptoms", label: "Symptoms" },
                        { id: "stages", label: "Management" },
                        { id: "causes", label: "Causes & Risk Factors" },
                        { id: "diagnosis", label: "Diagnosis" },
                        { id: "treatment", label: "Treatment" },
                        { id: "managing-ra", label: "Managing RA" },
                        { id: "faq", label: "FAQs" },
                      ].map((s) => (
                        <button
                          key={s.id}
                          onClick={() => scrollToSection(s.id)}
                          className="text-left py-2 border-b border-navy-deep/8 last:border-0"
                        >
                          <span
                            className="text-[13.5px] text-navy-deep/70 hover:text-navy-deep"
                            style={{ textDecoration: "underline", textDecorationColor: "currentColor", textUnderlineOffset: "4px", textDecorationThickness: "1px" }}
                          >
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>

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
        <section id="faq" className="py-16 md:py-20 bg-ghost">
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
                    <div className="text-sm text-navy-muted leading-relaxed flex flex-col gap-3">
                      {faq.a.split("\n").map((line, j) => (
                        <p key={j}>{line}</p>
                      ))}
                    </div>
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
                    className="leading-[1.1] font-normal mb-12 md:mb-16 text-center md:text-left"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(36px, 5.5vw, 68px)",
                      letterSpacing: "-0.5px",
                      color: "#ffffff",
                    }}
                  >
                    Ready to get started?
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-7 md:gap-6">
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
                        className="text-[15px] font-semibold underline underline-offset-[6px] hover:opacity-80 transition-opacity"
                        style={{ color: "#ffffff", textDecorationThickness: "2px" }}
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
