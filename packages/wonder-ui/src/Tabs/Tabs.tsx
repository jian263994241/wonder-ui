import * as React from 'react';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import { COMPONENT_NAME } from './TabsClasses';
import { composeClasses, css } from '@wonder-ui/utils';
import { ContextValueType, TabsContext } from './TabsContext';
import { isColor } from '../styles/colorManipulator';
import { TabsProps, TabsStyleProps } from './TabsTypes';
import {
  useControlled,
  useCreation,
  useForkRef,
  useReactive
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
  transition: theme.transitions.create(['transform'], { duration: 0 })
}));

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    children,
    centered,
    className,
    indicatorStyle,
    showIndicator,
    value: valueProp,
    defaultValue,
    onChange,
    variant = 'fullWidth',
    textColor: textColorProp,
    disableRipple,
    ...rest
  } = props;

  const [value, setValueUnControlled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const state = useReactive<ContextValueType['state']>({
    inited: false,
    lineStyle: {
      display: 'none'
    }
  });

  const tabsRef = React.useRef<HTMLDivElement>();
  const handleRootRef = useForkRef(tabsRef, ref);

  const textColor = useCreation(() => {
    return isColor(textColorProp) ? textColorProp : undefined;
  }, [textColorProp]);

  const styleProps = { ...props, variant, textColor };

  const classes = useClasses(styleProps);

  return (
    <TabsContext.Provider
      value={{
        props: styleProps,
        state,
        setValueUnControlled,
        currentValue: value
      }}
    >
      <TabsRoot
        role="tablist"
        ref={handleRootRef}
        className={css(classes.root, className)}
        {...rest}
        styleProps={styleProps}
      >
        {children}
        {showIndicator && (
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
