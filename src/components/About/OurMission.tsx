

const OurMission: React.FC = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          
          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-8">
              MISSION
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            <p className="text-body text-xl leading-relaxed">
              Our mission is to provide an environment where information relating to electronic media arts, artists, and their technology is available to everyone.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center">
            <h2 className="heading-secondary mb-8">
              VISION
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-12"></div>
            
            <div className="text-left space-y-6">
              <p className="text-body text-lg">
                EMF Institute aims to fulfill its mission through its programs, both current and developing including:
              </p>
              
              <ul className="space-y-4 text-body text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Support for and presentation of electronic music concerts, performances, installations, symposiums and other public events to promote understanding of the medium</span>
                </li>
                
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Community Calendar of national and international electronic music and electronic music-related events</span>
                </li>
                
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Newsletter recapping the activities of EMF Institute and upcoming events</span>
                </li>
                
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-brand-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Archive development of historical materials of electronic media artists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission 