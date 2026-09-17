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

## Project Structure

- `content/locales/en.json` and `content/locales/ar.json` are the only checked-in sources for page content and translations.
- `content/media.ts` contains media-path defaults only; it must not contain page copy.
- `content/schema/` contains TypeScript shapes only; it must not contain page copy.
- `lib/cms/` contains CMS infrastructure only: Supabase clients, authentication helpers, content merging, and page loading.
- `app/` contains thin route files that request content through `getPageDocument()`.
- `components/` contains presentation and interaction code without hardcoded page copy or media paths.
- `supabase/` contains the database schema, RLS policies, and publish function.

To change a local fallback, edit the matching language file in `content/locales/`. Once Supabase is configured, the dashboard overrides those defaults per page and locale without changing the React components.

## Content Dashboard

The bilingual CMS is available at `/en/admin` and `/ar/admin`. Published page content is stored in Supabase, while images and videos are uploaded directly to Cloudinary using a server-generated signature.

1. Create a Supabase project and run `supabase/migrations/20260908000000_create_cms.sql` in the SQL Editor.
2. Create the first dashboard user in Supabase Authentication.
3. Add that user's UUID to `cms_admins` using the final statement documented in the migration.
4. Create a Cloudinary account/product environment.
5. Set these variables in `.env.local`: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
   The Supabase browser key must be a `sb_publishable_` key (or legacy `anon` key), never a secret or service-role key. Rotate any secret previously placed in a `NEXT_PUBLIC_` variable.
6. Restart the development server and open `/en/admin`.

The website keeps its checked-in content and local media as fallbacks until a page and locale are published from the dashboard. Drafts are private; only rows in `cms_pages` are public.
