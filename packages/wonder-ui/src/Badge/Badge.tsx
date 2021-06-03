import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { useClasses, badgeClasses } from './BadgeClasses';
import { css, generateUtilityStyles, capitalize } from '@wonder-ui/utils';
export interface BadgeProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
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
  /** component  */
  component?: React.ElementType;
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

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
] as const;

const BadgeContent = styled('span', { name: 'WuiBadge', slot: 'Content' })(
  ({ theme }) => {
    return {
      display: 'block',
      padding: '0.25em 0.55em',
      fontSize: '.75em',
      fontWeight: 500,
      lineHeight: 1,
      textAlign: 'center',
      whiteSpace: 'nowrap',
      verticalAlign: 1,
      borderRadius: '.25rem',
      pointerEvents: 'none',

      ...generateUtilityStyles(colors, (styles, color) => {
        const colorName = 'color' + capitalize(color);
        //@ts-expect-error
        styles[`.${badgeClasses[colorName]} > &`] = {
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main
        };
      }),

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
  }
);

const Badge = React.forwardRef<HTMLElement, BadgeProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiBadge' });
  const {
    children,
    className,
    color = 'primary',
    component,
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
      <BadgeContent className={classes.content}>{text}</BadgeContent>
      {children}
    </BadgeRoot>
  );
});

export default Badge;
