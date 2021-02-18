import * as React from 'react';
import styled from '../styles/styled';
import { StyleTypeProps } from '../styles/types';
import useThemeProps from '../styles/useThemeProps';

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

interface TypographyStyleProps {
  /** 自动溢出省略 */
  noWrap: boolean;
  /**
   * @description 对齐
   * @default inherit
   */
  align: React.CSSProperties['textAlign'];
  /** 段落 */
  paragraph: boolean;
  /** 增加间距 */
  gutterBottom: boolean;
  /** 样式类型 */
  variant: keyof typeof defaultVariantMapping;
}

export const TypographyRoot = styled.span<TypographyStyleProps>(
  ({ theme, ...styleProps }) => ({
    margin: 0,
    ...theme.typography[styleProps.variant],
    textAlign: styleProps.align,
    ...(styleProps.noWrap && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }),
    ...(styleProps.gutterBottom && {
      marginBottom: '0.35em'
    }),
    ...(styleProps.paragraph && {
      marginBottom: 16
    })
  })
);

export interface TypographyProps
  extends StyleTypeProps<typeof TypographyRoot> {}

const Typography: React.FC<TypographyProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiTypography' });
    const {
      align = 'inherit',
      children,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      ...rest
    } = props;

    const _component =
      component || paragraph ? 'p' : defaultVariantMapping[variant];

    return (
      <TypographyRoot
        align={align}
        as={_component}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        ref={ref}
        variant={variant}
        {...rest}
      >
        {children}
      </TypographyRoot>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
