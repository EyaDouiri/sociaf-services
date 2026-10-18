import { ThemeProvider } from './context/ThemeContext.jsx'
import { LangProvider } from './context/LangContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import LocationMap from './components/LocationMap.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Stats />
          <LocationMap />
          <Contact />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}
