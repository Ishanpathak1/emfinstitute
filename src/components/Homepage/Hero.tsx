import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white section-padding">
      <div className="container-max text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-brand-secondary">EMF</span>
            <span className="text-brand-primary">Institute</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-secondary font-medium tracking-wide uppercase">
            Tracing the History and Future of Electronic Music
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero 