/**
 * mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
export function mapKeys<T, TResult extends string | number>(
  object: ArrayLike<T> | null | undefined,
  iteratee?: (value: T, index: number) => TResult
): { [P in TResult]: T };

export function mapKeys<T extends object, TResult extends string | number>(
  object: T | null | undefined,
  iteratee?: (value: T[keyof T], key: string) => TResult
): { [P in TResult]: T[keyof T] };

export function mapKeys(object: any, iteratee: any): object {
  const result = {} as Record<any, any>;

  Object.keys(object).forEach((key) => {
    result[iteratee(object[key], key)] = object[key];
  });

  return result;
}
