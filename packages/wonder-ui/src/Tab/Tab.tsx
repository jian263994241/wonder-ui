import * as React from 'react';
import Badge from '../Badge';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import Typography from '../Typography';
import { badgeClasses } from '../Badge/BadgeClasses';
import { COMPONENT_NAME, tabClasses } from './TabClasses';
import { composeClasses, css, isVisible, nextTick } from '@wonder-ui/utils';
import { TabProps, TabStyleProps } from './TabTypes';
import { TabsContext } from '../Tabs/TabsContext';
import {
  useEventCallback,
  useForkRef,
  useId,
  useUpdateEffect,
  useWindowSize
} from '@wonder-ui/hooks';

const useClasses = (styleProps: TabStyleProps) => {
  const { isActive, classes, disabled } = styleProps;
  const slots = {
    root: ['root', isActive && 'active', disabled && 'disabled'],
    label: ['label'],
    icon: ['icon'],
    badge: ['badge']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const TabRoot = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TabStyleProps }>(({ theme, styleProps }) => ({
  fontSize: theme.typography.pxToRem(20),
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 2),
  flexDirection: 'column',
  maxWidth: '50%',
  minHeight: 44,
  position: 'relative',
  transition: theme.transitions.create('color'),
  ...(styleProps.variant === 'fullWidth' && {
    flex: '1 0 auto'
  }),
  ...(styleProps.disabled && {
    color: theme.palette.text.disabled
  }),
  [`&.${tabClasses.active}`]: {
    color: styleProps.textColor || theme.palette.primary.main
  },
  [`& > .${badgeClasses.root}`]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const TabLabel = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Label'
})(() => ({
  width: '100%'
}));

const TabBadge = styled(Badge, {
  name: COMPONENT_NAME,
  slot: 'Label',
  shouldForwardProp: () => true
})<{ styleProps: TabStyleProps }>(({ theme, styleProps, text }) => ({
  position: 'absolute',
  fontSize: theme.typography.pxToRem(12),
  top: 8,
  left: '50%',
  marginLeft: '1em',
  ...(styleProps.icon &&
    styleProps.iconPosition === 'top' && {
      marginLeft: '0.5em'
    }),
  ...(!!text && {
    marginTop: -2
  })
}));

const Tab = React.forwardRef<HTMLSpanElement, TabProps>((props, ref) => {
  const {
    badge,
    className,
    children,
    disabled,
    label,
    icon,
    iconPosition = 'top',
    value,
    onClick,
    onRenderIcon,
    wrapped,
    ...rest
  } = props as TabProps & { index: number };

  const context = React.useContext(TabsContext);
  const rootRef = React.useRef<HTMLElement>(null);
  const handleRef = useForkRef(rootRef, ref);

  if (!context) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[WUI] <Tab> must be a child component of <Tab>.');
    }
    return null;
  }

  const {
    state: parentState,
    props: parentProps,
    setValueUnControlled,
    currentValue
  } = context;

  const defaultKey = useId('tabItem');

  const itemKey = value ?? defaultKey;

  const isDisabled = disabled || parentProps.disabled;

  const isActive = currentValue === itemKey;

  React.useEffect(() => {
    setValueUnControlled((prevValue: any) => {
      if (!prevValue) return itemKey;
      return prevValue;
    });
  }, []);

  const setLine = (tabNode: HTMLElement) => {
    const shouldAnimate = parentState.inited;

    if (!tabNode) return;
    if (!isVisible(tabNode!)) return;

    if (!parentProps.showIndicator || isDisabled) {
      parentState.lineStyle = { display: 'none' };
      return;
    }

    parentState.inited = true;

    const left = tabNode.offsetLeft + tabNode.offsetWidth / 2;
    const lineWidth = tabNode.offsetWidth;
    const lineStyle: React.CSSProperties = {
      ...parentProps.indicatorStyle,
      width: parentProps.indicatorStyle?.width || lineWidth,
      transform: `translateX(${left}px) translateX(-50%)`
    };
    if (shouldAnimate) {
      lineStyle.transitionDuration = `${150}ms`;
    }

    parentState.lineStyle = lineStyle;

    nextTick(() => {
      tabNode.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
        inline: 'center'
      });
    });
  };

  const styleProps = {
    ...props,
    isActive,
    iconPosition,
    variant: parentProps.variant!,
    textColor: parentProps.textColor
  };

  const classes = useClasses(styleProps);

  const handleClick = useEventCallback((e) => {
    if (isDisabled) {
      return null;
    }

    setValueUnControlled(itemKey);

    parentProps.onChange?.(value);
    onClick?.(e);
  });

  React.useEffect(() => {
    if (isActive) {
      setLine(rootRef.current!);
    }
  }, [isActive, children]);

  const windowSize = useWindowSize();

  useUpdateEffect(() => {
    if (isActive) {
      setLine(rootRef.current!);
    }
  }, [windowSize.width]);

  const text = label || children;

  const renderIcon = () => (onRenderIcon ? onRenderIcon(isActive) : icon);

  const renderLabel = () =>
    text ? (
      <TabLabel
        className={classes.label}
        variant="body1"
        color="inherit"
        align="center"
        noWrap={!wrapped}
      >
        {text}
      </TabLabel>
    ) : null;

  const renderBadge = () =>
    !!badge && (
      <TabBadge
        rounded
        classes={{ root: classes.badge }}
        color="danger"
        styleProps={styleProps}
        text={typeof badge === 'string' ? badge : null}
      />
    );

  return (
    <TabRoot
      aria-selected={isActive}
      role="tab"
      ref={handleRef}
      className={css(classes.root, className)}
      disabled={isDisabled}
      disableRipple={parentProps.disableRipple}
      onClick={handleClick}
      styleProps={styleProps}
      tabIndex={isActive ? 0 : -1}
      {...rest}
    >
      {renderIcon()}
      {renderLabel()}
      {renderBadge()}
    </TabRoot>
  );
});

export default Tab;
