/**
 * 汎用的な機能を提供する
 */
export function setAttr(elm, obj) {
  for (const i of Object.entries(obj)) {
    elm.setAttribute(i[0], i[1]);
  }
}
