import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';
import { TransitionStatus } from '../Transition';

export const collapseClasses = generateUtilityClasses('WuiCollapse', [
  'root',
  'horizontal',
  'vertical',
  'hidden',
  'visible'
]);

export interface CollapseStyleProps {
  classes?: Partial<typeof collapseClasses>;
  collapsedSize?: string | number;
  direction?: 'horizontal' | 'vertical';
  in?: boolean;
  state?: TransitionStatus;
}

export const useClasses = (styleProps: CollapseStyleProps) => {
  const { classes, direction, in: inProps } = styleProps;

  const slot = {
    root: ['root', direction && direction, inProps ? 'visible' : 'hidden']
  };

  return composeClasses('WuiCollapse', slot, classes);
};
