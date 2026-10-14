/**
 * 站点信息：全站只有一页，改这里即可。
 * 历史版本里的论文、成果、项目、笔记、资料等页面的源码仍保留在 Git 历史中，
 * 但已从站点移除，不再构建、不再出现在导航中。
 */
export const site = {
  /** 姓名（浏览器标签页与页面标题也用） */
  name: '刘昊岳',
  /** 一句话介绍 */
  tagline: '研一学生。这是我的个人主页。',
  /** 文件空间入口 */
  fileSpace: {
    label: '文件空间',
    url: 'https://filespace-28674.azurewebsites.net/',
  },
};

/**
 * 首页「讲义与资料」列表。
 * 文件放在 public/files/ 下，这里写站内路径（以 /files/ 开头，不要写完整域名）。
 * 换了 PDF 记得同步更新 pages（页数）——页数无法在构建时自动读取，是手写的。
 */
export const resources = [
  {
    title: '模论与线性代数讲义',
    summary:
      '用 F[x]-模与范畴论的语言看线性代数：从坐标矩阵到有理标准型、Jordan 型、谱投影与 Kalman 能控性。',
    file: '/files/module-linear-algebra-notes.pdf',
    date: '2026-10-14',
    pages: 51,
  },
];
