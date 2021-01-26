/**
 * 首字母大写, 拼接className用
 * @param str
 */
export default function capitalize(str: string) {
  if (typeof str !== 'string') {
    throw new TypeError('Capitalize(string) expects a string argument.');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
