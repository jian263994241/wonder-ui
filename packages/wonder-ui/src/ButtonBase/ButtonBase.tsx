import * as React from 'react';
import styled from '../styles';
import { useTouchFeedback, useForkRef } from '../hooks';

const ButtonRoot = styled.button({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  textAlign: 'center',
  // Remove grey highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 'none',
  border: 0,
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
  '&.active': {
    opacity: 0.8
  },
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  '&[disabled]': {
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed'
  }
});

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonBase = React.forwardRef(function ButtonBase(
  props: ButtonBaseProps,
  ref
) {
  const elementRef = useTouchFeedback();
  const handleRef = useForkRef(elementRef, ref);

  return <ButtonRoot {...props} ref={handleRef} />;
});

export default ButtonBase;
