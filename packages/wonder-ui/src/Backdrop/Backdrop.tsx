import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import {
  css,
  createCssVars,
  generateUtilityClasses,
  withStopPropagation
} from '@wonder-ui/utils';
import { useEventListener, useForkRef } from '@wonder-ui/hooks';
import type { BackdropProps } from './BackdropTypes';

const COMPONENT_NAME = 'WuiBackdrop';

export const backdropClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'invisible'
]);

const cssVars = createCssVars(COMPONENT_NAME, ['zIndex']);

const BackdropRoot = styled(Fade, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: BackdropProps }>(({ theme, styleProps }) => ({
  zIndex: cssVars.value('zIndex', -1),
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  touchAction: 'none',
  backgroundColor: `var(--backdrop-color, ${alpha(
    theme.palette.common[styleProps.color!] || theme.palette.common.black,
    styleProps.opacity!
  )})`,
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

    return withStopPropagation(
      <BackdropRoot
        styleProps={styleProps}
        in={visible}
        className={css(backdropClasses.root, className, {
          [backdropClasses.invisible]: invisible
        })}
        style={style}
        duration={duration}
        ref={handleRef}
        {...rest}
      >
        {children}
      </BackdropRoot>
    );
  }
);

export default Backdrop;
