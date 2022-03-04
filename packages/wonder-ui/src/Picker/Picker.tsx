import * as React from 'react';
import PickerPopup from './PickerPopup';
import PickerView from '../PickerView';
import usePicker from '../PickerView/usePicker';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction } from '@wonder-ui/utils';
import { PickerProps } from './PickerTypes';
import { useControlled } from '@wonder-ui/hooks';

const COMPONENT_NAME = 'WuiPicker';

const Picker = React.forwardRef<HTMLDivElement, PickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    className,
    style,
    children,
    title,
    subTitle,
    columns,
    cancelText,
    confirmText,
    onConfirm,
    onCancel,
    visible: visibleProp,
    defaultVisible,
    value,
    defaultValue,
    fieldNames,
    disableRipple,
    ...pickerViewProp
  } = props;

  const picker = usePicker({
    fieldNames,
    value,
    defaultValue,
    onConfirm,
    columns
  });

  const [visible, setVisibleUnControlled] = useControlled({
    value: visibleProp,
    defaultValue: defaultVisible
  });

  const show = () => {
    setVisibleUnControlled(true);
  };

  const hide = () => {
    setVisibleUnControlled(false);
  };

  const confirm = () => {
    const callback = createChainedFunction(() => picker.confirm(), hide);

    callback();
  };

  return (
    <React.Fragment>
      {typeof children === 'function'
        ? children({ selected: picker.selected, show })
        : children}
      <PickerPopup
        visible={visible}
        disableRipple={disableRipple}
        ref={ref}
        className={className}
        style={style}
        title={title}
        subTitle={subTitle}
        cancelText={cancelText}
        confirmText={confirmText}
        onConfirm={confirm}
        onCancel={hide}
      >
        <PickerView picker={picker} {...pickerViewProp} />
      </PickerPopup>
    </React.Fragment>
  );
});

export default Picker;
