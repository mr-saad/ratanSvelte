# Architectural Decisions

## Embla over Swiper

Reason:

- significantly smaller
- simpler API
- better perceived performance
- only required carousel features

---

## Static Generation

Reason:

SEO and initial load performance are top priorities.

Pages should be prerendered whenever possible.

---

## Sanity CMS

Reason:

Single source of truth.

Content editors can manage products without code changes.

---

## Minimal Dependencies

Reason:

Every dependency increases maintenance, bundle size and update overhead.

Prefer native browser APIs and SvelteKit features.
