/**
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Divider/Divider.js
 */
import * as React from 'react';
import { alpha } from '../styles/colorManipulator';
import useThemeProps from '../styles/useThemeProps';
import useClasses from '../styles/useClasses';
import type { StyledComponentProps, StyleProps } from '../styles/types';
import styled from '../styles/styled';

export interface DividerStyleProps {
  /**
   * @description 定位方式
   * @default false
   */
  absolute?: boolean;
  /**
   * @ignore
   */
  withChildren?: boolean;
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

const DividerRoot = styled('div', { name: 'WuiDivider', slot: 'Root' })<
  StyleProps<DividerStyleProps>
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
    /* Styles applied to the root element if divider have text and `orientation="vertical"`. */
    ...(styleProps.withChildren &&
      styleProps.orientation === 'vertical' && {
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
  })
);

const DividerWrapper = styled('span', { name: 'WuiDivider', slot: 'Wrapper' })<
  StyleProps<DividerStyleProps>
>(({ theme, styleProps }) => {
  return {
    display: 'inline-block',
    paddingLeft: theme.spacing(1.2),
    paddingRight: theme.spacing(1.2),
    ...(styleProps.orientation === 'vertical' && {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2)
    })
  };
});

export interface DividerProps extends StyledComponentProps<typeof DividerRoot> {
  classes?: Partial<Record<'root' | 'wrapper', string>>;
}

const Divider: React.FC<DividerProps> = React.forwardRef((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'WuiDivider' });

  const {
    className,
    classes: classesInput,
    children,
    component = children ? 'div' : 'hr',
    theme,
    absolute = false,
    flexItem = false,
    light = false,
    orientation = 'horizontal',
    textAlign = 'center',
    variant = 'fullWidth',
    ...rest
  } = props;

  const styleProps = {
    absolute,
    flexItem,
    light,
    orientation,
    textAlign,
    variant,
    withChildren: !!children
  };

  const classes = useClasses({
    styleProps,
    className,
    name: 'WuiDivider',
    classes: classesInput
  });

  return (
    <DividerRoot
      className={classes.root}
      as={component}
      ref={ref}
      theme={theme}
      styleProps={styleProps}
      {...rest}
    >
      {children ? (
        <DividerWrapper
          className={classes.wrapper}
          theme={theme}
          styleProps={styleProps}
        >
          {children}
        </DividerWrapper>
      ) : null}
    </DividerRoot>
  );
});

Divider.displayName = 'WuiDivider';

export default Divider;
