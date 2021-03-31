import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import { PickStyleProps, InProps } from '../styles/types';

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
} as const;

export interface TypographyProps {
  /**
   * @description 对齐
   * @default inherit
   */
  align?: React.CSSProperties['textAlign'];
  /**
   * @description 颜色
   * @default inherit
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'hint';
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default span
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * @description 不换行
   * @default false
   */
  noWrap?: boolean;
  /**
   * @description 多行省略
   * @default 0
   */
  lineClamp?: number;
  /**
   * @description 段落
   * @default false
   */
  paragraph?: boolean;
  /**
   * @description 增加间距
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * @description 样式类型
   * @default body1
   */
  variant?: keyof typeof defaultVariantMapping;
}

export const TypographyRoot = styled('span', {
  name: 'WuiTypography',
  slot: 'Root'
})<
  PickStyleProps<
    TypographyProps,
    | 'align'
    | 'color'
    | 'variant'
    | 'gutterBottom'
    | 'lineClamp'
    | 'noWrap'
    | 'paragraph'
  >
>(({ theme, styleProps }) => ({
  margin: 0,
  textAlign: styleProps.align,
  color:
    styleProps.color === 'inherit'
      ? styleProps.color
      : theme.palette.text[styleProps.color],
  ...theme.typography[styleProps.variant],
  //单行展示
  ...(styleProps.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    WebkitLineClamp: 2,
    maxHeight: 22
  }),
  //多行省略
  ...(styleProps.lineClamp != 0 &&
    !styleProps.noWrap && {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: styleProps.lineClamp,
      overflow: 'hidden'
    }),
  //间距
  ...(styleProps.gutterBottom && {
    marginBottom: '0.35em'
  }),
  //段落
  ...(styleProps.paragraph && {
    marginBottom: 16
  })
}));

export default function Typography<P extends InProps<TypographyProps>>(
  inProps: P
) {
  const props = useThemeProps({ props: inProps, name: 'WuiTypography' });
  const {
    align = 'inherit',
    children,
    className,
    color = 'inherit',
    component,
    gutterBottom = false,
    lineClamp = 0,
    noWrap = false,
    paragraph = false,
    rootRef,
    variant = 'body1',
    ...rest
  } = props;

  const _component =
    component || (paragraph ? 'p' : defaultVariantMapping[variant]);

  const styleProps = {
    align,
    color,
    gutterBottom,
    lineClamp,
    noWrap,
    paragraph,
    variant
  };

  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiTypography'
  });

  return (
    <TypographyRoot
      as={_component}
      className={classes.root}
      ref={rootRef}
      styleProps={styleProps}
      {...rest}
    >
      {children}
    </TypographyRoot>
  );
}
