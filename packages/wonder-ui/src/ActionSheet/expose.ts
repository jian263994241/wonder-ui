import useActionSheet from './useActionSheet';
import { ActionSheetProps } from './ActionSheetTypes';
import { createActionFromHookRef } from '@wonder-ui/utils';

const actionRef = createActionFromHookRef(useActionSheet);

export function showActionSheet(props?: Omit<ActionSheetProps, 'visible'>) {
  actionRef.current?.show(props);
}

export function hideActionSheet() {
  actionRef.current?.hide();
}
