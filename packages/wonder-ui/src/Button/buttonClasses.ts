import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiButton';

export const buttonClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'label',
  'text',
  'textInherit',
  'textPrimary',
  'textSecondary',
  'textSuccess',
  'textDanger',
  'textWarning',
  'textInfo',
  'textLight',
  'textDark',
  'outlined',
  'outlinedInherit',
  'outlinedPrimary',
  'outlinedSecondary',
  'outlinedSuccess',
  'outlinedDanger',
  'outlinedWarning',
  'outlinedInfo',
  'outlinedLight',
  'outlinedDark',
  'contained',
  'containedInherit',
  'containedPrimary',
  'containedSecondary',
  'containedSuccess',
  'containedDanger',
  'containedWarning',
  'containedInfo',
  'containedLight',
  'containedDark',
  'focusVisible',
  'disabled',
  'active',
  'textSizeSmall',
  'textSizeMedium',
  'textSizeLarge',
  'outlinedSizeSmall',
  'outlinedSizeMedium',
  'outlinedSizeLarge',
  'containedSizeSmall',
  'containedSizeMedium',
  'containedSizeLarge',
  'sizeMedium',
  'sizeSmall',
  'sizeLarge',
  'fullWidth',
  'startIcon',
  'endIcon',
  'edgeStart',
  'edgeEnd',
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'shapeDefault',
  'shapeSquare',
  'shapeRound'
]);

export const buttonCssVars = createCssVars(COMPONENT_NAME, [
  'color',
  'bgColor',
  'boxShadow',
  'borderWidth',
  'borderColor',
  'borderRadius',
  'fontWeight',
  'fontSize',
  'minWidth',
  'lineHeight',
  'letterSpacing',
  'paddingHorizontal',
  'paddingVertical',
  'textColor',
  'textTransform',
  'edge'
]);

export const useButtonCssVars = () => {
  useRootCssVars((theme) =>
    buttonCssVars.style({
      color: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius[2],
      borderWidth: 1,
      fontWeight: '500',
      lineHeight: '1.75',
      letterSpacing: '0',
      minWidth: 64,
      textColor: 'inherit',
      textTransform: 'uppercase'
    })
  );
};

export type ButtonClassesType = typeof buttonClasses;
