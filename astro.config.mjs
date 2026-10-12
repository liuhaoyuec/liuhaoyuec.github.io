// @ts-check
import { defineConfig } from 'astro/config';

/**
 * 站点地址与部署子路径。
 * - 用户站点（仓库名 liuhaoyuec.github.io，地址 https://liuhaoyuec.github.io/）：使用默认值。
 * - 项目站点（如仓库 academic-site，地址 https://liuhaoyuec.github.io/academic-site/）：
 *     SITE_URL=https://liuhaoyuec.github.io BASE_PATH=/academic-site npm run build
 */
const site = process.env.SITE_URL || 'https://liuhaoyuec.github.io';
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase.startsWith('/') ? rawBase : `/${rawBase}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});
