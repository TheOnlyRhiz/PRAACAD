# Practicode Academy Website

## Overview

This is a full-stack web application for Practicode Academy, a tech training institute based in Ibadan, Nigeria. The application serves as the academy's primary web presence, providing information about courses, enrollment capabilities, and contact functionality. Built with a modern React frontend and Express backend, it offers a seamless experience for prospective students to learn about and enroll in the academy's programs.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for enrollment and contact submissions
- **Development Server**: Custom Vite integration for seamless full-stack development

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Enrollments Table**: Student enrollment data (name, email, phone, course, experience level)
- **Contacts Table**: Contact form submissions (name, email, subject, message)
- **Validation**: Zod schemas for runtime validation of all data inputs

### API Endpoints
- `POST /api/enrollments` - Create new enrollment
- `GET /api/enrollments` - Retrieve all enrollments
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve all contact submissions

### Frontend Pages & Components
- **Home Page**: Single-page application with multiple sections
- **IT Page**: Dedicated page at `/IT` route with embedded Google Form for IT program applications
- **Header**: Navigation with smooth scrolling to sections
- **Hero**: Main banner with call-to-action buttons
- **About**: Academy information and values
- **Courses**: Program offerings (Web Development, Data Analytics, UI/UX, Virtual Assistant)
- **Team**: Staff information and credentials
- **Projects**: Showcase of student/academy projects
- **Enrollment**: Course enrollment form with validation
- **Contact**: Contact form and academy details
- **Footer**: Links, courses summary, and social media

## Data Flow

1. **User Interaction**: Users navigate the single-page application and interact with forms
2. **Form Submission**: Enrollment and contact forms are validated client-side using Zod schemas
3. **API Communication**: TanStack Query manages HTTP requests to Express API endpoints
4. **Server Processing**: Express routes validate data and interact with storage layer
5. **Data Persistence**: Drizzle ORM handles database operations (currently using in-memory storage for development)
6. **Response Handling**: Success/error feedback provided through toast notifications

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI & Styling
- **@radix-ui/***: Accessible UI primitives (40+ component packages)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development
- Vite development server with HMR (Hot Module Replacement)
- Express server with automatic TypeScript compilation via tsx
- Replit-specific plugins for enhanced development experience

### Production Build
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Single-server deployment serving both static files and API

### Database
- Configured for PostgreSQL via environment variable `DATABASE_URL`
- Drizzle migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for type safety across frontend/backend

## Changelog

- June 27, 2025: Initial setup with comprehensive academy website
- June 27, 2025: Complete modern redesign with new visual identity, updated logo implementation, gradient color scheme, rounded design elements, improved typography, and enhanced user experience

## Recent Changes

### IT Program Page Addition (June 27, 2025)
- Created new `/IT` page route with dedicated IT program application form
- Embedded Google Form (https://forms.gle/cpEn6JiWHTNP67RHA) for IT program applications
- Added complete page layout with header, form section, enrollment section, and footer
- Updated routing in App.tsx to handle `/IT` path with proper navigation
- Maintained consistent design system with modern gradients and responsive layout

### Email Integration and Mobile Enhancements (June 27, 2025)
- Implemented backend email service using Node.js nodemailer for form submissions
- Added automatic email notifications to practicodeacademy@gmail.com for both enrollment and contact forms
- Enhanced hero section with responsive background: image background for mobile, clean design for desktop
- Updated mobile text colors for optimal readability against background image
- Created comprehensive email templates with HTML formatting for professional communication
- Customized email messages: enrollment emails emphasize "user interested in enrolling", contact emails highlight "enquiry/message"
- Successfully tested Gmail SMTP integration with real email delivery to practicodeacademy@gmail.com

### Comprehensive Modern Color Scheme Review (June 27, 2025)
- Implemented cohesive modern color palette using only white, black, yellow, and clean neutral tones
- Updated all CSS variables to use pure HSL colors without mixed color schemes
- Standardized text colors across all components: black for headings, black/70 for body text, primary yellow for accents
- Removed all colorful mixed elements (blue, green, purple, orange) and replaced with clean black/yellow alternatives
- Enhanced glass effects and shadows using consistent primary yellow glow effects
- Updated all section backgrounds to use clean white or gradient dark backgrounds
- Applied modern rounded corners (rounded-2xl/3xl) and sophisticated shadow systems throughout

### Color Scheme and Team Updates (June 27, 2025)
- Updated entire website to use consistent dark gray color scheme, removing all pink, purple, and orange colors
- Footer now uses dark gray background (bg-gray-800) with professional appearance
- Team section updated: Idris Akande Rasaq now uses avatar icon instead of photo
- Removed all animations from team cards for cleaner, professional look
- About section now displays Past.jpg image showing actual graduation ceremony
- Updated CSS color variables to use gray tones for secondary and accent colors

### Logo and UI Updates (June 27, 2025)
- Replaced SVG logo with actual logo image (logo1_1751047489939.jpg) from assets
- Removed Program Details section from enrollment form for cleaner UI
- Enhanced mobile responsiveness across all sections with improved grid layouts
- Updated image quality throughout site with professional 1200x800 photos

### Design System Update (June 27, 2025)
- Updated logo component to match new hexagonal P design with yellow circular background
- Enhanced all components with rounded corners, shadows, and modern layouts
- Added sophisticated hero section background with gradient patterns and geometric shapes
- Improved typography with bold headings and better spacing
- Enhanced mobile responsiveness and navigation

### Component Redesigns
- Header: Glass effect with backdrop blur and refined navigation
- Hero: Bold typography with gradient text effects and floating cards
- About: Mission/vision cards with modern layout
- Courses: 2x2 grid with enhanced course cards and pricing
- Team: Professional instructor profiles with badges
- Projects: Student showcase with call-to-action
- Enrollment: Split-panel design with gradient background
- Contact: Modern form layout with improved styling
- Footer: Dark gradient background with organized sections

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Modern, clean, professional with yellow branding.