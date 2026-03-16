import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const coverBoxes = [
  { title: "Inflammatory Arthritis", desc: "RA, PsA, AS, JIA — autoimmune conditions that cause chronic joint inflammation and require disease-modifying treatment." },
  { title: "Degenerative Disease", desc: "Osteoarthritis and age-related joint wear. Cartilage breakdown, bone spurs, and progressive joint narrowing." },
  { title: "Connective Tissue Disease", desc: "Lupus, scleroderma, Sjögren's, myositis — systemic conditions affecting collagen, skin, and internal organs." },
  { title: "Vasculitis", desc: "Inflammation of blood vessels, from giant cell arteritis to ANCA-associated vasculitis. Can affect any organ system." },
  { title: "Metabolic Bone Disease", desc: "Osteoporosis, Paget's disease, and vitamin D disorders. Bone density loss and fracture prevention." },
  { title: "Soft Tissue Disorders", desc: "Fibromyalgia, tendinitis, bursitis, carpal tunnel — conditions affecting muscles, tendons, and ligaments." },
]

const symptomQuestions = [
  { q: "Do you have pain in your joints?", sub: "Persistent aching, throbbing, or sharp pain in one or more joints" },
  { q: "Do your joints feel stiff in the morning?", sub: "Stiffness lasting more than 30 minutes after waking" },
  { q: "Do you notice swelling or warmth around any joint?", sub: "Visible puffiness, redness, or heat in joint areas" },
  { q: "Does back pain wake you at night or worsen with rest?", sub: "Inflammatory back pain pattern — improves with movement" },
  { q: "Have these symptoms lasted more than 6 weeks?", sub: "Duration is a key factor in distinguishing inflammatory conditions" },
  { q: "Do you have fatigue, rash, or family history of arthritis?", sub: "Systemic symptoms and genetic predisposition matter" },
]

const conditionData = {
  ra: {
    name: "Rheumatoid Arthritis",
    typeLabel: "Autoimmune",
    overview: "Rheumatoid arthritis (RA) is a chronic autoimmune disorder that primarily affects joints, causing pain, swelling, stiffness, and progressive joint destruction. The immune system mistakenly attacks the synovial membrane lining the joints, leading to inflammation that can damage cartilage and bone.",
    keyPoints: [
      "Affects ~1% of the global population, women 2–3x more often than men",
      "Morning stiffness lasting >30 minutes is a hallmark symptom",
      "Symmetrical joint involvement (both hands, both wrists) is typical",
      "Early treatment within the 'window of opportunity' (first 12 weeks) dramatically improves outcomes",
      "Can affect organs beyond joints — heart, lungs, eyes, blood vessels",
    ],
    treatment: [
      "DMARDs (methotrexate as first-line)",
      "Biologics (TNF inhibitors, IL-6 blockers)",
      "JAK inhibitors (tofacitinib, baricitinib)",
      "Short-term corticosteroids for flare management",
      "Physical therapy and lifestyle modifications",
    ],
    when: "If you have joint swelling lasting more than 6 weeks, morning stiffness exceeding 30 minutes, or a positive RF/Anti-CCP blood test, consult a rheumatologist promptly.",
    articles: [
      { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Research", title: "Treat-to-Target Strategies in RA", time: "8 min" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Treatment", title: "Methotrexate: What You Need to Know", time: "6 min" },
    ],
  },
  oa: {
    name: "Osteoarthritis",
    typeLabel: "Degenerative",
    overview: "Osteoarthritis (OA) is the most common form of arthritis, affecting over 500 million people worldwide. It occurs when the protective cartilage cushioning the ends of bones wears down over time, leading to pain, stiffness, and reduced mobility.",
    keyPoints: [
      "Most common joint disease — affects over 500 million people globally",
      "Primarily affects knees, hips, hands, and spine",
      "Risk increases with age, obesity, joint injury, and repetitive stress",
      "Morning stiffness is brief (<15 minutes), unlike inflammatory arthritis",
      "Bone spurs (osteophytes) and joint space narrowing visible on X-ray",
    ],
    treatment: [
      "Weight management and low-impact exercise",
      "Physical therapy for joint mobilisation and strengthening",
      "NSAIDs and topical analgesics for pain relief",
      "Corticosteroid or hyaluronic acid injections",
      "Joint replacement surgery for advanced cases",
    ],
    when: "If joint pain limits daily activities, doesn't respond to over-the-counter treatments, or you hear grinding/clicking in your joints, see a specialist for evaluation.",
    articles: [
      { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", cat: "Lifestyle", title: "Exercise Strategies for Knee OA", time: "7 min" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Treatment", title: "When to Consider Joint Replacement", time: "9 min" },
    ],
  },
  psa: {
    name: "Psoriatic Arthritis",
    typeLabel: "Autoimmune",
    overview: "Psoriatic arthritis (PsA) is an inflammatory arthritis associated with psoriasis. It can affect any joint and often involves the skin, nails, and entheses (where tendons attach to bone). PsA is a heterogeneous disease with multiple clinical patterns.",
    keyPoints: [
      "Affects up to 30% of people with psoriasis",
      "Can present before, during, or after skin psoriasis appears",
      "Dactylitis (sausage digits) and enthesitis are hallmark features",
      "Five clinical patterns: asymmetric oligoarthritis, symmetric polyarthritis, DIP-predominant, spondylitis, arthritis mutilans",
      "Nail changes (pitting, onycholysis) occur in 80% of PsA patients",
    ],
    treatment: [
      "DMARDs (methotrexate, leflunomide)",
      "Biologics — TNF inhibitors, IL-17 inhibitors (secukinumab), IL-23 inhibitors",
      "JAK inhibitors (tofacitinib, upadacitinib)",
      "PDE4 inhibitor (apremilast) for mild-moderate disease",
      "Topical treatments for skin psoriasis component",
    ],
    when: "If you have psoriasis and develop joint pain, swelling, or stiffness — or if you notice sausage-like swelling of fingers/toes — seek rheumatology evaluation promptly.",
    articles: [
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", cat: "Research", title: "IL-17 vs TNF Inhibitors in PsA", time: "6 min" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Diagnosis", title: "Recognising Early PsA", time: "5 min" },
    ],
  },
  as: {
    name: "Ankylosing Spondylitis",
    typeLabel: "Autoimmune",
    overview: "Ankylosing spondylitis (AS) is a chronic inflammatory disease primarily affecting the spine and sacroiliac joints. Over time, chronic spinal inflammation can lead to fusion of the vertebrae (ankylosis), resulting in reduced flexibility and a stooped posture.",
    keyPoints: [
      "Typically begins in young adults (ages 17–35), more common in men",
      "Back pain that improves with exercise and worsens with rest is characteristic",
      "Night pain and prolonged morning stiffness (>30 min) are hallmarks",
      "HLA-B27 gene is positive in ~90% of patients",
      "Can involve peripheral joints, eyes (uveitis), heart, and lungs",
    ],
    treatment: [
      "NSAIDs as first-line treatment (continuous use may slow spinal fusion)",
      "Biologics — TNF inhibitors and IL-17 inhibitors for active disease",
      "JAK inhibitors (upadacitinib) for refractory cases",
      "Structured exercise program and physical therapy are essential",
      "Posture management and ergonomic workplace adaptations",
    ],
    when: "If you're under 40 with back pain lasting more than 3 months that improves with movement and worsens at rest, especially with night pain, see a rheumatologist.",
    articles: [
      { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", cat: "Lifestyle", title: "Exercise Programs for AS Patients", time: "7 min" },
      { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Research", title: "HLA-B27 and Axial SpA", time: "8 min" },
    ],
  },
  gout: {
    name: "Gout",
    typeLabel: "Metabolic",
    overview: "Gout is a form of inflammatory arthritis caused by the deposition of monosodium urate (MSU) crystals in joints and soft tissues. It results from chronically elevated serum uric acid levels (hyperuricaemia) and presents as acute, excruciatingly painful joint attacks.",
    keyPoints: [
      "Affects ~4% of adults — most common inflammatory arthritis in men",
      "Classic presentation: sudden, severe pain in the big toe (podagra)",
      "Attacks often strike at night and peak within 12–24 hours",
      "Tophi (urate crystal deposits) can develop after years of uncontrolled disease",
      "Strongly associated with metabolic syndrome, kidney disease, and cardiovascular risk",
    ],
    treatment: [
      "Acute flare: colchicine, NSAIDs, or corticosteroids",
      "Urate-lowering therapy: allopurinol (first-line), febuxostat",
      "Target serum urate <6 mg/dL (or <5 mg/dL if tophi present)",
      "Dietary modifications: limit purines, alcohol, fructose",
      "Weight management and adequate hydration",
    ],
    when: "If you experience sudden, severe joint pain with redness and swelling — especially in the big toe, ankle, or knee — seek urgent evaluation to confirm gout and begin treatment.",
    articles: [
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Treatment", title: "Urate-Lowering Therapy Guide", time: "6 min" },
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", cat: "Lifestyle", title: "Gout and Diet: What Works", time: "5 min" },
    ],
  },
  ctd: {
    name: "Connective Tissue Disease",
    typeLabel: "Autoimmune",
    overview: "Connective tissue diseases (CTDs) are a group of autoimmune conditions that affect collagen and connective tissue throughout the body. This includes scleroderma, Sjögren's syndrome, dermatomyositis, polymyositis, and mixed connective tissue disease (MCTD).",
    keyPoints: [
      "Systemic diseases that can affect skin, joints, muscles, blood vessels, and internal organs",
      "ANA (antinuclear antibody) testing is a key screening tool",
      "Raynaud's phenomenon is common across many CTDs",
      "Overlap syndromes are frequent — patients may have features of multiple CTDs",
      "Organ involvement (lungs, kidneys, heart) determines prognosis",
    ],
    treatment: [
      "Immunosuppressants (mycophenolate, azathioprine, cyclophosphamide)",
      "Corticosteroids for acute flares and organ-threatening disease",
      "Biologics (rituximab for refractory cases)",
      "Organ-specific management (e.g., ACE inhibitors for renal crisis)",
      "Regular screening for pulmonary and cardiac complications",
    ],
    when: "If you have Raynaud's phenomenon combined with joint pain, skin changes, muscle weakness, or unexplained organ dysfunction, a rheumatology evaluation is essential.",
    articles: [
      { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Diagnosis", title: "Understanding ANA Testing", time: "7 min" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Research", title: "Advances in Scleroderma Treatment", time: "8 min" },
    ],
  },
  fibro: {
    name: "Fibromyalgia",
    typeLabel: "Pain Syndrome",
    overview: "Fibromyalgia is a chronic condition characterised by widespread musculoskeletal pain, fatigue, sleep disturbances, and cognitive difficulties ('fibro fog'). It involves central sensitisation — the nervous system amplifies pain signals.",
    keyPoints: [
      "Affects 2–4% of the population, predominantly women",
      "Widespread pain lasting >3 months on both sides of the body, above and below the waist",
      "Associated with fatigue, unrefreshing sleep, and cognitive dysfunction",
      "No inflammatory markers or imaging abnormalities — diagnosis is clinical",
      "Frequently co-exists with other rheumatic conditions (RA, lupus, OA)",
    ],
    treatment: [
      "Multimodal approach is essential — no single treatment is sufficient",
      "Medications: duloxetine, pregabalin, milnacipran, low-dose amitriptyline",
      "Regular aerobic exercise — strongest evidence base of any treatment",
      "Cognitive behavioural therapy (CBT) for pain management and coping",
      "Sleep hygiene optimisation and stress management",
    ],
    when: "If you have widespread pain lasting more than 3 months with significant fatigue and sleep problems that don't improve with rest, a rheumatologist can help establish the diagnosis and create a treatment plan.",
    articles: [
      { img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", cat: "Lifestyle", title: "Exercise for Fibromyalgia", time: "6 min" },
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", cat: "Treatment", title: "CBT and Chronic Pain", time: "7 min" },
    ],
  },
  vasculitis: {
    name: "Vasculitis",
    typeLabel: "Autoimmune",
    overview: "Vasculitis refers to a group of disorders characterised by inflammation of blood vessels. It can affect arteries, veins, and capillaries of any size, in any organ. Classification depends on the size of vessels involved — large, medium, or small vessel vasculitis.",
    keyPoints: [
      "Can affect any organ system — symptoms depend on which vessels are inflamed",
      "Large vessel: giant cell arteritis (GCA), Takayasu arteritis",
      "Medium vessel: polyarteritis nodosa (PAN), Kawasaki disease",
      "Small vessel: ANCA-associated vasculitis (GPA, MPA, EGPA), IgA vasculitis",
      "Constitutional symptoms (fever, weight loss, fatigue) are common across all types",
    ],
    treatment: [
      "High-dose corticosteroids for induction of remission",
      "Cyclophosphamide or rituximab for ANCA-associated vasculitis",
      "Tocilizumab for giant cell arteritis (steroid-sparing)",
      "Maintenance therapy with azathioprine, methotrexate, or rituximab",
      "Regular monitoring of organ function and disease activity",
    ],
    when: "If you experience unexplained fever, weight loss, new severe headaches (especially over age 50), skin purpura, or blood/protein in urine combined with joint pain, seek urgent evaluation.",
    articles: [
      { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Research", title: "Rituximab in ANCA Vasculitis", time: "9 min" },
      { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Diagnosis", title: "GCA: Recognising the Signs", time: "6 min" },
    ],
  },
  lupus: {
    name: "Lupus (SLE)",
    typeLabel: "Autoimmune",
    overview: "Systemic lupus erythematosus (SLE) is a chronic autoimmune disease that can affect virtually any organ system. The immune system produces autoantibodies that attack healthy tissue, causing widespread inflammation in the skin, joints, kidneys, brain, heart, and lungs.",
    keyPoints: [
      "Affects women 9x more often than men, typically ages 15–45",
      "Butterfly (malar) rash across the cheeks is a classic sign",
      "Lupus nephritis (kidney inflammation) occurs in ~50% of patients",
      "Disease course is characterised by flares and remissions",
      "ANA positive in >95% of cases; anti-dsDNA and anti-Smith are specific markers",
    ],
    treatment: [
      "Hydroxychloroquine — cornerstone therapy for ALL lupus patients",
      "Immunosuppressants (mycophenolate, azathioprine) for organ involvement",
      "Belimumab (first biologic approved for lupus)",
      "Voclosporin for lupus nephritis",
      "Corticosteroids for flares — with goal of minimising long-term use",
    ],
    when: "If you have a butterfly rash, joint pain, unexplained fatigue, mouth sores, sun sensitivity, or a positive ANA test, consult a rheumatologist for lupus evaluation.",
    articles: [
      { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", cat: "Research", title: "Belimumab + Voclosporin in Lupus Nephritis", time: "7 min" },
      { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Treatment", title: "Hydroxychloroquine: The Lupus Essential", time: "5 min" },
    ],
  },
}

const treatmentCards = [
  {
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600",
    badge: "Disease-Modifying",
    title: "DMARDs",
    desc: "Methotrexate, Hydroxychloroquine, Sulfasalazine, Leflunomide",
    footer: "First-line therapy for inflammatory arthritis",
  },
  {
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600",
    badge: "Biologics",
    title: "Biologic Therapies",
    desc: "TNF inhibitors, IL-6, IL-17, B-cell",
    footer: "Precision-targeted immune modulation",
  },
  {
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
    badge: "JAK Inhibitors",
    title: "JAK Inhibitors",
    desc: "Baricitinib, Tofacitinib, Upadacitinib",
    footer: "Oral small-molecule targeted therapy",
  },
  {
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    badge: "Physiotherapy",
    title: "Physiotherapy & Exercise",
    desc: "Joint mobilisation, strength training, hydrotherapy",
    footer: "Restore function and reduce pain",
  },
  {
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600",
    badge: "Procedures",
    title: "Joint Injections",
    desc: "Corticosteroid, hyaluronic acid, PRP",
    footer: "Targeted relief for specific joints",
  },
  {
    img: "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=600",
    badge: "Surgery",
    title: "Surgery",
    desc: "TKR, THR, synovectomy, arthroscopy, spinal fusion",
    footer: "When conservative options aren't enough",
  },
  {
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    badge: "Lifestyle",
    title: "Diet & Nutrition",
    desc: "Mediterranean diet, omega-3, weight management",
    footer: "Anti-inflammatory eating strategies",
  },
  {
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
    badge: "Pain Management",
    title: "Pain Management",
    desc: "NSAIDs, analgesics, topical agents, TENS, CBT",
    footer: "Multi-modal pain control",
  },
]

const featuredArticle = {
  img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
  cat: "Research",
  title: "Treat-to-Target in RA: Does Achieving Remission Actually Prevent Long-Term Joint Damage?",
  author: "Dr. Priya Menon",
  time: "10 min read",
  date: "March 2026",
}

const articleList = [
  { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", cat: "Research", title: "IL-17 vs TNF Inhibitors in PsA", time: "6 min read" },
  { img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400", cat: "Safety", title: "JAK Inhibitors in 2025: Updated CV Risk Data", time: "9 min read" },
  { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400", cat: "Research", title: "Belimumab + Voclosporin in Lupus Nephritis", time: "7 min read" },
  { img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400", cat: "Lifestyle", title: "Mediterranean Diet and CRP Reduction in RA", time: "5 min read" },
]

/* ─────────────────────────────────────────────
   BOOK ICON SVG (used in condition tiles)
   ───────────────────────────────────────────── */
const BookIcon = ({ size = 28, color = "#0f616e" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

/* ─────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────── */

function KnowledgeHub() {
  useEffect(() => {
    document.title = "Knowledge Hub | RheumaInsights"
    return () => { document.title = "RheumaInsights | Professional Rheumatology Resource" }
  }, [])

  /* Symptom checker state */
  const [answers, setAnswers] = useState(Array(6).fill(null))
  const [checkerStep, setCheckerStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (value) => {
    const next = [...answers]
    next[checkerStep] = value
    setAnswers(next)
    if (checkerStep < 5) {
      setCheckerStep(checkerStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetChecker = () => {
    setAnswers(Array(6).fill(null))
    setCheckerStep(0)
    setShowResult(false)
  }

  const yesCount = answers.filter((a) => a === true).length

  const getRiskLevel = () => {
    if (yesCount <= 1) return { key: "safe", label: "Low Risk — Unlikely Inflammatory", color: "#3aa876", bg: "rgba(58,168,118,.12)", border: "rgba(58,168,118,.25)", icon: "\u2714", message: "Your responses suggest a low likelihood of inflammatory arthritis. Maintain a healthy lifestyle and monitor for any changes.", cta: "Learn About Prevention" }
    if (yesCount <= 3) return { key: "consult", label: "Moderate — Consider Evaluation", color: "#e07a3a", bg: "rgba(224,122,58,.12)", border: "rgba(224,122,58,.25)", icon: "!", message: "Some of your responses suggest features that may warrant further evaluation. Consider booking an appointment with a rheumatologist for a thorough assessment.", cta: "Find a Rheumatologist" }
    return { key: "urgent", label: "High Risk — See a Specialist", color: "#d94f4f", bg: "rgba(217,79,79,.12)", border: "rgba(217,79,79,.25)", icon: "!!", message: "Multiple responses suggest features consistent with inflammatory arthritis. We strongly recommend consulting a rheumatologist as soon as possible for proper evaluation and early treatment.", cta: "Book Urgent Consultation" }
  }

  /* Condition panel state */
  const [activeCondition, setActiveCondition] = useState(null)

  /* Newsletter state */
  const [email, setEmail] = useState("")

  return (
    <div className="text-navy-deep bg-white" style={{ fontFamily: "var(--font-base)" }}>
      <Header />
      <main>

        {/* ═══════════ 1 · HERO ═══════════ */}
        <section className="bg-[#e0f3f5] pt-10 pb-10 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block bg-[rgba(26,163,181,.12)] border border-[rgba(26,163,181,.3)] text-[#1AA3B5] text-[0.72rem] font-bold uppercase tracking-[0.07em] rounded-full px-4 py-1" style={{ marginBottom: "1.5rem" }}>
              Evidence-Based Resources
            </span>
            <h1 className="text-navy-deep max-w-[640px]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 400, lineHeight: 1.15, marginBottom: "1rem" }}>
              Rheuma <span className="text-[#1AA3B5]">Knowledge Hub</span>
            </h1>
            <p className="text-[15px] text-navy-muted leading-[1.75] max-w-[500px]" style={{ margin: 0 }}>
              Your comprehensive resource for understanding rheumatic conditions, treatment options, and the latest research — written and reviewed by board-certified rheumatologists.
            </p>
          </div>
        </section>


        {/* ═══════════ 2 · WHAT IS RHEUMATOLOGY ═══════════ */}
        <section className="bg-ghost py-14 md:py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20" style={{ marginBottom: "3rem" }}>
              <div>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase block mb-3" style={{ color: "#1AA3B5" }}>
                  Understanding the Specialty
                </span>
                <h2 className="text-navy-deep" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.5rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px" }}>
                  What Is Rheumatology?
                </h2>
              </div>
              <div className="flex items-end">
                <div>
                  <p className="text-[15px] text-navy-muted leading-[1.75]" style={{ marginBottom: "1rem" }}>
                    Rheumatology is a medical specialty focused on the diagnosis and treatment of autoimmune and inflammatory conditions affecting joints, muscles, bones, and connective tissues.
                  </p>
                  <p className="text-[15px] text-navy-muted leading-[1.75]">
                    The field encompasses over 200 conditions — from common diseases like rheumatoid arthritis and osteoarthritis to rare systemic conditions like vasculitis and scleroderma.
                  </p>
                </div>
              </div>
            </div>

            {/* Cover boxes grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coverBoxes.map((box, i) => (
                <div key={i} className="bg-white border border-gray-100 p-5 flex gap-3 items-start" style={{ borderRadius: 0 }}>
                  <div className="w-2 h-2 rounded-full bg-[#1AA3B5] shrink-0 mt-1.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-navy-deep mb-1">{box.title}</div>
                    <div className="text-[13px] text-navy-muted leading-[1.6]">{box.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════ 3 · SYMPTOM CHECKER ═══════════ */}
        <section id="symptom-checker" className="bg-[#0f616e] py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Center-aligned heading */}
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/50">
                Symptom Assessment
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff", fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.5px", marginTop: "0.5rem", marginBottom: "1rem" }}>
                When should you see a rheumatologist?
              </h2>
              <p className="text-[16px] leading-[1.8] mx-auto max-w-[500px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Answer a few short questions — we&apos;ll help you understand whether a specialist consultation would be beneficial.
              </p>
            </div>

            {!showResult ? (
              <div className="max-w-[640px] mx-auto text-center">
                {/* Progress dots */}
                <div className="flex gap-2 mb-10 justify-center">
                  {symptomQuestions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { if (i < checkerStep) setCheckerStep(i) }}
                      className="border-none p-0 transition-all duration-300"
                      style={{
                        width: i === checkerStep ? 24 : 8,
                        height: 8,
                        borderRadius: i === checkerStep ? 4 : "50%",
                        background: i < checkerStep ? "#1AA3B5" : i === checkerStep ? "#fff" : "rgba(255,255,255,.15)",
                        cursor: i < checkerStep ? "pointer" : "default",
                      }}
                    />
                  ))}
                </div>

                {/* Question */}
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#1AA3B5]">
                  Question {checkerStep + 1} of 6
                </span>
                <h3 className="mt-3 mb-3 mx-auto max-w-[480px]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 400, lineHeight: 1.2, color: "#fff" }}>
                  {symptomQuestions[checkerStep].q}
                </h3>
                <p className="text-[15px] leading-[1.7] mb-10 mx-auto max-w-[420px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {symptomQuestions[checkerStep].sub}
                </p>

                {/* Yes / No buttons */}
                <div className="flex gap-4 mb-10 justify-center">
                  <button
                    onClick={() => handleAnswer(true)}
                    className="py-4 px-10 rounded-full font-semibold text-[15px] cursor-pointer transition-all duration-200"
                    style={{ backgroundColor: "#1AA3B5", color: "#fff" }}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className="py-4 px-10 rounded-full font-semibold text-[15px] cursor-pointer transition-all duration-200 border-2"
                    style={{ background: "transparent", borderColor: "rgba(255,255,255,.2)", color: "rgba(255,255,255,.7)" }}
                  >
                    No
                  </button>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-[12px] mb-2 font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span>Progress</span>
                    <span>{checkerStep} / 6</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                    <div
                      className="h-full bg-[#1AA3B5] rounded-full transition-all duration-500"
                      style={{ width: `${((checkerStep) / 6) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* ── Results ── */
              <div className="bg-white/[.06] rounded-2xl p-6 md:p-10 border border-white/[.08]">
                {(() => {
                  const risk = getRiskLevel()
                  return (
                    <div className="text-center">
                      <div
                        className="w-14 h-14 rounded-full text-white flex items-center justify-center text-2xl mx-auto mb-4"
                        style={{ background: risk.color }}
                      >
                        {risk.icon}
                      </div>
                      <h3 className="text-[1.4rem] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>
                        {risk.label}
                      </h3>
                      <div className="inline-block rounded-full px-4 py-1 mb-4 text-[12px] font-bold" style={{ background: risk.bg, border: `1.5px solid ${risk.border}`, color: risk.color }}>
                        {answers.filter(a => a === true).length} of 6 symptoms identified
                      </div>
                      <p className="text-[14px] text-white/55 leading-[1.7] mb-6 max-w-[440px] mx-auto">
                        {risk.message}
                      </p>
                      <div className="flex gap-3 justify-center flex-wrap">
                        <button
                          onClick={resetChecker}
                          className="py-3 px-7 rounded-full bg-white/[.08] border border-white/[.15] text-white/70 font-semibold text-[14px] cursor-pointer hover:bg-white/[.14] transition-colors"
                        >
                          Start Again
                        </button>
                        <Link
                          to="/doctor"
                          className="py-3 px-7 rounded-full text-white font-semibold text-[14px] no-underline hover:opacity-90 transition-opacity"
                          style={{ background: "#1AA3B5" }}
                        >
                          {risk.cta}
                        </Link>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        </section>


        {/* ═══════════ 4 · CONDITIONS ═══════════ */}
        <section id="conditions" className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#1AA3B5" }}>
                Condition Library
              </span>
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Conditions We Treat
              </h2>
            </div>

            {/* Arthritis group label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Arthritis Conditions
            </div>

            {/* Big tiles — 2 column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-8">
              {[
                { key: "ra", ...conditionData.ra },
                { key: "oa", ...conditionData.oa },
                { key: "psa", ...conditionData.psa },
                { key: "as", ...conditionData.as },
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                  className={`flex gap-5 items-center p-6 border-none cursor-pointer text-left transition-colors ${
                    activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                  }`}
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  <BookIcon size={28} color="#0f616e" />
                  <div className="flex-1">
                    <div className="text-lg font-bold text-navy-deep mb-0.5">{c.name}</div>
                    <div className="text-xs text-navy-muted">{c.typeLabel}</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-navy-deep text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Other conditions label */}
            <div className="text-xs font-bold uppercase text-navy-muted border-b border-[#dde6ee] pb-2 mb-4 tracking-[0.08em]">
              Other Conditions
            </div>

            {/* Small tiles — 4 column */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#dde6ee] rounded-lg overflow-hidden mb-8">
              {[
                { key: "gout", ...conditionData.gout },
                { key: "ctd", ...conditionData.ctd },
                { key: "fibro", ...conditionData.fibro },
                { key: "vasculitis", ...conditionData.vasculitis },
                { key: "lupus", ...conditionData.lupus },
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActiveCondition(activeCondition === c.key ? null : c.key)}
                  className={`flex gap-3 items-center p-5 border-none cursor-pointer text-left transition-colors ${
                    activeCondition === c.key ? "bg-white" : "bg-[#e0f3f5] hover:bg-[#d4ebf8]"
                  }`}
                  style={{ fontFamily: "var(--font-base)" }}
                >
                  <BookIcon size={22} color="#0f616e" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-navy-deep">{c.name}</div>
                  </div>
                  <div className="w-7 h-7 rounded-full text-white flex items-center justify-center shrink-0" style={{ background: "#0f616e" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            {activeCondition && conditionData[activeCondition] && (() => {
              const c = conditionData[activeCondition]
              return (
                <div className="bg-white border border-[#dde6ee] rounded-2xl overflow-hidden mt-2">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
                    {/* Main content */}
                    <div className="p-6 md:p-10">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-navy-deep mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 400 }}>{c.name}</h3>
                          <span className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em]">{c.typeLabel}</span>
                        </div>
                        <button
                          onClick={() => setActiveCondition(null)}
                          className="w-8 h-8 rounded-full border border-[#dde6ee] bg-white cursor-pointer flex items-center justify-center text-navy-muted hover:border-primary transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                      </div>

                      {/* Overview */}
                      <div className="mb-6">
                        <h4 className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em] mb-2">Overview</h4>
                        <p className="text-[16px] text-navy-muted leading-[1.75]">{c.overview}</p>
                      </div>

                      {/* Key Points */}
                      <div className="mb-6">
                        <h4 className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em] mb-2">Key Points</h4>
                        <ul className="list-none p-0 m-0 space-y-1.5">
                          {c.keyPoints.map((pt, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-navy-muted leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1AA3B5] shrink-0 mt-[7px]" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Treatment */}
                      <div className="mb-6">
                        <h4 className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em] mb-2">Treatment Options</h4>
                        <ul className="list-none p-0 m-0 space-y-1.5">
                          {c.treatment.map((t, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-navy-muted leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-navy-deep shrink-0 mt-[7px]" style={{ background: "#0f616e" }} />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* When to see */}
                      <div className="bg-[rgba(26,163,181,.06)] border border-[rgba(26,163,181,.18)] rounded-xl p-4">
                        <h4 className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em] mb-1.5">When to See a Specialist</h4>
                        <p className="text-sm text-navy-muted leading-relaxed">{c.when}</p>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="bg-[#e0f3f5] p-7">
                      <h4 className="text-[11px] font-bold uppercase text-[#1AA3B5] tracking-[0.08em] mb-4">Related Articles</h4>
                      {c.articles.map((art, i) => (
                        <div key={i} className="flex gap-3 p-3 bg-white rounded-[10px] mb-2.5 border border-[#dde6ee] items-center">
                          <img src={art.img} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
                          <div>
                            <span className="text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em]">{art.cat}</span>
                            <div className="text-sm font-semibold text-navy-deep leading-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{art.title}</div>
                            <span className="text-[11px] text-navy-muted">{art.time}</span>
                          </div>
                        </div>
                      ))}

                      <Link
                        to="/doctor"
                        className="block w-full text-center py-3 rounded-full bg-navy-deep text-white font-semibold text-sm no-underline mt-4 hover:opacity-90 transition-opacity"
                        style={{ background: "#0f616e" }}
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>


        {/* ═══════════ 5 · TREATMENT OPTIONS ═══════════ */}
        <section className="bg-[#0f616e] py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Left-aligned heading like other sections */}
            <div className="mb-14 max-w-2xl">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.18em] py-1.5 px-4 rounded-full mb-5" style={{ backgroundColor: "rgba(26,163,181,.15)", color: "#1AA3B5" }}>
                Treatment Guide
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#ffffff", fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                Treatment Options
              </h2>
              <p className="text-[16px] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
                Modern rheumatology offers a wide range of evidence-based treatments. Here&apos;s an overview of your options.
              </p>
            </div>

            {/* 4-col grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {treatmentCards.map((card, i) => (
                <div key={i} className="bg-white/[.08] border border-white/[.1] overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300" style={{ borderRadius: 0 }}>
                  <div className="relative h-[150px] overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[0.06em] px-3 py-1 rounded-full bg-white/90 text-[#0f616e]">
                      {card.badge}
                    </span>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="text-[15px] font-semibold mb-2 leading-snug" style={{ color: "#a0e2e4" }}>{card.title}</h4>
                    <p className="text-[13px] text-white/80 leading-[1.65]">{card.desc}</p>
                  </div>
                  <div className="border-t border-white/[.08] px-5 py-3 flex justify-between items-center">
                    <span className="text-[11px] text-white/60">{card.footer}</span>
                    <span className="w-7 h-7 rounded-full bg-white/[.08] flex items-center justify-center text-white/50 shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════ 6 · RESEARCH ARTICLES ═══════════ */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#1AA3B5" }}>
                Latest Research
              </span>
              <h2 className="text-navy-deep mt-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.5px" }}>
                Research &amp; Articles
              </h2>
            </div>

            {/* Grid: 1.6fr 1fr */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-5 items-start">
              {/* Featured card */}
              <div className="rounded-2xl border border-[#dde6ee] overflow-hidden">
                <div className="relative h-[320px] overflow-hidden">
                  <img src={featuredArticle.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,97,110,.8)] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-1.5">
                      <span className="w-3 h-0.5 bg-[#1AA3B5] rounded-full" />
                      {featuredArticle.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5 pb-6">
                  <h3 className="text-navy-deep mb-2.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 400 }}>{featuredArticle.title}</h3>
                  <div className="flex items-center gap-2.5 text-xs text-navy-muted mb-4">
                    <span>{featuredArticle.author}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#dde6ee]" />
                    <span>{featuredArticle.time}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#dde6ee]" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <button className="py-2.5 px-6 rounded-full text-white font-semibold text-sm cursor-pointer border-none hover:opacity-90 transition-opacity" style={{ background: "#0f616e" }}>
                    Read Article
                  </button>
                </div>
              </div>

              {/* List cards */}
              <div className="flex flex-col gap-3">
                {articleList.map((art, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl border border-[#dde6ee] bg-white cursor-pointer items-center hover:border-primary transition-colors">
                    <img src={art.img} alt="" className="w-[72px] h-[72px] rounded-[10px] object-cover shrink-0" />
                    <div>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-[#1AA3B5] tracking-[0.06em] mb-0.5">
                        <span className="w-2 h-0.5 bg-[#1AA3B5] rounded-full" />
                        {art.cat}
                      </span>
                      <h4 className="text-navy-deep mb-0.5 leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", fontWeight: 400 }}>{art.title}</h4>
                      <span className="text-[11px] text-navy-muted">{art.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════ 7 · NEWSLETTER ═══════════ */}
        <section className="bg-[#0f616e] py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 block" style={{ marginBottom: "1rem" }}>
                  Newsletter
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff", fontSize: "clamp(1.75rem,3.5vw,2.5rem)", lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "1rem" }}>
                  Monthly clinical updates, delivered
                </h2>
                <p className="text-[15px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  New patient guides, research summaries, and expert insights — once a month. No spam.
                </p>
              </div>
              <div>
                <form
                  onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
                  className="flex flex-col sm:flex-row gap-3"
                  style={{ marginBottom: "0.75rem" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white text-[14px] py-4 px-6"
                    style={{ backgroundColor: "rgba(255,255,255,.08)", border: "1.5px solid rgba(255,255,255,.12)", borderRadius: "50px" }}
                  />
                  <button
                    type="submit"
                    className="shrink-0 font-bold text-[14px] px-8 py-4 rounded-full cursor-pointer transition-all hover:brightness-110"
                    style={{ backgroundColor: "#1AA3B5", color: "#fff", border: "none" }}
                  >
                    Subscribe &rarr;
                  </button>
                </form>
                <div className="flex items-center gap-4 ml-6">
                  {["Clinically reviewed", "No spam", "Unsubscribe any time"].map((item, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[11px]" style={{ color: "rgba(255,255,255,.3)" }}>
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,.25)" }} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <BriefingFooter />
    </div>
  )
}

export default KnowledgeHub
