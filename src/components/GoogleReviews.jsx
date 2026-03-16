const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="#FBBC04"
    />
  </svg>
)

const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
)

const reviewsData = [
  {
    id: 1,
    name: "Margaret L.",
    condition: "Rheumatoid Arthritis",
    text: "After two years of bouncing between doctors, I finally got a clear RA diagnosis here. Dr. Miller walked me through every blood test result and didn't rush me once. My morning stiffness has gone from 3 hours to about 20 minutes. Big thanks to the whole team — now just waiting patiently to see the full results! Over all experience is very good.",
  },
  {
    id: 2,
    name: "Robert K.",
    condition: "Rheumatoid Arthritis",
    text: "Its been 8 months I took the treatment, the methotrexate was excellent! My joints feel noticeably better, and much more flexible. The process was smooth and the result exceeded my expectations. I noticed improvement after just one session. Highly recommend this treatment.",
  },
  {
    id: 3,
    name: "Patricia Chen",
    condition: "Rheumatoid Arthritis",
    text: "Got my RA treatment done at the clinic, and the overall experience was excellent. Dr. Chen is an extremely experienced rheumatologist in the field. He is also very soft-spoken, which made the process even more comfortable. I would also like to appreciate the entire clinic staff.",
  },
  {
    id: 4,
    name: "James W.",
    condition: "Rheumatoid Arthritis",
    text: "I reside in Boston for the past 30 years and began to notice my joint stiffness, which was a source of concern for me. Fortunately, my relative, who had successfully undergone treatment with Dr. Miller, encouraged me to seek a consultation with her. That single visit truly transformed my life.",
  },
]

function ReviewCard({ review }) {
  return (
    <div className="bg-[#0d7a8a] rounded-2xl p-7 flex flex-col text-left h-full">
      {/* Review text */}
      <p className="text-[13.5px] text-white/80 leading-[1.75] mb-6 flex-grow" style={{ fontFamily: "var(--font-base)" }}>
        {review.text}
      </p>

      {/* Name + condition */}
      <div className="mb-5">
        <p className="text-[14px] text-[#FCB900] font-semibold" style={{ fontFamily: "var(--font-base)" }}>{review.name}</p>
        <p className="text-[12px] text-white/60" style={{ fontFamily: "var(--font-base)" }}>{review.condition}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-4" />

      {/* Stars + Google icon */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-0.5">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <GoogleGIcon />
      </div>
    </div>
  )
}

function GoogleReviews() {
  return (
    <section className="bg-[#0f616e] py-20 md:py-28 custom-approach-section relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — two columns */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/50 mb-4"
              style={{ fontFamily: "var(--font-base)" }}
            >
              Testimonials
            </p>
            <h2
              className="text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff" }}
            >
              What Are<br />Patients Saying?
            </h2>
          </div>
          <p
            className="text-sm text-white/60 max-w-md leading-relaxed md:pt-8"
            style={{ fontFamily: "var(--font-base)" }}
          >
            With over 2,000 patients treated at our rheumatology practice, and specialist expertise in autoimmune conditions, you can trust us to deliver expert care and consistent results.
          </p>
        </div>

        {/* Cards — carousel on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible mb-12">
          {reviewsData.map((review) => (
            <div key={review.id} className="w-[280px] min-w-[280px] sm:w-[300px] sm:min-w-[300px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* View All button */}
        <div>
          <button
            className="text-[14px] font-semibold text-[#0f616e] bg-[#a0e2e4] rounded-full px-8 py-3 hover:opacity-90 transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-base)" }}
          >
            View All
          </button>
        </div>

      </div>
      {/* Bottom wave — same as ApproachSection */}
      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F5F5F5" />
      </svg>
    </section>
  )
}

export default GoogleReviews
