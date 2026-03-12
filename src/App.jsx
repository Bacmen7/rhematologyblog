import Header from "./components/Header"
import Hero from "./components/Hero"
import HealthGuideHero from "./components/HealthGuideHero"
import ApproachSection from "./components/ApproachSection"
import CategoryFilters from "./components/CategoryFilters"
import QuickLinks from "./components/QuickLinks"
import FeaturedInsights from "./components/FeaturedInsights"
import RAArticles from "./components/RAArticles"
import PsAArticles from "./components/PsAArticles"
import Specialists from "./components/Specialists"
import Testimonials from "./components/Testimonials"
import CTASection from "./components/CTASection"
import StatsBar from "./components/StatsBar"
import InsurancePartners from "./components/InsurancePartners"
import ConditionsGrid from "./components/ConditionsGrid"
import WhyRheuma from "./components/WhyRheuma"

import BriefingHero from "./components/BriefingHero"
import FocusJAK from "./components/FocusJAK"
import FocusDiagnostic from "./components/FocusDiagnostic"
import ResearchUpdates from "./components/ResearchUpdates"
import ExploreTopics from "./components/ExploreTopics"
import FAQ from "./components/FAQ"
import WellnessSeminars from "./components/WellnessSeminars"
import StrategicNetwork from "./components/StrategicNetwork"
import Newsletter from "./components/Newsletter"
import CtaBanner from "./components/CtaBanner"
import BriefingFooter from "./components/BriefingFooter"
import PrivacyBanner from "./components/PrivacyBanner"

function App() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        {/* ═══════════════════════════════════════════════
            ZONE 1 — INTRO & DISCOVERY
        ═══════════════════════════════════════════════ */}
        <Hero />
        <StatsBar />

        {/* <InsurancePartners /> */}
        {/* <ConditionsGrid /> */}

        <WhyRheuma />

        {/* <div className="bg-white">
          <CategoryFilters />
        </div> */}

        {/* <div className="bg-white">
          <FeaturedInsights />
        </div> */}

        {/* ═══════════════════════════════════════════════
            ZONE 2 — HEALTH GUIDE & CONDITIONS
        ═══════════════════════════════════════════════ */}
        <HealthGuideHero />
        {/* <QuickLinks /> */}

        <div className="bg-ghost">
          <RAArticles />
        </div>

        <div className="bg-white">
          <PsAArticles />
        </div>

        {/* ═══════════════════════════════════════════════
            ZONE 3 — CLINICAL EXPERTISE & SPECIALISTS
        ═══════════════════════════════════════════════ */}
        <ApproachSection />

        <div className="bg-white">
          <Specialists />
        </div>

        <Testimonials />

        {/* ═══════════════════════════════════════════════
            ZONE 4 — EXECUTIVE BRIEFING & RESEARCH
        ═══════════════════════════════════════════════ */}
        <div className="bg-ghost">
          {/* <BriefingHero /> */}
          {/* <FocusJAK /> */}
          {/* <FocusDiagnostic /> */}
        </div>

        <div className="bg-white">
          <ResearchUpdates />
        </div>

        {/* ═══════════════════════════════════════════════
            ZONE 5 — ENGAGE & CONVERT
        ═══════════════════════════════════════════════ */}
        <div className="bg-white">
          <ExploreTopics />
        </div>

        {/* <div className="bg-ghost">
          <FAQ />
        </div> */}

        {/* <WellnessSeminars /> */}

        {/* <StrategicNetwork /> */}

        <CtaBanner />

        <div className="pt-6 md:pt-10" style={{ backgroundColor: "#fdfdfe" }}>
          <Newsletter />
        </div>

        {/* <CTASection /> */}
      </main>

      <BriefingFooter />
      {/* <PrivacyBanner /> */}
    </div>
  )
}

export default App
