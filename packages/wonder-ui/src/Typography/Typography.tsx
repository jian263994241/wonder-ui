import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { css } from '@wonder-ui/utils';
import {
  defaultVariantMapping,
  typographyClasses,
  TypographyStyleProps,
  useClasses
} from './TypographyClasses';

export interface TypographyProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'ref'> {
  /**
   * @description 对齐
   * @default inherit
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /**
   * class
   */
  classes?: Partial<typeof typographyClasses>;
  /**
   * @description 颜色
   * @default inherit
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  /**
   * Root element
   */
  component?: React.ElementType;
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
})<{ styleProps: TypographyStyleProps }>(({ theme, styleProps }) => ({
  margin: 0,
  ...theme.typography[styleProps.variant],
  textAlign: styleProps.align,

  [`&.${typographyClasses.colorPrimary}`]: {
    color: theme.palette.primary.main
  },
  [`&.${typographyClasses.colorTextPrimary}`]: {
    color: theme.palette.text.primary
  },
  [`&.${typographyClasses.colorSecondary}`]: {
    color: theme.palette.secondary.main
  },
  [`&.${typographyClasses.colorTextSecondary}`]: {
    color: theme.palette.text.secondary
  },
  [`&.${typographyClasses.colorError}`]: {
    color: theme.palette.error.main
  },

  [`&.${typographyClasses.lineClamp}`]: {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: styleProps.lineClamp,
    overflow: 'hidden'
  },
  [`&.${typographyClasses.noWrap}`]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  [`&.${typographyClasses.gutterBottom}`]: {
    marginBottom: '0.35em'
  },
  [`&.${typographyClasses.paragraph}`]: {
    marginBottom: 16
  }
}));

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTypography' });
    const {
      align = 'inherit',
      children,
      className,
      color = 'inherit',
      component,
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
      ...props,
      align,
      color,
      gutterBottom,
      lineClamp,
      noWrap,
      paragraph,
      variant
    };

    const classes = useClasses(styleProps);

    return (
      <TypographyRoot
        as={_component}
        className={css(classes.root, className)}
        ref={ref}
        styleProps={styleProps}
        {...rest}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
