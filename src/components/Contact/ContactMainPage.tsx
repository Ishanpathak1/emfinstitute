import HeroSection from './HeroSection'
import ContactForm from './ContactForm'

const ContactMainPage = () => {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-gray-100 rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#a0403a] mb-6">
            We’d Love to Include You
          </h2>
          <p className="text-center text-gray-700 mb-10">
            Please join our email list to receive news from EMF Institute.
          </p>
          <ContactForm />
        </div>
      </main>
    </div>
  )
}

export default ContactMainPage
