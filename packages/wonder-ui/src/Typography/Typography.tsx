import * as React from 'react';
import { StyledComponentProps } from '../styles/types';
import styled from '../styles/wuiStyled';
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

interface StyleProps {
  styleProps: TypographyStyleProps;
}

export const TypographyRoot = styled('span', {
  name: 'WuiTypography',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
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
}));

export interface TypographyProps
  extends StyledComponentProps<typeof TypographyRoot> {}

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

    const styleProps = {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant
    };

    return (
      <TypographyRoot
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

Typography.displayName = 'Typography';

export default Typography;
