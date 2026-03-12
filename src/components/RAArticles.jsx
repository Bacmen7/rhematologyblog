import { useRef } from "react"
import { Link } from "react-router-dom"

const articles = [
  {
    id: "understanding-blood-work-rf-anti-ccp",
    title: "Understanding your Blood Work: RF and Anti-CCP",
    image: "/images/lab-test.jpg",
    readTime: "12 min read",
  },
  {
    id: "gentle-exercises-flaring-joints",
    title: "Gentle Exercises for Flaring Joints",
    image: "/images/exercise.jpg",
    readTime: "8 min read",
  },
  {
    id: "anti-inflammatory-diet",
    title: "The Anti-Inflammatory Diet: Truths vs Myths",
    image: "/images/diet.jpg",
    readTime: "10 min read",
  },
]

function RAArticles() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 320
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl text-navy-deep leading-[1.05] tracking-tight">Rheumatoid Arthritis Articles</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        {/* Feature Card */}
        <Link
          to="/article/modern-treatments-ra"
          className="w-[300px] min-w-[300px] flex-shrink-0 relative overflow-hidden group cursor-pointer h-[450px] block"
        >
          <img alt="RA Treatment" className="absolute inset-0 h-full w-full object-cover" src="/images/ra-treatment.jpg" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <h3 className="text-2xl font-bold leading-tight text-white">Modern Treatments for RA: What You Need to Know</h3>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
        {/* Article Cards */}
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="w-[300px] min-w-[300px] flex-shrink-0 flex flex-col article-card bg-[#fcfcfc] border border-gray-100"
          >
            <div className="h-56 overflow-hidden">
              <img alt={article.title} className="w-full h-full object-cover transition-transform duration-300" src={article.image} />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h4 className="text-xl font-medium leading-snug mb-4 line-clamp-2">{article.title}</h4>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  {article.readTime}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RAArticles
