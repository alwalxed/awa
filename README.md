# Awa

A minimal personal blog built with Astro, TypeScript, and Tailwind CSS. Designed for simplicity, performance, and easy customization.

## Features

- 🚀 **Fast & lightweight** - Static site generation with minimal JavaScript
- 📝 **Type-safe content** - Markdown articles with TypeScript validation
- 🎨 **Clean design** - Minimalist dark theme with JetBrains Mono font
- 📱 **Responsive** - Works beautifully on all devices
- 🔍 **SEO optimized** - Automatic sitemap and RSS feed generation
- ☁️ **Deploy ready** - Configured for Cloudflare Pages

## Quick Start

1. **Clone and install**

   ```bash
   git clone https://github.com/alwalxed/awa
   cd awa
   pnpm i
   ```

2. **Start developing**

   ```bash
   pnpm run dev
   ```

3. **Write your first article**

   Create a new `.md` file in `src/content/articles/`:

   ```markdown
   ---
   title: "Your Article Title"
   date: 2025-01-15
   excerpt: "A brief description of your article"
   tags: ["tag1", "tag2"]
   ---

   Your article content here...
   ```

## Customization

### Personal Info

- Update site metadata in `src/layouts/Layout.astro`
- Change social links in the navigation
- Modify the footer text

### Styling

- Color scheme: Edit CSS custom properties in `src/styles/global.css`
- Typography: Replace font imports or update the font stack
- Layout: Adjust spacing and sizing in Tailwind classes

### Content

- Articles go in `src/content/articles/`
- Each article needs frontmatter with title, date, excerpt, and optional tags
- Supports full Markdown with syntax highlighting

## Deployment

### Cloudflare Pages (recommended)

```bash
pnpm run deploy
```

### Other platforms

```bash
pnpm run build
# Upload the 'dist' folder to your hosting provider
```

## Project Structure

```
src/
├── content/
│   └── articles/          # Your blog posts
├── layouts/               # Page templates
├── pages/                 # Routes and API endpoints
└── styles/               # Global styles

```
