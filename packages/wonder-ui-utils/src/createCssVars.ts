//https://github.com/jantimon/css-variable/blob/main/src/index.ts
import { snakeCase } from './string/snakeCase';
import { upperFirst } from './string/upperFirst';
import { addUnit } from './unit';

type TValue = string | number;

type CSSVariableOptions = {
  name: string;
  //default value
  value?: TValue;
};
/**
 * Usually css-variable should always be used with its babel plugin
 *
 * However in some scenarios e.g. storybook / jest it might be difficult
 * to setup.
 * For those cases this counter provides a very basic fallback to generate
 * different ids.
 */
let fallbackId = 9 ** 9;

export class CSSVariable {
  readonly key: string;
  /** Name e.g. `--baseSize` */
  readonly name: string;
  /** Value e.g. `var(--baseSize, 12px)` */
  readonly val: string;

  /*#__PURE__*/
  constructor(options: CSSVariableOptions) {
    const key = '--' + (fallbackId++).toString(16);
    const val = `var(${key}${options.value ? `, ${options.value}` : ''})`;

    this.val = val;
    this.key = key;
    this.name = '--' + options.name;
  }

  toVar(newValue?: TValue) {
    return `var(${this.name}${
      newValue != undefined ? `, ${addUnit(newValue)}` : ''
    })`;
  }
}

type Operator = '+' | '-' | '*' | '/';

export function createCssVars<K extends string>(
  componentName: string,
  vars: K[]
) {
  const cssVariables = {} as Record<K, CSSVariable>;

  vars.forEach((v: K) => {
    cssVariables[v] = new CSSVariable({
      name: snakeCase(componentName + upperFirst(v), '-')
    });
  });

  const style = (values: Partial<Record<K, TValue>>) => {
    const result = {} as Record<string, any>;

    for (let k in values) {
      const value = values[k];

      if (typeof value === 'string' && value.indexOf('var') > -1) {
        result[cssVariables[k].key] = addUnit(values[k]);
      } else {
        result[cssVariables[k].key] = cssVariables[k].toVar(values[k]);
      }
    }

    return result;
  };

  const value = (name: K) => cssVariables[name].val;

  const toVar = (name: K, newValue?: TValue) =>
    cssVariables[name].toVar(newValue);

  const calc = (...args: (K | Operator)[]) => {
    return `calc(${args
      .map((name) => {
        if (cssVariables[name as K]) {
          return cssVariables[name as K].val;
        }
        return name;
      })
      .join(' ')})`;
  };

  return {
    cssVariables,
    style,
    value,
    toVar,
    calc
  };
}
