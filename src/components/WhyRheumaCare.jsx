import { useState } from "react"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"

const bullets = [
  "Highest Diagnosis Accuracy",
  "Personalised Treatment Plans",
  "Biologic & Biosimilar Therapies",
  "DM-Qualified Specialist",
  "Affordable Generic Medicines",
  "Personalised Care By Senior Doctor",
]

const VIDEO_ID = "niyfFNDQjok"

function WhyRheumaCare() {
  const [playing, setPlaying] = useState(false)

  return (
    <section style={{ backgroundColor: "#fff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>

        {/* Heading centered */}
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: "#0f616e", textAlign: "left", marginBottom: "2.5rem", letterSpacing: "-0.8px", lineHeight: 1.1 }}>
          Why Omni RheumaCare Is The Best Choice For Your Joint Health?
        </h2>

        <div style={{ display: "flex", flexDirection: "row", gap: "48px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left: Text + bullets + CTA */}
          <div style={{ flex: "1 1 340px", minWidth: "0" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#444", marginBottom: "1rem" }}>
              RheumaCare is one of the very few DM-qualified rheumatology practices in Karnataka- a specialist who works exclusively on joint, bone, and autoimmune conditions. This is not general medicine. Every diagnosis, every treatment plan, and every follow-up is built around your specific condition and how it affects your daily life.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#444", marginBottom: "1rem" }}>
              Too many patients spend years moving from one general physician to another, managing symptoms with painkillers, never getting a clear answer. At RheumaCare, that cycle ends with your very first visit.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#444", marginBottom: "1.5rem" }}>
              Patients leave with clarity- a real diagnosis, a treatment plan that works, and the confidence that someone truly understands what they are going through.
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px", marginBottom: "2rem" }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#333" }}>
                  <Check size={16} strokeWidth={3} style={{ color: "#0f616e", flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              to="/book-appointment"
              style={{ display: "inline-block", backgroundColor: "#e86531", color: "#fff", padding: "14px 36px", borderRadius: "50px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
            >
              Book Consultation Now
            </Link>
          </div>

          {/* Right: YouTube video */}
          <div style={{ flex: "1 1 340px", minWidth: "0" }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="RheumaCare Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ width: "100%", aspectRatio: "16/9", borderRadius: "12px", border: "none", display: "block" }}
              />
            ) : (
              <div
                onClick={() => setPlaying(true)}
                style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", cursor: "pointer", background: "#000" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="Watch video"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.85 }}
                />
                {/* Play button */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "68px", height: "48px", backgroundColor: "#ff0000", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 68 48" width="68" height="48">
                      <path d="M66.52 7.74C65.7 4.67 63.33 2.29 60.28 1.48 55.03 0 34 0 34 0S12.97 0 7.72 1.48C4.67 2.29 2.29 4.67 1.48 7.74 0 12.97 0 24 0 24s0 11.03 1.48 16.26c.81 3.08 3.19 5.45 6.24 6.26C12.97 48 34 48 34 48s21.03 0 26.28-1.48c3.05-.81 5.43-3.19 6.24-6.26C68 35.03 68 24 68 24s0-11.03-1.48-16.26z" fill="#ff0000"/>
                      <path d="M27 34l18-10-18-10v20z" fill="#fff"/>
                    </svg>
                  </div>
                </div>
                {/* Watch on YouTube label */}
                <div style={{ position: "absolute", bottom: "12px", right: "12px", background: "rgba(0,0,0,0.6)", color: "#fff", fontSize: "12px", padding: "4px 10px", borderRadius: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg viewBox="0 0 68 48" width="20" height="14"><path d="M66.52 7.74C65.7 4.67 63.33 2.29 60.28 1.48 55.03 0 34 0 34 0S12.97 0 7.72 1.48C4.67 2.29 2.29 4.67 1.48 7.74 0 12.97 0 24 0 24s0 11.03 1.48 16.26c.81 3.08 3.19 5.45 6.24 6.26C12.97 48 34 48 34 48s21.03 0 26.28-1.48c3.05-.81 5.43-3.19 6.24-6.26C68 35.03 68 24 68 24s0-11.03-1.48-16.26z" fill="#ff0000"/><path d="M27 34l18-10-18-10v20z" fill="#fff"/></svg>
                  Watch on YouTube
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyRheumaCare
