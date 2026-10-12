/**
 * 占位文字判断：约定所有待补内容写成 ［待补充：……］。
 * 用来把「还没填的链接」渲染成不可点击的灰色文字，避免出现断链。
 */
const PLACEHOLDER_MARK = '待补充';

export function isPlaceholder(value?: string | null): boolean {
  return !value || value.includes(PLACEHOLDER_MARK);
}
