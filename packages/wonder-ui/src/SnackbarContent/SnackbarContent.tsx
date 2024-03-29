import * as React from 'react';
import Paper from '../Paper';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { emphasize, alpha } from '../styles/colorManipulator';
import { snackbarContentClasses, useClasses } from './SnackbarContentClasses';
import Grow, { GrowProps } from '../Grow';

export interface SnackbarContentProps extends GrowProps {
  /**
   * 操作区
   */
  action?: JSX.Element;
  /**
   * @ignore
   */
  classes?: Partial<typeof snackbarContentClasses>;
  /**
   * @ignore
   */
  center?: boolean;
  /**
   * 内容
   */
  message?: React.ReactNode;
  /**
   * @ignore
   */
  role?: string;
}

const SnackbarContentRoot = styled(Paper.withComponent(Grow), {
  name: 'WuiSnackbarContent',
  slot: 'Root',
  shouldForwardProp: () => true
})(({ theme }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    ...theme.typography.body2,
    color: theme.palette.getContrastText(backgroundColor),
    backgroundColor: alpha(backgroundColor, 0.92),
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,

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

const SnackbarContentMessage = styled('div', {
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
      <SnackbarContentRoot ref={ref} {...rest} classes={{ root: classes.root }}>
        <SnackbarContentMessage className={classes.message}>
          {message}
        </SnackbarContentMessage>
        {action && (
          <SnackbarContentAction className={classes.action}>
            {action}
          </SnackbarContentAction>
        )}
      </SnackbarContentRoot>
    );
  }
);

export default SnackbarContent;
