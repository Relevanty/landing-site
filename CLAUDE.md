# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Type check with TypeScript then build for production
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint with configured rules (includes Prettier formatting checks)

## Architecture

### Technology Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: TanStack Router with file-based routing and code splitting
- **Styling**: Tailwind CSS v4 with CSS modules for component styles
- **State Management**: React hooks and context
- **UI Libraries**: ReactFlow for diagrams, Swiper for carousels

### Project Structure
- **`/src/routes/`**: TanStack Router file-based routes
  - `__root.tsx`: Root layout with Header and PageTransition
  - Route files create pages (index, community, question, strategy)
  
- **`/src/sections/`**: Page sections as self-contained components
  - Each section has its own CSS module
  - Sections are composed in route components
  
- **`/src/components/`**: Reusable UI components
  - `menu_header/`: Navigation header with mobile/desktop variants
  - `PageTransition.tsx`: Route transition animations
  
- **Path Aliases**: `@/` maps to `src/` directory

### Key Patterns
- **Mobile Responsiveness**: Uses `useIsMobile` hook for adaptive rendering
- **Component Structure**: Components use CSS modules with matching `.css` files
- **Route Transitions**: Enabled via `defaultViewTransition: true` in router config
- **Font Loading**: Custom fonts loaded from `/public/fonts/`

### Deployment
- Configured for Netlify deployment with redirect rules in `netlify.toml`
- Application form redirects to Google Forms

### Design Reference
Figma design: https://www.figma.com/design/1vovegLLprcOYLoxBxBLOY/%D0%A0%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%D0%BD%D1%82%D1%8B?node-id=142-3445&p=f&t=W53z2wSGHJY8Znlg-0