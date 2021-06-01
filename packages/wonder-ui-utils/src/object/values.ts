/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */

export function values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];
export function values(o: {}): any[];

export function values(obj: any): any[] {
  return Object.keys(obj).reduce((arr: any[], key: string): any[] => {
    arr.push(obj[key]);
    return arr;
  }, []);
}
