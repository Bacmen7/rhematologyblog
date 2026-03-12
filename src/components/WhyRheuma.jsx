const advisors = [
  {
    name: "Dr. Anita Kapoor",
    title: "MD, FACR — Rheumatoid Arthritis & Lupus, 18 yrs clinical practice",
  },
  {
    name: "Dr. Marcus Webb",
    title: "DO, Rheumatology — Biologic Therapies & Autoimmune Research Fellow",
  },
  {
    name: "Dr. Elena Ruiz",
    title: "MD — Psoriatic Arthritis, Spondyloarthritis & Musculoskeletal Ultrasound",
  },
  {
    name: "Dr. David Okonkwo",
    title: "MD, PhD — Vasculitis & Connective Tissue Disorders, Clinical Trial Lead",
  },
]

function WhyRheuma() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-navy-deep px-5 pt-[100px] pb-[130px] md:pt-[120px] md:pb-[150px] text-white">

      <div className="relative z-10 mx-auto max-w-[1120px]">
        {/* Header — 2 column like Medical Advisors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-16 md:mb-20">
          <div>
            <h2 className="max-w-[500px]" style={{ color: "#ffffff" }}>
              Medical advisors
            </h2>
          </div>
          <div className="flex items-end">
            <p style={{ fontSize: "18px", lineHeight: 1.67, letterSpacing: "0.4px", color: "#b0b5c0" }}>
              Our expert rheumatologists, immunologists, and autoimmune specialists are{" "}
              <strong className="font-semibold" style={{ color: "#182439", background: "#feccbc", padding: "2px 6px", borderRadius: "3px" }}>leaders in their fields</strong>,
              with advanced education and training in rheumatology. Our comprehensive team approach is personalized to meet your unique needs and address your symptoms for lasting relief.
            </p>
          </div>
        </div>

        {/* Advisors Grid — 4 columns like Medical Advisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {advisors.map((a) => (
            <div key={a.name}>
              <h3 style={{ fontFamily: "var(--font-base)", fontSize: "18px", fontWeight: 600, lineHeight: 1.4, letterSpacing: "0.4px", color: "#ffffff", marginBottom: "8px" }}>
                {a.name}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: 1.67, letterSpacing: "0.4px", color: "#b0b5c0" }}>
                {a.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave — same as ApproachSection */}
      <svg className="absolute bottom-0 left-0 w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#f8fafd" />
      </svg>
    </section>
  )
}

export default WhyRheuma
