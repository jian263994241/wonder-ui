/**
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Divider/Divider.js
 */
import * as React from 'react';
import styled from '../styles/styled';
import { alpha } from '../styles/colorManipulator';
import useThemeProps from '../styles/useThemeProps';
import type { StyledComponentProps, StyleProps } from '../styles/types';

interface DividerStyleProps {
  /**
   * @description 定位方式
   * @default false
   */
  absolute?: boolean;
  /**
   * @description 更亮
   * @default false
   */
  light?: boolean;
  /**
   * @description 类型
   * @default fullWidth
   */
  variant?: 'inset' | 'middle' | 'fullWidth';
  /**
   * @description 方向
   * @default horizontal
   */
  orientation: 'horizontal' | 'vertical';
  /**
   * @description flex 子节点
   * @default false
   */
  flexItem?: boolean;
  /**
   * @description 水平方向下的文本对齐方式
   * @default center
   */
  textAlign?: 'center' | 'left' | 'right';
}

const DividerRoot = styled.div<StyleProps<DividerStyleProps>>(
  ({ theme, styleProps, children }) => {
    return {
      margin: 0, // Reset browser default style.
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: theme.palette.divider,
      borderBottomWidth: 'thin',
      ...(styleProps.absolute && {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
      }),
      /* Styles applied to the root element if `absolute={true}`. */
      ...(styleProps.light && {
        borderColor: alpha(theme.palette.divider, 0.08)
      }),
      /* Styles applied to the root element if `variant="inset"`. */
      ...(styleProps.variant === 'inset' && {
        marginLeft: 72
      }),
      /* Styles applied to the root element if `variant="middle"`. */
      ...(styleProps.variant === 'middle' && {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }),
      /* Styles applied to the root element if `orientation="vertical"`. */
      ...(styleProps.orientation === 'vertical' && {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin'
      }),
      /* Styles applied to the root element if `flexItem={true}`. */
      ...(styleProps.flexItem && {
        alignSelf: 'stretch',
        height: 'auto'
      }),

      /* Styles applied to the root element if divider have text. */
      ...(children && {
        display: 'flex',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        border: 0,
        '&::before, &::after': {
          position: 'relative',
          width: '100%',
          borderTop: `thin solid ${theme.palette.divider}`,
          top: '50%',
          content: '""',
          transform: 'translateY(50%)'
        }
      }),

      /* Styles applied to the root element if divider have text and `orientation="vertical"`. */
      ...(children &&
        styleProps.orientation === 'vertical' && {
          flexDirection: 'column',
          '&::before, &::after': {
            position: 'relative',
            content: '""',
            height: '100%',
            top: '0%',
            left: '50%',
            borderTop: 0,
            borderLeft: `thin solid ${theme.palette.divider}`,
            transform: 'translateX(0%)'
          }
        }),

      /* Styles applied to the root element if `textAlign="right" orientation="horizontal"`. */
      ...(styleProps.textAlign === 'right' &&
        styleProps.orientation !== 'vertical' && {
          '&::before': {
            width: '90%'
          },
          '&::after': {
            width: '10%'
          }
        }),
      /* Styles applied to the root element if `textAlign="left" orientation="horizontal"`. */
      ...(styleProps.textAlign === 'left' &&
        styleProps.orientation !== 'vertical' && {
          '&::before': {
            width: '10%'
          },
          '&::after': {
            width: '90%'
          }
        })
    };
  }
);

const DividerWrapper = styled.span<StyleProps<DividerStyleProps>>(
  ({ theme, styleProps }) => {
    return {
      display: 'inline-block',
      paddingLeft: theme.spacing(1.2),
      paddingRight: theme.spacing(1.2),
      ...(styleProps.orientation === 'vertical' && {
        paddingTop: theme.spacing(1.2),
        paddingBottom: theme.spacing(1.2)
      })
    };
  }
);

export interface DividerProps
  extends StyledComponentProps<typeof DividerRoot> {}

const Divider: React.FC<DividerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDivider' });

  const {
    absolute = false,
    children,
    component = children ? 'div' : 'hr',
    flexItem = false,
    light = false,
    orientation = 'horizontal',
    textAlign = 'center',
    theme,
    variant = 'fullWidth',
    ...rest
  } = props;

  const styleProps = {
    absolute,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  };

  return (
    <DividerRoot
      as={component}
      ref={ref}
      theme={theme}
      styleProps={styleProps}
      {...rest}
    >
      {children ? (
        <DividerWrapper theme={theme} styleProps={styleProps}>
          {children}
        </DividerWrapper>
      ) : null}
    </DividerRoot>
  );
});

Divider.displayName = 'WuiDivider';

export default Divider;