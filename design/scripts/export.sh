#!/usr/bin/env bash
# Batch export: design/masters/*.svg -> design/web/*.svg (optimized) and publish to
# public/illustrations/. Run inside techlamp-inkscape:1 with the PROJECT ROOT at /work:
#
#   MSYS_NO_PATHCONV=1 docker run --rm \
#     --mount "type=bind,source=C:/Users/seles/Pictures/techlamp.co.tz,target=/work" \
#     --entrypoint bash techlamp-inkscape:1 /work/design/scripts/export.sh
#
# Preserves masters, flattens text to paths, protects tl- IDs, and publishes only the
# assets listed below. Fails on a missing master or tool error.
set -euo pipefail

ROOT=/work
MASTERS="$ROOT/design/masters"
WEB="$ROOT/design/web"
PUB="$ROOT/public/illustrations"
mkdir -p "$WEB" "$PUB"

SCOUR_FLAGS=(--enable-comment-stripping --remove-metadata --no-line-breaks
             --strip-xml-prolog --enable-id-stripping --shorten-ids --protect-ids-prefix=tl-)

# optimise RAW_SVG -> OUT_SVG
optimize() { scour -i "$1" -o "$2" "${SCOUR_FLAGS[@]}" >/dev/null; test -s "$2"; }

# export a whole master: NAME -> web/NAME.svg + public/illustrations/NAME.svg
export_whole() {
  local name="$1" master="$MASTERS/$1.svg" raw
  test -f "$master" || { echo "MISSING master: $master" >&2; return 1; }
  raw="$(mktemp -d)/raw.svg"
  inkscape "$master" --export-type=svg --export-text-to-path --export-plain-svg \
           --export-filename="$raw" 2>/dev/null
  optimize "$raw" "$WEB/$name.svg"
  cp "$WEB/$name.svg" "$PUB/$name.svg"
  printf '  %-34s %6s bytes\n' "$name.svg" "$(wc -c < "$PUB/$name.svg")"
}

# export one object by id from a master: MASTER_NAME ID OUT_NAME
export_id() {
  local master="$MASTERS/$1.svg" id="$2" out="$3" raw
  test -f "$master" || { echo "MISSING master: $master" >&2; return 1; }
  raw="$(mktemp -d)/raw.svg"
  # --export-id sets the export area to that object's bbox; do NOT add
  # --export-area-drawing (it overrides the crop and keeps the full canvas).
  inkscape "$master" --export-id="$id" --export-id-only \
           --export-type=svg --export-text-to-path --export-plain-svg \
           --export-filename="$raw" 2>/dev/null
  optimize "$raw" "$WEB/$out.svg"
  cp "$WEB/$out.svg" "$PUB/$out.svg"
  printf '  %-34s %6s bytes\n' "$out.svg" "$(wc -c < "$PUB/$out.svg")"
}

echo "Engine spots:"
export_whole engine-analytics
export_whole engine-or
export_whole engine-agentic

echo "Business-at-every-stage (per audience):"
export_id business-at-every-stage tl-business-at-every-stage-startup    bes-startup
export_id business-at-every-stage tl-business-at-every-stage-small      bes-small
export_id business-at-every-stage tl-business-at-every-stage-medium     bes-medium
export_id business-at-every-stage tl-business-at-every-stage-enterprise bes-enterprise

echo "SME quote-to-invoice (per stage):"
export_id sme-quote-to-invoice tl-sme-quote-to-invoice-request  sme-enquiry
export_id sme-quote-to-invoice tl-sme-quote-to-invoice-quote    sme-quote
export_id sme-quote-to-invoice tl-sme-quote-to-invoice-approval sme-approval
export_id sme-quote-to-invoice tl-sme-quote-to-invoice-order    sme-order
export_id sme-quote-to-invoice tl-sme-quote-to-invoice-invoice  sme-invoice

echo "Done. Published to public/illustrations/."
