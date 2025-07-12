

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-brand-background">
      {/* Full-width image */}
      <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-2">Electronic Music Technology</h3>
          <p className="text-lg md:text-xl opacity-90">Synthesizers, Sequencers & Digital Innovation</p>
        </div>
      </div>
      
      {/* Content section */}
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">
              Institute Programs
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Research Feature */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-subsection font-bold text-brand-text mb-4">Research</h3>
                <p className="text-body">
                  In-depth analysis of electronic music history, techniques, and innovations. Our research programs explore the evolution of sound synthesis, digital composition, and the cultural impact of electronic music.
                </p>
              </div>
              
              {/* Documentation Feature */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-subsection font-bold text-brand-text mb-4">Documentation</h3>
                <p className="text-body">
                  Comprehensive archival of electronic music works, techniques, and historical developments. We preserve and catalog important compositions, technological innovations, and artistic methodologies for future generations.
                </p>
              </div>
              
              {/* Education Feature */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-subsection font-bold text-brand-text mb-4">Education</h3>
                <p className="text-body">
                  Educational programs and resources for students, artists, and researchers. We provide access to learning materials, workshops, and scholarly resources that advance understanding of electronic music theory and practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 