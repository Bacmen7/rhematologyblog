import { useEffect } from "react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const locations = [
  {
    name: "Manipal Hospital - Hebbal",
    area: "Hebbal, Bangalore",
    address: "Kirloskar Business Park, Bellary Road, Landmark: Opposite Dairy Form & Near Esteem Mall, Bangalore",
    phone: "+91 80 2222 4444",
    timings: [
      { days: "Mon, Wed, Fri", time: "10:00 AM – 04:00 PM" },
      { days: "Tue", time: "04:30 PM – 06:30 PM" },
      { days: "Sat", time: "09:00 AM – 10:30 AM" },
    ],
    fee: "₹1190",
    doctor: "Dr. Raghavendra H",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
  {
    name: "Manipal Hospital - Yelahanka",
    area: "Yelahanka, Bangalore",
    address: "Sy Number 23/3, Venkatala Village, Landmark: Next to Brigade Honda Showroom, Bangalore",
    phone: "+91 80 3333 5555",
    timings: [
      { days: "Mon, Wed, Fri", time: "10:00 AM – 12:00 PM" },
    ],
    fee: "₹1200",
    doctor: "Dr. Raghavendra H",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
  {
    name: "Trilife Hospital - Kalyan Nagar",
    area: "Kalyan Nagar, Bangalore",
    address: "216, 7th Main, 80 Feet Road, 1st Block, HRBR Layout, Landmark: Near Om Shakti Temple, Bangalore",
    phone: "+91 80 4444 6666",
    timings: [
      { days: "Tue, Thu, Sat", time: "10:00 AM – 02:00 PM" },
    ],
    fee: "₹1200",
    doctor: "Dr. Raghavendra H",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
]

function Locations() {
  useEffect(() => {
    document.title = "Our Locations | RheumaInsights"
    return () => { document.title = "RheumaInsights" }
  }, [])

  return (
    <div className="landing-page bg-[#F5F5F5] min-h-screen flex flex-col" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-12">
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "16px" }}>
              Find Us
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.1, color: "#ffffff", marginBottom: "1rem" }}>
              Our Clinics
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", maxWidth: "560px" }}>
              Three convenient locations across Bengaluru — walk in or book an appointment online.
            </p>
          </div>
        </section>

        {/* Clinic Cards */}
        <section className="bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col gap-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white overflow-hidden" style={{ borderRadius: "16px", border: "1px solid #eaeef3" }}>
                <div className="flex flex-col sm:flex-row">
                  {/* Left - Info */}
                  <div className="flex-1 min-w-0 p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 style={{ fontFamily: "var(--font-base)", fontWeight: 600, fontSize: "17px", lineHeight: 1.3, color: "#0f616e", marginBottom: "4px" }}>
                          {loc.name}
                        </h3>
                        <p style={{ fontSize: "13px", color: "#8a94a6" }}>{loc.area}</p>
                      </div>
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f616e", backgroundColor: "#e0f3f5", padding: "4px 12px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                        {loc.fee} / visit
                      </span>
                    </div>

                    <p style={{ fontSize: "13px", color: "#8a94a6", lineHeight: 1.6, marginBottom: "16px" }}>
                      📍 {loc.address}
                    </p>

                    {/* Timings */}
                    <div className="flex flex-col gap-2 mb-5">
                      {loc.timings.map((t, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#1AA3B5" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="flex flex-col sm:flex-row sm:gap-1.5" style={{ fontSize: "13px", lineHeight: 1.45 }}>
                            <span style={{ fontWeight: 600, color: "#0f616e" }}>{t.days}</span>
                            <span style={{ color: "#8a94a6" }}>{t.time}</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <span style={{ fontSize: "12px", fontWeight: 600, backgroundColor: "#e0f3f5", color: "#0f616e", padding: "4px 12px", borderRadius: "9999px" }}>
                        {loc.doctor}
                      </span>
                      <a
                        href={loc.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full font-semibold text-[13px] transition-all hover:opacity-90"
                        style={{ backgroundColor: "#F97316", color: "#ffffff", padding: "8px 20px", textDecoration: "none" }}
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>

                  {/* Right - Google Maps embed (reused from DoctorProfile) */}
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(loc.name + ", Bangalore")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shrink-0 relative group w-full sm:w-[260px] h-52 sm:h-auto min-h-[180px]"
                  >
                    <iframe
                      title={loc.name}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.name + ", Bangalore")}&output=embed&z=14`}
                      className="w-full h-full absolute inset-0 pointer-events-none"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </main>
      <BriefingFooter />
    </div>
  )
}

export default Locations
