/**
 * 生成id
 * @param {*} mask
 * @param {*} map
 */
export function createId(mask = 'xxxxxxxxxx', map = '0123456789abcdef') {
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor(Math.random() * length)]);
}
