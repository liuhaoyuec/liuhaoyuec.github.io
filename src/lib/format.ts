/** 日期格式化工具：统一用 UTC 读取，避免时区导致日期偏移一天。 */

const pad = (n: number) => String(n).padStart(2, '0');

/** 2026-10-12 */
export function toISODate(date: Date): string {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
}

/** 2026 年 10 月 12 日 */
export function formatDateCN(date: Date): string {
  return `${date.getUTCFullYear()} 年 ${date.getUTCMonth() + 1} 月 ${date.getUTCDate()} 日`;
}

/** 2026-10-12（列表页常用） */
export function formatDate(date: Date): string {
  return toISODate(date);
}
