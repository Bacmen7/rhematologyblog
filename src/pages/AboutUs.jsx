import { Link } from "react-router-dom"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

function AboutUs() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <HeroSection />
        <CeoQuoteSection />
        <PersonalStorySection />
        <MissionSection />
        <CoreValuesSection />
        <LeadershipTeamSection />
        <MedicalAdvisorsSection />
        <PartnersSection />
        <FeaturedInSection />
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
          <div className="lg:col-span-6 py-20 lg:py-28">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/30" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Vision</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight mb-8">
              A world where people live free from autoimmune suffering
            </h1>
            <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg">
              We're on a mission to free people from the burden of autoimmune conditions by redesigning how specialist care is delivered.
            </p>
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

/* ───────── 2. CEO QUOTE ───────── */
function CeoQuoteSection() {
  return (
    <section className="custom-approach-section bg-navy-deep text-white relative overflow-hidden">
      {/* Top wave */}
      <svg className="absolute top-0 left-0 w-full" style={{ height: "40px", transform: "translateY(-99%)" }} preserveAspectRatio="none" viewBox="0 0 1440 32" fill="none">
        <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#182439" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="w-full md:w-5/12">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/specialist-1.jpg"
                alt="Dr. Amara Osei"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <blockquote className="text-3xl md:text-[2.5rem] lg:text-[2.8rem] leading-[1.25] font-normal mb-8" style={{ fontFamily: "var(--font-base)" }}>
              "From the beginning, our vision has been to scale access to care that millions of Americans need — bringing center-of-excellence quality rheumatology care to them, wherever they are."
            </blockquote>
            <cite className="not-italic flex items-center gap-3 font-semibold text-[15px]">
              <span className="w-6 h-[1px] bg-primary block" />
              Dr. Amara Osei, Co-Founder & CEO
            </cite>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>
    </section>
  )
}

/* ───────── 3. WHY REDESIGNING CARE IS PERSONAL ───────── */
function PersonalStorySection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-10">
              Why redesigning rheumatology care is personal.
            </h2>
            <div className="space-y-6 text-navy-muted text-lg leading-[1.8]">
              <p>
                In 2019, our co-founder Dr. Amara Osei was diagnosed with rheumatoid arthritis after waiting nine months for a specialist appointment. By the time she saw a rheumatologist, irreversible joint damage had already set in — damage that could have been prevented with earlier intervention.
              </p>
              <p>
                As she unpacked what had happened and why she hadn't gotten the care she needed in those critical early months, her passion for solving systemic problems in rheumatology was ignited. This passion and accountability to patients shaped Rheuma's path to reinvent the autoimmune patient experience, and democratize access to proven multi-disciplinary care — something that had eluded her own journey.
              </p>
              <p>
                Since 2021, Rheuma has been the industry leader in virtual-first rheumatology, gaining national recognition for evidence-based care through proven outcomes. But we measure success with every patient who tells us we've changed their life.
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/hero-consult.jpg"
                alt="Why redesigning care is personal"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── 4. MISSION ───────── */
function MissionSection() {
  return (
    <section className="py-24 md:py-36 bg-ghost">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Close the gap between{" "}
              diagnosis and relief
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

/* ───────── 5. CORE VALUES (6 values with organic blob shapes) ───────── */
function CoreValuesSection() {
  const valuesData = [
    {
      title: "Urgency over bureaucracy",
      desc: "Every week of delay can mean permanent damage",
      icon: "speed",
      path: "M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z",
    },
    {
      title: "Patients are partners",
      desc: "Treatment plans built with patients, not for them",
      icon: "diversity_3",
      path: "M55.1256 5.62319C69.5284 18.4233 75.3527 39.7894 70.0964 55.9976C65.1006 71.3957 49.3485 76.6043 33.3275 72.8197C18.4814 69.3135 4.89883 56.0577 0.773067 39.6249C-2.87611 25.0844 7.0102 15.5753 17.3399 9.11354C28.7557 1.97144 42.7234 -5.39849 55.1256 5.62319Z",
    },
    {
      title: "Measure everything",
      desc: "Quantifiable metrics over subjective impressions",
      icon: "auto_graph",
      path: "M61.2722 61.651C48.113 74.675 28.0401 77.5078 13.8247 69.6181C0.313371 62.1241 -2.78863 44.9948 2.32593 28.9416C7.06625 14.0642 20.5554 1.95861 35.9545 0.146643C49.5794 -1.45508 57.2138 10.23 62.0234 21.9179C67.3404 34.8367 72.6018 50.4362 61.2694 61.6482L61.2722 61.651Z",
    },
    {
      title: "Stay uncomfortable",
      desc: "Question every process that doesn't serve the patient",
      icon: "lightbulb",
      path: "M6.18816 64.3795C-3.39958 48.4772 -1.49202 26.3721 9.46198 11.9611C19.8727 -1.73098 37.2185 -2.93384 51.6141 4.63228C64.9551 11.6447 73.574 27.7867 71.7584 44.7011C70.1524 59.6658 57.0392 66.4641 44.5771 70.2053C30.8047 74.3397 14.4416 78.0716 6.18816 64.3795Z",
    },
    {
      title: "Cultivate strong relationships",
      desc: "Between patients, providers, and each other",
      icon: "group",
      path: "M73.3102 21.5931C76.7302 40.5231 67.1102 60.6731 51.6902 69.8631C37.0302 78.6031 20.2602 72.7031 9.36024 59.7131C-0.739762 47.6731 -3.15976 28.9031 4.53024 13.6331C11.3402 0.123064 26.1102 -0.996936 39.1802 0.513064C53.6302 2.18306 70.3702 5.28306 73.3102 21.5831V21.5931Z",
    },
    {
      title: "Thrive on diversity",
      desc: "An inclusive culture that reflects our patients",
      icon: "emoji_people",
      path: "M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z",
    },
  ]

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Top wave */}
      <svg className="absolute top-0 left-0 w-full" style={{ height: "80px", transform: "translateY(-99%)" }} preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
        <path d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z" fill="#f8fafd" />
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Our Values</span>
            <span className="h-px w-8 bg-navy-deep/20" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-4">
            What drives every decision we make
          </h2>
          <p className="text-navy-muted text-lg max-w-2xl mx-auto">
            These six values give us the courage to do the right thing for our patients, partners, and each other, every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((val, idx) => (
            <div key={idx} className="bg-white p-10 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <div className="relative w-[70px] h-[74px] flex items-center justify-center mb-5">
                <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d={val.path} fill="#e3efff" />
                </svg>
                <span className="material-symbols-outlined relative z-10 text-[28px] text-navy-deep/70">{val.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight">{val.title}</h3>
              <p className="text-sm text-navy-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 6. LEADERSHIP TEAM (horizontal scroll) ───────── */
function LeadershipTeamSection() {
  const leadershipData = [
    { name: "Dr. Amara Osei", role: "Co-Founder & CEO", badge: "MD, MBA", image: "/images/specialist-1.jpg", bg: "bg-sky-soft/40" },
    { name: "Raj Patel", role: "Co-Founder & CTO", badge: "MS CS, Stanford", image: "/images/specialist-2.jpg", bg: "bg-accent/30" },
    { name: "Dr. Elena Vasquez", role: "Chief Medical Officer", badge: "MD, FACR", image: "/images/specialist-3.jpg", bg: "bg-primary/20" },
    { name: "David Chen", role: "Chief Financial Officer", badge: "CPA, MBA", image: "/images/hero-doctor.jpg", bg: "bg-sky-soft/40" },
    { name: "Sarah Mitchell", role: "Chief Product Officer", badge: "MS HCI", image: "/images/hero-consult.jpg", bg: "bg-[#485c6a]/20" },
  ]

  return (
    <section className="py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Leadership team
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-navy-muted text-lg leading-relaxed max-w-3xl">
              Our expert rheumatologists, engineers, and operators are{" "}
              <span className="bg-accent/40 px-1 rounded-sm">leaders in their fields</span>
              , with deep experience in autoimmune care, health technology, and patient experience. They've lived the problems they're solving.
            </p>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          className="flex overflow-x-auto gap-6 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {leadershipData.map((member, idx) => (
            <div key={idx} className="flex-none w-[280px] group cursor-pointer">
              <div className={`${member.bg} w-full aspect-square overflow-hidden mb-4 relative flex items-end justify-center`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 bg-white/60 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold text-navy-deep">
                  {member.badge}
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{member.name}</h3>
              <p className="text-sm text-navy-muted mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 7. MEDICAL ADVISORS ───────── */
function MedicalAdvisorsSection() {
  const advisorsData = [
    { name: "Dr. James Richardson", desc: "ACR President (2024), renowned RA specialist and clinical trial leader" },
    { name: "Dr. Maria Santos", desc: "Distinguished rheumatology researcher, Past ACR Board Member" },
    { name: "Dr. Kevin Park", desc: "Lupus & Vasculitis Expert, Associate Editor, Arthritis & Rheumatology" },
    { name: "Dr. Lisa Huang", desc: "Inflammatory Arthritis Expert, Clinical Professor at Stanford Medicine" },
  ]

  return (
    <section className="bg-ghost py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/3">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-navy-deep/20" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Advisors</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Medical advisors
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-navy-muted text-lg leading-relaxed max-w-3xl">
              Our advisory board includes{" "}
              <span className="bg-accent/40 px-1 rounded-sm">leaders in their fields</span>
              , with advanced expertise in rheumatology, autoimmune research, and clinical innovation. Their guidance shapes our approach to evidence-based care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisorsData.map((advisor, idx) => (
            <div key={idx} className="bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
              <div className="w-10 h-10 rounded-full bg-sky-faint flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[20px] text-navy-deep/40">school</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 tracking-tight">{advisor.name}</h3>
              <p className="text-sm text-navy-muted leading-relaxed">{advisor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 8. PARTNERS & AFFILIATIONS ───────── */
function PartnersSection() {
  return (
    <section className="border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-navy-deep/20" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Affiliations</span>
            <span className="h-px w-8 bg-navy-deep/20" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Trusted by the institutions{" "}
            that matter
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

/* ───────── 11. FEATURED IN (Logo Garden) ───────── */
function FeaturedInSection() {
  return (
    <section className="bg-navy-deep py-24 md:py-32 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Featured In</span>
          <span className="h-px w-8 bg-white/20" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mt-14">
          {[
            "STAT News",
            "Modern Healthcare",
            "Fierce Healthcare",
            "Journal of Rheumatology",
            "Digital Health 150",
          ].map((name, i) => (
            <div key={i} className="text-white/30 text-lg md:text-xl font-semibold tracking-wide hover:text-white/60 transition-colors cursor-default select-none">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 12. PRESS & RECOGNITION ───────── */
function PressSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">In the Press</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
            What others are saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30">
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
            <div key={t.source} className="bg-ghost p-8 md:p-10 flex flex-col">
              <p className="text-[17px] md:text-lg leading-[1.7] text-navy-muted mb-8 flex-1">
                "{t.quote}"
              </p>
              <div>
                <span className="block font-semibold text-navy-deep">{t.source}</span>
                <span className="text-sm text-navy-muted/60">{t.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── 13. CAREERS CTA ───────── */
function CareersSection() {
  return (
    <section className="py-24 md:py-36 bg-ghost">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-teal-soft">Careers</span>
            </div>
            <h2 className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Help us build the future of{" "}
              rheumatology
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

/* ───────── 14. FINAL CTA ───────── */
function CtaSection() {
  return (
    <section
      className="custom-approach-section relative overflow-hidden py-28 md:py-40"
      style={{
        background: "radial-gradient(ellipse at 30% 50%, #c7dfff 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, #b1efec 0%, transparent 45%), #f8fafd",
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
          Interested in Rheuma?
        </h2>
        <p className="text-xl text-navy-muted leading-relaxed mb-10 max-w-lg mx-auto">
          We're always looking for people who share our passion for redesigning autoimmune care — the way it should be.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-navy-deep hover:bg-navy-deep/90 text-white px-10 py-4 rounded-full font-semibold text-[15px] transition-colors"
          >
            Get Started →
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
