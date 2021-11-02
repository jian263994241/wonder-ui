import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './TabsClasses';
import {
  composeClasses,
  css,
  isDef,
  isVisible,
  nextTick
} from '@wonder-ui/utils';
import { ContextValueType, TabsContext } from './TabsContext';
import { isColor } from '../styles/colorManipulator';
import { TabsProps, TabsStyleProps } from './TabsTypes';
import {
  useCreation,
  useEventCallback,
  useForkRef,
  useReactive,
  useUpdateEffect,
  useWindowSize
} from '@wonder-ui/hooks';

const useClasses = (styleProps: TabsStyleProps) => {
  const { classes, centered, variant } = styleProps;

  const slots = {
    root: ['root', variant && variant, centered && 'centered'],
    indicator: ['indicator']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const TabsRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TabsStyleProps }>(({ theme, styleProps }) => ({
  position: 'relative',
  userSelect: 'none',
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: styleProps.centered ? 'center' : 'flex-start',
  alignItems: 'stretch',
  backgroundColor: theme.palette.background.paper,
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
})<{ styleProps: TabsStyleProps }>(({ theme, styleProps }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  width: 40,
  height: 2,
  backgroundColor: styleProps.textColor || theme.palette.primary.main,
  transition: theme.transitions.create('transform', { duration: 0 })
}));

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((inProps, ref) => {
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

  const store = useCreation(() => {
    return new Map() as ContextValueType['store'];
  }, [children]);
  const state = useReactive<ContextValueType['state']>({
    current: undefined,
    inited: false,
    lineStyle: {}
  });

  const tabsRef = React.useRef<HTMLDivElement>();
  const handleRootRef = useForkRef(tabsRef, ref);

  const setLine = useEventCallback(() => {
    const shouldAnimate = state.inited;
    const currentStore = state.current;

    nextTick(() => {
      state.inited = true;

      if (
        !showIndicator ||
        !currentStore ||
        currentStore.disabled ||
        !isVisible(tabsRef.current!)
      ) {
        return;
      }

      const tabNode = currentStore.root;

      if (tabNode) {
        const left = tabNode.offsetLeft + tabNode.offsetWidth / 2;
        const lineWidth = tabNode.offsetWidth;
        const lineStyle: React.CSSProperties = {
          ...indicatorStyle,
          width: indicatorStyle?.width || lineWidth,
          transform: `translateX(${left}px) translateX(-50%)`
        };
        if (shouldAnimate) {
          lineStyle.transitionDuration = `${200}ms`;
        }
        state.lineStyle = lineStyle;

        tabNode.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
          inline: 'center'
        });
      }
    });
  });

  const windowSize = useWindowSize();

  useUpdateEffect(setLine, [windowSize.width]);

  const getItemMeta = useEventCallback((key) => {
    const values = Array.from(store.values());
    if (key === null) return;
    return store.get(key) || values[0];
  });

  React.useEffect(() => {
    const activeItem = getItemMeta(value ?? defaultValue);

    if (activeItem && !activeItem.disabled) {
      state.current = activeItem;
      setLine();
    }
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
    <TabsContext.Provider value={{ props: styleProps, state, store, setLine }}>
      <TabsRoot
        role="tablist"
        ref={handleRootRef}
        className={css(classes.root, className)}
        {...rest}
        styleProps={styleProps}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { index });
          }
          return null;
        })}
        {showIndicator && isDef(state.current) && !state.current.disabled && (
          <TabsIndicator
            className={classes.indicator}
            style={state.lineStyle}
            styleProps={styleProps}
          />
        )}
      </TabsRoot>
    </TabsContext.Provider>
  );
});

export default Tabs;
