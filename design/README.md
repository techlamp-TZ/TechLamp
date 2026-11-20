# TechLamp — Design toolchain & asset workflow

Revision 2: 20 November 2026 · Live-site review incorporated · Source verification pending

Create editable vector artwork in Inkscape, export predictable web assets, and integrate motion that helps visitors understand TechLamp. Review the working website locally before deployment.

This guide accompanies [the storytelling plan](PLAN.md), [the asset manifest](MANIFEST.md), [the live-site review](SITE-REVIEW.md), and [the implementation prompt](IMPLEMENTATION-PROMPT.md). Paths in commands are relative to the website repository unless stated otherwise.

## 1. Evidence and current status

The supplied notes report a working Docker image and an existing Next.js website. Eight public pages at [techlamp.co.tz](https://techlamp.co.tz/) were reviewed in the browser for this revision; see SITE-REVIEW.md for exact coverage. The Dockerfile, export script, application source, and installed skills remain unavailable. Their behavior has **not been independently verified here**. The commands below are implementation guidance, not a record of successful execution.

| Component | Version reported in the supplied notes | Role / verification needed |
|---|---|---|
| Inkscape | 1.2.2 (b0a8486541, 2022-12-01) | Authoring and SVG/PNG export; capture actual version output |
| Scour | 0.38.2 | SVG optimization; confirm available flags |
| rsvg-convert | 2.58.0 | Optional raster fallback; compare rendering with Inkscape |
| Fonts | Inter 4.0 and Display, JetBrains Mono, DejaVu | Confirm exact font files, versions, weights, and licenses |
| Docker | 29.9.3 on Windows 11, Linux containers | Confirm client, server, context, and architecture |
| Application runtime | Node 24 / npm 11 | Confirm against project engines and lockfile |
| Image | `techlamp-inkscape:1` | Record image ID/digest; a tag alone does not pin its contents |
| Claude Design Skillstack | No installation evidence supplied | Install requested relevant skills and record repository commit |
| CLI-Anything Inkscape skill and CLI | No installation evidence supplied | Verify skill discovery and executable separately |
| Bang Motion | Public reference and skill page reviewed; no installation evidence | Use as a motion reference; record installed version/commit if used in production |

Installing Inkscape does not install the requested skills. Existing design skills may complement those installations; they do not establish that the requested packages are present. The user has confirmed startups, small businesses, medium-sized companies, and large companies as the intended audience.

## 2. File ownership and directory contract

| Path | Purpose | Editing rule |
|---|---|---|
| `design/README.md` | Toolchain, export, integration, and review workflow | Update when the workflow changes |
| `design/PLAN.md` | Story, visual language, storyboard, acceptance criteria | Keep decisions aligned with actual content |
| `design/MANIFEST.md` | Asset inventory, status, hooks, and QA evidence | Update with each asset change |
| `design/docker/Dockerfile` | Reproducible authoring environment | Inspect existing file before changing |
| `design/scripts/export.sh` | Batch export entry point | Existing behavior must be audited; not included in this documentation pack |
| `design/masters/` | Editable Inkscape SVGs | Authoritative art sources; never overwrite with flattened exports |
| `design/projects/` | CLI-Anything JSON state, when used | Retain beside its corresponding master; choose one editing source per work session |
| `design/web/` | Optimized SVG exports | Regenerate from masters |
| `design/raster/` | Necessary PNG exports | Regenerate; record intended CSS size |
| `design/review/` | Contact sheets and local review evidence | Keep out of public output unless intentionally needed |
| `design/toolchain-lock.md` | Exact versions, font checksums, skill commits, verification results | Create during environment verification |
| `public/illustrations/` | Static SVGs served at `/illustrations/...` | Copy only approved exports; no masters or working JSON |

Animated inline SVGs may need generated components or modules in the application's existing asset directory. Confirm that location from the repository. A file in `public/illustrations/` is an export artifact, not automatically an inline component.

Use lowercase kebab-case names. Include an asset-specific prefix in every meaningful ID, for example `tl-loop-rail-track` and `tl-engine-analytics-signal`. Name layers by purpose: structure, connections, signal, labels, and foreground.

## 3. Build and verify the environment

Run from the project root after inspecting the existing Dockerfile:

```bash
docker build -t techlamp-inkscape:1 design/docker
docker version
docker image inspect techlamp-inkscape:1 --format '{{.Id}}'
docker run --rm --entrypoint bash techlamp-inkscape:1 -lc '
  set -euo pipefail
  inkscape --version
  scour --version
  rsvg-convert --version
  fc-match Inter
  fc-match "JetBrains Mono"
  fc-match DejaVu
'
```

Inspect the font matches: a successful `fc-match` may still report a fallback font. Save the outputs and check the actual font files. Keep license notices with the relevant sources.

For reproducible builds, record the base-image digest, OS package versions and package source, Python dependency versions, font checksums, and skill repository commits. Pin downloads and dependencies in the Dockerfile or lockfiles. Retain the tested image if historical packages are no longer rebuildable. Do not describe a build as reproducible until a clean rebuild and representative export have been compared.

### Requested skill installations

1. Inspect [Claude Design Skillstack](https://github.com/freshtechbro/claudedesignskills) and install the design/motion skills relevant to this project's stack. The repository documents Claude Code marketplace installation and local skill extraction. Use an installation route supported by the actual coding agent. Record selected skills, install paths, and source commit.
2. Read the requested [CLI-Anything Inkscape skill](https://github.com/HKUDS/CLI-Anything/blob/main/skills/cli-anything-inkscape/SKILL.md). Install its skill files where the agent discovers skills and install the CLI runtime separately. Its documented prerequisites include Python 3.10+ and Inkscape. Resolve and pin a tested package version or source commit rather than leaving a floating install.
3. Verify `cli-anything-inkscape --help`, create a test document, save its state, export an SVG, and render it with Inkscape. Confirm the coding agent can discover and read both requested skill installations.
4. The user supplied [Bang Motion](https://github.com/bangtutorial/bang-motion) as the motion reference. Its native deliverable is a browser-based motion piece. For this website, apply the adaptation in PLAN.md; do not replace the Next.js application with a standalone autoplaying page. If installing it during implementation, use one supported installation method, record the revision, and avoid duplicate copies of the same skill.

Keep runtime dependencies in the authoring container where appropriate and agent instructions in the agent's supported skill directory. No new permission request is needed merely to restate the previously requested installation scope. Report an actual access or compatibility blocker if one occurs.

## 4. Windows / Git Bash mounts

The supplied notes report a Git Bash path-conversion problem. Use their established `MSYS_NO_PATHCONV=1` and `C:/...` convention. Prefer an explicit bind mount: Docker normally errors when a `--mount` source does not exist, whereas `-v` can create a directory and hide a path mistake.

```bash
PROJ='C:/Users/seles/Pictures/techlamp.co.tz'
test -d "$PROJ/design/masters"

MSYS_NO_PATHCONV=1 docker run --rm \
  --mount "type=bind,source=$PROJ/design,target=/work" \
  --entrypoint bash techlamp-inkscape:1 -lc '
    set -euo pipefail
    test -d /work/masters
    ls -la /work/masters
  '
```

Confirm a known master is visible before exporting. These are **Git Bash commands**, not PowerShell commands. On Linux or macOS use the actual absolute project path and omit `MSYS_NO_PATHCONV=1`.

## 5. Export policy

Maintain live, editable text in masters. Flatten only short artwork labels in web exports when font independence is needed. Keep headings, body copy, buttons, metrics, and essential diagram explanations in accessible HTML. Outlined text does not provide a text alternative.

### SVG export: conservative default

Replace `NAME` with an existing master basename. This example deliberately leaves ID stripping and shortening disabled. Optimize more aggressively only after verifying all animation, style, clipping, gradient, and accessibility references.

```bash
PROJ='C:/Users/seles/Pictures/techlamp.co.tz'

MSYS_NO_PATHCONV=1 docker run --rm \
  --mount "type=bind,source=$PROJ/design,target=/work" \
  --entrypoint bash techlamp-inkscape:1 -lc '
    set -euo pipefail
    name=NAME
    test -f "/work/masters/$name.svg"
    mkdir -p /work/web
    tmpdir=$(mktemp -d)
    trap '\''rm -rf "$tmpdir"'\'' EXIT

    inkscape "/work/masters/$name.svg" \
      --export-type=svg --export-text-to-path --export-plain-svg \
      --export-filename="$tmpdir/raw.svg"

    scour -i "$tmpdir/raw.svg" -o "$tmpdir/optimized.svg" \
      --enable-comment-stripping --remove-metadata \
      --no-line-breaks --strip-xml-prolog

    test -s "$tmpdir/optimized.svg"
    cp "$tmpdir/optimized.svg" "/work/web/$name.svg"
  '
```

This command writes a candidate web export; it does not approve it or copy it into the application. Inspect group structure and hooks even with conservative optimization. Keep attribution separately if it was carried in comments or metadata.

For assets proven compatible with ID optimization, use all three flags together:

```text
--enable-id-stripping --shorten-ids --protect-ids-prefix=tl-
```

Protect additional referenced IDs explicitly where needed. Prefix protection alone does not verify DOM structure, CSS selectors, accessible names, or uniqueness across repeated inline instances. Test the final export in its real component.

### PNG export when required

```bash
PROJ='C:/Users/seles/Pictures/techlamp.co.tz'

MSYS_NO_PATHCONV=1 docker run --rm \
  --mount "type=bind,source=$PROJ/design,target=/work" \
  --entrypoint bash techlamp-inkscape:1 -lc '
    set -euo pipefail
    mkdir -p /work/raster
    inkscape /work/masters/NAME.svg \
      --export-area-page --export-type=png --export-width=1200 \
      --export-filename=/work/raster/NAME@2x.png
  '
```

The example assumes a 600 CSS-pixel display width; 1200 pixels supplies a 2× export. Choose dimensions from actual use. A 192-DPI export is only meaningfully “2×” relative to the SVG's 96-DPI nominal size, not every responsive display size.

### Batch export contract

Audit or implement `design/scripts/export.sh` to fail on missing inputs and tool errors, handle filenames safely, preserve masters, stage outputs before replacing working exports, and process only documented asset variants. It must validate the required hooks and publish only the selected assets to `public/illustrations/`. Remove stale outputs only through an explicit asset list; do not broadly delete unrelated files.

## 6. Browser integration contract

| Use | Delivery | Requirements |
|---|---|---|
| Static decorative artwork | External SVG via image element | Empty alt; reserve layout space |
| Static meaningful illustration | External SVG via image element | Useful alt plus nearby explanation when needed |
| Animated internal paths/groups | Inline SVG or generated component | Component-scoped selectors; unique per-instance IDs |
| Complex process diagram | SVG plus HTML explanation | Logical reading order and complete static state |

Do not expect page JavaScript to select internal paths inside an SVG loaded with `<img>`. For inline copies, rewrite IDs and all references together, including `url(#...)`, `href`, masks, clip paths, gradients, and ARIA references. Scoping selectors alone does not prevent duplicate-ID collisions.

Prefer transform and opacity for motion. Allow short path-draw effects where they explain a process; measure their cost. Do not impose a “transform only” rule and then require stroke-dash animations without acknowledging that exception.

Render understandable content before animation initializes. Reduced motion, failed initialization, fast scrolling, back navigation, and resized layouts must leave a complete illustration and readable copy. Clean up listeners and animation timelines on unmount. Do not add another scrolling or animation library until the existing integration has been checked.

## 7. Local review and release

Inspect `package.json` first. Use its actual scripts and package manager. The supplied notes mention Next.js, a webpack build constraint, Playwright smoke tests, and axe; verify these before choosing commands or reporting results.

Where an npm lockfile and the named scripts are confirmed, the expected local workflow is:

```bash
npm ci
npm run dev
```

Use the URL printed by the server. Record the route, port, and restart command; do not assume port 3000 is available. Bind to localhost for a local preview. Provide the appropriate forwarded URL if the editor runs remotely.

Each review handoff contains the actual preview URL, asset contact sheet, desktop/mobile screenshots, changed routes, known issues, and results of the checks performed. Suggested viewport checks: 390, 768, and 1440 CSS pixels, plus narrow-width overflow and enlarged text. Exercise keyboard navigation, reduced motion, refresh at a deep scroll position, route changes, and repeated inline assets.

**Release condition:** required assets pass visual and functional review; the project build succeeds; the user reviews the local site and explicitly approves deployment. Until then, do not deploy, publish, or push changes. The public-site review is not a local preview of changes. This documentation revision neither starts the application nor installs tools.

## 8. Technical references

- [Docker bind mounts](https://docs.docker.com/engine/storage/bind-mounts/) — bind-mount syntax and missing-source behavior.
- [Scour project history](https://github.com/scour-project/scour/blob/master/HISTORY.md) — ID protection and shortening support; confirm flags with the installed version's help.
- [Inkscape export option implementation](https://inkscape.gitlab.io/inkscape/doxygen/inkscape-application_8cpp_source.html) — text-to-path export; validate behavior on the project's recorded 1.2.2 build.

Sources checked for this revision on 20 November 2026. Documentation lookup is not a substitute for running the project-specific checks.
