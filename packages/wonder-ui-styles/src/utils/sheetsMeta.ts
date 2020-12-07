import type { StyleSheet } from 'jss';
import type { StyleRules } from '../types';

type SheetMeta<Props extends object = {}, ClassKey extends string = string> = {
  readonly styles: StyleRules<Props, ClassKey>;
  readonly dynamicStyles: StyleRules<Props, ClassKey>;
};

const sheetsMeta = new WeakMap<StyleSheet, SheetMeta>();

export const getMeta = (sheet: StyleSheet): SheetMeta | void => {
  return sheetsMeta.get(sheet);
};

export const addMeta = (sheet: StyleSheet, meta: SheetMeta<any, any>) => {
  sheetsMeta.set(sheet, meta);
};
