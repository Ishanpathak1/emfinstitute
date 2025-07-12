# EMF Institute Homepage

A professional homepage for EMF Institute built with React and TypeScript, following modern web development practices and institutional design standards.

## 🎵 About

EMF Institute is dedicated to documenting and preserving the history and future of electronic music. Our mission is to provide comprehensive resources for students, artists, and researchers exploring the intersection of technology and musical creativity.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern UI**: Clean, professional design with custom brand colors
- **Interactive Components**: Smooth animations and hover effects
- **Newsletter Signup**: Functional form with validation and success/error states
- **Accessibility**: ARIA labels and semantic HTML structure
- **Performance**: Optimized with lazy loading and smooth scrolling

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and formatting

## 📁 Project Structure

```
src/
├── components/
│   ├── Homepage/           # Homepage-specific components
│   │   ├── TopBar.tsx          # Dark red top navigation bar
│   │   ├── Navigation.tsx      # Main navigation with mobile menu
│   │   ├── Hero.tsx            # Large logo and subtitle section
│   │   ├── NewWorldSection.tsx # Mission statement content
│   │   ├── AboutSection.tsx    # About platform with image
│   │   ├── FeaturesSection.tsx # Platform features grid
│   │   ├── NewsletterSection.tsx # Newsletter signup form
│   │   ├── Footer.tsx          # Footer with links and info
│   │   └── index.tsx           # Exports all homepage components
│   └── README.md           # Component structure documentation
├── App.tsx                 # Main app component
├── main.tsx               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
- **Primary**: #A0403A (Dark red/maroon)
- **Secondary**: #6B7280 (Medium gray)
- **Background**: #F8F9FA (Light gray)
- **Text**: #1F2937 (Dark gray)
- **Accent**: #FFFFFF (White)

### Typography
- **Font Family**: Inter (Professional sans-serif)
- **Hero Text**: 48px-96px
- **Section Headers**: 36px
- **Subsection Headers**: 24px
- **Body Text**: 16px

### Components
- **Buttons**: Primary (red) and Secondary (outlined)
- **Forms**: Clean inputs with focus states
- **Cards**: Subtle shadows and rounded corners
- **Navigation**: Sticky header with smooth scrolling

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emf-institute-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🏗️ Component Architecture

The project uses a **page-based component organization** structure for better scalability and maintainability:

- **Homepage/**: Contains all homepage-specific components
- **Events/**: Contains all events page components with filtering and clean design
- **index.tsx files**: Provide clean imports for each page's components
- **Shared components**: Can be added to a `Shared/` folder when needed
- **Future pages**: Follow the same pattern (e.g., `About/`, `Programs/`, `Contact/`)

### Current Pages

- **Homepage**: Main landing page with hero, about, features, and newsletter
- **Events**: Clean, institutional events listing with filtering by month/location
- **About**: Individual pages for About EMF Institute, Our Mission, The First Years, and Who We Are (accessible via dropdown menu)

### Adding New Pages

1. Create a new folder in `src/components/` with your page name
2. Add your page-specific components inside that folder
3. Create an `index.tsx` file to export all components
4. Import components using the clean syntax: `import { Component1, Component2 } from './components/PageName'`

This structure makes it easy for multiple developers to work on different pages without conflicts.

## 🔧 Customization

### Brand Colors
Update the brand colors in `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#A0403A',
    secondary: '#6B7280',
    background: '#F8F9FA',
    text: '#1F2937',
    accent: '#FFFFFF'
  }
}
```

### Content
All content can be easily modified in the respective component files:
- Hero section: `src/components/Hero.tsx`
- Mission statement: `src/components/NewWorldSection.tsx`
- About content: `src/components/AboutSection.tsx`
- Features: `src/components/FeaturesSection.tsx`

### Newsletter Form
The newsletter form in `NewsletterSection.tsx` currently simulates form submission. To integrate with a real email service:

1. Replace the `handleSubmit` function with your email service API call
2. Add environment variables for API keys
3. Update form validation as needed

## 🎯 Performance

- Lazy loading for images
- Optimized font loading with Google Fonts
- Smooth scroll behavior
- Efficient CSS with Tailwind utilities
- Fast builds with Vite

## 📧 Contact

For questions or support:
- Email: hello@emfinstitute.org
- Support: support@emfinstitute.org

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for electronic music research and education 