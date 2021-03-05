import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';
import createFCWithTheme from '../styles/createFCWithTheme';

export interface BadgeStyleProps {
  /**
   * @description 徽章颜色
   * @default primary
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * @description 圆角徽章
   * @default false
   */
  rounded?: boolean;
}

const BadgeRoot = styled('div', { name: 'WuiBadge', slot: 'Root' })<
  StyleProps<BadgeStyleProps>
>(({ theme, styleProps }) => ({
  display: 'inline-block',
  padding: '0.35em 0.65em',
  fontSize: '.75em',
  fontWeight: 700,
  lineHeight: 1,
  color: theme.palette[styleProps.color || 'primary'].contrastText,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 1,
  borderRadius: styleProps.rounded ? '50rem' : '.25rem',
  backgroundColor: theme.palette[styleProps.color || 'primary'].main,
  '&:empty': {
    display: 'none'
  }
}));

export interface BadgeProps extends BadgeStyleProps {}

const Badge = createFCWithTheme<BadgeProps>('WuiBadge', (props, ref) => {
  const {
    color = 'primary',
    className,
    rounded = false,
    children,
    ...rest
  } = props;

  const styleProps = { color, rounded };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBadge' });

  return (
    <BadgeRoot
      styleProps={styleProps}
      className={classes.root}
      ref={ref}
      {...rest}
    >
      {children}
    </BadgeRoot>
  );
});

export default Badge;
