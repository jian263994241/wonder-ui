import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { StyleProps } from '../styles/types';

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

export interface BadgeProps extends BadgeStyleProps {
  ref?: React.Ref<any>;
  className?: string;
  style?: React.CSSProperties;
}

const Badge: React.FC<BadgeProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBadge' });
  const {
    color = 'primary',
    className,
    rounded = false,
    children,
    ...rest
  } = props;

  const styleProps = { color, rounded };

  const classes = useClasses({ styleProps, className, name: 'WuiBadge' });

  return (
    <BadgeRoot
      ref={ref}
      styleProps={styleProps}
      className={classes.root}
      {...rest}
    >
      {children}
    </BadgeRoot>
  );
});

Badge.displayName = 'WuiBadge';

export default Badge;
