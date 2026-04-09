import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) {
    return (
      <div dir="rtl" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <Link to="/articles" className="articles-back-home">→ חזרה למאמרים</Link>
        <h1 style={{ marginTop: '2rem' }}>המאמר לא נמצא</h1>
      </div>
    )
  }

  const related = articles.filter((a) => a.id !== id).slice(0, 3)

  return (
    <div dir="rtl" className="article-page">

      {/* Hero */}
      <div className="article-hero">
        <img className="article-hero-img" src={article.image} alt={article.title} />
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <Link to="/articles" className="articles-back-home">← חזרה למאמרים</Link>
          <span className="article-hero-category">{article.category}</span>
          <h1 className="article-hero-title">{article.title}</h1>
          <span className="article-hero-date">{article.date}</span>
        </div>
      </div>

      {/* Body with Sidebar */}
      <div className="article-layout">

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="article-toc">
            <h3 className="article-toc-title">תוכן עניינים</h3>
            <nav>
              {article.toc?.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="article-toc-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="article-sidebar-cta">
            <p>רוצה תוכנית אימון אישית?</p>
            <a
              href={`https://wa.me/972525959358`}
              target="_blank"
              rel="noreferrer"
              className="btn dark"
              style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.88rem', padding: '0.6rem 1.2rem' }}
            >
              דברו איתי בוואטסאפ
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="article-main">
          <p className="article-excerpt-lead">{article.excerpt}</p>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="article-share">
            <span className="article-share-label">שתפו:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="article-share-btn"
            >
              פייסבוק
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="article-share-btn"
            >
              וואטסאפ
            </a>
          </div>
        </main>
      </div>

      {/* Related Articles */}
      <div className="article-related-section">
        <div className="article-related-inner">
          <h2 className="article-related-title">מאמרים נוספים</h2>
          <div className="article-related-grid">
            {related.map((rel) => (
              <Link to={`/articles/${rel.id}`} key={rel.id} className="article-related-card">
                <div className="article-related-img">
                  <img src={rel.image} alt={rel.title} loading="lazy" />
                </div>
                <div className="article-related-info">
                  <span className="article-related-cat">{rel.category}</span>
                  <h3>{rel.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} ספיר מדר | כל הזכויות שמורות
      </footer>
    </div>
  )
}
