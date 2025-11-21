# Rich Habits Pro - Shopify Theme

## Overview
A premium Shopify theme for pro wrestling apparel and custom gear e-commerce. Fully converted from React to Shopify Liquid with complete theme editor support, AI Coach integration, and wrestling-focused design.

## Project Type
**Production-ready Shopify Theme** with AI integration

Originally a React application, now fully converted to Shopify Liquid with:
- Complete theme editor support (all content editable)
- Full Shopify integration (products, collections, cart, checkout)
- AI-powered coach chatbot using Google Gemini API
- Mobile-responsive design
- Advanced customization options

## Tech Stack
- **Platform**: Shopify
- **Templating**: Liquid
- **Styling**: Tailwind CSS (via CDN), Custom CSS
- **JavaScript**: Vanilla JS + Alpine.js (for AI Coach widget)
- **AI Integration**: Google Gemini API
- **Fonts**: Google Fonts (Anton, Inter)

## Theme Structure

### Core Files
```
├── layout/
│   └── theme.liquid              # Main HTML wrapper
├── config/
│   └── settings_schema.json      # Global theme settings
├── locales/
│   └── en.default.json           # Translations
├── assets/
│   ├── theme.css                 # Custom styles
│   └── theme.js                  # Interactive features
```

### Sections (Reusable, Editable Content Blocks)
```
├── sections/
│   ├── header.liquid             # Customizable navigation
│   ├── footer.liquid             # Footer with blocks
│   ├── hero-video.liquid         # Full-screen hero banner
│   ├── product-carousel.liquid   # Horizontal product slider
│   ├── team-grid.liquid          # Team portals with blocks
│   ├── event-list.liquid         # Event calendar with blocks
│   ├── custom-gear.liquid        # Services section
│   ├── about-mission.liquid      # About section
│   ├── contact-form.liquid       # Contact form
│   ├── main-collection-product-grid.liquid
│   ├── main-product.liquid       # Product page
│   ├── main-cart.liquid          # Shopping cart
│   ├── main-page.liquid          # Generic pages
│   └── main-404.liquid           # Error page
```

### Templates (Page Layouts)
```
├── templates/
│   ├── index.json               # Homepage
│   ├── collection.json          # Shop/Collection pages
│   ├── product.json             # Product detail
│   ├── cart.json                # Shopping cart
│   ├── page.json                # Default pages
│   ├── page.contact.json        # Contact page
│   └── 404.json                 # 404 page
```

### Snippets (Reusable Components)
```
├── snippets/
│   ├── product-card.liquid      # Product card component
│   ├── ai-coach-widget.liquid   # AI Coach popup
│   └── icon-*.liquid            # SVG icons
```

## Features

### 🛍️ E-Commerce Ready
- Product grid with sorting & filtering
- Product detail pages with variants
- Shopping cart with quantity updates
- Quick add to cart
- Sale badges and pricing
- Collection pages
- Search functionality

### 🎨 Fully Customizable (No Code Required)
- Theme editor support for all sections
- Live preview of changes
- Drag & drop section reordering
- Block-based content management
- Global color & typography settings
- Logo & branding controls

### 🤖 AI Coach Widget
- Powered by Google Gemini API
- Customizable personality and prompts
- Real-time chat interface
- Managed via theme settings
- Automatic API key handling

### 🏆 Wrestling-Focused Features
- **Team Portal System**: Grid of team stores with custom branding
- **Event Calendar**: Upcoming events with registration links
- **Custom Gear Services**: Multi-step process showcase
- **High-Performance Design**: Athletic aesthetic with bold typography

### 📱 Mobile Responsive
- Optimized for all screen sizes
- Touch-friendly navigation
- Mobile menu with animations
- Responsive product grids

### ⚡ Performance Optimized
- Lazy loading images
- Minimal JavaScript
- Optimized assets
- Fast page loads

## Configuration

### Theme Settings (Accessible in Shopify Admin)
1. **Colors** - Background, accent, text, borders
2. **Typography** - Heading and body fonts
3. **Branding** - Logo, favicon
4. **Social Media** - Instagram, Facebook, Twitter, YouTube, TikTok
5. **Cart** - Type (page/drawer), notes
6. **Product Grid** - Products per row, vendor display, quick add
7. **AI Features** - Gemini API key, coach prompt, enable/disable
8. **Newsletter** - Signup settings
9. **Checkout** - Payment icons

### Environment Variables
- **Gemini API Key**: Set in Theme Settings → AI Features (not environment variables)
- All settings managed through Shopify admin interface

## Installation & Deployment

### Quick Start
1. Package theme files into a ZIP:
   ```bash
   zip -r rich-habits-theme.zip assets config layout locales sections snippets templates
   ```

2. Upload to Shopify:
   - Shopify Admin → Online Store → Themes
   - "Add theme" → "Upload ZIP file"
   - Publish when ready

### Development with Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
shopify theme dev --store=your-store.myshopify.com
shopify theme push
```

See `SHOPIFY_THEME_GUIDE.md` for detailed setup instructions.

## Original React Source
The original React components are preserved in the `components/` directory for reference:
- Header, Footer, Hero, Products, Teams, Events, Custom Gear, About, Contact
- All converted to Liquid sections with full theme editor support
- Original functionality maintained and enhanced with Shopify integration

## Recent Changes

### 2025-11-21: Complete Shopify Theme Conversion (v5.0.0)
- ✅ Converted entire React app to Shopify Liquid theme
- ✅ Created 14+ customizable sections with schema support
- ✅ Built all essential templates (home, collection, product, cart, contact, 404)
- ✅ Implemented product grid, cart, and checkout integration
- ✅ Enhanced settings schema with comprehensive global controls
- ✅ Created reusable snippets (product cards, icons, AI widget)
- ✅ Added localization support (English)
- ✅ Optimized assets (CSS, JavaScript)
- ✅ Made all images, text, colors, and layouts editable via theme editor
- ✅ Integrated AI Coach with Alpine.js
- ✅ Added full mobile responsiveness
- ✅ Created comprehensive deployment documentation

### Previous Changes
- 2025-11-20: Initial React application setup
  - Built wrestling gear e-commerce frontend
  - Integrated Gemini AI for coach feature
  - Created Shopify export functionality

## Documentation
- **Setup Guide**: `SHOPIFY_THEME_GUIDE.md` - Complete installation and customization guide
- **Theme Structure**: See "Theme Structure" section above
- **Shopify Docs**: https://shopify.dev/docs/themes

## Notes
- All content is now editable through Shopify's theme editor (no code changes needed)
- AI Coach requires Gemini API key (get from https://ai.google.dev)
- Theme uses Tailwind CSS via CDN (suitable for production)
- Images reference Shopify's built-in image optimization
- Supports Online Store 2.0 architecture
- Compatible with Shopify app blocks for third-party integrations

## Support
- **Documentation**: See SHOPIFY_THEME_GUIDE.md
- **Shopify Resources**: https://shopify.dev/docs/themes
- **Liquid Reference**: https://shopify.dev/docs/api/liquid
