# TechLamp — Toolchain lock & verification record

Verified: 2026-11-20 · Host: Windows 11 Pro (10.0.26300), Git Bash + Docker Desktop.
Produced by running [`scripts/toolcheck.sh`](scripts/toolcheck.sh) inside the image.
This file records **actual verification output**, not reported values.

## Docker

| Field | Value |
|---|---|
| Client | 29.9.3 |
| Server | 29.9.3 |
| Server OS / arch | linux / amd64 |
| Image tag | `techlamp-inkscape:1` |
| Image ID (local digest) | `sha256:a1e5d375826b6f1ea40c71475461531a8f03732d47d6033ddbd11710bdbf1fee` |
| Base image | `ubuntu:24.04` (pulled during build; not separately tagged, so no RepoDigest captured) |

> **Reproducibility caveat:** the base image is referenced by tag, not by digest, and apt
> package versions are not pinned, so a future rebuild may differ. The tested image ID
> above pins *these* contents. For a fully reproducible rebuild, pin `ubuntu@sha256:…` and
> apt versions in the Dockerfile. Until a clean rebuild + representative export are compared,
> treat the image — not the Dockerfile — as the authority.

## Tools (verified in container)

| Tool | Version |
|---|---|
| Inkscape | 1.2.2 (b0a8486541, 2022-12-01) |
| scour | 0.38.2 |
| rsvg-convert | 2.58.0 |
| Python | 3.12.3 |

## Fonts (resolved + checksummed)

`fc-match` resolves each brand family to its own file (no silent fallback):

| Family requested | Resolved file |
|---|---|
| Inter | `Inter-Regular.ttf` → "Inter" "Regular" |
| Inter Display | `InterDisplay-Regular.ttf` → "Inter Display" "Regular" |
| JetBrains Mono | `JetBrainsMono-Regular.ttf` → "JetBrains Mono" "Regular" |
| DejaVu Sans | `DejaVuSans.ttf` → "DejaVu Sans" "Book" |

Key file checksums (SHA-256); full inventory is reproducible via `scripts/toolcheck.sh`:

```
64f8be6e55c37e32ef03da99714bf3aa58b8f2099bfe4f759a7578e3b8291123  Inter-Regular.ttf
1cb7b997bd7a39ee151752946809bbef50648aa05ff50a855ef642886a57e1db  InterDisplay-Regular.ttf
bb03b32b13f66bb799975d478d3725fbed9101728d46ffda995e87d7847fda2d  JetBrainsMono-Regular.ttf
ae7b7855e115a5966d8b1b3f80f254ccc117ec86f9965e202ee2940453837280  DejaVuSans.ttf
```

Font licenses: Inter (OFL-1.1, rsms/inter v4.0), JetBrains Mono (OFL-1.1, apt
`fonts-jetbrains-mono`), DejaVu (Bitstream Vera / public-domain derivative, apt
`fonts-dejavu-core`). Brand labels in web exports are converted to paths, so the runtime
does not depend on these fonts.

## Pipeline sanity (earlier this session)

A round-trip was verified before this record: a sample master exported to PNG @2× via
Inkscape and optimized via scour with the correct Windows mount
(`MSYS_NO_PATHCONV=1` + `--mount type=bind,source=C:/…`). Test artifacts were removed.

## Mount convention (Windows / Git Bash)

```bash
MSYS_NO_PATHCONV=1 docker run --rm \
  --mount "type=bind,source=C:/Users/seles/Pictures/techlamp.co.tz/design,target=/work" \
  --entrypoint bash techlamp-inkscape:1 /work/scripts/toolcheck.sh
```

The `-v "/c/…"` form silently mounts an **empty** dir under MSYS and must not be used.

## Requested skills — status (honest)

| Item | Status |
|---|---|
| Inkscape (HKUDS cli-anything-inkscape *capability*) | **Delivered** via Docker image above; Python 3.12 present for the CLI runtime if installed. |
| `cli-anything-inkscape` CLI package | **Not installed.** Authoring uses Inkscape CLI directly; the package is optional convenience. Install + pin only if we adopt its JSON project state. |
| `freshtechbro/claudedesignskills` | **Not installed as external repo.** This environment already exposes extensive first-party design/motion skills (frontend-design, high-end-visual-design, motion-ui/-patterns, dataviz, ui-ux-pro-max, awwwards…). Can install the external repo on request after inspecting its install scripts. |
| Bang Motion (`bangtutorial/bang-motion`) | Used as a **motion doctrine reference** (see PLAN.md §2), not installed. Native output is a standalone video-like page, which the brief says not to ship. |

No external install scripts have been fetched or executed. If you want the two external
skill repos formally installed, say so and I'll fetch, inspect, pin a revision, and record it here.
