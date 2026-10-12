/**
 * 站点全局信息：改这里即可更新全站显示的文字。
 *
 * 约定：任何形如 ［待补充：……］ 的内容都是占位文字，
 * 拿到真实信息后直接替换该字符串即可（可全文搜索 "待补充" 定位）。
 */
export const site = {
  /** 站点标题（浏览器标签页 / 页头 / 页脚） */
  name: '刘昊岳',
  /** 英文名或拼音，显示在姓名下方；暂不想要可改成 '' */
  nameEn: 'Haoyue Liu',
  /** 站点副标题，用于 SEO 与页脚 */
  subtitle: '个人学术主页',

  /** 一句话定位，显示在首页姓名下方 */
  tagline: '［待补充：一句话说明你的研究方向，例如「面向 XX 的 XX 方法与系统研究」］',

  /** 首页个人介绍段落，可写多段 */
  bio: [
    '［待补充：第一段自我介绍。建议写清楚目前的身份（本科生 / 研究生 / 研究者）、所在单位与主要研究方向。］',
    '［待补充：第二段可以写研究兴趣的来源、正在做的课题，以及希望寻找的合作或交流机会。］',
  ],

  /** 基本信息表（首页与联系页都会用到）；不需要的行删除即可 */
  info: [
    { label: '身份', value: '［待补充：如 博士研究生］' },
    { label: '单位', value: '［待补充：如 XX 大学 XX 学院 / XX 实验室］' },
    { label: '所在地', value: '［待补充：如 中国 · 北京］' },
    { label: '邮箱', value: '［待补充：you@example.com］' },
  ],

  /** 首页与联系页的对外链接；没有的项填 '' 或删除该行 */
  links: [
    { label: '文件空间（网络存储）', url: 'https://filespace-28674.azurewebsites.net/' },
    { label: 'GitHub', url: 'https://github.com/liuhaoyuec' },
    { label: 'Google Scholar', url: '［待补充：主页链接］' },
    { label: 'ORCID', url: '［待补充：0000-0000-0000-0000］' },
    { label: 'CV / 简历', url: '' },
  ],

  /** 联系页正文说明 */
  contactNote:
    '［待补充：欢迎围绕 XX 方向交流合作，一般会在 X 个工作日内回复邮件。］',

  /** 页脚备注；资料区后续要接入登录与文件存储，先在此说明状态 */
  footerNote:
    '本站为静态站点，由 Astro 构建。资料下载为公开链接；需要登录的文件放在独立的「文件空间」（账号由站点管理员创建）。',
};

/** 顶部导航；path 为站内路径（不要带 base 前缀），以 http 开头的项按外部链接处理 */
export const nav = [
  { label: '首页', path: '/' },
  { label: '研究方向', path: '/#research' },
  { label: '项目', path: '/projects/' },
  { label: '学术成果', path: '/publications/' },
  { label: '笔记', path: '/notes/' },
  { label: '资料', path: '/resources/' },
  { label: '联系', path: '/contact/' },
  { label: '文件空间', path: 'https://filespace-28674.azurewebsites.net/' },
];
