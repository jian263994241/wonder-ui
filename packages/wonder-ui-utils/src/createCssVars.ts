import { addUnit } from './unit';
import { snakeCase } from './string/snakeCase';
import { upperFirst } from './string/upperFirst';

type TValue = string | number;

type Operator = '+' | '-' | '*' | '/';

function isCssVar(value: any) {
  return typeof value === 'string' && value.indexOf('var') > -1;
}

export function createCssVars<K extends string>(
  componentName: string,
  vars: K[]
) {
  const cssStore = {} as Record<K, { name: string; value: any }>;

  vars.forEach((v: K) => {
    cssStore[v] = {
      name: `--${snakeCase(componentName + upperFirst(v), '-')}`,
      value: undefined
    };
  });

  const style = (values: Partial<Record<K, TValue>>) => {
    const result = {} as Record<string, any>;

    for (let k in values) {
      cssStore[k].value = isCssVar(values[k]) ? values[k] : addUnit(values[k]);
      result[cssStore[k].name] = cssStore[k].value;
    }

    return result;
  };

  const value = (key: K, ...val: any[]) =>
    cssStore[key] ? `var(${[cssStore[key].name, ...val].join(',')})` : key;

  const calc = (...args: (K | Operator)[]) =>
    `calc(${args
      .map((key) => (cssStore[key as K] ? value(key as K) : key))
      .join(' ')})`;

  return { style, value, calc };
}
