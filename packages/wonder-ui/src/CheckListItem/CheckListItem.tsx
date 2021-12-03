import * as React from 'react';
import CheckListContext from '../CheckList/CheckListContext';
import DefaultCheckIcon from '../icons/Check2';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText';
import useThemeProps from '../styles/useThemeProps';
import { CheckListItemProps } from './CheckListItemTypes';
import { useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiCheckListItem';

const CheckListItem = React.forwardRef<HTMLLIElement, CheckListItemProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      ListItemTextProps,
      children,
      disabled,
      divider,
      primary,
      secondary,
      value,
      media,
      readOnly,
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

    const handleChange = useEventCallback(() => {
      if (isReadOnly) {
        return;
      }
      setValue(value);
    });

    return (
      <ListItem
        ref={ref}
        button={!isReadOnly}
        divider={divider}
        extra={parentValue.includes(value) ? itemActiveIcon : null}
        onClick={handleChange}
        disableRipple={disableRipple}
        disabled={parentDisabled || disabled}
        media={media}
        {...rest}
      >
        <ListItemText
          {...ListItemTextProps}
          primary={primary}
          secondary={secondary}
          children={children}
        />
      </ListItem>
    );
  }
);

export default CheckListItem;
