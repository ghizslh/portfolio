import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'

// Fait défiler vers la section correspondant au hash de l'URL
// (utile quand on navigue depuis une page projet vers "/#contact").
function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])
  return null
}

// BrowserRouter + le script de redirection dans public/404.html
// (technique "spa-github-pages") permettent aux URLs profondes comme
// /project/DiaMini de fonctionner directement sur GitHub Pages.
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar />
        <ScrollToHash />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}
