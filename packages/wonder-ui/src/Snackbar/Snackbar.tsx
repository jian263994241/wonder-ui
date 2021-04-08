import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface SnackbarProps extends BaseProps {
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
}

const SnackbarRoot = styled('div', {
  name: 'WuiSnackbar',
  slot: 'Root'
})<PickStyleProps<SnackbarProps, 'anchorOrigin'>>(({ theme, styleProps }) => {
  const top1 = { top: 8 };
  const bottom1 = { bottom: 8 };
  const right = { justifyContent: 'flex-end' };
  const left = { justifyContent: 'flex-start' };
  const top3 = { top: 24 };
  const bottom3 = { bottom: 24 };
  const right3 = { right: 24 };
  const left3 = { left: 24 };
  const center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };

  return {
    zIndex: theme.zIndex.snackbar,
    position: 'fixed',
    display: 'flex',
    left: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    ...(styleProps.anchorOrigin.vertical === 'top' ? top1 : bottom1),
    ...(styleProps.anchorOrigin.horizontal === 'left' && left),
    ...(styleProps.anchorOrigin.horizontal === 'right' && right),
    [theme.breakpoints.up('sm')]: {
      ...(styleProps.anchorOrigin.vertical === 'top' ? top3 : bottom3),
      ...(styleProps.anchorOrigin.horizontal === 'center' && center),
      ...(styleProps.anchorOrigin.horizontal === 'left' && left3),
      ...(styleProps.anchorOrigin.horizontal === 'right' && right3)
    }
  };
});

const Snackbar: React.FC<SnackbarProps> = React.forwardRef((inProps, ref) => {
  return null;
});

export default Snackbar;
