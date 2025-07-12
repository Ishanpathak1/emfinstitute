import React, { useState, useRef, useEffect } from 'react'

interface NavigationProps {
  onNavigate?: (page: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'Events', href: '#events', page: 'events' },
    { name: 'Programs', href: '#programs', page: 'programs' },
    { 
      name: 'About', 
      href: '#about', 
      page: 'about',
      dropdown: [
        { name: 'About EMF Institute', page: 'about-emf-institute' },
        { name: 'Our Mission', page: 'our-mission' },
        { name: 'The First Years', page: 'the-first-years' },
        { name: 'Who We Are', page: 'who-we-are' }
      ]
    },
    { name: 'Contact', href: '#contact', page: 'contact' },
    { name: 'Contribute', href: '#contribute', page: 'contribute' },
  ]

  const handleMenuClick = (page: string, event: React.MouseEvent) => {
    event.preventDefault()
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-brand-secondary">EMF</span>
              <span className="text-brand-primary">Institute</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    ref={dropdownRef}
                    className="relative group"
                  >
                    <button
                      className="text-brand-text hover:text-brand-primary font-medium transition-colors duration-200 cursor-pointer flex items-center"
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    >
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.page}
                            href="#"
                            onClick={(e) => {
                              handleMenuClick(dropdownItem.page, e)
                              setIsAboutDropdownOpen(false)
                            }}
                            className="block px-4 py-2 text-sm text-brand-text hover:bg-gray-50 hover:text-brand-primary transition-colors duration-200"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleMenuClick(item.page, e)}
                    className="text-brand-text hover:text-brand-primary font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <div className="block py-2 text-brand-text font-medium">
                      {item.name}
                    </div>
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.page}
                        href="#"
                        className="block py-2 pl-4 text-brand-text hover:text-brand-primary transition-colors duration-200 cursor-pointer"
                        onClick={(e) => {
                          handleMenuClick(dropdownItem.page, e)
                          setIsMenuOpen(false)
                        }}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 text-brand-text hover:text-brand-primary font-medium transition-colors duration-200 cursor-pointer"
                    onClick={(e) => {
                      handleMenuClick(item.page, e)
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 