/**
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Divider/Divider.js
 */
import * as React from 'react';
import { alpha } from '../styles/colorManipulator';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type { BaseProps, ClassNameMap, PickStyleProps } from '../styles/types';

export interface DividerProps extends BaseProps {
  /**
   * @description 定位方式
   * @default false
   */
  absolute?: boolean;
  /**
   * @description css api
   */
  classes?: ClassNameMap<'root' | 'wrapper'>;
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
  direction?: 'horizontal' | 'vertical';
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

const DividerRoot = styled('div', { name: 'WuiDivider', slot: 'Root' })<
  PickStyleProps<
    DividerProps,
    | 'absolute'
    | 'direction'
    | 'flexItem'
    | 'light'
    | 'textAlign'
    | 'variant'
    | 'withChildren',
    { withChildren: boolean }
  >
>(
  ({ theme, styleProps }) => {
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
      /* Styles applied to the root element if `direction="vertical"`. */
      ...(styleProps.direction === 'vertical' && {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin'
      }),
      /* Styles applied to the root element if `flexItem={true}`. */
      ...(styleProps.flexItem && {
        alignSelf: 'stretch',
        height: 'auto'
      })
    };
  },
  ({ theme, styleProps }) => ({
    /* Styles applied to the root element if divider have text. */
    ...(styleProps.withChildren && {
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
    })
  }),
  ({ theme, styleProps }) => ({
    /* Styles applied to the root element if divider have text and `direction="vertical"`. */
    ...(styleProps.withChildren &&
      styleProps.direction === 'vertical' && {
        flexDirection: 'column',
        '&::before, &::after': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: `thin solid ${theme.palette.divider}`,
          transform: 'translateX(0%)'
        }
      })
  }),
  ({ styleProps }) => ({
    /* Styles applied to the root element if `textAlign="right" direction="horizontal"`. */
    ...(styleProps.textAlign === 'right' &&
      styleProps.direction !== 'vertical' && {
        '&::before': {
          width: '90%'
        },
        '&::after': {
          width: '10%'
        }
      }),
    /* Styles applied to the root element if `textAlign="left" direction="horizontal"`. */
    ...(styleProps.textAlign === 'left' &&
      styleProps.direction !== 'vertical' && {
        '&::before': {
          width: '10%'
        },
        '&::after': {
          width: '90%'
        }
      })
  })
);

const DividerWrapper = styled('span', { name: 'WuiDivider', slot: 'Wrapper' })<
  PickStyleProps<
    DividerProps,
    | 'absolute'
    | 'direction'
    | 'flexItem'
    | 'light'
    | 'textAlign'
    | 'variant'
    | 'withChildren'
  >
>(({ theme, styleProps }) => {
  return {
    display: 'inline-block',
    paddingLeft: theme.spacing(1.2),
    paddingRight: theme.spacing(1.2),
    ...(styleProps.direction === 'vertical' && {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2)
    })
  };
});

const Divider: React.FC<DividerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDivider' });
  const {
    absolute = false,
    children,
    className,
    component = children ? 'div' : 'hr',
    direction = 'horizontal',
    flexItem = false,
    light = false,
    textAlign = 'center',
    theme,
    variant = 'fullWidth',
    ...rest
  } = props;

  const styleProps = {
    absolute,
    flexItem,
    light,
    direction,
    textAlign,
    variant,
    withChildren: !!children
  };

  const classes = useClasses({
    ...props,
    styleProps,
    name: 'WuiDivider'
  });

  return (
    <DividerRoot
      as={component}
      className={classes.root}
      ref={ref}
      styleProps={styleProps}
      theme={theme}
      {...rest}
    >
      {children ? (
        <DividerWrapper
          className={classes.wrapper}
          styleProps={styleProps}
          theme={theme}
        >
          {children}
        </DividerWrapper>
      ) : null}
    </DividerRoot>
  );
});

export default Divider;
