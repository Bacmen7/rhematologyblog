function HealthGuideHero() {
  return (
    <section className="relative bg-background-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="py-4 md:py-6 relative z-10">
            <h1 className="text-4xl md:text-5xl text-navy-deep leading-tight" style={{ letterSpacing: "-0.8px" }}>
              Explore Health Guide<br />
              <span className="text-navy-muted">
                Reliable, rheumatology-focused medical information.
              </span>
            </h1>
          </div>
          <div className="hidden md:block">
            <img
              alt="Medical professional consulting patient"
              className="w-full h-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgemhiRFnqIgC8d1wK55uDD3cOA_P4wWsNQm-ccLOnoc8lySLnhUC__lokJmAgel4QhX5UXHXn4lAMdllZr02aSrzUUQRBpnrYolm6Ej86seFvSkvf1T40YMo5MIsv7zg0oWjLl6G0K4CTt2rOs9Ef8ptPnDqDg9sWp44piibfzWiklVIGxn3COjchb4l86ZlmDKLrR9MMKATq-jT8OBvbikuqftz0iBkOLDWJlefczCq3lXgLDCDXDJ16Tmo3IeZR49LaHkE8eqea"
            />
          </div>
        </div>
      </div>
      {/* Mobile background image */}
      <div className="absolute right-0 top-0 h-full w-full md:hidden opacity-20">
        <img
          alt=""
          className="h-full w-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgemhiRFnqIgC8d1wK55uDD3cOA_P4wWsNQm-ccLOnoc8lySLnhUC__lokJmAgel4QhX5UXHXn4lAMdllZr02aSrzUUQRBpnrYolm6Ej86seFvSkvf1T40YMo5MIsv7zg0oWjLl6G0K4CTt2rOs9Ef8ptPnDqDg9sWp44piibfzWiklVIGxn3COjchb4l86ZlmDKLrR9MMKATq-jT8OBvbikuqftz0iBkOLDWJlefczCq3lXgLDCDXDJ16Tmo3IeZR49LaHkE8eqea"
        />
      </div>
    </section>
  )
}

export default HealthGuideHero
