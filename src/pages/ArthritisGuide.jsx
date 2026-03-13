import { useRef } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import BriefingFooter from "../components/BriefingFooter"

const overview = {
  title: "Rheumatoid Arthritis (RA)",
  subtitle: "A comprehensive guide to understanding, managing, and living well with RA.",
  description:
    "Rheumatoid arthritis is a chronic autoimmune condition where the immune system mistakenly attacks healthy joint tissue, causing inflammation, pain, and swelling. Early diagnosis and modern treatment can dramatically improve outcomes and quality of life.",
}

const keyFacts = [
  { label: "Affects", value: "1.3M+", detail: "Americans" },
  { label: "Most Common", value: "30–60", detail: "age of onset" },
  { label: "Women are", value: "2–3×", detail: "more likely affected" },
  { label: "Early treatment", value: "85%", detail: "achieve remission" },
]

const symptoms = [
  "Joint pain, swelling, and stiffness — especially in the morning",
  "Fatigue and general feeling of being unwell",
  "Symmetric joint involvement (both hands, both knees)",
  "Warmth and redness around affected joints",
  "Reduced range of motion and joint deformity over time",
  "Low-grade fever and loss of appetite",
]

const treatments = [
  {
    name: "DMARDs",
    description: "Disease-modifying antirheumatic drugs (like methotrexate) slow disease progression and prevent joint damage.",
    tag: "First-Line",
  },
  {
    name: "Biologics",
    description: "Targeted therapies that block specific parts of the immune system driving inflammation.",
    tag: "Advanced",
  },
  {
    name: "JAK Inhibitors",
    description: "Small molecule drugs that interrupt inflammation pathways inside cells.",
    tag: "Newer Option",
  },
  {
    name: "Corticosteroids",
    description: "Provide rapid relief during flares, but are used short-term due to side effects.",
    tag: "Short-Term",
  },
  {
    name: "Physical Therapy",
    description: "Tailored exercise programs to maintain joint flexibility, strengthen muscles, and reduce pain.",
    tag: "Supportive",
  },
  {
    name: "Lifestyle Modifications",
    description: "Anti-inflammatory diet, stress management, adequate sleep, and joint protection techniques.",
    tag: "Daily Care",
  },
]

const articles = [
  {
    id: "understanding-blood-work-rf-anti-ccp",
    title: "Understanding your Blood Work: RF and Anti-CCP",
    image: "/images/lab-test.jpg",
    readTime: "12 min read",
    category: "Diagnostics",
    author: "Dr. Sarah Miller",
    excerpt: "Learn what RF and Anti-CCP blood tests mean for your rheumatoid arthritis diagnosis and treatment plan.",
  },
  {
    id: "gentle-exercises-flaring-joints",
    title: "Gentle Exercises for Flaring Joints",
    image: "/images/exercise.jpg",
    readTime: "8 min read",
    category: "Lifestyle",
    author: "Dr. James Chen",
    excerpt: "Safe, low-impact exercises that can help maintain mobility and reduce pain during RA flares.",
  },
  {
    id: "anti-inflammatory-diet",
    title: "The Anti-Inflammatory Diet: Truths vs Myths",
    image: "/images/diet.jpg",
    readTime: "10 min read",
    category: "Diet & Nutrition",
    author: "Angela Myers",
    excerpt: "Separating fact from fiction when it comes to anti-inflammatory foods and their impact on RA symptoms.",
  },
  {
    id: "biologics-vs-small-molecules-psa",
    title: "Biologics vs Small Molecules for Arthritis",
    image: "/images/medication.jpg",
    readTime: "15 min read",
    category: "Treatment",
    author: "Dr. James Chen",
    excerpt: "Comparing biologic therapies with small molecule drugs to help you understand your treatment options.",
  },
  {
    id: "tips-morning-stiffness-fatigue",
    title: "Tips for Morning Stiffness and Fatigue",
    image: "/images/pain-relief.jpg",
    readTime: "7 min read",
    category: "Lifestyle",
    author: "Angela Myers",
    excerpt: "Practical morning routines and strategies to help ease joint stiffness and combat fatigue.",
  },
]

const faqs = [
  {
    q: "What causes rheumatoid arthritis?",
    a: "RA is an autoimmune disorder where the immune system mistakenly attacks the synovium — the lining of the membranes that surround your joints. The exact cause is unknown, but genetics, environmental factors (like smoking), and hormonal changes all play a role.",
  },
  {
    q: "How is RA different from osteoarthritis?",
    a: "RA is an autoimmune disease that causes the body to attack its own joints, while osteoarthritis is a degenerative condition caused by wear and tear. RA typically affects joints symmetrically and can cause systemic symptoms like fatigue, while OA usually affects individual joints.",
  },
  {
    q: "Can rheumatoid arthritis be cured?",
    a: "Currently there is no cure for RA, but modern treatments can effectively control symptoms and slow or stop disease progression. Many patients achieve remission — a state where the disease is no longer active — with early, aggressive treatment.",
  },
  {
    q: "What blood tests are used to diagnose RA?",
    a: "Key tests include Rheumatoid Factor (RF), Anti-CCP antibodies, ESR (sed rate), and CRP (C-reactive protein). A combination of blood work, imaging, and clinical examination is used to confirm diagnosis.",
  },
  {
    q: "Is exercise safe with rheumatoid arthritis?",
    a: "Yes! Regular, gentle exercise is one of the best things you can do for RA. Low-impact activities like swimming, walking, yoga, and cycling help maintain joint flexibility, strengthen supporting muscles, and improve overall well-being. Avoid high-impact activities during flares.",
  },
]

function ArthritisGuide() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 360
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        {/* ══════ Hero Section ══════ */}
        <section className="relative bg-gradient-to-br from-[#f0f4fb] via-[#f0f4fb] to-[#e8f8f6] pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8" style={{ fontFamily: "var(--font-base)" }}>
              <Link to="/" className="text-navy-muted hover:text-navy-deep transition-colors">Home</Link>
              <span className="text-navy-muted/40">/</span>
              <Link to="/health-guide" className="text-navy-muted hover:text-navy-deep transition-colors">Health Guide</Link>
              <span className="text-navy-muted/40">/</span>
              <span className="text-navy-deep font-semibold">Rheumatoid Arthritis</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/condition/Rheumatoid Arthritis (RA).png"
                    alt="RA icon"
                    className="w-14 h-14 object-contain"
                  />
                  <span
                    className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full"
                    style={{ fontFamily: "var(--font-base)", backgroundColor: "#e8f8f6", color: "#3b8c85" }}
                  >
                    Condition Guide
                  </span>
                </div>
                <h1
                  className="text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--color-navy-deep)" }}
                >
                  {overview.title}
                </h1>
                <p
                  className="text-lg md:text-xl leading-relaxed mb-4 text-navy-muted"
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  {overview.subtitle}
                </p>
                <p
                  className="text-base leading-relaxed text-navy-muted/80 max-w-lg"
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  {overview.description}
                </p>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/ra-treatment.jpg"
                  alt="Rheumatoid arthritis care"
                  className="w-full rounded-2xl object-cover shadow-[0_20px_60px_rgba(24,36,57,0.12)]"
                  style={{ height: "400px" }}
                />
              </div>
            </div>
          </div>

          {/* Decorative blob */}
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(circle, #8ebfff 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
          />
        </section>

        {/* ══════ Key Facts Bar ══════ */}
        <section className="bg-[#182439] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {keyFacts.map((fact) => (
                <div key={fact.label} className="text-center md:text-left">
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2" style={{ fontFamily: "var(--font-base)" }}>
                    {fact.label}
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-[#b7efea] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {fact.value}
                  </p>
                  <p className="text-sm text-white/60" style={{ fontFamily: "var(--font-base)" }}>
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ Symptoms Section ══════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span
                  className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
                >
                  Signs & Symptoms
                </span>
                <h2
                  className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight mb-5"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Recognizing Rheumatoid Arthritis
                </h2>
                <p className="text-base text-navy-muted leading-relaxed mb-8" style={{ fontFamily: "var(--font-base)" }}>
                  RA symptoms often develop gradually and can come and go. Recognizing these early signs is crucial for timely treatment and better long-term outcomes.
                </p>
                <div className="space-y-4">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#e8f8f6] flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[#3b8c85]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-[15px] text-navy-deep leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                        {symptom}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#f8f6ff] rounded-2xl p-8 md:p-10 border border-[#e8e4f4]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#182439] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#b7efea]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-deep" style={{ fontFamily: "var(--font-display)" }}>When to See a Doctor</h3>
                </div>
                <p className="text-sm text-navy-muted leading-relaxed mb-5" style={{ fontFamily: "var(--font-base)" }}>
                  Contact a rheumatologist if you experience:
                </p>
                <ul className="space-y-3">
                  {[
                    "Persistent joint swelling lasting more than 6 weeks",
                    "Morning stiffness lasting longer than 30 minutes",
                    "Multiple joints affected symmetrically",
                    "Unexplained fatigue with joint symptoms",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-navy-deep leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#8ebfff] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] transition-all hover:opacity-90"
                    style={{ backgroundColor: "#182439", color: "#ffffff", padding: "13px 26px" }}
                  >
                    Schedule a Consultation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ Treatment Options ══════ */}
        <section className="py-20 md:py-28 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span
                className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
              >
                Treatment
              </span>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Treatment Options for RA
              </h2>
              <p className="text-navy-muted text-base leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                Modern rheumatology offers a wide range of effective treatments. Your care team will tailor a plan based on your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {treatments.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-[0_8px_32px_rgba(24,36,57,0.08)] hover:border-transparent transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-navy-deep" style={{ fontFamily: "var(--font-display)" }}>
                      {t.name}
                    </h3>
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase py-1.5 px-3 rounded-full"
                      style={{ backgroundColor: "#e8f8f6", color: "#3b8c85" }}
                    >
                      {t.tag}
                    </span>
                  </div>
                  <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ Related Articles (Scrollable) ══════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span
                  className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
                >
                  Resources
                </span>
                <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Arthritis Articles & Guides
                </h2>
              </div>
              <div className="flex gap-2">
                <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
                <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="w-[340px] min-w-[340px] flex-shrink-0 flex flex-col group bg-[#fcfcfc] border border-gray-100"
                >
                  <div className="h-56 overflow-hidden">
                    <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.image} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div style={{ marginBottom: "12px" }}>
                      <span className="inline-block bg-[#e3efff] text-[#3b5b80] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}>
                      {article.title}
                    </h4>
                    <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                      By <strong className="text-navy-deep font-semibold">{article.author}</strong>
                    </p>
                    <p className="text-sm text-navy-muted leading-relaxed line-clamp-2 flex-grow" style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold text-navy-deep mt-auto" style={{ fontFamily: "var(--font-base)" }}>
                      Read More
                      <span className="w-6 h-6 rounded-full bg-[#aeeee7] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#182439]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ FAQ Section ══════ */}
        <section className="py-20 md:py-28 bg-ghost">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <span
                className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
              >
                FAQ
              </span>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-semibold text-navy-deep pr-4" style={{ fontFamily: "var(--font-base)" }}>
                      {faq.q}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#f0f4fb] flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                      <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ CTA Banner ══════ */}
        <CtaBanner />

        {/* ══════ Newsletter ══════ */}
        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>
      </main>
      <BriefingFooter />
    </div>
  )
}

export default ArthritisGuide
