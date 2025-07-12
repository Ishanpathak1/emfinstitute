

const TheFirstYears: React.FC = () => {
  return (
    <section className="bg-brand-background">
      {/* Full-width image placeholder */}
      <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-600 to-gray-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Electronic Music Archive</h3>
          <p className="text-lg md:text-xl opacity-90">Preserving Musical History</p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Divider line */}
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            
            <h2 className="heading-secondary text-center mb-12">
              THE FIRST YEARS
            </h2>
            
            <div className="space-y-6">
              <p className="text-body text-lg">
                Electronic Music Foundation (EMF), a nonprofit organization, was founded in September 1994 to disseminate information and materials on the history and current practice of electronic music.
              </p>
              
              <p className="text-body text-lg">
                In 2000, the Daniel Langlois Foundation provided support for EMF Institute as EMF's historical, research, and education program.
              </p>
              
              <p className="text-body text-lg">
                In 2002, the UNESCO Digi-Arts Portal invited participation from EMF Institute. The UNESCO goals were twofold: First, to record the history of electronic music so that it is easily accessible by new practitioners, thereby providing models for creativity; and second, to offer and support musical creativity software that will enable people, with or without prior musical training, to work creatively with sounds.
              </p>
              
              <p className="text-body text-lg">
                The Digi-Arts Portal remained active for several years. Following the Digi-Arts Portal, EMF Institute remained EMF's historical program.
              </p>
              
              <p className="text-body text-lg">
                In 2016, EMF Institute became a nonprofit independent organization aimed at tracing the history of electronic music with a focus on the period from 1950 to 2000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheFirstYears 