# PerpeX Insights: Full Redesign Plan

Date: 2026-09-01
Mode: Redesign, overhaul. Content, IA, slugs, nav labels, form field names preserved.

## Design read

Reading this as: a B2B consulting site for founders and managing directors of Indian
MSMEs and mid-size firms, with a serious, structured "systems and operations"
language, leaning toward Tailwind + Motion, a wide grotesk display face, light
theme locked, single cyan accent on navy.

Dials: DESIGN_VARIANCE 7, MOTION_INTENSITY 5, VISUAL_DENSITY 4.

## Audit of the current build (what makes it read as AI-generated)

Measured in the codebase:

| Tell | Count | Rule |
|---|---|---|
| Em-dashes in visible copy | 75 | Zero allowed |
| Middle dots as separators | 10 | Max 1 per line, avoid |
| Uppercase-tracking eyebrows | 8 | Max 1 per 3 sections |
| `rounded-[24/28/32px]` cards | 41 | One radius scale, cards only for hierarchy |
| 3D tilt cards (TiltCard) | 8 files | Motion must be motivated |
| Magnetic buttons | 7 files | Drop at MOTION 5 |
| Custom cursor | 1 | Banned |
| Fake document chips in hero (ArtifactStack) | 1 | Div-based fake product UI, banned |
| Hand-rolled SVG icons (ServiceIcon) | 4 | Use an icon library |
| Decorative status dots | 3+ | Banned |
| Scroll cue / bottom strips in hero | 2 | Banned |
| Duplicate CTA intent ("Get in touch" + "Start a Discovery Conversation") | 7 | One label per intent |
| Display serif (Fraunces) | site-wide | Banned as default serif |
| Warm cream bg with cool navy/cyan accent | site-wide | One palette, no warm/cool mix |
| Grain overlays on scrolling containers | 6 | Perf: fixed pseudo-element only |
| Dot-canvas backgrounds (OrganizeCanvas) | 5 | Decoration without meaning |

Keep: information architecture, all real content, brand navy/cyan, logo, the
floating pill nav (approved reference), Lenis smooth scroll, JSON-LD, sitemap,
form field names, admin CMS, DB queries.

## Design system

### Typography
- Display: Schibsted Grotesk (variable, Google Fonts). Sharp, newspaper-grade
  grotesk. Not Inter, not Space Grotesk, not a serif.
- Body: Hanken Grotesk (already installed).
- Mono: JetBrains Mono, restricted to numbers in the stats row only.
- Scale: h1 `text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02]`,
  h2 `text-3xl md:text-5xl tracking-[-0.02em] leading-[1.08]`,
  body `text-base md:text-lg leading-relaxed max-w-[62ch]`.
- Italic emphasis in the same family only. Any italic descender word gets
  `leading-[1.1]` and `pb-1`.

### Color (locked)
- Page background: `#f4f6f9` (cool off-white). Surfaces: white.
- Text: navy `#001b4a`. Muted text: `#3b4a66` (passes 7:1).
- Accent: cyan `#00b2ff`, used identically everywhere. Cyan on white is used
  only for large marks and rules; cyan text only on navy.
- Dark band: navy `#001b4a` used for exactly one section per page (CTA band).
- No cream. No purple. No gradient text.

### Shape lock
- Buttons and pills: `rounded-full`.
- Containers, images, cards: `rounded-2xl` (16px).
- Inputs: `rounded-xl` (12px).
- Nothing else.

### Components (new primitives in `components/ui/`)
- `Button`: pill, primary navy / secondary outline / inverse on navy. Trailing
  arrow lives in its own nested circle. `active:scale-[0.98]`. Text never wraps.
- `Container`: `mx-auto max-w-[1280px] px-6 md:px-10`.
- `Section`: `py-24 md:py-32`.
- `Reveal`: Motion `whileInView`, `y:24 blur(6px) -> 0`, 0.8s,
  `[0.16, 1, 0.3, 1]`, reduced-motion aware. (Rewrite of existing.)
- `Bezel`: double-bezel wrapper for images (outer `bg-navy-900/5 p-1.5
  rounded-[20px]`, inner `rounded-2xl`).
- Icons: `@phosphor-icons/react`, weight `light`, one family site-wide.

### Motion (MOTION 5)
- Hero: staggered fade-up on load (Motion, not GSAP).
- Sections: Reveal on enter, once.
- Buttons: press scale, arrow-circle nudge on hover.
- Nav: floating island, mobile menu staggered mask reveal.
- Everything honours `prefers-reduced-motion`.
- Removed: custom cursor, tilt cards, magnetic physics, dot canvases,
  route-transition wrapper stays (cheap, motivated).

### Copy rules
- Zero em-dashes and en-dashes. Periods, commas, colons.
- No middle-dot chains.
- Section headline <= 8 words, sub-paragraph <= 25 words.
- One CTA label per intent: "Book a discovery call" (contact intent, everywhere),
  "See the four services" (services intent).
- Quotes cut to <= 3 lines.
- No "Stage 1/2/3" style step labels; verb-noun titles only.

### Images
- No image-gen credits spent without the client's go-ahead. Until real
  photography arrives, use `picsum.photos/seed/<descriptive>/<w>/<h>`
  rendered through a navy duotone (`grayscale` + navy multiply overlay) so any
  photo reads on-brand. Every slot is marked `{/* TODO real photo */}`.
- Placements: hero (1), framework bento (2 cells), about founder (1),
  CTA band (1).

## Page specs

### Homepage (8 sections, 6 layout families, 2 eyebrows max)
1. Hero, asymmetric split. Left: h1 "Organising the un-organised." (2 lines),
   subtext <= 20 words, primary CTA + secondary CTA. Right: duotone photo in a
   bezel. Nothing else in the hero.
2. Proof row, plain typography, no cards: 140+ clients, 10+ sectors,
   Rs 100+ Cr largest client turnover, 4 connected services.
3. Framework bento, 4 cells (exact count): Gap Analysis wide cell with photo,
   Documentation, Training, Managing & Monitoring tinted navy cell. Phosphor
   icon per cell. Links to service pages.
4. Reality split: two columns "What we see" / "What it costs", plain lists,
   no cards, hairline between columns.
5. Client wall: the one marquee. Monogram marks (first letter in a circle) for
   the seven real client companies. Logos only, no labels.
6. Testimonials: horizontal scroll-snap row, quotes <= 3 lines, name + role +
   company.
7. Why clients stay: 6 differentiators as a 2-column stacked list, icon +
   title + one line, hairlines between groups of three.
8. CTA band: full-width navy, headline + one CTA + photo.

### Inner pages
- `PageHero`: headline + one paragraph. No eyebrow, no dot.
- Services: comparison table (kept, restyled to 16px radius, no icons in
  header cells... keep phosphor icons), accordion restyled without pills.
- Service detail: "What this covers" as a 3-col plain grid with hairlines,
  "How it runs" timeline kept, deliverables on the navy band, contextual CTA.
- Engagement: comparison table + model list without card boxes + training
  tiers as 3 columns with a single top rule.
- About: founder block with photo slot, six-step onboarding as a 2-col list.
- Results: pull quote kept (no em-dash), testimonials grid, sectors as pills.
- Consultation: form (contrast verified), contact block, FAQ.
- Careers, blog, case study templates: typographic cleanup only.
- Navbar: island nav, "Book a discovery call" as the single contact CTA.
- Footer: navy, no dot canvas, no oversized wordmark.

## Execution order
1. Foundation: fonts, tokens, globals, primitives, phosphor, delete retired
   components. Build.
2. Homepage sections in order. Build, browser check, commit.
3. Inner pages. Build, browser check, commit.
4. Copy sweep: grep for `—`, `–`, `·`, `uppercase tracking`; fix to zero.
5. Pre-flight checklist from the taste skill, mobile overflow check on every
   route, contrast spot-checks, commit, push.

## Pre-flight (run before push)
- [ ] 0 em/en dashes in app/ components/ lib/
- [ ] eyebrows <= ceil(sections/3) per page
- [ ] one accent, one theme, one radius scale
- [ ] hero: <= 4 text elements, headline 2 lines, CTA above fold at 1280x720
- [ ] no duplicate CTA intent
- [ ] no custom cursor, tilt, magnetic, dot canvases, fake product chips
- [ ] icons from phosphor only
- [ ] every route: scrollWidth == innerWidth at 375px
- [ ] build clean
