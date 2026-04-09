import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function ArticlesPage() {
  return (
    <div dir="rtl" className="articles-page">
      <div className="articles-page-hero">
        <Link to="/" className="articles-back-home">→ חזרה לדף הבית</Link>
        <span className="section-label">בלוג</span>
        <h1 className="articles-page-title">מאמרים בנושא<br />אימונים ותזונה</h1>
        <p className="articles-page-subtitle">טיפים מקצועיים, מדריכים ותוכן שיעזור לך להתקדם</p>
      </div>

      <div className="articles-grid-page">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id} className="article-card-link">
            <article className="article-card-big">
              <div className="article-card-img-wrap">
                <img src={article.image} alt={article.title} loading="lazy" />
                <span className="article-card-category">{article.category}</span>
              </div>
              <div className="article-card-body">
                <span className="article-card-date">{article.date}</span>
                <h2 className="article-card-title">{article.title}</h2>
                <p className="article-card-excerpt">{article.excerpt}</p>
                <span className="article-card-read">קראו עוד ←</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <footer className="footer" style={{ marginTop: '4rem' }}>
        © {new Date().getFullYear()} ספיר מדר | כל הזכויות שמורות
      </footer>
    </div>
  )
}
