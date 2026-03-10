import Header from "./components/Header"
import Hero from "./components/Hero"
import ApproachSection from "./components/ApproachSection"
import CategoryFilters from "./components/CategoryFilters"
import QuickLinks from "./components/QuickLinks"
import FeaturedInsights from "./components/FeaturedInsights"
import RAArticles from "./components/RAArticles"
import PsAArticles from "./components/PsAArticles"
import TreatmentDeepDives from "./components/TreatmentDeepDives"
import Specialists from "./components/Specialists"
import PatientStories from "./components/PatientStories"
import SymptomChecker from "./components/SymptomChecker"
import BriefingHero from "./components/BriefingHero"
import FocusJAK from "./components/FocusJAK"
import FocusDiagnostic from "./components/FocusDiagnostic"
import ResearchUpdates from "./components/ResearchUpdates"
import ExploreTopics from "./components/ExploreTopics"
import FAQ from "./components/FAQ"
import StrategicNetwork from "./components/StrategicNetwork"
import BriefingFooter from "./components/BriefingFooter"
import PrivacyBanner from "./components/PrivacyBanner"

function App() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        {/* 1. Hero */}
        <div className="bg-background-light">
          <Hero />
        </div>

        {/* 2. Category Filters */}
        <div className="bg-surface">
          <CategoryFilters />
        </div>

        {/* 3. Quick Links (RA, PsA, Biologics) */}
        <div className="bg-surface">
          <QuickLinks />
        </div>

        {/* 4. Featured Insights (3-column articles grid) */}
        <div className="bg-surface">
          <FeaturedInsights />
        </div>

        {/* 5. RA Articles (horizontal scroll) */}
        <div className="bg-[#f0f4fb]">
          <RAArticles />
        </div>

        {/* 6. PsA Articles (horizontal scroll) */}
        <div className="bg-surface">
          <PsAArticles />
        </div>

        {/* 7. Treatment Deep-dives (dark section - JAK, NSAID, Biosimilar) */}
        <TreatmentDeepDives />

        {/* 8. World-Class Specialists */}
        <div className="bg-background-light">
          <Specialists />
        </div>

        {/* 9. Patient Success Stories */}
        <div className="bg-surface">
          <PatientStories />
        </div>

        {/* 10. Symptom Checker CTA */}
        <div className="bg-background-light">
          <SymptomChecker />
        </div>

        {/* 11. Executive Briefing - Biologic Innovation */}
        <div className="bg-surface">
          <BriefingHero />
          <FocusJAK />
          <FocusDiagnostic />
        </div>

        {/* 12. Research Updates */}
        <div className="bg-ghost">
          <ResearchUpdates />
        </div>

        {/* 13. Explore More Topics */}
        <div className="bg-surface">
          <ExploreTopics />
        </div>

        {/* 14. Experience a different approach section */}
        <ApproachSection />

        {/* 15. Common Questions (FAQ) */}
        <div className="bg-surface">
          <FAQ />
        </div>

        {/* 16. Strategic Network CTA (subscribe) */}
        <StrategicNetwork />
      </main>

      {/* Footer */}
      <BriefingFooter />

      <PrivacyBanner />
    </div>
  )
}

export default App
