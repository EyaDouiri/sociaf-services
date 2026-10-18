import { useState } from 'react'
import { useLang } from '../context/LangContext.jsx'
import { serviceImages } from '../data/services.js'
import Reveal from './Reveal.jsx'

const fallbackImg = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'

const MAX_ITEMS = 3

const iconMap = {
  'Solutions informatiques': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M2 20h20M9 17v3M15 17v3" />
      <path d="M8 11l3 3 5-5" />
    </svg>
  ),
  'Sécurité électronique': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'Télécommunications': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="M12 7v6M12 13l-6 4M12 13l6 4" />
    </svg>
  ),
  'Marketing digital': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M3 11v3a2 2 0 002 2h2v5M3 11h18" />
    </svg>
  ),
  'Transport & mobilité': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M3 12h18M7 17v2M17 17v2" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </svg>
  ),
  'Transport & Mobility': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M3 12h18M7 17v2M17 17v2" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </svg>
  ),
  'Services hôteliers': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18M9 21v-6h6v6M8 11h8" />
    </svg>
  ),
  'Tourisme saharien': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19l5-8 4 5 3-4 6 7" />
      <circle cx="17" cy="6" r="2.5" />
      <path d="M3 19h18" />
    </svg>
  ),
  'Saharan Tourism': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19l5-8 4 5 3-4 6 7" />
      <circle cx="17" cy="6" r="2.5" />
      <path d="M3 19h18" />
    </svg>
  ),
  'Commerce & importation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-2 10H5L3 9z" />
      <path d="M3 9l2-4h14l2 4M9 13v3M15 13v3" />
    </svg>
  ),
  'Trade & Importation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-2 10H5L3 9z" />
      <path d="M3 9l2-4h14l2 4M9 13v3M15 13v3" />
    </svg>
  ),
  'حلول تقنية': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M2 20h20M9 17v3M15 17v3" />
      <path d="M8 11l3 3 5-5" />
    </svg>
  ),
  'Information Technology Solutions': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M2 20h20M9 17v3M15 17v3" />
      <path d="M8 11l3 3 5-5" />
    </svg>
  ),
  'الأمن الإلكتروني': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'Electronic Security': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'الاتصالات': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="M12 7v6M12 13l-6 4M12 13l6 4" />
    </svg>
  ),
  'Telecommunications': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="20" cy="19" r="2" />
      <path d="M12 7v6M12 13l-6 4M12 13l6 4" />
    </svg>
  ),
  'التسويق الرقمي': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M3 11v3a2 2 0 002 2h2v5M3 11h18" />
    </svg>
  ),
  'Digital Marketing': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M3 11v3a2 2 0 002 2h2v5M3 11h18" />
    </svg>
  ),
  'النقل والتنقل': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M3 12h18M7 17v2M17 17v2" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </svg>
  ),
  'الخدمات الفندقية': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18M9 21v-6h6v6M8 11h8" />
    </svg>
  ),
  'السياحة الصحراوية': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 19l5-8 4 5 3-4 6 7" />
      <circle cx="17" cy="6" r="2.5" />
      <path d="M3 19h18" />
    </svg>
  ),
  'التجارة والاستيراد': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-2 10H5L3 9z" />
      <path d="M3 9l2-4h14l2 4M9 13v3M15 13v3" />
    </svg>
  ),
}

export default function Services() {
  const { t, lang } = useLang()
  const rawCategories = t('services.categories')
  const categories = Array.isArray(rawCategories) ? [...rawCategories] : rawCategories
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(new Set())

  const cat = Array.isArray(categories) ? categories[active] : null

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">{t('services.eyebrow')}</div>
            <h2>{t('services.title')}</h2>
            <p>{t('services.lead')}</p>
          </div>
        </Reveal>

        {/* Tabs */}
        <div className="service-tabs">
          {Array.isArray(categories) && categories.map((c, ci) => (
            <button
              key={c.key}
              className={`service-tab ${ci === active ? 'active' : ''} ${c.key === 'logistics' ? 'tab-gold' : ''}`}
              onClick={() => setActive(ci)}
            >
              <span className="service-tab-label">{c.title}</span>
            </button>
          ))}
        </div>

        {/* Active category description */}
        {cat && (
          <Reveal key={`desc-${cat.key}`}>
            <div className="service-category-head centered">
              <div className={`service-category-bar ${cat?.key === 'logistics' ? 'bar-gold' : ''}`} />
              <div className="service-category-info">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Cards for active category */}
        <div className="service-grid" key={`grid-${active}`}>
          {cat && (cat.services || []).map((s, i) => {
            const num = active * 4 + i
            const isExpanded = expanded.has(s.title)
            const items = s.items || []
            const visible = isExpanded ? items : items.slice(0, MAX_ITEMS)
            const rest = items.length - Math.min(items.length, MAX_ITEMS)
            const icon = iconMap[s.title]
            const img = serviceImages[s.title] || fallbackImg
            return (
              <Reveal key={s.title} delay={i * 80}>
                <article className="service-card">
                  <div className="service-photo">
                    <span className="service-num">{String(num + 1).padStart(2, '0')}</span>
                    <img src={img} alt={s.title} loading="lazy" />
                    <div className="service-icon-badge">{icon}</div>
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className="service-list">
                      {visible.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    {!isExpanded && rest > 0 && (
                      <button className="service-more-btn" onClick={() => setExpanded((prev) => { const n = new Set(prev); n.add(s.title); return n; })}>
                        +{rest} {lang === 'ar' ? 'أخرى' : lang === 'en' ? 'more' : 'autres'}
                      </button>
                    )}
                    <div className="service-tags">
                      {s.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}