# Rich Habits - Pro Wrestling Gear

## Overview
A premium pro wrestling apparel and custom gear e-commerce website featuring an AI-powered coach chatbot. Built with React, TypeScript, and Vite, this application showcases wrestling gear products, team stores, custom gear services, and event calendars with an AI coach powered by Google's Gemini API.

## Project Type
Frontend-only React application with Gemini AI integration

## Tech Stack
- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 6.2
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS (via CDN)
- **AI Integration**: Google Gemini API (@google/genai)
- **Icons**: Lucide React
- **Utilities**: JSZip for Shopify export functionality

## Project Structure
- `App.tsx` - Main application component with page routing
- `index.tsx` - Application entry point
- `components/` - React components organized by feature:
  - `Layout/` - Header, Footer
  - `Pages/` - Full page components (Shop, About, Contact, etc.)
  - `Hero/` - Hero section
  - `Products/` - Product showcase
  - `Teams/` - Team portal
  - `Services/` - Custom gear services
  - `Events/` - Event calendar
  - `Admin/` - Shopify exporter
  - `Coach/` - AI Coach modal
- `services/` - API services:
  - `geminiService.ts` - Gemini AI integration for coach feature
  - `shopifyExportService.ts` - Shopify export functionality

## Configuration
- **Development Server**: Port 5000, host 0.0.0.0
- **Environment Variables Required**:
  - `GEMINI_API_KEY` - Required for AI Coach feature

## Features
1. **Product Showcase** - Display wrestling gear and apparel
2. **Team Stores** - Team-specific gear portals
3. **Custom Gear Services** - Custom design offerings
4. **Event Calendar** - Wrestling events and highlights
5. **AI Coach** - AI-powered wrestling coach chatbot using Gemini
6. **Shopify Export** - Export functionality for Shopify integration

## Development Setup
The project is configured to run in Replit's environment:
- Vite dev server on port 5000
- HMR (Hot Module Reload) configured for Replit's proxy environment
- WebSocket protocol set to WSS for secure connections

## Workflow
- **Start application**: Runs `npm run dev` on port 5000 with webview output

## Recent Changes
- 2025-11-20: Initial Replit setup completed
  - Updated vite.config.ts to use port 5000
  - Configured HMR for Replit's proxy environment
  - Added missing script tag to index.html for entry point
  - Installed dependencies
  - Set up workflow configuration

## Notes
- Uses CDN-based Tailwind CSS (production should use PostCSS plugin)
- Import maps in index.html point to external CDNs for some dependencies
- AI Coach feature requires GEMINI_API_KEY environment variable
