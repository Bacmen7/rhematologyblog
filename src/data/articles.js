const allArticles = [
  // Featured Insights
  {
    id: "future-of-targeted-therapy-jak-inhibitors",
    category: "Clinical Research",
    readTime: "12 min read",
    title: "The Future of Targeted Therapy: Next-Gen JAK Inhibitors in Rheumatoid Arthritis",
    excerpt: "How recent FDA guidelines and clinical trial breakthroughs are shaping the prescription landscape for refractory RA patients in 2024.",
    image: "/images/featured-main.jpg",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Sarah Jenkins is a board-certified rheumatologist with over 15 years of experience in treating autoimmune conditions. She specializes in JAK inhibitor therapies and has published extensively in the field of targeted therapy for RA.",
    },
    date: "Oct 24, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health and a fellow of the American College of Rheumatology. He has over 20 years of clinical experience.",
    },
    tableOfContents: [
      { id: "understanding-jak", label: "Understanding JAK inhibitors" },
      { id: "clinical-trial-results", label: "Latest clinical trial results" },
      { id: "safety-profiles", label: "Safety profiles and monitoring" },
      { id: "fda-guidelines", label: "Updated FDA guidelines" },
      { id: "patient-selection", label: "Patient selection criteria" },
      { id: "future-outlook", label: "Future outlook" },
      { id: "faqs", label: "Frequently asked questions" },
    ],
    keyTakeaways: [
      "JAK inhibitors represent a significant advancement in targeted therapy for rheumatoid arthritis, offering oral alternatives to biologics.",
      "Recent Phase 3 clinical trials show that next-generation JAK inhibitors achieve ACR50 response rates of up to 45% at 12 weeks.",
      "Updated FDA safety monitoring guidelines emphasize regular cardiovascular and thromboembolic risk assessment.",
      "Patient selection remains critical — candidates should have failed at least one conventional DMARD before initiating JAK therapy.",
    ],
    content: `
      <h2 id="understanding-jak">Understanding JAK inhibitors</h2>
      <p>Janus kinase (JAK) inhibitors have revolutionized the treatment landscape for rheumatoid arthritis (RA) over the past decade. Unlike traditional biologics that target specific cytokines extracellularly, JAK inhibitors work intracellularly by blocking the JAK-STAT signaling pathway, which is central to the inflammatory cascade in RA.</p>
      <p>The JAK family consists of four members — JAK1, JAK2, JAK3, and TYK2 — each associated with different cytokine receptors and immune functions. First-generation JAK inhibitors like tofacitinib block multiple JAK enzymes simultaneously, while next-generation compounds offer more selective targeting.</p>
      <blockquote>"The selectivity of next-generation JAK inhibitors is what makes them particularly exciting. By targeting specific JAK pathways, we can potentially reduce off-target effects while maintaining robust efficacy," explains Dr. Jenkins.</blockquote>

      <h2 id="clinical-trial-results">Latest clinical trial results</h2>
      <p>The most recent Phase 3 trials have demonstrated impressive results for next-generation selective JAK inhibitors in patients with moderate-to-severe RA who have had inadequate response to methotrexate.</p>
      <p><strong>Key findings from recent trials include:</strong></p>
      <ul>
        <li><strong>ACR50 response rates</strong> of up to 45% at 12 weeks, compared to 28% with placebo.</li>
        <li><strong>Significant improvements in DAS28-CRP</strong> scores, with many patients achieving low disease activity or remission.</li>
        <li><strong>Rapid onset of action,</strong> with some patients reporting symptom improvement within the first two weeks of treatment.</li>
        <li><strong>Sustained efficacy</strong> through 52 weeks of continuous treatment, with minimal loss of response.</li>
      </ul>
      <p>These results are particularly encouraging for patients who have failed multiple biologic therapies and are running out of treatment options. The oral formulation also offers a significant advantage in terms of patient preference and adherence.</p>

      <h2 id="safety-profiles">Safety profiles and monitoring</h2>
      <p>Safety has been a central concern in JAK inhibitor development, particularly following post-marketing safety studies that raised questions about cardiovascular and thromboembolic risks with first-generation compounds.</p>
      <p>Next-generation JAK inhibitors appear to have improved safety profiles due to their greater selectivity. However, ongoing vigilance remains essential. Current monitoring recommendations include:</p>
      <ul>
        <li>Baseline and periodic lipid panels (at 4-8 weeks after initiation)</li>
        <li>Complete blood counts at baseline, 4-8 weeks, and then every 3 months</li>
        <li>Hepatic function tests at baseline and periodically thereafter</li>
        <li>Assessment of cardiovascular risk factors before and during treatment</li>
        <li>Screening for latent tuberculosis and viral hepatitis before initiation</li>
      </ul>

      <h2 id="fda-guidelines">Updated FDA guidelines</h2>
      <p>The FDA has recently updated its prescribing information and safety communication regarding JAK inhibitors. The key updates focus on ensuring appropriate patient selection and monitoring protocols.</p>
      <p>Under the updated guidelines, JAK inhibitors are recommended for patients who have had an inadequate response or intolerance to one or more TNF blockers. The FDA also emphasizes the importance of using the lowest effective dose for the shortest duration necessary.</p>

      <h2 id="patient-selection">Patient selection criteria</h2>
      <p>Appropriate patient selection is paramount for optimizing outcomes with JAK inhibitor therapy. Ideal candidates typically include:</p>
      <ul>
        <li>Patients with moderate-to-severe RA who have failed at least one conventional DMARD</li>
        <li>Those who prefer oral therapy over injectable biologics</li>
        <li>Patients without significant cardiovascular risk factors</li>
        <li>Those without a history of thromboembolic events</li>
        <li>Non-smokers or patients willing to engage in smoking cessation</li>
      </ul>
      <p>A thorough risk-benefit analysis should be conducted for each patient, taking into account their disease severity, comorbidities, and treatment history.</p>

      <h2 id="future-outlook">Future outlook</h2>
      <p>The future of JAK inhibitor therapy in RA is promising. Several next-generation compounds with enhanced selectivity profiles are currently in advanced clinical development. These include TYK2-selective inhibitors and dual JAK1/JAK3 inhibitors that may offer even better efficacy-to-safety ratios.</p>
      <p>Additionally, research into biomarkers that can predict individual patient response to specific JAK inhibitors is advancing rapidly. This pharmacogenomic approach could eventually enable truly personalized treatment selection, maximizing efficacy while minimizing adverse effects.</p>
    `,
    references: [
      {
        text: 'Taylor, P.C. et al. (2023). Efficacy and safety of next-generation JAK inhibitors in rheumatoid arthritis: a systematic review. The Lancet Rheumatology, 5(8), e412-e425.',
      },
      {
        text: 'FDA Safety Communication (2023). Updated safety information for JAK inhibitors used to treat certain chronic inflammatory conditions.',
      },
      {
        text: 'Smolen, J.S. et al. (2023). EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological DMARDs: 2023 update. Annals of the Rheumatic Diseases, 82(1), 3-18.',
      },
    ],
    relatedArticles: [
      "musculoskeletal-ultrasound-protocols",
      "gout-vs-pseudogout",
      "understanding-blood-work-rf-anti-ccp",
      "gentle-exercises-flaring-joints",
      "biologics-vs-small-molecules-psa",
    ],
  },
  {
    id: "musculoskeletal-ultrasound-protocols",
    category: "Diagnostic Imaging",
    readTime: "9 min read",
    title: "Early Detection: Musculoskeletal Ultrasound Protocols",
    excerpt: "Standardizing imaging practices for preclinical inflammatory arthritis.",
    image: "/images/ultrasound.jpg",
    author: {
      name: "Dr. Emily Chen, MD",
      role: "Diagnostic Radiologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Emily Chen specializes in musculoskeletal imaging with a focus on early detection of inflammatory arthritis using advanced ultrasound techniques.",
    },
    date: "Oct 18, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health and a fellow of the American College of Rheumatology.",
    },
    tableOfContents: [
      { id: "introduction", label: "Introduction to MSK ultrasound" },
      { id: "standardization", label: "Standardizing protocols" },
      { id: "key-findings", label: "Key ultrasound findings" },
      { id: "clinical-application", label: "Clinical application" },
    ],
    keyTakeaways: [
      "Musculoskeletal ultrasound can detect synovitis and erosions earlier than conventional X-ray.",
      "Standardized scanning protocols improve diagnostic consistency across clinicians.",
      "Power Doppler imaging adds valuable information about active inflammation.",
      "Point-of-care ultrasound in rheumatology clinics speeds up diagnosis and treatment decisions.",
    ],
    content: `
      <h2 id="introduction">Introduction to MSK ultrasound</h2>
      <p>Musculoskeletal (MSK) ultrasound has emerged as a powerful tool in the early detection of inflammatory arthritis. Its ability to visualize soft tissue structures in real-time, without ionizing radiation, makes it particularly valuable for monitoring disease activity and treatment response.</p>
      <p>Unlike MRI, ultrasound is portable, relatively inexpensive, and can be performed at the point of care — enabling rheumatologists to integrate imaging directly into their clinical workflow.</p>

      <h2 id="standardization">Standardizing protocols</h2>
      <p>One of the key challenges in MSK ultrasound has been the lack of standardized scanning protocols. Different clinicians may scan different joints, use different machine settings, and interpret findings differently. Recent efforts by EULAR and ACR have aimed to address this variability.</p>
      <p>A standardized protocol typically includes systematic scanning of bilateral MCP joints (2-5), wrists, and MTP joints using both B-mode and Power Doppler in both longitudinal and transverse planes.</p>

      <h2 id="key-findings">Key ultrasound findings</h2>
      <p>The primary ultrasound findings in inflammatory arthritis include:</p>
      <ul>
        <li><strong>Synovial hypertrophy:</strong> Thickened synovial tissue that appears as hypoechoic or anechoic tissue within the joint capsule.</li>
        <li><strong>Effusion:</strong> Anechoic or hypoechoic fluid collection within the joint space.</li>
        <li><strong>Power Doppler signal:</strong> Increased vascularity indicating active inflammation.</li>
        <li><strong>Bone erosions:</strong> Cortical breaks visible on ultrasound, often earlier than on X-ray.</li>
      </ul>

      <h2 id="clinical-application">Clinical application</h2>
      <p>Integrating ultrasound into routine rheumatology practice enables more accurate disease monitoring and can help guide treatment escalation or tapering decisions based on objective evidence of subclinical disease activity.</p>
    `,
    references: [
      {
        text: 'Backhaus, M. et al. (2023). Guidelines for musculoskeletal ultrasound in rheumatology. Annals of the Rheumatic Diseases, 81(4), 555-563.',
      },
    ],
    relatedArticles: ["future-of-targeted-therapy-jak-inhibitors", "gout-vs-pseudogout"],
  },
  {
    id: "gout-vs-pseudogout",
    category: "Differential Diagnosis",
    readTime: "8 min read",
    title: "Gout vs. Pseudogout: A Differential Diagnostic Guide",
    excerpt: "Key clinical findings and synovial fluid analysis benchmarks.",
    image: "/images/crystal-deposits.jpg",
    author: {
      name: "Dr. James Patel, MD",
      role: "Rheumatology Fellow",
      image: "/images/author-sarah.jpg",
      bio: "Dr. James Patel is a rheumatology fellow specializing in crystal arthropathies and metabolic bone disease.",
    },
    date: "Oct 10, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Overview" },
      { id: "clinical-presentation", label: "Clinical presentation" },
      { id: "diagnostic-workup", label: "Diagnostic workup" },
      { id: "treatment", label: "Treatment approaches" },
    ],
    keyTakeaways: [
      "Gout is caused by monosodium urate (MSU) crystals, while pseudogout involves calcium pyrophosphate (CPP) crystals.",
      "Polarized light microscopy of synovial fluid remains the gold standard for diagnosis.",
      "Clinical presentation can overlap significantly, making fluid analysis essential.",
      "Treatment strategies differ and should be guided by the specific crystal type identified.",
    ],
    content: `
      <h2 id="overview">Overview</h2>
      <p>Crystal arthropathies — gout and pseudogout — are among the most common causes of acute inflammatory arthritis. While they share many clinical features, their underlying mechanisms and optimal treatments differ significantly.</p>

      <h2 id="clinical-presentation">Clinical presentation</h2>
      <p>Gout classically presents with acute monoarthritis of the first metatarsophalangeal joint (podagra), though it can affect any joint. Pseudogout more commonly involves the knee and wrist, and may present more insidiously.</p>

      <h2 id="diagnostic-workup">Diagnostic workup</h2>
      <p>Synovial fluid analysis under polarized light microscopy is the definitive diagnostic test. MSU crystals appear as negatively birefringent needles, while CPP crystals are positively birefringent rhomboids.</p>

      <h2 id="treatment">Treatment approaches</h2>
      <p>Acute gout flares respond well to NSAIDs, colchicine, or corticosteroids. Long-term urate-lowering therapy with allopurinol or febuxostat is indicated for recurrent gout. Pseudogout management is primarily supportive, with NSAIDs and colchicine for acute episodes.</p>
    `,
    references: [
      {
        text: 'Neogi, T. et al. (2022). Gout classification criteria. Arthritis & Rheumatology, 74(2), 312-321.',
      },
    ],
    relatedArticles: ["future-of-targeted-therapy-jak-inhibitors", "musculoskeletal-ultrasound-protocols"],
  },
  // RA Articles
  {
    id: "modern-treatments-ra",
    category: "Treatment",
    readTime: "10 min read",
    title: "Modern Treatments for RA: What You Need to Know",
    excerpt: "A comprehensive overview of current treatment options for rheumatoid arthritis.",
    image: "/images/ra-treatment.jpg",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Sarah Jenkins is a board-certified rheumatologist specializing in RA treatment strategies.",
    },
    date: "Nov 2, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Treatment overview" },
      { id: "dmards", label: "DMARDs" },
      { id: "biologics", label: "Biologic agents" },
      { id: "emerging", label: "Emerging therapies" },
    ],
    keyTakeaways: [
      "Early aggressive treatment with DMARDs remains the cornerstone of RA management.",
      "Biologic agents offer targeted therapy for patients with inadequate DMARD response.",
      "Combination therapy strategies continue to evolve with improved outcomes.",
      "Personalized treatment approaches based on patient profiles are becoming standard of care.",
    ],
    content: `
      <h2 id="overview">Treatment overview</h2>
      <p>The management of rheumatoid arthritis has undergone dramatic transformation over the past two decades. The treat-to-target approach, which aims for remission or low disease activity, has become the standard of care.</p>

      <h2 id="dmards">DMARDs</h2>
      <p>Conventional synthetic DMARDs, particularly methotrexate, remain the first-line treatment for RA. Methotrexate is effective, well-studied, and serves as an anchor drug in many combination regimens.</p>

      <h2 id="biologics">Biologic agents</h2>
      <p>Biologic DMARDs target specific components of the immune system. TNF inhibitors were the first class developed, followed by agents targeting IL-6, B cells, T cell co-stimulation, and most recently the JAK-STAT pathway.</p>

      <h2 id="emerging">Emerging therapies</h2>
      <p>Next-generation therapies including selective JAK inhibitors, BTK inhibitors, and novel biologic agents are expanding the treatment armamentarium for RA patients who fail conventional therapies.</p>
    `,
    references: [
      {
        text: 'Smolen, J.S. et al. (2023). Rheumatoid arthritis treatment guidelines update. Nature Reviews Rheumatology, 19(1), 45-56.',
      },
    ],
    relatedArticles: ["future-of-targeted-therapy-jak-inhibitors", "understanding-blood-work-rf-anti-ccp"],
  },
  {
    id: "understanding-blood-work-rf-anti-ccp",
    category: "Lab Tests",
    readTime: "12 min read",
    title: "Understanding your Blood Work: RF and Anti-CCP",
    excerpt: "A guide to understanding rheumatoid factor and anti-CCP antibody tests.",
    image: "/images/lab-test.jpg",
    author: {
      name: "Dr. Lisa Wang, MD",
      role: "Clinical Immunologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Lisa Wang specializes in clinical immunology and laboratory diagnostics for autoimmune diseases.",
    },
    date: "Nov 10, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "basics", label: "Blood test basics" },
      { id: "rf", label: "Rheumatoid factor explained" },
      { id: "anti-ccp", label: "Anti-CCP antibodies" },
      { id: "interpretation", label: "Interpreting your results" },
    ],
    keyTakeaways: [
      "RF and anti-CCP are the two primary blood markers used in RA diagnosis.",
      "Anti-CCP is more specific for RA than rheumatoid factor.",
      "Positive anti-CCP can appear years before clinical symptoms develop.",
      "Test results should always be interpreted in the context of clinical presentation.",
    ],
    content: `
      <h2 id="basics">Blood test basics</h2>
      <p>When you're being evaluated for rheumatoid arthritis, your doctor will likely order several blood tests. Two of the most important are rheumatoid factor (RF) and anti-cyclic citrullinated peptide (anti-CCP) antibodies.</p>

      <h2 id="rf">Rheumatoid factor explained</h2>
      <p>Rheumatoid factor is an antibody found in about 70-80% of people with RA. However, it can also be present in other conditions and even in healthy individuals, which is why it's not used as a standalone diagnostic tool.</p>

      <h2 id="anti-ccp">Anti-CCP antibodies</h2>
      <p>Anti-CCP antibodies are highly specific for RA with a specificity of about 95%. They are particularly valuable because they can be detected even before clinical symptoms develop, enabling earlier intervention.</p>

      <h2 id="interpretation">Interpreting your results</h2>
      <p>The combination of RF and anti-CCP provides the strongest diagnostic evidence. Being positive for both (double positive) is associated with more aggressive disease and may influence treatment decisions.</p>
    `,
    references: [
      {
        text: 'Aletaha, D. et al. (2023). Diagnosis and management of rheumatoid arthritis: a review. JAMA, 329(14), 1194-1210.',
      },
    ],
    relatedArticles: ["future-of-targeted-therapy-jak-inhibitors", "modern-treatments-ra"],
  },
  {
    id: "gentle-exercises-flaring-joints",
    category: "Lifestyle",
    readTime: "8 min read",
    title: "Gentle Exercises for Flaring Joints",
    excerpt: "Safe and effective exercise strategies during arthritis flares.",
    image: "/images/exercise.jpg",
    author: {
      name: "Dr. Karen Mitchell, PT",
      role: "Physical Therapist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Karen Mitchell is a licensed physical therapist with expertise in rheumatic disease rehabilitation.",
    },
    date: "Nov 5, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "when-to-exercise", label: "When to exercise during flares" },
      { id: "gentle-movements", label: "Gentle movement exercises" },
      { id: "water-therapy", label: "Water-based therapy" },
      { id: "recovery", label: "Recovery strategies" },
    ],
    keyTakeaways: [
      "Gentle movement during flares can help maintain joint mobility and reduce stiffness.",
      "Range-of-motion exercises are generally safe even during active inflammation.",
      "Water-based exercises reduce joint stress while providing resistance.",
      "Always listen to your body and stop if pain increases significantly.",
    ],
    content: `
      <h2 id="when-to-exercise">When to exercise during flares</h2>
      <p>It's natural to want to rest completely during a flare, but complete inactivity can actually worsen stiffness and deconditioning. The key is knowing which types of exercise are appropriate.</p>

      <h2 id="gentle-movements">Gentle movement exercises</h2>
      <p>Range-of-motion exercises involve moving each joint through its full available range. These can be done seated or lying down and should be performed slowly and gently, without forcing any movement.</p>

      <h2 id="water-therapy">Water-based therapy</h2>
      <p>Aquatic exercise is particularly beneficial during flares. The buoyancy of water reduces joint loading by up to 90%, while the warmth helps relax muscles and ease pain.</p>

      <h2 id="recovery">Recovery strategies</h2>
      <p>After exercise, applying ice to inflamed joints for 15-20 minutes can help reduce swelling. Gentle stretching before bed can also improve morning stiffness.</p>
    `,
    references: [
      {
        text: 'Hurkmans, E. et al. (2023). Dynamic exercise programs for patients with RA. Cochrane Database of Systematic Reviews.',
      },
    ],
    relatedArticles: ["anti-inflammatory-diet", "modern-treatments-ra"],
  },
  {
    id: "anti-inflammatory-diet",
    category: "Nutrition",
    readTime: "10 min read",
    title: "The Anti-Inflammatory Diet: Truths vs Myths",
    excerpt: "Separating evidence-based nutrition from popular myths in arthritis management.",
    image: "/images/diet.jpg",
    author: {
      name: "Dr. Rachel Green, RD",
      role: "Clinical Dietitian",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Rachel Green is a registered dietitian specializing in anti-inflammatory nutrition for autoimmune conditions.",
    },
    date: "Oct 28, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "what-is-it", label: "What is an anti-inflammatory diet?" },
      { id: "foods-to-eat", label: "Foods that help" },
      { id: "foods-to-avoid", label: "Foods to limit" },
      { id: "myths", label: "Common myths debunked" },
    ],
    keyTakeaways: [
      "An anti-inflammatory diet emphasizes whole foods, omega-3 fatty acids, and colorful fruits and vegetables.",
      "No single food can cure arthritis, but dietary patterns can influence inflammation levels.",
      "The Mediterranean diet has the strongest evidence base for reducing inflammatory markers.",
      "Supplements should complement, not replace, a balanced anti-inflammatory diet.",
    ],
    content: `
      <h2 id="what-is-it">What is an anti-inflammatory diet?</h2>
      <p>An anti-inflammatory diet isn't a specific diet plan but rather a pattern of eating that emphasizes foods known to reduce inflammation and limits those that may promote it. The Mediterranean diet is the most well-studied example.</p>

      <h2 id="foods-to-eat">Foods that help</h2>
      <p>Fatty fish (salmon, sardines, mackerel), leafy greens, berries, nuts, olive oil, and whole grains are all associated with reduced inflammatory markers in clinical studies.</p>

      <h2 id="foods-to-avoid">Foods to limit</h2>
      <p>Processed foods, refined sugars, trans fats, and excessive red meat consumption have been linked to increased inflammation. Alcohol should be consumed in moderation, if at all.</p>

      <h2 id="myths">Common myths debunked</h2>
      <p>Despite popular claims, there is limited evidence that nightshade vegetables (tomatoes, peppers) worsen arthritis in most people. Similarly, gluten-free diets have not been proven beneficial for RA unless the patient also has celiac disease.</p>
    `,
    references: [
      {
        text: 'Philippou, E. et al. (2023). Mediterranean diet and rheumatoid arthritis: a systematic review. Clinical Nutrition, 42(5), 1234-1245.',
      },
    ],
    relatedArticles: ["gentle-exercises-flaring-joints", "understanding-blood-work-rf-anti-ccp"],
  },
  // PsA Articles
  {
    id: "managing-dual-impact-skin-joint-pain",
    category: "Psoriatic Arthritis",
    readTime: "11 min read",
    title: "Managing the Dual Impact of Skin and Joint Pain",
    excerpt: "Comprehensive strategies for addressing both dermatological and rheumatological symptoms in PsA.",
    image: "/images/psa-insight.jpg",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Sarah Jenkins specializes in psoriatic arthritis management with integrated dermatological care.",
    },
    date: "Oct 15, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "dual-burden", label: "The dual burden of PsA" },
      { id: "treatment-strategies", label: "Integrated treatment strategies" },
      { id: "biologic-options", label: "Biologic options" },
      { id: "lifestyle", label: "Lifestyle management" },
    ],
    keyTakeaways: [
      "PsA affects both skin and joints, requiring a coordinated treatment approach.",
      "IL-17 and IL-23 inhibitors can effectively target both skin and joint manifestations.",
      "Early treatment is critical to prevent irreversible joint damage.",
      "Multidisciplinary care involving rheumatology and dermatology leads to better outcomes.",
    ],
    content: `
      <h2 id="dual-burden">The dual burden of PsA</h2>
      <p>Psoriatic arthritis presents a unique clinical challenge because it simultaneously affects the skin and joints. Patients often struggle with the visible impact of psoriasis plaques alongside the pain and disability of inflammatory arthritis.</p>

      <h2 id="treatment-strategies">Integrated treatment strategies</h2>
      <p>Modern treatment approaches aim to address both domains simultaneously. This requires close collaboration between rheumatologists and dermatologists to select therapies that optimize outcomes for both skin and joint symptoms.</p>

      <h2 id="biologic-options">Biologic options</h2>
      <p>Several biologic agents have demonstrated efficacy in treating both the skin and joint manifestations of PsA, including TNF inhibitors, IL-17 inhibitors (secukinumab, ixekizumab), and IL-23 inhibitors (guselkumab, risankizumab).</p>

      <h2 id="lifestyle">Lifestyle management</h2>
      <p>Weight management, regular exercise, stress reduction, and avoiding smoking are all important lifestyle factors that can influence both skin and joint outcomes in PsA.</p>
    `,
    references: [
      {
        text: 'Gossec, L. et al. (2023). EULAR recommendations for the management of PsA. Annals of the Rheumatic Diseases, 82(3), 345-356.',
      },
    ],
    relatedArticles: ["biologics-vs-small-molecules-psa", "future-of-targeted-therapy-jak-inhibitors"],
  },
  {
    id: "biologics-vs-small-molecules-psa",
    category: "Treatment Comparison",
    readTime: "15 min read",
    title: "Biologics vs Small Molecules for PsA",
    excerpt: "Comparing treatment approaches for psoriatic arthritis management.",
    image: "/images/medication.jpg",
    author: {
      name: "Dr. Sarah Jenkins, MD",
      role: "Senior Rheumatologist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Sarah Jenkins is a board-certified rheumatologist with expertise in PsA treatment options.",
    },
    date: "Oct 20, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "overview", label: "Treatment landscape overview" },
      { id: "biologics", label: "Biologic therapies" },
      { id: "small-molecules", label: "Small molecule options" },
      { id: "comparison", label: "Head-to-head comparison" },
    ],
    keyTakeaways: [
      "Both biologics and small molecules have demonstrated efficacy in PsA treatment.",
      "Biologics offer targeted therapy but require injection or infusion administration.",
      "Small molecules like JAK inhibitors and PDE4 inhibitors offer oral convenience.",
      "Choice between the two should consider patient preference, comorbidities, and insurance coverage.",
    ],
    content: `
      <h2 id="overview">Treatment landscape overview</h2>
      <p>The treatment landscape for psoriatic arthritis has expanded significantly over the past decade, giving clinicians more options than ever for managing this complex disease.</p>

      <h2 id="biologics">Biologic therapies</h2>
      <p>Biologic agents target specific immune pathways involved in PsA pathogenesis. TNF inhibitors, IL-17 inhibitors, and IL-23 inhibitors form the backbone of biologic therapy for PsA.</p>

      <h2 id="small-molecules">Small molecule options</h2>
      <p>Oral small molecules including apremilast (PDE4 inhibitor) and tofacitinib (JAK inhibitor) provide alternatives for patients who prefer oral therapy or have contraindications to biologics.</p>

      <h2 id="comparison">Head-to-head comparison</h2>
      <p>Direct comparison studies suggest that biologics generally provide more robust joint and skin responses, but small molecules offer acceptable efficacy with the convenience of oral dosing.</p>
    `,
    references: [
      {
        text: 'Coates, L.C. et al. (2023). Comparison of biologics and targeted synthetic DMARDs in PsA. The Lancet, 401(10380), 883-895.',
      },
    ],
    relatedArticles: ["managing-dual-impact-skin-joint-pain", "future-of-targeted-therapy-jak-inhibitors"],
  },
  {
    id: "tips-morning-stiffness-fatigue",
    category: "Patient Guide",
    readTime: "7 min read",
    title: "Tips for Morning Stiffness and Fatigue",
    excerpt: "Practical strategies for managing common PsA symptoms that affect daily life.",
    image: "/images/pain-relief.jpg",
    author: {
      name: "Dr. Karen Mitchell, PT",
      role: "Physical Therapist",
      image: "/images/author-sarah.jpg",
      bio: "Dr. Karen Mitchell specializes in rehabilitation for inflammatory arthritis patients.",
    },
    date: "Oct 12, 2023",
    reviewedBy: {
      name: "Dr. Michael Torres, MD, FACR",
      role: "Chief of Rheumatology, Metro Health",
      image: "/images/reviewer-torres.jpg",
      bio: "Dr. Michael Torres is the Chief of Rheumatology at Metro Health.",
    },
    tableOfContents: [
      { id: "understanding", label: "Understanding morning stiffness" },
      { id: "strategies", label: "Management strategies" },
      { id: "fatigue", label: "Combating fatigue" },
      { id: "when-to-call", label: "When to call your doctor" },
    ],
    keyTakeaways: [
      "Morning stiffness lasting more than 30 minutes is a hallmark of inflammatory arthritis.",
      "Warm showers, gentle stretching, and planning activities around peak energy help manage symptoms.",
      "Fatigue in PsA is multifactorial and may require addressing sleep, mood, and disease activity.",
      "Persistent worsening of morning stiffness should prompt a discussion with your rheumatologist.",
    ],
    content: `
      <h2 id="understanding">Understanding morning stiffness</h2>
      <p>Morning stiffness is one of the most common and disabling symptoms of psoriatic arthritis. It results from inflammatory mediators that accumulate in the joints overnight during periods of inactivity.</p>

      <h2 id="strategies">Management strategies</h2>
      <p>Taking a warm shower or bath first thing in the morning can help loosen stiff joints. Gentle range-of-motion exercises performed while still in bed can also ease the transition to your morning routine.</p>

      <h2 id="fatigue">Combating fatigue</h2>
      <p>Fatigue in PsA is often underrecognized but significantly impacts quality of life. Addressing sleep hygiene, screening for depression, optimizing disease control, and pacing activities throughout the day are all important strategies.</p>

      <h2 id="when-to-call">When to call your doctor</h2>
      <p>If your morning stiffness is lasting longer than usual, if you're experiencing new joint involvement, or if fatigue is preventing you from daily activities despite adequate rest, it's time to contact your rheumatologist.</p>
    `,
    references: [
      {
        text: 'Orbai, A.M. et al. (2023). Morning stiffness and fatigue in PsA: patient perspectives. Rheumatology, 62(8), 2845-2854.',
      },
    ],
    relatedArticles: ["gentle-exercises-flaring-joints", "managing-dual-impact-skin-joint-pain"],
  },
]

export function getArticleById(id) {
  return allArticles.find((a) => a.id === id)
}

export function getRelatedArticles(ids) {
  return allArticles.filter((a) => ids.includes(a.id))
}

export default allArticles
