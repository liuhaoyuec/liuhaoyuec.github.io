/**
 * 近期动态：首页「近期动态」区块，按日期从新到旧排列。
 * link 可留空字符串；type 可选：公告 / 论文 / 项目 / 笔记 / 会议。
 */
export type NewsItem = {
  date: string;
  type: '公告' | '论文' | '项目' | '笔记' | '会议' | '其他';
  text: string;
  link?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-10-12',
    type: '公告',
    text: '个人学术网站第一版上线。',
  },
  {
    date: '2026-09-20',
    type: '项目',
    text: '［待补充：例如「项目《XXX》进入实验验证阶段」］',
  },
  {
    date: '2026-08-01',
    type: '论文',
    text: '［待补充：例如「论文《XXX》投稿至 XXX，状态：在审」］',
  },
];
