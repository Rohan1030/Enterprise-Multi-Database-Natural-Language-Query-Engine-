# Overview

This is an Enterprise Natural Language Query (NLQ) application that enables users to interact with databases using natural language instead of SQL. The application is built as a modern full-stack web application with a React frontend and Express.js backend, featuring a landing page that showcases the NLQ engine's capabilities for enterprise use. The system is designed to transform natural language queries into optimized SQL and MongoDB queries across multiple database types including PostgreSQL, MySQL, SQLite, and MongoDB.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type safety and modern development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing
- **Tailwind CSS** with custom CSS variables for consistent theming and responsive design
- **shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- **TanStack React Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling

## Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Modular storage interface** with both in-memory and database implementations
- **Drizzle ORM** for type-safe database operations and schema management
- **PostgreSQL** as the primary database with Neon serverless hosting
- **Session-based architecture** prepared for user authentication
- **Centralized error handling** middleware for consistent API responses

## Data Storage Solutions
- **PostgreSQL** with Drizzle ORM for relational data persistence
- **Schema-first approach** with shared TypeScript types between frontend and backend
- **Database migrations** managed through Drizzle Kit
- **In-memory storage fallback** for development and testing scenarios

## Authentication and Authorization
- **User schema** defined with username/password authentication ready
- **Session storage** configured with connect-pg-simple for PostgreSQL session store
- **Extensible storage interface** allows for easy integration of different auth strategies

## External Dependencies
- **Neon Database** - Serverless PostgreSQL hosting for production data storage
- **Vercel/Replit** deployment infrastructure with environment-specific configurations
- **Google Fonts** integration for Inter, Fira Code, and other custom typography
- **Unsplash** for high-quality stock imagery in the landing page
- **Radix UI** ecosystem for accessible component primitives
- **Lucide React** for consistent iconography throughout the application

The application follows a monorepo structure with shared schemas and utilities, enabling type safety across the full stack while maintaining clear separation between client and server concerns.