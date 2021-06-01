import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const tooltipClasses = generateUtilityClasses('WuiTooltip', [
  'root',
  'tooltip',
  'arrow',
  'withArrow'
]);

export interface TooltipStyleProps {
  arrow?: boolean;
  classes?: Partial<typeof tooltipClasses>;
}

export const useClasses = (styleProps: TooltipStyleProps) => {
  const { arrow, classes } = styleProps;

  const slots = {
    root: ['root'],
    tooltip: ['tooltip', arrow && 'withArrow'],
    arrow: ['arrow']
  };

  return composeClasses('WuiTooltip', slots, classes);
};
