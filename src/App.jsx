import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { articles } from './data/articles'
import ArticlesPage from './pages/ArticlesPage'
import ArticlePage from './pages/ArticlePage'

const phone = '0525959358'
const whatsappNumber = '972525959358'

const services = [
  {
    title: 'כושר פונקציונאלי',
    description: 'אימונים ממוקדי תנועה אמיתית, שיפור כוח, יציבות וסיבולת לחיי היום יום.',
  },
  {
    title: 'קרוספיט',
    description: 'שילוב של כוח, אירובי וטכניקה באימונים דינאמיים עם דגש על התקדמות בטוחה.',
  },
  {
    title: 'פילאטיס פונקציונאלי',
    description: 'חיזוק שרירי ליבה, שיפור יציבה וגמישות כדי להרגיש חזק.ה ומאוזנ.ת יותר.',
  },
  {
    title: "נינג'ה",
    description: "פיתוח קואורדינציה, מהירות וזריזות באימונים מאתגרים בסגנון נינג'ה.",
  },
]

const testimonials = [
  {
    name: 'לקוחה מרוצה',
    text: 'ספיר מקצועית, סבלנית ומלאת אנרגיה. תוך כמה חודשים הרגשתי שינוי גדול בכוח ובביטחון.',
  },
  {
    name: 'מתאמן ותיק',
    text: 'האימונים מגוונים ומדויקים, עם יחס אישי אמיתי. ממליץ לכל מי שרוצה להתקדם נכון.',
  },
  {
    name: 'אמא לשניים',
    text: 'מצאתי אצל ספיר מסגרת שמתאימה לי באמת. האימונים אפקטיביים ומותאמים לקצב שלי.',
  },
]

const trustStats = [
  { value: '100%', label: 'יחס אישי לכל מתאמן ומתאמנת' },
  { value: '4', label: 'תחומי התמחות מקצועיים' },
  { value: 'B.Ed', label: 'תואר בחינוך גופני' },
]

const processSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "שיחת היכרות + שאלון אישי",
    lines: [
      "מיד לאחר ההרשמה, אני שולחת לך הודעה בוואטסאפ ואנחנו יוצאים לדרך! בלי לבזבז שניה, זה היתרון באונליין.",
      "שלב 1: מילוי שאלון מעמיק",
      "שלב 2: ביצוע תמונות ומדידות לפי סרטון הדגמה שאשלח לך",
      "שלב 3: אני עוברת על השאלון, התמונות והנתונים שלך, מנתחת את המטרות שלך ויש לי את כל הפרטים שאני צריכה",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "בניית תוכנית האימונים",
    lines: [
      "אימוני נשים וגברים זו המומחיות שלי ואני יודעת להתאים עבורך את התוכנית האידאלית למטרות שלך.",
      "אקח בחשבון את מבנה הגוף שלך, הרמה שלך באימונים, את כמות האימונים שאת/ה מוכנ/ה להתחייב אליהם, הציוד הקיים ברשותך ואתאים לך תוכנית! כזו הולכת להתמכר אליה ולספר לכל החברות/ים!",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "ביצוע האימונים",
    lines: [
      "תוכלי/תוכל להתאמן מהבית או מהחדר כושר, עם סרטוני הדגמה לכל תרגיל + דגשים אישיים, כדי שתדעי/תדע בדיוק מה לעשות.",
      "ואם בכל זאת יש ספק? אז איזה כיף שיש מי שילווה ויואג לך!",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.6 2.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "ליווי ומעקב אישי וצמוד",
    lines: [
      "אני איתך ומדייקת אותך לכל אורך הדרך. ממעקב ותמיכה אישי בוואטסאפ אחר ההתקדמות שלך כדי לבצע שקילות, מדידות ותמונות למעקב.",
      "אבל... אם את/ה חושב/ת שבאת לחופשה - זה לא המצב. זה יעבוד רק אם נשתף פעולה במלואו, ואני מתחייבת לתוצאות כשאת/ה מתחייב/ת לעשות את מה שאני אומרת.",
    ],
  },
]

const faqs = [
  {
    question: "האם חייבים ניסיון קודם?",
    answer: "בכלל לא. אני עובדת עם נשים וגברים מתחילים ועם מתאמנים מנוסים כאחד. התוכנית מותאמת בדיוק לרמה שלך - אין כאן תחרות, יש כאן התקדמות.",
  },
  {
    question: "האם ניתן להתאמן מהבית?",
    answer: "כן! ניתן להתאמן מהבית, מהחדר כושר, או גם וגם. התוכנית מותאמת לציוד שיש לך. אם יש לך מסה, דמבל, גומיות - נעבוד עם זה. אם אין - גם ככה אפשר.",
  },
  {
    question: "כמה אימונים בשבוע?",
    answer: "זה תלוי בך. בשאלון הכניסה תגידי/תגיד כמה פעמים בשבוע את/ה מוכנ/ה להתחייב, ואני אבנה את התוכנית בהתאם - בין אם זה 2 פעמים ובין אם זה 5.",
  },
  {
    question: "איך אני יודעת שאני עושה את התרגילים נכון?",
    answer: "כל תרגיל מגיע עם סרטון הדגמה ודגשים ספציפיים. בנוסף, אני זמינה בוואטסאפ לשאלות ותיקונים לאורך כל הדרך.",
  },
  {
    question: "כמה זמן עד שרואים תוצאות?",
    answer: "תלוי במטרה ובעקביות, אבל רוב המתאמנים/ות מתחילים לחוש שינוי בתוך 3-4 שבועות. תוצאות ויזואליות מגיעות בין שבוע 6 ל-8 בממוצע.",
  },
  {
    question: "מה קורה אם דילגתי על אימון?",
    answer: "חיים קורים! אין עונשים ואין שיפוטיות. אנחנו נסתכל קדימה ונמשיך. חשוב שתרגישי/תרגיש שזו מסגרת שאפשר לחיות איתה לאורך זמן.",
  },
]

const fitnessTopics = [
  'אימון כושר אישי',
  'אימוני כושר פונקציונאלי',
  'אימוני קרוספיט',
  'אימוני פילאטיס פונקציונאלי',
  "אימוני נינג'ה",
  'אימוני כושר קבוצתיים',
]

const galleryImages = [
  { src: '/images/gallery/trainer-01.png', alt: 'ספיר מדר במהלך אימון אישי' },
  { src: '/images/gallery/trainer-02.png', alt: 'אימון כושר פונקציונאלי עם ספיר מדר' },
  { src: '/images/gallery/trainer-03.png', alt: 'אימון פילאטיס פונקציונאלי' },
  { src: '/images/gallery/trainer-04.png', alt: "אימון קרוספיט ונינג'ה" },
]

const placeholderImage = '/images/gallery/placeholder.svg'

function HomePage() {
  const currentYear = new Date().getFullYear()

  return (
    <div dir="rtl">

      {/* Navigation */}
      <nav className="top-nav">
        {/* Logo - RIGHT */}
        <a href="/" className="top-nav-logo">
          <img
            src="/images/logo.jpeg"
            alt="Madars Fitness"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement.querySelector('.top-nav-logo-text').style.display = 'block'
            }}
          />
          <span className="top-nav-logo-text" style={{ display: 'none' }}>MADARS FITNESS</span>
        </a>

        {/* Links - CENTER */}
        <div className="top-nav-links">
          <a href="#about">אודות</a>
          <a href="#services">שירותים</a>
          <a href="#testimonials">המלצות</a>
          <Link to="/articles">בלוג</Link>
          <a href="#contact">יצירת קשר</a>
        </div>

        {/* WhatsApp - LEFT */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="top-nav-whatsapp"
          aria-label="וואטסאפ"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </nav>

      {/* Hero */}
      <header className="hero">
        <img
          className="hero-bg"
          src="/images/hero-main.jpeg"
          alt="ספיר מדר - מאמנת כושר"
          onError={(e) => { e.currentTarget.src = '/images/gallery/trainer-01.png' }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">FITNESS &amp; TRAINING</span>
          <h1>SAPIR MADAR<br /><span className="hero-title-he">ליווי כושר ואימון אישי</span></h1>
          <p className="hero-subtitle">
            להשיג את הגוף שתמיד רצית,<br />בלי לוותר על עצמך בדרך!
          </p>
          <div className="hero-actions">
            <a className="btn hero-cta-pill" href="#services">
              איפה מתחילים ?
            </a>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="stats-strip">
        <div className="stats-inner">
          {trustStats.map((item) => (
            <div key={item.label} className="stat-item">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="section">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              className="about-image"
              src="/images/gallery/trainer-02.png"
              alt="ספיר מדר"
              onError={(e) => { e.currentTarget.src = placeholderImage }}
            />
          </div>
          <div className="about-text">
            <span className="section-label">אודות</span>
            <div className="divider" />
            <h2 className="section-title">קצת עליי</h2>
            <p>
              אני ספיר מדר, מאמנת כושר ופילאטיס פונקציונאלי, מאמנת קרוספיט ונינג'ה, ומורה לחינוך
              גופני. בעלת תואר ראשון בחינוך גופני ובימים אלה מסיימת תואר שני במכון וינגייט.
            </p>
            <p>
              אני מאמינה באימון מותאם אישית שמייצר תוצאות אמיתיות לאורך זמן, תוך שמירה על
              מקצועיות, יחס אישי והנאה מהדרך.
            </p>
            <ul className="about-highlights">
              <li>תואר ראשון בחינוך גופני</li>
              <li>תואר שני בחינוך גופני - מכון וינגייט</li>
              <li>ליווי אישי למתאמנים מכל הרמות</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="section-full" id="services">
        <div className="section-inner">
          <span className="section-label">מה אני מציעה</span>
          <div className="divider" />
          <h2 className="section-title">שירותים</h2>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={service.title} className="service-card">
                <span className="service-number">0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="topics-wrap" style={{ marginTop: '3rem' }}>
            {fitnessTopics.map((topic) => (
              <span key={topic} className="topic-chip">{topic}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="section-dark">
        <div className="section-inner">
          <span className="section-label">איך זה עובד</span>
          <div className="divider" />
          <h2 className="section-title">התהליך</h2>
          <p className="section-desc light">
            מהיכרות ועד תוצאות - תהליך ברור, מקצועי ומותאם אישית לנשים ולגברים.
          </p>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <React.Fragment key={step.title}>
                <div className="process-col">
                  <div className="process-icon-wrap">
                    {step.icon}
                  </div>
                  <h3 className="process-col-title">{step.title}</h3>
                  <div className="process-col-body">
                    {step.lines.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
                {i < processSteps.length - 1 && (
                  <span key={`arrow-${i}`} className="process-arrow">←</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Program Section */}
      <div className="app-section">
        <div className="app-section-bg" />
        <div className="app-section-content">
          <div className="app-text-col">
            <span className="section-label">תוכנית דיגיטלית</span>
            <div className="divider" />
            <h2 className="app-section-title">תוכנית אימון אישית<br />ישירות לטלפון שלך</h2>
            <p className="app-section-desc">
              כל תוכנית האימון, סרטוני ההדגמה, המעקב וההתקדמות - הכל במקום אחד, נגיש תמיד, מכל מקום.
            </p>
            <a className="btn app-cta-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              אני רוצה להצטרף
            </a>
          </div>
          <div className="phone-mockup-wrap">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-ui">
                  <div className="phone-ui-header">
                    <span className="phone-ui-greeting">שלום ספיר 👋</span>
                    <span className="phone-ui-date">יום שני</span>
                  </div>
                  <div className="phone-ui-card">
                    <span className="phone-ui-card-label">אימון היום</span>
                    <span className="phone-ui-card-title">כוח עליון</span>
                    <div className="phone-ui-progress-row">
                      <span>התקדמות</span>
                      <span>3/6 תרגילים</span>
                    </div>
                    <div className="phone-ui-progress-bar">
                      <div className="phone-ui-progress-fill" />
                    </div>
                  </div>
                  <div className="phone-ui-exercises">
                    {['לחיצת חזה', 'שכיבות שמיכה', 'מתח צר'].map((ex, i) => (
                      <div key={ex} className={`phone-ui-ex ${i < 3 ? 'done' : ''}`}>
                        <span className="phone-ui-ex-check">{i < 3 ? '✓' : '○'}</span>
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                  <div className="phone-ui-stats">
                    <div className="phone-ui-stat">
                      <span className="phone-ui-stat-val">47</span>
                      <span className="phone-ui-stat-lbl">דקות</span>
                    </div>
                    <div className="phone-ui-stat">
                      <span className="phone-ui-stat-val">320</span>
                      <span className="phone-ui-stat-lbl">קלוריות</span>
                    </div>
                    <div className="phone-ui-stat">
                      <span className="phone-ui-stat-val">6</span>
                      <span className="phone-ui-stat-lbl">שבועות</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <span className="section-label">מה אומרים עליי</span>
        <div className="divider" />
        <h2 className="section-title">המלצות</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <p>{t.text}</p>
              <span className="testimonial-name">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.src} className="gallery-item">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = placeholderImage }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <div className="faq-section">
        <div className="faq-section-inner">
          <div className="faq-header">
            <span className="section-label">יש לך שאלות?</span>
            <div className="divider" />
            <h2 className="faq-title">שאלות נפוצות</h2>
            <p className="faq-subtitle">כל מה שרצית לדעת לפני שמתחילים</p>
          </div>
          <div className="faq-grid">
            {faqs.map((item, i) => (
              <div key={item.question} className="faq-card">
                <span className="faq-num">0{i + 1}</span>
                <h3 className="faq-q">{item.question}</h3>
                <p className="faq-a">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>מוכנים להתחיל?</h2>
          <a className="btn dark" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            לקביעת שיחת היכרות
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="section-dark" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">יצירת קשר</span>
              <div className="divider" />
              <h2 className="section-title">בואו נדבר</h2>
              <p>עמק יזרעאל | חיפה | קריות | עמקים</p>
              <p>
                טלפון: <a href={`tel:${phone}`}>{phone}</a>
              </p>
              <p>לפרטים נוספים ותיאום אימון היכרות ניתן ליצור קשר.</p>
              <div className="contact-social">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">וואטסאפ</a>
                <a href="https://www.instagram.com/madars_fitness/" target="_blank" rel="noreferrer">אינסטגרם</a>
                <a href="https://www.facebook.com/profile.php?id=100028749852003" target="_blank" rel="noreferrer">פייסבוק</a>
              </div>
            </div>
            <div className="contact-cta">
              <p>מוכנים להתחיל תהליך מקצועי עם תוצאות אמיתיות?</p>
              <a className="btn primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                שלחו הודעה עכשיו
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="section-full">
        <div className="section-inner">
          <span className="section-label">בלוג</span>
          <div className="divider" />
          <h2 className="section-title">מאמרים בנושא אימונים ותזונה</h2>
          <div className="articles-home-grid">
            {articles.slice(0, 4).map((article) => (
              <Link to={`/articles/${article.id}`} key={article.id} className="article-home-card">
                <div className="article-home-img">
                  <img src={article.image} alt={article.title} loading="lazy" />
                  <span className="article-home-cat">{article.category}</span>
                </div>
                <div className="article-home-body">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="article-home-read">קראו עוד ←</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/articles" className="btn dark">כל המאמרים</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © {currentYear} ספיר מדר | כל הזכויות שמורות
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
    </Routes>
  )
}

export default App
