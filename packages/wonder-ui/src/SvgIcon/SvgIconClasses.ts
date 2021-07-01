import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const svgIconClasses = generateUtilityClasses('WuiSvgIcon', [
  'root',
  'spin',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge'
]);

export interface SvgIconStyleProps {
  classes?: Partial<typeof svgIconClasses>;
  color: 'action' | 'disabled' | 'error' | 'inherit' | 'primary' | 'secondary';
  fontSize: 'inherit' | 'large' | 'medium' | 'small';
  spin: boolean;
}

export const useClasses = (styleProps: SvgIconStyleProps) => {
  const { color, fontSize, classes, spin } = styleProps;

  const slots = {
    root: [
      'root',
      `fontSize${capitalize(fontSize)}`,
      color && color !== 'inherit' && `color${capitalize(color)}`,
      spin && 'spin'
    ]
  };

  return composeClasses('WuiSvgIcon', slots, classes);
};
