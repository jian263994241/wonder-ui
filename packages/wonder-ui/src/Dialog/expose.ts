import useDialog from './useDialog';
import { DialogProps } from './DialogTypes';
import { createActionFromHookRef } from '@wonder-ui/utils';

const actionRef = createActionFromHookRef(useDialog);

export function showDialog(props?: Omit<DialogProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hideDialog() {
  actionRef.current?.hide();
}
