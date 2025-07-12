

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-text text-white">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Support Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Support the work of EMF Institute</h3>
              <p className="text-gray-300 mb-4">
                EMF Institute is registered as a 501(c)(3) non-profit organization. Contributions to EMF Institute are tax-deductible to the extent permitted by law.
              </p>
              <button className="btn-secondary text-white border-white hover:bg-white hover:text-brand-text">
                Contribute
              </button>
            </div>
            
            {/* Connect Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Also, check out Intelligent Arts.</h3>
              <p className="text-gray-300 mb-4">
                If you are interested in writing or publishing an e-book, contact us.
              </p>
              <a href="mailto:editor@intelligentarts.net" className="text-white hover:text-gray-300 transition-colors">
                editor@intelligentarts.net
              </a>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <h4 className="text-lg font-bold">
                  <span className="text-gray-300">EMF</span>
                  <span className="text-brand-primary">Institute</span>
                </h4>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.23 20.1c-2.13 0-3.87-1.74-3.87-3.87s1.74-3.87 3.87-3.87 3.87 1.74 3.87 3.87-1.74 3.87-3.87 3.87zm7.79 0c-2.13 0-3.87-1.74-3.87-3.87s1.74-3.87 3.87-3.87 3.87 1.74 3.87 3.87-1.74 3.87-3.87 3.87z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-gray-400 text-sm">
              © 2024 EMF Institute. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 