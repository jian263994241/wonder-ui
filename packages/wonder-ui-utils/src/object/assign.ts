/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
export function assign<T, U>(target: T, source: U): T & U;
export function assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
export function assign<T, U, V, W>(
  target: T,
  source1: U,
  source2: V,
  source3: W
): T & U & V & W;
export function assign(target: object, ...sources: any[]): any;

export function assign(target: object, ...sources: any[]): any {
  return filteredAssign(null, target, ...sources);
}

/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function filteredAssign(
  isAllowed: ((propName: string) => boolean) | null,
  target: any,
  ...sources: any[]
): any {
  target = target || {};

  for (let sourceObject of sources) {
    if (sourceObject) {
      for (let propName in sourceObject) {
        if (
          sourceObject.hasOwnProperty(propName) &&
          (!isAllowed || isAllowed(propName))
        ) {
          target[propName] = sourceObject[propName];
        }
      }
    }
  }

  return target;
}
