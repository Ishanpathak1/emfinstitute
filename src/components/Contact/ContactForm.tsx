const ContactForm = () => {
  return (
    <form className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name *</label>
          <input
            type="text"
            required
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0403a]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0403a]"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email *</label>
        <input
          type="email"
          required
          className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0403a]"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-3">
        <input type="checkbox" id="subscribe" className="h-4 w-4" />
        <label htmlFor="subscribe" className="text-sm">Yes, sign me up for the email list!</label>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Comment or Message</label>
        <textarea
          rows={4}
          className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0403a]"
        />
      </div>

      {/* Recaptcha (placeholder only) */}
      <div className="bg-white p-4 border rounded-md text-center shadow-sm">
        <p className="text-sm text-gray-600">[Google reCAPTCHA placeholder]</p>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-[#a0403a] text-white font-semibold rounded hover:bg-[#832e2a] transition"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
