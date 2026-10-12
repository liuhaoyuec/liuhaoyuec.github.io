---
title: 这个网站是怎么搭起来的
date: 2026-10-12
summary: 记录本站的技术选型与目录结构，方便以后自己回来修改内容。
tags:
  - 建站
  - Astro
draft: false
---

这个网站用 **Astro** 搭建，构建产物是纯静态文件，可以直接部署到 GitHub Pages 等免费静态托管。

## 内容放在哪里

| 内容类型 | 文件位置 | 网址规则 |
| --- | --- | --- |
| 项目 | `src/content/projects/*.md` | `/projects/文件名/` |
| 学术成果 | `src/content/publications/*.md` | 汇总在 `/publications/` |
| 笔记 | `src/content/notes/*.md` | `/notes/文件名/` |
| 资料 | `src/content/resources/*.md` | 汇总在 `/resources/` |

文件名用英文短横线命名会得到更整洁的网址，例如 `src/content/notes/sparse-attention.md`。

## 常用命令

```bash
npm run dev     # 本地预览，默认 http://localhost:4321
npm run build   # 生成静态文件到 dist/
npm run preview # 预览 dist/ 里的构建结果
```

## 笔记正文

笔记正文就是普通的 Markdown：

- 支持列表、表格、代码块与公式以外的常见语法；
- 需要图片时把图片放进 `public/images/`，然后写 `![说明](/images/xxx.png)`；
- 想先写草稿不发布，把 frontmatter 里的 `draft` 改成 `true`。

> 后续计划：接入账号登录与独立文件存储，让登录用户可以访问资料区中的私有文件。
