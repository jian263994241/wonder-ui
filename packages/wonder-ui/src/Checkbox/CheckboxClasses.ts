import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiCheckbox';

export const checkboxClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'block',
  'input',
  'icon',
  'content',
  'checked',
  'indeterminate',
  'disabled'
]);

export const checkboxCssVars = createCssVars(COMPONENT_NAME, [
  'color',
  'inactiveColor',
  'iconSize',
  'gap'
]);

export const useCheckboxCssVars = () => {
  useRootCssVars((theme) =>
    checkboxCssVars.style({
      color: theme.palette.primary.main,
      inactiveColor: theme.palette.text.icon,
      iconSize: 22,
      gap: theme.spacing(1)
    })
  );
};

export type CheckboxClassesType = typeof checkboxClasses;
