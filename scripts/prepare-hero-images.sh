#!/usr/bin/env bash
# 从一张原图生成首页背景的全部 WebP 素材。
# 用法：./scripts/prepare-hero-images.sh [原图路径]
# 默认原图：design/hero-source.png；依赖 ffmpeg（需带 libwebp 编码器）。
set -euo pipefail

cd "$(dirname "$0")/.."

SOURCE="${1:-design/hero-source.png}"
OUT_DIR="public/images"

# 手机端裁切参数：宽:高:x:y（源图像素坐标）。
# 本图人物在画面右侧、面部约在 (1150, 170)，所以裁右半幅做竖构图。
# 换背景图后，先确认人物面部坐标，再改这里；也可用环境变量临时覆盖：
#   MOBILE_CROP=700:940:850:0 ./scripts/prepare-hero-images.sh 新图.png
MOBILE_CROP="${MOBILE_CROP:-620:940:780:0}"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "未找到 ffmpeg，请先安装（需支持 libwebp）。" >&2
  exit 1
fi
if [ ! -f "$SOURCE" ]; then
  echo "找不到原图：$SOURCE" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"

# 桌面完整构图（1672×940，约 190 KB）
ffmpeg -hide_banner -loglevel error -y -i "$SOURCE" \
  -vf "scale=1672:940:flags=lanczos" \
  -c:v libwebp -quality 82 -compression_level 6 \
  "$OUT_DIR/hero-night.webp"

# 桌面小尺寸（1280×720，用于窄屏 / 高压缩比场景）
ffmpeg -hide_banner -loglevel error -y -i "$SOURCE" \
  -vf "scale=1280:720:flags=lanczos" \
  -c:v libwebp -quality 80 -compression_level 6 \
  "$OUT_DIR/hero-night-1280.webp"

# 手机竖构图（约 780×1183，裁切后轻微放大以适配高 DPI 屏幕）
ffmpeg -hide_banner -loglevel error -y -i "$SOURCE" \
  -vf "crop=${MOBILE_CROP},scale=780:-2:flags=lanczos" \
  -c:v libwebp -quality 82 -compression_level 6 \
  "$OUT_DIR/hero-night-mobile.webp"

# 极小的模糊占位图（加载主背景前显示，约 300 B）
ffmpeg -hide_banner -loglevel error -y -i "$SOURCE" \
  -vf "scale=32:18:flags=lanczos" \
  -c:v libwebp -quality 60 \
  "$OUT_DIR/hero-lqip.webp"

echo "已生成："
ls -lh "$OUT_DIR"/hero-*.webp
