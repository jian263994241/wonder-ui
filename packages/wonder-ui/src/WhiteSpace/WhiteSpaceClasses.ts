import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiWhiteSpace';

export const whiteSpaceClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge'
]);

export const whiteSpaceCssVars = createCssVars(COMPONENT_NAME, [
  'size',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge'
]);

export const useWhiteSpaceCssVars = () => {
  useRootCssVars((theme) =>
    whiteSpaceCssVars.style({
      sizeSmall: theme.spacing(1),
      sizeMedium: theme.spacing(2),
      sizeLarge: theme.spacing(4)
    })
  );
};

export type WhiteSpaceClassesType = typeof whiteSpaceClasses;
