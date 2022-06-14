import useSnackbar from './useSnackbar';
import { SnackbarProps } from './SnackbarTypes';
import { createActionFromHookRef } from '@wonder-ui/utils';

function createSnackbarAction(props?: SnackbarProps) {
  const actionRef = createActionFromHookRef(useSnackbar, props);

  function showSnackbar(props?: Omit<SnackbarProps, 'visible'>) {
    actionRef.current?.show(props);
  }

  function hideSnackbar() {
    actionRef.current?.hide();
  }

  return { showSnackbar, hideSnackbar };
}

const { showSnackbar, hideSnackbar } = createSnackbarAction({
  autoHideDuration: 1200,
  maskClickable: true
});

export { showSnackbar, hideSnackbar, createSnackbarAction };
