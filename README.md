# Steinweiss Projects

A monorepo containing four web projects built on Next.js with Tailwind CSS v4.

## Projects

| Project | Description | Stack | URL |
|---------|-------------|-------|-----|
| `aquasocius-website` | Marketing site for Aquasocius water purification | Next.js, GSAP, Framer Motion, Three.js | / |
| `aquasocius-command` | Internal fleet ops dashboard | Next.js, Recharts, Lucide React | /command |
| `aquasocius-portal` | Client-facing property portal | Next.js, Recharts, Framer Motion | /portal |
| `global-utility-monitoring` | Rusk valve monitoring — marketing + admin + portal | Next.js, Recharts, Framer Motion | /rusk |

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`)
- **Animations:** Framer Motion, GSAP
- **Charts:** Recharts
- **Icons:** Lucide React
- **3D:** React Three Fiber (aquasocius-website only)
- **Smooth Scroll:** Lenis (aquasocius-website only)
- **Deployment:** GitHub Pages via GitHub Actions

## Structure

```
steinweissProjects/
├── aquasocius-website/    # Project 1 — Marketing site
├── aquasocius-command/    # Project 2 — Internal dashboard
├── aquasocius-portal/     # Project 3 — Client portal
└── global-utility-monitoring/  # Project 4 — Rusk platform
```

## Development

Each project is a standalone Next.js app. To run locally:

```bash
cd <project-name>
npm install
npm run dev
```
