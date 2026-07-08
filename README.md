# ICSDI 2026

Official website for the **2nd International Conference on Sustainable Development and Innovation (ICSDI 2026)**, hosted by Gulf University, Kingdom of Bahrain.

- **Dates:** 16–17 November 2026
- **Venue:** The Art Hotel & Resort, Kingdom of Bahrain (Hybrid)
- **Publication partner:** Springer Nature (SCOPUS indexed)

## Stack

- Angular 21 (standalone components, signals)
- TypeScript
- Supabase (registration storage)
- Deployed on Vercel

## Development

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build to dist/gu-icsdi-2026/browser
```

## Deployment

The site is a static SPA. `vercel.json` configures the build and SPA rewrites.
