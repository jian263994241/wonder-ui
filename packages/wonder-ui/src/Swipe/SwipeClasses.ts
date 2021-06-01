import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const swipeClasses = generateUtilityClasses('WuiSwipe', [
  'root',
  'prevArrow',
  'nextArrow'
]);

export interface SwipeStyleProps {
  classes?: Partial<typeof swipeClasses>;
}

export const useClasses = (styleProps: SwipeStyleProps) => {
  const { classes } = styleProps;

  const slots = {
    root: ['root'],
    prevArrow: ['prevArrow'],
    nextArrow: ['nextArrow']
  };

  return composeClasses('WuiSwipe', slots, classes);
};
