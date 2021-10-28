import * as React from 'react';
import Badge from '../Badge';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import Typography from '../Typography';
import { badgeClasses } from '../Badge/BadgeClasses';
import { COMPONENT_NAME, tabBarItemClasses } from './TabBarItemClasses';
import {
  composeClasses,
  css,
  isControlled,
  isDef,
  setRef
} from '@wonder-ui/utils';
import { TabBarContext } from '../TabBar/TabBarContext';
import { TabBarItemProps, TabBarItemStyleProps } from './TabBarItemTypes';
import { useCreation, useEventCallback, useId } from '@wonder-ui/hooks';

const useClasses = (styleProps: TabBarItemStyleProps) => {
  const { isActive, classes, disabled } = styleProps;
  const slots = {
    root: ['root', isActive && 'active', disabled && 'disabled'],
    label: ['label'],
    icon: ['icon'],
    badge: ['badge']
  };

  return composeClasses(COMPONENT_NAME, slots, classes);
};

const TabBarItemRoot = styled(ButtonBase, {
  name: COMPONENT_NAME,
  slot: 'Root'
})<{ styleProps: TabBarItemStyleProps }>(({ theme, styleProps }) => ({
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
  [`&.${tabBarItemClasses.active}`]: {
    color: styleProps.textColor || theme.palette.primary.main
  },
  [`& > .${badgeClasses.root}`]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const TabBarItemLabel = styled(Typography, {
  name: COMPONENT_NAME,
  slot: 'Label'
})(() => ({
  width: '100%'
}));

const TabBarItemIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'Icon'
})(({ theme }) => ({
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  margin: '4px 0 1px'
}));

const TabBarItemBadge = styled(Badge, {
  name: COMPONENT_NAME,
  slot: 'Label',
  shouldForwardProp: () => true
})(({ theme, text }) => ({
  position: 'absolute',
  fontSize: theme.typography.pxToRem(12),
  top: 8,
  left: '50%',
  marginLeft: 4,
  ...(!!text && {
    marginTop: -4
  })
}));

const TabBarItem = React.forwardRef<HTMLSpanElement, TabBarItemProps>(
  (props, ref) => {
    const {
      badge,
      className,
      disabled,
      label,
      icon,
      itemKey: itemKeyProp,
      onClick,
      onRenderIcon,
      wrapped,
      ...rest
    } = props;

    const context = React.useContext(TabBarContext);

    if (!context) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(
          '[WUI] <TabBarItem> must be a child component of <TabBar>.'
        );
      }
      return null;
    }

    const defaultItemId = useId('tab-item-');

    const itemKey = itemKeyProp ?? defaultItemId;

    const { state, store, setLine, props: parentProps } = context;

    const selfStore = useCreation(() => {
      if (!store[itemKey]) {
        store[itemKey] = {};
      }
      return store[itemKey];
    }, [itemKey]);

    React.useEffect(
      () => () => {
        delete store[itemKey];
      },
      [itemKey]
    );

    const isActive = disabled ? false : state.currentKey === String(itemKey);

    React.useEffect(() => {
      selfStore.disabled = disabled;
    }, [disabled]);

    const styleProps = {
      ...props,
      isActive,
      variant: parentProps.variant!,
      textColor: parentProps.textColor
    };

    const classes = useClasses(styleProps);

    const handleClick = useEventCallback((e) => {
      if (disabled) {
        return null;
      }

      if (isDef(itemKey) && !isControlled(parentProps, 'value')) {
        state.currentKey = itemKey;
        setLine();
      }

      parentProps.onChange?.(itemKey);
      onClick?.(e);
    });

    return (
      <TabBarItemRoot
        ref={(node) => {
          selfStore.root = node;
          setRef(ref, node);
        }}
        className={css(classes.root, className)}
        disabled={disabled}
        onClick={handleClick}
        styleProps={styleProps}
        {...rest}
      >
        {(icon || onRenderIcon) && (
          <TabBarItemIcon className={classes.icon}>
            {onRenderIcon ? onRenderIcon(isActive) : icon}
          </TabBarItemIcon>
        )}
        {label && (
          <TabBarItemLabel
            className={classes.label}
            variant="body1"
            color="inherit"
            align="center"
            noWrap={!wrapped}
          >
            {label}
          </TabBarItemLabel>
        )}

        {!!badge && (
          <TabBarItemBadge
            rounded
            classes={{ root: classes.badge }}
            color="danger"
            text={typeof badge === 'string' ? badge : null}
          />
        )}
      </TabBarItemRoot>
    );
  }
);

export default TabBarItem;
