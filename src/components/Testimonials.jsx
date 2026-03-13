import { useRef, useEffect, useCallback } from "react"

const reviews = [
  {
    quote: "Every clinician I have dealt with has been terrific and the proof is in the treatment of my symptoms. My thanks to all!",
    name: "Christopher S",
  },
  {
    quote: "The program has been very helpful for my digestive issues; in a fairly short amount of time I have experienced so much relief. The providers I have been working with are all amazing!",
    name: "Tracy B",
  },
  {
    quote: "Very informative and helpful. This helped me get a better understanding of gut / brain health for sure. I'm excited for the next appt",
    name: "Stevie P",
  },
  {
    quote: "The entire team is respectful and listens to what you are saying. Doesn't push medication but looks for alternate changes to behavior when applicable.",
    name: "Marie S",
  },
  {
    quote: "My dietician has been so helpful in walking me through the FODMAP diet and helping me keep track of foods based on my symptoms.",
    name: "Angela R",
  },
  {
    quote: "I feel like I finally have a team that understands what I'm going through. The care has been compassionate and thorough from day one.",
    name: "David M",
  },
]

function Testimonials() {
  const scrollRef = useRef(null)
  const pausedRef = useRef(false)
  const posRef = useRef(0)
  const animRef = useRef(null)

  // Triple the reviews for seamless loop
  const tripled = [...reviews, ...reviews, ...reviews]

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const cardWidth = el.scrollWidth / 3
    posRef.current = cardWidth
    el.scrollLeft = cardWidth

    let lastTime = performance.now()

    const step = (timestamp) => {
      const delta = timestamp - lastTime
      lastTime = timestamp

      if (!pausedRef.current && el) {
        posRef.current += delta * 0.04
        el.scrollLeft = posRef.current

        if (posRef.current >= cardWidth * 2) {
          posRef.current -= cardWidth
          el.scrollLeft = posRef.current
        }
      }

      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  const handleMouseEnter = useCallback(() => { pausedRef.current = true }, [])
  const handleMouseLeave = useCallback(() => { pausedRef.current = false }, [])
  const handleTouchStart = useCallback(() => { pausedRef.current = true }, [])
  const handleTouchEnd = useCallback(() => { pausedRef.current = false }, [])

  const handleScroll = useCallback(() => {
    if (pausedRef.current && scrollRef.current) {
      posRef.current = scrollRef.current.scrollLeft
    }
  }, [])

  return (
    <section className="py-20 md:py-28 bg-[#f8fafd] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-14 px-6">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-navy-muted" style={{ marginBottom: "12px" }}>
          Trusted by 33K+ People
        </p>
        <h2 className="text-3xl sm:text-[2.5rem] md:text-[3.5rem] leading-[1.08] tracking-[-1.2px] text-navy-deep">
          See why 98% of patients love us
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 px-6 overflow-x-auto hide-scrollbar"
        >
          {tripled.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-5 text-sky-soft" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10.4 28.8c-2.4 0-4.27-.73-5.6-2.2C3.47 25.13 2.8 23.2 2.8 20.8c0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6zm17.6 0c-2.4 0-4.27-.73-5.6-2.2-1.33-1.47-2-3.4-2-5.8 0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6z" />
                </svg>
                <p className="text-sm sm:text-[15px] leading-[1.7] font-medium text-navy-deep">
                  {r.quote}
                </p>
              </div>
              <p className="mt-5 sm:mt-6 text-xs uppercase tracking-[0.2em] font-semibold text-navy-muted">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
