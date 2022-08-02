import * as React from 'react';
import Grow, { GrowProps } from '../Grow';
import Paper from '../Paper';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import { alpha, emphasize } from '../styles/colorManipulator';
import { snackbarContentClasses, useClasses } from './SnackbarContentClasses';
import { css } from '@wonder-ui/utils';

export interface SnackbarContentProps extends GrowProps {
  /**
   * 操作区
   */
  action?: JSX.Element;

  classes?: Partial<typeof snackbarContentClasses>;

  center?: boolean;
  /**
   * 内容
   */
  message?: React.ReactNode;

  role?: string;
}

const SnackbarContentRoot = styled(Paper, {
  name: 'WuiSnackbarContent',
  slot: 'Root'
})(({ theme }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    color: theme.palette.getContrastText(backgroundColor),
    backgroundColor: alpha(backgroundColor, 0.92),
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius[2],

    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexGrow: 1,

    [theme.breakpoints.up('sm')]: {
      flexGrow: 'initial',
      minWidth: 288
    },

    [`&.${snackbarContentClasses.centered}`]: {
      minWidth: 'auto'
    }
  };
});

const SnackbarContentMessage = styled(Typography, {
  name: 'WuiSnackbarContent',
  slot: 'Message'
})({
  padding: '8px 0'
});

const SnackbarContentAction = styled('div', {
  name: 'WuiSnackbarContent',
  slot: 'Action'
})({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  paddingLeft: 16,
  marginRight: -8
});

const SnackbarContent = React.forwardRef<HTMLDivElement, SnackbarContentProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiSnackbarContent' });
    const {
      action,
      children,
      className,
      center = false,
      message,
      ...rest
    } = props;

    const styleProps = { ...props, center };
    const classes = useClasses(styleProps);

    return (
      <Grow
        component={SnackbarContentRoot}
        componentProps={{ className: css(classes.root, className), ref }}
        {...rest}
      >
        <SnackbarContentMessage variant="body2" className={classes.message}>
          {message}
        </SnackbarContentMessage>
        {action && (
          <SnackbarContentAction className={classes.action}>
            {action}
          </SnackbarContentAction>
        )}
      </Grow>
    );
  }
);

export default SnackbarContent;
