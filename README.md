# NovoTHOR Next.js Site

Modern, scalable website built with Next.js 14, Sanity.io CMS, and NetSuite integration.

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **CMS**: Sanity.io
- **Forms**: Next.js API Routes → NetSuite RESTlets
- **Animations**: Framer Motion
- **SEO**: next-seo
- **Hosting**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your Sanity and NetSuite credentials
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Sanity Studio Setup

1. Install Sanity CLI:
```bash
npm install -g @sanity/cli
```

2. Initialize Sanity:
```bash
sanity init
```

3. Import schema from `sanity/schema.ts`

## NetSuite Integration

Contact forms submit to `/api/contact` which forwards to your NetSuite RESTlet.

Configure RESTlet URL and credentials in `.env.local`.

## Deployment

Deploy to Vercel:
```bash
vercel
```

Connect your GitHub repo for automatic deployments on push.

## Project Structure

```
src/
├── app/              # Next.js 14 App Router
├── components/       # React components
├── lib/             # Utilities (Sanity client, queries)
└── styles/          # Global styles

sanity/              # Sanity CMS schema
```

## Key Features

- ✅ Server-side rendering for SEO
- ✅ Image optimization with Next.js Image
- ✅ Headless CMS with Sanity
- ✅ NetSuite form integration
- ✅ Responsive design
- ✅ Performance optimized
- ✅ TypeScript for type safety
