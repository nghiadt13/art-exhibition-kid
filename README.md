# Art Exhibition for Kids

A Next.js project with JSON file database, deployable on Vercel.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: JSON file (read/write via `fs` module)
- **Deployment**: Vercel

## Project Structure

```
├── data/
│   └── exhibitions.json          # JSON database file
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── exhibitions/
│   │   │       ├── route.ts      # GET all, POST new
│   │   │       └── [id]/
│   │   │           └── route.ts  # GET one, PUT, DELETE
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/               # Reusable UI components
│   ├── lib/
│   │   └── json-db.ts           # JSON database utilities
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/exhibitions` | List all exhibitions |
| POST | `/api/exhibitions` | Create a new exhibition |
| GET | `/api/exhibitions/:id` | Get exhibition by ID |
| PUT | `/api/exhibitions/:id` | Update exhibition |
| DELETE | `/api/exhibitions/:id` | Delete exhibition |

## Deploy on Vercel

```bash
npm run build
```

Then push to GitHub and import on Vercel.

**Note**: On Vercel, the JSON database uses `/tmp` directory which resets on each serverless function cold start. For production use, consider a proper database like PostgreSQL or MongoDB.
