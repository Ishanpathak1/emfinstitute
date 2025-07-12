import React from 'react'

interface Event {
  id: string
  title: string
  date: string
  time: string
  venue: string
  location: string
  description: string
  month: string
  locationSlug: string
}

interface EventsListProps {
  filters: { month: string; location: string }
}

const EventsList: React.FC<EventsListProps> = ({ filters }) => {
  // Sample events data
  const events: Event[] = [
    {
      id: '1',
      title: 'Electronic Music Composition Workshop',
      date: 'March 15, 2024',
      time: '7:00 PM',
      venue: 'EMF Institute Hall',
      location: 'New York, NY',
      description: 'An intensive workshop exploring contemporary electronic music composition techniques, featuring hands-on experience with digital audio workstations and synthesizer programming.',
      month: 'march',
      locationSlug: 'new-york'
    },
    {
      id: '2',
      title: 'Symposium on Sound Synthesis',
      date: 'March 28, 2024',
      time: '2:00 PM',
      venue: 'University Concert Hall',
      location: 'Boston, MA',
      description: 'A scholarly presentation examining the evolution of sound synthesis from analog modular systems to modern digital techniques, with demonstrations of historical instruments.',
      month: 'march',
      locationSlug: 'boston'
    },
    {
      id: '3',
      title: 'Ambient Music Performance Series',
      date: 'April 5, 2024',
      time: '8:00 PM',
      venue: 'The Modernist Gallery',
      location: 'Los Angeles, CA',
      description: 'A curated evening of ambient electronic music performances, featuring artists who push the boundaries of atmospheric and experimental sound design.',
      month: 'april',
      locationSlug: 'los-angeles'
    },
    {
      id: '4',
      title: 'Digital Audio Processing Lecture',
      date: 'April 12, 2024',
      time: '3:00 PM',
      venue: 'Online Event',
      location: 'Virtual',
      description: 'An educational presentation on the mathematics and applications of digital signal processing in electronic music production and sound design.',
      month: 'april',
      locationSlug: 'online'
    },
    {
      id: '5',
      title: 'Experimental Electronic Showcase',
      date: 'May 3, 2024',
      time: '7:30 PM',
      venue: 'The Sound Lab',
      location: 'Chicago, IL',
      description: 'An evening dedicated to experimental electronic music, featuring emerging artists working with unconventional synthesis methods and innovative performance techniques.',
      month: 'may',
      locationSlug: 'chicago'
    },
    {
      id: '6',
      title: 'Archive Listening Session',
      date: 'May 18, 2024',
      time: '4:00 PM',
      venue: 'EMF Institute Library',
      location: 'San Francisco, CA',
      description: 'A guided listening session exploring significant works from the EMF Institute archives, with historical context and technical analysis.',
      month: 'may',
      locationSlug: 'san-francisco'
    }
  ]

  // Filter events based on selected filters
  const filteredEvents = events.filter(event => {
    const matchesMonth = !filters.month || event.month === filters.month
    const matchesLocation = !filters.location || event.locationSlug === filters.location
    return matchesMonth && matchesLocation
  })

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-brand-secondary text-lg">
                No events found matching your criteria. Please adjust your filters.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <div key={event.id}>
                  <div className="space-y-4">
                    <h3 className="text-subsection font-bold text-brand-text">
                      {event.title}
                    </h3>
                    
                    <div className="text-brand-secondary">
                      <p className="font-medium">
                        {event.date} • {event.time}
                      </p>
                      <p>
                        {event.venue} • {event.location}
                      </p>
                    </div>
                    
                    <p className="text-body leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div>
                      <a 
                        href={`#event-${event.id}`}
                        className="text-brand-primary hover:text-red-700 transition-colors duration-200 border-b border-brand-primary hover:border-red-700"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                  
                  {index < filteredEvents.length - 1 && (
                    <div className="mt-12 pt-12 border-t border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default EventsList 