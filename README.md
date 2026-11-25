# 工房 Kōbō

> Quiet design. Strong engineering.

**Kōbō** (工房, *workshop / atelier*) is the personal portfolio of **Ignacio Barraza**, a backend and full stack software engineer from Iquique, Chile.

A workshop is where things are made by hand, slowly and with care. That is the idea behind this site: a calm, minimal space that shows how I build software. It is guided by *wabi-sabi*, the Japanese appreciation for simplicity, restraint and honest materials.

🌐 [codebynacho.com](https://codebynacho.com)

## What you'll find

1. **Home**: an introduction, selected projects, my engineering philosophy, experience, what I'm currently working on and how to reach me
2. **Projects**: things I've built, with their stack and context
3. **Experience**: my journey through software engineering
4. **Expertise**: the tools and areas I work with
5. **About**: who I am beyond the code
6. **Contact**: let's build something together

## Design

- **Wabi-sabi aesthetic**: washi-paper tones, sumi-ink darks and a single vermilion accent
- **Light and dark themes** that follow your system preference and remember your choice
- **Typography**: Cormorant Garamond for headings, Geist for body text and Geist Mono for labels and details
- **Accessible by default**: WCAG AA color contrast, semantic landmarks and keyboard-friendly navigation
- **Design tokens** for color, spacing, typography, motion, borders and layering, organized in CSS cascade layers

## Tech stack

- [Astro](https://astro.build) for the site itself, mostly static with very little client-side JavaScript
- [React](https://react.dev), used only where an interactive island is needed
- Plain CSS with custom properties and `@layer`, no CSS framework
- [Lucide](https://lucide.dev) for icons
- [Fontsource](https://fontsource.org) for self-hosted variable fonts
- `@astrojs/sitemap` and a custom `Seo` component for metadata and Open Graph

## Project structure

```text
/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── components/
│   │   ├── content/        # Page content blocks (ProjectRow, ExperienceEntry, Principle…)
│   │   ├── footer/         # Footer sections
│   │   ├── navbar/         # Navigation, theme toggle, mobile menu
│   │   ├── primitives/     # Small reusable UI pieces (Link, Tag, Kbd, IconButton…)
│   │   └── shared/         # SEO, section headers, shared interfaces
│   ├── data/               # Site content: projects, links, personal info
│   ├── layouts/            # BaseLayout
│   ├── pages/              # Routes: index, about, projects, experience, expertise, contact
│   ├── styles/
│   │   ├── base/           # Reset, global styles, grid, fonts, components
│   │   └── tokens/         # Design tokens (color, spacing, typography, motion…)
│   └── config.ts           # Global site config (title, description, URL, SEO defaults)
├── astro.config.mjs
└── package.json
```

Most of the content lives in `src/data/` and `src/config.ts`, so updating projects, links or personal info doesn't require touching any component.

## Getting started

Requires **Node.js ≥ 22.12** and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

| Command        | Action                                        |
| :------------- | :-------------------------------------------- |
| `pnpm install` | Install dependencies                          |
| `pnpm dev`     | Start the dev server at `localhost:4321`      |
| `pnpm build`   | Build the production site to `./dist/`        |
| `pnpm preview` | Preview the production build locally          |
| `pnpm astro …` | Run Astro CLI commands (`astro check`, etc.)  |

## Roadmap

- [ ] Command palette (`Ctrl + K`)
- [ ] Hidden easter egg (maybe try the Konami code someday 👀)
- [ ] Hobbies section: what I do outside of coding
- [ ] Open Graph images per page

## Author

**Ignacio Barraza**, Backend & Full Stack Software Engineer
[GitHub](https://github.com/ignaciobarraza) · [LinkedIn](https://www.linkedin.com/in/ignaciobarraza)
