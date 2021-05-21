import * as React from 'react';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import { getDevice, css } from '@wonder-ui/utils';
import { useTouchFeedback } from '@wonder-ui/hooks';
import type { RestProps } from '../styles/types';

export interface ButtonBaseProps {
  autofocus?: boolean;
  children?: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  disabled?: boolean;
  disabledTouchFeedback?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<any>;
  style?: React.CSSProperties;
}

type StyleProps = {
  styleProps: Partial<ButtonBaseProps>;
};

const ButtonBaseRoot = styled('button', {
  name: 'WuiButtonBase',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  outline: 0,
  border: 0,
  // Remove #0f0d0d highlight
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent', // Reset default value

  margin: 0, // Remove the margin in Safari
  borderRadius: 0,
  padding: 0, // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none', // Reset
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  transition: theme.transitions.create(
    ['background-color', 'border-color', 'box-shadow', 'color', 'opacity'],
    { duration: theme.transitions.duration.shorter }
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

const TouchFeedback = styled('span', {
  name: 'TouchFeedback',
  slot: 'Root'
})(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit',
  backgroundColor: 'currentColor',
  opacity: 0,
  transition: theme.transitions.create(['opacity', 'background-color']),
  '&.Wui-active': {
    opacity: 0.18
  },
  '*:focus &': {
    opacity: 0.08
  }
}));

const device = getDevice();

const ButtonBase: React.FC<ButtonBaseProps & RestProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiButtonBase' });

    const {
      autofocus = false,
      disabled = false,
      disabledTouchFeedback = false,
      className,
      children,
      component = 'button',
      theme,
      ...rest
    } = props;

    const styleProps = { disabled, disabledTouchFeedback };

    const classes = useClasses({ ...props, styleProps, name: 'WuiButtonBase' });

    const [touchActive, handleEvents] = useTouchFeedback({
      ...props,
      disabled: disabled || disabledTouchFeedback,
      type: device.desktop ? 'hover' : 'touch'
    });

    return (
      <ButtonBaseRoot
        as={component}
        aria-disabled={disabled}
        data-autofocus={autofocus}
        disabled={disabled}
        role="button"
        {...rest}
        styleProps={styleProps}
        ref={ref}
        theme={theme}
        className={css(classes.root, {
          'active-state': touchActive
        })}
        {...handleEvents}
      >
        {component !== 'input' ? (
          <React.Fragment>
            {children}
            {!disabledTouchFeedback && (
              <TouchFeedback className={css({ 'Wui-active': touchActive })} />
            )}
          </React.Fragment>
        ) : null}
      </ButtonBaseRoot>
    );
  }
);

export default ButtonBase;
