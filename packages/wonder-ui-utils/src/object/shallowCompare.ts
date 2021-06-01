/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function shallowCompare<TA extends any, TB extends any>(
  a: TA,
  b: TB
): boolean {
  for (let propName in a) {
    if ((a as Object).hasOwnProperty(propName)) {
      if (
        !(b as Object).hasOwnProperty(propName) ||
        (b as { [key: string]: unknown })[propName] !== a[propName]
      ) {
        return false;
      }
    }
  }
  for (let propName in b) {
    if ((b as Object).hasOwnProperty(propName)) {
      if (!(a as Object).hasOwnProperty(propName)) {
        return false;
      }
    }
  }
  return true;
}
