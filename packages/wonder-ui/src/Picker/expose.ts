import usePicker from './usePicker';
import { PickerProps } from './PickerTypes';
import { createActionFromHookRef } from '@wonder-ui/utils';

const actionRef = createActionFromHookRef(usePicker, {
  DrawerProps: {
    keepMounted: false
  }
});

export function showPicker(props?: Omit<PickerProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hidePicker() {
  actionRef.current?.hide();
}
