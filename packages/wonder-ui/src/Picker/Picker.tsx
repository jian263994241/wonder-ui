import * as React from 'react';
import Button from '../Button';
import Drawer from '../Drawer';
import Navbar from '../Navbar';
import useThemeProps from '../styles/useThemeProps';
import { useControlled, useForkRef, useCreation } from '@wonder-ui/hooks';
import { PickerProps } from './PickerTypes';
import PickerView, {
  PickerAction,
  PickerViewProps,
  PickerOption
} from '../PickerView';
import { isControlled, isObject } from '@wonder-ui/utils';

const COMPONENT_NAME = 'WuiPicker';

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    DrawerProps,
    NavbarProps,
    actionRef: actionRefProp,
    className,
    style,
    children,
    separator = ',',
    title,
    textKey = 'text',
    cancelText = '取消',
    confirmText = '确定',
    onConfirm,
    onCancel,
    visible: visibleProp,
    defaultVisible,
    onRenderChildren,
    value,
    defaultValue,
    ...pickerViewProp
  } = props;

  const actionRef = React.useRef<PickerAction>(null);
  const handleRef = useForkRef(actionRef, actionRefProp);

  const [visible, setVisibleUnControlled] = useControlled({
    value: visibleProp,
    defaultValue: defaultVisible
  });

  const [options, setOptions] = React.useState<PickerOption[]>([]);

  const showPicker = () => {
    setVisibleUnControlled(true);
  };

  const hidePicker = () => {
    setVisibleUnControlled(false);
  };

  const confirm = () => {
    actionRef.current?.confirm();
    hidePicker();
  };

  const cancel = () => {
    onCancel?.();
    hidePicker();
  };

  const handleConfim: PickerViewProps['onConfirm'] = (values, picker) => {
    onConfirm?.(values, picker);

    if (isControlled(props, 'value')) {
      const { current: picker } = actionRef;
      if (picker) {
        setOptions(picker.getValues());
      }
    }
  };

  React.useEffect(() => {
    const { current: picker } = actionRef;
    const val = value || defaultValue;

    if (picker && val && val.length > 0) {
      setOptions(picker.getValues());
    } else {
      setOptions([]);
    }
  }, [value, defaultValue]);

  const displayText = useCreation(() => {
    return options
      .map((item) => {
        if (isObject(item)) {
          return item[textKey];
        }
        return item;
      })
      .join(separator);
  }, [options]);

  return (
    <React.Fragment>
      {children &&
        React.isValidElement(children) &&
        React.cloneElement(children as JSX.Element, {
          value: displayText,
          onClick: showPicker
        })}
      {!children &&
        onRenderChildren &&
        onRenderChildren({ options, onClick: showPicker, displayText })}
      <Drawer
        keepMounted
        anchor="bottom"
        ref={ref}
        className={className}
        style={style}
        {...DrawerProps}
        onClose={cancel}
        visible={visible}
      >
        <Navbar
          title={title}
          left={
            <Button variant="text" onClick={cancel}>
              {cancelText}
            </Button>
          }
          right={
            <Button variant="text" onClick={confirm}>
              {confirmText}
            </Button>
          }
          {...NavbarProps}
        />
        <PickerView
          {...pickerViewProp}
          textKey={textKey}
          actionRef={handleRef}
          onConfirm={handleConfim}
          value={value}
          defaultValue={defaultValue}
        />
      </Drawer>
    </React.Fragment>
  );
});

export default Picker;
