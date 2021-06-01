import { composeClasses, generateUtilityClasses } from '@wonder-ui/utils';

export const dividerClasses = generateUtilityClasses('WuiDivider', [
  'root',
  'absolute',
  'inset',
  'middle',
  'flexItem',
  'light',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical'
]);

export interface DividerStyleProps {
  absolute?: boolean;
  children?: any;
  classes?: Partial<typeof dividerClasses>;
  direction: 'horizontal' | 'vertical';
  flexItem?: boolean;
  light?: boolean;
  textAlign?: 'center' | 'left' | 'right';
  variant?: 'inset' | 'middle' | 'fullWidth';
}

export const useClasses = (styleProps: DividerStyleProps) => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    direction,
    textAlign,
    variant
  } = styleProps;

  const slots = {
    root: [
      'root',
      absolute && 'absolute',
      variant,
      light && 'light',
      direction === 'vertical' && 'vertical',
      flexItem && 'flexItem',
      children && 'withChildren',
      children && direction === 'vertical' && 'withChildrenVertical',
      textAlign === 'right' && direction !== 'vertical' && 'textAlignRight',
      textAlign === 'left' && direction !== 'vertical' && 'textAlignLeft'
    ],
    wrapper: ['wrapper', direction === 'vertical' && 'wrapperVertical']
  };

  return composeClasses('WuiDivider', slots, classes);
};
