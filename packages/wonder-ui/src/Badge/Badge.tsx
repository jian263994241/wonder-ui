import * as React from 'react';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import type { BaseProps, PickStyleProps } from '../styles/types';

export interface BadgeProps extends BaseProps {
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
  /**
   * @description 角标
   * @default false
   */
  sup?: boolean;
}

const BadgeRoot = styled('span', { name: 'WuiBadge', slot: 'Root' })<
  PickStyleProps<BadgeProps, 'color' | 'rounded' | 'sup'>
>(({ theme, styleProps }) => {
  return {
    display: 'inline-block',
    padding: '0.25em 0.55em',
    fontSize: '.75em',
    fontWeight: 500,
    lineHeight: 1,
    color: theme.palette[styleProps.color].contrastText,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 1,
    borderRadius: styleProps.rounded ? '50rem' : '.25rem',
    backgroundColor: theme.palette[styleProps.color].main,
    ...(styleProps.sup && {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(50%,-50%)',
      transformOrigin: '100% 0'
    }),
    '&:empty': {
      padding: '0.225rem',
      borderRadius: '50%'
    }
  };
});

const Badge: React.FC<BadgeProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBadge' });
  const {
    children,
    className,
    color = 'primary',
    component,
    rounded = false,
    sup = false,
    ...rest
  } = props;

  const styleProps = { color, rounded, sup };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBadge' });

  return (
    <BadgeRoot
      as={component}
      className={classes.root}
      ref={ref}
      styleProps={styleProps}
      {...rest}
    >
      {children}
    </BadgeRoot>
  );
});

export default Badge;
