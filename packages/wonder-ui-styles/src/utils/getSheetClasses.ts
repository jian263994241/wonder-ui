import type { StyleSheet } from 'jss';
import type { DynamicRules, ClassNameMap } from '../types';
import { getMeta } from './sheetsMeta';

export default function getSheetClasses(
  sheet: StyleSheet,
  dynamicRules: DynamicRules | void
) {
  if (!dynamicRules) {
    return sheet.classes;
  }

  const meta = getMeta(sheet);

  if (!meta) {
    return sheet.classes;
  }

  const classes: ClassNameMap<any> = {};

  for (const key in meta.styles) {
    classes[key] = sheet.classes[key];

    if (key in dynamicRules) {
      classes[key] += ` ${sheet.classes[dynamicRules[key].key]}`;
    }
  }

  return classes;
}
