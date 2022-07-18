import * as React from 'react';
import styled from '../styles/styled';
import Typography from '../Typography/Typography';
import useThemeProps from '../styles/useThemeProps';
import XIcon from '../icons/X';
import { alpha } from '../styles/colorManipulator';
import { css } from '@wonder-ui/utils';
import { tagClasses, useClasses } from './TagClasses';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  classes?: Partial<typeof tagClasses>;
  /**
   * 颜色
   * @default default
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * 类型
   * @default outlined
   */
  variant?: 'outlined' | 'contained';
  /**
   * 可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 关闭时调用
   */
  onClose?: () => void;
}

const TagRoot = styled(Typography, {
  name: 'WuiTag',
  slot: 'Root'
})<{ styleProps: TagProps }>(({ theme, styleProps }) => ({
  boxSizing: 'border-box',
  listStyle: 'none',
  display: 'inline-block',
  padding: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  border: '1px solid',
  borderColor: alpha(theme.palette.text.primary, 0.2),
  backgroundColor: alpha(theme.palette.text.primary, 0.018),
  userSelect: 'none',
  verticalAlign: 'middle',
  transition: theme.transitions.create([
    'color',
    'opacity',
    'background-color'
  ]),
  ...(styleProps.color &&
    styleProps.color != 'default' && {
      color: theme.palette[styleProps.color]?.main,
      borderColor: theme.palette[styleProps.color]?.main,
      backgroundColor: alpha(theme.palette[styleProps.color]?.main, 0.15),
      [`&.${tagClasses.contained}`]: {
        color: theme.palette[styleProps.color]?.contrastText,
        backgroundColor: theme.palette[styleProps.color]?.main
      }
    })
}));

const TagClose = styled('span', {
  name: 'WuiTag',
  slot: 'Close'
})(({ theme }) => ({
  cursor: 'pointer',
  textRendering: 'optimizeLegibility',
  marginLeft: theme.spacing(0.5),
  marginRight: -theme.spacing(0.5),
  verticalAlign: '-0.125em'
}));

const Tag = React.forwardRef<HTMLElement, TagProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiTag' });
  const {
    children,
    className,
    color = 'default',
    closable = false,
    variant = 'outlined',
    onClose,
    ...rest
  } = props;

  const styleProps = { ...props, color, variant };

  const classes = useClasses(styleProps);

  return (
    <TagRoot
      {...rest}
      ref={ref}
      className={css(classes.root, className)}
      styleProps={styleProps}
      variant="body2"
    >
      {children}
      {closable && (
        <TagClose
          role="img"
          aria-label="close"
          className={classes.close}
          tabIndex={-1}
          onClick={onClose}
        >
          <XIcon fontSize="inherit" />
        </TagClose>
      )}
    </TagRoot>
  );
});

export default Tag;
