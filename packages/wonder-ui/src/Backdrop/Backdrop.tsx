import * as React from 'react';
import Fade from '../Fade';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { TransitionProps } from '../Transition';
import { useForkRef } from '@wonder-ui/hooks';
import { useClasses, backdropClasses } from './BackdropClasses';
import { css } from '@wonder-ui/utils';
export interface BackdropProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
  /**
   * children
   */
  children?: React.ReactNode;
  /**
   * Root
   */
  component?: React.ElementType;
  /**
   * Transparent background
   * @default false
   */
  invisible?: boolean;
  /**
   * Show or hide
   * @default false
   */
  visible: boolean;
  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration?: TransitionProps['timeout'];
}

const BackdropRoot = styled('div', { name: 'WuiBackdrop', slot: 'Root' })({
  zIndex: -1,
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  WebkitTapHighlightColor: 'transparent',
  [`&.${backdropClasses.invisible}`]: {
    backgroundColor: 'transparent'
  }
});

const Backdrop = React.forwardRef<HTMLElement, BackdropProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiBackdrop' });

    const {
      children,
      className,
      component,
      invisible = false,
      visible,
      transitionDuration,
      ...rest
    } = props;
    const nodeRef = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(nodeRef, ref);

    const styleProps = { ...props, invisible };
    const classes = useClasses(styleProps);

    const disableTouchMove = (e: Event) => e.preventDefault();

    React.useEffect(() => {
      if (nodeRef.current) {
        const root = nodeRef.current;
        root.addEventListener('touchmove', disableTouchMove, {
          passive: false
        });
        return () => {
          root.removeEventListener('touchmove', disableTouchMove);
        };
      }
    }, []);

    return (
      <Fade in={visible} timeout={transitionDuration} ref={handleRef} {...rest}>
        <BackdropRoot as={component} className={css(classes.root, className)}>
          {children}
        </BackdropRoot>
      </Fade>
    );
  }
);

export default Backdrop;
