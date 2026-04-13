import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

function PricingInsurance() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <HeroSection />
        <NetworkPricingSection />
        <InsuranceSupportSection />
        {/* <PlansSection /> */}
        {/* <WhatsIncluded /> */}
        <InsuranceSection />
        <ComparisonSection />
        <PaymentOptions />
        {/* <EmployerSection /> */}
        <FaqSection />
        {/* <CtaSection /> */}
        <div className="bg-white">
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
    <>
      {/* Desktop */}
      <section className="custom-approach-section relative overflow-hidden hidden lg:block" style={{ background: "#ffffff" }}>
        <div className="grid grid-cols-2 items-stretch min-h-[76vh]">
          <div className="flex flex-col justify-center gap-6 py-16 pl-[max(8rem,calc((100%-80rem)/2+8rem))] pr-10">
            <h1 className="text-[4.375rem] font-light leading-[1.03] tracking-[-1.6px] text-navy-deep" style={{ fontFamily: "var(--font-display)" }}>
              Know what you'll pay before you{" "}
              <span className="relative inline-block">
                walk in
                <svg className="absolute -bottom-2 left-0 w-full h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                  <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-navy-muted leading-relaxed max-w-xl">
              We're in-network with most major insurers and we'll tell you your exact costs upfront. No surprise bills showing up weeks later, no confusing codes, no runaround.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/"
                className="bg-primary hover:bg-primary-hover text-navy-deep px-6 py-2.5 rounded-full font-semibold text-base transition-colors"
              >
                Check My Coverage →
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/featured-main.jpg"
              alt="Patient meeting with care team"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div className="flex flex-col items-center text-center px-6 pt-14 pb-10" style={{ background: "#ffffff" }}>
          <h1 className="text-[3.0625rem] font-light text-navy-deep leading-[1.06] tracking-[-1.4px] mb-5" style={{ fontFamily: "var(--font-display)" }}>
            Know what you'll pay before you{" "}
            <span className="relative inline-block">
              walk in
              <svg className="absolute -bottom-1 left-0 w-full h-2.5" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          <p className="text-base text-navy-muted leading-relaxed mb-8 max-w-sm">
            In-network with most major insurers. Your exact costs upfront -no surprise bills, no confusing codes.
          </p>
          <Link
            to="/"
            className="bg-primary hover:bg-primary-hover text-navy-deep px-8 py-3.5 rounded-full font-bold text-base transition-colors mb-5"
          >
            Check My Coverage →
          </Link>
          <p className="text-sm text-navy-muted">
            In-network ·{" "}
            <span className="font-semibold text-navy-deep underline decoration-accent decoration-2 underline-offset-2">
              No hidden fees
            </span>
          </p>
        </div>
        <img src="/images/featured-main.jpg" alt="Care team" className="w-full block" />
      </section>
    </>
  )
}

/* ───────── 2. NETWORK PRICING ───────── */
function NetworkPricingSection() {
  return (
    <section className="py-24 md:py-36 bg-[#FDFDFE] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* In-network */}
          <div className="text-center px-6 md:px-12 py-12 md:py-16">
            <div className="w-16 h-16 rounded-full bg-[#e0f3f5] flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A355D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5" />
                <path d="M8 3H3v5" />
                <path d="M12 22l4-4-4-4" />
                <path d="M12 22l-4-4 4-4" />
                <path d="M21 3l-9 9" />
                <path d="M3 3l9 9" />
              </svg>
              <svg className="-ml-3 -mt-6" width="14" height="14" viewBox="0 0 20 20" fill="#0F616E">
                <circle cx="10" cy="10" r="10" fill="#0F616E" />
                <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-[1.75rem] md:text-[2rem] tracking-tight mb-5 text-[#1A355D]" style={{ fontFamily: "var(--font-display)" }}>
              In-network pricing
            </h3>
            <p className="text-navy-muted text-[15px] leading-[1.75] max-w-md mx-auto">
              We don't bill on a per-visit basis the way most clinics do. With insurance coverage, most Rheuma patients get a full year of unlimited care and only pay for four in-network specialist visits. For those four visits, copays and deductibles apply based on your plan benefit details.{" "}
              <a href="#" className="font-semibold text-[#1A355D] underline decoration-[#1A355D] decoration-[1.5px] underline-offset-[3px] hover:decoration-[#0F616E] transition-colors">
                Here's more on how our billing works.
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[60%] bg-[#dadfe8]/60" />

          {/* Not in-network */}
          <div className="text-center px-6 md:px-12 py-12 md:py-16 border-t md:border-t-0 md:border-l border-[#dadfe8]/60">
            <div className="w-16 h-16 rounded-full bg-[#e0f3f5] flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A355D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5" />
                <path d="M8 3H3v5" />
                <path d="M12 22l4-4-4-4" />
                <path d="M12 22l-4-4 4-4" />
                <path d="M21 3l-9 9" />
                <path d="M3 3l9 9" />
              </svg>
              <svg className="-ml-3 -mt-6" width="14" height="14" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" fill="#e07048" />
                <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-[1.75rem] md:text-[2rem] tracking-tight mb-5 text-[#1A355D]" style={{ fontFamily: "var(--font-display)" }}>
              Not in-network?
            </h3>
            <p className="text-navy-muted text-[15px] leading-[1.75] max-w-md mx-auto">
              Get access to Rheuma for $250 per visit.{" "}
              <a href="#" className="font-semibold text-[#1A355D] underline decoration-[#1A355D] decoration-[1.5px] underline-offset-[3px] hover:decoration-[#0F616E] transition-colors">
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── INSURANCE SUPPORT ───────── */
function InsuranceSupportSection() {
  return (
    <section className="bg-[#F5F5F5] relative z-10">
      {/* Top Wave */}
      <div className="w-full leading-none -mb-1">
        <svg viewBox="0 0 1440 32" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#F5F5F5" />
        </svg>
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1 flex flex-col gap-10">
              <h2
                className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1A355D]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Insurance support
              </h2>
              <p className="text-navy-muted text-lg leading-relaxed max-w-lg">
                Let us take the guesswork out of paying for medical care. Our care coordinators are here to answer your questions and help you navigate your insurance coverage -so you can focus on getting better.
              </p>
              <div>
                <Link
                  to="/"
                  className="inline-block bg-[#1AA3B5] hover:bg-[#1AA3B5] text-[#1A355D] px-8 py-3 rounded-full font-semibold text-[15px] transition-colors"
                >
                  Book a Free Intro Call
                </Link>
              </div>
            </div>

            {/* Image with blob background */}
            <div className="order-1 lg:order-2 flex justify-center relative">
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[430px] md:w-[480px] md:h-[490px] -z-0" viewBox="0 0 72 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M55.1256 5.62319C69.5284 18.4233 75.3527 39.7894 70.0964 55.9976C65.1006 71.3957 49.3485 76.6043 33.3275 72.8197C18.4814 69.3135 4.89883 56.0577 0.773067 39.6249C-2.87611 25.0844 7.0102 15.5753 17.3399 9.11354C28.7557 1.97144 42.7234 -5.39849 55.1256 5.62319Z" fill="#e0f3f5" />
              </svg>
              <img
                src="https://oshihealth.com/wp-content/uploads/2024/11/Care-Coordinator-1200x800.jpg"
                alt="Care coordinator on the phone"
                className="relative z-10 w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-cover rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

/* ───────── 3. PLANS ───────── */
function PlansSection() {
  const plans = [
    {
      name: "Essential",
      price: "$149",
      period: "/month",
      desc: "For patients with a clear diagnosis who need consistent, quality follow-up care.",
      features: [
        "Dedicated rheumatologist",
        "Monthly virtual visits",
        "Lab work coordination",
        "Medication management",
        "Secure messaging with care team",
        "Prescription renewals",
      ],
    },
    {
      name: "Complete",
      price: "$249",
      period: "/month",
      desc: "Our most popular plan. For patients who want a full care team working together on their case.",
      badge: "Most Popular",
      features: [
        "Everything in Essential",
        "Bi-weekly visits available",
        "Physiotherapy sessions",
        "Dietitian consultation",
        "Priority scheduling",
        "Treatment plan reviews",
        "Specialist referral coordination",
      ],
    },
    {
      name: "Comprehensive",
      price: "$399",
      period: "/month",
      desc: "For complex cases requiring intensive, multi-specialist coordination and ongoing monitoring.",
      features: [
        "Everything in Complete",
        "Weekly visit availability",
        "Behavioral health support",
        "Infusion therapy coordination",
        "Quarterly comprehensive reviews",
        "24/7 care team access",
        "Clinical trial eligibility screening",
        "Dedicated care coordinator",
      ],
    },
  ]

  return (
    <section id="plans" className="py-24 md:py-32 bg-[#FDFDFE] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#0F616E] uppercase mb-5">Care Plans</p>
          <h2 className="text-4xl md:text-[3rem] text-[#1A355D] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Simple plans,{" "}
            <span className="relative inline-block">
              real pricing
              <svg className="absolute w-[105%] h-[8px] -bottom-1 left-[-2.5%] z-0 text-[#1AA3B5]" preserveAspectRatio="none" viewBox="0 0 456 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7.40487C152.958 2.78597 303.264 0.160341 453 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-[#5E5E5E] text-[15px] leading-relaxed mt-4 font-light max-w-md mx-auto">
            Choose the level of care that fits your situation. Switch or cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const isPopular = !!plan.badge
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[4px] overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? "bg-[#1A355D] text-white shadow-[0_20px_50px_rgba(24,36,57,0.2)]"
                    : "bg-white border border-[#dadfe8]/60"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1AA3B5] via-[#1AA3B5] to-[#fa885a]" />
                )}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  {plan.badge && (
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-[#1AA3B5]/20 text-[#1AA3B5] text-[10px] font-bold uppercase tracking-[0.15em] mb-5">
                      {plan.badge}
                    </span>
                  )}
                  <h3
                    className="text-[13px] font-bold uppercase tracking-[0.15em] mb-5"
                    style={{ color: isPopular ? "rgba(255,255,255,0.5)" : "#a0a4ac" }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="text-[3.5rem] tracking-tight leading-none"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isPopular ? "text-white/40" : "text-[#a0a4ac]"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-[14px] leading-relaxed mb-8 font-light ${isPopular ? "text-white/60" : "text-[#5E5E5E]"}`}>
                    {plan.desc}
                  </p>
                  <ul className="space-y-3.5 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px]">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? "bg-[#1AA3B5]/15" : "bg-[#1AA3B5]/30"}`}>
                          <svg className={`w-3 h-3 ${isPopular ? "text-[#1AA3B5]" : "text-[#0F616E]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className={isPopular ? "text-white/80" : "text-[#1A355D]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/"
                    className={`block text-center px-6 py-3.5 rounded-full font-semibold text-[14px] transition-all duration-200 ${
                      isPopular
                        ? "bg-[#1AA3B5] text-[#1A355D] hover:bg-[#1AA3B5]"
                        : "bg-[#1A355D] text-white hover:bg-[#1A355D]/90"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-[#a0a4ac] text-[12px] text-center font-light">
          All plans include HIPAA-compliant platform access. Prices shown are self-pay rates -most patients pay less with insurance.
        </p>
      </div>
    </section>
  )
}

/* ───────── 4. WHAT'S INCLUDED ───────── */
function WhatsIncluded() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-[#0f616e] text-white">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full leading-none -translate-y-[98%]">
        <svg viewBox="0 0 1440 16" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M428.1 14.2289C654.82 14.2289 823.319 0 1053.1 0C1196.21 0 1315.56 5.51969 1440 9.68339V16H0V3.1744C141.3 7.36788 270.666 14.2289 428.1 14.2289Z" fill="#0f616e" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] font-bold tracking-[0.2em] text-white/30 uppercase mb-5">Every Plan Includes</p>
            <h2
              className="text-[2.5rem] md:text-[3rem] leading-[1.1] text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              The things that should{" "}
              <span className="relative inline-block">
                never cost extra
                <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                  <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Right: Cards */}
          <div className="space-y-10">
            {[
              {
                icon: "schedule",
                title: "No surprise bills",
                text: "You'll know exactly what you owe before every visit. We send a clear cost breakdown upfront -no coded invoices three months later.",
              },
              {
                icon: "medication",
                title: "Prescription support",
                text: "Our team works with your pharmacy and insurance to find the lowest-cost medication options available to you, including manufacturer copay programs.",
              },
              {
                icon: "support_agent",
                title: "Insurance advocacy",
                text: "Prior authorizations, appeals, formulary exceptions -we handle the paperwork so you can focus on getting better.",
              },
              {
                icon: "account_balance_wallet",
                title: "Financial transparency",
                text: "Access your billing history, payment plans, and coverage details anytime through your patient portal. No phone trees required.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-6 group">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center mt-1">
                  <div className="absolute inset-0 rounded-full bg-white/[0.06]" />
                  <span className="material-symbols-outlined relative z-10 text-[26px] text-[#1AA3B5]">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.4] text-white">{item.title}</h3>
                  <p className="text-[15px] leading-[1.7] font-light text-white/50">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none translate-y-[98%] z-20">
        <svg viewBox="0 0 1440 16" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
          <path d="M428.1 14.2289C654.82 14.2289 823.319 0 1053.1 0C1196.21 0 1315.56 5.51969 1440 9.68339V16H0V3.1744C141.3 7.36788 270.666 14.2289 428.1 14.2289Z" fill="#0f616e" />
        </svg>
      </div>
    </section>
  )
}

/* ───────── 5. INSURANCE PARTNERS ───────── */
function InsuranceSection() {
  const insurers = [
    { name: "Aetna" },
    { name: "Blue Cross Blue Shield" },
    { name: "Cigna" },
    { name: "UnitedHealthcare" },
    { name: "Humana" },
    { name: "Medicare" },
  ]

  return (
    <section className="pt-10 pb-24 md:pt-14 md:pb-36 bg-[#FDFDFE] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Eyebrow + Heading */}
          <div>
            <h2
              className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1A355D]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In-network with most major{" "}
              <span className="relative inline-block">
                insurance
                <svg className="absolute -bottom-1 left-0 w-full h-[6px]" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                  <path d="M2 10C80 4 200 2 398 6" stroke="#b3e0e6" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
              -and more coming soon
            </h2>
          </div>

          {/* Right: 3x2 Logo Grid */}
          <div className="grid grid-cols-3 gap-3">
            {insurers.map((ins) => (
              <div
                key={ins.name}
                className="bg-[#F5F5F5] rounded-[4px] h-[100px] flex items-center justify-center px-4"
              >
                <span className="text-[15px] font-bold text-[#5E5E5E]/60 tracking-tight text-center leading-tight">{ins.name}</span>
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
    <section className="bg-[#F5F5F5] relative z-10">
      {/* Wave Top */}
      <div className="w-full leading-none -mb-1 relative z-20" style={{ marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 32" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#F5F5F5" />
        </svg>
      </div>

      <div className="pt-4 pb-12 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1A355D] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What you'd pay{" "}
              <span className="relative inline-block">
                elsewhere
                <svg className="absolute w-[105%] h-[8px] -bottom-1 left-[-2.5%] z-0 text-[#1AA3B5]" preserveAspectRatio="none" viewBox="0 0 456 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7.40487C152.958 2.78597 303.264 0.160341 453 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[600px] border-separate" style={{ borderSpacing: "0 6px" }}>
              <thead>
                <tr>
                  <th className="text-left font-normal text-sm w-[50%] p-4" />
                  <th className="p-4 w-[25%] text-center text-[11px] font-bold tracking-[0.15em] text-[#a0a4ac] uppercase">Typical Cost</th>
                  <th className="p-4 w-[25%] text-center">
                    <span className="text-[14px] font-extrabold tracking-tighter text-[#1A355D]">RHEUMA.</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Initial consultation", "$300–$500", "Included in plan"],
                  ["Follow-up visit", "$150–$250", "Included in plan"],
                  ["Lab work coordination", "$50–$100/order", "Included"],
                  ["Prior authorization", "Your problem", "We handle it"],
                  ["Specialist referral", "Separate billing", "Coordinated"],
                  ["Between-visit support", "Not available", "Unlimited messaging"],
                ].map(([cat, trad, us], idx) => {
                  const even = idx % 2 === 0
                  return (
                    <tr key={cat} className={even ? "bg-white" : ""}>
                      <td className={`py-[18px] pl-8 text-[14.5px] font-medium text-[#1A355D] ${even ? "rounded-l-full" : ""}`}>{cat}</td>
                      <td className="py-[18px] text-center text-[14px] font-light text-[#a0a4ac]">{trad}</td>
                      <td className={`py-[18px] text-center text-[14px] font-semibold text-[#1A355D] ${even ? "rounded-r-full" : ""}`}>
                        <span className="inline-flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#1AA3B5] inline-flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-teal-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                          </span>
                          {us}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 7. PAYMENT OPTIONS ───────── */
function PaymentOptions() {
  const options = [
    { icon: "credit_card", title: "Insurance billing", desc: "We bill your insurance directly. You only pay your copay or coinsurance -we verify benefits before your first visit." },
    { icon: "savings", title: "HSA & FSA accepted", desc: "All Rheuma services qualify as eligible medical expenses. Use your pre-tax health savings to cover visits and treatments." },
    { icon: "calendar_month", title: "Monthly payment plans", desc: "Spread costs across manageable monthly payments at zero interest. No credit check, no penalties for early payoff." },
    { icon: "volunteer_activism", title: "Financial assistance", desc: "Income-based sliding scale available for qualifying patients. We also help connect you with manufacturer copay assistance programs." },
    { icon: "receipt_long", title: "Superbills provided", desc: "For out-of-network coverage, we provide detailed superbills you can submit to your insurer for reimbursement." },
    { icon: "shield", title: "Price protection", desc: "Your plan rate is locked for 12 months from enrollment. No mid-year price increases, guaranteed." },
  ]

  return (
    <section className="py-24 md:py-36 bg-[#FDFDFE] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <h2
              className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6 text-[#1A355D]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ways to pay
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed max-w-sm">
              We never want cost to be the reason you don't get care.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {options.map((p) => (
              <div key={p.title}>
                <span className="material-symbols-outlined text-[28px] text-navy-deep/30 mb-4 block">{p.icon}</span>
                <h3 className="text-[18px] font-semibold mb-2 tracking-tight text-[#1A355D]">{p.title}</h3>
                <p className="text-navy-muted text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 8. EMPLOYER SECTION ───────── */
function EmployerSection() {
  return (
    <>
      {/* Desktop */}
      <section className="custom-approach-section relative overflow-hidden hidden lg:block" style={{ background: "#e0f3f5" }}>
        <div className="grid grid-cols-2 items-stretch">
          <div className="relative">
            <img
              src="/images/hero-doctor.jpg"
              alt="Clinical team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 py-20 pl-16 pr-[max(4rem,calc((100%-80rem)/2+4rem))]">
            <h2
              className="text-4xl md:text-5xl leading-[1.05] tracking-tight text-[#1A355D]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bring Rheuma to your team
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed max-w-lg">
              Autoimmune conditions cost employers an average of $20,000 per affected employee annually in direct and indirect costs. Our coordinated care model reduces ER visits, shortens time-to-treatment, and gets people back to work faster.
            </p>
            <ul className="space-y-3.5 mt-2">
              {[
                "Custom pricing for groups of 50+ employees",
                "Dedicated account management and onboarding",
                "HIPAA-compliant reporting and utilization data",
                "Integration with existing health plan benefits",
                "Employee wellness program compatibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#5E5E5E] font-light">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1AA3B5]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#0F616E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#1A355D] text-white px-8 py-3 rounded-full font-semibold text-[15px] hover:bg-[#1A355D]/90 transition-colors"
              >
                Request Employer Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div className="flex flex-col" style={{ background: "#e0f3f5" }}>
          <img src="/images/hero-doctor.jpg" alt="Clinical team" className="w-full block h-[280px] object-cover" />
          <div className="px-6 py-12">
            <h2 className="text-[2rem] leading-[1.1] tracking-tight text-[#1A355D] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Bring Rheuma to your team
            </h2>
            <p className="text-navy-muted text-[15px] leading-relaxed mb-6">
              Our coordinated care model reduces ER visits, shortens time-to-treatment, and gets people back to work faster.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Custom pricing for groups of 50+",
                "Dedicated account management",
                "HIPAA-compliant reporting",
                "Integration with existing benefits",
                "Wellness program compatible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-[#5E5E5E] font-light">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#1AA3B5]/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#0F616E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#1A355D] text-white px-8 py-3.5 rounded-full font-semibold text-[15px]"
            >
              Request Employer Info
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ───────── 9. FAQ ───────── */
function FaqSection() {
  const faqs = [
    {
      q: "What's included with Rheuma?",
      a: "Rheuma gives you access to a full care team -rheumatologist, dietitian, physiotherapist, and behavioral health specialist -all working together on your case. Your membership includes virtual visits, secure messaging, lab coordination, and prescription management.",
    },
    {
      q: "Am I able to use my HSA or FSA?",
      a: "Yes. All Rheuma services qualify as eligible medical expenses under IRS guidelines. We accept HSA/FSA debit cards directly.",
    },
    {
      q: "How will I be notified about a bill? How can I pay it?",
      a: "You'll receive a clear cost breakdown via email and through your patient portal before each visit. We accept all major credit cards, HSA/FSA cards, and offer monthly payment plans at zero interest.",
    },
  ]

  return (
    <section className="bg-[#F5F5F5] relative z-10">
      {/* Top Wave */}
      <div className="w-full leading-none -mb-1">
        <svg viewBox="0 0 1440 32" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#F5F5F5" />
        </svg>
      </div>

      <div className="py-10 md:py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl text-[#1A355D] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Insurance FAQs
            </h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

/* ───────── 10. CTA ───────── */
function CtaSection() {
  return (
    <section className="custom-approach-section relative overflow-hidden" style={{ background: "#e0f3f5" }}>
      <div className="relative z-10 max-w-[800px] mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-[11px] font-bold tracking-[0.2em] text-[#1A355D] uppercase mb-6">Get Started</p>
        <h2
          className="text-[2.5rem] md:text-[3.2rem] leading-[1.08] tracking-tight mb-6 text-[#1A355D]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Let's figure out your{" "}
          <span className="relative inline-block">
            coverage
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>
        <p className="text-[17px] text-[#5E5E5E] leading-relaxed mb-10 max-w-lg mx-auto font-light">
          Enter your insurance details and we'll tell you exactly what's covered -before you commit to anything.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-[#1A355D] hover:bg-[#1A355D]/90 text-white px-10 py-3.5 rounded-full font-semibold text-[15px] transition-colors"
          >
            Check My Coverage →
          </Link>
          <Link
            to="/"
            className="text-[#1A355D] font-semibold text-[15px] underline decoration-[#1AA3B5] decoration-2 underline-offset-4 hover:decoration-[#1A355D] transition-colors"
          >
            Talk to billing team
          </Link>
        </div>
        <p className="mt-8 text-[#5E5E5E]/50 text-[12px] font-light">
          Takes 2 minutes · No obligation · Instant results
        </p>
      </div>
    </section>
  )
}

/* ───────── UTILS ───────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#dadfe8]/50">
      <button
        className="faq-btn w-full flex items-center justify-between py-7 text-left group"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span className="text-[16px] md:text-[17px] font-bold text-[#1A355D] pr-8 group-hover:text-[#0F616E] transition-colors leading-snug">
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-[#1A355D]" : "bg-[#1AA3B5]"}`}>
          <span
            className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${open ? "text-white" : "text-[#1A355D]"}`}
            style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}
          >
            add
          </span>
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="pb-7 text-[#5E5E5E] leading-[1.7] text-[14.5px] pr-12 font-light">{a}</p>
      </div>
    </div>
  )
}

export default PricingInsurance
