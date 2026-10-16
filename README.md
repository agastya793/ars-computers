# ARS Computers

Business website and administrator dashboard for **ARS Computers**, a computer hardware, software services, CCTV, printer, and business technology solutions company.

## Implementation status

**Stage 1B — Project foundation complete.**  
The Next.js application has been scaffolded and configured. No business functionality, external service integrations, authentication, or database connections have been implemented yet.

---

## Technology stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) — App Router |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| Runtime | Node.js 24 LTS |
| Package manager | npm |
| Hosting | Vercel Pro *(not yet configured)* |
| Database | Supabase Free — PostgreSQL *(not yet configured)* |
| Authentication | Supabase Auth *(not yet configured)* |
| File storage | Cloudflare R2 Free *(not yet configured)* |
| Transactional email | Brevo Free *(not yet configured)* |

---

## Prerequisites

- **Node.js 24 LTS** — required. Install from [nodejs.org](https://nodejs.org/en/download) or use a version manager such as [fnm](https://github.com/Schniz/fnm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).
- **npm 10+** — bundled with Node.js 24.
- **Git** — for version control.

Verify your environment:

```bash
node --version   # must print v24.x.x
npm --version
git --version
```

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/agastya793/ars-computers.git
cd ars-computers
npm install
```

---

## Local development

```bash
npm run dev
```

Opens the application at [http://localhost:3000](http://localhost:3000).

---

## Available scripts

| Script | Command | Description |
|---|---|---|
| Development server | `npm run dev` | Starts Next.js with Turbopack |
| Production build | `npm run build` | Compiles and optimises for production |
| Production server | `npm run start` | Serves the production build locally |
| Linting | `npm run lint` | Runs ESLint with the Next.js config |
| Type checking | `npm run typecheck` | Runs `tsc --noEmit` without emitting files |

All four checks — `lint`, `typecheck`, and `build` — must pass before any code is merged.

---

## Environment variables and secrets

### Rules

1. **Local secrets belong in `.env.local`** — this file is excluded from Git and must never be committed.
2. **Never commit real credentials** — API keys, passwords, tokens and database URLs must not appear in any committed file.
3. **`NEXT_PUBLIC_` prefix = browser-exposed** — variables with this prefix are embedded in the client bundle. They must contain no secrets.
4. **Privileged keys are server-side only** — the Supabase service-role key, Cloudflare R2 credentials, and Brevo API key must only be accessed from server-side code (Route Handlers, Server Actions, or server components). They must never be assigned to `NEXT_PUBLIC_` variables.

### Setup for local development

```bash
cp .env.example .env.local
# Open .env.local and fill in the required values
```

`.env.example` is committed to the repository. It documents the required variable names with empty values and is safe to read. See that file for the full list of variables.

### What is not yet configured

External service integrations — Supabase, Cloudflare R2, and Brevo — will each be configured in a dedicated implementation stage. The variable names are documented in `.env.example` for reference, but no connection code exists yet.

---

## Project structure

```
C:\ARS COMPUTERS\
├── src/
│   ├── app/              # Next.js App Router — routes, root layout, global styles
│   ├── components/       # Reusable shared UI components
│   ├── features/         # Feature-specific modules (added as features are built)
│   ├── lib/              # Shared utilities and integration clients (added per stage)
│   └── types/            # Shared TypeScript type definitions
├── public/               # Static assets served at the root URL
├── .env.example          # Reference template for required environment variables
├── .nvmrc                # Pinned Node.js major version (24)
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration (strict mode enabled)
└── eslint.config.mjs     # ESLint configuration (Next.js core-web-vitals + TypeScript)
```

---

## Planned website overview

### Public website

The public-facing website will cover:

- Computer parts and product catalogue (enquiry-based — no online checkout)
- Custom PC builds and computer upgrades
- Desktop and laptop diagnostics and repair
- CCTV supply, installation and maintenance
- Printer and cartridge sales, cartridge refilling and printer services
- Software installation and antivirus services
- Biometric attendance hardware installation
- Business technology solutions
- Industrial-solutions enquiries

**This is not an e-commerce application.** The catalogue supports product discovery and customer enquiries. There is no shopping cart, payment processing or online checkout.

### Private administrator dashboard

A protected administrator interface will allow authorised staff to manage:

- Product catalogue (categories, specifications, availability, images)
- Website content
- Customer enquiries

Administration is protected by server-enforced authentication and authorisation. Public visitors cannot access or modify administrative data.

---

## Known issues

### ESLint dependency vulnerability (non-critical, dev-only)

`npm audit` reports 5 high-severity findings in the `braces` package, reachable through: `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`.

This vulnerability exists **only in the ESLint toolchain** (development-time linting). It is not present in any runtime code and cannot be exploited in a deployed application. The suggested fix (`npm audit fix --force`) would downgrade `eslint-config-next` to v14, which is incompatible with Next.js 16 and is not an acceptable resolution. This is a known upstream issue that will be resolved when the Next.js team updates the dependency.

**No action is required.** Do not run `npm audit fix --force`.

---

## Git

Repository: [github.com/agastya793/ars-computers](https://github.com/agastya793/ars-computers)

Default branch: `main`
