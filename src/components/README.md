# Components Structure

This directory contains all the React components organized by pages/features for better maintainability and scalability.

## 📁 Directory Structure

```
src/components/
├── Homepage/           # Homepage-specific components
│   ├── TopBar.tsx
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── NewWorldSection.tsx
│   ├── AboutSection.tsx
│   ├── FeaturesSection.tsx
│   ├── NewsletterSection.tsx
│   ├── Footer.tsx
│   └── index.tsx       # Exports all homepage components
├── Events/             # Events page components
│   ├── EventsHero.tsx      # Events page title section
│   ├── EventsFilter.tsx    # Month and location filters
│   ├── EventsList.tsx      # Clean list of events
│   ├── EventsCategories.tsx # Event categories listing
│   ├── EventsNewsletter.tsx # Event newsletter signup
│   ├── EventsPage.tsx      # Main events page layout
│   └── index.tsx           # Exports all events components
├── About/              # About page components (individual pages)
│   ├── AboutEMFInstitutePage.tsx # Individual About EMF page
│   ├── OurMissionPage.tsx  # Individual Mission page
│   ├── TheFirstYearsPage.tsx # Individual First Years page
│   ├── WhoWeArePage.tsx    # Individual Who We Are page
│   ├── AboutHero.tsx       # Shared hero component
│   ├── AboutEMFInstitute.tsx # Legacy component sections
│   ├── OurMission.tsx      # Legacy component sections
│   ├── TheFirstYears.tsx   # Legacy component sections
│   ├── WhoWeAre.tsx        # Legacy component sections
│   ├── AboutPage.tsx       # Legacy combined page
│   └── index.tsx           # Exports all about components
├── [PageName]/         # Future page components (e.g., About, Programs, etc.)
│   ├── ComponentA.tsx
│   ├── ComponentB.tsx
│   └── index.tsx       # Exports all page components
├── ExamplePage/        # Template showing the pattern (can be deleted)
│   └── index.tsx       # Example of how to structure exports
└── Shared/             # Shared components across pages
    ├── Button.tsx
    ├── Modal.tsx
    └── index.tsx       # Exports all shared components
```

## 🔧 Usage

### Importing Homepage Components
```typescript
// Clean import from index file
import { TopBar, Navigation, Hero } from './components/Homepage'

// Or individual imports
import TopBar from './components/Homepage/TopBar'
```

### Importing Events Page Components
```typescript
// Import the complete Events page
import { EventsPage } from './components/Events'

// Or import individual components
import { EventsHero, EventsList, EventsFilter } from './components/Events'
```

### Importing About Page Components
```typescript
// Import individual About pages
import { AboutEMFInstitutePage, OurMissionPage, TheFirstYearsPage, WhoWeArePage } from './components/About'

// Or import the legacy combined page
import { AboutPage } from './components/About'

// Or import individual section components
import { AboutHero, OurMission, WhoWeAre } from './components/About'
```

### Adding New Pages

1. Create a new folder with the page name (e.g., `About`, `Programs`, `Contact`)
2. Add your page-specific components inside that folder
3. Create an `index.tsx` file to export all components from that page
4. Follow the same pattern for clean imports

### Example: Adding an About Page

```typescript
// src/components/About/index.tsx
export { default as AboutHero } from './AboutHero'
export { default as TeamSection } from './TeamSection'
export { default as HistorySection } from './HistorySection'

// Usage in App.tsx or page component
import { AboutHero, TeamSection, HistorySection } from './components/About'
```

## 🎯 Benefits

- **Scalability**: Easy to add new pages without cluttering the main components folder
- **Maintainability**: Related components are grouped together
- **Clean Imports**: Use index files for cleaner import statements
- **Team Collaboration**: Clear structure makes it easy for multiple developers to work on different pages
- **Code Organization**: Logical separation of concerns

## 📝 Guidelines

1. **Page-specific components** should go in their respective page folders
2. **Shared components** (used across multiple pages) should go in a `Shared` folder
3. **Always create index.tsx** files for cleaner imports
4. **Use descriptive component names** that indicate their purpose
5. **Keep components focused** - each component should have a single responsibility 