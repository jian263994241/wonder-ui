import useSnackbar from './useSnackbar';
import { SnackbarProps } from './SnackbarTypes';
import { useHookOutsideRef } from '@wonder-ui/utils';

function createSnackbarAction(props?: SnackbarProps) {
  const actionRef = useHookOutsideRef(useSnackbar, props);

  function showSnackbar(props?: Omit<SnackbarProps, 'visible'>) {
    actionRef.current?.show(props);
  }

  function hideSnackbar() {
    actionRef.current?.hide();
  }

  return { showSnackbar, hideSnackbar };
}

const { showSnackbar, hideSnackbar } = createSnackbarAction({
  autoHideDuration: 1500,
  maskClickable: true
});

export { showSnackbar, hideSnackbar, createSnackbarAction };
