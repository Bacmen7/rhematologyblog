function HealthGuideHero() {
  return (
    <section className="relative bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight text-gray-900 leading-tight">
            Explore <span className="italic font-normal">Health Guide</span><br />
            <span className="text-gray-500 font-normal">
              Reliable, rheumatology-focused medical information.
            </span>
          </h1>
        </div>
      </div>
      {/* Background image */}
      <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 md:opacity-100">
        <img
          alt="Medical professional consulting patient"
          className="h-full w-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgemhiRFnqIgC8d1wK55uDD3cOA_P4wWsNQm-ccLOnoc8lySLnhUC__lokJmAgel4QhX5UXHXn4lAMdllZr02aSrzUUQRBpnrYolm6Ej86seFvSkvf1T40YMo5MIsv7zg0oWjLl6G0K4CTt2rOs9Ef8ptPnDqDg9sWp44piibfzWiklVIGxn3COjchb4l86ZlmDKLrR9MMKATq-jT8OBvbikuqftz0iBkOLDWJlefczCq3lXgLDCDXDJ16Tmo3IeZR49LaHkE8eqea"
        />
      </div>
    </section>
  )
}

export default HealthGuideHero
