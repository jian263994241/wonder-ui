import { generateUtilityClasses } from '@wonder-ui/utils';

export const COMPONENT_NAME = 'WuiPasscodeInput';

export const passcodeInputClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'cells',
  'cell',
  'input',
  'seperated',
  'focused',
  'dot',
  'caret',
  'error'
]);

export type PasscodeInputClassesType = typeof passcodeInputClasses;
