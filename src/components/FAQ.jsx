import { useState } from "react"
import { Plus, Minus } from "lucide-react"

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
  const [openIndex, setOpenIndex] = useState(null)

  const half = Math.ceil(faqs.length / 2)
  const leftFaqs = faqs.slice(0, half)
  const rightFaqs = faqs.slice(half)

  const FaqItem = ({ faq, index }) => (
    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", backgroundColor: "#fff" }}>
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        style={{ width: "100%", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", cursor: "pointer", border: "none", textAlign: "left", gap: "12px" }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 400, color: "#1a202c", lineHeight: 1.5 }}>{faq.question}</span>
        {openIndex === index
          ? <Minus size={16} style={{ color: "#0f616e", flexShrink: 0 }} />
          : <Plus size={16} style={{ color: "#0f616e", flexShrink: 0 }} />
        }
      </button>
      {openIndex === index && (
        <div style={{ padding: "0 20px 16px", paddingTop: "12px", fontSize: "14px", color: "#64748b", lineHeight: 1.7, borderTop: "1px solid #e2e8f0" }}>
          {faq.answer}
        </div>
      )}
    </div>
  )

  return (
    <section style={{ backgroundColor: "#f8f9fb", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 400, color: "#0f616e", letterSpacing: "-0.8px", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.6 }}>
            Common questions patients ask before their first visit to RheumaCare
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="faq-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {leftFaqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {rightFaqs.map((faq, i) => <FaqItem key={i + half} faq={faq} index={i + half} />)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQ
