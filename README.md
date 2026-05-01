# Wind Breaker 🍁 — Vercel Deploy

> Discord server landing page with glitch effects, background video, and a live view counter.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Import it in [vercel.com/new](https://vercel.com/new)
3. Add the `DATABASE_URL` environment variable (see below)
4. Hit **Deploy** — done

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ Yes | PostgreSQL connection string |

**Free Postgres options:**
- [Neon](https://neon.tech) — generous free tier, copy the connection string directly
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) — add from Vercel dashboard under Storage tab

## Database Setup

After deploying, run migrations once to create the `page_views` table:

```bash
pnpm install
DATABASE_URL="your_connection_string" pnpm --filter @workspace/db dlx drizzle-kit push
```

Or use [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview) to manage the DB visually.

## Local Dev

```bash
cp .env.example .env        # fill in DATABASE_URL
pnpm install
pnpm --filter @workspace/karan run dev    # frontend on :3000
```

## Project Structure

```
├── vercel.json                   # Vercel routing + build config
├── api/
│   └── index.ts                  # Serverless function (wraps Express)
├── artifacts/
│   ├── karan/                    # Vite + React frontend
│   │   ├── public/karan.mp4      # Background video
│   │   └── src/App.tsx           # Main page component
│   └── api-server/               # Express API (view counter)
└── lib/
    ├── db/                       # Drizzle ORM schema + client
    ├── api-zod/                  # Shared Zod schemas
    └── api-client-react/         # React Query hooks
```

## How It Works on Vercel

| Traffic | Handled by |
|---|---|
| `/api/*` | Serverless function (`api/index.ts`) → Express routes |
| Everything else | Static files from `artifacts/karan/dist/public/` |

The view counter hits `/api/views` on every page load — it upserts a row in Postgres and returns the current count.
