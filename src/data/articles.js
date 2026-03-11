const allArticles = [
  // Featured Insights
  {
    id: "future-of-targeted-therapy-jak-inhibitors",
    category: "Clinical Research",
    readTime: "12 min read",
    title: "The Future of Targeted Therapy: Next-Gen JAK Inhibitors in Rheumatoid Arthritis",
    excerpt: "What the latest FDA changes and trial data actually mean for RA patients who've run out of options.",
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
      "JAK inhibitors are oral drugs that offer an alternative to injectable biologics for RA.",
      "Next-gen JAK inhibitors hit ACR50 response rates of 45% at 12 weeks in Phase 3 trials.",
      "The FDA now requires cardiovascular and blood clot risk monitoring for all JAK inhibitor patients.",
      "These drugs are best suited for patients who've already tried and failed at least one DMARD.",
    ],
    content: `
      <h2 id="understanding-jak">Understanding JAK inhibitors</h2>
      <p>JAK inhibitors changed how we treat rheumatoid arthritis. Where biologics go after cytokines outside the cell, JAK inhibitors get inside and block the JAK-STAT signaling pathway, one of the main drivers of RA inflammation.</p>
      <p>There are four JAK enzymes: JAK1, JAK2, JAK3, and TYK2. Each one pairs with different cytokine receptors. First-gen drugs like tofacitinib hit several of them at once. Newer ones are more selective, which matters for side effects.</p>
      <blockquote>"What's interesting about the newer JAK inhibitors is the selectivity. If you can target one specific JAK pathway instead of all of them, you should get fewer off-target problems without losing efficacy," says Dr. Jenkins.</blockquote>

      <h2 id="clinical-trial-results">Latest clinical trial results</h2>
      <p>Recent Phase 3 data on next-gen selective JAK inhibitors looks strong, especially in patients with moderate-to-severe RA who weren't responding well to methotrexate alone.</p>
      <p>Here's what the numbers show:</p>
      <ul>
        <li>ACR50 response rates hit 45% at 12 weeks, versus 28% on placebo.</li>
        <li>DAS28-CRP scores dropped meaningfully, with many patients reaching low disease activity or remission.</li>
        <li>Some patients noticed improvement within the first two weeks.</li>
        <li>Results held steady through 52 weeks of continuous treatment.</li>
      </ul>
      <p>For patients who've been through multiple biologics without success, this is worth paying attention to. The fact that these are pills rather than injections helps with adherence too.</p>

      <h2 id="safety-profiles">Safety profiles and monitoring</h2>
      <p>Safety has been the big question with JAK inhibitors ever since post-marketing studies flagged cardiovascular and blood clot risks with first-gen drugs.</p>
      <p>The newer, more selective compounds look safer on that front, though nobody's letting their guard down. Current monitoring includes:</p>
      <ul>
        <li>Lipid panels at baseline and again at 4-8 weeks</li>
        <li>Complete blood counts at baseline, 4-8 weeks, then every 3 months</li>
        <li>Liver function tests at baseline and periodically after</li>
        <li>Cardiovascular risk assessment before and during treatment</li>
        <li>TB and hepatitis screening before starting</li>
      </ul>

      <h2 id="fda-guidelines">Updated FDA guidelines</h2>
      <p>The FDA recently updated prescribing info for JAK inhibitors. The main change: these drugs are now recommended after a patient has tried and failed at least one TNF blocker, not as a first-line biologic option.</p>
      <p>The agency also wants doctors to use the lowest dose that works, for as short a time as needed.</p>

      <h2 id="patient-selection">Patient selection criteria</h2>
      <p>Picking the right patient matters a lot with JAK inhibitors. Good candidates generally include:</p>
      <ul>
        <li>Moderate-to-severe RA patients who've already tried a conventional DMARD</li>
        <li>People who'd rather take a pill than inject a biologic</li>
        <li>Patients without major cardiovascular risk factors</li>
        <li>No history of blood clots</li>
        <li>Non-smokers, or those willing to quit</li>
      </ul>
      <p>Each patient needs their own risk-benefit conversation, weighing disease severity, other health conditions, and what treatments they've already tried.</p>

      <h2 id="future-outlook">Future outlook</h2>
      <p>Several next-gen compounds are in late-stage trials right now, including TYK2-selective inhibitors and dual JAK1/JAK3 inhibitors. If the selectivity translates to better safety without losing efficacy, that changes the calculus for a lot of patients.</p>
      <p>There's also active research into biomarkers that could predict which patients respond best to which JAK inhibitor. We're not there yet, but pharmacogenomic-guided prescribing could eventually take a lot of the guesswork out of treatment selection.</p>
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
    excerpt: "How standard ultrasound protocols can catch inflammatory arthritis before X-rays do.",
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
      "Ultrasound catches synovitis and erosions before X-ray can.",
      "Standard scanning protocols mean less variation between doctors.",
      "Power Doppler shows active inflammation in real time.",
      "Having ultrasound in the clinic room speeds up both diagnosis and treatment decisions.",
    ],
    content: `
      <h2 id="introduction">Introduction to MSK ultrasound</h2>
      <p>Musculoskeletal ultrasound lets rheumatologists see soft tissue inflammation in real time, without radiation. That alone makes it useful. But what really sets it apart is convenience: unlike MRI, it's portable, relatively cheap, and can happen right in the exam room.</p>
      <p>For tracking disease activity and checking whether a treatment is working, having imaging at the point of care speeds things up considerably.</p>

      <h2 id="standardization">Standardizing protocols</h2>
      <p>The problem with MSK ultrasound has always been consistency. One doctor scans different joints than another, uses different machine settings, reads the images differently. EULAR and ACR have been working on fixing that.</p>
      <p>A standard protocol usually means scanning bilateral MCP joints (2-5), wrists, and MTP joints with both B-mode and Power Doppler, in longitudinal and transverse planes.</p>

      <h2 id="key-findings">Key ultrasound findings</h2>
      <p>What you're looking for in inflammatory arthritis:</p>
      <ul>
        <li>Synovial hypertrophy: thickened synovial tissue showing up as hypoechoic or anechoic areas inside the joint capsule.</li>
        <li>Effusion: fluid collecting in the joint space.</li>
        <li>Power Doppler signal: increased blood flow, which means active inflammation.</li>
        <li>Bone erosions: cortical breaks that ultrasound can catch before X-ray does.</li>
      </ul>

      <h2 id="clinical-application">Clinical application</h2>
      <p>When ultrasound is part of routine visits, treatment decisions get more precise. You can see subclinical disease activity that the patient might not even feel yet, which helps decide whether to escalate or taper medication.</p>
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
    excerpt: "They look similar at the bedside but the crystals tell different stories.",
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
      "Gout comes from MSU crystals; pseudogout from CPP crystals. Different cause, different treatment.",
      "Polarized light microscopy on synovial fluid is the only definitive way to tell them apart.",
      "You can't reliably distinguish them by symptoms alone; the overlap is too big.",
      "Treatment depends on crystal type: urate-lowering drugs for gout, mostly symptom management for pseudogout.",
    ],
    content: `
      <h2 id="overview">Overview</h2>
      <p>Gout and pseudogout are both crystal-driven joint diseases, and they can look almost identical at the bedside. But the crystals are different, the joints they prefer are different, and the treatments don't fully overlap. Getting the diagnosis right matters.</p>

      <h2 id="clinical-presentation">Clinical presentation</h2>
      <p>Gout usually hits the big toe first (podagra), though it can show up anywhere. Pseudogout favors the knee and wrist, and tends to come on more gradually. The overlap in symptoms is why you can't diagnose either one on clinical presentation alone.</p>

      <h2 id="diagnostic-workup">Diagnostic workup</h2>
      <p>The answer is in the synovial fluid. Under polarized light microscopy, gout shows negatively birefringent needle-shaped MSU crystals. Pseudogout shows positively birefringent rhomboid CPP crystals. No fluid analysis, no definitive diagnosis.</p>

      <h2 id="treatment">Treatment approaches</h2>
      <p>Acute gout responds to NSAIDs, colchicine, or steroids. For patients with recurrent flares, long-term urate-lowering drugs like allopurinol or febuxostat can prevent them. Pseudogout is harder to prevent; treatment is mostly about managing acute episodes with NSAIDs and colchicine.</p>
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
    excerpt: "What's actually available for RA right now, from methotrexate to the newest biologics.",
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
      "Start DMARDs early. Waiting too long lets the disease get ahead of you.",
      "If methotrexate alone isn't enough, biologics are the next step.",
      "Combination regimens keep improving, and more options mean fewer dead ends.",
      "Treatment is moving toward matching drugs to individual patient profiles.",
    ],
    content: `
      <h2 id="overview">Treatment overview</h2>
      <p>RA treatment looks nothing like it did twenty years ago. The current approach is "treat to target," meaning you pick a goal (remission or at least low disease activity) and adjust medication until you get there. It sounds simple, but getting the right combination for each patient takes work.</p>

      <h2 id="dmards">DMARDs</h2>
      <p>Methotrexate is still the starting point for most RA patients. It's been around for decades, it works, and we know its safety profile inside and out. Most combination regimens are built around it.</p>

      <h2 id="biologics">Biologic agents</h2>
      <p>When methotrexate alone isn't enough, biologics are the next step. TNF inhibitors came first, then drugs targeting IL-6, B cells, and T cell co-stimulation. JAK inhibitors are the newest addition and they're oral, which patients tend to prefer.</p>

      <h2 id="emerging">Emerging therapies</h2>
      <p>For patients who've run through the standard options, there's a growing list of newer drugs in development: selective JAK inhibitors, BTK inhibitors, and some novel biologics. More options means fewer patients stuck without something to try.</p>
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
    excerpt: "What RF and anti-CCP results actually tell your doctor, and what they don't.",
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
      "RF and anti-CCP are the two main blood tests for diagnosing RA.",
      "Anti-CCP is more specific: 95% specificity versus RF's broader hit rate.",
      "Anti-CCP can turn positive years before you feel anything wrong.",
      "No single test confirms RA; results need to match the clinical picture.",
    ],
    content: `
      <h2 id="basics">Blood test basics</h2>
      <p>If your doctor suspects RA, two blood tests will likely come up: rheumatoid factor (RF) and anti-CCP antibodies. Neither one tells the whole story on its own, but together they're the best diagnostic lab work we have.</p>

      <h2 id="rf">Rheumatoid factor explained</h2>
      <p>About 70-80% of RA patients test positive for RF. The catch is that RF shows up in other conditions too, and even in some healthy people. So a positive RF alone doesn't confirm RA, and a negative one doesn't rule it out.</p>

      <h2 id="anti-ccp">Anti-CCP antibodies</h2>
      <p>Anti-CCP is more specific: about 95% specificity for RA. What makes it especially useful is that it can turn positive years before symptoms appear. If you catch it early, you can start treatment before the joints take damage.</p>

      <h2 id="interpretation">Interpreting your results</h2>
      <p>Being positive for both RF and anti-CCP ("double positive") is the strongest lab evidence for RA. It also tends to signal more aggressive disease, which usually means your rheumatologist will recommend more aggressive treatment.</p>
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
    excerpt: "What you can (and should) do when your joints are flaring up.",
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
      "Some movement during flares is better than none. Total rest makes stiffness worse.",
      "Range-of-motion exercises are safe even when joints are inflamed.",
      "Water takes 90% of the load off your joints, making pool exercise much easier.",
      "If it hurts more, stop. Pain is the signal to back off.",
    ],
    content: `
      <h2 id="when-to-exercise">When to exercise during flares</h2>
      <p>Every instinct says to stay still during a flare. But lying in bed all day actually makes the stiffness worse. The trick is doing the right kind of movement, not pushing through pain.</p>

      <h2 id="gentle-movements">Gentle movement exercises</h2>
      <p>Range-of-motion exercises are the safest bet during a flare. Move each joint through whatever range feels comfortable. You can do these sitting down or even lying in bed. Go slowly. If it hurts more, back off.</p>

      <h2 id="water-therapy">Water-based therapy</h2>
      <p>Water takes up to 90% of the load off your joints. A warm pool session during a flare can feel dramatically better than the same movements on dry land. The warmth also helps loosen tight muscles.</p>

      <h2 id="recovery">Recovery strategies</h2>
      <p>Ice the inflamed joints for 15-20 minutes after exercise to bring down swelling. And try some gentle stretching before bed. It won't cure morning stiffness, but it can take the edge off.</p>
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
    excerpt: "Which dietary advice actually holds up, and which is just noise.",
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
      "Focus on whole foods, omega-3s (fish), and colorful produce. That's the core of it.",
      "No single food cures arthritis. Patterns matter more than individual ingredients.",
      "The Mediterranean diet has the best evidence for lowering inflammation.",
      "Supplements can help, but they're not a substitute for eating well.",
    ],
    content: `
      <h2 id="what-is-it">What is an anti-inflammatory diet?</h2>
      <p>There's no single "anti-inflammatory diet" you can download and follow. It's more of a pattern: eat more of the foods that seem to calm inflammation, less of the ones that don't. The Mediterranean diet has the most research behind it.</p>

      <h2 id="foods-to-eat">Foods that help</h2>
      <p>Fatty fish like salmon, sardines, and mackerel are the headliners. Leafy greens, berries, nuts, olive oil, and whole grains also show up consistently in studies linking diet to lower inflammatory markers.</p>

      <h2 id="foods-to-avoid">Foods to limit</h2>
      <p>Processed foods, added sugar, trans fats, and too much red meat are all linked to higher inflammation. Alcohol is a grey area, but less is generally better.</p>

      <h2 id="myths">Common myths debunked</h2>
      <p>Nightshade vegetables (tomatoes, peppers, eggplant) get blamed a lot online, but the evidence that they worsen arthritis is thin. Same with gluten-free diets. Unless you actually have celiac disease, cutting gluten probably won't help your RA.</p>
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
    excerpt: "When your disease attacks skin and joints at the same time, treatment gets complicated.",
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
      "PsA hits skin and joints together, so treatment has to cover both.",
      "IL-17 and IL-23 inhibitors work on both fronts, which simplifies the regimen.",
      "Treating early prevents joint damage that can't be reversed later.",
      "Best results come when rheumatology and dermatology coordinate instead of working in silos.",
    ],
    content: `
      <h2 id="dual-burden">The dual burden of PsA</h2>
      <p>PsA is frustrating because it hits you twice. You're dealing with painful, swollen joints and visible skin plaques at the same time. Treating one without the other leaves patients only half-helped.</p>

      <h2 id="treatment-strategies">Integrated treatment strategies</h2>
      <p>The best outcomes happen when the rheumatologist and dermatologist actually talk to each other. You need to pick drugs that work for both the skin and the joints, which narrows the options but also simplifies the regimen.</p>

      <h2 id="biologic-options">Biologic options</h2>
      <p>A few biologic classes can handle both sides of PsA. TNF inhibitors were the first to show this. IL-17 inhibitors (secukinumab, ixekizumab) and IL-23 inhibitors (guselkumab, risankizumab) have since joined the list, and some of them are especially strong on the skin side.</p>

      <h2 id="lifestyle">Lifestyle management</h2>
      <p>Losing weight if you're overweight, staying active, managing stress, and not smoking all make a measurable difference in PsA. These aren't vague wellness tips; there's real data showing they affect both skin and joint outcomes.</p>
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
    excerpt: "Injections vs pills for PsA: what the head-to-head data actually shows.",
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
      "Both biologics and small molecules work for PsA. Neither category is universally better.",
      "Biologics are stronger on average but need injections or infusions.",
      "Small molecules (JAK inhibitors, PDE4 inhibitors) are pills, which patients tend to prefer.",
      "The decision comes down to disease severity, what else the patient has going on, and insurance.",
    ],
    content: `
      <h2 id="overview">Treatment landscape overview</h2>
      <p>Ten years ago, PsA treatment options were limited. Now there are enough choices that the real challenge is figuring out which one fits each patient best.</p>

      <h2 id="biologics">Biologic therapies</h2>
      <p>Biologics go after specific immune pathways driving PsA. The main classes are TNF inhibitors, IL-17 inhibitors, and IL-23 inhibitors. They're effective but require injections or infusions, which some patients don't want.</p>

      <h2 id="small-molecules">Small molecule options</h2>
      <p>If a patient wants a pill, apremilast (a PDE4 inhibitor) and tofacitinib (a JAK inhibitor) are the two main options. They're also reasonable alternatives when biologics are contraindicated.</p>

      <h2 id="comparison">Head-to-head comparison</h2>
      <p>When you compare them directly, biologics generally give stronger responses for both joints and skin. Small molecules are less potent on average but the convenience of a daily pill counts for something, especially for adherence.</p>
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
    excerpt: "The first hour of the day is the hardest. Here's how to make it less miserable.",
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
      "Morning stiffness lasting over 30 minutes points to inflammatory arthritis, not just aging.",
      "Warm showers, bed stretches, and scheduling around your energy peaks all help.",
      "PsA fatigue has multiple causes: poor sleep, depression, and uncontrolled disease can all pile on.",
      "If stiffness is getting worse, that's a sign your treatment may need adjusting.",
    ],
    content: `
      <h2 id="understanding">Understanding morning stiffness</h2>
      <p>You wake up and everything feels locked. That's inflammatory mediators pooling in your joints overnight while you're not moving. For PsA patients, morning stiffness is one of the most disruptive daily symptoms.</p>

      <h2 id="strategies">Management strategies</h2>
      <p>A warm shower first thing helps loosen things up. Some people do gentle range-of-motion exercises while still in bed, before even standing up. It sounds small, but it can make the first hour of the day much less miserable.</p>

      <h2 id="fatigue">Combating fatigue</h2>
      <p>Fatigue in PsA doesn't get talked about enough. It's not just "being tired." It affects everything. Start with the basics: are you sleeping well? Is there depression going on? Is the disease actually under control? Then pace your activities through the day instead of burning out by noon.</p>

      <h2 id="when-to-call">When to call your doctor</h2>
      <p>If morning stiffness is lasting longer than it used to, if new joints are getting involved, or if fatigue is keeping you from normal daily activities even when you've rested, call your rheumatologist. These could be signs the treatment needs adjusting.</p>
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
