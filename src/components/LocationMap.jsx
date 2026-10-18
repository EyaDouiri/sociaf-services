import { useLang } from '../context/LangContext.jsx'
import Reveal from './Reveal.jsx'

export default function LocationMap() {
  const { t } = useLang()

  return (
    <section className="section" id="location">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div className="eyebrow">{t('location.eyebrow')}</div>
            <h2>{t('location.title')}</h2>
            <p>{t('location.lead')}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="map-wrap">
            <div className="map-info-card">
              <InfoRow icon={<PinIcon />} title={t('location.addr_title')} value={t('location.addr')} />
              <InfoRow icon={<PhoneIcon />} title={t('location.phone_title')} value={t('location.phone')} />
              <InfoRow icon={<PhoneIcon />} title="" value={t('location.phone2')} />
              <InfoRow icon={<MailIcon />} title={t('location.mail_title')} value={t('location.mail')} />
              <InfoRow icon={<GlobeIcon />} title={t('location.website_title')} value={t('location.website')} />
              <InfoRow icon={<ClockIcon />} title={t('location.hours_title')} value={t('location.hours')} />
            </div>

            <div className="map-frame">
              <iframe
                title="Sociaf Services — Nouakchott"
                src="https://www.google.com/maps?q=Nouakchott,+Mauritanie&hl=fr&z=13&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="map-info-row">
      <div className="ico">{icon}</div>
      <div>
        <strong>{title}</strong>
        <span>{value}</span>
      </div>
    </div>
  )
}

function PinIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16v16H4z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}
