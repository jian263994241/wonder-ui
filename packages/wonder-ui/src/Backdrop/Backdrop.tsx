import * as React from 'react';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import type { BaseProps, PickStyleProps } from '../styles/types';
import Fade from '../Fade';

export interface BackdropProps extends BaseProps {
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

const Backdrop: React.FC<BackdropProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBackdrop' });

  const {
    children,
    className,
    component,
    invisible = false,
    rootRef,
    visible,
    ...rest
  } = props;

  const styleProps = { invisible };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBackdrop' });

  return (
    <Fade in={visible}>
      <BackdropRoot
        as={component}
        className={classes.root}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </BackdropRoot>
    </Fade>
  );
});

export default Backdrop;
