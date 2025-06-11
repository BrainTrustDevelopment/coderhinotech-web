# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 application built as a static export for CodeRhino Tech's marketing website. The architecture follows these patterns:

### Tech Stack
- **Framework**: Next.js 15 with App Router and static export
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Theming**: next-themes (dark mode only)
- **Motion**: Custom motion wrapper (lib/motion-wrapper.tsx) instead of Framer Motion

### Key Architectural Decisions

**Static Export Configuration**: The site uses `output: 'export'` in next.config.js for static hosting, with unoptimized images and ESLint disabled during builds.

**Component Architecture**:
- `components/ui/` - Reusable UI components following shadcn/ui patterns
- `components/sections/` - Page-specific sections (hero, services, testimonials, etc.)
- `components/layout/` - Layout components (header, footer)

**Styling System**:
- Uses CSS custom properties for theming (--primary, --background, etc.)
- Dark-only theme with gradient backgrounds (slate-900 to slate-950)
- Sky/blue accent colors throughout (sky-500, sky-600)
- Extensive use of backdrop blur and glass-morphism effects

**Custom Motion System**: Instead of Framer Motion, uses a custom `motion-wrapper.tsx` that provides basic animation capabilities with client-side hydration handling.

### File Structure Patterns

- All components use TypeScript with explicit typing
- "use client" directive used for client-side functionality
- Path aliases configured (@/components, @/lib, etc.)
- Section components are self-contained with their own styling and state

### Current State
Some sections are commented out in the main page (CaseStudies, Contact) and navigation, indicating the site is in development phase.