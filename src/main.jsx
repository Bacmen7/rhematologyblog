import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import "./App.css"
import App from "./App.jsx"
import BlogDetail from "./pages/BlogDetail.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
