import { useLang } from '../context/LangContext.jsx'

export default function Footer() {
  const { t } = useLang()
  const categories = t('services.categories')
  const list = []
  if (Array.isArray(categories)) {
    categories.forEach(cat => {
      if (Array.isArray(cat.services)) {
        cat.services.forEach(s => list.push(s))
      }
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand" style={{ color: '#fdf9ee' }}>
              <img src="/logo.png" alt="Sociaf Services" className="brand-logo" />
              <span>Sociaf Services</span>
            </a>
            <p style={{ marginTop: 16, maxWidth: 260, opacity: 0.85 }}>{t('footer.tagline')}</p>
          </div>

          <div>
            <h4>{t('footer.services_title')}</h4>
            <ul>
              {Array.isArray(list) && list.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>{t('footer.company_title')}</h4>
            <ul>
              {(t('footer.company') || []).map((c) => <li key={c}><a href="#about">{c}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>{t('footer.legal_title')}</h4>
            <ul>
              {(t('footer.legal') || []).map((c) => <li key={c}><a href="#">{c}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ justifyContent: 'center' }}>
          <span>&copy; 2026 Sociaf Services &mdash; {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  )
}
