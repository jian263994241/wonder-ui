import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const whiteSpaceClasses = generateUtilityClasses('WuiWhiteSpace', [
  'root',
  'sizeSmall',
  'sizeMedium',
  'sizeLarge'
]);

export interface WhiteSpaceStyleProps {
  classes?: Partial<typeof whiteSpaceClasses>;
  size?: 'small' | 'medium' | 'large';
}

export const useClasses = (styleProps: WhiteSpaceStyleProps) => {
  const { classes, size } = styleProps;

  const slots = {
    root: ['root', size && `size${capitalize(size)}`]
  };

  return composeClasses('WuiWhiteSpace', slots, classes);
};
