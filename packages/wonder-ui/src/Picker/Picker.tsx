import * as React from 'react';
import PickerPopup from './PickerPopup';
import PickerView, { PickerOption } from '../PickerView';
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
    ...pickerViewProp
  } = props;

  const picker = usePicker({ fieldNames, value, defaultValue, columns });

  const [visible, setVisibleUnControlled] = useControlled({
    value: visibleProp,
    defaultValue: defaultVisible
  });

  const [selected, setSelected] = React.useState<PickerOption[]>();

  const show = () => {
    setVisibleUnControlled(true);
  };

  const hide = () => {
    setVisibleUnControlled(false);
  };

  const confirm = () => {
    const callback = createChainedFunction(onConfirm, hide);

    const values = picker.getValues();

    callback(values);
  };

  const cancel = createChainedFunction(onCancel, hide);

  React.useEffect(() => {
    if (picker.value.length > 0) {
      setSelected(picker.getSelected());
    }
  }, [picker.value]);

  return (
    <React.Fragment>
      {typeof children === 'function' ? children({ selected, show }) : children}
      <PickerPopup
        visible={visible}
        ref={ref}
        className={className}
        style={style}
        title={title}
        subTitle={subTitle}
        cancelText={cancelText}
        confirmText={confirmText}
        onConfirm={confirm}
        onCancel={cancel}
      >
        <PickerView picker={picker} {...pickerViewProp} />
      </PickerPopup>
    </React.Fragment>
  );
});

export default Picker;
