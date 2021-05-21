import { upperFirst } from './upperFirst';
import { toString } from './toString';

/**
 * 首字母大写, 拼接className用
 * @param str
 */
export const capitalize = (string: string) =>
  upperFirst(toString(string).toLowerCase());
