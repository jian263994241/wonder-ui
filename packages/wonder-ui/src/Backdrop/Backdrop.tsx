import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import createFCWithTheme from '../styles/createFCWithTheme';

interface BackdropStyleProps {
  transparent?: boolean;
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
  ...(styleProps.transparent && {
    backgroundColor: 'transparent'
  })
}));

export interface BackdropProps extends BackdropStyleProps {}

const Backdrop = createFCWithTheme<BackdropProps>(
  'WuiBackdrop',
  (props, ref) => {
    const { transparent } = props;

    const styleProps = { transparent };

    const classes = useClasses({ ...props, styleProps, name: 'WuiBackdrop' });

    return null;
  }
);

export default Backdrop;
