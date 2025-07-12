

const TopBar: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white py-2">
      <div className="container-max flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm hover:text-gray-200 transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="text-sm hover:text-gray-200 transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.23 20.1c-2.13 0-3.87-1.74-3.87-3.87s1.74-3.87 3.87-3.87 3.87 1.74 3.87 3.87-1.74 3.87-3.87 3.87zm7.79 0c-2.13 0-3.87-1.74-3.87-3.87s1.74-3.87 3.87-3.87 3.87 1.74 3.87 3.87-1.74 3.87-3.87 3.87z"/>
            </svg>
          </a>
        </div>
        <div>
          <a href="#support" className="text-sm font-medium hover:text-gray-200 transition-colors">
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar 