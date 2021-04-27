import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';
import { emphasize } from '../styles/colorManipulator';
import Paper from '../Paper';

export interface SnackbarContentProps extends BaseProps {
  /**
   * 操作区
   */
  action?: React.ReactNode;
  /**
   * @ignore
   */
  classes?: ClassNameMap<'root' | 'message' | 'action'>;
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

const SnackbarContentRoot = styled(Paper, {
  name: 'WuiSnackbarContent',
  slot: 'Root'
})<PickStyleProps<SnackbarContentProps, 'center'>>(({ theme, styleProps }) => {
  const emphasis = theme.palette.mode === 'light' ? 0.75 : 0.98;
  const backgroundColor = emphasize(theme.palette.background.default, emphasis);

  return {
    ...theme.typography.body2,
    color: theme.palette.getContrastText(backgroundColor),
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '6px 16px',
    borderRadius: theme.shape.borderRadius,
    flexGrow: 1,

    ...(!styleProps.center && {
      [theme.breakpoints.up('sm')]: {
        flexGrow: 'initial',
        minWidth: 288
      }
    })
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

const SnackbarContent: React.FC<SnackbarContentProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiSnackbarContent' });
    const {
      action,
      children,
      className,
      center = false,
      theme,
      message,
      ...rest
    } = props;

    const styleProps = { center };
    const classes = useClasses({ ...props, name: 'WuiSnackbarContent' });

    return (
      <SnackbarContentRoot
        ref={ref}
        className={classes.root}
        theme={theme}
        styleProps={styleProps}
        {...rest}
      >
        <SnackbarContentMessage className={classes.message} theme={theme}>
          {message}
        </SnackbarContentMessage>
        {action && (
          <SnackbarContentAction className={classes.action} theme={theme}>
            {action}
          </SnackbarContentAction>
        )}
      </SnackbarContentRoot>
    );
  }
);

export default SnackbarContent;
