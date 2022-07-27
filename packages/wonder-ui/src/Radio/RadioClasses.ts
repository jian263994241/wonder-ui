import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiRadio';

export const radioClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'block',
  'input',
  'icon',
  'content',
  'checked',
  'indeterminate',
  'disabled'
]);

export const radioCssVars = createCssVars(COMPONENT_NAME, [
  'color',
  'inactiveColor',
  'iconSize',
  'gap'
]);

export const useRadioCssVars = () => {
  useRootCssVars((theme) =>
    radioCssVars.style({
      color: theme.palette.primary.main,
      inactiveColor: theme.palette.text.icon,
      iconSize: 22,
      gap: theme.spacing(1)
    })
  );
};

export type RadioClassesType = typeof radioClasses;
