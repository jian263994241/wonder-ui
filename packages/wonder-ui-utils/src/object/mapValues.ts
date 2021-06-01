/*
 * mapValues
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */

export function mapValues<T extends object, TResult>(
  obj: T | null | undefined,
  iteratee: (value: T[keyof T], key: string) => TResult
): { [P in keyof T]: TResult };

export function mapValues(object: any, iteratee: any): object {
  const result = {} as Record<any, any>;

  Object.keys(object).forEach((key) => {
    result[key] = iteratee(object[key], key);
  });

  return result;
}
