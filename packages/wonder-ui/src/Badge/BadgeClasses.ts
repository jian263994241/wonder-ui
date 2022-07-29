import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiBadge';

export const badgeClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'content',
  'dot'
]);

export const badgeCssVars = createCssVars(COMPONENT_NAME, [
  'fontSize',
  'dotSize',
  'color',
  'textColor',
  'borderColor',
  'borderWidth'
]);

export const useBadgeCssVars = () => {
  useRootCssVars((theme) =>
    badgeCssVars.style({
      fontSize: 9,
      dotSize: 10,
      color: theme.palette.danger.main,
      textColor: theme.palette.common.white
    })
  );
};

export type BadgeClasses = typeof badgeClasses;

export interface BadgeStyleProps {
  children?: any;
  classes?: Partial<typeof badgeClasses>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  rounded?: boolean;
}
