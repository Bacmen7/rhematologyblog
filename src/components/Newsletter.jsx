function Newsletter() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="block mb-10"
          style={{
            fontFamily: "var(--font-base)",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            color: "#5a6577",
          }}
        >
          From our rheumatology experts to your inbox
        </span>

        {/* Heading */}
        <h2
          className="mx-auto !mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            fontWeight: 400,
            color: "var(--color-navy-deep)",
            maxWidth: "860px",
          }}
        >
          Get{" "}
          <span className="relative inline-block">
            joint-friendly
            <svg
              className="absolute -bottom-1 left-0 w-full"
              style={{ height: "6px" }}
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 400 12"
            >
              <path d="M2 10C80 4 200 2 398 6" stroke="#8ebfff" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </span>{" "}
          tips, news, and more&#8202;&#8212;&#8202;delivered weekly.
        </h2>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[400px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full sm:flex-1 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-navy-deep placeholder:text-gray-400 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Email Address*"
            type="email"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-[13px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ backgroundColor: "#b7efea", color: "#142131" }}
          >
            Subscribe
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
