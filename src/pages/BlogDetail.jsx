import { Link, useParams } from "react-router-dom"
import { getArticleById, getRelatedArticles } from "../data/articles"
import Header from "../components/Header"
import BriefingFooter from "../components/BriefingFooter"

function BlogDetail() {
  const { id } = useParams()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="bg-background-light text-navy-deep min-h-screen">
        <Header />
        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl font-semibold mb-4">Article not found</h1>
          <p className="text-navy-muted mb-10">The page you are trying to open is not available.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-navy-deep text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>
        </section>
        <BriefingFooter />
      </div>
    )
  }

  const related = article.relatedArticles ? getRelatedArticles(article.relatedArticles) : []
  const reviewerImage = article.reviewedBy.image

  return (
    <div className="blog-page bg-[#f5f5f5] text-[#1a1a1a]">
      <Header />

      <section className="bg-[#f3f5f6] border-b border-[#e0e0e0]">
        <div className="max-w-[1180px] mx-auto px-6 py-14">
          <nav className="flex items-center flex-wrap gap-2 text-[13px] text-[#5f5f5f] mb-10">
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">Ro</Link>
            <span>&gt;</span>
            <span>Weight loss</span>
            <span>&gt;</span>
            <span>Wegovy</span>
          </nav>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_450px] xl:grid-cols-[minmax(0,1fr)_480px] gap-10 items-end">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-semibold text-[#1a1a1a] mb-5">
                {article.title}
              </h1>

              <div className="text-[13px] leading-6 text-[#444] flex flex-wrap items-center gap-x-2">
                <span>{article.readTime}</span>
                <span>&bull;</span>
                <span>Written by:</span>
                <span className="underline font-semibold">{article.author.name}</span>
                <span>&bull;</span>
                <span>Reviewed by:</span>
                <span className="underline font-semibold">{article.reviewedBy.name}</span>
                <span>&bull;</span>
                <span>Updated: <strong>{article.date}</strong></span>
              </div>

              <Link
                to="/"
                className="inline-flex items-center justify-center mt-8 px-10 py-3 rounded-full bg-[#1a1a1a] text-white text-[14px] font-semibold hover:bg-[#2a2a2a] transition-colors"
              >
                Check my options
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm">
              <div className="grid grid-cols-[115px_1fr] min-h-[150px]">
                <div className="h-full relative overflow-hidden bg-gradient-to-b from-slate-300 to-slate-500">
                  {reviewerImage && (
                    <img
                      src={reviewerImage}
                      alt={article.reviewedBy.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(event) => {
                        event.currentTarget.style.display = "none"
                      }}
                    />
                  )}
                </div>

                <div className="p-3.5">
                  <p className="text-[10px] font-semibold text-[#0d7744] mb-1">Reviewed By</p>
                  <h3 className="text-[1.3rem] md:text-[1.45rem] leading-tight tracking-tight font-semibold mb-2 text-[#1a1a1a]">
                    {article.reviewedBy.name}
                  </h3>
                  <p className="text-[12px] leading-6 text-[#333] mb-3">{article.reviewedBy.bio}</p>
                  <span className="text-[12px] font-semibold underline">View bio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-12">
          <aside className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-2xl font-semibold leading-none lg:hidden mb-6">Contents</h2>
            <div className="p-0">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl leading-none tracking-tight font-semibold">Here's what we'll cover</h3>
                <span className="inline-flex items-center justify-center text-[#4a4a4a]" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 14l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
              </div>
              <div className="space-y-4">
                {article.tableOfContents.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-[16px] leading-7 text-[#1a1a1a] hover:underline">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="bg-[#f0ecec] border border-[#e5dfdf] rounded-sm p-7 mb-10">
              <h3 className="text-2xl md:text-3xl leading-none tracking-tight font-semibold mb-6">Key takeaways</h3>
              <ul className="space-y-4">
                {article.keyTakeaways.map((item, index) => (
                  <li key={index} className="text-[16px] leading-8 text-[#1a1a1a] flex gap-3">
                    <span>&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-lg leading-relaxed text-[#1a1a1a] space-y-6 mb-10">
              <p>{article.excerpt}</p>
              <p>Read on as we share an in-depth timeline and practical guidance based on clinically reviewed evidence.</p>
            </div>

            <div className="blog-article-content text-[#1a1a1a]" dangerouslySetInnerHTML={{ __html: article.content }} />

            {article.references?.length > 0 && (
              <div className="mt-14 pt-10 border-t border-[#dcdcdc]">
                <h3 className="text-2xl md:text-3xl leading-none tracking-tight font-semibold mb-5">References</h3>
                <ol className="space-y-3">
                  {article.references.map((ref, index) => (
                    <li key={index} className="text-[14px] leading-7 text-[#333]">
                      <span className="font-semibold mr-2">{index + 1}.</span>
                      {ref.text}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6 border-t border-[#e3e3e3]">
          <div className="flex items-end justify-between mb-8">
            <h3 className="text-3xl font-semibold text-gray-900">Rheumatoid Arthritis Articles</h3>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/article/${item.id}`}
                className="w-[300px] min-w-[300px] max-w-[300px] flex-shrink-0 flex flex-col article-card bg-[#fcfcfc] border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img alt={item.title} className="w-full h-full object-cover transition-transform duration-300" src={item.image} />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-xl font-medium leading-snug mb-4 break-words">{item.title}</h4>
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {item.readTime}
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
      )}

      <BriefingFooter />
    </div>
  )
}

export default BlogDetail
