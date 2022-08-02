import * as React from 'react';
import styled from '../styles/styled';
import useRootCssVars from '../styles/useRootCssVars';
import useThemeProps from '../styles/useThemeProps';
import {
  composeClasses,
  createCssVars,
  css,
  generateUtilityClasses
} from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiDivider';

const cssVars = createCssVars(COMPONENT_NAME, [
  'borderColor',
  'borderWidth',
  'borderStyle',
  'horizontalMargin',
  'verticalMargin',
  'horizontalPadding',
  'verticalPadding'
]);

export const dividerClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'flexItem',
  'vertical',
  'withChildren',
  'withChildrenVertical',
  'textAlignRight',
  'textAlignLeft',
  'wrapper',
  'wrapperVertical'
]);

const useClasses = (styleProps: DividerStyleProps) => {
  const { children, classes, flexItem, direction, textAlign } = styleProps;

  const slots = {
    root: [
      'root',
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
  className?: string;
  classes?: Partial<typeof dividerClasses>;
  children?: React.ReactNode;
  component?: React.ElementType;
  style?: React.CSSProperties;
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
}

interface DividerStyleProps extends DividerProps {}

const DividerRoot = styled('div', { name: COMPONENT_NAME, slot: 'Root' })({
  margin: 0,
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: cssVars.value('borderStyle'),
  borderColor: cssVars.value('borderColor'),
  borderBottomWidth: cssVars.value('borderWidth'),
  marginLeft: cssVars.value('horizontalMargin'),
  marginRight: cssVars.value('horizontalMargin'),
  marginTop: cssVars.value('verticalMargin'),
  marginBottom: cssVars.value('verticalMargin'),

  [`&.${dividerClasses.vertical}`]: {
    height: '100%',
    borderBottomWidth: 0,
    borderRightWidth: cssVars.value('borderWidth')
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
      borderTop: `${cssVars.value('borderWidth')} ${cssVars.value(
        'borderStyle'
      )} ${cssVars.value('borderColor')}`,
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
      borderLeft: `${cssVars.value('borderWidth')} ${cssVars.value(
        'borderStyle'
      )} ${cssVars.value('borderColor')}`,
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
  }
});

const DividerWrapper = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Wrapper'
})({
  display: 'inline-block',
  paddingLeft: cssVars.value('horizontalPadding'),
  paddingRight: cssVars.value('horizontalPadding'),
  [`&.${dividerClasses.wrapperVertical}`]: {
    paddingTop: cssVars.value('verticalPadding'),
    paddingBottom: cssVars.value('verticalPadding')
  }
});

const Divider = React.forwardRef<HTMLElement, DividerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    className,
    component = children ? 'div' : 'hr',
    direction = 'horizontal',
    flexItem = false,
    textAlign = 'center',
    theme,
    ...rest
  } = props;

  const styleProps = {
    ...props,
    flexItem,
    direction,
    textAlign,
    withChildren: !!children
  };

  const classes = useClasses(styleProps);

  useRootCssVars((theme) =>
    cssVars.style({
      borderWidth: 'thin',
      borderColor: theme.palette.divider,
      borderStyle: 'solid',
      horizontalMargin: 0,
      verticalMargin: 0,
      verticalPadding: 10,
      horizontalPadding: 10
    })
  );

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
