---
title: "about this site"
date: 2025-01-15
excerpt: "why I built this minimal blog and what you'll find here. a quick look under the hood of a simple, fast website."
tags: ["astro"]
---

I write about software, share what I'm learning, and document my journey. This site is my public notebook—personal but written with others in mind. I try to be clear and objective, even when reflecting on my own experiences.

## Why This Exists

Most blogs are overengineered. I wanted something fast, clean, and focused on content. No tracking, no ads, no distractions—just words and code.

## The Stack

Built with **Astro** for static generation, **TypeScript** for safety, and **Tailwind** for styling

Key features:

- **Sub-1s load times** - Static generation means instant page loads
- **Type-safe content** - Markdown with TypeScript validation
- **RSS & sitemap** - For readers who prefer feeds
- **Open source** - Fork it, customize it, make it yours

## What You'll Find

Mostly technical posts about:

- Software development and architecture
- Learning new technologies
- Project breakdowns and lessons learned
- Occasional thoughts

Everything's written to be useful to others, even when it's documenting my own mistakes.

## Under the Hood

The site lives on **Cloudflare Pages** and builds from a simple repository structure:

```
src/
├── content/articles/    # Markdown posts
├── layouts/            # Page templates
├── pages/              # Routes
└── styles/             # Global CSS
```

Each article is just a markdown file with frontmatter. Simple, portable, and future-proof.

Want to build something similar? The code is [open source](https://github.com/alwalxed/awa) and documented for easy customization.
