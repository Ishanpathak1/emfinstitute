import { useState } from 'react'

// Homepage Sections
import {
  TopBar,
  Navigation,
  Hero,
  NewWorldSection,
  AboutSection,
  FeaturesSection,
  NewsletterSection,
  Footer,
} from './components/Homepage'

// About Pages
import {
  AboutEMFInstitutePage,
  OurMissionPage,
  TheFirstYearsPage,
  WhoWeArePage,
} from './components/About'

// Events Page
import { EventsPage } from './components/Events'

// Program Page (new!)
import { ProgramMainPage } from './components/Program'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'events':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <EventsPage />
            <Footer />
          </div>
        )
      case 'about-emf-institute':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <AboutEMFInstitutePage />
            <Footer />
          </div>
        )
      case 'our-mission':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <OurMissionPage />
            <Footer />
          </div>
        )
      case 'the-first-years':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <TheFirstYearsPage />
            <Footer />
          </div>
        )
      case 'who-we-are':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <WhoWeArePage />
            <Footer />
          </div>
        )
      case 'programs':
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <ProgramMainPage />
            <Footer />
          </div>
        )
      default:
        return (
          <div className="min-h-screen bg-brand-background">
            <TopBar />
            <Navigation onNavigate={handleNavigation} />
            <Hero />
            <NewWorldSection />
            <AboutSection />
            <FeaturesSection />
            <NewsletterSection />
            <Footer />
          </div>
        )
    }
  }

  return renderPage()
}

export default App
