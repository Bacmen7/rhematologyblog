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
        <PhilosophyBanner />
        <PlansSection />
        <WhatsIncluded />
        <InsuranceSection />
        <ComparisonSection />
        <PaymentOptions />
        <EmployerSection />
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
        background: "radial-gradient(ellipse at 70% 0%, #b1efec 0%, transparent 50%), radial-gradient(ellipse at 20% 100%, #c7dfff 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
          <div className="lg:col-span-7 py-20 lg:py-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/30" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Pricing & Insurance</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight mb-8">
              Quality care shouldn't be{" "}
              a guessing game
            </h1>
            <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg">
              Transparent pricing. In-network with most major insurers. No surprise bills, no fine print, no "we'll figure it out later."
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="bg-navy-deep hover:bg-navy-deep/90 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-colors"
              >
                Check My Coverage →
              </Link>
              <a
                href="#plans"
                className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
              >
                View plans
              </a>
            </div>
            <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-navy-muted/50">
              <span>In-Network</span>
              <span className="text-navy-deep/15">|</span>
              <span>No Hidden Fees</span>
              <span className="text-navy-deep/15">|</span>
              <span>HSA/FSA Eligible</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/featured-main.jpg"
                alt="Patient meeting with care team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 2. PHILOSOPHY BANNER ───────── */
function PhilosophyBanner() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white relative overflow-hidden pb-16">

      <div className="max-w-[1120px] mx-auto px-6 py-28 md:py-36 relative z-10">
        <p className="text-3xl md:text-[2.8rem] lg:text-5xl leading-[1.25] font-normal max-w-4xl">
          Healthcare billing is{" "}
          <span className="relative inline-block">
            broken
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#92d9d5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
          . We think you should know exactly what you're paying{" "}
          <span className="text-primary/80">before</span> your visit — not three months after.
        </p>
      </div>
      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>
    </section>
  )
}

/* ───────── 3. PLANS ───────── */
function PlansSection() {
  return (
    <section id="plans" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Care Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
            Simple plans, real pricing
          </h2>
          <p className="text-navy-muted text-lg leading-relaxed">
            Choose the level of care that fits your situation. Switch or cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/40">
          {[
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
          ].map((plan) => (
            <div key={plan.name} className="bg-white p-8 md:p-10 flex flex-col">
              {plan.badge && (
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-primary/20 text-navy-deep text-xs font-bold uppercase tracking-wider mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold tracking-tight mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-navy-muted text-sm">{plan.period}</span>
              </div>
              <p className="text-navy-muted text-[15px] leading-relaxed mb-8">{plan.desc}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px]">
                    <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">check</span>
                    <span className="text-navy-deep">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className="bg-navy-deep hover:bg-navy-deep/90 text-white px-6 py-3.5 rounded-full font-semibold text-[14px] transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-navy-muted/60 text-sm text-center">
          All plans include HIPAA-compliant platform access. Prices shown are self-pay rates — most patients pay less with insurance.
        </p>
      </div>
    </section>
  )
}

/* ───────── 4. WHAT'S INCLUDED ───────── */
function WhatsIncluded() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-navy-deep px-5 py-[100px] md:py-[120px] text-white">
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Every Plan Includes</span>
        </div>
        <h2 className="mb-16 max-w-[800px] text-[36px] md:text-[48px] leading-[1.2] font-normal">
          The things that should{" "}
          <span className="relative inline-block">
            never cost extra
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#8da4d0" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-[60px] gap-x-[80px]">
          {[
            {
              icon: "schedule",
              title: "No surprise bills",
              text: (
                <>
                  You'll know <strong className="font-semibold text-white">exactly what you owe before every visit.</strong> We send a clear cost breakdown upfront — no coded invoices three months later.
                </>
              ),
            },
            {
              icon: "medication",
              title: "Prescription support",
              text: (
                <>
                  Our team works with your pharmacy and insurance to find the <strong className="font-semibold text-white">lowest-cost medication options</strong> available to you, including manufacturer copay programs.
                </>
              ),
            },
            {
              icon: "support_agent",
              title: "Insurance advocacy",
              text: (
                <>
                  Prior authorizations, appeals, formulary exceptions — <strong className="font-semibold text-white">we handle the paperwork</strong> so you can focus on getting better.
                </>
              ),
            },
            {
              icon: "account_balance_wallet",
              title: "Financial transparency",
              text: (
                <>
                  Access your billing history, payment plans, and coverage details anytime through your <strong className="font-semibold text-white">patient portal.</strong> No phone trees required.
                </>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
                <span className="material-symbols-outlined relative z-10 text-[32px] text-white">{item.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">{item.title}</h3>
                <p className="text-[16px] leading-[1.6] font-normal text-[#b0b5c0]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 5. INSURANCE PARTNERS ───────── */
function InsuranceSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Insurance</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              In-network with plans{" "}
              you already have
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed">
              We work with most major insurance carriers. Don't see yours? Reach out — we're adding new partners regularly.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {[
              { name: "Aetna", detail: "In-network across all Aetna PPO and EPO plans. HMO coverage available in select markets." },
              { name: "Blue Cross Blue Shield", detail: "Accepted in all 50 states through the BCBS national network. Includes FEP plans." },
              { name: "Cigna", detail: "In-network with Cigna Open Access Plus, PPO, and most employer-sponsored plans." },
              { name: "UnitedHealthcare", detail: "Full coverage under UHC Choice Plus, Options PPO, and UMR administered plans." },
              { name: "Humana", detail: "Accepted for Humana Gold Plus, PPO, and Medicare Advantage plans in participating states." },
              { name: "Medicare", detail: "We accept Original Medicare (Parts A & B) and most Medicare Advantage plans." },
            ].map((ins, i) => (
              <div
                key={ins.name}
                className={`flex gap-8 ${i < 5 ? "pb-10 mb-10 border-b border-border/50" : ""}`}
              >
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-2 tracking-tight">{ins.name}</h3>
                  <p className="text-navy-muted text-[15px] leading-[1.7]">{ins.detail}</p>
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
    <section className="bg-ghost py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Cost Comparison</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
            What you'd pay{" "}
            elsewhere
          </h2>
        </div>

        <div className="overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b-2 border-navy-deep/10 pb-4 mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-muted/50" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-muted/50 text-center">Typical Cost</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy-deep text-center">Rheuma</span>
          </div>

          {[
            ["Initial consultation", "$300–$500", "Included in plan"],
            ["Follow-up visit", "$150–$250", "Included in plan"],
            ["Lab work coordination", "$50–$100/order", "Included"],
            ["Prior authorization", "Your problem", "We handle it"],
            ["Specialist referral", "Separate billing", "Coordinated"],
            ["Between-visit support", "Not available", "Unlimited messaging"],
          ].map(([cat, trad, us], i) => (
            <div
              key={cat}
              className={`grid grid-cols-[1.2fr_1fr_1fr] py-5 ${i < 5 ? "border-b border-border/40" : ""} group hover:bg-white/50 transition-colors -mx-4 px-4`}
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

/* ───────── 7. PAYMENT OPTIONS ───────── */
function PaymentOptions() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/20" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Flexible Payment</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Ways to pay
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed max-w-sm">
              We never want cost to be the reason you don't get care.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {[
              { icon: "credit_card", title: "Insurance billing", desc: "We bill your insurance directly. You only pay your copay or coinsurance — we verify benefits before your first visit." },
              { icon: "savings", title: "HSA & FSA accepted", desc: "All Rheuma services qualify as eligible medical expenses. Use your pre-tax health savings to cover visits and treatments." },
              { icon: "calendar_month", title: "Monthly payment plans", desc: "Spread costs across manageable monthly payments at zero interest. No credit check, no penalties for early payoff." },
              { icon: "volunteer_activism", title: "Financial assistance", desc: "Income-based sliding scale available for qualifying patients. We also help connect you with manufacturer copay assistance programs." },
              { icon: "receipt_long", title: "Superbills provided", desc: "For out-of-network coverage, we provide detailed superbills you can submit to your insurer for reimbursement." },
              { icon: "shield", title: "Price protection", desc: "Your plan rate is locked for 12 months from enrollment. No mid-year price increases, guaranteed." },
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

/* ───────── 8. EMPLOYER SECTION ───────── */
function EmployerSection() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary/40" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/30">For Employers</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal mb-6">
              Bring Rheuma to{" "}
              your team
            </h2>
            <p className="text-lg leading-[1.7] text-white/60 mb-8 max-w-lg">
              Autoimmune conditions cost employers an average of $20,000 per affected employee annually in direct and indirect costs. Our coordinated care model reduces ER visits, shortens time-to-treatment, and gets people back to work faster.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Custom pricing for groups of 50+ employees",
                "Dedicated account management and onboarding",
                "HIPAA-compliant reporting and utilization data",
                "Integration with existing health plan benefits",
                "Employee wellness program compatibility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-white/70">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">check</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-navy-deep px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-primary-hover transition-colors"
            >
              Request Employer Info
            </Link>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero-doctor.jpg"
                alt="Clinical team"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 9. FAQ ───────── */
function FaqSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Billing FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Pricing questions
          </h2>
        </div>

        <div>
          {[
            {
              q: "Will my insurance cover Rheuma visits?",
              a: "Most likely. We're in-network with Aetna, BCBS, Cigna, UnitedHealthcare, Humana, and Medicare. We verify your benefits before your first appointment so you know your costs upfront.",
            },
            {
              q: "What if I don't have insurance?",
              a: "Our self-pay plans start at $149/month with no long-term contracts. We also offer income-based financial assistance and can connect you with manufacturer copay programs for medications.",
            },
            {
              q: "Are there any hidden fees?",
              a: "No. Your plan rate covers all virtual visits, messaging, care coordination, and lab ordering. The only additional costs would be labs themselves (covered by most insurance) and medications.",
            },
            {
              q: "Can I use my HSA or FSA?",
              a: "Yes. All Rheuma services qualify as eligible medical expenses under IRS guidelines. We accept HSA/FSA debit cards directly.",
            },
            {
              q: "What's your cancellation policy?",
              a: "Cancel anytime with no penalty. We pro-rate your final month. There are no long-term contracts or early termination fees.",
            },
            {
              q: "Do you handle prior authorizations?",
              a: "Yes. Our care team handles all prior authorizations, insurance appeals, and formulary exceptions. You focus on your health — we deal with the paperwork.",
            },
          ].map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 10. CTA ───────── */
function CtaSection() {
  return (
    <section
      className="custom-approach-section relative overflow-hidden py-28 md:py-40"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #b1efec 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #c7dfff 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
          Let's figure out your{" "}
          coverage
        </h2>
        <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg mx-auto">
          Enter your insurance details and we'll tell you exactly what's covered — before you commit to anything.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-navy-deep hover:bg-navy-deep/90 text-white px-10 py-4 rounded-full font-semibold text-[15px] transition-colors"
          >
            Check My Coverage →
          </Link>
          <Link
            to="/"
            className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
          >
            Talk to billing team
          </Link>
        </div>
        <p className="mt-8 text-navy-muted/50 text-sm">
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

export default PricingInsurance
