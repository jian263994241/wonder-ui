import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, PickStyleProps } from '../styles/types';
import clsx from 'clsx';
import { useClickAway, useForkRef } from '@wonder-ui/hooks';
import SnackbarContent from '../SnackbarContent';
import Grow from '../Grow';

export interface SnackbarProps extends BaseProps {
  actions?: React.ReactNode;
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
  children?: React.ReactElement;
  message?: React.ReactNode;
  visible?: boolean;
}

const SnackbarRoot = styled('div', {
  name: 'WuiSnackbar',
  slot: 'Root'
})<PickStyleProps<SnackbarProps, 'anchorOrigin'>>(({ theme, styleProps }) => {
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
    ...(styleProps.anchorOrigin.vertical === 'top'
      ? { top: 8 }
      : { bottom: 8 }),
    ...(styleProps.anchorOrigin.horizontal === 'left' && {
      justifyContent: 'flex-start'
    }),
    ...(styleProps.anchorOrigin.horizontal === 'right' && {
      justifyContent: 'flex-end'
    }),
    [theme.breakpoints.up('sm')]: {
      ...(styleProps.anchorOrigin.vertical === 'top'
        ? { top: 24 }
        : { bottom: 24 }),
      ...(styleProps.anchorOrigin.horizontal === 'center' && center),
      ...(styleProps.anchorOrigin.horizontal === 'left' && {
        left: 24,
        right: 'auto'
      }),
      ...(styleProps.anchorOrigin.horizontal === 'right' && {
        right: 24,
        left: 'auto'
      })
    }
  };
});

const Snackbar: React.FC<SnackbarProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiSnackbar' });
  const {
    action,
    anchorOrigin: { vertical, horizontal } = {
      vertical: 'bottom',
      horizontal: 'left'
    },
    className,
    children,
    message,
    visible,
    ...rest
  } = props;

  const nodeRef = React.useRef<HTMLElement>(null);
  const handleRef = useForkRef(nodeRef, ref);

  const styleProps = { anchorOrigin: { vertical, horizontal } };
  const classes = useClasses({ ...props, styleProps, name: 'WuiSnackbar' });

  const handleClickAway = () => {};

  useClickAway(handleClickAway, nodeRef, 'click');

  return (
    <SnackbarRoot
      styleProps={styleProps}
      className={clsx(classes.root, className)}
      ref={handleRef}
      {...rest}
    >
      <Grow appear in={visible}>
        {children || <SnackbarContent message={message} action={action} />}
      </Grow>
    </SnackbarRoot>
  );
});

export default Snackbar;
