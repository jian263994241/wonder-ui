import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const spaceClasses = generateUtilityClasses('WuiSpace', [
  'root',
  'item',
  'vertical',
  'horizontal',
  'wrap'
]);

export interface SpaceStyleProps {
  align?: any;
  classes?: Partial<typeof spaceClasses>;
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  size?: any;
}

export const useClasses = (styleProps: SpaceStyleProps) => {
  const { classes, direction, wrap } = styleProps;

  const slots = {
    root: [
      'root',
      direction && direction,
      direction === 'horizontal' && wrap && 'wrap'
    ],
    item: ['item']
  };

  return composeClasses('WuiSpace', slots, classes);
};
