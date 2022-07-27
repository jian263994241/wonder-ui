import React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  css,
  generateUtilityClasses,
  capitalize,
  createCssVars
} from '@wonder-ui/utils';
import useRootCssVars from '../styles/useRootCssVars';

const COMPONENT_NAME = 'WuiSafeArea';

const cssVars = createCssVars(COMPONENT_NAME, ['top', 'bottom', 'coef']);

const safeAreaClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'positionTop',
  'positionBottom'
]);

const SafeAreaRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})({
  display: 'block',
  width: '100%',
  [`&.${safeAreaClasses.positionTop}`]: {
    paddingTop: cssVars.calc('top', '*', 'coef')
  },
  [`&.${safeAreaClasses.positionBottom}`]: {
    paddingTop: cssVars.calc('bottom', '*', 'coef')
  }
});

const useClasses = (styleProps: SafeAreaProps) => {
  const { classes, position } = styleProps;
  const slots = {
    root: ['root', position && `position${capitalize(position)}`]
  };
  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface SafeAreaProps extends React.AllHTMLAttributes<HTMLDivElement> {
  classes?: Partial<typeof safeAreaClasses>;
  component?: React.ElementType;
  /**
   * 安全区的位置
   * @default 'bottom'
   */
  position?: 'top' | 'bottom';
}

const SafeArea = React.forwardRef<HTMLDivElement, SafeAreaProps>(
  (inProps, ref) => {
    const props = useThemeProps({ name: COMPONENT_NAME, props: inProps });
    const { position = 'bottom', component, className, ...rest } = props;

    const styleProps = { ...props, position };

    const classes = useClasses(styleProps);

    useRootCssVars(
      cssVars.style({
        coef: '1',
        top: 'env(safe-area-inset-top)',
        bottom: 'env(safe-area-inset-bottom)'
      })
    );

    return (
      <SafeAreaRoot
        {...rest}
        ref={ref}
        as={component}
        className={css(classes.root, className)}
      />
    );
  }
);

export default SafeArea;
