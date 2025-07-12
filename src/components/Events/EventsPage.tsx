import React, { useState } from 'react'
import EventsHero from './EventsHero'
import EventsFilter from './EventsFilter'
import EventsList from './EventsList'
import EventsCategories from './EventsCategories'
import EventsNewsletter from './EventsNewsletter'

const EventsPage: React.FC = () => {
  const [filters, setFilters] = useState({ month: '', location: '' })

  const handleFilterChange = (newFilters: { month: string; location: string }) => {
    setFilters(newFilters)
  }

  return (
    <div className="min-h-screen bg-brand-background">
      <EventsHero />
      <EventsFilter onFilterChange={handleFilterChange} />
      <EventsList filters={filters} />
      <EventsCategories />
      <EventsNewsletter />
    </div>
  )
}

export default EventsPage 