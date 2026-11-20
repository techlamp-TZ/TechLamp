#!/usr/bin/env bash
# Toolchain verification — run inside techlamp-inkscape:1 with design/ mounted at /work.
# Usage (Git Bash):
#   MSYS_NO_PATHCONV=1 docker run --rm --mount "type=bind,source=C:/Users/seles/Pictures/techlamp.co.tz/design,target=/work" \
#     --entrypoint bash techlamp-inkscape:1 /work/scripts/toolcheck.sh
set -euo pipefail

echo "## Tool versions"
echo "inkscape: $(inkscape --version 2>/dev/null)"
echo "scour:    $(scour --version 2>/dev/null)"
echo "rsvg:     $(rsvg-convert --version 2>/dev/null)"
echo "python:   $(python3 --version 2>/dev/null || echo none)"
echo "fontconfig: $(fc-match --version 2>/dev/null | head -1)"

echo
echo "## Font resolution (family -> resolved file)"
for fam in "Inter" "Inter Display" "JetBrains Mono" "DejaVu Sans"; do
  printf '%-16s -> %s\n' "$fam" "$(fc-match "$fam" 2>/dev/null)"
done

echo
echo "## Font inventory (sha256 of each installed brand font file)"
for dir in /usr/share/fonts/truetype/inter /usr/share/fonts/truetype/jetbrains-mono /usr/share/fonts/truetype/dejavu; do
  if [ -d "$dir" ]; then
    find "$dir" -name '*.ttf' -print0 | sort -z | xargs -0 -r sha256sum
  fi
done
