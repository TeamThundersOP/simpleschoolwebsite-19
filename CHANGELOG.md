## Changelog

### chore(lint+fmt)

- Fix ESLint errors in `Hero.tsx`, `Services.tsx`, `ui/command.tsx`, `ui/textarea.tsx`.
- Switch Tailwind plugin import to ESM in `tailwind.config.ts`.

### fix(responsive)

- Add `overflow-x-clip` to page wrappers in `Index.tsx` and `Students.tsx`.
- Ensure `main` landmarks use `id="main"` for skip link.

### fix/a11y

- Add global skip link in `App.tsx`.
- Add width/height/decoding on navbar logo; `aria-label` for home link.

### perf(images/code-split)

- Lazy-load route components with React.lazy + Suspense.
- Reduced main bundle from ~1.07 MB to ~0.92 MB (gzipped 337.9 kB → 315.7 kB).

### chore(seo)

- Add lightweight `Seo` helper; set titles/descriptions/canonical for `/` and `/students`.

### chore(routing)

- Add `public/_redirects` and `public/404.html` for SPA fallback.

### Baseline vs After

- Build: OK; large chunk warning persists but reduced.
- Lighthouse (mobile): `/students` Perf ~80 → 90, A11y 98, BP 100, SEO 100. `/` categories recorded; perf via perf preset earlier.
