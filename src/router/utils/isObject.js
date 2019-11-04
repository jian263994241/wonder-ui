
export default function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}