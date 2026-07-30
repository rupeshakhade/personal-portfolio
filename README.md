# Rupesh Akhade Portfolio

Enterprise-grade portfolio website for Rupesh Akhade built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and EmailJS.

## Features

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion animations
- GitHub API integration
- Email contact form via EmailJS
- Dark theme with glassmorphism and gradient visuals
- Fully responsive and SEO optimized

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Create a `.env.local` with:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Deploy to Cloudflare Pages or any Next.js hosting provider.

## Notes

- The GitHub section fetches live repository data from the GitHub API.
- The contact form sends email via EmailJS.
