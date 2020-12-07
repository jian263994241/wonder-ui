import type { SheetOptions, DynamicRules, StyleRules } from '../types';
import * as JSS from 'jss';
import { addMeta, getMeta } from './sheetsMeta';
import { defaultJss } from '../defaultJss';
import { getManager } from './managers';

function getStyles(options: SheetOptions<any>): StyleRules<any, any> {
  const { styles, theme } = options;
  if (typeof styles !== 'function') {
    return styles;
  }

  return styles(theme);
}

function getDynamicStyles(styles: StyleRules<any, any>) {
  return JSS.getDynamicStyles(styles as JSS.Styles) as StyleRules<any, any>;
}

function getSheetOptions(
  options: any,
  link: boolean
): JSS.StyleSheetFactoryOptions {
  const {
    context,
    generateId: _generateId,
    name,
    styles,
    index,
    classNamePrefix: defaultClassNamePrefix = '',
    ...rest
  } = options;

  let minify;
  if (context.id && context.id.minify != null) {
    minify = context.id.minify;
  }
  let classNamePrefix = context.classNamePrefix || defaultClassNamePrefix;
  if (name && !minify) {
    classNamePrefix += `${name.replace(/\s/g, '-')}-`;
  }

  let meta = '';
  if (name) meta = `${name}, `;
  meta += typeof styles === 'function' ? 'Themed' : 'Unthemed';

  const generateId = _generateId || context.generateId;

  return { ...rest, index, meta, classNamePrefix, link, generateId };
}

export function createStyleSheet(
  options: SheetOptions<any>
): JSS.StyleSheet | void {
  const { context, index, theme = {} } = options;

  if (context.disableStylesGeneration) {
    return undefined;
  }
  const manager = getManager(context, index);
  const existingSheet = manager.get(theme);

  if (existingSheet) {
    return existingSheet;
  }

  const jss = context.jss || defaultJss;
  const styles = getStyles(options);
  const dynamicStyles = getDynamicStyles(styles);

  const sheet = jss.createStyleSheet(
    styles as JSS.Styles,
    getSheetOptions(options, dynamicStyles !== null)
  );

  addMeta(sheet, { dynamicStyles, styles });

  manager.add(theme, sheet);

  return sheet;
}

export const removeDynamicRules = (
  sheet: JSS.StyleSheet,
  rules: DynamicRules
) => {
  // Loop over each dynamic rule and remove the dynamic rule
  // We can't just remove the whole sheet as this has all of the rules for every component instance
  for (const key in rules) {
    sheet.deleteRule(rules[key] as any);
  }
};

export const updateDynamicRules = (
  data: any,
  sheet: any,
  rules: DynamicRules
) => {
  // Loop over each dynamic rule and update it
  // We can't just update the whole sheet as this has all of the rules for every component instance

  for (const key in rules) {
    sheet.updateOne(rules[key], data);
  }
};

export const addDynamicRules = (sheet: any, data: any): DynamicRules | void => {
  const meta = getMeta(sheet);

  if (!meta) {
    return undefined;
  }

  const rules: DynamicRules = {};

  // Loop over each dynamic rule and add it to the stylesheet
  for (const key in meta.dynamicStyles) {
    const initialRuleCount = sheet.rules.index.length;
    const originalRule = sheet.addRule(key, meta.dynamicStyles[key] as any);

    // Loop through all created rules, fixes updating dynamic rules
    for (let i = initialRuleCount; i < sheet.rules.index.length; i++) {
      const rule = sheet.rules.index[i];

      sheet.updateOne(rule, data);
      // If it's the original rule, we need to add it by the correct key so the hook and hoc
      // can correctly concat the dynamic class with the static one
      rules[originalRule === rule ? key : rule.key] = rule;
    }
  }

  return rules;
};
