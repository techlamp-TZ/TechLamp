# TechLamp — Visual storytelling plan

Revision 2: 20 November 2026 · Audience confirmed · Live-site review incorporated

**The story:** a business signal becomes understanding, a considered decision, an approved action, and a measurable outcome. Learning returns to the system as the next signal. TechLamp makes that journey legible and keeps human judgment visible.

The intended visitor action is to book a consultation or talk to an expert, consistent with the live website. The confirmed audience is startups, small businesses, medium-sized companies, and large companies. The design should help each visitor recognize a relevant starting point and explain what TechLamp does before asking them to act.

## 1. Basis and boundaries

The supplied plan describes TechLamp as a Tanzania-based data, operations-research, and AI consultancy. Browser review confirms a warm visual presentation, the operating loop, three specialist engines on the homepage, a broader ten-practice capabilities directory, Odoo/Zoho business-application entry points, and an existing SME page. GSAP/Lenis/three.js implementation and earlier accessibility claims remain source-level assertions from the supplied notes, not verified facts. See [SITE-REVIEW.md](SITE-REVIEW.md) for coverage and limitations.

Before implementation, verify the route inventory, current components, brand tokens, source content, analytics if available, and existing tests. Preserve the reported `OperatingSystemDiagram`, `IntelligenceLoop`, `OperationsFlow`, and `PlatformStack` where they already communicate well. Extend their role instead of drawing a competing version of the same system.

No completed asset, successful build, installed skill, or accessibility pass is implied by this plan. The empty original manifest has been replaced by an explicitly **proposed** inventory. The eight-page review is an initial content and visual review, not a full-site QA pass.

### Confirmed audiences and proposed messages

Treat business size as a useful starting point, not a diagnosis. A startup can need advanced analytics and a large company can need a small initial engagement. Do not impose employee-count, revenue, budget, or purchasing-power assumptions.

| Audience | Proposed first message | Recognizable situation to illustrate | Relevant starting points in the current site |
|---|---|---|---|
| Startups | Build a solid foundation for the business you are creating. | A small team connects its first customer record, workflow, and performance view | Software engineering, cloud platforms, business applications, consulting |
| Small businesses | Connect daily work and reduce repeated manual steps. | A customer enquiry becomes a quote, approved order, and invoice without repeated copying | Odoo/Zoho, enterprise applications, automation, SME page |
| Medium-sized companies | Keep teams, systems, and decisions connected as operations grow. | Sales, finance, and operations share a view of demand; a manager approves a resource plan | Business analytics, data integration, optimization, automation |
| Large enterprises | Coordinate complex operations with visible control and accountability. | Several teams exchange governed information; approvals and traceable actions remain clear | Data governance, platform integration, optimization, governed agents, managed services |

These are editorial proposals and illustrative scenarios, not new commercial packages or guaranteed outcomes. No audience has been given priority over another. Keep all four visible in the first review.

### Recommended positioning and entry points

Preserve “Engineering intelligent progress” as the brand line. Proposed explanatory headline: **Intelligent systems for every stage of business.** Proposed supporting copy: “From your first connected tools to complex operations, we help you understand performance, improve decisions, and put the right systems to work.” These are draft copy options for local review, not changes already made to the site.

Add a compact “Where are you starting?” section immediately after the hero. Use four clearly labeled links or panels with a shared illustration; keep the page readable without making a selection. The choices may jump to relevant existing content initially. Do not create four new landing pages merely to satisfy the visual design.

Provide a visible problem-led route for visitors who do not identify with a company-size label. Preserve the existing solution finder. Use “Book a consultation” as the common main action and retain the “Not Sure Yet” path already present in discovery.

The site currently places SMEs under Industries. Retain that URL and its inbound links for the first implementation. Present business stage separately from sector in the new homepage entry point; any later navigation migration needs an explicit redirect and content plan.

## 2. Creative direction: light as intelligence

An orange signal travels through a warm, engineered world. Each scene changes its meaning: information is organized, options are evaluated, a person approves the next step, and an operational outcome becomes visible. The lamp provides a recurring visual anchor.

Continuity should come from repeated shapes, connected paths, composition, and deliberate handoffs. A single animated element does not need to traverse the entire DOM. Locally scoped scenes can create the same narrative while handling responsive layout and route changes more reliably.

Avoid implying that AI acts without oversight or that TechLamp guarantees an outcome. Keep approval and feedback as visible parts of the system.

### Visual language

| Element | Direction | Implementation constraint |
|---|---|---|
| Canvas | Warm paper `#f9f1e8`, cream, open space | Confirm against existing design tokens |
| Structure | Ink `#0e0d0c`, slate `#5b5855`, brown `#3a1c0d` | Maintain readable labels and clear hierarchy |
| Signal | Orange `#ff5a00` for the illustrated active signal | Never the only indicator of state; retain existing brand CTA rules |
| Functional tones | Retain existing pastel families and reconcile their semantic use | Live solution cards and the earlier supplied plan use different assignments; inspect actual tokens before establishing one cross-site mapping |
| Shapes | Geometric, rounded joins, simple layered planes | Use consistent perspective within each scene |
| Lines | Approximately 1.5–2 px at intended display size | Inspect at mobile size; faint lines must not carry essential meaning |
| Typography | Minimal JetBrains Mono labels in art | Keep prose and essential labels in HTML; preserve editable text in masters |
| Depth | A few overlapping planes and restrained shadows | Avoid large animated filters and blur-heavy scenes |
| Texture | Optional subtle paper grain | Add only if it remains light, legible, and consistent |
| Motifs | Spark, rail, ring, lamp, functional chips | Reuse where meaningful; do not force all five into every asset |

Use existing palette values before proposing new ones. Exact hex values above come from the supplied project notes, not screenshot sampling; verify them against the source tokens.

### Bang Motion reference and website adaptation

The confirmed reference is [bangtutorial/bang-motion](https://github.com/bangtutorial/bang-motion). Its documentation centers on browser motion graphics with a continuing subject or world, brand-derived art direction, and deliberate transitions. The following design proposals adapt those ideas to an accessible business website; they are not claims of full compliance with its video-output rules.

| Concept | Proposed visual structure | Assessment |
|---|---|---|
| **Signal becomes action — recommended** | Follow one business request through information, evaluation, human approval, and completion; each section adds meaning | Best fit with TechLamp's existing operating loop |
| One system, different scales | Expand a simple connected workspace into teams and then a coordinated organization | Strong supporting scene for the four audiences; avoid implying every customer must become a large enterprise |
| A working day, connected | Follow a customer enquiry through sales, operations, finance, and service | Useful for SME and business-application pages; narrower than the full home story |

Use the first concept as the main narrative and the second for the new audience section. Use the third for a practical SME illustration. In this website adaptation, keep the existing brand typography, normal document flow, accessible HTML, static reduced-motion states, and natural scrolling. Continuous camera movement, autoplay loops, soundtrack, and a single-file video page are not requirements for the site.

The signature moment is a visible **approval handoff**: the signal pauses at a person, then a short action path completes. This conveys how TechLamp works more clearly than a generic glowing AI orb. Keep the approved action visible in the static composition as well.

## 3. Narrative sequence

The supplied operating loop contains **eight distinct stages**, followed by a feedback connection:

**Signal → Analytics → Forecast → Optimize → Decide → Approve → Action → Outcome → feedback as a new Signal.**

The return to Signal closes the loop rather than adding a new distinct stage. The implementation must match the actual component's labels. Do not silently add, remove, or renumber business concepts for animation convenience.

Use one focal message per section. Preserve reading time and comfortable pauses. The transition is successful when the next idea feels connected, even with all animation disabled.

## 4. Home storyboard

| Section | Visitor takeaway | Visual and story handoff | Motion | Mobile / static state |
|---|---|---|---|---|
| H0 · Hero | “TechLamp connects intelligence to real decisions.” | Existing OS diagram gains one clear source of light; signal leaves toward the process below | One restrained activation; no perpetual breathing required | Fully formed diagram at rest; simplify peripheral details |
| H0A · Business stage | “There is a relevant starting point for a business like mine.” | One connected-work scene shown at startup, small-business, medium-company, and enterprise scales; each points to an appropriate existing route | User-triggered emphasis or one short progressive reveal; no forced auto-rotation | Four readable entries with static scenes or crops; all links remain available |
| H1 · Operating loop | “There is a repeatable path from signal to outcome.” | A rail connects the existing named stages, including approval and feedback | One signal progression with short node emphasis; permit path draw after performance review | Vertical sequence in reading order; all labels always visible |
| H2 · Three engines | “Analytics, optimization, and agentic engineering work together.” | Three spots show a lens clarifying patterns, a lattice comparing options, and a relay executing an approved step | Brief coordinated emphasis, not three competing loops | Stacked cards; same visual scale and complete static artwork |
| H3 · Operations at work | “This fits the way work actually happens.” | Tools feed signals into the system; a person approves; action returns to the workflow | One sequence ending at a visible outcome | Vertical stages, with approval retained |
| H4 · Platform stack | “It can connect with the systems we use.” | Layered scene extends the existing platform component; connections share the earlier rail language | Short layer alignment or signal pass; labels do not move away from content | Readable layers or ordered list; avoid tiny perspective labels |
| H5 · Approach, evidence and learning | “I can understand the method and distinguish examples from verified results.” | Before/after operating states; current concept cases explicitly identified; published evidence added only when available | Small focus shift; no mandatory dissolve that hides comparison | Both states and evidence label visible; no animated result counters for sample values |
| H6 · Consultation CTA | “I know what to do next.” | The signal resolves into a lit path beside the consultation action | Optional single settling motion | Calm completed scene; CTA readable and usable immediately |

Do not label every case study “illustrative” by default. Preserve the evidence status of each item: verified client evidence, example, illustrative scenario, or pending publication. Never convert a conceptual drawing into an implied measured result.

At the time of this review, the case-study listing identifies its entries as concept cases without published client results. Change the homepage link “See verified case studies” to a neutral label such as “Explore our approach” or “View case studies” until the destination contains verified material. Rewrite result-oriented CTA and featured-case wording to match the actual evidence status. Keep any sample metric's qualifier visibly adjacent; preferably explain the process without foregrounding fictional numeric improvements.

## 5. Interior-page system

| Page family | Illustration brief | Reuse and differentiation | Content dependency |
|---|---|---|---|
| Business Analytics | Show scattered information becoming a useful pattern | Expand the analytics spot into a hero scene and supporting process | Actual analytics offer and buyer questions |
| Operations Research | Show constraints and feasible alternatives becoming a considered choice | Expand the lattice motif without implying arbitrary optimization claims | Actual decisions, constraints, and outcomes |
| Agentic Engineering | Show an approved task passing through a bounded tool workflow | Reuse relay and human-approval motifs | Actual autonomy limits and integrations |
| Industries | Put the system inside a recognizable operational context | Reuse structure; change meaningful sector objects | Confirmed sectors and relevant workflows |
| Case Studies | Show the documented change from situation to intervention to outcome | Reusable layout with case-specific content | Approved facts, attribution, and evidence labels |
| Solutions | Show a problem, mapped approach, and expected outcome | Align with reported `JourneyStrip` / `SolutionFinder` | Actual solution taxonomy and scope |
| Services | Show the work each service performs | Shared framework with distinct operational objects | Confirm Odoo, Zoho, Cloud, and Data routes before creating variants |
| Contact | Reassure the visitor that a person will help define the next step | Lamp and human judgment echo the closing home scene | Actual contact process; do not promise unsupported response times |
| SME entry point | Show a practical first improvement in everyday work | New quote-to-invoice scene shares the home signal and approval motifs | Existing `/industries/smes` page; confirm detailed workflow with the business |
| Business Apps | Connect platform implementation to an understandable task | Pair Odoo/Zoho entry points with the practical workflow; avoid a wall of product logos | Current Odoo and Zoho service entry points; platform details need source review |

Inventory actual routes before creating per-industry or per-service artwork. Do not manufacture asset counts from wildcard filenames.

## 6. Motion specification

These are starting design targets, to be adjusted after browser review.

| Behavior | Initial target | Guardrail |
|---|---|---|
| Hover / focus feedback | 120–200 ms | Keyboard and touch equivalents where relevant |
| Scene emphasis or settling | 350–650 ms, gentle ease-out | Content is visible before enhancement |
| Short explanatory sequence | About 0.8–1.4 seconds | Trigger once per visit to the scene; no forced waiting |
| Scroll-linked progress | Limited to the local diagram | No wheel interception, mandatory pinning, or scroll trapping |
| Ambient motion | Off by default | Justify individually; avoid distraction and provide control when required |
| Reduced motion | Complete static composition | No pulses, parallax, traveling spark, or automated path drawing |

Prefer transforms and opacity. Path drawing is an intentional exception for explanatory rails, not a page-wide treatment. Pause nonessential work offscreen and when the page is hidden. Animate one focal group at a time.

Initialize from a readable static state. If animation setup throws, reveal the completed composition and clear temporary styles. Rebuild or invalidate geometry after responsive changes; clean up animation contexts during route transitions. Reuse the existing motion stack after checking its implementation.

Meaningful SVGs need an accessible name and nearby explanation; complex processes need an equivalent text sequence. Decorative SVGs must stay out of the accessibility tree. Motion and color must never be the only way information is conveyed.

## 7. Production phases and review

| Phase | Scope | Evidence required to complete |
|---|---|---|
| 0 · Verify | Public review completed for eight pages; inspect source, tools, skills, tokens, remaining routes, and existing behavior | SITE-REVIEW.md plus actual repository audit and version logs; phase remains incomplete |
| 1 · Establish | Motif kit, hero handoff, business-stage scene, loop rail, three engine spots | Integrated home slice makes all four audiences recognizable; contact sheet, reduced-motion state, local preview |
| 2 · Complete home | Operations, platform, evidence, CTA | A coherent home story at desktop and mobile sizes |
| 3 · Explain capabilities | Engine hero adaptations and process diagrams | Clear distinction between the three offers |
| 4 · Extend context | SME workflow first, then confirmed industry, case-study, service, and solution pages | Route-specific visuals grounded in actual content and evidence status |
| 5 · Finish and verify | Contact scene, continuity, accessibility, performance, build | Full review pack and final local preview |

Request feedback on the first coherent local slice, then incorporate it into subsequent work. Routine asset decisions do not require a new approval gate. A phase is complete only when its agreed acceptance criteria are met. Deployment and pushes remain blocked until the user explicitly approves them after local review.

## 8. Definition of done

- Visitors can identify the signal, transformation, human decision, action, and outcome without watching motion.
- Each of the four audiences can identify a relevant starting point without assuming the offering is exclusively for enterprises.
- Illustrations share a consistent shape, stroke, and color language and remain understandable at mobile size.
- Existing functionality, content integrity labels, and accessible HTML remain intact.
- Every integrated asset has an editable source, web export, manifest record, stable hooks, and review evidence.
- Repeated inline SVGs have unique IDs and valid references; optimized exports retain required targets.
- The site passes its relevant project checks and a real browser review; record failures and limitations honestly.
- The local review includes normal motion, reduced motion, refresh/back navigation, mobile layouts, and interaction checks.
- No deployment occurs before the user's local review and explicit approval.

## 9. Confirmed inputs and remaining dependency

Confirmed: the live site, the exact Bang Motion repository, and all four business-size audiences. No further audience clarification is required to refine the documents.

Before implementation and a working local preview, obtain the website repository or project archive, including `design/`, application source, `package.json`, and lockfile. The public URL supports review but does not provide editable source or verify local tooling. The draft retains calm editorial motion, the warm brand palette, and a whole-site rollout beginning with the home page.
