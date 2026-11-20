# TechLamp design toolchain — reproducible Inkscape + fonts for headless SVG work.
# Build:  docker build -t techlamp-inkscape:1 design/docker
# Usage:  see design/README.md
FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive \
    LANG=C.UTF-8

# Inkscape (vector authoring + headless export), fontconfig, optimisation + raster tooling.
RUN apt-get update && apt-get install -y --no-install-recommends \
      inkscape \
      fontconfig \
      fonts-jetbrains-mono \
      fonts-dejavu-core \
      scour \
      librsvg2-bin \
      ca-certificates \
      curl \
      unzip \
 && rm -rf /var/lib/apt/lists/*

# Inter (brand sans) — pinned release, non-fatal if the network blocks it so the
# image still builds; text in exported assets is converted to paths regardless.
RUN set -eux; \
    mkdir -p /usr/share/fonts/truetype/inter; \
    ( curl -fsSL -o /tmp/inter.zip \
        https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip \
      && unzip -o -j /tmp/inter.zip 'extras/ttf/*.ttf' -d /usr/share/fonts/truetype/inter \
      && rm -f /tmp/inter.zip ) || echo "Inter download skipped (offline build)"; \
    fc-cache -f

WORKDIR /work
# Default: print versions so `docker run --rm techlamp-inkscape:1` verifies the toolchain.
CMD ["bash", "-lc", "inkscape --version && scour --version && rsvg-convert --version"]
