# Lymph Node Master

**Architecture → Pattern → Immunophenotype → Diagnosis**

A comprehensive, mobile-first educational platform focused on lymph node pathology for pathology residents and fellows.

## Overview

Lymph Node Master is a pattern-based learning app that teaches systematic reasoning from architecture to diagnosis. The app covers all aspects of lymph node pathology including normal anatomy, reactive patterns, Hodgkin and Non-Hodgkin lymphomas, flow cytometry, immunohistochemistry, and molecular diagnostics.

## Features

- **11 Comprehensive Modules**
  - Normal Lymph Node Anatomy
  - Reactive Patterns
  - Hodgkin Lymphomas
  - B-Cell Lymphomas
  - T-Cell & NK-Cell Lymphomas
  - Flow Cytometry
  - Immunohistochemistry
  - Molecular Tools
  - Diagnostic Pitfalls
  - Integrated LN Reporting
  - Synthetic Cases

- **Interactive Learning**
  - Session-based assessments
  - Synthetic case studies with integrated data
  - No data tracking or storage

- **User Experience**
  - Mobile-first, responsive design
  - Dark/light mode toggle
  - Offline-capable PWA
  - Clean, accessible interface

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Build Tool**: Vite
- **PWA**: Vite PWA Plugin

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Navigation, Layout)
│   └── ui/              # Reusable UI components (Button, Card)
├── pages/
│   ├── modules/         # Educational module pages
│   ├── Assessment.tsx   # Session-only assessment
│   ├── Home.tsx         # Home page with module navigation
│   └── Settings.tsx     # Settings and about page
├── store/               # Zustand stores (theme)
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
├── App.tsx              # Main app component with routing
├── main.tsx             # Entry point
└── index.css            # Global styles and Tailwind
```

## Learning Philosophy

The app follows a structured diagnostic approach:

1. **Architecture first** - Assess overall architecture before cytologic detail
2. **Pattern recognition** - Identify follicular, diffuse, paracortical, or sinus patterns
3. **Immunophenotyping** - Apply IHC panel knowledge conceptually
4. **Integration** - Synthesize morphology, IHC, flow, and molecular findings
5. **Differential diagnosis** - Address pitfalls and alternative diagnoses

## Important Disclaimers

- **Educational use only** - Not for clinical use or patient care
- **Synthetic data only** - All cases are entirely synthetic
- **No data tracking** - Session-only, no user data collected
- **Conceptual framework** - IHC/flow/molecular content is high-level educational material

## License

Educational use only. See plan.md for full specifications.

## Contributing

This is an educational project. For questions or suggestions, please refer to the project documentation.
