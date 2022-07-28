import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiSpace';

export const spaceClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'item',
  'vertical',
  'horizontal',
  'split',
  'nowrap'
]);

export const spaceCssVars = createCssVars(COMPONENT_NAME, [
  'gap',
  'gapHorizontal',
  'gapVertical'
]);

export type SpaceClassesType = typeof spaceClasses;
