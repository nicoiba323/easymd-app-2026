# EasyMD — Design System

> Acceso simple y moderno a la salud.

EasyMD is an all-in-one primary health-tech platform for Latin America that serves
middle- and low-income communities through personalized, unlimited, on-demand medical
and psychological consultations — plus digital pharmacy, labs, and dental services.
This design system gives design agents everything needed to build well-branded EasyMD
interfaces and assets: brand foundations (color, type, spacing, motion), reusable React
components, and full-screen UI kits for the product surfaces.

**Spanish-first.** All product UI is written in **español LATAM** (neutral, no strong
regionalisms). English is used only in this internal documentation.

---

## Sources

These inputs informed the system. The reader may not have access — they are recorded here
so the system can be improved if access is available.

- **Brand & UX/UI guidelines** — provided as written notes (color tokens, typography,
  layout, components, motion, accessibility, tone). Reproduced and expanded below.
- **Logos** — `assets/easymd-logo.png` (primary lockup), `assets/easymd-icon.png` (app
  icon), `assets/favicon.png` (generated 64×64).
- **Strategy briefs** — `uploads/EasyMD_AI_Native_Strategy_Brief.md`, `uploads/01_CTO_Brief.md`,
  `uploads/EasyMD_Implementation_Playbook.md`. Distilled (design-facing) into
  `guidelines/product-context.md`; always-on context in `CLAUDE.md`.
- **New mobile app (Lovable)** — `https://easymd-new-app.lovable.app`. **Not yet accessed** —
  the live URL wasn't fetchable and the project ID wasn't resolvable from the subdomain. To
  recreate it faithfully, connect the Lovable project (need its project ID) or share
  screenshots / the exact preview URL.
- **GitHub repo** — `EasyMD/easymd-sponsor-portal`
  (https://github.com/EasyMD/easymd-sponsor-portal). **Not accessed** this pass — GitHub
  was not connected. Reconnect GitHub and re-run to pull the real sponsor-portal
  components and tighten visual fidelity. Explore this repo to do a better job recreating
  product surfaces.

> ⚠️ **Font substitution:** Plus Jakarta Sans (headings) + Inter (body) are loaded from
> **Google Fonts** (`tokens/fonts.css`), not self-hosted binaries. These match the
> guideline spec exactly. If you want self-hosted/offline fonts, provide the files and
> I'll swap the `@import` for local `@font-face` rules.

---

## Brand essence

- **Name:** EasyMD
- **Market:** Health-tech for Latin America (Spanish-first UI)
- **Voice:** Cercana, profesional, confiable. Clara y humana, nunca corporativa-fría.
- **Promise:** Acceso simple y moderno a la salud.

---

## PRODUCT STRATEGY & BUSINESS MODEL

EasyMD is **AI-native and WhatsApp-first** — not "a telemedicine app." The app is the shell;
the **relationship is the product**, delivered through three channels, each with one job:

- **WhatsApp — engagement layer.** Triage, follow-up, AI concierge, prescription & lab
  triggers, mental-health check-ins. Zero friction; the system reaches the patient.
- **App — commerce & records layer.** Buy meds, order labs, book, view EHR, manage family,
  pay. Opened to *complete a transaction*, usually driven from WhatsApp at peak intent.
- **Web links — discovery layer.** Shareable, SEO'd provider booking pages; new-patient entry.

**The flywheel (moat):** AI Scribe → richer EHR → smarter concierge → proactive WhatsApp
nudges → bookings fill the calendar → more consults → more scribe use. Every design should
help close the loop: each interaction creates a clinical or commercial event. Full
design-facing summary in `guidelines/product-context.md`; always-on rules in `CLAUDE.md`.

---

## CONTENT FUNDAMENTALS — how EasyMD writes

**Language:** Always Spanish (LATAM neutral). Never default to English. Avoid strong
regionalisms ("ahorita", "chévere", "guay") — keep it pan-regional.

**Person & tone:** Speak to the user as **"tú"** (informal, warm, close), never "usted"
(too formal/cold) and never "nosotros"-heavy corporate speak. The brand is a friendly,
competent companion — *cercana, profesional, confiable*.

**CTAs are amable imperatives** — friendly commands in second person:
- "Crea tu cuenta"
- "Habla con Equipo EasyMD"
- "Solicita una demo"
- "Agenda tu consulta"
- "Empieza gratis"

Avoid cold/transactional CTAs ("Enviar", "Submit", "Continuar" alone) when a warmer
imperative fits.

**Casing:** Sentence case for headings and buttons ("Agenda tu consulta", not "Agenda Tu
Consulta"). Never ALL CAPS for sentences — uppercase is reserved for small eyebrows/labels
with wide tracking ("CONSULTAS · 24/7"). Product name is always **EasyMD** (camel, capital
M, capital D).

**Error & system messages are empathetic, never raw/technical.** Bad: "Error 500: request
failed." Good: "Algo salió mal de nuestro lado. Intenta de nuevo en un momento." Explain
what happened and what to do next, in plain language.

**Vibe:** Clear, human, reassuring. Health is sensitive — copy lowers anxiety. Short
sentences. Concrete benefits ("Consulta con un médico en menos de 10 minutos") over vague
claims ("La mejor salud digital"). Numbers when they reassure (response times, coverage),
not as decoration.

**Emoji:** Not used in product UI. Iconography (Lucide) carries meaning instead. Emoji may
appear sparingly in informal CRM/marketing copy but never in clinical or transactional
flows.

---

## VISUAL FOUNDATIONS

**Overall feeling:** Calm, clean, trustworthy, modern. A *bento-grid* layout language
(inspired by EaseHealth): rounded cards, clear hierarchy, lots of air. Nothing loud or
clinical-cold — warmth comes from cream backgrounds, the mint accent, and real human
photography.

### Color
- **Navy `#1a3a5c`** (primary) — headings, navigation, strong text, primary buttons. The
  logo uses a deeper navy `#003970` (`--navy-deep`) for the brand mark itself.
- **Brand Blue `#0ea5e9`** (accent) — links, secondary CTAs, icons, focus rings,
  highlights.
- **Mint `#10b981`** (secondary) — confirmations, success, health highlights. The logo's
  mint face is a lighter `#80dcaf` (`--mint-300`), used for illustration/brand fills.
- **Cream `#fafaf7`** — soft app background that makes white bento cards float.
- **Foreground** — deep navy text `#122336`. **Muted** — warm gray `#76756b`.
- Status: success = mint, warning = amber `#f59e0b`, danger = warm red `#e0533d`, info =
  blue.
- **Critical rule:** components consume **semantic tokens** (`--color-primary`,
  `--foreground`, `--background`, `--color-secondary`…), never hardcoded hex, never
  `text-white`/`bg-black`. See `tokens/colors.css`.

### Typography
- **Headings:** Plus Jakarta Sans, 600/700, slightly tight tracking (`-0.02em`).
- **Body:** Inter, 400/500, generous line-height (1.6).
- **Never serif. Never** Poppins or generic defaults. (Inter is body only — not headings.)
- Scale: Display 56 / H1 48 / H2 36 / H3 24 / Body 16 / Small 14. See
  `tokens/typography.css`.

### Spacing & layout
- Spacing on a **4px** grid. Sections `py-16`…`py-24`. Container `max-w 80rem`.
- 12-col desktop grid; 1–2 col mobile. Bento mixes 1×1, 2×1, 2×2 tiles.
- **Radii:** cards `1.5rem` (2xl), inputs/buttons `0.75–1rem` (md/lg), pills & avatars
  full. Generous, friendly rounding everywhere.

### Cards
White (or cream) fill, **1px subtle border** (`--border`, warm gray), **soft shadow**
(`--shadow-sm`) that deepens to `--shadow-md` on hover. Utility classes: `.emd-card`,
`.emd-card-hover`, `.emd-glass`. Cards are the primary container — the bento tile.

### Backgrounds
Cream base, no heavy textures. White/cream bento cards layered on cream. Soft, optional
mint/blue tint blobs at very low opacity behind hero sections (subtle, never loud). **No**
purple/indigo AI-style gradients on white — explicitly banned. Photography is full-color,
warm, real LATAM people in natural light — never desaturated corporate stock.

### Shadows & elevation
Soft, navy-tinted, low-spread. Five steps `xs→xl` in `tokens/effects.css`. Elevation rises
on hover, not at rest — most surfaces sit at `sm`.

### Borders & radii
Hairline 1px borders in warm gray; never harsh black lines. Corners are always rounded —
the brand has no sharp 90° UI corners except full-bleed media edges.

### Motion
Discreet and purposeful — `fadeInUp`, `float`, `pulse-soft`. Duration **200–400ms**,
easing **ease-out**. Nothing that distracts from clinical content. Respect
`prefers-reduced-motion` (base.css disables animation).

### Hover & press states
- **Buttons:** hover darkens tone one step (or lifts `translateY(-2px)` / `scale(1.02)`),
  press shrinks `scale(0.98)`.
- **Cards:** hover lifts + deepens shadow.
- **Links/icons:** hover shifts to `--color-accent-hover`.
- Always a visible **focus ring** (`--shadow-focus`, brand-blue) for accessibility.

### Transparency & blur
Used sparingly: `.emd-glass` (white @ 70% + 12px blur) for sticky headers / overlays only.
Not a decorative default.

### Imagery vibe
Warm, natural light, real people, full color (not B&W, not heavy grain). Illustrations are
flat, clean-lined, in brand palette. Product mockups use the real EasyMD UI when possible.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — `lucide-react` in product code; **stroke
  1.5–2**, color `--foreground` or `--color-accent` (brand blue). Clean, rounded,
  consistent with the friendly geometry of the logo.
- **Delivery here:** loaded from CDN (`https://unpkg.com/lucide@latest`) in UI kits and
  component cards, since the icon set is not vendored in the (unaccessed) repo. If the
  repo pins a specific Lucide version or a custom sprite, vendor it into `assets/icons/`
  and update references.
- **Substitution flag:** Lucide is the **documented** brand icon set (per guidelines), so
  this is not a substitution — but the *exact version* couldn't be confirmed without repo
  access.
- **No emoji** as UI icons. **No** ad-hoc hand-drawn SVG icons — use Lucide. Unicode
  glyphs are not used as icons.
- **Logos:** `assets/easymd-logo.png` (full lockup), `assets/easymd-icon.png` (app icon),
  `assets/favicon.png`. Clearspace = height of the "M" around the mark. Never recolor,
  distort, shadow, or place on saturated backgrounds.

---

## Don'ts (constraints)

- ❌ Change the logo or primary color without approval.
- ❌ Purple/indigo AI-style gradients on white.
- ❌ Serif fonts, or generic defaults (Poppins; Inter as a *heading* font).
- ❌ Hardcoded hex in components — always semantic tokens.
- ❌ Switch the UI to English by default.
- ❌ Cold/technical error messages; ALL-CAPS sentences; emoji in clinical flows.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import this). `@import`s everything below.
- `README.md` — this guide.
- `CLAUDE.md` — always-on project context (what EasyMD is + strategy + non-negotiables).
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
`base.css` (element resets + `.emd-*` utilities).

**`assets/`** — `easymd-logo.png`, `easymd-icon.png`, `favicon.png`.

**`guidelines/`** — foundation specimen cards (Design System tab): color, type, spacing,
brand. Plus `product-context.md` — design-facing strategy & business-model summary.

**`components/`** — reusable React primitives (each: `.jsx` + `.d.ts` + `.prompt.md`, one
`@dsCard` HTML per group):
- `core/` — Button, IconButton, Badge, Tag, Avatar, Card, Input, Textarea, Select,
  Checkbox, Switch, Tabs, Alert, Tooltip, ProgressBar.

**`ui_kits/`** — full-screen recreations (each: `index.html` + screens `.jsx`):
- `marketing/` — EasyMD marketing website (hero, bento features, pricing, footer).
- `patient_app_v2/` — **patient mobile app — live shipped UI** (home + AI Concierge,
  labs, psicología, bienestar, pre-filled pharmacy cart). Authoritative patient reference.
- `provider_web/` — provider/doctor web console (dashboard, agenda, consulta room).

**`slides/`** — branded 16:9 slide template (title, agenda, big-stat, comparison, quote).

> Consume the system via `window.<Namespace>` after loading `_ds_bundle.js` (auto-generated).
> Run `check_design_system` for the exact namespace.
