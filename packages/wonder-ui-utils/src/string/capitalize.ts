import { upperFirst } from './upperFirst';
import { toString } from './toString';

/**
 * 首字母大写, 拼接className用
 * @param str
 */

export const capitalize = <T extends string>(string: T): Capitalize<T> => {
  //@ts-expect-error
  return upperFirst(toString(string).toLowerCase());
};
