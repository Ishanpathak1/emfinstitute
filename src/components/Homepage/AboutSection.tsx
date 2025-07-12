

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      {/* Full-width image */}
      <div className="w-full h-64 md:h-96 bg-gradient-to-r from-brand-primary to-red-600 flex items-center justify-center">
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
            
            <h2 className="heading-secondary text-center mb-8">
              About EMF Institute
            </h2>
            
            <div className="space-y-6">
              <p className="text-body text-lg">
                EMF Institute is dedicated to preserving and documenting the rich history of electronic music and its ongoing evolution. We serve as a comprehensive resource for students, artists, and researchers exploring the intersection of technology and musical creativity.
              </p>
              
              <p className="text-body text-lg">
                Our mission encompasses the documentation of groundbreaking works, the preservation of innovative techniques, and the analysis of how electronic music continues to push creative boundaries. We support both emerging and established artists in their exploration of electronic soundscapes.
              </p>
              
              <p className="text-body text-lg">
                Through research, education, and community engagement, EMF Institute ensures that the pioneering spirit of electronic music remains accessible and continues to inspire future generations of musicians and sound artists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 