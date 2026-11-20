# TechLamp — Asset manifest

Revision 2: 20 November 2026 · Audience-specific production inventory

**No asset below is claimed to exist or to have passed QA.** This inventory incorporates the supplied plan, the confirmed four audiences, and the eight-page live-site review. Public routes are observed where noted; component names and editable source still require repository inspection.

Read [PLAN.md](PLAN.md) for creative intent and [README.md](README.md) for export and integration rules.

## 1. Lifecycle and path rules

Use these statuses: **Proposed → In design → Exported → Integrated → QA passed → Approved**. A blocked asset keeps its last completed status and names its blocker. Exported does not mean integrated; approved does not mean deployed.

For each concrete asset ID `NAME`:

- Master: `design/masters/NAME.svg`.
- Candidate web export: `design/web/NAME.svg`.
- Static app export, where used: `public/illustrations/NAME.svg`.
- CLI project state, when used: `design/projects/NAME.inkscape-cli.json`.
- Optional raster: `design/raster/NAME@2x.png`, with actual display and pixel sizes recorded.
- Animated inline component: exact application source path must be added after repository inspection.

These are planned paths, not links to existing artwork. `motif-kit.svg` is an authoring source by default; do not ship the entire kit unless a deliberate sprite implementation needs it. Asset families must be expanded into one row per real deliverable before being marked Exported.

## 2. Core inventory

The path rules above provide the master and export filenames for every concrete ID below.

| Asset ID | Phase / priority | Section or consumer | Purpose | Proposed motion / delivery | Static or mobile treatment | Status |
|---|---|---|---|---|---|---|
| `motif-kit` | 1 / foundation | Shared authoring system | Consistent spark, rail, ring, lamp, **approval handoff**, and functional chips | No standalone motion; source symbols reused in scenes | Simplified symbols at small sizes | **In design** — master authored (`design/masters/motif-kit.svg`, named layers + `tl-` IDs), render-verified (`design/raster/motif-kit.png`). Authoring source; not shipped whole. |
| `hero-os-spark` | 1 / high | Home H0 / reported `OperatingSystemDiagram` | Introduce the signal and its source | Single activation; inline SVG overlay after component review | Completed source and signal visible | **Integrated** — inline in `HeroSection.tsx` (`HeroSignalHandoff`), CSS-only one-time descend; master `design/masters/hero-os-spark.svg`; reduced-motion = settled static state verified. |
| `business-at-every-stage` | 1 / high | New Home H0A business-stage entry point | Make startups, small businesses, medium companies, and large enterprises feel included | One master with four named stage groups; optional user-triggered emphasis; inline if animated | Four readable labeled entries; preserve all links and a complete still | **Integrated** — Home H0A `BusinessStageSection`; master authored, exported as 4 per-card crops `public/illustrations/bes-{startup,small,medium,enterprise}.svg` (static `img`, decorative; card text carries meaning); desktop+mobile verified. QA pending. |
| `loop-rail` | 1 / high | Home H1 / reported `IntelligenceLoop` | Connect named stages and feedback | Local path draw and signal pass; inline SVG | Ordered vertical rail; final state | **Integrated** — enhanced the loop feedback rail in `IntelligenceLoop.tsx` (source + human-approval checkpoint + outcome nodes + travelling signal); master `design/masters/loop-rail.svg`; reduced-motion = complete static rail verified. |
| `engine-analytics` | 1 / high | Home H2; analytics hero adaptation | Information becomes a useful pattern | Brief lens/pattern emphasis; inline if animated | Pattern clear without movement | **Integrated** — Home H2 card (static `img`); desktop+mobile verified. QA pending. |
| `engine-or` | 1 / high | Home H2; OR hero adaptation | Feasible alternatives become a considered choice | One route highlighted; inline if animated | Alternatives and chosen route labeled | **Integrated** — Home H2 card (static `img`); desktop+mobile verified. QA pending. |
| `engine-agentic` | 1 / high | Home H2; agentic hero adaptation | Approved task moves through a bounded workflow | Relay sequence; inline if animated | Human approval remains visible | **Integrated** — Home H2 card (static `img`); desktop+mobile verified. QA pending. |
| `ops-line` | 2 / high | Home H3 / reported `OperationsFlow` | Connect tools, intelligence, judgment, and action | One workflow pass; inline | Vertical stages; outcome visible | **Integrated** — `OperationsFlow.tsx`; each flow's human-decision node now carries a green approval check (`approval` flag in `OPS_ROWS`). Desktop verified. |
| `platform-stack` | 2 / medium | Home H4 / reported `PlatformStack` | Show integration across layers | Brief alignment or signal pass; inline if animated | Readable stacked layers | **Integrated** — `PlatformStack.tsx` gains a layout-driven signal spine (per-row nodes + rising signal from cloud foundation to top); master `design/masters/platform-stack.svg`. Desktop verified; reduced-motion safe. |
| `evidence-beforeafter` | 2 / high | Home H5 | Explain a change while preserving evidence status | Optional focus shift; static image or inline | Both states and evidence label visible | **Integrated (light)** — existing `CaseStudyFeature` before→after kept (ILLUSTRATIVE badge + "not a client result"); plain arrow swapped for the branded signal connector for continuity. |
| `cta-lamp-path` | 2 / medium | Home H6 | Resolve the narrative beside the next action | Optional single settling motion | Calm completed path; no moving CTA | **Integrated** — `CtaSection.tsx` (`CtaLampPath`): the signal's path resolves into a lit lamp beside the CTA (desktop-only, white/cream on orange); master `design/masters/cta-lamp-path.svg`. Reduced-motion = complete scene verified. |
| `solution-journey` | 4 / medium | Confirmed solution routes | Map a problem to approach and outcome | Three-part progression; inline if animated | Complete ordered sequence | Proposed |
| `case-beforeafter` | 4 / medium | Confirmed case-study routes | Reusable situation/intervention/outcome framework | Static default; case-specific emphasis | Readable comparison with correct evidence label | Proposed |
| `sme-quote-to-invoice` | 4 / high | Existing `/industries/smes`; supporting use on `/business-apps` | Explain a practical connected workflow from enquiry to quote, approval, order, and invoice | Short local signal handoff with explicit approval; inline if animated | Vertical stages with HTML labels; illustrative scenario | **Integrated** — new `SmeWorkflowSection.tsx` (5 stage cards: enquiry→quote→approval→order→invoice + rail with approval checkpoint), shown on `/industries/smes` in place of the generic chain (other industries untouched) **and reused on `/business-apps`** with platform-oriented framing (component parameterized: id/eyebrow/title/lede/cta). Master `design/masters/sme-quote-to-invoice.svg` → 5 glyph crops `public/illustrations/sme-*.svg`. Desktop + mobile verified. |
| `contact-human-loop` | 5 / medium | Contact / talk-to-expert route | Reassure through visible human judgment | Static default | Human and lamp remain clear at small size | **Integrated** — new `ContactHumanLoop.tsx` in the `/contact` hero `visual` slot (enquiry → specialist under the lamp → next step, with human-approval check). Master `design/masters/contact-human-loop.svg`. Lighthouse a11y 100 (desktop+mobile). |

## 3. Families awaiting route inventory

| Proposed family | Intended output | Reuse strategy | Required input | Status |
|---|---|---|---|---|
| Engine hero adaptations | One per confirmed engine page if spots need larger compositions | Reuse each engine spot; create separate masters only for materially different art | Hero layout and page copy | Proposed |
| `process-<engine>` | One explanatory process per confirmed engine | Shared rails and signals; distinct steps | Actual 3–4 step service explanation, or real sequence if longer | Proposed |
| `industry-<slug>` | One relevant context illustration per selected sector | Shared system with sector-specific objects | Route list, sector priority, real operational scenario | Proposed |
| `service-<slug>` | One spot per confirmed service family | Shared geometry with a distinct service task | Actual service routes and scope | Proposed |
| Case-specific adaptations | Individually identified versions when content changes | Reuse comparison structure, preserve each case's evidence | Approved case facts and attribution | Proposed |

Angle-bracket names are planning placeholders. They are not literal filenames and must not appear in build scripts or final export lists.

Live review found the following industry-directory targets: `government`, `financial-services`, `education`, `healthcare`, `ngos`, `telecommunications`, `retail`, `manufacturing`, `energy-utilities`, `transport-logistics`, `professional-services`, and `smes`. These links were observed in the directory; only the SME detail page was opened in this review. SMEs describes business size, so use the dedicated SME workflow asset rather than duplicating it as a generic sector illustration. Confirm all other detail pages before commissioning their artwork.

Odoo and Zoho service entry links are present on the Business Apps page. Broader cloud/data offers are listed under Capabilities; do not assume they use the same service-route structure. See SITE-REVIEW.md before creating wildcard assets.

## 4. Proposed animation hooks

These are initial contracts. Confirm the IDs in the actual exported SVG and update the table when artwork changes. Protect all `tl-` hooks during optimization.

| Asset | Proposed hooks | Behavior |
|---|---|---|
| `hero-os-spark` | `tl-hero-os-spark-source`, `tl-hero-os-spark-signal` | Source emphasis and short handoff |
| `business-at-every-stage` | `tl-business-at-every-stage-startup`, `tl-business-at-every-stage-small`, `tl-business-at-every-stage-medium`, `tl-business-at-every-stage-enterprise` | Emphasize a chosen business context without hiding the other navigation choices |
| `loop-rail` | `tl-loop-rail-track`, `tl-loop-rail-signal`, `tl-loop-rail-approval` | Track progression and approval emphasis |
| `engine-analytics` | `tl-engine-analytics-lens`, `tl-engine-analytics-pattern` | Clarify a pattern |
| `engine-or` | `tl-engine-or-options`, `tl-engine-or-choice` | Compare and identify an option |
| `engine-agentic` | `tl-engine-agentic-approval`, `tl-engine-agentic-relay` | Approval before execution |
| `ops-line` | `tl-ops-line-track`, `tl-ops-line-human`, `tl-ops-line-outcome` | Ordered operational sequence |
| `platform-stack` | `tl-platform-stack-layers`, `tl-platform-stack-signal` | Align layers or show a connection |
| `evidence-beforeafter` | `tl-evidence-beforeafter-before`, `tl-evidence-beforeafter-after` | Optional comparison emphasis |
| `cta-lamp-path` | `tl-cta-lamp-path-lamp`, `tl-cta-lamp-path-path` | Settle the closing scene |
| `sme-quote-to-invoice` | `tl-sme-quote-to-invoice-request`, `tl-sme-quote-to-invoice-approval`, `tl-sme-quote-to-invoice-invoice` | Show a practical approval-to-completion handoff |

IDs are stable authoring identifiers. Inline rendering must add a unique per-instance namespace and rewrite every reference consistently. A runtime hook map may be needed after namespacing. Check each repeated instance and its accessible title/description references.

## 5. Required record for each produced asset

Complete this record as production progresses; use “not run” instead of an empty or implied pass.

| Field | Required value |
|---|---|
| Asset ID / revision | Stable name and source revision |
| Owner / reviewer | Assigned implementer and reviewer |
| Status / blocker | Lifecycle status, blocker if any, last updated date |
| Story role | Section, visitor takeaway, preceding/following relationship |
| Audience relevance | Startup, small business, medium company, enterprise, or shared; rationale without assuming company size dictates need |
| Actual paths | Master, export, optional JSON/raster, app consumer |
| Canvas / variants | `viewBox`, intended dimensions, mobile changes |
| Source provenance | Original artwork; licenses for any fonts or external material |
| Hooks | Required IDs and selectors; references preserved after optimization |
| Animation | Trigger, duration, easing, replay, cleanup, offscreen behavior |
| Fallback | Reduced-motion, initialization-failure, and static composition |
| Accessibility | Decorative/meaningful decision, alt or accessible name, HTML explanation |
| Evidence status | Verified, example, illustrative, pending publication, or not applicable |
| Export evidence | Toolchain reference, export command, source/export checksum, byte size |
| Review evidence | Contact-sheet entry, screenshots, tested routes/viewports, actual results |
| Approval | Reviewer, date, and approved revision; deployment recorded separately |

## 6. Acceptance checks

- [ ] Master opens in Inkscape with named layers and editable geometry/text.
- [ ] Export matches the master visually and has a correct `viewBox` and dimensions.
- [ ] Required hooks, masks, gradients, clipping, and accessibility references survive export.
- [ ] No external font dependency remains where labels were intentionally outlined.
- [ ] Web export contains no unintended editor data, script, or external resource dependency.
- [ ] Inline instances have no duplicate-ID collisions or cross-instance references.
- [ ] Artwork is readable at actual mobile and desktop sizes.
- [ ] Audience scenes explain work rather than relying on rockets, generic skyscrapers, or company-size stereotypes.
- [ ] Motion has a purpose, cleans up correctly, and leaves content visible on failure.
- [ ] Reduced motion presents a complete, meaningful still image.
- [ ] Evidence labels match the underlying content; no unsupported metrics were added.
- [ ] Preview, byte size, integration path, and reviewer decision are recorded.

## 7. Change record

| Date | Change | Verification |
|---|---|---|
| 20 November 2026 | Removed duplicate empty manifest; added proposed core assets, family dependencies, hook contracts, lifecycle, and review fields | Documentation checked; artwork and application not supplied |
| 20 November 2026 · revision 2 | Added business-stage and SME workflow assets; incorporated observed routes and exact Bang Motion reference | Eight public pages reviewed; source, artwork, and local toolchain remain unverified |
| 2026-11-20 · build start | Repo + toolchain verified in-session (`toolchain-lock.md`); authored `motif-kit` master (incl. approval-handoff motif) and render-verified it | Inkscape 1.2.2 export OK; artwork visually reviewed at 960px; integration pending |
| 2026-11-20 · phase 1a | Authored + exported 3 engine spots and the 4-vignette `business-at-every-stage`; added export script (`scripts/export.sh`) + contact sheet (`review/contact-sheet.*`); integrated new `BusinessStageSection` (H0A) and engine spots (H2) | Dev build clean (no console errors); desktop 1440 + mobile 390 verified in-browser; production build, Playwright smoke, axe, keyboard/reduced-motion QA still pending |
| 2026-11-20 · phase 1b | Integrated `hero-os-spark` (hero signal handoff) + `loop-rail` (feedback rail with human-approval checkpoint), CSS-only static-first motion; applied evidence-language fix (finding #4): "See verified case studies"→"View case studies", softened Operations footnote + featured-case headline | **QA passed:** `tsc --noEmit` clean; eslint clean on changed files (img advisories only); **production `next build --webpack` succeeded**; Playwright smoke `/` + no-horizontal-scroll @1440/1024/768/390/375 all pass; reduced-motion emulation = complete static composition (hero + loop). Full 100-route smoke sweep + axe not re-run this pass. |
| 2026-11-20 · phase 2 | Finished Home: `ops-line` (approval checks on operations flows), `platform-stack` (signal spine), `evidence-beforeafter` (branded connector), `cta-lamp-path` (closing lamp). New globals.css keyframes tl-draw-100/tl-rise/tl-arrive. | **QA passed:** `tsc --noEmit` clean; eslint changed files 0 errors (1 pre-existing unused-var warning, not mine); **production build succeeded**; Playwright smoke `/` + no-horizontal-scroll all pass; reduced-motion (CTA) = complete scene. Desktop verified for all four sections. Full 100-route sweep + axe + mobile-of-new-motion not re-run. |
| 2026-11-20 · phase 4 | First interior page: `sme-quote-to-invoice` — new `SmeWorkflowSection` (enquiry→quote→approval→order→invoice) on `/industries/smes`, replacing the generic growth chain (SME-only; 11 other industries unchanged). 5 glyph master + per-stage exports; keyframe tl-travel-x. Addresses SITE-REVIEW finding #3. | **QA passed:** `tsc` clean; eslint 0 errors (img advisory only); **production build succeeded (127/127 pages)**; Playwright smoke `/` + `/industries/smes` + no-horizontal-scroll all pass; desktop 1440 + mobile 390 verified. axe + reduced-motion-of-this-page not re-run (motion is a hidden-by-default travelling dot; static state complete by construction). |
| 2026-11-20 · phase 3 | Engine capability pages. Audit finding: Operations Research + Agentic Engineering already have bespoke hero+signature in `visuals.tsx` (OrHero/OrSignature, AgenticHero/AgenticSignature) — left untouched. **Business Analytics was the only engine on the generic fallback** → added bespoke `BusinessAnalyticsHero` (scatter→trend→forecast + qualitative driver bars, no metrics) + `BusinessAnalyticsSignature` (Measure→Understand→Anticipate) and registered it. | **QA passed:** `tsc` clean; eslint `visuals.tsx` clean; **production build succeeded (127/127)**; Playwright smoke business-analytics + operations-research + agentic-engineering + ai-intelligent-automation (regression) + no-horizontal-scroll all pass; desktop 1440 verified. |
| 2026-11-20 · phase 5 | Closing visual `contact-human-loop` on `/contact` hero (specialist under the lamp + human-approval). Then full-site verification sweep across everything built in phases 1–5. | **Full QA passed:** `tsc` clean; eslint clean; **production build 127/127**; **full Playwright smoke suite 127/127 pass** (all routes: 200/single-h1/skip-link/zero console errors, no-horizontal-scroll ×5 widths, branded 404, sitemap/robots, canonical on every page, keyboard mega-menu + mobile drawer, contact-form validation, expert-wizard keyboard/focus); **Lighthouse: Accessibility 100 / Best Practices 100 / SEO 100** on home (desktop) and contact (mobile); contact mobile CLS 0.046 (good, <0.1). No regressions. |
| 2026-11-20 · reuse | Extended `sme-quote-to-invoice` onto `/business-apps`: parameterized `SmeWorkflowSection` (id/eyebrow/title/lede/cta props, SME framing as defaults) and placed it after the Odoo/Zoho cards with platform-oriented copy ("The workflow these platforms connect"). Addresses SITE-REVIEW finding #2. | **QA passed:** `tsc` clean; eslint 0 errors (img advisory only); **production build 127/127**; Playwright smoke `/business-apps` + `/industries/smes` (defaults unchanged) + no-horizontal-scroll all pass; desktop 1440 verified. |
