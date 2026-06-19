import { useRef, useState } from "react"

const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="#FBBC04"
    />
  </svg>
)

const PractoIcon = () => (
  <span
    className="inline-flex items-center justify-center rounded-full text-white font-bold"
    style={{ width: "28px", height: "28px", backgroundColor: "#14bef0", fontFamily: "var(--font-base)", fontSize: "15px" }}
    aria-label="Practo"
  >
    P
  </span>
)

const reviewsData = [
  {
    id: 1,
    name: "Ashritha",
    verified: true,
    time: "2 months ago",
    condition: "Visited For Rheumatic Arthritis",
    happyWith: "Doctor friendliness, explanation of the health issue, treatment satisfaction",
    source: "Practo",
    text: "I feel truly blessed and grateful to have found Dr. Raghavendra H for my RA treatment. I have been consulting him for the past 8 months, and throughout this journey, he has ensured that I receive the best possible care at every step. What makes him exceptional is not just his medical expertise, but the kind of person he is. He is extremely humble, soft-spoken, and deeply empathetic. In a time where most consultations feel rushed, he stands out for the way he patiently listens to every concern and never makes you feel hurried. His reassurance, calm approach, and the way he explains everything gives immense confidence to the patient. Over these months, he has guided me with clarity, care, and consistency, ensuring that my condition is managed effectively without unnecessary interventions. For anyone dealing with autoimmune or rheumatic conditions, I can confidently say he is one of the best doctors you can consult.",
  },
  {
    id: 2,
    name: "Verified Patient",
    verified: true,
    time: "1 month ago",
    condition: "Visited For Management of Rheumatoid Arthritis",
    happyWith: "",
    source: "Practo",
    text: "Dr. Raghavendra H was really friendly and the clinic environment was clean and pleasant. The staff were friendly too. Overall, it felt like good value for money.",
  },
  {
    id: 3,
    name: "Verified Patient",
    verified: true,
    time: "1 month ago",
    condition: "",
    happyWith: "",
    source: "Practo",
    text: "Dr. Raghavendra H listened carefully to my problem and examined me thoroughly. He explained the root cause clearly and gave the right guidance while recommending fewer medicines.",
  },
  {
    id: 4,
    name: "Verified Patient",
    verified: true,
    time: "2 months ago",
    condition: "",
    happyWith: "",
    source: "Practo",
    text: "Dr. Raghavendra H has very good experience and excellent communication skills. He understands the patient's situation well and guides them correctly. His instructions for managing my immune system response were very helpful.",
  },
  {
    id: 5,
    name: "Ramakrishna Kakumani",
    verified: true,
    time: "11 months ago",
    condition: "",
    happyWith: "Doctor friendliness, explanation of the health issue, treatment satisfaction, value for money, wait time",
    source: "Practo",
    text: "My mother-in-law had been undergoing treatment for joint pains at KIMS Ongole for over two years, but unfortunately, there was no improvement. We then came across Dr. Raghavendra H, Rheumatologist, through the web. He is very friendly, approachable, and most importantly, his treatment is highly effective. He focuses on identifying the root cause of the problem and prescribes only minimal medication. Although we are based in Andhra, we travel to Bangalore every three months to consult him. Her symptoms are now under control, and we are very happy with the treatment she is receiving.",
  },
  {
    id: 6,
    name: "T V Joy",
    verified: true,
    time: "3 years ago",
    condition: "",
    happyWith: "",
    source: "Practo",
    text: "Dr. Raghavendra is always approachable, which is not the case with many others. He is the second doctor I visited for the arthritis problem of my wife and I am completely satisfied with his way of treatment and interaction with us. Most importantly, he is never in a hurry and spends a lot of time to comfort the patient. I strongly recommend Dr. Raghavendra to anyone suffering from arthritis.",
  },
  {
    id: 7,
    name: "Shoma Nair",
    verified: true,
    time: "4 years ago",
    condition: "",
    happyWith: "",
    source: "Practo",
    text: "I have been visiting Dr. Raghavendra for a year now for my mother's arthritis management and I can easily say he is one fine doctor in his field. He does thorough examination and is compassionate and warm towards patients. He started a structured treatment for my mom, prescribes limited medicines and tests, and has reduced dosage during follow-ups. He is approachable and explains the issue well along with possible side effects beforehand. Definitely a go-to doctor for RA management.",
  },
  {
    id: 8,
    name: "K K Mondal",
    verified: true,
    time: "2 years ago",
    condition: "Visited For Systemic Sclerosis (Scleroderma)",
    happyWith: "",
    source: "Practo",
    text: "Extremely helpful appointment with Dr. Raghavendra H for my mother-in-law's scleroderma treatment. The explanation of her health issues and subsequent management protocol advice was awesome. With first-hand experience, we can say that he is an excellent doctor in the field of rheumatology.",
  },
]

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 155
  const visibleText = expanded || !isLong ? review.text : `${review.text.slice(0, 155).trim()}...`
  const isAnonymous = review.name === "Verified Patient"
  const displayName = isAnonymous ? "Practo Patient" : review.name

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col text-left h-full shadow-sm border border-white/70">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-[15px] text-[#0f616e] font-bold leading-tight" style={{ fontFamily: "var(--font-base)" }}>
            {displayName} {review.verified && !isAnonymous && <span className="text-[11px] font-semibold text-[#5e5e5e]">(Verified)</span>}
          </p>
          <p className="text-[11px] text-[#6a6a6a] mt-1" style={{ fontFamily: "var(--font-base)" }}>{review.time}</p>
        </div>
        <span className="shrink-0 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#e0f3f5] text-[#0f616e]" style={{ fontFamily: "var(--font-base)" }}>
          #{String(review.id).padStart(2, "0")}
        </span>
      </div>

      <div className="flex space-x-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[17px] text-[#4f4f4f] leading-[1.75] mb-3 flex-grow" style={{ fontFamily: "var(--font-base)" }}>
        {visibleText}
      </p>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="self-start text-[13px] font-bold cursor-pointer"
          style={{ color: "#e86531", fontFamily: "var(--font-base)", background: "transparent", border: 0, padding: 0, borderRadius: 0 }}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      {expanded && review.happyWith && (
        <p className="text-[11px] text-[#6a6a6a] leading-[1.55] mt-5" style={{ fontFamily: "var(--font-base)" }}>
          <span className="font-bold text-[#0f616e]">Happy with:</span> {review.happyWith}
        </p>
      )}

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mt-5 mb-4" />

      {/* Source marker */}
      <div className="flex items-center justify-end">
        <img src="/practo.png" alt="Practo" style={{ height: "20px", width: "auto", display: "block" }} />
      </div>
    </div>
  )
}

function GoogleReviews() {
  const carouselRef = useRef(null)

  const scrollReviews = (direction) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollBy({ left: direction === "left" ? -360 : 360, behavior: "smooth" })
  }

  return (
    <section className="bg-[#a0e2e4] py-20 md:py-28 custom-approach-section">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div style={{ marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <p
              className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#5e5e5e]"
              style={{ fontFamily: "var(--font-base)", marginBottom: "1rem" }}
            >
              Testimonials
            </p>
            <h2
              className="text-[2.25rem] md:text-[2.75rem] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#0f616e", marginBottom: "1.25rem" }}
            >
              What Are Patients Saying?
            </h2>
            <p
              className="text-[17px] text-[#5e5e5e] leading-relaxed"
              style={{ fontFamily: "var(--font-base)", maxWidth: "560px" }}
            >
              With over 15,000 patients treated at our rheumatology practice, and specialist expertise in autoimmune conditions, you can trust us to deliver expert care and consistent results.
            </p>
          </div>
          {/* Review source */}
          <div className="inline-flex items-center gap-3 shrink-0">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="/practo.png" alt="Practo" style={{ height: "36px", width: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="mb-6">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviewsData.map((review) => (
              <div
                key={review.id}
                className="w-[85vw] min-w-[85vw] sm:w-[320px] sm:min-w-[320px] lg:w-[340px] lg:min-w-[340px] flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => scrollReviews("left")}
            className="flex w-11 h-11 items-center justify-center rounded-full bg-white shadow-md hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Previous reviews"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollReviews("right")}
            className="flex w-11 h-11 items-center justify-center rounded-full bg-white shadow-md hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Next reviews"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f616e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* View All button */}
        <div>
          <button
            className="text-[14px] font-semibold text-white rounded-full px-8 py-3 hover:opacity-90 transition-colors cursor-pointer"

            style={{ backgroundColor: "#e86531", fontFamily: "var(--font-base)" }}
          >
            View All
          </button>
        </div>

      </div>
    </section>
  )
}

export default GoogleReviews
