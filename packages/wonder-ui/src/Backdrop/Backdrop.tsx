import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps, StyledComponentProps } from '../styles/types';
import createFCWithTheme from '../styles/createFCWithTheme';
import Fade from '../Fade';

interface BackdropStyleProps {
  /**
   * 透明背景
   */
  invisible?: boolean;
}

const BackdropRoot = styled('div', { name: 'WuiBackdrop', slot: 'Root' })<
  StyleProps<BackdropStyleProps>
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

export interface BackdropProps
  extends StyledComponentProps<typeof BackdropRoot> {
  /**
   * 是否显示
   */
  visible?: boolean;
}

const Backdrop = createFCWithTheme<BackdropProps>(
  'WuiBackdrop',
  (props, ref) => {
    const { children, className, invisible = false, visible, ...rest } = props;

    const styleProps = { invisible };

    const classes = useClasses({ ...props, styleProps, name: 'WuiBackdrop' });

    return (
      <Fade in={visible}>
        <BackdropRoot
          styleProps={styleProps}
          className={classes.root}
          ref={ref}
          {...rest}
        >
          {children}
        </BackdropRoot>
      </Fade>
    );
  }
);

export default Backdrop;
