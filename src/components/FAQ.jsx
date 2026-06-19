import { useState } from "react"

const faqs = [
  {
    question: "What types of rheumatology conditions do you treat?",
    answer: "We treat a wide range of rheumatic and autoimmune conditions including Rheumatoid Arthritis, Psoriatic Arthritis, Ankylosing Spondylitis, Lupus, Gout, Vasculitis, Fibromyalgia, and other joint, bone, and muscle disorders.",
  },
  {
    question: "What should I expect during my first rheumatology visit?",
    answer: "Your first visit includes a detailed consultation, review of your medical history, physical examination, and if needed, blood tests or imaging. Dr. Raghavendra will explain your diagnosis and discuss a personalised treatment plan.",
  },
  {
    question: "Do you offer biologic and biosimilar treatments?",
    answer: "Yes. We offer the full range of advanced therapies including DMARDs, biologics, and biosimilar treatments for conditions like Rheumatoid Arthritis, Psoriatic Arthritis, and Ankylosing Spondylitis.",
  },
  {
    question: "Can I get a second opinion or an online consultation?",
    answer: "Yes, we welcome second opinions. We also offer online consultations for patients who cannot visit in person. Please book through our appointment page and mention your preference.",
  },
  {
    question: "How do I schedule an appointment with Dr. Raghavendra H?",
    answer: "You can book an appointment directly through our website using the Book Appointment button, or call our clinic. We typically have appointments available within a few days.",
  },
  {
    question: "How long does rheumatology treatment take to show results?",
    answer: "This depends on the condition and the treatment. Some patients see improvement within weeks, while others may take 3–6 months. Dr. Raghavendra will set realistic expectations and monitor your progress closely.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section style={{ backgroundColor: "#f0f2f8", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 2.8rem)",
          fontWeight: 700,
          color: "#0f616e",
          textAlign: "center",
          marginBottom: "2.5rem",
          letterSpacing: "-0.4px",
        }}>
          FAQ's
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {/* Left bullet dot */}
                <span style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#0f616e",
                  border: "2px solid #0f616e",
                  flexShrink: 0,
                  display: "inline-block",
                }} />

                <span style={{
                  flex: 1,
                  fontFamily: "var(--font-base)",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#0f616e",
                  lineHeight: 1.5,
                }}>
                  {faq.question}
                </span>

                {/* Right +/- circle icon */}
                <span style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1.5px solid #cbd5e1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#64748b",
                  fontSize: "18px",
                  lineHeight: 1,
                }}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div style={{
                  padding: "0 20px 18px 44px",
                  fontSize: "17px",
                  color: "#4a5568",
                  lineHeight: 1.75,
                  fontFamily: "var(--font-base)",
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ
