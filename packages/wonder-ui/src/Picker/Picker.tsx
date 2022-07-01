import * as React from 'react';
import PickerPopup from './PickerPopup';
import PickerView from '../PickerView';
import usePicker from '../PickerView/usePicker';
import useThemeProps from '../styles/useThemeProps';
import { createChainedFunction, nextTick } from '@wonder-ui/utils';
import type { PickerProps, PickerAction } from './PickerTypes';
import type { PopupAction } from '../Popup/PopupTypes';

const COMPONENT_NAME = 'WuiPicker';

const Picker = React.forwardRef<PickerAction, PickerProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
  const {
    className,
    style,
    children,
    title,
    subTitle,
    columns,
    cancelText = '取消',
    confirmText = '确定',
    onConfirm,
    onCancel,
    visible,
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

  const popActionRef = React.useRef<PopupAction>(null);

  const show = () => {
    nextTick(() => {
      popActionRef.current?.show();
    });
  };

  const hide = () => {
    popActionRef.current?.hide();
    onCancel?.();
  };

  const handleConfirm = createChainedFunction(() => picker.confirm(), hide);

  React.useImperativeHandle(ref, () => ({ show, hide, confirm }), []);

  return (
    <React.Fragment>
      {typeof children === 'function'
        ? children({ selected: picker.selected, show })
        : children}
      <PickerPopup
        ref={popActionRef}
        title={title}
        subTitle={subTitle}
        disableRipple={disableRipple}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancel={hide}
        onConfirm={handleConfirm}
        visible={visible}
        defaultVisible={defaultVisible}
        className={className}
        style={style}
      >
        <PickerView picker={picker} {...pickerViewProp} />
      </PickerPopup>
    </React.Fragment>
  );
});

export default Picker;
