

const EventsCategories: React.FC = () => {
  const categories = [
    'Concerts',
    'Open Mic Nights',
    'Workshops',
    'Album Releases',
    'Symposiums',
    'Listening Sessions',
    'Lectures',
    'Exhibitions'
  ]

  return (
    <section className="bg-brand-background section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-secondary text-center mb-8">
            EVENT CATEGORIES
          </h2>
          
          {/* Horizontal divider line */}
          <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
          
          <div className="text-center">
            <div className="inline-block text-left">
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index} className="text-body text-lg">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsCategories 