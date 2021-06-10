import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { GlobalStyles } from '@wonder-ui/styled';
import TextareaAutosize from '../TextareaAutosize';

export interface InputBaseProps extends React.HTMLProps<HTMLInputElement> {
  multiline?: boolean;
}

const InputBaseRoot = styled('input', {
  name: 'WuiInputBase',
  slot: 'Root'
})<{ styleProps: { multiline?: boolean } }>(({ theme, styleProps }) => {
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
      WebkitAppearance: 'none'
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
    '&[disabled]': {
      opacity: 1, // Reset iOS opacity
      WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug
    },
    ...(styleProps.multiline && {
      height: 'auto',
      resize: 'none',
      padding: 0,
      paddingTop: 0
    })
  };
});

const InputBase = React.forwardRef<HTMLInputElement, InputBaseProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiInputBase' });
    const { multiline = false, ...rest } = props;

    let inputComponent: 'textarea' | 'input';
    let inputProps;

    if (multiline) {
      inputComponent = 'textarea';

      inputProps = {
        ...rest
      };
    } else {
      inputComponent = 'input';

      inputProps = {
        ...rest
      };
    }

    const styleProps = { ...props, multiline };

    return (
      <React.Fragment>
        <GlobalStyles
          styles={{
            '@keyframes auto-fill': {},
            '@keyframes auto-fill-cancel': {}
          }}
        />
        <InputBaseRoot
          autoComplete="off"
          type="text"
          {...inputProps}
          styleProps={styleProps}
          as={inputComponent}
        />
      </React.Fragment>
    );
  }
);

export default InputBase;
