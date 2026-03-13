import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import CtaBanner from "../components/CtaBanner"
import BriefingFooter from "../components/BriefingFooter"

const conditions = [
  {
    name: "Rheumatoid Arthritis",
    slug: "arthritis",
    image: "/condition/Rheumatoid Arthritis (RA).png",
    description: "Learn about symptoms, diagnosis, and treatment options for RA.",
  },
  {
    name: "Psoriatic Arthritis",
    slug: "psoriatic-arthritis",
    image: "/condition/Psoriatic Arthritis.png",
    description: "Understanding the connection between skin and joint symptoms.",
  },
  {
    name: "Osteoarthritis",
    slug: "osteoarthritis",
    image: "/condition/Osteoarthritis.png",
    description: "Managing wear-and-tear joint damage with evidence-based care.",
  },
  {
    name: "Lupus",
    slug: "lupus",
    image: "/condition/Lupus.png",
    description: "Navigating this complex autoimmune condition with expert guidance.",
  },
  {
    name: "Gout",
    slug: "gout",
    image: "/condition/Gout.png",
    description: "Preventing flares and managing uric acid levels effectively.",
  },
  {
    name: "Ankylosing Spondylitis",
    slug: "ankylosing-spondylitis",
    image: "/condition/Ankylosing Spondylitis (AS).png",
    description: "Expert insights on spinal inflammation and mobility preservation.",
  },
  {
    name: "Fibromyalgia",
    slug: "fibromyalgia",
    image: "/condition/Fibromyalgia.png",
    description: "Comprehensive approaches to widespread pain and fatigue.",
  },
  {
    name: "Back & Neck Pain",
    slug: "back-neck-pain",
    image: "/condition/back.png",
    description: "Identifying causes and finding lasting relief for spinal pain.",
  },
]

const topics = [
  {
    title: "Understanding Your Diagnosis",
    description: "What to expect after receiving a rheumatic diagnosis, next steps, and how to work with your care team.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "Treatment Options",
    description: "From biologics to lifestyle modifications — explore the full range of therapies available for rheumatic conditions.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Diet & Nutrition",
    description: "Evidence-based dietary guidance to help manage inflammation and support joint health.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "Exercise & Movement",
    description: "Safe, joint-friendly exercises and movement strategies to maintain mobility and reduce stiffness.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Mental Health & Wellness",
    description: "Managing the emotional impact of chronic illness, from stress reduction to building resilience.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: "Lab Work & Testing",
    description: "Understand your blood work, imaging results, and what different test markers mean for your condition.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5" />
      </svg>
    ),
  },
]

const featuredArticles = [
  {
    id: "understanding-blood-work-rf-anti-ccp",
    title: "Understanding your Blood Work: RF and Anti-CCP",
    image: "/images/lab-test.jpg",
    category: "Diagnostics",
    author: "Dr. Sarah Miller",
    excerpt: "Learn what RF and Anti-CCP blood tests mean for your rheumatoid arthritis diagnosis and treatment plan.",
  },
  {
    id: "gentle-exercises-flaring-joints",
    title: "Gentle Exercises for Flaring Joints",
    image: "/images/exercise.jpg",
    category: "Lifestyle",
    author: "Dr. James Chen",
    excerpt: "Safe, low-impact exercises that can help maintain mobility and reduce pain during RA flares.",
  },
  {
    id: "anti-inflammatory-diet",
    title: "The Anti-Inflammatory Diet: Truths vs Myths",
    image: "/images/diet.jpg",
    category: "Diet & Nutrition",
    author: "Angela Myers",
    excerpt: "Separating fact from fiction when it comes to anti-inflammatory foods and their impact on symptoms.",
  },
]

function HealthGuide() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        {/* ══════ Hero Section ══════ */}
        <section className="relative bg-gradient-to-b from-[#f0f4fb] to-background-light pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span
                  className="inline-block mb-5 text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
                >
                  Health Guide
                </span>
                <h1
                  className="text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--color-navy-deep)" }}
                >
                  Your Trusted Source for{" "}
                  <span className="relative inline-block">
                    Rheumatology
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      style={{ height: "6px" }}
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 400 12"
                    >
                      <path d="M2 10C80 4 200 2 398 6" stroke="#92d9d5" strokeLinecap="round" strokeWidth="3" />
                    </svg>
                  </span>{" "}
                  Health Information
                </h1>
                <p
                  className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "var(--font-base)", color: "var(--color-navy-muted)" }}
                >
                  Evidence-based articles, expert advice, and practical guidance — everything you need to understand and manage rheumatic conditions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#conditions"
                    className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] transition-all hover:opacity-90"
                    style={{ backgroundColor: "#182439", color: "#ffffff", padding: "14px 28px" }}
                  >
                    Explore Conditions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] border-2 border-[#182439]/15 hover:border-[#182439]/30 transition-all"
                    style={{ color: "#182439", padding: "12px 28px" }}
                  >
                    Browse Articles
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/images/hero-doctor.jpg"
                  alt="Medical professional with patient"
                  className="w-full rounded-2xl object-cover shadow-[0_20px_60px_rgba(24,36,57,0.12)]"
                  style={{ height: "420px" }}
                />
                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-[0_8px_32px_rgba(24,36,57,0.1)]"
                  style={{ maxWidth: "220px" }}
                >
                  <p className="text-[11px] font-bold tracking-widest uppercase text-[#5ba8a3] mb-1">Trusted by</p>
                  <p className="text-2xl font-bold text-navy-deep" style={{ fontFamily: "var(--font-display)" }}>10,000+</p>
                  <p className="text-xs text-navy-muted">patients nationwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative blob */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
            style={{ background: "radial-gradient(circle, #92d9d5 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />
        </section>

        {/* ══════ Conditions Grid ══════ */}
        <section id="conditions" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span
                className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
              >
                Conditions
              </span>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Explore by Condition
              </h2>
              <p className="text-navy-muted text-base leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                Dive into condition-specific guides written by rheumatology experts, covering everything from diagnosis to daily management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {conditions.map((c) => (
                <Link
                  key={c.name}
                  to={c.slug === "arthritis" ? "/health-guide/arthritis" : "#"}
                  className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-4 border border-gray-100 hover:shadow-[0_8px_32px_rgba(24,36,57,0.08)] hover:border-transparent transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img src={c.image} alt={c.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-deep mb-1.5" style={{ fontFamily: "var(--font-base)" }}>{c.name}</p>
                    <p className="text-xs text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>{c.description}</p>
                  </div>
                  <span className="mt-auto flex items-center gap-1.5 text-xs font-bold text-navy-deep opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-base)" }}>
                    Learn More
                    <span className="w-5 h-5 rounded-full bg-[#aeeee7] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-[#182439]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </svg>
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ Health Topics ══════ */}
        <section className="py-20 md:py-28 bg-ghost">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <span
                className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
              >
                Topics
              </span>
              <h2
                className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Browse by Topic
              </h2>
              <p className="text-navy-muted text-base leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                Explore curated resources across key areas of rheumatology care and wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {topics.map((topic) => (
                <div
                  key={topic.title}
                  className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-[0_8px_32px_rgba(24,36,57,0.08)] hover:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e8f8f6] flex items-center justify-center text-[#3b8c85] mb-5">
                    {topic.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-deep mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {topic.title}
                  </h3>
                  <p className="text-sm text-navy-muted leading-relaxed" style={{ fontFamily: "var(--font-base)" }}>
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ Featured Articles ══════ */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div>
                <span
                  className="inline-block mb-4 text-[11px] font-bold tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-base)", color: "#5ba8a3" }}
                >
                  Featured
                </span>
                <h2
                  className="text-3xl md:text-[2.75rem] leading-[1.08] tracking-tight"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Latest Articles
                </h2>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-deep hover:text-[#5ba8a3] transition-colors"
                style={{ fontFamily: "var(--font-base)" }}
              >
                View All Articles
                <span className="w-7 h-7 rounded-full bg-[#aeeee7] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#182439]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="group flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-[0_8px_32px_rgba(24,36,57,0.08)] transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={article.image}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div style={{ marginBottom: "12px" }}>
                      <span className="inline-block bg-[#e3efff] text-[#3b5b80] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h4
                      className="text-xl leading-snug line-clamp-2 text-navy-deep group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, marginBottom: "8px" }}
                    >
                      {article.title}
                    </h4>
                    <p className="text-xs text-navy-muted" style={{ fontFamily: "var(--font-base)", marginBottom: "8px" }}>
                      By <strong className="text-navy-deep font-semibold">{article.author}</strong>
                    </p>
                    <p
                      className="text-sm text-navy-muted leading-relaxed line-clamp-2 flex-grow"
                      style={{ fontFamily: "var(--font-base)", marginBottom: "16px" }}
                    >
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

export default HealthGuide
