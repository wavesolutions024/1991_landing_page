# Obscura Ink — Tattoo Studio Landing Page

A premium, dark-themed single-page site built with React + Vite + SCSS
(no CSS frameworks).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Production build:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/     Header, Hero, Services, WhyChooseUs, Gallery,
                   BeforeAfter, Reviews, FAQ, CTA, Footer, WhatsappButton
  pages/Home.jsx   Assembles all sections
  hooks/useReveal.js   Scroll-triggered reveal animation hook
  styles/
    app.scss         Tokens, reset, typography, utilities, buttons (only
                      place colors/spacing/variables are declared)
    responsive.scss  Shared cross-section responsive rules
    header.scss, hero.scss, services.scss, whychooseus.scss,
    gallery.scss, beforeafter.scss, reviews.scss, faq.scss,
    footer.scss, cta.scss   Section-specific styling only
```

## Notes

- All colors are CSS variables defined once in `app.scss` — locked to the
  brief's gold/black/white/grey/whatsapp palette.
- Gallery images are placeholder Unsplash photos; swap `src` values in
  `Gallery.jsx`, `Services.jsx`, `Hero.jsx`, `BeforeAfter.jsx` and
  `Reviews.jsx` for real studio photography before shipping.
- The WhatsApp number and booking email are placeholders — update them in
  `WhatsappButton.jsx`, `Hero.jsx` and `CTA.jsx`.
- Animations respect `prefers-reduced-motion`.
