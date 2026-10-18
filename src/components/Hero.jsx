import { useLang } from '../context/LangContext.jsx'

export default function Hero() {
  const { t, lang } = useLang()
  const words = t('hero.words')
  const firstWord = Array.isArray(words) ? words[0] : ''

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">{t('hero.eyebrow')}</div>
          <h1>
            {t('hero.title_prefix')}
            <br />
            <span className="hero-type">{firstWord}</span>
          </h1>
          <p className="lead">{t('hero.lead')}</p>

          <div className="hero-actions">
            <a href="#services" className="cta-btn">{t('hero.cta_primary')}</a>
            <a href="#contact" className="cta-btn cta-ghost">{t('hero.cta_secondary')}</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>{t('hero.stat1_num')}</strong>
              <span>{t('hero.stat1_label')}</span>
            </div>
            <div className="hero-stat">
              <strong>{t('hero.stat2_num')}</strong>
              <span>{t('hero.stat2_label')}</span>
            </div>
            <div className="hero-stat">
              <strong>{t('hero.stat3_num')}</strong>
              <span>{t('hero.stat3_label')}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1000&q=80"
            alt={lang === 'ar' ? 'فريق سوسياف سرفيسز' : 'Équipe Sociaf Services'}
          />
          <div className="hero-card">
            <div className="hero-card-dot">S</div>
            <div>
              <strong>{t('hero.card_title')}</strong>
              <span>{t('hero.card_sub')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
