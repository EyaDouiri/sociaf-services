import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useLang } from '../context/LangContext.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="navbar" style={{ boxShadow: scrolled ? '0 6px 24px -18px rgba(0,0,0,0.4)' : 'none' }}>
      <div className="navbar-inner">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Sociaf Services" className="brand-logo" />
          <span>Sociaf Services</span>
        </a>

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>{t('nav.services')}</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#location" onClick={() => setMenuOpen(false)}>{t('nav.location')}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
            <li className="nav-close-li">
              <button className="nav-close-btn" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle" aria-label="Langue">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>ع</button>
          </div>

          <button className="icon-btn" onClick={toggleTheme} aria-label="Basculer le thème">
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>

          <button className="mobile-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  ) : (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  )
}
