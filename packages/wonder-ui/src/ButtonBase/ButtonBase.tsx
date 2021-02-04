import * as React from 'react';
import { useTouchFeedback, useForkRef } from '@wonder-ui/hooks';
import useThemeProps from '../styles/useThemeProps';
import styled, { StyledComponentProps } from '../styles/styled';

const ButtonRoot = styled.button({
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
  fontSize: 'inherit',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  '&[disabled]': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  }
});

export interface ButtonBaseProps
  extends StyledComponentProps<typeof ButtonRoot> {
  href?: string;
  target?: string;
}

export const ButtonBase = React.forwardRef(
  (inProps: ButtonBaseProps, ref: any) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonBase' });
    const { component = 'button', href, ...rest } = props;

    const elementRef = useTouchFeedback({ activeClassName: 'touch-active' });
    const handleRef = useForkRef(elementRef, ref);

    return (
      <ButtonRoot
        as={href ? 'a' : component}
        href={href}
        ref={handleRef}
        {...rest}
      />
    );
  }
);

ButtonBase.displayName = 'WuiButtonBase';

export default ButtonBase;
