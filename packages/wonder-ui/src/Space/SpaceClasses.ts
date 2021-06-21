import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';
import { SpaceStyleProps } from './SpaceTypes';

export const componentName = 'WuiSpace';

export const spaceClasses = generateUtilityClasses(componentName, [
  'root',
  'item',
  'vertical',
  'horizontal',
  'split',
  'nowrap'
]);

export const useClasses = (styleProps: SpaceStyleProps) => {
  const { classes, direction, nowrap } = styleProps;

  const slots = {
    root: ['root', direction && direction, nowrap && 'nowrap'],
    item: ['item'],
    splitItem: ['item', 'split']
  };

  return composeClasses(componentName, slots, classes);
};
