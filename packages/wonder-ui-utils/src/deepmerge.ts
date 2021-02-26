import isObject from 'lodash/isObject';

/**
 * 拷贝对象
 * @param target
 * @param source
 * @param options
 */
export default function deepmerge<T>(
  target: T,
  source: any,
  options = { clone: true }
): T {
  const output: any = options.clone ? { ...target } : target;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isObject((source as any)[key]) && key in target) {
        output[key] = deepmerge(
          (target as any)[key],
          (source as any)[key],
          options
        );
      } else {
        output[key] = (source as any)[key];
      }
    });
  }

  return output;
}
