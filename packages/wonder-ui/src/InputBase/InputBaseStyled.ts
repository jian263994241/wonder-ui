import styled from '../styles/styled';
import {
  componentName,
  inputBaseClasses,
  InputBaseStyleProps
} from './InputBaseClasses';

export const InputBaseRoot = styled('input', {
  name: componentName,
  slot: 'Root'
})<{ styleProps: InputBaseStyleProps }>(({ theme, styleProps }) => {
  const light = theme.palette.mode === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };

  return {
    alignSelf: 'stretch',
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
    background: 'none transparent',
    boxShadow: 'none',
    boxSizing: 'border-box',
    borderRadius: 0,
    border: 0,
    textOverflow: 'ellipsis',
    outline: 0,
    width: '100%',
    minWidth: 0,
    padding: '0 8px',
    margin: 0,
    verticalAlign: 'middle',
    animationName: 'auto-fill-cancel',
    animationDuration: '10ms',
    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder, // Firefox 19+
    '&:-ms-input-placeholder': placeholder, // IE11
    '&::-ms-input-placeholder': placeholder, // Edge
    '&:focus': {
      outline: 0
    },
    // Reset Firefox invalid required input style
    '&:invalid': {
      boxShadow: 'none'
    },
    '&::-webkit-search-decoration': {
      // Remove the padding when type=search.
      MozAppearance: 'none',
      WebkitAppearance: 'none'
    },
    '&::-webkit-search-cancel-button': {
      // Remove the cancel button when type=search.
      MozAppearance: 'none',
      WebkitAppearance: 'none'
    },
    /** hide arrows */
    '&::-webkit-outer-spin-button,': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    '&:-webkit-autofill': {
      animationDuration: '5000s',
      animationName: 'auto-fill'
    },
    '&[type=search]': {
      // Improve type search style.
      MozAppearance: 'textfield',
      WebkitAppearance: 'textfield'
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
      WebkitAppearance: 'textfield'
    },
    '&[disabled]': {
      opacity: 1, // Reset iOS opacity
      WebkitTextFillColor: theme.palette.text.disabled, // Fix opacity Safari bug
      cursor: 'default'
    },

    [`&.${inputBaseClasses.resizable}`]: {
      resize: 'vertical'
    },
    ...(styleProps.multiline && {
      height: 'auto',
      resize: 'none',
      paddingTop: 0
    })
  };
});
