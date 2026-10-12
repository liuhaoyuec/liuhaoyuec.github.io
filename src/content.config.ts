import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** 项目：src/content/projects/*.md，文件名即网址（如 rust-parser.md → /projects/rust-parser/） */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.string().default(''),
    role: z.string().default(''),
    status: z.enum(['进行中', '已完成', '规划中', '暂停']).default('进行中'),
    tags: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    /** 数值越小越靠前 */
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/** 学术成果：src/content/publications/*.md */
const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    /** 一句话摘要，首页「代表成果」与列表页都会显示 */
    summary: z.string().default(''),
    /** 作者列表，按原文顺序；本人可用加粗写法不生效，请在需要处手动加 * */
    authors: z.string(),
    venue: z.string().default(''),
    year: z.number(),
    type: z.enum(['期刊论文', '会议论文', '预印本', '学位论文', '其他']).default('其他'),
    status: z.enum(['已发表', '已接收', '在审', '预印本', '撰写中']).default('已发表'),
    keywords: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    /** 是否在首页「代表成果」中展示 */
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/** 笔记：src/content/notes/*.md */
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().default(''),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** 资料：src/content/resources/*.md；file 指 public 目录下的文件，url 指外部链接 */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    category: z.string().default('其他'),
    updated: z.coerce.date().optional(),
    /** 站内文件路径（相对 public 目录），如 /files/example.pdf */
    file: z.string().default(''),
    /** 外部下载链接，如网盘 / GitHub Release */
    url: z.string().default(''),
    size: z.string().default(''),
    tags: z.array(z.string()).default([]),
    /** 需要登录后才能访问（当前版本仅作标记，后续接入认证） */
    restricted: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, publications, notes, resources };
