export function isObject(o: any) {
  return (
    typeof o === 'object' &&
    o !== null &&
    o.constructor &&
    o.constructor === Object
  );
}

/**
 * 拷贝对象
 * @param target
 * @param source
 * @param options
 */
export function deepmerge(target: any, source: any, options = { clone: true }) {
  const output = options.clone ? { ...target } : target;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * 首字母大写, 拼接className用
 * @param str
 */
export function capitalize(str: string) {
  if (typeof str !== 'string') {
    throw new TypeError('Capitalize(string) expects a string argument.');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

export function createChainedFunction(...funcs: any[]) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(this: any, ...args: any[]) {
        const self = this;
        acc.apply(self, args);
        func.apply(self, args);
      };
    },
    () => {}
  );
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
export default function debounce(func: any, wait = 166) {
  let timeout: any;
  function debounced(this: any, ...args: any[]) {
    // eslint-disable-next-line consistent-this
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
export function getScrollbarSize() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';

  document.body.appendChild(scrollDiv);
  const scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);

  return scrollbarSize;
}

/**
 * 生成id
 * @param {*} mask
 * @param {*} map
 */
export function createId(mask = 'xxxxxxxxxx', map = '0123456789abcdef') {
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor(Math.random() * length)]);
}

let num = 1;
/**
 * create key
 */
export function uniqueNumber() {
  num += 1;
  return num;
}
