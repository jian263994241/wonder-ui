import { camelCase } from './string';
/**
 * Dictionary of booleans.
 *
 * @internal
 */
export interface IDictionary {
  [className: string]: boolean | undefined;
}

/**
 * Serializable object.
 *
 * @internal
 */
export interface ISerializableObject {
  toString?: () => string;
}

/**
 * css input type.
 *
 * @internal
 */
export type ICssInput =
  | string
  | ISerializableObject
  | IDictionary
  | null
  | undefined
  | boolean;

/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
export function css(...args: ICssInput[]): string {
  let classes = [];

  for (let arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg);
      } else if (
        arg.hasOwnProperty('toString') &&
        typeof arg.toString === 'function'
      ) {
        classes.push(arg.toString());
      } else if (Array.isArray(arg)) {
        classes.push(css(...arg));
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (let key in arg as any) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if ((arg as any)[key]) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.reverse().join(' ');
}

/**
 * css string to object
 * @param css
 * @returns
 */
export const convertCSS2JS = (css: string): object => {
  let frameCSS = css.replace(/([\w-.]+)\s*:([^;]+);?/g, '$1:$2,');
  frameCSS = frameCSS.replace(/,+$/, '');
  let properties = frameCSS.split(', ');
  let frameCSSObj = {};
  properties.forEach(function (property: string) {
    let cssProp = property.split(':');
    let cssKey = camelCase(cssProp[0]);
    let cssValue = cssProp[1].trim();
    //@ts-expect-error
    frameCSSObj[cssKey] = cssValue;
  });
  return frameCSSObj;
};
