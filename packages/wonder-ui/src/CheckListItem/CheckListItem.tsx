import * as React from 'react';
import CheckListContext from '../CheckList/CheckListContext';
import DefaultCheckIcon from '../icons/Check2';
import ListItem from '../ListItem';
import useThemeProps from '../styles/useThemeProps';
import { CheckListItemProps } from './CheckListItemTypes';
import { useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';
import { svgIconCssVars } from '../SvgIcon/SvgIconClasses';

const COMPONENT_NAME = 'WuiCheckListItem';

const CheckListItem = React.forwardRef<HTMLLIElement, CheckListItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      disabled,
      primary,
      secondary,
      value,
      prefix,
      readOnly,
      onClick,
      meta = {},
      theme,
      ...rest
    } = props;
    const context = React.useContext(CheckListContext);

    if (!context) {
      warn('<CheckListItem> must be a child component of <CheckList>.');
      return null;
    }

    const {
      activeIcon,
      disableRipple,
      setValue,
      disabled: parentDisabled,
      readOnly: parentReadOnly,
      value: parentValue = []
    } = context;

    const itemActiveIcon = (
      <div
        style={svgIconCssVars.style({
          color: theme.palette.primary.main,
          size: 16
        })}
      >
        {activeIcon || <DefaultCheckIcon />}
      </div>
    );

    const isReadOnly = parentReadOnly || readOnly;

    const handleChange = useEventCallback((e) => {
      if (isReadOnly) {
        return;
      }
      setValue(value, meta);

      onClick?.(e);
    });

    const isActive = parentValue.includes(value);
    const isDisabled = parentDisabled ?? disabled;

    return (
      <ListItem
        button
        role="menuitem"
        aria-checked={isActive}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? undefined : isActive ? 0 : -1}
        extra={isActive ? itemActiveIcon : null}
        onClick={handleChange}
        disableRipple={disableRipple}
        disabled={isDisabled}
        prefix={prefix}
        primary={primary}
        secondary={secondary}
        children={children}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default CheckListItem;
