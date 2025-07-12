import React from 'react'

const AboutEMFInstitutePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-background">
      {/* Page Hero */}
      <section className="bg-white section-padding">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-hero font-bold text-brand-primary mb-4">
              ABOUT EMF INSTITUTE
            </h1>
            <p className="text-xl text-brand-secondary">
              Documenting the history and future of electronic music
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-brand-background">
        {/* Full-width image placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Electronic Music Performance</h3>
            <p className="text-lg md:text-xl opacity-90">Documenting Innovation in Sound</p>
          </div>
        </div>
        
        {/* Content section */}
        <div className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              {/* Divider line */}
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
              
              <h2 className="heading-secondary text-center mb-12">
                ABOUT EMF INSTITUTE
              </h2>
              
              <div className="space-y-6">
                <p className="text-body text-lg">
                  Following the 1997 release of his book, <em>Electric Sound: The Past and Promise of Electronic Music</em>, American composer and author Joel Chadabe wished to continue his work of documenting the history of electronic music. In 2000, EMF Institute was launched as a program of Electronic Music Foundation (EMF). In 2016, EMF Institute became its own 501c3 nonprofit organization.
                </p>
                
                <p className="text-body text-lg">
                  With an initial focus on the latter half of the 20th Century, EMF Institute believes that music created post 1950, especially music created from the invention of the tape recorder, analog synthesizers, and digital technology, led to a musical revolution in the thought and practice of music composition and performance.
                </p>
                
                <p className="text-body text-lg">
                  Now, as technology has advanced since its inception, so too has the scope of EMF Institute. Still intent on our initial functions, we aim to offer more and provide a broader spectrum of content.
                </p>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-brand-primary">
                  <p className="text-body text-lg italic">
                    "The goal of this book is to make the history of electronic music clear for any interested person, whether professional, student, nonelectronic musician, or observer. It tells the story behind the music and instruments, showing not just what happened during one of the most exciting periods in the history of music, but how and why it happened and what it felt like to be there." — Joel Chadabe
                  </p>
                </div>
                
                <p className="text-body text-lg">
                  <em>Electric Sound</em> is available on <a href="#" className="text-brand-primary hover:text-red-700 border-b border-brand-primary hover:border-red-700 transition-colors">Amazon</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutEMFInstitutePage 