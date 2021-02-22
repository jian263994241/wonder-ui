import * as React from 'react';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyledComponentProps, StyleProps } from '../styles/types';

export interface ButtonBaseStyleProps {
  disabled?: boolean;
}

export const ButtonBaseRoot = styled('button', {
  name: 'WuiButtonBase',
  slot: 'Root'
})<StyleProps<ButtonBaseStyleProps>>(({ theme, styleProps }) => ({
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  // Remove grey highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 'none',
  border: '1px solid transparent',
  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none', // Reset
  textDecoration: 'none',
  transition: theme.transitions.create(
    ['background-color', 'border-color', 'box-shadow', 'color', 'opacity'],
    { duration: 'shorter' }
  ),
  // So we take precedent over the style of a native <a /> element.
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  ...(styleProps.disabled && {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  })
}));

export interface ButtonBaseProps
  extends StyledComponentProps<typeof ButtonBaseRoot> {
  /**
   * @description 点击时的状态样式名
   * @default state-active
   */
  activeClassName?: string;
}

const ButtonBase: React.FC<ButtonBaseProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonBase' });
    const {
      className,
      component = 'button',
      disabled = false,
      activeClassName = 'state-active',
      href,
      ...rest
    } = props;

    const styleProps = {
      disabled
    };

    const elementRef = useTouchFeedback({ activeClassName });
    const handleRef = useForkRef(elementRef, ref);

    const classes = useClasses({
      styleProps,
      className,
      name: 'WuiButtonBase'
    });

    return (
      <ButtonBaseRoot
        className={classes.root}
        as={component}
        styleProps={styleProps}
        ref={handleRef}
        {...rest}
      />
    );
  }
);

ButtonBase.displayName = 'WuiButtonBase';

export default ButtonBase;
