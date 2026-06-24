#!/usr/bin/env bash
set -euo pipefail

# ── Node.js toolchain ─────────────────────────────────────────────────────────
corepack enable
npx playwright install --force --with-deps chromium webkit

# ── Web fonts ─────────────────────────────────────────────────────────────────
# Playwrightのスクリーンショットで正確なフォントレンダリングを行うために
# プロジェクトで使用するカスタムフォントをシステムにインストールする。
#   - Source Sans 3      : Source Sans Pro の後継
apt-get install -y --no-install-recommends fontconfig unzip

FONT_DIR="/usr/local/share/fonts/truetype/project-fonts"
mkdir -p "$FONT_DIR"

BASE="https://github.com/google/fonts/raw/main/ofl"
curl -sSL "${BASE}/sourcesans3/SourceSans3%5Bwght%5D.ttf" -o "${FONT_DIR}/SourceSans3.ttf"

# Last Resort Font - Unicode未対応グリフの代替表示（フォールバック最終段）
curl -sSfL "https://github.com/unicode-org/last-resort-font/releases/latest/download/LastResortHE-Regular.ttf" \
  -o "${FONT_DIR}/LastResortHE-Regular.ttf"

fc-cache -fv
