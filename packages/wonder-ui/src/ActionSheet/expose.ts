import useActionSheet from './useActionSheet';
import { ActionSheetProps } from './ActionSheetTypes';
import { useHookOutsideRef } from '@wonder-ui/utils';

const actionRef = useHookOutsideRef(useActionSheet);

export function showActionSheet(props?: Omit<ActionSheetProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hideActionSheet() {
  actionRef.current?.hide();
}
