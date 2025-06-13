/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}' ],
  theme: {
    extend: {
      fontFamily: {
        mono: [ 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace' ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#f1f5f9',
            '[class~="lead"]': {
              color: '#94a3b8',
            },
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#2563eb',
              },
            },
            strong: {
              color: '#f1f5f9',
            },
            'ul > li::before': {
              backgroundColor: '#94a3b8',
            },
            'ol > li::before': {
              color: '#94a3b8',
            },
            hr: {
              borderColor: '#334155',
            },
            blockquote: {
              color: '#f1f5f9',
              borderLeftColor: '#334155',
            },
            h1: {
              color: '#f1f5f9',
            },
            h2: {
              color: '#f1f5f9',
            },
            h3: {
              color: '#f1f5f9',
            },
            h4: {
              color: '#f1f5f9',
            },
            'figure figcaption': {
              color: '#94a3b8',
            },
            code: {
              color: '#f1f5f9',
            },
            'a code': {
              color: '#f1f5f9',
            },
            pre: {
              color: '#f1f5f9',
              backgroundColor: '#1e293b',
            },
            thead: {
              color: '#f1f5f9',
              borderBottomColor: '#334155',
            },
            'tbody tr': {
              borderBottomColor: '#334155',
            },
          },
        },
      },
    },
  },
  plugins: [],
};