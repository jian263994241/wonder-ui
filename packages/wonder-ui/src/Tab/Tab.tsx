import * as React from 'react';
import ButtonBase from '../ButtonBase';
import styled from '../styles/styled';
import useClasses from '../styles/useClasses';
import useThemeProps from '../styles/useThemeProps';

export interface TabProps
  extends Omit<
    React.HTMLProps<HTMLElement>,
    'as' | 'label' | 'onChange' | 'type'
  > {
  classes?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ElementType;
  indicator?: React.ReactNode;
  label?: React.ReactNode;
  onChange?(event: MouseEvent, value?: any): void;
  onClick?: React.MouseEventHandler;
  onFocus?: React.FocusEventHandler;
  selected?: boolean;
  textColor?: 'inherit' | 'primary' | 'secondary';
  value?: any;
  selectionFollowsFocus?: boolean;
  ref?: React.Ref<any>;
}

type StyleProps = {
  styleProps: {
    fullWidth: boolean;
    textColor: 'inherit' | 'primary' | 'secondary';
    label: boolean;
    icon: boolean;
  };
};

const TabRoot = styled(ButtonBase, {
  name: 'WuiTab',
  slot: 'Root'
})<StyleProps>(({ theme, styleProps }) => ({
  ...theme.typography.button,
  maxWidth: 264,
  minWidth: 72,
  position: 'relative',
  minHeight: 48,
  flexShrink: 0,
  padding: '6px 12px',
  overflow: 'hidden',
  whiteSpace: 'normal',
  textAlign: 'center',
  ...(styleProps.icon &&
    styleProps.label && {
      minHeight: 72,
      paddingTop: 9,
      [`& .wrapper > *:first-child`]: {
        marginBottom: 6
      }
    }),
  ...(styleProps.textColor === 'inherit' && {
    color: 'inherit',
    opacity: 0.8, // same opacity as theme.palette.text.secondary
    [`&.WuiTab-selected`]: {
      opacity: 1
    },
    [`&[disabled]`]: {
      opacity: theme.palette.action.disabledOpacity
    }
  }),
  ...(styleProps.textColor === 'primary' && {
    color: theme.palette.text.primary,
    [`&.WuiTab-selected`]: {
      color: theme.palette.primary.main
    },
    [`&[disabled]`]: {
      color: theme.palette.text.disabled
    }
  }),
  ...(styleProps.textColor === 'secondary' && {
    color: theme.palette.text.secondary,
    [`&.WuiTab-selected`]: {
      color: theme.palette.secondary.main
    },
    [`&[disabled]`]: {
      color: theme.palette.text.disabled
    }
  }),
  ...(styleProps.fullWidth && {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  }),
  '&.active-state': {
    opacity: theme.palette.action.hoverOpacity
  }
}));

const TabInner = styled('span', {
  name: 'WuiTab',
  slot: 'Inner'
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column'
});

const Tab = React.forwardRef<HTMLElement, TabProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'MuiTab' });
  const {
    children,
    className,
    disabled = false,
    icon,
    indicator,
    label,
    fullWidth = false,
    textColor = 'primary',
    selected,
    selectionFollowsFocus,
    value,
    onChange,
    onClick,
    onFocus,
    ...rest
  } = props;

  const styleProps = {
    fullWidth,
    textColor,
    icon: !!icon,
    label: !!label,
    selected
  };

  const classes = useClasses({ ...props, styleProps, name: 'WuiTab' });

  const handleClick = (event: any) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const handleFocus = (event: any) => {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return (
    <TabRoot
      role="tab"
      aria-selected={selected}
      className={classes.root}
      disabled={disabled}
      styleProps={styleProps}
      tabIndex={selected ? 0 : -1}
      disableRipple={selected}
      onClick={handleClick}
      onFocus={handleFocus}
      {...rest}
      ref={ref}
    >
      <TabInner>{children || [icon, label]}</TabInner>
      {indicator}
    </TabRoot>
  );
});

Tab.displayName = 'WuiTab';

export default Tab;
