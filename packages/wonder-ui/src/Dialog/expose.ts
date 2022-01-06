import useDialog from './useDialog';
import { DialogProps } from './DialogTypes';
import { useHookOutsideRef } from '@wonder-ui/utils';

const actionRef = useHookOutsideRef(useDialog);

export function showDialog(props?: Omit<DialogProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hideDialog() {
  actionRef.current?.hide();
}
