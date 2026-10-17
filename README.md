# 刘昊岳 · 个人学术网站

用 [Astro](https://astro.build) 构建的静态个人学术网站。内容全部放在 Markdown 与数据文件里，改内容不需要碰页面代码。

## 本地预览

```bash
npm install     # 首次运行
npm run dev     # http://localhost:4321
```

## 构建与预览构建结果

```bash
npm run build   # 输出到 dist/
npm run preview # 本地预览 dist/
```

## 内容怎么改

| 想改什么 | 改哪里 |
| --- | --- |
| 姓名、身份、邮箱、链接、导航、页脚 | `src/data/site.ts` |
| 首页「研究方向」 | `src/data/research.ts` |
| 首页「近期动态」 | `src/data/news.ts` |
| 项目 | `src/content/projects/<文件名>.md`（文件名即网址） |
| 学术成果 | `src/content/publications/<文件名>.md` |
| 笔记 | `src/content/notes/<文件名>.md`（文件名即网址） |
| 首页「讲义与资料」 | 文件放 `public/files/`，条目写 `src/data/site.ts` 的 `resources` 数组 |
| 配色 / 版式 / 字体 | `src/styles/global.css` 顶部变量区 |
| 首页背景图 | `public/images/hero-night*.webp`；原始图放 `design/hero-source.png`，见下文「换背景图」 |

约定：占位文字统一是 `［待补充：……］`（`grep -rn 待补充 src/` 可全部找出）；
草稿把 frontmatter 的 `draft` 设为 `true` 就不会发布；笔记正文支持 Markdown 表格、代码块、图片。

## 换背景图

首页是「一张主视觉 + 玻璃面板」的结构，背景素材共 4 个文件，全部由脚本生成：

| 文件 | 用途 |
| --- | --- |
| `public/images/hero-night.webp` | 桌面完整构图（1672×940） |
| `public/images/hero-night-1280.webp` | 桌面小尺寸 |
| `public/images/hero-night-mobile.webp` | 手机竖构图（从原图右侧裁出人物） |
| `public/images/hero-lqip.webp` | 加载前的模糊占位色块 |

换图步骤：

1. 把新原图放到 `design/hero-source.png`（或任意路径）。
2. 运行脚本重新生成 4 个 WebP：
   ```bash
   ./scripts/prepare-hero-images.sh                    # 用默认原图
   ./scripts/prepare-hero-images.sh 新背景图.png        # 用指定原图
   ```
   脚本需要 `ffmpeg`（带 libwebp）。桌面版输出固定为 1672×940，构图不合适时改脚本里的
   `scale` 参数，并在 `src/styles/global.css` 里调整 `.home-hero h1` 附近的文字遮罩。
3. 手机版裁切由脚本开头的 `MOBILE_CROP=宽:高:x:y` 控制。先找到新图中人物面部的像素坐标，
   再调整裁切窗口；也可临时覆盖：`MOBILE_CROP=700:940:850:0 ./scripts/prepare-hero-images.sh`。
   裁完后用浏览器手机模式确认人物面部与按钮都在首屏内，必要时微调 CSS 中
   `.hero-media img { object-position: ... }`（手机断点在文件末尾 `max-width: 900px`）。
4. 运行 `npm run build`，本地 `npm run preview` 检查桌面与手机效果后再提交。

原始大图只保存在 `design/` 里，不进入线上构建产物；若不想把原图提交到 Git，可在 `.gitignore`
中忽略 `design/hero-source.png`。

## 部署

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。

- 用户站点（本仓库名 `liuhaoyuec.github.io`）：默认配置即可，地址为 `https://liuhaoyuec.github.io/`。
- 若改成项目站点（例如仓库名 `academic-site`）：构建时加环境变量
  `SITE_URL=https://liuhaoyuec.github.io BASE_PATH=/academic-site npm run build`，
  或在 workflow 的 build 步骤里设置同样的 `env`。

首次部署需要在仓库 **Settings → Pages → Source** 中选择 **GitHub Actions**。

## 后续计划

第二阶段接入账号登录与独立文件存储（约 100GB），登录后可访问受限资料。
当前版本先把公开站点与资料列表做完整，相关内容在 `src/content/resources/*.md` 中用 `restricted: true` 标记预留。
