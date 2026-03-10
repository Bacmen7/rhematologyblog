import { Link } from "react-router-dom"
import allArticles from "../data/articles"

const featured = allArticles.find((article) => article.id === "future-of-targeted-therapy-jak-inhibitors")
const sideArticles = allArticles.filter((article) =>
  ["musculoskeletal-ultrasound-protocols", "gout-vs-pseudogout"].includes(article.id),
)

function FeaturedInsights() {
  if (!featured) {
    return null
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Featured Insights</h2>
            <p className="text-teal-soft">The latest developments in rheumatic disease management.</p>
          </div>
          <Link className="text-teal-soft font-bold flex items-center gap-1 group" to={`/article/${featured.id}`}>
            View all articles
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Post */}
          <Link to={`/article/${featured.id}`} className="lg:col-span-2 group cursor-pointer block">
            <div
              className="aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-100 bg-cover bg-center"
              style={{ backgroundImage: `url('${featured.image}')` }}
            />
            <div className="flex items-center gap-4 mb-4 text-sm font-bold text-teal-soft">
              <span>{featured.category}</span>
              <span className="w-1 h-1 rounded-full bg-teal-soft/40"></span>
              <span>{featured.readTime}</span>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 group-hover:text-teal-soft transition-colors leading-tight">
              {featured.title}
            </h3>
            <p className="text-teal-soft/80 mb-6 text-lg leading-relaxed">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/30 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${featured.author.image}')` }}
              />
              <div>
                <p className="text-sm font-bold">{featured.author.name}</p>
                <p className="text-xs text-teal-soft">{featured.author.role} &bull; {featured.date}</p>
              </div>
            </div>
          </Link>

          {/* Side Posts */}
          <div className="flex flex-col gap-8">
            {sideArticles.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`} className="group cursor-pointer block">
                <div
                  className="aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100 bg-cover bg-center"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <h4 className="text-xl font-bold mb-2 group-hover:text-teal-soft transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-teal-soft/80">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedInsights
