import { useState } from 'react'

interface EventsFilterProps {
  onFilterChange: (filters: { month: string; location: string }) => void
}

const EventsFilter: React.FC<EventsFilterProps> = ({ onFilterChange }) => {
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  const months = [
    { value: '', label: 'All Months' },
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' }
  ]

  const locations = [
    { value: '', label: 'All Locations' },
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'boston', label: 'Boston' },
    { value: 'san-francisco', label: 'San Francisco' },
    { value: 'online', label: 'Online' }
  ]

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = event.target.value
    setSelectedMonth(month)
    onFilterChange({ month, location: selectedLocation })
  }

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const location = event.target.value
    setSelectedLocation(location)
    onFilterChange({ month: selectedMonth, location })
  }

  return (
    <section className="bg-brand-background py-8">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex-1">
              <label htmlFor="month-filter" className="block text-sm font-medium text-brand-text mb-2">
                Filter by Month
              </label>
              <select
                id="month-filter"
                value={selectedMonth}
                onChange={handleMonthChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-brand-text"
              >
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="location-filter" className="block text-sm font-medium text-brand-text mb-2">
                Filter by Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white text-brand-text"
              >
                {locations.map((location) => (
                  <option key={location.value} value={location.value}>
                    {location.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsFilter 