import * as React from 'react';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import type { BaseProps, PickStyleProps } from '../styles/types';
import { useForkRef } from '@wonder-ui/hooks';
import Fade from '../Fade';
import { TransitionProps } from '../Transition';

export interface BackdropProps extends BaseProps {
  /**
   * children
   */
  children?: React.ReactNode;
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

const BackdropRoot = styled('div', { name: 'WuiBackdrop', slot: 'Root' })<
  PickStyleProps<BackdropProps, 'invisible'>
>(({ styleProps }) => ({
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
  ...(styleProps.invisible && {
    backgroundColor: 'transparent'
  })
}));

const Backdrop: React.FC<BackdropProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBackdrop' });

  const {
    children,
    className,
    component,
    invisible = false,
    rootRef,
    visible,
    transitionDuration,
    ...rest
  } = props;
  const nodeRef = React.useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, ref);

  const styleProps = { invisible };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBackdrop' });

  const disableTouchMove = (e: Event) => e.preventDefault();

  React.useEffect(() => {
    if (nodeRef.current) {
      const root = nodeRef.current;
      root.addEventListener('touchmove', disableTouchMove, { passive: false });
      return () => {
        root.removeEventListener('touchmove', disableTouchMove);
      };
    }
  }, []);

  return (
    <Fade in={visible} timeout={transitionDuration} ref={handleRef} {...rest}>
      <BackdropRoot
        as={component}
        className={classes.root}
        styleProps={styleProps}
      >
        {children}
      </BackdropRoot>
    </Fade>
  );
});

export default Backdrop;
