import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Clock, Phone, ArrowRight, Check } from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const locations = [
  {
    id: "hebbal",
    name: "Manipal Hospital",
    area: "Hebbal, Bangalore",
    address: "Kirloskar Business Park, Bellary Road",
    phone: "+91 80 2222 4444",
    timings: "Mon, Wed, Fri · 10 AM – 4 PM",
    fee: "₹1,190",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
  {
    id: "yelahanka",
    name: "Manipal Hospital",
    area: "Yelahanka, Bangalore",
    address: "Sy No. 23/3, Venkatala Village",
    phone: "+91 80 3333 5555",
    timings: "Mon, Wed, Fri · 10 AM – 12 PM",
    fee: "₹1,200",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
  {
    id: "columbia",
    name: "Columbia Asia",
    area: "Hebbal, Bangalore",
    address: "Kirloskar Business Park, Bellary Road",
    phone: "+91 80 4444 6666",
    timings: "Tue, Thu · 11 AM – 2 PM",
    fee: "₹1,100",
    bookingUrl: "https://www.practo.com/bangalore/doctor/raghavendra-h-rheumatologist/info",
  },
]

const conditionsList = [
  "Rheumatoid Arthritis",
  "Osteoarthritis",
  "Gout",
  "Lupus (SLE)",
  "Psoriatic Arthritis",
  "Ankylosing Spondylitis",
  "Fibromyalgia",
  "Other / Not sure",
]

const InputField = ({ label, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
    <label style={{
      fontSize: "11px", fontWeight: 700, color: "#9a9a9a",
      textTransform: "uppercase", letterSpacing: "0.1em",
      fontFamily: "var(--font-base)"
    }}>{label}</label>
    {children}
  </div>
)

const inputStyle = {
  border: "none",
  borderBottom: "1.5px solid #e0e0e0",
  borderRadius: 0,
  padding: "10px 0",
  fontSize: "15px",
  outline: "none",
  background: "transparent",
  fontFamily: "var(--font-base)",
  color: "#0f2e33",
  width: "100%",
  transition: "border-color 0.2s",
}

export default function BookAppointment() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", condition: "", notes: "", location: "" })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const selectedLoc = locations.find(l => l.id === form.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background-light">
        <Header />
        <div style={{ padding: "0.5rem 1rem 5rem" }}>
          <div className="w-full bg-[#0f616e] rounded-[2rem] relative overflow-hidden" style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="500" height="500" viewBox="0 0 300 300" fill="none">
                <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.5" />
                <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.5" />
              </svg>
            </div>
            <div style={{ textAlign: "center", padding: "48px 24px", position: "relative", zIndex: 10 }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                <Check size={28} color="white" strokeWidth={3} />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "16px" }}>
                Request received.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 36px" }}>
                Our team will confirm your appointment at <br />
                <strong style={{ color: "#fff" }}>{selectedLoc?.name}, {selectedLoc?.area}</strong> within 24 hours.
              </p>
              <Link to="/" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#e86531", color: "#fff", borderRadius: "100px",
                padding: "14px 32px", fontWeight: 700, fontSize: "15px",
                textDecoration: "none", fontFamily: "var(--font-base)"
              }}>
                Back to Home <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
        <BriefingFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background-light">
      <Header />

      {/* ── HERO ── */}
      <div style={{ padding: "0.5rem 1rem 0" }}>
        <div className="w-full bg-[#0f616e] rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden" style={{ padding: "clamp(40px,6vw,80px) clamp(24px,5vw,72px)" }}>
          {/* BG patterns */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg width="420" height="420" viewBox="0 0 300 300" fill="none">
              <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.4" />
              <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.4" />
              <path d="M150 150H300V300C300 217.157 232.843 150 150 150Z" fill="white" fillOpacity="0.15" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none" style={{ transform: "rotate(180deg) translate(-32px,-32px)" }}>
            <svg width="280" height="280" viewBox="0 0 300 300" fill="none">
              <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.4" />
              <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.4" />
            </svg>
          </div>

          <div style={{ position: "relative", zIndex: 10, maxWidth: "680px" }}>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "20px", fontFamily: "var(--font-base)" }}>
              Omni Rheuma · Specialist Consultation
            </p>
            <h1 style={{ fontFamily: "var(--font-display)", color: "#ffffff", fontWeight: 300, fontSize: "clamp(2.4rem,5.5vw,4.2rem)", lineHeight: 1.08, letterSpacing: "-0.5px", marginBottom: "22px" }}>
              Book a consultation<br />
              <span style={{ fontWeight: 300, opacity: 0.6 }}>with a rheumatologist</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "17px", lineHeight: 1.7, maxWidth: "520px", marginBottom: "36px" }}>
              Get expert care for joint pain, autoimmune conditions, and musculoskeletal disorders. Same-week slots available across Bangalore.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {["Same-week appointments", "3 clinic locations", "15+ years experience"].map(t => (
                <span key={t} style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "100px", padding: "7px 14px",
                  color: "rgba(255,255,255,0.8)", fontSize: "13px", fontFamily: "var(--font-base)"
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "56px", alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-[1fr_380px]">

          {/* ── LEFT ── */}
          <div>

            {/* Step 1 — Clinic */}
            <div style={{ marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#0f616e", color: "#fff", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-base)" }}>1</span>
                <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "1.5rem", fontWeight: 400, margin: 0 }}>Choose a clinic</h2>
              </div>
              <p style={{ color: "#aaa", fontSize: "14px", marginLeft: "34px", marginBottom: "20px", fontFamily: "var(--font-base)" }}>Select the location most convenient for you</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {locations.map((loc) => {
                  const active = form.location === loc.id
                  return (
                    <button key={loc.id} type="button" onClick={() => setForm({ ...form, location: loc.id })}
                      style={{
                        textAlign: "left", background: active ? "#f0fafa" : "#fff",
                        border: `2px solid ${active ? "#0f616e" : "#ebebeb"}`,
                        borderRadius: "16px", padding: "18px 20px", cursor: "pointer",
                        width: "100%", transition: "all 0.15s", position: "relative"
                      }}>
                      {active && (
                        <span style={{ position: "absolute", top: "14px", right: "16px", width: "20px", height: "20px", borderRadius: "50%", background: "#0f616e", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Check size={11} color="#fff" strokeWidth={3} />
                        </span>
                      )}
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: active ? "#0f616e" : "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <MapPin size={17} color={active ? "#fff" : "#aaa"} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                            <p style={{ fontWeight: 700, color: "#0f2e33", fontSize: "15px", margin: 0, fontFamily: "var(--font-base)" }}>{loc.name}</p>
                            <span style={{ fontSize: "12px", color: "#aaa", fontFamily: "var(--font-base)" }}>{loc.area}</span>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "8px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#888", fontSize: "13px", fontFamily: "var(--font-base)" }}>
                              <Clock size={12} /> {loc.timings}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#888", fontSize: "13px", fontFamily: "var(--font-base)" }}>
                              <Phone size={12} /> {loc.phone}
                            </span>
                          </div>
                        </div>
                        <span style={{
                          background: active ? "#0f616e" : "#f5f5f5", color: active ? "#fff" : "#888",
                          borderRadius: "100px", padding: "5px 13px", fontSize: "13px", fontWeight: 700,
                          whiteSpace: "nowrap", flexShrink: 0, fontFamily: "var(--font-base)"
                        }}>{loc.fee}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2 — Details */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#0f616e", color: "#fff", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-base)" }}>2</span>
                <h2 style={{ fontFamily: "var(--font-display)", color: "#0f2e33", fontSize: "1.5rem", fontWeight: 400, margin: 0 }}>Your details</h2>
              </div>
              <p style={{ color: "#aaa", fontSize: "14px", marginLeft: "34px", marginBottom: "28px", fontFamily: "var(--font-base)" }}>We'll use this to confirm your appointment</p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "28px", background: "#fff", borderRadius: "20px", padding: "32px", border: "1.5px solid #ebebeb" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <InputField label="Full Name *">
                    <input required type="text" placeholder="Rajesh Kumar"
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle} />
                  </InputField>
                  <InputField label="Phone *">
                    <input required type="tel" placeholder="+91 98765 43210"
                      value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle} />
                  </InputField>
                </div>

                <InputField label="Email">
                  <input type="email" placeholder="you@email.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle} />
                </InputField>

                <InputField label="Condition">
                  <select value={form.condition} onChange={(e) => setForm({ ...form, condition: e.target.value })}
                    style={{ ...inputStyle, color: form.condition ? "#0f2e33" : "#aaa" }}>
                    <option value="">Select your condition</option>
                    {conditionsList.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </InputField>

                <InputField label="Anything we should know?">
                  <textarea rows={3} placeholder="Symptoms, duration, previous diagnosis..."
                    value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    style={{ ...inputStyle, resize: "none", paddingTop: "10px" }} />
                </InputField>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingTop: "4px" }}>
                  <button type="submit"
                    className="inline-flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                    style={{
                      background: "#e86531", color: "#fff", borderRadius: "100px",
                      padding: "15px 34px", fontSize: "15px", fontWeight: 700,
                      border: "none", cursor: "pointer", fontFamily: "var(--font-base)",
                      display: "flex", alignItems: "center", gap: "10px"
                    }}>
                    Request Appointment
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                  <p style={{ fontSize: "12px", color: "#bbb", fontFamily: "var(--font-base)" }}>
                    Confirmed within 24 hrs ·{" "}
                    <a href="#" style={{ color: "#bbb", textDecoration: "underline" }}>Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "100px" }}>

            {/* Doctor card */}
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1.5px solid #ebebeb" }}>
              <div style={{ background: "#0f616e", padding: "22px 24px" }}>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px", fontFamily: "var(--font-base)" }}>Your specialist</p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", overflow: "hidden", flexShrink: 0, border: "2px solid rgba(255,255,255,0.25)" }}>
                    <img src="/dr_image/dr1.png" alt="Dr. Raghavendra H" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = "none" }} />
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: "15px", margin: 0, fontFamily: "var(--font-base)" }}>Dr. Raghavendra H</p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", margin: "3px 0 0", fontFamily: "var(--font-base)" }}>Rheumatology Specialist</p>
                  </div>
                </div>
              </div>
              <div style={{ background: "#fff", padding: "18px 24px", display: "flex", flexDirection: "column", gap: "9px" }}>
                {["Fellowship trained in Rheumatology", "15+ years clinical experience", "500+ complex cases annually"].map((t, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "9px", fontSize: "13px", color: "#666", fontFamily: "var(--font-base)" }}>
                    <span style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#e6f6f7", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={8} color="#0f616e" strokeWidth={3} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={{ background: "#fff", borderRadius: "20px", padding: "22px 24px", border: "1.5px solid #ebebeb" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[{ n: "90%+", label: "patients find relief in 10 weeks" }, { n: "86%", label: "get diagnosis within 3 months" }].map((s, i) => (
                  <div key={i}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 700, color: "#0f2e33", margin: 0, lineHeight: 1 }}>{s.n}</p>
                    <p style={{ fontSize: "12px", color: "#aaa", marginTop: "6px", lineHeight: 1.5, fontFamily: "var(--font-base)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div style={{ background: "#fff", borderRadius: "20px", padding: "22px 24px", border: "1.5px solid #ebebeb" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#ccc", marginBottom: "18px", fontFamily: "var(--font-base)" }}>How it works</p>
              {[
                { n: "01", t: "Submit request", d: "2 minutes to fill." },
                { n: "02", t: "We call you", d: "Confirm time & clinic." },
                { n: "03", t: "Consultation", d: "Diagnosis + treatment plan." },
              ].map((s) => (
                <div key={s.n} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#e0e0e0", lineHeight: 1, flexShrink: 0, marginTop: "-1px" }}>{s.n}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: "#0f2e33", fontSize: "13px", margin: 0, fontFamily: "var(--font-base)" }}>{s.t}</p>
                    <p style={{ color: "#aaa", fontSize: "12px", margin: "2px 0 0", fontFamily: "var(--font-base)" }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call */}
            <div style={{ background: "#0f616e", borderRadius: "20px", padding: "20px 24px" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "12px", fontFamily: "var(--font-base)" }}>Prefer to call?</p>
              <a href="tel:+919833943177" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                <Phone size={17} color="#fff" />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px", fontFamily: "var(--font-base)" }}>+91 98339 43177</span>
              </a>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "5px", fontFamily: "var(--font-base)" }}>Mon – Sat · 9 AM – 6 PM</p>
            </div>

          </div>
        </div>
      </div>

      <BriefingFooter />
    </div>
  )
}
