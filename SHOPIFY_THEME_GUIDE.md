# Rich Habits Pro - Shopify Theme

## Overview
A premium Shopify theme designed for wrestling gear and athletic apparel e-commerce. Built with modern design patterns, full theme editor support, and advanced features including AI Coach integration.

## Theme Structure

```
├── assets/
│   ├── theme.css          # Global styles and custom CSS
│   └── theme.js           # Tailwind config and interactive features
│
├── config/
│   └── settings_schema.json   # Global theme settings
│
├── layout/
│   └── theme.liquid          # Main HTML wrapper
│
├── locales/
│   └── en.default.json       # English translations
│
├── sections/
│   ├── header.liquid              # Customizable header with mega menu
│   ├── footer.liquid              # Footer with blocks
│   ├── hero-video.liquid          # Full-screen hero with video/image
│   ├── product-carousel.liquid    # Horizontal product slider
│   ├── team-grid.liquid           # Team portals grid
│   ├── event-list.liquid          # Event calendar/list
│   ├── custom-gear.liquid         # Split-screen custom services
│   ├── about-mission.liquid       # Two-column about section
│   ├── contact-form.liquid        # Contact form with blocks
│   ├── main-collection-product-grid.liquid  # Collection page
│   ├── main-product.liquid        # Product detail page
│   ├── main-cart.liquid           # Shopping cart
│   ├── main-page.liquid           # Generic page template
│   └── main-404.liquid            # 404 error page
│
├── snippets/
│   ├── product-card.liquid        # Reusable product card
│   ├── ai-coach-widget.liquid     # AI Coach popup widget
│   └── icon-*.liquid              # SVG icon components
│
└── templates/
    ├── index.json              # Homepage
    ├── collection.json         # Collection/shop page
    ├── product.json            # Product page
    ├── cart.json               # Cart page
    ├── page.json               # Default page
    ├── page.contact.json       # Contact page
    └── 404.json                # 404 page
```

## Installation

### Option 1: Upload to Shopify (Recommended)

1. **Package the theme:**
   ```bash
   zip -r rich-habits-theme.zip assets config layout locales sections snippets templates -x "*.DS_Store"
   ```

2. **Upload to Shopify:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload ZIP file"
   - Select `rich-habits-theme.zip`
   - Click "Publish" once installed

### Option 2: Shopify CLI (For Development)

1. **Install Shopify CLI:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Connect to your store:**
   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

3. **Push to live:**
   ```bash
   shopify theme push
   ```

## Theme Setup

### 1. Required Settings

Navigate to **Theme Settings** in the Shopify theme editor:

#### Colors
- Background Base: `#050505`
- Card Background: `#121212`
- Accent Color (Brand Red): `#D00000`
- Text Color: `#FFFFFF`

#### Branding
- Upload your logo (Header & Footer)
- Upload favicon (32x32px)

#### Navigation
- Set up main menu (recommended: Shop, About, Events, Team Stores, Custom, Contact)
- Configure footer menus

#### Social Media
- Add Instagram, Facebook, Twitter/X, YouTube, TikTok URLs

### 2. AI Coach Setup (Optional)

1. Get a Gemini API key from [Google AI Studio](https://ai.google.dev)
2. Go to **Theme Settings → AI Features**
3. Paste your API key in "Google Gemini API Key"
4. Customize the coach personality in "AI Coach System Prompt"
5. Toggle "Enable AI Coach Widget"

**Note:** Without an API key, the AI Coach widget won't appear.

### 3. Homepage Setup

1. Go to **Online Store → Themes → Customize**
2. Add sections in this order:
   - **Hero Video** - Main banner with CTA buttons
   - **Product Carousel** - Featured products
   - **Team Grid** - Add team blocks with images and links
   - **Event List** - Add upcoming event blocks
   - **Custom Gear** - Services section
   - **Footer** - Already included

### 4. Navigation Menus

Create these menus in **Navigation**:

**Main Menu** (`main-menu`):
- Shop → `/collections/all`
- About → `/pages/about`
- Events (with submenu):
  - Upcoming → `/pages/events`
  - Past Events → `/pages/past-events`
- Team Stores (with submenu):
  - Ranger 47 → `/collections/ranger-47`
  - Brooks WC → `/collections/brooks-wc`
  - All Teams → `/pages/teams`
- Custom → `/pages/custom-gear`
- Contact → `/pages/contact`

**Footer Menu** (`footer`):
- Privacy Policy → `/pages/privacy-policy`
- Terms of Service → `/pages/terms`
- Shipping Info → `/pages/shipping`
- Returns → `/pages/returns`

### 5. Create Essential Pages

Create these pages in **Pages**:

1. **About** (`/pages/about`)
   - Template: `page`
   - Add "About Mission" section

2. **Contact** (`/pages/contact`)
   - Template: `page.contact`
   - Contact form is built-in

3. **Custom Gear** (`/pages/custom-gear`)
   - Template: `page`
   - Add "Custom Gear" section

4. **Events** (`/pages/events`)
   - Template: `page`
   - Add "Event List" section

## Features

### 🎨 Fully Customizable
- All sections support the theme editor
- Live preview of changes
- No code needed for customization

### 🛍️ E-Commerce Ready
- Product grid with filtering & sorting
- Quick add to cart
- Variant selection
- Cart with quantity updates
- Sale badges and compare prices

### 📱 Mobile Responsive
- Optimized for all screen sizes
- Touch-friendly navigation
- Mobile menu with smooth animations

### 🤖 AI Coach Widget
- Powered by Google Gemini AI
- Customizable personality
- Real-time chat interface
- Automatic API key management

### 🏆 Wrestling-Focused
- Team portal system
- Event calendar
- Custom gear services section
- High-performance aesthetic

### ⚡ Performance
- Lazy loading images
- Optimized assets
- Minimal JavaScript
- Fast page loads

## Customization Guide

### Adding a New Section

1. Create file in `sections/` folder:
```liquid
<section>
  <!-- Your HTML here -->
  {{ section.settings.heading }}
</section>

{% schema %}
{
  "name": "My Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ],
  "presets": [
    {
      "name": "My Section"
    }
  ]
}
{% endschema %}
```

2. Add to a template JSON file or use theme editor

### Changing Colors

**Option 1: Theme Settings** (Recommended)
- Go to Theme Settings → Colors
- Adjust color pickers
- Changes apply site-wide

**Option 2: CSS Variables**
Edit `assets/theme.css`:
```css
:root {
  --brand-black: #YOUR_COLOR;
  --brand-red: #YOUR_COLOR;
}
```

### Adding Team Stores

1. Create a collection for each team (e.g., "Ranger 47")
2. Add products to the collection
3. In Theme Editor → Homepage → Team Grid section
4. Add team blocks with:
   - Team name
   - Location
   - Team image
   - Link to collection

### Customizing Product Cards

Edit `snippets/product-card.liquid` to change:
- Card layout
- Image aspect ratio
- Button styles
- Hover effects

## Technical Details

### Technologies Used
- **Liquid**: Shopify's templating language
- **Tailwind CSS**: Utility-first CSS (via CDN)
- **Alpine.js**: Lightweight JavaScript framework (for AI Coach)
- **Vanilla JavaScript**: Interactive features
- **Google Gemini API**: AI Coach functionality

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Dependencies
- Tailwind CSS 3.x (CDN)
- Alpine.js 3.x (CDN, only for AI Coach)
- Google Fonts (Anton, Inter)

## Troubleshooting

### AI Coach Not Appearing
- Check if Gemini API key is set in Theme Settings
- Ensure "Enable AI Coach Widget" is checked
- Verify API key is valid

### Images Not Loading
- Check image URLs in sections
- Upload images to Shopify Files
- Update image references in theme editor

### Layout Issues
- Clear browser cache
- Check CSS conflicts
- Verify section settings are filled

### Products Not Showing
- Ensure collections have products
- Check collection is selected in section settings
- Verify products are published

## Support & Resources

### Shopify Resources
- [Shopify Theme Documentation](https://shopify.dev/docs/themes)
- [Liquid Reference](https://shopify.dev/docs/api/liquid)
- [Shopify Community](https://community.shopify.com)

### Theme Support
- Documentation: https://rich-habits.com/docs
- Support: https://rich-habits.com/support

## Version History

### v5.0.0 (Current)
- Full Shopify theme conversion
- AI Coach integration
- Complete theme editor support
- All sections fully customizable
- Enhanced mobile experience

## License

Copyright © 2025 Rich Habits. All rights reserved.

---

**Built for champions. Designed for victory.**
