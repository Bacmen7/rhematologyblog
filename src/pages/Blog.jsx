import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

const articles = [
  {
    id: 1,
    image: "https://oshihealth.com/wp-content/uploads/2026/02/Oshi_February_Why-do-my-farts-smell-so-bad_Graphic-1-1024x635.png",
    category: "Bloating & Gas",
    title: "Why do my farts smell so bad? Quick fixes that help",
    author: "Angela Myers"
  },
  {
    id: 2,
    image: "https://oshihealth.com/wp-content/uploads/2026/01/BOFU-Oshis-approach-to-GLP-1-side-effects-3-1-1024x635.jpg",
    category: "Bloating & Gas",
    title: "How Oshi can help with GLP-1 side effects",
    author: "Steph Coelho, CPT"
  },
  {
    id: 3,
    image: "https://oshihealth.com/wp-content/uploads/2025/09/BOFU-Oshis-approach-to-SIBO-opt1-1024x635.jpg",
    category: "Bloating & Gas",
    title: "Small intestinal bacterial overgrowth (SIBO): How Oshi treats this complex condition",
    author: "Steph Coelho, CPT"
  },
  {
    id: 4,
    image: "https://oshihealth.com/wp-content/uploads/2025/08/Oshi_August_Stomach-and-back-pain_Graphic-1-1024x635.png",
    category: "Bloating & Gas",
    title: "5 reasons women experience stomach and back pain together—and how to fix it",
    author: "Jennifer Chesak, MSJ"
  },
  {
    id: 5,
    image: "https://oshihealth.com/wp-content/uploads/2025/08/Oshi_August_Gastritis-diet_Graphic-1-1024x635.png",
    category: "Bloating & Gas",
    title: "Gastritis diet: What to eat and what to avoid",
    author: "Angela Myers",
    excerpt: "A gastritis diet can help soothe stomach pain and inflammation. Here are foods to eat, what to avoid, and how to manage flare-ups."
  },
  {
    id: 6,
    image: "https://oshihealth.com/wp-content/uploads/2025/06/Oshi_June_Leaky-gut_Graphic-1-1024x635.png",
    category: "Bloating & Gas",
    title: "Leaky gut: What's real, what's not, and what you need to know",
    author: "Jennifer Chesak, MSJ"
  },
  {
    id: 7,
    image: "https://oshihealth.com/wp-content/uploads/2025/04/Oshi_April_How-to-relieve-lower-upper-stomach-pain_Graphic-1-1-1024x635.png",
    category: "Bloating & Gas",
    title: "How to relieve lower & upper stomach pain: The ultimate guide",
    author: "Angela Myers"
  },
  {
    id: 8,
    image: "https://oshihealth.com/wp-content/uploads/2025/01/2025-Oshi_Sulfur-Burps_1-1024x635.png",
    category: "Bloating & Gas",
    title: "What are sulfur burps? Common causes and how to get rid of them",
    author: "Angela Myers"
  },
  {
    id: 9,
    image: "https://oshihealth.com/wp-content/uploads/2025/01/2025-Oshi_SIBO-DIET_1-1024x635.png",
    category: "Bloating & Gas",
    title: "SIBO Diet: What it is, how to get started, and how it can help you heal",
    author: "Angela Myers",
    excerpt: "While the right nutritional approach to manage SIBO symptoms differs from person to person, there is a process to discover what foods to..."
  },
  {
    id: 10,
    image: "https://oshihealth.com/wp-content/uploads/2024/09/Oshi-Health_GI-Dietian_feature-image-RD2-1024x577.jpg",
    category: "Bloating & Gas",
    title: "What is a GI registered dietitian? Everything you need to know about working with one",
    author: "Jennifer Chesak, MSJ",
    excerpt: "If you have a chronic GI condition—such as bloating, abdominal pain, constipation, diarrhea, acid reflux, or something else—working with a..."
  },
  {
    id: 11,
    image: "https://oshihealth.com/wp-content/uploads/2024/08/Oshi_Heathyish_Low-Fodmap_Feature-Image-Grid-1024x577.jpg",
    category: "Bloating & Gas",
    title: "The ultimate low FODMAP foods list: what to eat and what to avoid",
    author: "Angela Myers",
    excerpt: "Licensed registered dietitians weigh in on the the low FODMAP diet — and reveal the most surprising items on the low FODMAP foods list."
  },
  {
    id: 12,
    image: "https://oshihealth.com/wp-content/uploads/2022/07/GettyImages-601798055_994x560.jpeg",
    category: "Bloating & Gas",
    title: "Understanding and managing IBD bloating: What you need to know",
    author: "Steph Coelho, CPT",
    excerpt: "Bloating can be a common, painful symptom of inflammatory bowel disease. Here are 7 tips to consider to reduce bloating."
  }
];

function Blog() {
  return (
    <div className="landing-page bg-background-light text-navy-deep antialiased">
      <Header />
      <main>
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Open+Sans:wght@300;400;500;600;700&display=swap');
          .blog-page .font-sans-blog { font-family: 'Open Sans', sans-serif; }
          .blog-page .font-serif-blog { font-family: 'Lora', serif; }
          .blog-hero-wave { position: absolute; bottom: -1px; left: 0; width: 100%; overflow: hidden; line-height: 0; }
          .blog-hero-wave svg { position: relative; display: block; width: calc(100% + 1.3px); height: 50px; }
          .filter-checkbox { accent-color: #182439; width: 16px; height: 16px; margin-right: 8px; cursor: pointer; }
        `}} />

        <div className="blog-page font-sans-blog text-[#182439] bg-white">
          {/* Hero Section */}
          <section className="relative bg-[#f0f4fb] pt-16 pb-32 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
              <a href="#" className="text-[#515a6a] text-sm underline hover:no-underline mb-6 inline-block">Learn</a>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16">
                <h1 className="font-serif-blog text-5xl md:text-6xl text-[#182439] md:w-1/2">
                  Bloating & Gas
                </h1>
                <p className="text-[#515a6a] text-lg md:text-xl font-light md:w-1/2 md:pt-4">
                  Discover tips and tools for coping with these common and often painful GI symptoms that can disrupt daily living.
                </p>
              </div>
            </div>

            {/* Curved Bottom SVG */}
            <div className="blog-hero-wave">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
              </svg>
            </div>
          </section>

          {/* Main Content Area */}
          <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">

            {/* Filter Bar */}
            <div className="flex justify-end mb-12 relative -mt-24 md:-mt-20 z-20">
              <div className="relative group">
                <button className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-3 px-6 flex items-center gap-4 text-sm font-semibold text-[#515a6a]">
                  Content Type
                  <div className="bg-gray-100 rounded-full p-1">
                    <ChevronDown size={14} strokeWidth={3} />
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                  <ul className="space-y-4">
                    <li className="flex items-center text-sm text-[#182439] cursor-pointer">
                      <input type="checkbox" id="filter-blog" className="filter-checkbox" />
                      <label htmlFor="filter-blog" className="cursor-pointer">Blog</label>
                    </li>
                    <li className="flex items-center text-sm text-[#182439] cursor-pointer">
                      <input type="checkbox" id="filter-recipes" className="filter-checkbox" />
                      <label htmlFor="filter-recipes" className="cursor-pointer">Gut-Friendly Recipes</label>
                    </li>
                    <li className="flex items-center text-sm text-[#182439] cursor-pointer">
                      <input type="checkbox" id="filter-patient" className="filter-checkbox" />
                      <label htmlFor="filter-patient" className="cursor-pointer">Patient Stories</label>
                    </li>
                    <li className="flex items-center text-sm text-[#182439] cursor-pointer">
                      <input type="checkbox" id="filter-research" className="filter-checkbox" />
                      <label htmlFor="filter-research" className="cursor-pointer">Research & Outcomes</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {articles.map((article) => (
                <a key={article.id} href="#" className="group block flex flex-col h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-5 rounded-sm shrink-0 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block bg-[#e3efff] text-[#3b5b80] text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif-blog text-xl leading-snug mb-2 text-[#182439] group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#515a6a] mb-2">
                      By <strong className="text-[#182439] font-semibold">{article.author}</strong>
                    </p>
                    {article.excerpt && (
                      <p className="text-sm text-[#515a6a] font-light mb-4 flex-grow leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                    <div className={`flex items-center gap-2 text-sm font-bold text-[#182439] ${article.excerpt ? 'mt-auto' : 'mt-auto'}`}>
                      Read More
                      <div className="w-6 h-6 rounded-full bg-[#aeeee7] flex items-center justify-center">
                        <ArrowRight size={12} strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-20 mb-10">
              <button className="w-10 h-10 rounded-full bg-[#e3efff] text-[#182439] flex items-center justify-center font-bold text-sm">
                1
              </button>
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="relative bg-[#182439] text-white pt-24 pb-28 mt-16 text-center">
            {/* Top Wave */}
            <div className="absolute top-[-31px] left-0 w-full overflow-hidden leading-none z-10">
              <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[32px] md:h-[40px]">
                <path d="M1440 29.3627C1194.13 4.45308 925.369 -5.17758 665.739 2.66577C461.219 8.84327 260.254 25.3195 53.9922 21.8056C35.9416 21.5019 17.9345 21.0248 0 20.4001V32H1440V29.3627Z" fill="#182439"></path>
              </svg>
            </div>

            <div className="relative z-20 max-w-4xl mx-auto px-6">
              <p className="uppercase tracking-[0.2em] text-[11px] font-semibold text-gray-200 mb-6">From our GI experts to your inbox</p>
              <h2 className="font-serif-blog text-[42px] md:text-[52px] font-normal leading-tight mb-10 text-white">
                Get <span className="relative inline-block z-10">
                  gut friendly recipes
                  <svg className="absolute -bottom-1.5 left-0 w-full h-[10px] -z-10" preserveAspectRatio="none" viewBox="0 0 456 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7.40487C152.958 2.78597 303.264 0.160341 453 8" stroke="#8EBFFF" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round"></path>
                  </svg>
                </span>, news, and more—<br className="hidden md:block" />delivered weekly.
              </h2>

              <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address*"
                  required
                  className="w-full sm:w-[320px] px-8 py-[18px] rounded-full text-[#182439] placeholder-[#A0A4AC] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#aeeee7] leading-none"
                />
                <button
                  type="submit"
                  className="bg-[#aeeee7] hover:bg-[#90e0d8] text-[#182439] font-bold py-[18px] px-8 rounded-full transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-[15px] leading-none whitespace-nowrap"
                >
                  Subscribe <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
              <svg viewBox="0 0 1440 16" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[16px] md:h-[24px]">
                <path d="M428.1 14.2289C654.82 14.2289 823.319 0 1053.1 0C1196.21 0 1315.56 5.51969 1440 9.68339V16H0V3.1744C141.3 7.36788 270.666 14.2289 428.1 14.2289Z" fill="#1a2744"></path>
              </svg>
            </div>
          </section>
        </div>
      </main>
      <BriefingFooter />
    </div>
  );
}

export default Blog;
