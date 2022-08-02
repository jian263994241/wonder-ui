import { addUnit2 } from './unit';
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
      cssStore[k].value = isCssVar(values[k]) ? values[k] : addUnit2(values[k]);
      result[cssStore[k].name] = cssStore[k].value;
    }

    return result;
  };

  const getName = (key: K) => (cssStore[key] ? cssStore[key].name : key);

  const value = (key: K, ...val: any[]) =>
    `var(${[getName(key), ...val].join(',')})`;

  const calc = (...args: (K | Operator)[]) =>
    `calc(${args
      .map((key) =>
        ['+', '-', '*', '/'].includes(key) ? key : value(key as K)
      )
      .join(' ')})`;

  return { style, value, calc, getName };
}
