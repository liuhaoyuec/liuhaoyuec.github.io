/**
 * 生成站内链接。
 * Astro 不会自动给普通 href 加 base 前缀，所以站内链接统一用 withBase()。
 * 支持：'/'、'/projects/'、'/notes/hello/'、'/#research'
 * 外部链接（http/https/mailto/#anchor）原样返回。
 */
const BASE = import.meta.env.BASE_URL || '/';

export function withBase(path = '/'): string {
  if (!path) return BASE;
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('#') || path.startsWith('//')) {
    return path;
  }
  const prefix = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${rest}` || '/';
}

/** 判断某个导航项是否为当前页（用于高亮），navPath 用未加 base 的站内路径 */
export function isActive(currentPath: string, navPath: string): boolean {
  // 纯页内锚点（如 /#research）不参与高亮，避免首页同时高亮两项
  if (navPath.includes('#')) return false;
  const full = withBase(navPath);
  const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, '') : p);
  const current = norm(currentPath);
  if (full === '/' || full === '') return current === '/';
  const base = norm(full);
  return current === base || current.startsWith(`${base}/`);
}
