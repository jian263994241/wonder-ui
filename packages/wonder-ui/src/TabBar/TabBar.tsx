import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './TabBarClasses';
import {
  composeClasses,
  css,
  isDef,
  isVisible,
  nextTick
} from '@wonder-ui/utils';
import { ContextValueType, TabBarContext } from './TabBarContext';
import { isColor } from '../styles/colorManipulator';
import { TabBarProps, TabBarStyleProps } from './TabBarTypes';
import {
  useCreation,
  useEventCallback,
  useForkRef,
  useReactive,
  useUpdateEffect,
  useWindowSize
} from '@wonder-ui/hooks';

const useClasses = (styleProps: TabBarStyleProps) => {
  const { classes, centered, variant } = styleProps;

  const slots = {
    root: ['root', variant && variant, centered && 'centered'],
    indicator: ['indicator']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const TabBarRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TabBarStyleProps }>(({ theme, styleProps }) => ({
  position: 'relative',
  userSelect: 'none',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: styleProps.centered ? 'center' : 'flex-start',
  alignItems: 'stretch',
  ...(styleProps.variant === 'scrollable'
    ? {
        overflowX: 'auto',
        overflowY: 'hidden',
        WebkitOverflowScrolling: 'touch'
      }
    : {
        overflow: 'hidden'
      }),
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}));

const TabsIndicator = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Indicator'
})<{ styleProps: TabBarStyleProps }>(({ theme, styleProps }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  width: 40,
  height: 2,
  backgroundColor: styleProps.textColor || theme.palette.primary.main,
  transition: theme.transitions.create('transform', { duration: 0 })
}));

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    centered,
    className,
    indicatorStyle,
    showIndicator,
    value,
    defaultValue,
    onChange,
    variant = 'fullWidth',
    textColor: textColorProp,
    ...rest
  } = props;
  const store = useCreation<ContextValueType['store']>(() => ({}), []);
  const state = useReactive<ContextValueType['state']>({
    currentKey: undefined!,
    inited: false,
    lineStyle: {}
  });

  const rootRef = React.useRef<HTMLDivElement>();
  const handleRootRef = useForkRef(rootRef, ref);

  const setLine = useEventCallback(() => {
    const shouldAnimate = state.inited;
    const currentStore = store[state.currentKey];
    nextTick(() => {
      state.inited = true;

      if (
        !showIndicator ||
        !currentStore ||
        currentStore.disabled ||
        !isVisible(rootRef.current!)
      ) {
        return;
      }

      const title = currentStore.root;
      const left = title.offsetLeft + title.offsetWidth / 2;
      const lineWidth = title.offsetWidth;
      const lineStyle: React.CSSProperties = {
        ...indicatorStyle,
        width: indicatorStyle?.width || lineWidth,
        transform: `translateX(${left}px) translateX(-50%)`
      };
      if (shouldAnimate) {
        lineStyle.transitionDuration = `${200}ms`;
      }
      state.lineStyle = lineStyle;

      title.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
        inline: 'center'
      });
    });
  });

  const windowSize = useWindowSize();

  useUpdateEffect(setLine, [windowSize.width]);

  React.useEffect(() => {
    const keys = Object.keys(store);
    const _defaultValue = defaultValue ?? keys[0];

    const currentActiveKey = String(value ?? _defaultValue);

    if (
      keys.indexOf(currentActiveKey) === -1 ||
      store[currentActiveKey].disabled
    ) {
      return;
    }

    state.currentKey = currentActiveKey;
    setLine();
  }, [value, defaultValue]);

  const textColor = useCreation(() => {
    return isColor(textColorProp) ? textColorProp : undefined;
  }, [textColorProp]);

  const styleProps = {
    ...props,
    variant,
    textColor
  };

  const classes = useClasses(styleProps);

  return (
    <TabBarContext.Provider
      value={{ props: styleProps, state, store, setLine }}
    >
      <TabBarRoot
        ref={handleRootRef}
        className={css(classes.root, className)}
        {...rest}
        styleProps={styleProps}
      >
        {children}
        {showIndicator && isDef(state.currentKey) && (
          <TabsIndicator
            className={classes.indicator}
            style={state.lineStyle}
            styleProps={styleProps}
          />
        )}
      </TabBarRoot>
    </TabBarContext.Provider>
  );
});

export default TabBar;
