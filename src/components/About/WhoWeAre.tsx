

const WhoWeAre: React.FC = () => {
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
    { name: 'Thomas Gerwin', location: 'Berlin, Carlos Guedes (Abu Dhabi)' },
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

  const advisoryBoard = [
    { name: 'Rob Hamilton', location: 'Troy, US' },
    { name: 'Annie Yen-Ling Liu', location: 'Beijing, China' },
    { name: 'Mikako Mizuno', location: 'Nagoya, Japan' },
    { name: 'Mary Simoni', location: 'Troy, US' }
  ]

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-8">
              PARTNERS
            </h2>
            <h2 className="heading-secondary mb-8">
              AND PARTICIPANTS
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          </div>
          
          {/* Advisory Board */}
          <div className="mb-12">
            <h3 className="text-subsection font-bold text-brand-text mb-6 text-center">
              Advisory Board
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisoryBoard.map((member, index) => (
                <div key={index} className="text-body">
                  <span className="font-medium">{member.name}</span>
                  <span className="text-brand-secondary"> ({member.location})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Partners and Participants */}
          <div>
            <h3 className="text-subsection font-bold text-brand-text mb-6 text-center">
              Partners and Participants
            </h3>
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
      </div>
    </section>
  )
}

export default WhoWeAre 