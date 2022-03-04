import * as React from 'react';
import CheckListContext from '../CheckList/CheckListContext';
import DefaultCheckIcon from '../icons/Check2';
import ListItem from '../ListItem';
import useThemeProps from '../styles/useThemeProps';
import { CheckListItemProps } from './CheckListItemTypes';
import { useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiCheckListItem';

const CheckListItem = React.forwardRef<HTMLLIElement, CheckListItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      children,
      disabled,
      divider,
      primary,
      secondary,
      value,
      media,
      readOnly,
      onClick,
      meta = {},
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

    const itemActiveIcon = activeIcon || <DefaultCheckIcon color="primary" />;

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
        role="menuitem"
        aria-checked={isActive}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? undefined : isActive ? 0 : -1}
        button={!isReadOnly}
        divider={divider}
        extra={isActive ? itemActiveIcon : null}
        onClick={handleChange}
        disableRipple={disableRipple}
        disabled={isDisabled}
        media={media}
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
