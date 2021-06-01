import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const paperClasses = generateUtilityClasses('WuiPaper', [
  'root',
  'elevation',
  'outlined',
  'square'
]);

export interface PaperStyleProps {
  classes?: Partial<typeof paperClasses>;
  elevation?: number;
  square?: boolean;
  variant?: 'elevation' | 'outlined';
}

export const useClasses = (styleProps: PaperStyleProps) => {
  const { classes, variant, square } = styleProps;

  const slot = {
    root: ['root', variant && variant, square && 'square']
  };

  return composeClasses('WuiPaper', slot, classes);
};
