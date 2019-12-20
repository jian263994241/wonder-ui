import styled, { css } from 'styled-components';
import styledProps, { bindStyles } from '@wonder-ui/utils/styledProps';

const full = styledProps({
  fullWidth: {
    width: '100%'
  },
  full: {
    width: '100%',
    height: '100%',
    borderRadius: 0
  }
});

const textColor = styledProps({
  inherit: 'inherit',
  default: '#333',
  primary: props => props.theme.palette.primary.main,
  secondary: props => props.theme.palette.secondary.main,
  defaultValue: 'default'
}, 'color');

const bgColor = styledProps({
  default: props => props.theme.palette.grey[300],
  primary: props => props.theme.palette.primary.main,
  secondary: props => props.theme.palette.secondary.main,
  defaultValue: 'default'
}, 'color');


const styles = bindStyles({
  size: {
    small: {
      padding: '0px 4px',
      fontSize: ({theme}) => theme.typography.pxToRem(13),
    },
    medium: {
      padding: '4px 16px',
      fontSize: ({theme}) => theme.typography.pxToRem(14),
    },
    large: {
      padding: '8px 24px',
      fontSize: ({theme}) => theme.typography.pxToRem(15),
    },
    defaultValue: 'medium'
  },
  variant: {
    defaultValue: 'contained',
    text: {
      color: textColor
    },
    outlined: {
      color: textColor,
      border: props => `1px solid ${bgColor(props)}`
    },
    contained: {
      color: props => props.theme.palette.getContrastText(bgColor(props)),
      backgroundColor: bgColor,
      boxShadow: props => props.theme.shadows[1],
    }
  },
});

export const ButtonRoot = styled.button.withConfig({
  displayName: 'ButtonRoot'
})(({theme})=>({
  ...theme.typography.button,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
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
  '&::-moz-focus-inner': {
    borderStyle: 'none', // Remove Firefox dotted outline.
  },
  lineHeight: 1.75,
  textAlign: 'center',
  boxSizing: 'border-box',
  minWidth: 64,
  borderRadius: 4,
  wordBreak: 'keep-all',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  transition: 'opacity ease 200ms',
  cursor: 'pointer',
  '&>span': {
    alignSelf: 'center',
  }, 
  '&:active': {
    opacity: 0.75
  },
  '&[disabled]': {
    opacity: 0.38,
    pointerEvents: 'none', // Disable link interactions
    cursor: 'not-allowed',
  }
}), css(styles.size, styles.variant, full) )

