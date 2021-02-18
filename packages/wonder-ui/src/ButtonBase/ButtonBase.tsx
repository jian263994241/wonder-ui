import * as React from 'react';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import type { StyledComponentProps } from '../styles/types';

export const ButtonBaseRoot = styled.button(({ theme }) => ({
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
  '&[disabled]': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  }
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
      component = 'button',
      activeClassName = 'state-active',
      href,
      ...rest
    } = props;

    const elementRef = useTouchFeedback({ activeClassName });
    const handleRef = useForkRef(elementRef, ref);

    return <ButtonBaseRoot as={component} ref={handleRef} {...rest} />;
  }
);

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
