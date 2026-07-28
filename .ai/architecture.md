# Architecture

## General Philosophy

Keep the project simple.

Avoid unnecessary abstractions.

Favor composition over complexity.

---

## Data Flow

Sanity CMS

↓

SvelteKit load()

↓

Page

↓

Reusable Components

Components should never fetch their own data unless absolutely necessary.

---

## Authentication

- JWT stored in cookies
- Verified using jose
- Auth information fetched through API
- User-specific features depend on authentication

---

## Cart

Cart belongs to the authenticated user.

Server/database is the source of truth.

Avoid storing duplicated product information.

---

## Components

Reusable UI belongs in

src/lib/components

Business-specific components should stay grouped by feature.

---

## Styling

Tailwind utilities first.

Reusable UI via shadcn-svelte.

Avoid custom CSS unless necessary.

---

## Principles

- Single responsibility
- DRY
- Small reusable components
- Strong TypeScript
