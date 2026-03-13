import { useParams, Link } from "react-router-dom"
import { useState, useRef } from "react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import specialists from "../data/specialists"

function DoctorProfile() {
  const { id } = useParams()
  const doctor = specialists.find((s) => s.id === Number(id))
  const [openSection, setOpenSection] = useState(null)

  if (!doctor) {
    return (
      <div className="landing-page min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Doctor not found</h1>
            <Link to="/" className="text-teal-soft font-semibold underline">Back to home</Link>
          </div>
        </div>
        <BriefingFooter />
      </div>
    )
  }

  const toggle = (section) => setOpenSection(openSection === section ? null : section)

  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative" style={{ backgroundColor: "#182439", paddingBottom: "0" }}>
          <div className="max-w-7xl mx-auto px-6 pt-6 md:pt-10">
            <div className="grid lg:grid-cols-[1fr_400px] gap-10 md:gap-16 items-start">
              <div style={{ paddingBottom: "16px" }}>
                <h1
                  style={{ fontFamily: "loretta, serif", fontWeight: 400, fontSize: "68px", lineHeight: "66px", letterSpacing: "-1px", marginBottom: "16px", color: "#ffffff" }}
                >
                  {doctor.name}
                </h1>
                <p style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "32px", color: "#ffffff", marginBottom: "8px" }}>
                  {doctor.title}
                </p>
                <p style={{ fontFamily: "usual, Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "32px", color: "rgba(255,255,255,0.55)" }}>{doctor.qualification}</p>

                <div className="flex flex-wrap items-center gap-4 mt-6 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {doctor.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {doctor.experience}
                  </span>
                </div>

              </div>

              {/* Doctor Image - desktop: overflows bottom */}
              <div className="hidden lg:block relative" style={{ marginBottom: "-120px", zIndex: 10 }}>
                <div className="rounded-lg overflow-hidden bg-[#f0cfc4]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Doctor Image - inside dark section, overflows into white */}
            <div className="lg:hidden relative" style={{ zIndex: 10, marginBottom: "-80px" }}>
              <div className="rounded-lg overflow-hidden bg-[#f0cfc4] max-w-[280px] mx-auto">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Wavy Bottom */}
          <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "50px" }}>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* Spacer for mobile image overflow */}
        <div className="lg:hidden" style={{ height: "90px" }} />

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-10 md:py-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 md:gap-16">
            <div>
              {/* Overview */}
              <h2 className="text-2xl md:text-3xl tracking-tight text-navy-deep" style={{ fontFamily: "var(--font-display)", marginBottom: "24px" }}>
                Overview
              </h2>
              <div className="flex flex-col" style={{ gap: "16px" }}>
                {doctor.overview.map((para, i) => (
                  <p key={i} className="text-navy-deep text-[15px] leading-[1.75]" style={{ letterSpacing: "0.1px" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Collapsible Sections */}
              <div className="mt-12 md:mt-16 space-y-0 border-t border-border">
                <AccordionSection
                  title="Field of Expertise"
                  isOpen={openSection === "expertise"}
                  onToggle={() => toggle("expertise")}
                >
                  <ul className="space-y-2">
                    {doctor.expertise.map((item, i) => (
                      <li key={i} className="text-navy-deep text-[15px] leading-relaxed flex items-start gap-3">
                        <span className="text-teal-soft mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>

                <AccordionSection
                  title="Education"
                  isOpen={openSection === "education"}
                  onToggle={() => toggle("education")}
                >
                  <ul className="space-y-2">
                    {doctor.education.map((item, i) => (
                      <li key={i} className="text-navy-deep text-[15px] leading-relaxed flex items-start gap-3">
                        <span className="text-navy-muted">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>

                <AccordionSection
                  title="Languages Spoken"
                  isOpen={openSection === "languages"}
                  onToggle={() => toggle("languages")}
                >
                  <div className="flex flex-wrap gap-3">
                    {doctor.languages.map((lang, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-ghost text-navy-deep text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection
                  title="Awards & Achievements"
                  isOpen={openSection === "awards"}
                  onToggle={() => toggle("awards")}
                >
                  <ul className="space-y-2">
                    {doctor.awards.map((item, i) => (
                      <li key={i} className="text-navy-deep text-[15px] leading-relaxed flex items-start gap-3">
                        <span className="text-amber-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>

                <AccordionSection
                  title="Talks & Publications"
                  isOpen={openSection === "publications"}
                  onToggle={() => toggle("publications")}
                >
                  <ul className="space-y-3">
                    {doctor.publications.map((item, i) => (
                      <li key={i} className="text-navy-deep text-[15px] leading-relaxed flex items-start gap-3">
                        <span className="text-navy-muted font-semibold shrink-0">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info */}
                <div className="bg-ghost p-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ecfdf5] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-teal-soft" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-deep leading-tight">Board Certified</p>
                      <p className="text-xs text-navy-muted mt-1">Rheumatology & Clinical Immunology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-deep leading-tight">{doctor.experience}</p>
                      <p className="text-xs text-navy-muted mt-1">Clinical Experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#fef3c7] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-deep leading-tight">{doctor.languages.length} Languages</p>
                      <p className="text-xs text-navy-muted mt-1">{doctor.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Google Reviews Section */}
        <GoogleReviews />

        {/* Patient Stories Section */}
        <PatientStories />

        {/* FAQs Section */}
        <section style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-16 md:pt-6 md:pb-24">
            <h2
              className="text-3xl md:text-4xl tracking-tight text-navy-deep"
              style={{ fontFamily: "var(--font-display)", marginBottom: "40px" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-0 border-t border-border">
              {faqs.map((faq, i) => (
                <AccordionSection
                  key={i}
                  title={faq.question}
                  isOpen={openSection === `faq-${i}`}
                  onToggle={() => toggle(`faq-${i}`)}
                  small
                >
                  <p className="text-navy-deep text-[15px] leading-[1.75]" style={{ letterSpacing: "0.1px" }}>
                    {faq.answer}
                  </p>
                </AccordionSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BriefingFooter />
    </div>
  )
}

const faqs = [
  {
    question: "Why do patients visit Dr. Raghavendra H?",
    answer: "Patients visit Dr. Raghavendra H, a leading Consultant - Rheumatologist at Manipal Hospitals Hebbal - Bengaluru, for expert care and advanced treatments. Known for accurate diagnoses and patient centric care, Dr. Raghavendra H is a trusted choice for exceptional medical support.",
  },
  {
    question: "What does Dr. Raghavendra H specialise in?",
    answer: "Dr. Raghavendra H specialises in managing Rheumatoid Arthritis, Spondyloarthritis, Psoriatic Arthritis, Vasculitis, SLE and Other Systemic Autoimmune Illness, and Intra-Articular Injections.",
  },
  {
    question: "How can I book an appointment with Dr. Raghavendra H?",
    answer: "To book an appointment with Dr. Raghavendra H at Manipal Hospitals Hebbal - Bengaluru, please call 1800 102 5555. Our dedicated team will assist you in scheduling a convenient time for your consultation.",
  },
  {
    question: "What are Dr. Raghavendra H's years of experience and qualifications?",
    answer: "Dr. Raghavendra H has extensive experience and qualifications in Rheumatology at Manipal Hospitals Hebbal - Bengaluru. With expertise spanning MBBS, MD (Internal Medicine), DM (Rheumatology & Clinical Immunology), bringing a wealth of knowledge and skill to their practice, ensuring top-notch patient care. Dr. Raghavendra H has also published numerous articles and publications in the field of Rheumatology.",
  },
  {
    question: "What should I bring to my first appointment with Dr. Raghavendra H?",
    answer: "For your initial appointment with Dr. Raghavendra H, please bring any relevant medical records, including previous imaging scans, laboratory results, and medication lists. It's important to provide a detailed medical history and any pertinent information about your condition. If you have insurance, please bring your insurance card and any necessary referral documents. This will help facilitate a comprehensive evaluation and discussion during your appointment.",
  },
]

const googleReviews = [
  {
    name: "Roohina Parveen",
    rating: 5,
    time: "a month ago",
    text: "I am truly grateful to you, Dr. Raghvendra. Your patience, understanding, and dedication as a rheumatologist have brought me comfort and confidence during every step of my treatment. Thank you for always going above and beyond.",
  },
  {
    name: "Cecilia Mary",
    rating: 5,
    time: "9 months ago",
    text: "Dr. Raghavendra good doctor who has diagnosed the disease and gives good medications. We are so happy in his service and he is so dedicated to his work.. he is so humble and saw the patient so patiently heard what all the problems and sorted out with good medications..",
  },
  {
    name: "Moksha Mahesh",
    rating: 5,
    time: "10 months ago",
    text: "Very knowledgeable and caring doctor. He explained my condition in detail and made sure I understood every aspect of the treatment plan. Highly recommended for anyone with autoimmune issues.",
  },
  {
    name: "Thirumurugan B",
    rating: 5,
    time: "9 months ago",
    text: "Dr. Raghavendra is an excellent rheumatologist. He took time to listen to all my concerns and prescribed the right treatment. My joint pain has reduced significantly after following his advice.",
  },
  {
    name: "imran rocker",
    rating: 4,
    time: "a year ago",
    text: "Good experience overall. The doctor is very thorough in his examination and gives proper attention to each patient. Would have appreciated a shorter wait time though.",
  },
  {
    name: "Sunitha Rao",
    rating: 5,
    time: "6 months ago",
    text: "I was suffering from severe rheumatoid arthritis for years. Dr. Raghavendra changed my medication plan and within 3 months I could see a huge improvement. He is a blessing for patients like me.",
  },
  {
    name: "Arjun Krishnamurthy",
    rating: 5,
    time: "4 months ago",
    text: "One of the best rheumatologists in Bengaluru. Very patient, listens carefully, and explains things in simple language. My mother's SLE condition is now well managed under his care.",
  },
  {
    name: "Fatima Begum",
    rating: 5,
    time: "3 months ago",
    text: "Dr. Raghavendra diagnosed my psoriatic arthritis when other doctors couldn't figure out what was wrong. He is extremely knowledgeable and genuinely cares about his patients' wellbeing.",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    time: "5 months ago",
    text: "Very impressed with the level of care. He doesn't rush through appointments and makes sure all your doubts are cleared. The treatment he prescribed has been very effective for my condition.",
  },
  {
    name: "Priya Nair",
    rating: 4,
    time: "7 months ago",
    text: "Good doctor with deep knowledge in rheumatology. He was very detailed in explaining my vasculitis condition and the treatment options available. Feeling much better now.",
  },
  {
    name: "Venkatesh Murthy",
    rating: 5,
    time: "2 months ago",
    text: "Excellent doctor. He identified the root cause of my joint problems quickly and started the right treatment immediately. Very professional and approachable. Highly recommend!",
  },
  {
    name: "Deepa Srinivasan",
    rating: 5,
    time: "8 months ago",
    text: "I traveled from Chennai specifically to consult Dr. Raghavendra for my mother's rheumatoid arthritis. Worth every bit of the journey. His expertise and compassion are unmatched.",
  },
  {
    name: "Naveen Gowda",
    rating: 5,
    time: "11 months ago",
    text: "Dr. Raghavendra is a gem of a doctor. He treated my ankylosing spondylitis with great care. His follow-up calls to check on my progress show how dedicated he is.",
  },
  {
    name: "Amrita Sharma",
    rating: 5,
    time: "a month ago",
    text: "Best rheumatologist I've consulted. He is thorough, empathetic, and very skilled. My lupus flare-ups have reduced dramatically since I started treatment with him.",
  },
  {
    name: "Harish Reddy",
    rating: 4,
    time: "a year ago",
    text: "Consulted for my gout problem. Dr. Raghavendra provided a clear treatment plan and dietary advice. Very satisfied with the results so far.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleReviews() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    const amount = 340
    container.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  const avgRating = (googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length).toFixed(1)

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: "40px" }}>
        <div>
          <div className="flex items-center gap-3" style={{ marginBottom: "12px" }}>
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-navy-deep"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Google Reviews
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={Math.round(parseFloat(avgRating))} />
            <span className="text-sm text-navy-muted">{avgRating} out of 5 · 18 reviews</span>
          </div>
        </div>

        {/* Arrows */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ghost transition-colors"
          >
            <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-ghost transition-colors"
          >
            <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {googleReviews.map((review, i) => (
          <div
            key={i}
            className="shrink-0 w-[300px] md:w-[340px] rounded-2xl bg-ghost p-6 flex flex-col"
          >
            <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
              <div className="w-10 h-10 rounded-full bg-navy-deep flex items-center justify-center text-white text-sm font-semibold shrink-0">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="text-[15px] font-semibold text-navy-deep">{review.name}</p>
                <p className="text-xs text-navy-muted">{review.time}</p>
              </div>
            </div>
            <StarRating rating={review.rating} />
            {review.text && (
              <p className="text-navy-deep text-[14px] leading-[1.7] mt-4" style={{ letterSpacing: "0.1px" }}>
                "{review.text}"
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const patientStories = [
  {
    name: "Ramakrishna Kakumani",
    initial: "R",
    verified: true,
    time: "8 months ago",
    visitedFor: null,
    tags: ["Doctor friendliness", "Explanation of the health issue", "Treatment satisfaction", "Value for money", "Wait time"],
    text: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. The doctor used to prescribe heavy medications every month, and eventually, her condition worsened.\n\nWe then came across Dr. Raghavendra H, Rheumatologist (TriLife) through the web. He is very friendly, approachable, and, most importantly, his treatment is highly effective. He focuses on identifying the root cause of the problem and prescribes only minimal medication.\n\nAlthough we are based in Andhra, we travel to Bangalore every three months to consult Dr. Raghavendra H sir. Her symptoms are now under control, and we are very happy with the treatment she is receiving.",
  },
  {
    name: "T V Joy",
    initial: "T",
    verified: true,
    time: "3 years ago",
    visitedFor: null,
    tags: [],
    text: "First thing I want to say is that Dr. Raghavendra is always approachable, which is not the case with many others. He is the second Doctor I visited for the Arthritis problem of my wife and I am completely satisfied with his way of treatment and interaction with us. Most importantly he is never in a hurry and spend lot of time to comfort the patient, which I couldn't find with the first Doctor, who was never reachable, when she was under acute pain. I strongly recommend Dr. Raghavendra to anyone suffering from Arthritis.",
  },
  {
    name: "Shoma Nair",
    initial: "S",
    verified: true,
    time: "3 years ago",
    visitedFor: null,
    tags: [],
    text: "I have been visiting Dr. Raghavendra for a year now for my mother Arthritis Management and I can easily say, he is one fine doctor in his field. He does thorough examination and is compassionate, and warm towards patients. Not only did he embark on a structured treatment for my mom but also prescribes limited medicines and tests, infact has reduced dosage for my mother every alternate follow-up. Thats the brownie point for any RA patient. He is quite approachable and explains the issue well and the possible side effects before hand. Definitely a \"go-to doctor\" for RA Management.",
  },
  {
    name: "K K Mondal",
    initial: "K",
    verified: true,
    time: "a year ago",
    visitedFor: "Systemic Sclerosis (Scleroderma)",
    tags: [],
    text: "Extremely helpful appointment with Dr Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and subsequent management protocol advise was awesome. Hopefully, she would get well soon. With the first hand experience, we can say that he is an excellent Doctor in the field of rheumatology.",
  },
  {
    name: "Dharmaiah Chowdappa",
    initial: "D",
    verified: true,
    time: "a year ago",
    visitedFor: "Arthritis Management",
    tags: ["Doctor friendliness", "Explanation of the health issue", "Treatment satisfaction", "Value for money"],
    text: "Dr Raghavendra H is a very Good Doctor with immense Knowledge in the field. He is so cordial and friendly. I am highly satisfied with his Treatment and the service is Exemplary.",
  },
  {
    name: "Purushotham",
    initial: "P",
    verified: true,
    time: "a year ago",
    visitedFor: "Rheumatic Arthritis",
    tags: [],
    text: "Very good doctor. My rheumatic arthritis pain reduced 80%. Doctor is very friendly. I like the treatment. Now I am walking without any pain in my joint.",
  },
  {
    name: "Arpita Bhunia",
    initial: "A",
    verified: true,
    time: "2 years ago",
    visitedFor: "Knee Arthritis",
    tags: ["Doctor friendliness", "Explanation of the health issue", "Treatment satisfaction", "Value for money", "Wait time"],
    text: "Our doctor is very friendly and good human being... we are satisfied with Dr. Raghavendra sir... thank you sir.",
  },
  {
    name: "Verified Patient",
    initial: "V",
    verified: true,
    time: "3 years ago",
    visitedFor: "Lupus",
    tags: [],
    text: "It is nice talking to Dr Raghavendra, made patient comfortable to discuss the symptoms. Didn't go to review the blood test reports, rather did the complete physical examination and review all reports to explain the situation very logically and in simple language.\n\nI would definitely recommend this doctor for others and best for those who reside in North Bengaluru.",
  },
]

function PatientStories() {
  const storiesScrollRef = useRef(null)
  const [selectedStory, setSelectedStory] = useState(null)

  const scrollStories = (dir) => {
    const container = storiesScrollRef.current
    if (!container) return
    const amount = 380
    container.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="bg-ghost">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" style={{ marginBottom: "40px" }}>
          <div>
            <h2
              className="text-3xl md:text-4xl tracking-tight text-navy-deep"
              style={{ fontFamily: "var(--font-display)", marginBottom: "8px" }}
            >
              Patient Stories
            </h2>
            <p className="text-sm text-navy-muted">
              Real experiences from {patientStories.length} verified patients · 100% recommend ·{" "}
              <a
                href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-soft font-medium hover:underline"
              >
                Source: Practo
              </a>
            </p>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollStories("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scrollStories("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-white transition-colors"
            >
              <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={storiesScrollRef}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {patientStories.map((story, i) => (
            <div
              key={i}
              className="shrink-0 w-[85vw] max-w-[380px] bg-white rounded-2xl p-6 flex flex-col"
            >
              {/* Quote icon */}
              <svg className="w-7 h-7 text-teal-soft/30 shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ marginBottom: "16px" }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              {/* Review text - clamped */}
              <p className="text-navy-deep text-[14px] leading-[1.75] flex-1" style={{ letterSpacing: "0.1px", marginBottom: "12px", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {story.text}
              </p>
              <button
                onClick={() => setSelectedStory(story)}
                className="text-teal-soft text-[13px] font-semibold hover:underline text-left"
                style={{ marginBottom: "16px" }}
              >
                Read more
              </button>

              {/* Divider */}
              <div className="border-t border-border" style={{ marginBottom: "16px" }} />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: `hsl(${story.name.length * 37 % 360}, 45%, 55%)` }}>
                  {story.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[13px] font-semibold text-navy-deep truncate">{story.name}</p>
                    {story.verified && (
                      <svg className="w-3.5 h-3.5 text-[#2563eb] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-navy-muted">
                    <span>{story.time}</span>
                    {story.visitedFor && (
                      <>
                        <span className="w-0.5 h-0.5 rounded-full bg-navy-muted/40" />
                        <span className="truncate">{story.visitedFor}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Modal */}
        {selectedStory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setSelectedStory(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
            <div
              className="relative bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 animate-[slideUp_0.3s_ease-out]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ghost flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Author */}
              <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: `hsl(${selectedStory.name.length * 37 % 360}, 45%, 55%)` }}>
                  {selectedStory.initial}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[15px] font-semibold text-navy-deep">{selectedStory.name}</p>
                    {selectedStory.verified && (
                      <svg className="w-4 h-4 text-[#2563eb] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy-muted">
                    <span>{selectedStory.time}</span>
                    {selectedStory.visitedFor && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-navy-muted/40" />
                        <span>{selectedStory.visitedFor}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {selectedStory.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "20px" }}>
                  {selectedStory.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1.5 rounded-full text-[11px] font-medium" style={{ backgroundColor: "#ecfdf5", color: "#047857" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Full text */}
              <p className="text-navy-deep text-[15px] leading-[1.8] whitespace-pre-line" style={{ letterSpacing: "0.1px" }}>
                {selectedStory.text}
              </p>

              {/* Source */}
              <div className="border-t border-border mt-6 pt-4">
                <a
                  href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-soft text-[13px] font-medium hover:underline"
                >
                  View on Practo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function AccordionSection({ title, isOpen, onToggle, children, small }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left gap-4"
      >
        <h3
          className={`${small ? "text-[16px] md:text-[18px]" : "text-xl md:text-2xl"} tracking-tight text-navy-deep`}
          style={{ fontFamily: small ? "var(--font-base)" : "var(--font-display)", fontWeight: small ? 600 : 400 }}
        >
          {title}
        </h3>
        <svg
          className={`w-5 h-5 text-navy-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          {children}
        </div>
      )}
    </div>
  )
}

export default DoctorProfile
