import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import "./index.css"
import "./App.css"
import App from "./App.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"
import OurApproach from "./pages/OurApproach.jsx"
import PricingInsurance from "./pages/PricingInsurance.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Blog from "./pages/Blog.jsx"
import DoctorProfile from "./pages/DoctorProfile.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/pricing" element={<PricingInsurance />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<BlogDetail />} />
        <Route path="/specialist/:id" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
