import { useState } from "react"
import Header from "../components/Header"
import CtaBanner from "../components/CtaBanner"
import Newsletter from "../components/Newsletter"
import BriefingFooter from "../components/BriefingFooter"

/* ═══════ MAIN ═══════ */
function OurApproach() {
  return (
    <div className="antialiased overflow-x-hidden relative" style={{ fontFamily: "var(--font-base)" }}>
      {/* Embedded Styles for this page */}
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-ring {
          position: relative;
          width: 360px;
          height: 360px;
          border: 2px solid rgba(227, 239, 255, 0.4);
          border-radius: 50%;
          border-left-color: rgba(227, 239, 255, 1);
          border-bottom-color: rgba(227, 239, 255, 1);
          transform: rotate(-45deg);
        }
        .testimonial-avatar {
          position: absolute;
          transform: rotate(45deg);
          border-radius: 50%;
          border: 4px solid #FDFDFE;
          background-color: #FDFDFE;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .pos-1 { top: 8%; left: 8%; width: 50px; height: 50px; }
        .pos-2 { top: -6%; left: 50%; width: 60px; height: 60px; transform: translate(-50%, 0) rotate(45deg); }
        .pos-3 { top: 8%; right: 8%; width: 70px; height: 70px; }
        .pos-4 { top: 50%; right: -12%; width: 90px; height: 90px; transform: translate(0, -50%) rotate(45deg); border-color: #FECCBC; border-width: 3px; }
        .pos-5 { bottom: 8%; right: 8%; width: 60px; height: 60px; }
        .pos-6 { bottom: 0%; left: 15%; width: 55px; height: 55px; }
        .blob-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
      `}} />

      <Header />

      <main>
        <HeroSection />
        <ExperienceSection />
        <ComparisonWaveTop />
        <ComparisonSection />
        <StatsSection />
        <DarkBanner />
        <TestimonialsSection />
        <VideosSection />
        <EvidenceWaveTop />
        <EvidenceSection />
        <CtaBanner />

        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>
      </main>

      <BriefingFooter />
    </div>
  )
}

/* ───────── HERO ───────── */
function HeroSection() {
  return (
    <>
      {/* Desktop */}
      <section className="custom-approach-section relative overflow-hidden hidden lg:block" style={{ background: "#d1ebfd" }}>
        <div className="grid grid-cols-2 items-stretch min-h-[76vh]">
          <div className="flex flex-col justify-center gap-6 py-16 pl-[max(8rem,calc((100%-80rem)/2+8rem))] pr-10">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#182439] uppercase">Our Approach</p>
            <h1 className="text-[4.375rem] font-light leading-[1.03] tracking-[-1.6px] text-navy-deep">
              Autoimmune care that{" "}
              actually{" "}
              <span className="relative inline-block">
                works
                <svg className="absolute -bottom-2 left-0 w-full h-3" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                  <path d="M2 10C80 4 200 2 398 6" stroke="#8ebfff" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>
            </h1>
            <p className="text-xl font-light text-navy-muted leading-relaxed max-w-xl">
              Most people with rheumatic conditions wait months for answers and leave appointments feeling unheard. We do things differently.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-primary hover:bg-primary-hover text-navy-deep px-6 py-2.5 rounded-full font-semibold text-base transition-colors">
                Get Started →
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover object-center"
              src="https://oshihealth.com/wp-content/uploads/2025/07/GettyImages-1423956398-scaled-e1752007750748-1200x974.jpg"
              alt="Smiling mother and child"
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div className="flex flex-col items-center text-center px-6 pt-14 pb-10" style={{ background: "#d1ebfd" }}>
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#182439] uppercase mb-5">Our Approach</p>
          <h1 className="text-[3.0625rem] font-light text-navy-deep leading-[1.06] tracking-[-1.4px] mb-5">
            Autoimmune care that{" "}
            actually{" "}
            <span className="relative inline-block">
              works
              <svg className="absolute -bottom-1 left-0 w-full h-2.5" fill="none" preserveAspectRatio="none" viewBox="0 0 400 12">
                <path d="M2 10C80 4 200 2 398 6" stroke="#8ebfff" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>
          </h1>
          <p className="text-base text-navy-muted leading-relaxed mb-8 max-w-sm">
            Most people with rheumatic conditions wait months for answers. We do things differently.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-navy-deep px-8 py-3.5 rounded-full font-bold text-base transition-colors mb-5">
            Get Started →
          </button>
        </div>
        <img
          className="w-full block"
          src="https://oshihealth.com/wp-content/uploads/2025/07/GettyImages-1423956398-scaled-e1752007750748-1200x974.jpg"
          alt="Smiling mother and child"
        />
      </section>
    </>
  )
}

/* ───────── EXPERIENCE ───────── */
function ExperienceSection() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    { id: 1, title: 'See a rheumatologist in days, not months', text: "No more 6-month waitlists. You'll meet with a board-certified rheumatologist who reviews your full history, runs the right labs, and starts building a treatment plan with you. Appointments open up within 72 hours." },
    { id: 2, title: 'Treat the whole picture, not just the flare', text: "Autoimmune conditions don't exist in a vacuum. Your care team includes a rheumatologist, dietitian, physiotherapist, and behavioral health specialist, all working together on your case." },
    { id: 3, title: 'Ongoing support between visits', text: "Flares don't wait for office hours. Message your care team anytime, schedule virtual check-ins when you need them, and adjust your plan as things change." }
  ]

  return (
    <section className="py-24 md:py-32 bg-[#FDFDFE] relative z-10 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-10 pr-4">
          <div>
            <h2 className="text-4xl md:text-[2.75rem] mb-4 text-[#182439] leading-tight" style={{ fontFamily: "var(--font-display)" }}>How Rheuma works</h2>
            <p className="text-[#515a6a] text-[15px] leading-relaxed font-light max-w-md">
              Whether you have a diagnosis or just know something's off, here's what happens when you start with us.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((step) => {
              const isActive = activeStep === step.id
              return (
                <div key={step.id} onClick={() => setActiveStep(step.id)} className={`flex gap-5 group cursor-pointer transition-opacity duration-300 ${!isActive ? 'opacity-70 hover:opacity-100' : ''}`}>
                  <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm z-10 mt-1">
                    <span className={`relative z-10 transition-colors ${isActive ? 'text-[#182439]' : 'text-[#A0A4AC]'}`}>{step.id}</span>
                    <svg className={`absolute blob-bg w-[160%] h-[160%] transition-colors duration-300 ${isActive ? 'text-[#FECCBC]' : 'text-[#F4F7FC]'}`} viewBox="0 0 70 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-[17px] font-bold mb-2 transition-colors ${isActive ? 'text-[#182439]' : 'text-[#A0A4AC]'}`}>{step.title}</h4>
                    {isActive && (
                      <p className="text-[#515a6a] text-[13px] leading-relaxed font-light transition-all duration-300">
                        {step.text}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0 pr-0 md:pr-10">
          {/* Large Background Shape */}
          <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#F4F7FC] rounded-full -z-10"></div>

          <div className="relative z-10">
            {/* Phone UI Mockup */}
            <div className="relative w-[260px] h-[530px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-[12px] z-20"></div>
              <img src="/images/specialist-1.jpg" alt="Provider" className="absolute inset-0 w-full h-full object-cover" />

              {/* Controls Overlay */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center items-center gap-2.5 z-20 px-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#182439] shadow-md cursor-pointer hover:bg-gray-50">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#182439] shadow-md cursor-pointer hover:bg-gray-50">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#182439] shadow-md cursor-pointer hover:bg-gray-50">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FECCBC] text-[#462E26] flex items-center justify-center shadow-md cursor-pointer hover:bg-orange-300">
                  <svg className="w-[18px] h-[18px] transform rotate-[135deg]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                </div>
              </div>
            </div>

            {/* Small self-view window */}
            <div className="absolute top-10 -right-10 w-[100px] h-[130px] bg-white rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.12)] border-[3px] border-[#FDFDFE] z-30">
              <img src="/images/specialist-2.jpg" alt="Patient" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── COMPARISON WAVE TOP ───────── */
function ComparisonWaveTop() {
  return (
    <div className="w-full leading-none -mb-1 relative z-20">
      <svg viewBox="0 0 1440 32" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#F0F4FB"></path>
      </svg>
    </div>
  )
}

/* ───────── COMPARISON TABLE ───────── */
function ComparisonSection() {
  const rows = [
    'Rheumatologist, dietitian, physiotherapist, and behavioral health on one team',
    'First appointment within 72 hours, evenings and weekends included',
    'Virtual visits from your phone or laptop. No commute, no waiting room',
    'Can diagnose, prescribe medications, and order labs directly',
    'Works alongside your existing PCP or specialist',
    'Message your care team anytime between visits'
  ]

  return (
    <section className="py-20 bg-[#F0F4FB]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[3rem] inline-block relative text-[#182439] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Care <span className="relative inline-block">
              <span className="relative z-10" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>designed</span>
              <svg className="absolute w-[105%] h-[8px] -bottom-1 left-[-2.5%] z-0 text-[#8EBFFF]" preserveAspectRatio="none" viewBox="0 0 456 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7.40487C152.958 2.78597 303.264 0.160341 453 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
              </svg>
            </span> for you
          </h2>
        </div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[700px] border-separate" style={{ borderSpacing: '0 6px' }}>
            <thead>
              <tr>
                <th className="text-left font-normal text-sm w-[60%] p-4"></th>
                <th className="p-4 w-[20%] text-center">
                  <span className="text-[14px] font-extrabold tracking-tighter text-[#182439]">RHEUMA.</span>
                </th>
                <th className="p-4 w-[20%] text-center text-[11px] font-bold tracking-[0.15em] text-[#182439] uppercase">Other Solutions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((text, index) => {
                const bgWhite = index % 2 === 0
                return (
                  <tr key={index} className={`${bgWhite ? 'bg-white' : ''} rounded-full`}>
                    <td className={`py-[18px] pl-10 text-[14.5px] font-light text-[#182439] rounded-l-full ${bgWhite ? 'border border-transparent' : ''}`}>
                      {text}
                    </td>
                    <td className={`py-[18px] text-center ${bgWhite ? 'border-y border-transparent' : ''}`}>
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#B1EFEC] text-teal-800">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    </td>
                    <td className={`py-[18px] text-center rounded-r-full ${bgWhite ? 'border border-transparent' : ''}`}>
                      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#E8EAEF] text-[#868F9F]">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ───────── STATS ───────── */
function StatsSection() {
  const stats = [
    { value: '92%', desc: 'report meaningful symptom relief within 10 weeks', blob: 'M69.771 38.7915C71.9749 58.1348 57.8644 67.3099 44.9364 71.8246C32.8282 76.0613 18.2876 75.0816 8.90745 60.0545C-1.17152 43.9153 -2.87822 21.6461 4.7146 7.40019C11.2861 -4.91274 25.316 0.568504 37.5048 6.44693C50.93 12.9212 67.6746 20.2559 69.771 38.7915Z', vb: '0 0 70 74' },
    { value: '72hr', desc: 'average time from signup to first rheumatology visit', blob: 'M55.1256 5.62319C69.5284 18.4233 75.3527 39.7894 70.0964 55.9976C65.1006 71.3957 49.3485 76.6043 33.3275 72.8197C18.4814 69.3135 4.89883 56.0577 0.773067 39.6249C-2.87611 25.0844 7.0102 15.5753 17.3399 9.11354C28.7557 1.97144 42.7234 -5.39849 55.1256 5.62319Z', vb: '0 0 72 74' },
    { value: '64%', desc: 'fewer ER visits among active patients', blob: 'M61.2722 61.651C48.113 74.675 28.0401 77.5078 13.8247 69.6181C0.313371 62.1241 -2.78863 44.9948 2.32593 28.9416C7.06625 14.0642 20.5554 1.95861 35.9545 0.146643C49.5794 -1.45508 57.2138 10.23 62.0234 21.9179C67.3404 34.8367 72.6018 50.4362 61.2694 61.6482L61.2722 61.651Z', vb: '0 0 68 74' }
  ]

  return (
    <section className="py-24 bg-[#FDFDFE] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-[2.75rem] mb-20 text-[#182439]" style={{ fontFamily: "var(--font-display)" }}>The numbers behind our care</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute z-0 flex items-center justify-center">
                  <svg width="85" height="90" viewBox={stat.vb} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d={stat.blob} fill="#E3EFFF"></path>
                  </svg>
                </div>
                <span className="text-7xl md:text-[5.5rem] text-[#182439] font-normal tracking-tight relative z-10 leading-none" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</span>
              </div>
              <div className="text-[#515a6a] text-[13px] font-light max-w-[220px] leading-relaxed">
                <p>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-[10px] text-[#A0A4AC] font-light">Based on outcomes data from 2,400+ Rheuma patients over 12 months</p>
        </div>
      </div>
    </section>
  )
}

/* ───────── 98% DARK BANNER ───────── */
function DarkBanner() {
  return (
    <section className="bg-[#182439] text-white relative py-16">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full leading-none -translate-y-[98%]">
        <svg viewBox="0 0 1440 16" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M428.1 14.2289C654.82 14.2289 823.319 0 1053.1 0C1196.21 0 1315.56 5.51969 1440 9.68339V16H0V3.1744C141.3 7.36788 270.666 14.2289 428.1 14.2289Z" fill="#182439"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-[2.5rem] mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>98% patient satisfaction across 10,000+ visits</h2>
        <p className="text-[11px] text-[#A0A4AC]">Average CSAT score, measured after every appointment</p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none translate-y-[98%] z-20">
        <svg viewBox="0 0 1440 16" className="w-full h-auto block" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
          <path d="M428.1 14.2289C654.82 14.2289 823.319 0 1053.1 0C1196.21 0 1315.56 5.51969 1440 9.68339V16H0V3.1744C141.3 7.36788 270.666 14.2289 428.1 14.2289Z" fill="#182439"></path>
        </svg>
      </div>
    </section>
  )
}

/* ───────── TESTIMONIALS ───────── */
function TestimonialsSection() {
  return (
    <section className="bg-[#FDFDFE] pt-24 pb-20 relative z-10">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Circular Avatar Ring */}
        <div className="hidden lg:flex justify-center relative translate-x-[-10%]">
          <div className="testimonial-ring">
            <div className="testimonial-avatar pos-1"><img src="https://oshihealth.com/wp-content/uploads/2024/11/ScottP.png-300x199.webp" alt="Patient" className="w-full h-full object-cover" /></div>
            <div className="testimonial-avatar pos-2"><img src="https://oshihealth.com/wp-content/uploads/2024/11/OshiHealthTestimonialPhoto-200x300.jpg" alt="Patient" className="w-full h-full object-cover object-top" /></div>
            <div className="testimonial-avatar pos-3"><img src="https://oshihealth.com/wp-content/uploads/2025/03/Oshi_March_IBS-diet_-Meal-planning-and-more_Graphic-1-300x186.png" alt="Patient" className="w-full h-full object-cover" /></div>
            <div className="testimonial-avatar pos-4 z-10"><img src="https://oshihealth.com/wp-content/uploads/2024/12/GettyImages-1813378117-225x300.jpg" alt="Patient" className="w-full h-full object-cover object-top" /></div>
            <div className="testimonial-avatar pos-5"><img src="https://oshihealth.com/wp-content/uploads/2022/07/GettyImages-1125723283-994x560-1-300x169.jpeg" alt="Patient" className="w-full h-full object-cover" /></div>
            <div className="testimonial-avatar pos-6"><img src="https://oshihealth.com/wp-content/uploads/2025/01/Bo-headshot-217x300.jpg" alt="Patient" className="w-full h-full object-cover object-top" /></div>
          </div>
        </div>

        {/* Quote Box */}
        <div className="relative z-10 lg:-ml-12 text-[#182439]">
          <span className="absolute -top-12 -left-6 text-7xl text-[#F0F4FB] leading-none" style={{ fontFamily: "var(--font-display)" }}>"</span>
          <blockquote className="text-[1.35rem] md:text-2xl leading-snug mb-8 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
            For six years I bounced between doctors who ran the same labs and shrugged. My Rheuma team actually sat with me, looked at everything together, and figured out what was going on. Three months in and I'm off two medications I didn't need.
          </blockquote>
          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="font-bold text-xs tracking-wide">— Maria G., rheumatoid arthritis, 8 months with Rheuma</p>
            </div>
            <div className="flex gap-1 text-[#FECCBC]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex gap-3 mt-8">
            <button className="w-8 h-8 rounded-full bg-[#B1EFEC] text-teal-800 flex items-center justify-center hover:bg-teal-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-[#B1EFEC] text-teal-800 flex items-center justify-center hover:bg-teal-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── VIDEOS ───────── */
function VideosSection() {
  const videos = [
    { img: 'https://oshihealth.com/wp-content/uploads/2025/02/Oshi_Johanna_Still-9-2-1024x513.png', quote: '"I got my life back." — Maria', alt: 'Maria' },
    { img: 'https://oshihealth.com/wp-content/uploads/2025/02/Group-4-1024x572.png', quote: '"They actually listened." — David', alt: 'David' },
    { img: 'https://oshihealth.com/wp-content/uploads/2025/02/Group-1288-1024x576.png', quote: '"Keep going. It gets better." — Sarah', alt: 'Sarah' }
  ]

  return (
    <section className="bg-[#FDFDFE] pb-20 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <div key={v.quote} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[4px] aspect-video mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <img src={v.img} alt={v.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-[#B1EFEC] rounded-full flex items-center justify-center shadow-md border-2 border-[#B1EFEC] group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 ml-1 text-teal-900" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                  </div>
                </div>
              </div>
              <h3 className="text-[15px] text-[#182439] tracking-wide" style={{ fontFamily: "var(--font-display)" }}>{v.quote}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── EVIDENCE WAVE TOP ───────── */
function EvidenceWaveTop() {
  return (
    <div className="w-full leading-none -mb-1 relative z-20">
      <svg viewBox="0 0 1440 32" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#F0F4FB"></path>
      </svg>
    </div>
  )
}

/* ───────── EVIDENCE ───────── */
function EvidenceSection() {
  return (
    <section className="py-24 bg-[#F0F4FB]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[3rem] inline-block relative text-[#182439] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Evidence behind <span className="relative inline-block">
              <span className="relative z-10" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>our approach</span>
              <svg className="absolute w-[105%] h-[8px] -bottom-1 left-[-2.5%] z-0 text-[#8EBFFF]" preserveAspectRatio="none" viewBox="0 0 456 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7.40487C152.958 2.78597 303.264 0.160341 453 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round"></path>
              </svg>
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 max-w-[850px] mx-auto">
          {/* Article 1 */}
          <a href="#" className="flex flex-col md:flex-row gap-10 items-center group">
            <div className="w-full md:w-[350px] h-[220px] bg-white flex-shrink-0 flex items-center justify-center p-6 transition-transform duration-300 group-hover:-translate-y-1">
              <img src="https://oshihealth.com/wp-content/uploads/2025/01/Hero-Image-Clincal-Trial-300x186.jpg" alt="Clinical Trial" className="w-full h-full object-contain" />
            </div>
            <div className="w-full">
              <span className="inline-block bg-[#E3EFFF] text-[#182439] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">June 26, 2025</span>
              <h3 className="text-xl font-bold mb-5 text-[#182439] leading-snug group-hover:text-[#8EBFFF] transition-colors">Our outcomes data: what 2,400 patients taught us</h3>
              <span className="inline-flex items-center text-[13px] font-bold text-[#182439]">
                Read more
                <div className="ml-3 w-[26px] h-[26px] rounded-full bg-[#B1EFEC] flex items-center justify-center text-teal-900 group-hover:bg-teal-300 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </div>
              </span>
            </div>
          </a>

          {/* Article 2 */}
          <a href="#" className="flex flex-col md:flex-row gap-10 items-center group">
            <div className="w-full md:w-[350px] h-[220px] bg-white flex-shrink-0 flex items-center justify-center p-12 transition-transform duration-300 group-hover:-translate-y-1">
              <img src="https://oshihealth.com/wp-content/uploads/2025/01/AGA-300x56.png" alt="AGA Logo" className="w-full h-auto object-contain" />
            </div>
            <div className="w-full">
              <span className="inline-block bg-[#E3EFFF] text-[#182439] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-4">June 26, 2025</span>
              <h3 className="text-xl font-bold mb-5 text-[#182439] leading-snug group-hover:text-[#8EBFFF] transition-colors">Published in the American College of Rheumatology journal</h3>
              <span className="inline-flex items-center text-[13px] font-bold text-[#182439]">
                Read more
                <div className="ml-3 w-[26px] h-[26px] rounded-full bg-[#B1EFEC] flex items-center justify-center text-teal-900 group-hover:bg-teal-300 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </div>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurApproach
