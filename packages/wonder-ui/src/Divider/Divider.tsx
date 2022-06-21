import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { alpha } from '../styles/colorManipulator';
import { composeClasses, css, generateUtilityClasses } from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiDivider';

export const dividerClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'absolute',
  'inset',
  'middle',
  'flexItem',
  'light',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical'
]);

const useClasses = (styleProps: DividerStyleProps) => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    direction,
    textAlign,
    variant
  } = styleProps;

  const slots = {
    root: [
      'root',
      absolute && 'absolute',
      variant,
      light && 'light',
      direction === 'vertical' && 'vertical',
      flexItem && 'flexItem',
      !!children && 'withChildren',
      !!children && direction === 'vertical' && 'withChildrenVertical',
      textAlign === 'right' && direction !== 'vertical' && 'textAlignRight',
      textAlign === 'left' && direction !== 'vertical' && 'textAlignLeft'
    ],
    wrapper: ['wrapper', direction === 'vertical' && 'wrapperVertical']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

export interface DividerProps {
  /**
   * 定位方式
   * @default false
   */
  absolute?: boolean;
  /**
   * 节点
   */
  component?: React.ElementType;
  /**
   *  css api
   */
  classes?: Partial<typeof dividerClasses>;
  /**
   * 更亮
   * @default false
   */
  light?: boolean;
  /**
   * 类型
   * @default fullWidth
   */
  variant?: 'inset' | 'middle' | 'fullWidth';
  /**
   * 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * flex 子节点
   * @default false
   */
  flexItem?: boolean;
  /**
   * 水平方向下的文本对齐方式
   * @default center
   */
  textAlign?: 'center' | 'left' | 'right';

  className?: string;

  style?: React.CSSProperties;
  /**
   * 内容
   */
  children?: React.ReactNode;
}

interface DividerStyleProps extends DividerProps {}

const DividerRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })(
  ({ theme }) => {
    return {
      margin: 0, // Reset browser default style.
      flexShrink: 0,
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: `var(--divider-color, ${theme.palette.divider})`,
      borderBottomWidth: 'thin',
      [`&.${dividerClasses.absolute}`]: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
      },
      [`&.${dividerClasses.light}`]: {
        borderColor: `var(--divider-color, ${alpha(
          theme.palette.divider,
          0.08
        )})`
      },
      [`&.${dividerClasses.middle}`]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [`&.${dividerClasses.vertical}`]: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          marginLeft: 'unset',
          marginRight: 'unset'
        }
      },
      [`&.${dividerClasses.vertical}`]: {
        height: '100%',
        borderBottomWidth: 0,
        borderRightWidth: 'thin'
      },
      [`&.${dividerClasses.flexItem}`]: {
        alignSelf: 'stretch',
        height: 'auto'
      },
      [`&.${dividerClasses.withChildren}`]: {
        display: 'flex',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        border: 0,
        '&::before, &::after': {
          position: 'relative',
          width: '100%',
          borderTop: `thin solid var(--divider-color, ${theme.palette.divider})`,
          top: '50%',
          content: '""',
          transform: 'translateY(50%)'
        }
      },
      [`&.${dividerClasses.withChildrenVertical}`]: {
        flexDirection: 'column',
        '&::before, &::after': {
          height: '100%',
          top: '0%',
          left: '50%',
          borderTop: 0,
          borderLeft: `thin solid var(--divider-color, ${theme.palette.divider})`,
          transform: 'translateX(0%)'
        }
      },
      [`&.${dividerClasses.textAlignRight}:not(.${dividerClasses.vertical})`]: {
        '&::before': {
          width: '90%'
        },
        '&::after': {
          width: '10%'
        }
      },
      [`&.${dividerClasses.textAlignLeft}:not(.${dividerClasses.vertical})`]: {
        '&::before': {
          width: '10%'
        },
        '&::after': {
          width: '90%'
        }
      },
      [`&.${dividerClasses.inset}`]: {
        marginLeft: theme.spacing(2)
      }
    };
  }
);

const DividerWrapper = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Wrapper'
})(({ theme }) => {
  return {
    display: 'inline-block',
    paddingLeft: theme.spacing(1.2),
    paddingRight: theme.spacing(1.2),
    [`&.${dividerClasses.wrapperVertical}`]: {
      paddingTop: theme.spacing(1.2),
      paddingBottom: theme.spacing(1.2)
    }
  };
});

const Divider = React.forwardRef<HTMLElement, DividerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
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
    ...props,
    absolute,
    flexItem,
    light,
    direction,
    textAlign,
    variant,
    withChildren: !!children
  };

  const classes = useClasses(styleProps);

  return (
    <DividerRoot
      as={component}
      className={css(classes.root, className)}
      ref={ref as React.Ref<HTMLDivElement>}
      theme={theme}
      {...rest}
    >
      {children ? (
        <DividerWrapper className={classes.wrapper} theme={theme}>
          {children}
        </DividerWrapper>
      ) : null}
    </DividerRoot>
  );
});

export default Divider;
