# Awa's Personal Blog

Minimal personal blog built with Astro, TypeScript, and Tailwind CSS.

## Features

- Fast static site generation
- Type-safe Markdown content
- Clean dark theme with JetBrains Mono
- Responsive design
- SEO optimized (sitemap, RSS)
- Cloudflare Pages ready

## Quick Start

```bash
git clone https://github.com/alwalxed/awa
cd awa && pnpm i
pnpm run dev
```

Create articles in `src/content/articles/`:

```markdown
---
title: "Your Title"
date: 2025-01-15
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

Content here...
```

## Customization

- **Site info**: `src/layouts/Layout.astro`
- **Colors**: `src/styles/global.css`
- **Content**: `src/content/articles/`

## Deploy

```bash
pnpm run build    # Build for any host
pnpm run deploy   # Deploy to Cloudflare Pages
```
