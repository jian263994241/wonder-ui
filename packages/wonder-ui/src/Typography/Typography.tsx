import * as React from 'react';
import { StyledComponentProps } from '../styles/types';
import styled from '../styles/styled';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';

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

export interface TypographyStyleProps {
  /**
   * @description 对齐
   * @default inherit
   */
  align: React.CSSProperties['textAlign'];
  /**
   * @description 颜色
   * @default inherit
   */
  color: 'inherit' | 'primary' | 'secondary' | 'hint';

  /** 不换行 */
  noWrap: boolean;
  /**
   * 多行省略
   */
  lineClamp?: number;
  /** 段落 */
  paragraph: boolean;
  /** 增加间距 */
  gutterBottom: boolean;
  /** 样式类型 */
  variant: keyof typeof defaultVariantMapping;
}

interface StyleProps {
  styleProps: TypographyStyleProps;
}

export const TypographyRoot = styled('span', {
  name: 'WuiTypography',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
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
  ...(styleProps.lineClamp != undefined &&
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

export interface TypographyProps
  extends StyledComponentProps<typeof TypographyRoot> {}

const Typography = createFCWithTheme<TypographyProps>(
  'WuiTypography',
  (props, ref) => {
    const {
      align = 'inherit',
      children,
      className,
      component,
      color = 'inherit',
      gutterBottom = false,
      lineClamp,
      noWrap = false,
      paragraph = false,
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
        className={classes.root}
        as={_component}
        styleProps={styleProps}
        ref={ref}
        {...rest}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
