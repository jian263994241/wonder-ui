import useRootCssVars from '../styles/useRootCssVars';
import { createCssVars, generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiPickerView';

export const pickerViewClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'columns',
  'mask',
  'indicator',
  'cloumnRoot',
  'cloumnInner',
  'cloumnItem',
  'readOnly',
  'selected',
  'disabled'
]);

export const pickerViewCssVars = createCssVars(COMPONENT_NAME, [
  'bgColor',
  'fontSize',
  'itemHeight',
  'height',
  'indicatorBorderColor'
]);

export const usePickerViewCssVars = () => {
  useRootCssVars((theme) =>
    pickerViewCssVars.style({
      bgColor: theme.palette.background.paper,
      fontSize: theme.typography.pxToRem(16),
      indicatorBorderColor: theme.palette.divider
    })
  );
};

export type PickerViewClassesType = typeof pickerViewClasses;
