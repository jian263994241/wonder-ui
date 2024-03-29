import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { badgeClasses, BadgeClasses, useClasses } from './BadgeClasses';
import { capitalize, css, generateUtilityStyles } from '@wonder-ui/utils';
export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * @description 徽章颜色
   * @default primary
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * css api
   */
  classes?: Partial<BadgeClasses>;
  /** component  */
  component?: React.ElementType;
  /**
   * 隐藏角标
   * @default false
   */
  hideContent?: boolean;
  /**
   * @description 圆角徽章
   * @default false
   */
  rounded?: boolean;
  /**
   * 内容
   */
  text?: React.ReactNode;
}

const BadgeRoot = styled('div', {
  name: 'WuiBadge',
  slot: 'Root'
})({
  display: 'inline-block',
  position: 'relative'
});

const BadgeContent = styled('span', { name: 'WuiBadge', slot: 'Content' })<{
  styleProps: BadgeProps;
}>(({ theme, styleProps }) => {
  return {
    display: 'block',
    padding: '0.25em 0.55em',
    fontSize: '.75em',
    fontWeight: 400,
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 1,
    borderRadius: '.25rem',
    pointerEvents: 'none',
    userSelect: 'none',
    color: theme.palette[styleProps.color!]?.contrastText,
    backgroundColor: theme.palette[styleProps.color!]?.main,

    [`.${badgeClasses.rounded} > &`]: {
      borderRadius: '50rem'
    },

    [`.${badgeClasses.withChildren} > &`]: {
      position: 'absolute',
      top: 0,
      right: 0,
      transform: 'translate(50%,-50%)',
      transformOrigin: '100% 0',
      borderRadius: '50rem',
      zIndex: 99
    },
    '&:empty': {
      padding: '0.225rem',
      borderRadius: '50%'
    }
  };
});

const Badge = React.forwardRef<HTMLElement, BadgeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBadge' });
  const {
    children,
    className,
    color = 'primary',
    component,
    hideContent = false,
    rounded = false,
    text,
    ...rest
  } = props;

  const styleProps = { ...props, color, rounded };
  const classes = useClasses(styleProps);

  return (
    <BadgeRoot
      as={component}
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      {...rest}
    >
      {!hideContent && (
        <BadgeContent className={classes.content} styleProps={styleProps}>
          {text}
        </BadgeContent>
      )}

      {children}
    </BadgeRoot>
  );
});

export default Badge;
