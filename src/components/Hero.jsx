import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const slides = [
  {
    id: 0,
    heading: (
      <>
        Struggling with Pain in Your <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>Joints</span>, <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>Bones</span>, or <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>Muscles</span>?
      </>
    ),
    image: "/images/hero-slide-1.png",
  },
  {
    id: 1,
    heading: (
      <>
        Your path to <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>pain-free</span> living starts <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>here</span>
      </>
    ),
    image: "/images/hero-slide-2.png",
  },
  {
    id: 2,
    heading: (
      <>
        Advanced care for <span style={{ fontWeight: 700, fontFamily: "var(--font-base)", fontSize: "0.85em" }}>autoimmune</span> conditions
      </>
    ),
    image: "/images/hero-slide-3.png",
  },
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="custom-approach-section" style={{ padding: "0.5rem 1rem 2rem" }}>
      <div className="w-full bg-[#0f616e] rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden flex flex-col shadow-none min-h-[75vh] md:min-h-[calc(100vh-7rem)] lg:min-h-[620px]">

        {/* Abstract Background Patterns */}
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 300 300" fill="none" className="w-[200px] md:w-[400px]">
            <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H300V300C300 217.157 232.843 150 150 150Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none rotate-180 transform translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12">
          <svg width="350" height="350" viewBox="0 0 300 300" fill="none" className="w-[150px] md:w-[350px]">
            <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
          </svg>
        </div>

        {/* Content Area */}
        <div className="relative z-10 px-5 py-8 md:px-[2.68rem] lg:px-[4rem] md:py-[3.18rem] flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-8 lg:gap-24 w-full h-full flex-grow pb-[280px] md:pb-[3.18rem]">

          {/* Left Side: Headings & Button */}
          <div className="flex flex-col items-start max-w-3xl w-full pt-2 lg:pt-4">

            {/* Fixed Height Text Container */}
            <div className="relative w-full h-[150px] sm:h-[180px] md:h-[280px] lg:h-[340px] max-w-[900px]">
              {slides.map((slide, index) => (
                <div
                  key={`text-${slide.id}`}
                  className={`absolute top-0 left-0 w-full transition-all duration-[800ms] ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <h1 style={{ color: "#ffffff", fontWeight: 300, letterSpacing: "-0.5px", fontFamily: "var(--font-display)" }} className="text-[2.5rem] leading-[1.2] sm:text-5xl md:text-[4.2rem] lg:text-[4.8rem] md:leading-[1.1] tracking-tight">
                    {slide.heading}
                  </h1>
                </div>
              ))}
            </div>

            {/* Mobile View Primary Text */}
            <div className="block lg:hidden mt-2 mb-6 relative z-20 max-w-[90%]">
              <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "15px", lineHeight: 1.6 }}>
                Take the first step toward healthier living.
                <br className="hidden sm:block" />
                With expert guidance by your side,
                <br className="hidden sm:block" />
                Experience care that's truly dedicated.
              </p>
            </div>

            {/* Appointment Button */}
            <Link
              to="/book-appointment"
              className="inline-flex mt-4 md:mt-8 items-center gap-2 rounded-full font-semibold shadow-sm z-20"
              style={{ backgroundColor: "#fa885a", color: "#ffffff", padding: "14px 40px", fontSize: "18px" }}
            >
              Appointment
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Desktop View Primary Text */}
          <div className="hidden lg:block w-full max-w-[580px] lg:mt-16 xl:mt-20 relative z-20 lg:mr-4 xl:mr-8 pr-4">
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "20px", lineHeight: 1.6 }}>
              Diagnosed with Rheumatoid Arthritis, Osteoarthritis, or Musculoskeletal Pain? Consult a Rheumatologist Today for Expert Care and Lasting Relief.
            </p>
          </div>
        </div>

        {/* Right Edge: Image Section */}
        <div className="absolute bottom-0 -right-4 sm:-right-2 md:right-4 lg:right-8 w-[240px] h-[280px] sm:w-[300px] sm:h-[350px] md:w-[380px] md:h-[450px] lg:w-[400px] lg:h-[480px] z-10 overflow-hidden pointer-events-none">
          {slides.map((slide, index) => (
            <img
              key={`img-${slide.id}`}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`absolute bottom-0 right-0 w-full h-full object-contain object-bottom transition-all duration-[800ms] ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            />
          ))}
        </div>

        {/* Bottom Progress Bars */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-30">
          {slides.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-[3px] w-12 sm:w-16 md:w-24 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              style={{ border: "none", padding: 0 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute top-0 left-0 h-full bg-white rounded-full ${
                  index === currentSlide ? "w-full" : "w-0"
                } ${index < currentSlide ? "w-full duration-0" : ""}`}
                style={{ transition: index === currentSlide ? "width 4500ms linear" : "none" }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
