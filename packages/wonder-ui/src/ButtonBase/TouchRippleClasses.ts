import { generateUtilityClasses } from '@wonder-ui/utils';

export const touchRippleClasses = generateUtilityClasses('WuiTouchRipple', [
  'root',
  'ripple',
  'rippleVisible',
  'ripplePulsate',
  'child',
  'childLeaving',
  'childPulsate'
]);

export type TouchRippleClasses = typeof touchRippleClasses;
