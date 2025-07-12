import React from 'react'

const WhoWeArePage: React.FC = () => {
  const boardOfDirectors = [
    { name: 'Ben Chadabe', location: 'New York, US', title: 'President' },
    { name: 'Tom Bever', location: 'New York, US', title: 'Vice-President' },
    { name: 'Roy Altman', location: 'Rhode Island, US', title: 'Treasurer, Secretary' },
    { name: 'Joel Chadabe', location: '1938-2021', title: 'Founding President, EMF Institute' },
    { name: 'Marc Battier', location: 'Shenzhen, China; Paris, France' },
    { name: 'Svjetlana Bukvich', location: 'New York, US' },
    { name: 'Warren Burt', location: 'Melbourne, Australia' },
    { name: 'Anthony De Ritis', location: 'Boston, US' },
    { name: 'Kate Galloway', location: 'Troy, US' },
    { name: 'Rob Hamilton', location: 'Troy, US' },
    { name: 'Annie Yen-Ling Liu', location: 'Beijing, China' },
    { name: 'Mikako Mizuno', location: 'Nagoya, Japan' },
    { name: 'Mary Simoni', location: 'Troy, US' }
  ]

  const associates = [
    { name: 'N. B. Aldrich', location: 'Maine, US' },
    { name: 'Tom Rhea', location: 'Boston, US' }
  ]

  const advisor = {
    name: 'Kent Underwood',
    title: 'Director, Avery Fisher Center for Music & Media'
  }

  const partners = [
    { name: 'Peter Beyls', location: 'Ghent, Belgium' },
    { name: 'Georges Bloch', location: 'Paris, France' },
    { name: 'Peer Bode', location: 'Hornell, NY, US' },
    { name: 'Matthew Burtner', location: 'Charlottesville, VA, US' },
    { name: 'Bill Buxton', location: 'Toronto, Canada' },
    { name: 'Alessandro Cipriani', location: 'Rome, Italy' },
    { name: 'Ricardo Dal Farra', location: 'Montreal, Canada; Buenos Aires, Argentina' },
    { name: 'Scott Deal', location: 'Illinois, US' },
    { name: 'Herbert A. Deutsch', location: 'New York, NY, US' },
    { name: 'Francis Dhomont', location: 'France' },
    { name: 'David Dunn', location: 'Santa Cruz, California' },
    { name: 'Phil Edelstein', location: 'New York' },
    { name: 'Thomas Gerwin', location: 'Berlin' },
    { name: 'Carlos Guedes', location: 'Abu Dhabi' },
    { name: 'Hubert Howe', location: 'New York' },
    { name: 'Mari Kimura', location: 'New York' },
    { name: 'Judy Klein', location: 'New York' },
    { name: 'Francisco Kropfl', location: 'Buenos Aires' },
    { name: 'Alcides Lanza', location: 'Montreal' },
    { name: 'Bruno Liberda', location: 'Vienna' },
    { name: 'Annea Lockwood', location: 'New York' },
    { name: 'Zahir Manek', location: 'Toronto' },
    { name: 'Tom Mays', location: 'Paris' },
    { name: 'Stephen McAdams', location: 'Montreal' },
    { name: 'Scott Miller', location: 'Minneapolis, US' },
    { name: 'Bruce Pennycook', location: 'Austin, Texas' },
    { name: 'David Rosenboom', location: 'Los Angeles' },
    { name: 'Robert Rowe', location: 'New York' },
    { name: 'Carla Scaletti', location: 'Urbana, US' },
    { name: 'Laetitia Sonami', location: 'San Francisco' },
    { name: 'Bruno Spoerri', location: 'Zurich' },
    { name: 'Alvise Vidolin', location: 'Padua, Italy' },
    { name: 'Hugues Vinet', location: 'Paris' },
    { name: 'Vedran Vucic', location: 'Belgrade' },
    { name: 'Marcelo Wanderley', location: 'Montreal' },
    { name: 'Hildergard Westerkamp', location: 'Vancouver' },
    { name: 'Gayle Young', location: 'Buffalo, New York State' }
  ]

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Board of Directors and Associates */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-hero font-bold text-brand-primary mb-4">
                BOARD OF DIRECTORS
              </h1>
              <h1 className="text-hero font-bold text-brand-primary mb-8">
                AND ASSOCIATES
              </h1>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            </div>
            
            {/* Two column layout for Board and Associates */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Board of Directors */}
              <div>
                <h2 className="text-xl font-bold text-brand-text mb-6">
                  EMF Institute Board of Directors
                </h2>
                <div className="space-y-2 mb-8">
                  {boardOfDirectors.map((member, index) => (
                    <div key={index} className="text-body">
                      <span className="font-medium">{member.name}</span>
                      <span className="text-brand-secondary"> ({member.location})</span>
                      {member.title && (
                        <span className="text-brand-secondary">, {member.title}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column - Associates and Advisor */}
              <div>
                {/* Associates */}
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-brand-text mb-6">
                    Associates
                  </h2>
                  <div className="space-y-2 mb-8">
                    {associates.map((member, index) => (
                      <div key={index} className="text-body">
                        <span className="font-medium">{member.name}</span>
                        <span className="text-brand-secondary"> ({member.location})</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advisor */}
                <div>
                  <h2 className="text-xl font-bold text-brand-text mb-6">
                    Advisor
                  </h2>
                  <div className="text-body">
                    <span className="font-medium">{advisor.name}</span>
                    <div className="text-brand-secondary italic">
                      {advisor.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Participants */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-hero font-bold text-brand-primary mb-4">
                PARTNERS
              </h1>
              <h1 className="text-hero font-bold text-brand-primary mb-8">
                AND PARTICIPANTS
              </h1>
              <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
            </div>
            
            {/* Partners List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="text-body">
                  <span className="font-medium">{partner.name}</span>
                  <span className="text-brand-secondary"> ({partner.location})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeArePage 