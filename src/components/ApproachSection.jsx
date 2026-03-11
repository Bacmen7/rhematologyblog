function ApproachSection() {
  return (
    <section className="custom-approach-section relative overflow-hidden bg-navy-deep px-5 py-[100px] md:py-[120px] text-white">
      <svg
        className="absolute top-0 left-0 w-full h-12"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H1440V24C1200 56 960 56 720 24C480 -8 240 -8 0 24V0Z" fill="#ffffff" />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <h2 className="mb-16 max-w-[800px] text-[36px] md:text-[48px] leading-[1.2] font-normal">
          Experience a{" "}
          <span className="relative inline-block">
            different approach
            <svg
              className="absolute -bottom-2 left-0 h-3 w-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 400 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10C80 4 200 2 398 6" stroke="#8da4d0" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </span>{" "}
          to digestive health
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-[60px] gap-x-[80px]">
          <div className="flex items-start gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
              <span className="material-symbols-outlined relative z-10 text-[32px] text-white">volunteer_activism</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">Whole-person &amp; collaborative care</h3>
              <p className="text-[16px] leading-[1.6] font-normal text-[#b0b5c0]">
                <strong className="font-semibold text-white">GI experts working across specialities</strong> (medical, dietary, and gut-brain) to treat you, not
                just your symptoms.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
              <span className="material-symbols-outlined relative z-10 text-[32px] text-white">task_alt</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">Quality care that works</h3>
              <p className="text-[16px] leading-[1.6] font-normal text-[#b0b5c0]">
                Clinically-proven results, with <strong className="font-semibold text-white">92% of patients</strong> finding relief in 10 weeks or less.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
              <div className="absolute -right-1 top-2 h-3 w-3 rounded-full bg-[#dcaea8]" />
              <span className="material-symbols-outlined relative z-10 text-[32px] text-white">chat</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">Convenient &amp; accessible</h3>
              <p className="text-[16px] leading-[1.6] font-normal text-[#b0b5c0]">
                Easy to schedule, virtual-first GI care visits <strong className="font-semibold text-white">available anytime you need us.</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
              <div className="absolute h-14 w-14 rounded-full bg-[#212836]" />
              <span className="material-symbols-outlined relative z-10 text-[32px] text-white">hearing</span>
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-[20px] font-semibold leading-[1.4]">Be seen &amp; heard</h3>
              <p className="text-[16px] leading-[1.6] font-normal text-[#b0b5c0]">
                We take the time to listen, ensuring you feel validated and{" "}
                <strong className="font-semibold text-white">empowered with personalized support.</strong> We&apos;re proud to have 98% patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection
