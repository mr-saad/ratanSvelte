# Project Name

Ratan Bandhej

## Purpose

Modern e-commerce website for handcrafted Bandhani products.

The website should feel extremely fast, simple, elegant and production-ready.

Performance and user experience are prioritized over adding more features.

---

## Stack

- SvelteKit 2
- Svelte 5 (Runes)
- TypeScript
- Tailwind CSS v4
- shadcn-svelte (Bits UI)
- Embla Carousel
- Sanity CMS
- jose (JWT verification)
- Vercel

---

## Rendering Strategy

- Entire website is statically prerendered whenever possible.
- Dynamic product/category pages are also prerendered.
- Client-side JavaScript should be kept minimal.
- Server rendering is preferred over client fetching.

---

## Goals

- Excellent Core Web Vitals
- Minimal JavaScript
- Accessible UI
- SEO-friendly
- Mobile-Desktop Both / Responsive
- Reusable components
- Clean codebase

---

## AI Instructions

Always optimize for maintainability and performance.

Before introducing a new dependency, check whether SvelteKit or the browser already provides the feature.

Avoid suggesting unnecessary libraries.

Prefer native APIs.

Explain trade-offs when making architectural suggestions.

Avoid unnecessary divs and wrappers, forming illogical tree
Avoid unnecessary tailwind classes (e.g. block elements having w-full class)
