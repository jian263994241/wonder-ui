import {
  capitalize,
  composeClasses,
  generateUtilityClasses
} from '@wonder-ui/utils';

export const snackbarClasses = generateUtilityClasses('WuiSnackbar', [
  'root',
  'content',
  'anchorTopLeft',
  'anchorTopCenter',
  'anchorTopRight',
  'anchorBottomLeft',
  'anchorBottomCenter',
  'anchorBottomRight',
  'anchorCenter'
]);

export interface SnackbarStyleProps {
  anchorOrigin: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
  classes?: Partial<typeof snackbarClasses>;
}

export const useClasses = (styleProps: SnackbarStyleProps) => {
  const {
    anchorOrigin: { vertical, horizontal },
    classes
  } = styleProps;

  const slots = {
    root: [
      'root',
      vertical === horizontal && 'anchorCenter',
      vertical &&
        horizontal &&
        vertical != horizontal &&
        `anchor${capitalize(vertical)}${capitalize(horizontal)}`
    ],
    content: ['content']
  };

  return composeClasses('WuiSnackbar', slots, classes);
};
