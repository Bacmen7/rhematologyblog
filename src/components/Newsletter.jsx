function Newsletter() {
  return (
    <section className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 block">
          From our GI experts to your inbox
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] text-navy-deep max-w-2xl mx-auto mb-10">
          Get{" "}
          gut friendly{" "}
          recipes, news, and more&#8202;&#8212;&#8202;delivered weekly.
        </h2>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full sm:flex-1 px-6 py-3.5 rounded-full border border-gray-200 bg-white text-navy-deep placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Email Address*"
            type="email"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary/30 text-navy-deep text-sm font-semibold hover:bg-primary/50 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Subscribe
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
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
