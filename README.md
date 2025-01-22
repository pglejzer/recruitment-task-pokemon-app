# Pokemon Explorer App

A modern web application for exploring Pokemon details using the PokeAPI. Built with Next.js 15 and React 19.

## Features

- Search Pokemon by name
- View detailed Pokemon information including:
  - Stats
  - Types
  - Abilities
  - Base attributes
- Responsive design for all devices
- Error handling with custom error pages
- Server-side rendering with 30-minute data revalidation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design system
- **Data Fetching**: Server Components with revalidation
- **API**: PokeAPI
- **Performance Features**:
  - Server-Side Rendering (SSR)
  - Incremental Static Regeneration (30-minute interval)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable UI components
  - `Button` - Custom button component
  - `ErrorPage` - Error handling pages
  - `Layout` - Main application layout
  - `PokemonDetails` - Pokemon information display
  - `PokemonForm` - Search form component

## Available Routes

- `/` - Home page with search functionality
- `/[pokemonName]` - Dynamic route for Pokemon details with 30-minute revalidation
- `/404` - Custom not found page

## License

MIT

