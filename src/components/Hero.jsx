import { Link } from "react-router-dom"

function Hero() {
  return (
    <>
      {/* Desktop Layout */}
      <section
        className="custom-approach-section relative overflow-hidden hidden lg:block"
        style={{
          background: "#0f616e",
        }}
      >
        <div className="grid grid-cols-2 items-stretch min-h-[70vh]">
          <div className="flex flex-col justify-center gap-5 py-12 pl-[max(8rem,calc((100%-80rem)/2+8rem))] pr-10">
            <h1 className="text-[3.25rem] font-light leading-[1.08] tracking-[-1.2px]" style={{ color: "#ffffff" }}>
              Struggling with Pain in Your{" "}
              <span className="relative inline-block">
                Joints, Bones,
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 400 12"
                >
                  <path d="M2 10C80 4 200 2 398 6" stroke="#a0e2e4" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </span>{" "}
              or Muscles?
            </h1>
            <p className="text-[1.35rem] font-semibold text-white/90 leading-relaxed max-w-xl">
              Expert Rheumatology Care Starts Here.
            </p>
            <p className="text-lg font-light text-white/70 leading-relaxed max-w-xl -mt-4">
              Diagnosed with Rheumatoid Arthritis, Osteoarthritis, or Musculoskeletal Pain? Consult a Rheumatologist Today for Expert Care and Lasting Relief.
            </p>
            <div className="flex flex-wrap gap-3 pt-0">
              <Link
                to="/book-appointment"
                className="text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-colors hover:opacity-90"
                style={{ backgroundColor: "#e86531" }}
              >
                Book Consultation →
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-full h-full object-cover object-center"
              src="/images/hero-doctor.jpg"
              alt="Rheumatologist consulting a patient"
            />
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="custom-approach-section lg:hidden overflow-hidden">
        <div
          className="flex flex-col items-center text-center px-6 pt-14 pb-6"
          style={{
            background: "#0f616e",
          }}
        >
          <h1 className="text-[2.25rem] font-light leading-[1.1] tracking-[-1px] mb-5" style={{ color: "#ffffff" }}>
            Struggling with Pain in Your{" "}
            <span className="relative inline-block">
              Joints, Bones,
              <svg
                className="absolute -bottom-1 left-0 w-full h-2.5"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 400 12"
              >
                <path d="M2 10C80 4 200 2 398 6" stroke="#1AA3B5" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </span>{" "}
            or Muscles?
          </h1>
          <p className="text-base font-semibold text-white/90 mb-2">
            Expert Rheumatology Care Starts Here.
          </p>
          <p className="text-sm text-white/65 leading-relaxed max-w-sm" style={{ marginBottom: "28px" }}>
            Diagnosed with Rheumatoid Arthritis, Osteoarthritis, or Musculoskeletal Pain? Consult a Rheumatologist Today for Expert Care and Lasting Relief.
          </p>
          <Link
            to="/book-appointment"
            className="text-white px-6 py-2.5 rounded-full font-bold text-sm transition-colors hover:opacity-90"
            style={{ backgroundColor: "#e86531", marginBottom: "20px" }}
          >
            Book Consultation →
          </Link>
        </div>
        <img
          className="w-full block"
          src="/images/hero-doctor.jpg"
          alt="Rheumatologist consulting a patient"
        />
      </section>
    </>
  )
}

export default Hero
