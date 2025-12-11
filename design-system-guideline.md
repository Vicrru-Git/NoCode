## NoCode Academy Design System (Quick Reference)

This guide captures the live tokens from the site to help you reproduce the brand consistently in PPT/DOC assets.

### Brand Essence
- **Positioning:** Academia exclusiva para crear negocios digitales NoCode + IA en 90 días.
- **Tone:** Directo, confiable, ambicioso; mezcla de rigor práctico y cercanía.
- **Voice patterns:** Usa verbos de acción, cifras concretas, promesas medibles (p. ej., “10 plazas”, “90 días”).

### Core Tokens
- **Font:** Inter (Google) — use weights 400/500/700 for body/subheadings/headlines.
- **Base colors** (from Tailwind config):
  - Primary: `#22C55E`
  - Secondary: `#3B82F6`
  - Background: `#0A0A0A`
  - Text: `#FFFFFF` on dark background; supporting grays from Tailwind (`text-gray-400/500` for secondary text).
- **Gradients:** Left-to-right primary → secondary for CTAs, underlines, and highlight chips.
- **Spacing scale:** Tailwind rhythm (4px step). Common paddings seen: 24–32px buttons (`px-6/8 py-3/4`), section padding ~64–96px (`py-16/24`).
- **Borders:** Use subtle borders with low contrast on dark (`border-gray-800/700`). Gradient borders for emphasis only.
- **Radii:** Buttons and chips: `rounded-lg`; pills: `rounded-full`; cards/sections: medium radius (`rounded-xl` acceptable).

### Typography
- **Headline hierarchy:** H1 48–72px bold; H2 32–40px bold/semibold; H3 24–28px semibold.
- **Body:** 16–18px regular; use 20–22px for lead paragraphs.
- **Accents:** Gradient text for key words or figures; colored spans with primary/secondary for emphasis.
- **Line-height:** Headlines ~1.1–1.2; body ~1.5.

### UI Patterns (web → PPT/DOC equivalents)
- **Hero/cover title:** Large bold headline with one gradient-accent word; supporting subhead in gray; CTA gradient button + a small data point row.
- **CTA button:** Gradient fill primary→secondary, white text, `rounded-lg`, medium shadow; hover = slight scale.
- **Chips/flags:** Subtle background tint of primary (10–20% opacity) with thin border of the same hue; pill shape.
- **Stats:** 2–4 columns; big numerals with gradient text; labels in gray; thin top border in dark gray.
- **Cards/sections:** Dark background (`#0A0A0A` to `#111`), inner padding 24–32px, border `#1f2937` range, optional soft shadow.
- **Navigation/footer:** Dark translucent surfaces with 1px gray borders; link text in gray transitioning to white on hover; underlines via gradient bar on hover.

### Imagery & Iconography
- **Imagery:** Prefer screenshots/mockups with dark UI frames; add soft gradient overlays using brand colors at 10–20% opacity.
- **Icons:** Line icons with medium stroke; keep colors white/gray; reserve primary/secondary for emphasis.
- **Logos:** Maintain clearspace equal to the logo mark height. Place on dark backgrounds; avoid placing over busy gradients.

### Tone & Voice (for slides/docs)
- Lead with outcomes and numbers (90 días, 10 plazas, 100% práctico).
- Use short clauses, avoid jargon; explain tools only when they connect to value.
- CTA phrasing: “Solicitar plaza”, “Reserva tu plaza”, “Aplica ahora”.

### PPT/DOC Layout Patterns
- **Cover:** Dark background; gradient accent band or chip; headline with gradient keyword; subhead in gray; CTA button style for call-to-action.
  - Do: Keep hero elements centered or aligned left with generous spacing.
  - Don’t: Stack more than 2 text blocks above the fold.
- **Section opener:** Title + short promise line; add a thin gradient underline; include a small stat chip if relevant.
- **Content slide (bullets):** Title, 3–5 bullets max; bullets at 18–20px; use primary-colored bullets or a left accent bar.
- **Two-column:** Left text, right visual (mockup or stat). Maintain 24–32px gutter and equal vertical padding.
- **Tables:** Dark cells with thin `#1f2937` borders; header text in white, body text in gray; highlight key rows with a subtle primary tint.
- **Callouts:** Rounded card with border `#1f2937`; left accent strip in primary; short title + one-sentence takeaway.
- **Timeline/steps:** 3–5 steps, circles or chips in primary, connectors in gray; keep labels concise.
- **Footers:** Small gray text; include logo left, link(s) right; avoid heavy dividers (1px gray only).

### Do / Don’t (quick reminders)
- Do keep contrast high on dark backgrounds; use gray for secondary text.
- Do reserve gradients for CTAs, highlights, and hover underlines.
- Do cap line length to ~65–75 characters for body text.
- Don’t mix more than the two brand colors per slide; use neutrals as the base.
- Don’t overuse glow/shadows; prefer subtle elevation only on CTAs/cards.
- Don’t center long paragraphs; left-align multi-line body copy.

### Snippets (how to transpose to PPT/DOC)
- **Color swatches:** Use primary/secondary as fills with 90–100% tint; create 20% tint chips for backgrounds.
- **Text styles:** Define PPT master styles: Title = Inter Bold 48–56; H2 = Inter Semibold 32–36; Body = Inter Regular 18; Caption = Inter Regular 14 gray.
- **Buttons:** Rounded rectangle, gradient fill primary→secondary, white text Bold 16–18, slight shadow; hover state not needed in static decks.
- **Spacing:** Use a 4px grid; key increments 8/12/16/24/32/48/64. Keep outer margins ≥32px.

### References in Code
- Tokens sourced from `app/globals.css` (Inter, dark background, white text) and `tailwind.config.ts` (primary `#22C55E`, secondary `#3B82F6`, background `#0A0A0A`, Inter font family). Component patterns visible in `components/Navigation.tsx`, `Hero.tsx`, and `Footer.tsx` (gradient CTAs, dark shells, gray links).

