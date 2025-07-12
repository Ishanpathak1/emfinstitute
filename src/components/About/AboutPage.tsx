
import AboutHero from './AboutHero'
import AboutEMFInstitute from './AboutEMFInstitute'
import OurMission from './OurMission'
import TheFirstYears from './TheFirstYears'
import WhoWeAre from './WhoWeAre'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      <AboutHero />
      <AboutEMFInstitute />
      <OurMission />
      <TheFirstYears />
      <WhoWeAre />
    </div>
  )
}

export default AboutPage 