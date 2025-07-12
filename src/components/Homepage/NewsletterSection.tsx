import React, { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
  consent: boolean
}

const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    consent: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitMessage('Thank you for joining our community! We\'ll be in touch soon.')
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      consent: false
    })
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  return (
    <section id="join" className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              We'd Love to Include You
            </h2>
            <p className="text-body text-lg">
              Join our community of researchers, artists, and electronic music enthusiasts. Stay updated on research publications, educational programs, and archival discoveries.
            </p>
          </div>
          
          {submitMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {submitMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-brand-text mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-brand-text mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Tell us about your interest in electronic music research or if you're an artist or researcher looking to connect..."
              />
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300 rounded"
              />
              <label htmlFor="consent" className="text-sm text-brand-secondary">
                I agree to receive email communications from EMF Institute about research publications, educational programs, and archival updates. You can unsubscribe at any time.
              </label>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Join Our Community'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection 