import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiActivityIndicator';

export const activityIndicatorClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'icon',
  'text',
  'vertical',
  'spinner',
  'circular',
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'colorPrimary',
  'colorSecondary',
  'colorLight',
  'colorDark'
]);

export const activityIndicatorCssVars = createCssVars(COMPONENT_NAME, [
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'colorPrimary',
  'colorSecondary',
  'colorLight',
  'colorDark',
  'color',
  'size',
  'gap'
]);

export const useActivityIndicatorCssVars = () => {
  useRootCssVars((theme) =>
    activityIndicatorCssVars.style({
      iconSizeLarge: 36,
      iconSizeMedium: 24,
      iconSizeSmall: 16,
      colorPrimary: theme.palette.primary.main,
      colorSecondary: theme.palette.secondary.main,
      colorLight: theme.palette.light.main,
      colorDark: theme.palette.dark.main,
      gap: theme.spacing(1)
    })
  );
};

export type ActivityIndicatorClassesType = typeof activityIndicatorClasses;
