import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiToggle';

export const toggleClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'input',
  'icon',
  'disabled',
  'checked'
]);

export const toggleCssVars = createCssVars(COMPONENT_NAME, [
  'width',
  'height',
  'borderColor',
  'borderWidth',
  'inactiveColor',
  'color',
  'handleColor'
]);

export const useToggleCssVars = () => {
  useRootCssVars((theme) =>
    toggleCssVars.style({
      width: 52,
      height: 32,
      borderWidth: 2,
      borderColor: theme.palette.divider,
      inactiveColor: theme.palette.background.paper,
      handleColor: theme.palette.background.paper,
      color: theme.palette.primary.main
    })
  );
};

export type ToggleClassesType = typeof toggleClasses;
