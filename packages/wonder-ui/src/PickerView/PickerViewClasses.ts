import { generateUtilityClasses } from '@wonder-ui/utils';

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
