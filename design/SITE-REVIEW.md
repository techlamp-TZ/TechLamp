# TechLamp — Live-site review and design implications

Reviewed: 20 November 2026 · Public browser review · Revision 2

## Scope and evidence

The user supplied [TechLamp](https://techlamp.co.tz/) and [Bang Motion](https://github.com/bangtutorial/bang-motion), and confirmed startups, small businesses, medium-sized companies, and large companies as the audience.

Eight public pages were opened. Page content was inspected in the browser; desktop screenshots were used to inspect the home, solutions, and SME compositions. No form was submitted. This was not a full-site crawl, mobile/responsive test, animation timing audit, accessibility audit, source review, or performance measurement. The live site was not changed.

| Opened page | Observed content | Design implication / proposed response |
|---|---|---|
| [Home](https://techlamp.co.tz/) | Warm canvas, bold brand headline, central OS diagram, eight-stage operating loop, three engines, operational examples, platform stack, evidence/learning, consultation links | Preserve the working narrative. Add an early business-stage entry point and show meaningful visual handoffs |
| [Capabilities](https://techlamp.co.tz/capabilities) | Ten practices, each with a business problem, services, outcomes, and related capabilities | Do not reduce TechLamp's full offering to only the three featured home engines |
| [Solutions](https://techlamp.co.tz/solutions) | Eight problem areas, connected journey, and a focus-area finder | Keep problem-led exploration alongside audience-stage exploration |
| [Business Apps](https://techlamp.co.tz/business-apps) | Odoo and Zoho implementation entries and links to their service pages | Explain a practical daily workflow and connect it to these existing entry points |
| [Industries](https://techlamp.co.tz/industries) | Twelve directory entries, technology filters, operating chains; SMEs included in the directory | Keep sector and business stage conceptually separate; preserve existing routes initially |
| [SMEs](https://techlamp.co.tz/industries/smes) | Resource constraints, a generic modernization chain, related cloud/apps capabilities, and pending case studies | Replace abstract treatment with a recognizable workflow and a clearer starting point; no new SME route needed |
| [Case Studies](https://techlamp.co.tz/case-studies) | Four concept entries; the page explicitly says these are not named-client results | Use scenario diagrams with visible evidence labels; avoid presenting sample figures as achieved results |
| [Talk to an Expert](https://techlamp.co.tz/talk-to-an-expert) | Guided discovery with up to nine steps; first step offers technology categories and a “Not Sure Yet” option | Keep the uncertainty-friendly path; introduce useful context before the form without adding an extra required step |

Only the first discovery step was inspected. Later form behavior, submission, data storage, and routing were not tested. Industry-detail links other than SMEs and Odoo/Zoho service-detail content were not reviewed.

## Findings in priority order

### 1. Make the audience visible before explaining the full system

**Observation:** the homepage introduces an intelligence operating model, multiple specialist disciplines, and an enterprise operating stack. It does not present four explicit business-size entry points in its current content.

**Design judgment:** a visitor with a small immediate problem may find it difficult to identify a manageable starting point. This is an interpretation of the presentation, not a measured conversion result.

**Proposal:** introduce four readable entry points below the hero: startup, small business, medium-sized company, and large enterprise. Use one visual system with different work contexts. Preserve a route based on the problem to solve. Do not turn the homepage into four competing brands or four compulsory sales funnels.

### 2. Use familiar work to explain technical capability

**Observation:** Business Apps provides practical Odoo/Zoho entry points; the capabilities page describes concrete work such as reporting, scheduling, systems integration, and governed automation.

**Proposal:** show a customer enquiry, quote, human approval, order, and invoice as an illustrative SME sequence. Show coordinated planning across teams for a medium company and governed information exchange for a large organization. Link each scenario to the relevant actual service. Do not associate advanced capability exclusively with company size.

### 3. Give the SME page a specific visual story

**Observation:** the SME page uses a generic business/core-systems/cloud/automation/growth chain and repeats industry-oriented framing.

**Proposal:** retain its URL, improve its business-stage framing, and replace generic growth symbolism with a daily-work scene. A dedicated original workflow illustration is more useful here than a rocket, a stock office scene, or a miniature city. Keep the scenario explicitly illustrative unless it is tied to an approved case.

### 4. Align evidence language across the journey

**Observation:** the homepage has a “See verified case studies” link. The linked listing says its entries are concept cases and marks them as illustrative or pending publication. Its closing heading also uses results-oriented language.

**Proposal:** use neutral navigation such as “View case studies” and a CTA such as “Discuss a similar challenge.” Rewrite the featured home example so it describes an illustrative approach rather than sounding like an achieved client outcome. Keep sample-value labels adjacent, and avoid counters or dramatic before/after metrics that overpower the disclaimer.

This is a content-clarity correction based on the reviewed pages. It does not establish whether unpublished client results exist elsewhere.

### 5. Translate the reference into website behavior

**Reference observed:** Bang Motion's repository describes browser motion pieces, continuity, brand-derived art direction, and purposeful transitions. Its standalone delivery assumptions differ from a multi-page marketing site.

**Proposal:** use a recurring signal and a visible approval handoff to connect locally scoped scenes. Keep TechLamp's identity, static content, document semantics, reading time, and natural scrolling. Apply the reference's visual reasoning where it improves understanding; do not import a video player's timing model into the whole website.

## First local review: intended contents

1. Home hero and a new four-audience entry point.
2. One integrated signal-to-approval-to-action sequence using existing sections.
3. Three coordinated engine spots.
4. A contact sheet showing the motifs and audience scene at desktop and mobile sizes.
5. A static/reduced-motion view and a list of what was actually tested.

The SME workflow follows in the first interior-page pass. The final local review must cover all changed routes, not just these early examples. The public website is a reference, not the promised preview of local changes.

## Remaining implementation dependency

Provide the website repository or a project ZIP containing source, `package.json`, lockfile, and the existing `design/` directory. Do not include secrets or production environment files. This is needed to inspect instructions, install the requested toolchain in the correct project, create editable artwork, integrate changes, and start an actual local development server.

No source code was modified, no design software was installed, no artwork was produced, and no deployment was performed in this documentation revision.

## Reference sources

- The eight TechLamp page links above: browser observations on 20 November 2026.
- [Bang Motion README](https://github.com/bangtutorial/bang-motion): motion-purpose and delivery reference.
- [Bang Motion skill page](https://github.com/bangtutorial/bang-motion/blob/main/SKILL.md): reference principles; this review does not certify a complete installation or audit of the repository.
