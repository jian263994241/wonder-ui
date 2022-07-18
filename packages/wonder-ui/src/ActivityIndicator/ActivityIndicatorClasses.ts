import { generateUtilityClasses } from '@wonder-ui/utils';

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

export type ActivityIndicatorClassesType = typeof activityIndicatorClasses;
