import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../context/LangContext.jsx'
import Reveal from './Reveal.jsx'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const { t } = useLang()
  const formRef = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
      .then(() => setStatus('sent'))
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  const btnLabel = {
    idle: t('contact.send'),
    sending: 'Envoi en cours...',
    sent: '✓ Message envoyé',
    error: '✗ Échec de l\'envoi',
  }

  return (
    <section className="section section-alt contact-section" id="contact">
      <div className="contact-deco" aria-hidden="true">
        <span className="about-blob about-blob-1" />
        <span className="about-blob about-blob-2" />
        <svg className="about-grid-pattern" width="100%" height="100%">
          <defs>
            <pattern id="dotgrid2" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid2)" />
        </svg>
        <svg className="about-ring about-ring-left" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
        </svg>
        <svg className="about-ring about-ring-right" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
        </svg>
      </div>

      <div className="container contact-container">
        <div className="contact-grid">
          <Reveal>
            <div>
              <div className="eyebrow">{t('contact.eyebrow')}</div>
              <h2>{t('contact.title')}</h2>
              <p style={{ marginTop: 18, fontSize: 17, maxWidth: 420 }}>{t('contact.lead')}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <label>{t('contact.name')}</label>
                <input type="text" name="name" required />
              </div>
              <div className="field">
                <label>{t('contact.email')}</label>
                <input type="email" name="email" required />
              </div>
              <div className="field">
                <label>{t('contact.message')}</label>
                <textarea name="message" rows={5} required />
              </div>
              <button type="submit" className="cta-btn" disabled={status === 'sending'}>
                {btnLabel[status]}
              </button>

              {status === 'sent' && (
                <div className="contact-msg contact-msg-sent">
                  ✓ Message envoyé avec succès ! Nous vous répondrons rapidement.
                </div>
              )}
              {status === 'error' && (
                <div className="contact-msg contact-msg-error">
                  ✗ Une erreur est survenue. Vérifiez votre connexion ou réessayez plus tard.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}