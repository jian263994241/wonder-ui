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

  sup?: boolean;
}

const BadgeRoot = styled('div', { name: 'WuiBadge', slot: 'Root' })<
  StyleProps<BadgeStyleProps>
>(({ theme, styleProps }) => {
  return {
    display: 'inline-block',
    padding: '0.25em 0.55em',
    fontSize: '.65em',
    fontWeight: 700,
    lineHeight: 1,
    color: theme.palette[styleProps.color || 'primary'].contrastText,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 1,
    borderRadius: styleProps.rounded ? '50rem' : '.25rem',
    backgroundColor: theme.palette[styleProps.color || 'primary'].main,
    ...(styleProps.sup && {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(50%,-50%)',
      transformOrigin: '100% 0'
    }),
    '&:empty': {
      padding: '0.225rem'
    }
  };
});

export interface BadgeProps extends BadgeStyleProps {
  text?: React.ReactNode;
}

const Badge = createFCWithTheme<BadgeProps>('WuiBadge', (props, ref) => {
  const {
    color = 'primary',
    className,
    rounded = false,
    children,
    text,
    sup,
    ...rest
  } = props;

  const styleProps = { color, rounded, sup };
  const classes = useClasses({ ...props, styleProps, name: 'WuiBadge' });

  return (
    <BadgeRoot
      styleProps={styleProps}
      className={classes.root}
      ref={ref}
      {...rest}
    >
      {text}
    </BadgeRoot>
  );
});

export default Badge;
