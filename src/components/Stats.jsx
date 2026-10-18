import { useLang } from '../context/LangContext.jsx'
import Reveal from './Reveal.jsx'

export default function Stats() {
  const { t } = useLang()

  return (
    <section className="section section-alt about-section" id="about">
      {/* decorative background */}
      <div className="about-deco" aria-hidden="true">
        <span className="about-blob about-blob-1" />
        <span className="about-blob about-blob-2" />
        <svg className="about-grid-pattern" width="100%" height="100%">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>
      </div>

      <div className="container about-container">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">{t('about.eyebrow')}</div>
            <h2>{t('about.title')}</h2>
            <p>{t('about.lead')}</p>
          </div>
        </Reveal>

        <div className="about-cards">
          {/* left decorative ring */}
          <svg className="about-ring about-ring-left" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          </svg>
          <Reveal delay={0}>
            <div className="about-card-tile">
              <span className="about-card-icon"><MissionIcon /></span>
              <h3>{t('about.mission_title')}</h3>
              <p>{t('about.mission')}</p>
              <div className="about-card-sub">
                <h4>{t('about.values_title')}</h4>
                <div className="value-pills">
                  {(t('about.values') || []).map((v) => (
                    <span key={v} className="value-pill"><span className="value-dot" />{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="about-card-tile about-card-accent">
              <span className="about-card-icon"><VisionIcon /></span>
              <h3>{t('about.vision_title')}</h3>
              <p>{t('about.vision')}</p>
              <div className="about-card-sub">
                <h4>{t('about.why_title')}</h4>
                <ul className="mini-check-list">
                  {(t('about.reasons') || []).slice(0, 4).map((r) => (
                    <li key={r}><CheckIcon />{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="about-card-tile">
              <span className="about-card-icon"><ClientsIcon /></span>
              <h3>{t('about.audience_title')}</h3>
              <div className="client-pills">
                {(t('about.audience') || []).map((c) => (
                  <span key={c} className="client-pill">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* right decorative ring */}
          <svg className="about-ring about-ring-right" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
          </svg>
        </div>
      </div>
    </section>
  )
}

function MissionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
}
function VisionIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function ClientsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 4a3 3 0 010 6M21 20c0-2.8-2.2-5-5-5" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <span className="mini-check">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
    </span>
  )
}