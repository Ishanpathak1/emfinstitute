import React from 'react'
import HeroSection from './HeroSection'
import ProgramCard from './ProgramCard'
import CarouselSection from './CarouselSection'
import FloatingCard from './FloatingCard'

const ProgramMainPage = () => {
  return (
    <>
      <HeroSection />

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
        <ProgramCard
          title="🎵 Concerts"
          description="EMF Institute’s mission is to provide an environment where information relating to electronic media arts, artists, and their technology is available to everyone. To this end, we plan to promote events and music and offer young composers the opportunities for concert performance."
        />

        <ProgramCard
          title="🎼 Joel Chadabe New Music Fund"
          description="The idea of an electronic music fund to encourage experimentation, invention, and contribution to the world of electronic music was a goal of EMF Institute’s founder Joel Chadabe..."
        />

        <ProgramCard
          title="🧠 Archive and History of Electronic Music"
          description="Our long-term goal is to document the stories, reports, sounds, images, and media that were created by those involved in the development of electronic music."
          note="Photo: Joel Chadabe with Moog Computer Electronic Music Studio (CEMS), SUNY Albany, in the 1970s."
        />

        <CarouselSection />
        <FloatingCard />
      </main>
    </>
  )
}

export default ProgramMainPage
