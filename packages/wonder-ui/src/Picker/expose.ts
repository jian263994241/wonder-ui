import usePicker from './usePicker';
import { PickerProps } from './PickerTypes';
import { useHookOutsideRef } from '@wonder-ui/utils';

const actionRef = useHookOutsideRef(usePicker);

export function showPicker(props?: Omit<PickerProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hidePicker() {
  actionRef.current?.hide();
}
