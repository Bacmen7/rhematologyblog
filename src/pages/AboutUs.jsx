import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

function AboutUs() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <HeroSection />
        <OriginStory />
        <MissionSection />
        <ValuesSection />
        <LeadershipSection />
        <ClinicalTeam />
        <TimelineSection />
        <PartnersSection />
        <PressSection />
        <CareersSection />
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
        background: "radial-gradient(ellipse at 80% 0%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 10% 100%, #b1efec 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
          <div className="lg:col-span-6 py-20 lg:py-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/30" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">About Us</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight mb-8">
              Built by people who've been{" "}
              <span className="italic font-normal">the patient</span>
            </h1>
            <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg">
              Rheuma was founded because the people who started it got tired of the way autoimmune care works. So they built something different.
            </p>
            <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest font-bold text-navy-muted/50">
              <span>Boston, MA</span>
              <span className="text-navy-deep/15">|</span>
              <span>Founded 2021</span>
              <span className="text-navy-deep/15">|</span>
              <span>38 Specialists</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero-doctor.jpg"
                alt="The Rheuma founding team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 2. ORIGIN STORY ───────── */
function OriginStory() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white relative overflow-hidden pb-16">

      <div className="max-w-[1120px] mx-auto px-6 py-28 md:py-36 relative z-10">
        <p className="font-display text-3xl md:text-[2.8rem] lg:text-5xl leading-[1.25] font-normal max-w-4xl">
          Our co-founder waited{" "}
          <span className="relative inline-block">
            nine months
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#92d9d5" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>{" "}
          for a rheumatology appointment. By the time she got one, irreversible joint damage had already set in. That{" "}
          <span className="italic text-primary/80">shouldn't happen</span> to anyone.
        </p>
      </div>
      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>
    </section>
  )
}

/* ───────── 3. MISSION ───────── */
function MissionSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Mission</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Close the gap between{" "}
              <span className="italic font-normal">diagnosis and relief</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-navy-muted text-lg leading-[1.8] mb-8">
              Over 54 million Americans live with an autoimmune condition. Most wait months for specialist care, see their doctor for seven minutes, and leave with more questions than answers.
            </p>
            <p className="text-navy-muted text-lg leading-[1.8] mb-8">
              Rheuma exists to fix that. We combine virtual-first access, multi-specialist care teams, and technology that actually works — so patients can get from first symptom to effective treatment in weeks, not years.
            </p>
            <p className="text-navy-deep text-lg leading-[1.8] font-semibold">
              Our goal is simple: no one should lose joint function, mobility, or quality of life because the system was too slow to help them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 4. VALUES ───────── */
function ValuesSection() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-navy-deep px-5 py-[100px] md:py-[120px] text-white">
      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-8 bg-primary/40" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Our Values</span>
        </div>
        <h2 className="mb-16 max-w-[800px] text-[36px] md:text-[48px] leading-[1.2] font-normal">
          What drives every{" "}
          <span className="relative inline-block">
            decision we make
            <svg className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
              <path d="M2 10C80 4 200 2 398 6" stroke="#8da4d0" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-[60px] gap-x-[80px]">
          {[
            {
              icon: "speed",
              title: "Urgency over bureaucracy",
              text: (
                <>
                  Autoimmune conditions progress. Every week of delay can mean <strong className="font-semibold text-white">permanent damage.</strong> We treat access as a clinical imperative, not an operational convenience.
                </>
              ),
            },
            {
              icon: "diversity_3",
              title: "Patients are partners",
              text: (
                <>
                  Treatment plans are built <strong className="font-semibold text-white">with patients, not for them.</strong> You understand your body better than any test result — we listen before we prescribe.
                </>
              ),
            },
            {
              icon: "auto_graph",
              title: "Measure everything",
              text: (
                <>
                  "Feeling a bit better" isn't a clinical outcome. We track <strong className="font-semibold text-white">specific, quantifiable metrics</strong> so both you and your care team know what's working.
                </>
              ),
            },
            {
              icon: "lightbulb",
              title: "Stay uncomfortable",
              text: (
                <>
                  Healthcare is full of "that's how we've always done it." We <strong className="font-semibold text-white">question every process</strong> and rebuild anything that doesn't serve the patient.
                </>
              ),
              dot: true,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
                {item.dot && <div className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-[#dcaea8]" />}
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

/* ───────── 5. LEADERSHIP ───────── */
function LeadershipSection() {
  const team = [
    { name: "Dr. Amara Osei", role: "Co-Founder & CEO", badge: "MD, MBA", image: "/images/specialist-1.jpg" },
    { name: "Raj Patel", role: "Co-Founder & CTO", badge: "MS CS, Stanford", image: "/images/specialist-2.jpg" },
    { name: "Dr. Elena Vasquez", role: "Chief Medical Officer", badge: "MD, FACR", image: "/images/specialist-3.jpg" },
  ]
  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-deep">
            Leadership<br />
            <span className="text-teal-soft">Team</span>
          </h2>
          <p className="max-w-xs text-sm text-navy-muted pb-2">
            Clinicians, technologists, and operators who've lived the problems they're solving.
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

/* ───────── 6. CLINICAL TEAM ───────── */
function ClinicalTeam() {
  return (
    <section className="bg-ghost py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/20" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Clinical Team</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              The people behind{" "}
              <span className="italic font-normal">your care</span>
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed max-w-sm">
              Every specialist on our team was hand-picked, not for credentials alone, but for how they treat patients.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {[
              { icon: "medical_services", title: "Rheumatologists", desc: "Board-certified physicians specializing in autoimmune and inflammatory conditions. Average 15+ years clinical experience." },
              { icon: "fitness_center", title: "Physiotherapists", desc: "Certified in rheumatic disease rehabilitation. They design movement programs that work around flares, not through them." },
              { icon: "restaurant", title: "Dietitians", desc: "Registered dietitians trained in anti-inflammatory nutrition. Evidence-based meal planning, not fad diets." },
              { icon: "psychology", title: "Behavioral health", desc: "Licensed therapists who understand the emotional weight of chronic illness. Integrated into your care plan, not an afterthought." },
              { icon: "local_pharmacy", title: "Clinical pharmacists", desc: "Medication specialists who monitor interactions, optimize dosing, and navigate insurance formularies on your behalf." },
              { icon: "hub", title: "Care coordinators", desc: "Your single point of contact. They manage scheduling, follow-ups, referrals, and make sure nothing falls through the cracks." },
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

/* ───────── 7. TIMELINE ───────── */
function TimelineSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Journey</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              How we <span className="italic font-normal">got here</span>
            </h2>
            <p className="text-navy-muted text-lg leading-relaxed">
              From a personal frustration to a new standard of care.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {[
              { year: "2021", title: "The idea", desc: "After Dr. Osei's personal experience with delayed RA diagnosis, she and Raj Patel begin building the first virtual-first rheumatology platform." },
              { year: "2022", title: "First patients", desc: "Rheuma launches in Massachusetts with three rheumatologists and a waitlist of 400+ patients transferred from local practices with 6-month backlogs." },
              { year: "2023", title: "Multi-disciplinary model", desc: "We add physiotherapy, dietetics, and behavioral health — becoming the first fully integrated virtual rheumatology practice in the Northeast." },
              { year: "2024", title: "National expansion", desc: "Licensed in 18 states. Partnership with three major insurance carriers. Clinical outcomes data published in the Journal of Rheumatology." },
              { year: "2025", title: "Where we are now", desc: "38 specialists, thousands of patients across the country, and a care model that's being studied by health systems looking to replicate the results." },
            ].map((item, i) => (
              <div
                key={item.year}
                className={`flex gap-8 ${i < 4 ? "pb-14 mb-14 border-b border-border/50" : ""}`}
              >
                <span className="text-5xl md:text-6xl font-extrabold text-primary/20 leading-none shrink-0 select-none">
                  {item.year}
                </span>
                <div className="pt-1">
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-navy-muted text-[16px] leading-[1.7]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 8. PARTNERS & AFFILIATIONS ───────── */
function PartnersSection() {
  return (
    <section className="bg-[#f0f4fb] border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Affiliations</span>
            <span className="h-px w-8 bg-navy-deep/20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Trusted by the institutions{" "}
            <span className="italic font-normal">that matter</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/30">
          {[
            { name: "American College of Rheumatology", detail: "Institutional member since 2022. Our clinical protocols meet ACR standards of care." },
            { name: "Harvard Medical School", detail: "Clinical research partnership studying virtual-first outcomes in autoimmune care." },
            { name: "Mass General Brigham", detail: "Referral network partnership for complex cases requiring inpatient or procedural care." },
            { name: "Arthritis Foundation", detail: "Official care partner. Joint research initiatives on early intervention and health equity." },
            { name: "NCQA", detail: "Patient-Centered Specialty Practice recognition for quality measurement and care coordination." },
            { name: "Digital Health Coalition", detail: "Founding member. Advancing standards for virtual specialty care delivery." },
          ].map((p) => (
            <div key={p.name} className="bg-white p-8 md:p-10">
              <h3 className="text-[17px] font-semibold mb-2 tracking-tight">{p.name}</h3>
              <p className="text-navy-muted text-[14px] leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 9. PRESS & RECOGNITION ───────── */
function PressSection() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/30">In the Press</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
            What others are <span className="italic">saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
          {[
            {
              quote: "Rheuma is doing for rheumatology what One Medical did for primary care — making the experience of seeing a specialist feel human again.",
              source: "STAT News",
              year: "2024",
            },
            {
              quote: "Their multi-disciplinary model cut time-to-treatment by 78% compared to traditional referral pathways. The clinical outcomes data is hard to argue with.",
              source: "Journal of Rheumatology",
              year: "2024",
            },
            {
              quote: "A virtual-first rheumatology startup that patients actually love. In a specialty with 6-month wait times, that's worth paying attention to.",
              source: "Modern Healthcare",
              year: "2023",
            },
          ].map((t) => (
            <div key={t.source} className="bg-navy-deep p-8 md:p-10 flex flex-col">
              <p className="text-[17px] md:text-lg leading-[1.7] text-white/80 mb-8 flex-1">
                "{t.quote}"
              </p>
              <div>
                <span className="block font-semibold text-white">{t.source}</span>
                <span className="text-sm text-white/40">{t.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 10. CAREERS CTA ───────── */
function CareersSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Careers</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Help us build the future of{" "}
              <span className="italic font-normal">rheumatology</span>
            </h2>
            <p className="text-navy-muted text-lg leading-[1.8] mb-8 max-w-lg">
              We're looking for rheumatologists, engineers, designers, and operators who believe healthcare can work better. Remote-first, competitive compensation, and the chance to build something patients actually need.
            </p>
            <div className="space-y-4 mb-10">
              {[
                { title: "Staff Rheumatologist", location: "Remote (US)" },
                { title: "Senior Software Engineer", location: "Remote" },
                { title: "Clinical Operations Lead", location: "Boston / Remote" },
                { title: "Patient Experience Designer", location: "Remote" },
              ].map((job) => (
                <a
                  key={job.title}
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-border/40 group hover:border-navy-deep/20 transition-colors"
                >
                  <div>
                    <span className="font-semibold text-[16px] group-hover:text-rheuma-blue transition-colors">{job.title}</span>
                    <span className="block text-navy-muted text-sm mt-0.5">{job.location}</span>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-navy-muted/30 group-hover:text-navy-deep group-hover:translate-x-1 transition-all">
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>
            <Link
              to="/"
              className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
            >
              View all open positions →
            </Link>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 hidden lg:block">
            <div
              className="aspect-[16/10] overflow-hidden bg-slate-100 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-consult.jpg')" }}
            />
          </div>
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
          We'd love to{" "}
          <span className="italic font-normal">hear from you</span>
        </h2>
        <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg mx-auto">
          Whether you're a patient, a provider, an employer, or just curious — we're always happy to talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-navy-deep hover:bg-navy-deep/90 text-white px-10 py-4 rounded-full font-semibold text-[15px] transition-colors"
          >
            Get in Touch →
          </Link>
          <Link
            to="/our-approach"
            className="text-navy-deep font-semibold text-[15px] underline decoration-primary decoration-2 underline-offset-4 hover:decoration-navy-deep transition-colors"
          >
            See our approach
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
