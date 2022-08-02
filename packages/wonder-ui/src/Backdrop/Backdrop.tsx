import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { createCssVars, css } from '@wonder-ui/utils';
import { useEventListener, useForkRef } from '@wonder-ui/hooks';
import type { BackdropProps } from './BackdropTypes';
import {
  COMPONENT_NAME,
  backdropClasses,
  backdropCssVars
} from './BackdropClasses';

const BackdropRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: BackdropProps }>(({ theme, styleProps }) => ({
  zIndex: backdropCssVars.value('zIndex', 1),
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  touchAction: 'none',
  backgroundColor: backdropCssVars.value(
    'color',
    alpha(
      theme.palette.common[styleProps.color!] || theme.palette.common.black,
      styleProps.opacity!
    )
  ),
  WebkitTapHighlightColor: 'transparent',
  [`&.${backdropClasses.invisible}`]: {
    backgroundColor: 'transparent'
  }
}));

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      color = 'black',
      opacity = 0.4,
      className,
      children,
      invisible = false,
      visible,
      duration,
      delay,
      style,
      theme,
      ...rest
    } = props;

    const rootRef = React.useRef(null);
    const handleRef = useForkRef(rootRef, ref);

    const disableTouchMove = (e: TouchEvent) => e.preventDefault();

    useEventListener(rootRef, 'touchmove', disableTouchMove, {
      passive: false
    });

    const styleProps = {
      ...props,
      color,
      opacity
    };

    return (
      <Fade
        in={visible}
        className={css(backdropClasses.root, className, {
          [backdropClasses.invisible]: invisible
        })}
        duration={duration}
        delay={delay}
        style={style}
        component={BackdropRoot}
        componentProps={{
          styleProps,
          ref: handleRef,
          ...rest
        }}
      >
        {children}
      </Fade>
    );
  }
);

export default Backdrop;
