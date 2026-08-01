# DYNATECH Corporate Website

The bilingual DYNATECH corporate website, built with Next.js, React, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en). Arabic pages are available under `/ar`.

## Commands

```bash
npm run lint
npm run build
npm run start
```

## Main Routes

- `/:locale` - Home
- `/:locale/about-us` - About Us
- `/:locale/technology-partners` - Technology Partners
- `/:locale/the-auto-hub` - Auto Hub
- `/:locale/tech-info` - Tech Info
- `/:locale/careers` - Careers
- `/:locale/contact` - Contact
- `/:locale/legal-disclaimer` - Legal Disclaimer

Supported locales are `en` and `ar`. Legacy route names are redirected centrally in `next.config.ts`.
