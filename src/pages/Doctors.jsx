import { useEffect } from "react"
import Header from "../components/Header"
import MeetDoctors from "../components/MeetDoctors"
import BriefingFooter from "../components/BriefingFooter"
import CtaBanner from "../components/CtaBanner"

function Doctors() {
  useEffect(() => {
    document.title = "Our Doctors | Omni Rheuma"
    return () => { document.title = "Omni Rheuma" }
  }, [])

  return (
    <div className="landing-page bg-[#F5F5F5] min-h-screen flex flex-col" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden" style={{ backgroundColor: "#0f616e" }}>
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-20 md:pb-12">
            <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "#a0e2e4", marginBottom: "16px" }}>
              Our Team
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, lineHeight: 1.1, color: "#ffffff", marginBottom: "1rem" }}>
              Meet Our Specialists
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", maxWidth: "560px" }}>
              Board-certified rheumatologists with expertise in autoimmune and inflammatory conditions.
            </p>
          </div>
          <svg
            className="absolute bottom-[-1px] left-0 w-full h-[42px] md:h-[64px]"
            viewBox="0 0 1440 80"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 80H1440V42C1204 6 959 5 719 40C478 75 236 76 0 38V80Z"
              fill="#F5F5F5"
            />
          </svg>
        </section>

        {/* Doctor Cards - reuse existing MeetDoctors component */}
        <MeetDoctors />

        <CtaBanner />
      </main>
      <BriefingFooter />
    </div>
  )
}

export default Doctors
