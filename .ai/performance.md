# Performance Philosophy

Performance is a feature.

Perceived performance matters as much as measured performance.

---

## Priorities

1. Fast first paint
2. Fast navigation
3. Minimal JavaScript
4. Stable layout
5. Responsive interactions

---

## Core Web Vitals

Optimize for

- LCP
- CLS
- INP

Avoid regressions.

---

## General Rules

Prefer HTML over JavaScript.

Prefer CSS over JavaScript.

Prefer prerendering.

Avoid unnecessary client-side rendering.

Lazy-load only when beneficial (images and components).

---

## Images

Use Sanity CDN.

Serve appropriately sized images (Mobile, Desktop).

Avoid loading hidden images.

---

## Libraries

Every dependency increases maintenance and bundle size.

Question every new package.

---

## Navigation

Route changes should feel instant.

Avoid duplicate requests.

Prefetch where beneficial.

---

## Production Mindset

Do not optimize only Lighthouse.

Optimize for real users on average mobile devices and slower networks.
