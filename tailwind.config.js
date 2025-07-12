/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A0403A',
          secondary: '#6B7280',
          background: '#F8F9FA',
          text: '#1F2937',
          accent: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', '1.2'],
        'section': ['36px', '1.3'],
        'subsection': ['24px', '1.4'],
      }
    },
  },
  plugins: [],
} 