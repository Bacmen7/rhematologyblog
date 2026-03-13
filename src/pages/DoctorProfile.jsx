import { useParams, Link } from "react-router-dom"
import { useState, useRef } from "react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"
import specialists from "../data/specialists"

function DoctorProfile() {
  const { id } = useParams()
  const doctor = specialists.find((s) => s.id === Number(id))
  const [activeTab, setActiveTab] = useState("overview")
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

  const scrollToSection = (tabId) => {
    setActiveTab(tabId)
    const element = document.getElementById(tabId)
    if (element) {
      const offset = 120
      const pos = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: pos - offset, behavior: "smooth" })
    }
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "background", label: "Background" },
    { id: "reviews", label: "Reviews" },
    { id: "clinic", label: "Clinic" },
  ]

  return (
    <div className="landing-page min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Header + Gallery + Tabs section */}
        <div className="bg-[#182439]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-14 lg:pt-16">

          {/* Doctor Header */}
          <div style={{ marginBottom: "24px", marginTop: "16px" }} className="sm:mt-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div>
                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(42px, 5vw, 70px)", lineHeight: "72px", color: "#ffffff", marginBottom: "6px" }}>
                  {doctor.name}
                </h1>
                <p style={{ fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "clamp(14px, 2.5vw, 20px)", lineHeight: "1.4", marginBottom: "12px", color: "rgba(255,255,255,0.7)" }}>
                  MBBS, MD - General Medicine, DM - Clinical Immunology and Rheumatology
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "clamp(12px, 1.5vw, 14px)", lineHeight: "1.4", marginBottom: "8px", color: "rgba(255,255,255,0.85)" }}>
                  <span>Rheumatologist, Nephrologist</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                  <span>14 Years Exp <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>(6 yrs specialist)</span></span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 shrink-0" style={{ color: "rgba(255,255,255,0.85)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Hebbal, Bengaluru
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
        {/* Wavy bottom edge */}
        <svg
          className="w-full h-[30px] sm:h-[60px] md:h-[80px] block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: "#f8fafd" }}
        >
          <path
            d="M0 0H1440V60C1320 100 1140 120 960 110C780 100 600 60 420 50C240 40 120 70 0 90V0Z"
            fill="#182439"
          />
        </svg>
        </div>

          {/* Image Gallery */}
          <div className="bg-[#f8fafd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ paddingTop: "24px", paddingBottom: "8px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3">
            <div className="lg:col-span-7 relative h-[200px] sm:h-[280px] lg:h-[380px] bg-gray-100 overflow-hidden rounded-xl sm:rounded-2xl">
              <img src="/d3.png" alt="Dr. Raghavendra with patient" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 h-[120px] sm:h-[180px] lg:h-[380px]">
              <div className="relative bg-gray-100 overflow-hidden h-full lg:h-[185px] rounded-xl sm:rounded-2xl">
                <img src="/d2.png" alt="Doctor Portrait" className="w-full h-full object-cover object-center" />
              </div>
              <div className="relative bg-gray-100 overflow-hidden h-full lg:h-[185px] rounded-xl sm:rounded-2xl">
                <img src="/d1.png" alt="Dr. Raghavendra H" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
          </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-[#f8fafd]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6" style={{ paddingTop: "24px", paddingBottom: "8px", marginBottom: "16px" }}>
            <div className="flex gap-2 sm:gap-3 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id ? "bg-[#182439] text-white" : "bg-[#EEF2F9] text-gray-500 hover:text-[#182439]"}`}
                  style={{ borderRadius: "25px" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          </div>

        {/* Main Content */}
        <div className="bg-[#f8fafd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">

              {/* Overview */}
              <section id="overview">
                <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "20px" }}>Overview</h2>
                <p className="text-xs sm:text-sm text-gray-500" style={{ marginBottom: "16px" }}>About</p>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-justify sm:text-left" style={{ fontFamily: "var(--font-base)", fontWeight: 300, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>
                  {doctor.overview.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-8" style={{ marginTop: "32px" }}>
                  <div>
                    <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Specializations</h3>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {["Rheumatologist", "Nephrologist"].map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B1EFEC] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Field of Expertise</h3>
                    <ul className="space-y-2 sm:space-y-2.5">
                      {doctor.expertise.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B1EFEC] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Background / Experience */}
              <section id="background">
                <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "20px" }}>Experience & Qualifications</h2>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Education</h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {doctor.education.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 300, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Awards & Achievements</h3>
                  <ul className="space-y-2">
                    {doctor.awards.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 300, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Talks & Publications</h3>
                  <ul className="space-y-2">
                    {doctor.publications.map((item, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-[#182439] rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-sm sm:text-base" style={{ fontFamily: "var(--font-base)", fontWeight: 300, lineHeight: "1.75", color: "rgb(24, 36, 57)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", marginBottom: "12px" }}>Languages Spoken</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.languages.map((lang, i) => (
                      <span key={i} className="text-sm text-gray-600 bg-[#EEF2F9] px-3 py-1.5" style={{ borderRadius: "25px" }}>
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Patient Stories (inline like boss version) */}
              <section id="reviews">
                <div className="flex items-center justify-between" style={{ marginBottom: "20px" }}>
                  <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px" }}>Patient Stories</h2>
                </div>
                <p className="text-sm text-gray-500" style={{ marginBottom: "16px" }}>
                  Real experiences from verified patients ·{" "}
                  <a href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info" target="_blank" rel="noopener noreferrer" className="text-teal-soft font-medium hover:underline">
                    Source: Practo
                  </a>
                </p>
                <PatientStoriesInline />
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Google Reviews */}
              <section>
                <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px" }}>Google Reviews</h2>
                </div>
                <GoogleReviewsInline />
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* FAQs */}
              <section>
                <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(22px, 4vw, 34px)", lineHeight: "1.2", marginBottom: "24px" }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const isOpen = openSection === `faq-${i}`
                    return (
                      <div key={i} className="bg-white overflow-hidden transition-all" style={{ borderRadius: "12px" }}>
                        <button onClick={() => toggle(`faq-${i}`)} className="flex items-center justify-between w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left gap-3">
                          <h3 className="text-sm sm:text-base text-[#182439] leading-snug" style={{ fontFamily: "var(--font-base)", fontWeight: 500 }}>
                            {faq.question}
                          </h3>
                          <span className="w-7 h-7 flex items-center justify-center shrink-0 transition-colors" style={{ borderRadius: "50%", backgroundColor: isOpen ? "#B1EFEC" : "#EEF2F9", color: "#182439", fontSize: "16px", fontWeight: 500 }}>
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>

              <hr className="border-gray-200 my-8 sm:my-10" />

              {/* Clinic Locations */}
              <section id="clinic">
                <h2 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(28px, 4vw, 34px)", lineHeight: "40px", marginBottom: "8px" }}>Clinic Locations</h2>
                <p className="text-gray-500 text-sm sm:text-base" style={{ marginBottom: "24px" }}>Dr. Raghavendra H currently consults at:</p>
                <div className="space-y-4 sm:space-y-5">
                  {[
                    {
                      name: "Manipal Hospital - Hebbal",
                      area: "Hebbal, Bangalore",
                      rating: 3.5,
                      address: "Kirloskar Business Park, Bellary Road, Landmark: Opposite Dairy Form & Near Esteem Mall, Bangalore",
                      timings: [
                        { days: "Mon, Wed, Fri", time: "10:00 AM - 04:00 PM" },
                        { days: "Tue", time: "04:30 PM - 06:30 PM" },
                        { days: "Sat", time: "09:00 AM - 10:30 AM" },
                      ],
                      fee: "₹1190",
                    },
                    {
                      name: "Manipal Hospital - Yelahanka",
                      area: "Yelahanka, Bangalore",
                      rating: 5.0,
                      address: "Sy Number 23/3, Venkatala Village, Landmark: Next to Brigade Honda Showroom, Bangalore",
                      timings: [
                        { days: "Mon, Wed, Fri", time: "10:00 AM - 12:00 PM" },
                      ],
                      fee: "₹1200",
                    },
                    {
                      name: "Trilife Hospital - Kalyan Nagar",
                      area: "Kalyan Nagar, Bangalore",
                      rating: 4.0,
                      address: "216, 7th Main, 80 Feet Road, 1st Block, HRBR Layout, Landmark: Near Om Shakti Temple, Bangalore",
                      timings: [
                        { days: "Tue, Thu, Sat", time: "10:00 AM - 02:00 PM" },
                      ],
                      fee: "₹1200",
                    },
                  ].map((loc, idx) => {
                    const isClinicOpen = openSection === `clinic-${idx}`
                    return (
                    <div key={idx} className="border border-gray-200 bg-white overflow-hidden" style={{ borderRadius: "16px" }}>
                      {/* Clickable header */}
                      <button onClick={() => toggle(`clinic-${idx}`)} className="w-full p-4 sm:p-5 text-left">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#182439", marginBottom: "2px" }}>{loc.name}</h3>
                            <p className="text-gray-500" style={{ fontFamily: "var(--font-base)", fontSize: "13px" }}>{loc.area}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-center gap-1 bg-green-50 px-2 py-1" style={{ borderRadius: "8px" }}>
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-green-700 text-xs font-semibold">{loc.rating}</span>
                            </div>
                            <svg className={`w-4 h-4 text-gray-400 transition-transform ${isClinicOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>

                      {/* Collapsible content */}
                      {isClinicOpen && (
                        <>
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <p className="text-gray-500" style={{ fontFamily: "var(--font-base)", fontWeight: 300, fontSize: "13px", lineHeight: "20px", marginBottom: "12px" }}>{loc.address}</p>

                          <a href={`https://www.google.com/maps/search/${encodeURIComponent(loc.name + ", Bangalore")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#182439] text-xs sm:text-sm font-medium hover:underline" style={{ marginBottom: "16px" }}>
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Get Directions
                          </a>

                          <div className="border-t border-gray-100" style={{ paddingTop: "12px" }}>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-2 sm:gap-x-6 sm:gap-y-1.5">
                              {loc.timings.map((t, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                                  <span className="text-[#182439] font-medium" style={{ minWidth: "90px" }}>{t.days}</span>
                                  <span className="text-gray-500">{t.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 px-4 sm:px-5 py-3 flex items-center justify-between bg-[#f8fafb]">
                          <span style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "16px", color: "#182439" }}>{loc.fee}</span>
                          <a href="#" className="text-xs sm:text-sm font-semibold text-white px-4 py-2 transition-colors hover:opacity-90" style={{ backgroundColor: "#182439", borderRadius: "25px" }}>
                            Book Appointment
                          </a>
                        </div>
                        </>
                      )}
                    </div>
                    )
                  })}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Desktop sidebar - sticky with image */}
              <div className="hidden lg:block sticky top-24">
                <div className="overflow-hidden bg-white" style={{ borderRadius: "6px" }}>
                  {/* Image with gradient bg */}
                  <div className="relative w-full" style={{ height: "280px", background: "linear-gradient(135deg, #D4F3F2 0%, #e8f4f8 50%, #EEF2F9 100%)" }}>
                    <img src="/docter.png" alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                  </div>
                  {/* Info */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-[#182439]" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "24px", lineHeight: "1.2", marginBottom: "6px" }}>{doctor.name}</h3>
                    <p style={{ fontFamily: "var(--font-base)", fontWeight: 500, fontSize: "13px", color: "#5a6577", marginBottom: "16px" }}>Rheumatologist, Nephrologist</p>

                    <div className="space-y-3" style={{ marginBottom: "20px" }}>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-[#182439] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#182439" }}><span style={{ fontWeight: 600 }}>14 Years</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Experience</span></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-[#182439] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "13px", color: "#182439" }}><span style={{ fontWeight: 600 }}>Hebbal,</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Bengaluru</span></span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <svg className="w-[16px] h-[16px] text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Verified Profile</span>
                      </div>
                    </div>

                    <a href="#" className="block w-full py-2.5 bg-[#B1EFEC] text-[#182439] text-center hover:bg-[#9ae5e1] transition-colors" style={{ borderRadius: "8px", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "13px" }}>Book Online</a>
                  </div>
                </div>
              </div>

              {/* Mobile sidebar - simplified card */}
              <div className="lg:hidden">
                <div className="overflow-hidden bg-white" style={{ borderRadius: "6px" }}>
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, #D4F3F2 0%, #e8f4f8 50%, #EEF2F9 100%)" }}>
                      <img src="/docter.png" alt={doctor.name} className="w-full h-full object-contain object-bottom" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#182439] truncate" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "18px", lineHeight: "1.2", marginBottom: "4px" }}>{doctor.name}</h3>
                      <p style={{ fontFamily: "var(--font-base)", fontWeight: 500, fontSize: "12px", color: "#5a6577", marginBottom: "8px" }}>Rheumatologist, Nephrologist</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", color: "#182439" }}><span style={{ fontWeight: 600 }}>14 Years</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Exp</span></span>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "12px", color: "#182439" }}><span style={{ fontWeight: 600 }}>Hebbal,</span> <span style={{ fontWeight: 400, color: "#5a6577" }}>Bengaluru</span></span>
                        <span style={{ fontFamily: "var(--font-base)", fontSize: "11px", fontWeight: 500, color: "#16a34a" }}>Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <a href="#" className="block w-full py-2.5 bg-[#B1EFEC] text-[#182439] text-center hover:bg-[#9ae5e1] transition-colors" style={{ borderRadius: "8px", fontFamily: "var(--font-base)", fontWeight: 700, fontSize: "13px" }}>Book Online</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Book an Appointment CTA */}
      <section className="w-full flex flex-col overflow-visible" style={{ backgroundColor: "#f8fafd" }}>
        {/* Wave SVG */}
        <svg
          className="w-full h-[32px] sm:h-[90px] md:h-[120px] text-[#142131] block"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M902.287 110.844C616.272 102.591 308.233 0.726051 45.0151 80.1802C29.7923 84.7785 14.8114 90.0303 0 95.8629V120H1440V0C1273.37 78.0746 1092.39 116.337 902.287 110.844Z"
            fill="currentColor"
          />
        </svg>

        {/* Content */}
        <div className="bg-[#142131] w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24 pt-4 sm:pt-10 text-center flex flex-col items-center">
            <h2
              className="mx-auto max-w-[860px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(24px, 4vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                fontWeight: 400,
                color: "#ffffff",
                marginBottom: "clamp(12px, 3vw, 24px)",
              }}
            >
              Book an Appointment
            </h2>
            <p
              className="max-w-2xl mx-auto text-sm sm:text-base"
              style={{
                fontFamily: "var(--font-base)",
                fontWeight: 300,
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "clamp(20px, 4vw, 40px)",
              }}
            >
              Start your journey to better health with a specialist who understands autoimmune conditions inside-out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="inline-block rounded-full font-semibold text-sm sm:text-[15px] transition-all hover:opacity-90 text-center w-full sm:w-auto"
                style={{ backgroundColor: "#b7efea", color: "#142131", padding: "14px 28px" }}
              >
                Schedule An Appointment
              </a>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm sm:text-[15px] text-gray-100 opacity-90">or</span>
                <a
                  href="tel:+918001025555"
                  className="text-sm sm:text-[15px] font-semibold underline decoration-2 underline-offset-[6px] hover:text-[#b7efea] transition-colors text-white"
                >
                  call 1800 102 5555
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BriefingFooter />
    </div>
  )
}

/* ── Data ── */

const faqs = [
  { question: "Why do patients visit Dr. Raghavendra H?", answer: "Patients visit Dr. Raghavendra H, a leading Consultant - Rheumatologist at Manipal Hospitals Hebbal - Bengaluru, for expert care and advanced treatments. Known for accurate diagnoses and patient centric care, Dr. Raghavendra H is a trusted choice for exceptional medical support." },
  { question: "What does Dr. Raghavendra H specialise in?", answer: "Dr. Raghavendra H specialises in managing Rheumatoid Arthritis, Spondyloarthritis, Psoriatic Arthritis, Vasculitis, SLE and Other Systemic Autoimmune Illness, and Intra-Articular Injections." },
  { question: "How can I book an appointment with Dr. Raghavendra H?", answer: "To book an appointment with Dr. Raghavendra H at Manipal Hospitals Hebbal - Bengaluru, please call 1800 102 5555. Our dedicated team will assist you in scheduling a convenient time for your consultation." },
  { question: "What are Dr. Raghavendra H's years of experience and qualifications?", answer: "Dr. Raghavendra H has extensive experience and qualifications in Rheumatology at Manipal Hospitals Hebbal - Bengaluru. With expertise spanning MBBS, MD (Internal Medicine), DM (Rheumatology & Clinical Immunology), bringing a wealth of knowledge and skill to their practice, ensuring top-notch patient care. Dr. Raghavendra H has also published numerous articles and publications in the field of Rheumatology." },
  { question: "What should I bring to my first appointment with Dr. Raghavendra H?", answer: "For your initial appointment with Dr. Raghavendra H, please bring any relevant medical records, including previous imaging scans, laboratory results, and medication lists. It's important to provide a detailed medical history and any pertinent information about your condition. If you have insurance, please bring your insurance card and any necessary referral documents. This will help facilitate a comprehensive evaluation and discussion during your appointment." },
]

const googleReviews = [
  { name: "Roohina Parveen", rating: 5, time: "a month ago", text: "I am truly grateful to you, Dr. Raghvendra. Your patience, understanding, and dedication as a rheumatologist have brought me comfort and confidence during every step of my treatment. Thank you for always going above and beyond." },
  { name: "Cecilia Mary", rating: 5, time: "9 months ago", text: "Dr. Raghavendra good doctor who has diagnosed the disease and gives good medications. We are so happy in his service and he is so dedicated to his work.. he is so humble and saw the patient so patiently heard what all the problems and sorted out with good medications.." },
  { name: "Moksha Mahesh", rating: 5, time: "10 months ago", text: "Very knowledgeable and caring doctor. He explained my condition in detail and made sure I understood every aspect of the treatment plan. Highly recommended for anyone with autoimmune issues." },
  { name: "Thirumurugan B", rating: 5, time: "9 months ago", text: "Dr. Raghavendra is an excellent rheumatologist. He took time to listen to all my concerns and prescribed the right treatment. My joint pain has reduced significantly after following his advice." },
  { name: "imran rocker", rating: 4, time: "a year ago", text: "Good experience overall. The doctor is very thorough in his examination and gives proper attention to each patient. Would have appreciated a shorter wait time though." },
  { name: "Sunitha Rao", rating: 5, time: "6 months ago", text: "I was suffering from severe rheumatoid arthritis for years. Dr. Raghavendra changed my medication plan and within 3 months I could see a huge improvement. He is a blessing for patients like me." },
  { name: "Arjun Krishnamurthy", rating: 5, time: "4 months ago", text: "One of the best rheumatologists in Bengaluru. Very patient, listens carefully, and explains things in simple language. My mother's SLE condition is now well managed under his care." },
  { name: "Fatima Begum", rating: 5, time: "3 months ago", text: "Dr. Raghavendra diagnosed my psoriatic arthritis when other doctors couldn't figure out what was wrong. He is extremely knowledgeable and genuinely cares about his patients' wellbeing." },
  { name: "Rajesh Kumar", rating: 5, time: "5 months ago", text: "Very impressed with the level of care. He doesn't rush through appointments and makes sure all your doubts are cleared. The treatment he prescribed has been very effective for my condition." },
  { name: "Priya Nair", rating: 4, time: "7 months ago", text: "Good doctor with deep knowledge in rheumatology. He was very detailed in explaining my vasculitis condition and the treatment options available. Feeling much better now." },
  { name: "Venkatesh Murthy", rating: 5, time: "2 months ago", text: "Excellent doctor. He identified the root cause of my joint problems quickly and started the right treatment immediately. Very professional and approachable. Highly recommend!" },
  { name: "Deepa Srinivasan", rating: 5, time: "8 months ago", text: "I traveled from Chennai specifically to consult Dr. Raghavendra for my mother's rheumatoid arthritis. Worth every bit of the journey. His expertise and compassion are unmatched." },
  { name: "Naveen Gowda", rating: 5, time: "11 months ago", text: "Dr. Raghavendra is a gem of a doctor. He treated my ankylosing spondylitis with great care. His follow-up calls to check on my progress show how dedicated he is." },
  { name: "Amrita Sharma", rating: 5, time: "a month ago", text: "Best rheumatologist I've consulted. He is thorough, empathetic, and very skilled. My lupus flare-ups have reduced dramatically since I started treatment with him." },
  { name: "Harish Reddy", rating: 4, time: "a year ago", text: "Consulted for my gout problem. Dr. Raghavendra provided a clear treatment plan and dietary advice. Very satisfied with the results so far." },
]

const patientStories = [
  { name: "Ramakrishna Kakumani", initial: "R", verified: true, time: "8 months ago", visitedFor: null, tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money"], text: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. The doctor used to prescribe heavy medications every month, and eventually, her condition worsened.\n\nWe then came across Dr. Raghavendra H, Rheumatologist (TriLife) through the web. He is very friendly, approachable, and, most importantly, his treatment is highly effective. He focuses on identifying the root cause of the problem and prescribes only minimal medication.\n\nAlthough we are based in Andhra, we travel to Bangalore every three months to consult Dr. Raghavendra H sir. Her symptoms are now under control, and we are very happy with the treatment she is receiving." },
  { name: "T V Joy", initial: "T", verified: true, time: "3 years ago", visitedFor: null, tags: [], text: "First thing I want to say is that Dr. Raghavendra is always approachable, which is not the case with many others. He is the second Doctor I visited for the Arthritis problem of my wife and I am completely satisfied with his way of treatment and interaction with us. Most importantly he is never in a hurry and spend lot of time to comfort the patient." },
  { name: "Shoma Nair", initial: "S", verified: true, time: "3 years ago", visitedFor: null, tags: [], text: "I have been visiting Dr. Raghavendra for a year now for my mother Arthritis Management and I can easily say, he is one fine doctor in his field. He does thorough examination and is compassionate, and warm towards patients." },
  { name: "K K Mondal", initial: "K", verified: true, time: "a year ago", visitedFor: "Systemic Sclerosis", tags: [], text: "Extremely helpful appointment with Dr Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and management protocol advice was awesome." },
  { name: "Dharmaiah Chowdappa", initial: "D", verified: true, time: "a year ago", visitedFor: "Arthritis Management", tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money"], text: "Dr Raghavendra H is a very Good Doctor with immense Knowledge in the field. He is so cordial and friendly. I am highly satisfied with his Treatment and the service is Exemplary." },
  { name: "Purushotham", initial: "P", verified: true, time: "a year ago", visitedFor: "Rheumatic Arthritis", tags: [], text: "Very good doctor. My rheumatic arthritis pain reduced 80%. Doctor is very friendly. I like the treatment. Now I am walking without any pain in my joint." },
  { name: "Arpita Bhunia", initial: "A", verified: true, time: "2 years ago", visitedFor: "Knee Arthritis", tags: ["Doctor friendliness", "Treatment satisfaction", "Value for money", "Wait time"], text: "Our doctor is very friendly and good human being... we are satisfied with Dr. Raghavendra sir... thank you sir." },
  { name: "Verified Patient", initial: "V", verified: true, time: "3 years ago", visitedFor: "Lupus", tags: [], text: "It is nice talking to Dr Raghavendra, made patient comfortable to discuss the symptoms. Didn't go to review the blood test reports, rather did the complete physical examination and review all reports to explain the situation very logically and in simple language.\n\nI would definitely recommend this doctor for others and best for those who reside in North Bengaluru." },
]

/* ── Components ── */

function PatientStoriesInline() {
  const [selectedStory, setSelectedStory] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? patientStories : patientStories.slice(0, 4)

  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        {displayed.map((r, idx) => (
          <div key={idx} className="bg-white p-4 sm:p-5" style={{ borderRadius: "16px" }}>
            <div className="flex items-center gap-2.5 sm:gap-3" style={{ marginBottom: "10px" }}>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 bg-[#EEF2F9] text-[#182439]">{r.initial}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-semibold text-[#182439] text-sm">{r.name}</h4>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs bg-[#B1EFEC] text-[#182439] px-1.5 sm:px-2 py-0.5" style={{ borderRadius: "25px" }}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{r.time}</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1" style={{ marginBottom: "8px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {r.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {r.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-[#EEF2F9] text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            )}
            {r.visitedFor && (
              <div className="inline-block text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full mb-3">Visited for: {r.visitedFor}</div>
            )}
            <p className="text-sm text-gray-600 leading-relaxed" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{r.text}</p>
            <button onClick={() => setSelectedStory(r)} className="text-[#182439] text-sm font-medium hover:underline mt-2">Read more</button>
          </div>
        ))}
      </div>

      {patientStories.length > 4 && (
        <button onClick={() => setShowAll(!showAll)} className="mt-4 text-[#182439] text-sm font-medium hover:underline">
          {showAll ? "Show less" : `Show all stories (${patientStories.length})`}
        </button>
      )}

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-[fadeIn_0.2s_ease-out]" onClick={() => setSelectedStory(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto p-5 sm:p-8 animate-[slideUp_0.3s_ease-out]" style={{ borderRadius: "20px" }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedStory(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 text-[#182439]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-gray-200 text-gray-600 shrink-0">{selectedStory.initial}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-[#182439] text-sm">{selectedStory.name}</h4>
                  {selectedStory.verified && (
                    <span className="inline-flex items-center gap-1 text-xs bg-[#B1EFEC] text-[#182439] px-2 py-0.5" style={{ borderRadius: "25px" }}>Verified</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                  <span>{selectedStory.time}</span>
                  {selectedStory.visitedFor && <span>· Visited for: {selectedStory.visitedFor}</span>}
                </div>
              </div>
            </div>
            {selectedStory.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "16px" }}>
                {selectedStory.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            )}
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selectedStory.text}</p>
            <div className="border-t border-gray-200 mt-6 pt-4">
              <a href="https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info" target="_blank" rel="noopener noreferrer" className="text-teal-soft text-[13px] font-medium hover:underline">View on Practo</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function GoogleReviewsInline() {
  const scrollRef = useRef(null)
  const scroll = (dir) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" })
  }
  const avgRating = (googleReviews.reduce((sum, r) => sum + r.rating, 0) / googleReviews.length).toFixed(1)

  return (
    <>
      <div className="flex items-center gap-2" style={{ marginBottom: "16px" }}>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(parseFloat(avgRating)) ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-500">{avgRating} out of 5 · {googleReviews.length} reviews</span>
      </div>

      <div className="relative">
        <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
          {googleReviews.map((review, i) => (
            <div key={i} className="shrink-0 w-[340px] sm:w-[400px] bg-white p-4 sm:p-5 flex flex-col" style={{ borderRadius: "20px" }}>
              <div className="flex items-center gap-2.5" style={{ marginBottom: "10px" }}>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-semibold shrink-0">{review.name.charAt(0)}</div>
                <p className="text-xs sm:text-sm font-semibold text-[#182439] truncate min-w-0">{review.name}</p>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-2.5 h-2.5 ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap shrink-0 ml-auto">{review.time}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Scroll arrows */}
        <div className="hidden sm:flex items-center gap-2 mt-3">
          <button onClick={() => scroll("left")} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-3.5 h-3.5 text-[#182439]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-3.5 h-3.5 text-[#182439]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

function AccordionSection({ title, isOpen, onToggle, children, small }) {
  return (
    <div className="border-b border-gray-200">
      <button onClick={onToggle} className="flex items-center justify-between w-full py-3 sm:py-4 text-left gap-3 sm:gap-4">
        <h3 className={`${small ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"} text-[#182439] leading-snug`} style={{ fontFamily: small ? "var(--font-base)" : "var(--font-display)", fontWeight: small ? 600 : 400 }}>
          {title}
        </h3>
        <span className="w-5 h-5 flex items-center justify-center text-gray-400 shrink-0 text-lg font-light transition-transform">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <div className="pb-4 sm:pb-5">{children}</div>}
    </div>
  )
}

export default DoctorProfile
