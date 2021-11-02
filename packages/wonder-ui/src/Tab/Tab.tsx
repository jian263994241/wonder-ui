import * as React from 'react';
import Badge from '../Badge';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import Typography from '../Typography';
import { badgeClasses } from '../Badge/BadgeClasses';
import { COMPONENT_NAME, tabClasses } from './TabClasses';
import { composeClasses, css, isControlled, setRef } from '@wonder-ui/utils';
import { TabMeta, TabProps, TabStyleProps } from './TabTypes';
import { TabsContext } from '../Tabs/TabsContext';
import { useEventCallback, useReactive } from '@wonder-ui/hooks';

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
    disabled,
    label,
    icon,
    iconPosition = 'top',
    index = -1,
    value,
    onClick,
    onRenderIcon,
    wrapped,
    ...rest
  } = props as TabProps & { index: number };

  const context = React.useContext(TabsContext);

  if (!context) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[WUI] <Tab> must be a child component of <Tab>.');
    }
    return null;
  }

  const itemKey = value ?? index;

  const { state, store, setLine, props: parentProps } = context;

  const meta = useReactive<TabMeta>({
    root: null,
    disabled
  });

  React.useEffect(() => {
    store.set(itemKey, meta);

    return () => {
      store.delete(itemKey);
    };
  }, [store, itemKey]);

  const isActive = disabled ? false : state.current === meta;

  React.useEffect(() => {
    meta.disabled = disabled;
  }, [disabled]);

  const styleProps = {
    ...props,
    isActive,
    iconPosition,
    variant: parentProps.variant!,
    textColor: parentProps.textColor
  };

  const classes = useClasses(styleProps);

  const handleClick = useEventCallback((e) => {
    if (disabled) {
      return null;
    }

    if (!isControlled(parentProps, 'value')) {
      state.current = meta;
      setLine();
    }

    parentProps.onChange?.(value ?? index);
    onClick?.(e);
  });

  const renderIcon = () => (onRenderIcon ? onRenderIcon(isActive) : icon);
  const renderLabel = () =>
    label && (
      <TabLabel
        className={classes.label}
        variant="body1"
        color="inherit"
        align="center"
        noWrap={!wrapped}
      >
        {label}
      </TabLabel>
    );
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
      ref={(node) => {
        meta.root = node;
        setRef(ref, node);
      }}
      className={css(classes.root, className)}
      disabled={disabled}
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
