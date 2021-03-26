import * as React from 'react';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import type { InProps, PickStyleProps } from '../styles/types';
import Fade from '../Fade';

export interface BackdropProps {
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description transparent background
   * @default false
   */
  invisible?: boolean;
  /**
   * @description show or hide
   * @default false
   */
  visible?: boolean;
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
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent',
  ...(styleProps.invisible && {
    backgroundColor: 'transparent'
  })
}));

export default function Backdrop<T>(inProps: InProps<T, BackdropProps>) {
  const props = useThemeProps({ props: inProps, name: 'WuiBackdrop' });

  const {
    children,
    className,
    invisible = false,
    visible,
    rootRef,
    ...rest
  } = props;

  const styleProps = { invisible };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBackdrop' });

  return (
    <Fade in={visible}>
      <BackdropRoot
        styleProps={styleProps}
        className={classes.root}
        ref={rootRef}
        {...rest}
      >
        {children}
      </BackdropRoot>
    </Fade>
  );
}
