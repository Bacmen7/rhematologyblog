import { useState } from "react"
import {
  CalendarDays,
  CircleUserRound,
  MapPin,
  MessageCircle,
  Network,
  Smartphone,
  Stethoscope,
} from "lucide-react"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const stepLabels = [
  "Which joints concern you most?",
  "How do your symptoms feel?",
  "How long have you had this?",
  "About You",
  "Specialist Consultation",
]

const concernOptions = [
  { label: "My hand or wrist joints", icon: Stethoscope },
  { label: "My back, neck or spine", icon: CircleUserRound },
  { label: "My knees, hips or feet", icon: MapPin },
  { label: "Multiple joints or areas", icon: Network },
]

const symptomOptions = [
  "Stiff, swollen or painful joints in the morning",
  "Pain that increases with movement or activity",
  "Back stiffness that improves after movement",
  "Joint symptoms with fatigue, rash or repeated flares",
]

const durationOptions = [
  "Less than 1 month",
  "Less than 6 months",
  "More than 6 months",
  "I am not sure",
]

const consultationOptions = [
  {
    label: "Yes, as soon as possible",
    help: "I need early advice from a specialist",
    icon: Stethoscope,
  },
  {
    label: "Yes, within the next few weeks",
    help: "I would like a planned consultation",
    icon: CalendarDays,
  },
  {
    label: "Not yet - just want information",
    help: "I am exploring care options right now",
    icon: MessageCircle,
  },
  {
    label: "Yes, via teleconsultation",
    help: "I prefer an online consultation from home",
    icon: Smartphone,
  },
]

const initialData = {
  concern: "Multiple joints or areas",
  symptoms: "Joint symptoms with fatigue, rash or repeated flares",
  duration: "I am not sure",
  title: "",
  fullName: "",
  phone: "",
  email: "",
  message: "",
  consultation: "",
}

const fieldStyle = {
  height: "48px",
  width: "100%",
  borderRadius: "8px",
  border: "1px solid #d9e4e5",
  background: "#ffffff",
  padding: "0 12px",
  fontSize: "16px",
  color: "#354850",
  outline: "none",
  fontFamily: "var(--font-base)",
}

function Sidebar({ step }) {
  return (
    <aside className="lg:w-[46.6%]" style={{ background: "#0f616e", color: "#ffffff", padding: "clamp(52px, 7vw, 89px) clamp(28px, 5vw, 52px) 40px" }}>
      <div style={{ maxWidth: "390px" }}>
        <p style={{ color: "rgba(255,255,255,0.76)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", marginBottom: "20px", textTransform: "uppercase" }}>
          Omni Rheuma - India
        </p>
        <h1 style={{ color: "#ffffff", fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.2vw, 2.65rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: "24px" }}>
          Complete Quick
          <br />
          Online <span style={{ color: "rgba(255,255,255,0.66)" }}>Assessment</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: 1.7, maxWidth: "355px", marginBottom: "30px" }}>
          Answer a few simple questions so our rheumatology specialists can understand your symptoms and recommend the right care for you.
        </p>
        <ol style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", margin: 0, padding: 0 }}>
          {stepLabels.map((label, index) => {
            const number = index + 1
            const active = number === step
            return (
              <li key={label} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                <span style={{
                  alignItems: "center",
                  background: active ? "#e86531" : "rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  color: active ? "#ffffff" : "rgba(255,255,255,0.8)",
                  display: "flex",
                  flexShrink: 0,
                  height: "28px",
                  justifyContent: "center",
                  width: "28px",
                }}>
                  {number}
                </span>
                <span style={{ color: active ? "#ffffff" : "rgba(255,255,255,0.78)", fontWeight: active ? 700 : 400 }}>{label}</span>
              </li>
            )
          })}
        </ol>
      </div>
    </aside>
  )
}

function SelectOption({ selected, onClick, children, icon: Icon, compact = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        alignItems: "center",
        background: selected ? "#0f616e" : "#ffffff",
        border: `1px solid ${selected ? "#0f616e" : "#d9e4e5"}`,
        borderRadius: "8px",
        color: selected ? "#ffffff" : "#354850",
        cursor: "pointer",
        display: "flex",
        fontFamily: "var(--font-base)",
        fontSize: "16px",
        fontWeight: 600,
        gap: "16px",
        minHeight: compact ? "54px" : "68px",
        padding: "10px 17px",
        textAlign: "left",
        transition: "all 0.2s ease",
        width: "100%",
      }}
    >
      {Icon && (
        <span style={{
          alignItems: "center",
          background: selected ? "rgba(255,255,255,0.15)" : "#e6f6f7",
          borderRadius: "8px",
          color: selected ? "#ffffff" : "#0f616e",
          display: "flex",
          flexShrink: 0,
          height: "39px",
          justifyContent: "center",
          width: "39px",
        }}>
          <Icon size={20} strokeWidth={1.7} />
        </span>
      )}
      {children}
    </button>
  )
}

function InputField({ label, children }) {
  return (
    <label>
      <span style={{ color: "#0f616e", display: "block", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "8px", textTransform: "uppercase" }}>
        {label}
      </span>
      {children}
    </label>
  )
}

export default function BookAppointment() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)

  const update = (field, value) => {
    setData((current) => ({ ...current, [field]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (step < 5) {
      setStep((current) => current + 1)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen" style={{ background: "#ffffff", color: "#0f2e33", fontFamily: "var(--font-base)" }}>
      <Header />
      <main>
        <div style={{ borderBottom: "1px solid #d9e6e5", overflow: "hidden" }}>
          <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 82px)" }}>
            <Sidebar step={step} />

            <section className="flex-1" style={{ background: "#f7fbfa", padding: "clamp(32px, 5vw, 52px) clamp(20px, 5vw, 54px) 40px" }}>
              <form onSubmit={onSubmit} style={{ maxWidth: "710px", width: "100%" }}>
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ background: "#d8e7e6", height: "3px" }}>
                    <div style={{ background: "#1AA3B5", height: "3px", transition: "width 0.25s ease", width: `${step * 20}%` }} />
                  </div>
                  <p style={{ color: "#66777b", fontSize: "12px", marginTop: "7px" }}>Step {step} of 5</p>
                </div>

                {submitted ? (
                  <div style={{ background: "#ffffff", borderRadius: "14px", boxShadow: "0 1px 8px rgba(15,97,110,0.08)", padding: "48px 36px", textAlign: "center" }}>
                    <h2 style={{ color: "#0f616e", fontFamily: "var(--font-display)", fontSize: "2.2rem", marginBottom: "12px" }}>Thank you</h2>
                    <p style={{ color: "#68787c", fontSize: "16px", lineHeight: 1.7 }}>
                      Our rheumatology specialist will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    {step === 1 && (
                      <div>
                        <h2 style={{ color: "#0f616e", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", lineHeight: 1.2, marginBottom: "8px" }}>
                          Which joints are causing you the most concern?
                        </h2>
                        <p style={{ color: "#718287", fontSize: "16px", lineHeight: 1.7, marginBottom: "21px" }}>
                          Select the option that best describes your symptoms
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {concernOptions.map(({ label, icon }) => (
                            <SelectOption key={label} icon={icon} selected={data.concern === label} onClick={() => update("concern", label)}>
                              {label}
                            </SelectOption>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div>
                        <h2 style={{ color: "#0f616e", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", lineHeight: 1.2, marginBottom: "8px" }}>My symptoms are...</h2>
                        <p style={{ color: "#718287", fontSize: "16px", lineHeight: 1.7, marginBottom: "21px" }}>
                          How would you describe the pain or stiffness you experience?
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                          {symptomOptions.map((label) => (
                            <SelectOption key={label} compact selected={data.symptoms === label} onClick={() => update("symptoms", label)}>
                              {label}
                            </SelectOption>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div>
                        <h2 style={{ color: "#0f616e", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", lineHeight: 1.2, marginBottom: "8px" }}>
                          I have had this problem for...
                        </h2>
                        <p style={{ color: "#718287", fontSize: "16px", lineHeight: 1.7, marginBottom: "21px" }}>
                          This helps us understand how promptly you may need an evaluation
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                          {durationOptions.map((label) => (
                            <SelectOption key={label} compact selected={data.duration === label} onClick={() => update("duration", label)}>
                              {label}
                            </SelectOption>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 4 && (
                      <div>
                        <h2 style={{ color: "#0f616e", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", lineHeight: 1.2, marginBottom: "8px" }}>About You</h2>
                        <p style={{ color: "#718287", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
                          A few details so we can help you better
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
                          <InputField label="Title">
                            <select value={data.title} onChange={(event) => update("title", event.target.value)} style={fieldStyle}>
                              <option value="">Mr</option>
                              <option>Mrs</option>
                              <option>Ms</option>
                              <option>Dr</option>
                            </select>
                          </InputField>
                          <InputField label="Full Name">
                            <input required value={data.fullName} onChange={(event) => update("fullName", event.target.value)} style={fieldStyle} />
                          </InputField>
                          <InputField label="Phone Number">
                            <input required type="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} style={fieldStyle} />
                          </InputField>
                          <InputField label="Email Address">
                            <input required type="email" value={data.email} onChange={(event) => update("email", event.target.value)} style={fieldStyle} />
                          </InputField>
                          <label className="sm:col-span-2">
                            <span style={{ color: "#0f616e", display: "block", fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "8px", textTransform: "uppercase" }}>
                              Your Message
                            </span>
                            <textarea value={data.message} onChange={(event) => update("message", event.target.value)} style={{ ...fieldStyle, height: "80px", padding: "12px", resize: "none" }} />
                          </label>
                        </div>
                        <p style={{ color: "#e86531", fontSize: "14px", marginTop: "16px" }}>
                          Please fill in your name, phone and email to continue.
                        </p>
                      </div>
                    )}

                    {step === 5 && (
                      <div>
                        <h2 style={{ color: "#0f616e", fontSize: "clamp(1.8rem, 3vw, 2.2rem)", lineHeight: 1.2, marginBottom: "8px" }}>
                          Do you require a specialist consultation right now?
                        </h2>
                        <p style={{ color: "#718287", fontSize: "16px", lineHeight: 1.7, marginBottom: "21px" }}>
                          Our rheumatologists are available for in-clinic and online consultations
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "12px" }}>
                          {consultationOptions.map((option) => (
                            <button
                              type="button"
                              key={option.label}
                              onClick={() => update("consultation", option.label)}
                              style={{
                                background: "#ffffff",
                                border: `1px solid ${data.consultation === option.label ? "#0f616e" : "#d9e4e5"}`,
                                borderRadius: "11px",
                                boxShadow: data.consultation === option.label ? "0 0 0 1px #0f616e" : "none",
                                cursor: "pointer",
                                minHeight: "136px",
                                padding: "16px",
                                textAlign: "center",
                              }}
                            >
                              <option.icon color="#1AA3B5" size={28} style={{ margin: "0 auto 12px" }} />
                              <span style={{ color: "#0f616e", display: "block", fontSize: "16px", fontWeight: 700 }}>{option.label}</span>
                              <span style={{ color: "#738287", display: "block", fontSize: "14px", marginTop: "4px" }}>{option.help}</span>
                            </button>
                          ))}
                        </div>
                        <p style={{ color: "#e86531", fontSize: "14px", marginTop: "20px" }}>
                          Please select an option to continue.
                        </p>
                      </div>
                    )}

                    <div style={{ display: "flex", gap: "12px", justifyContent: "flex-start", marginTop: "28px" }}>
                      <button
                        type="button"
                        onClick={() => setStep((current) => Math.max(1, current - 1))}
                        style={{
                          background: step === 1 ? "#92aaaa" : "#0f616e",
                          border: "none",
                          borderRadius: "9999px",
                          color: "#ffffff",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: 700,
                          height: "44px",
                          minWidth: "112px",
                          padding: "0 24px",
                        }}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        style={{
                          background: "#e86531",
                          border: "none",
                          borderRadius: "9999px",
                          color: "#ffffff",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: 700,
                          height: "44px",
                          minWidth: "148px",
                          padding: "0 32px",
                        }}
                      >
                        {step === 5 ? "Submit" : "Next"}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </section>
          </div>
        </div>
      </main>
      <BriefingFooter />
    </div>
  )
}
