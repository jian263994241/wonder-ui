import * as React from 'react';
import Snackbar from './Snackbar';
import { useReactive } from '@wonder-ui/hooks';
import type { SnackbarProps } from './SnackbarTypes';

export default function useSnackbar(
  props: Omit<SnackbarProps, 'visible'> = {}
) {
  const state = useReactive({
    props: undefined as any,
    visible: false,
    key: '0' as any
  });

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const hide = () => {
    timeoutRef.current = setTimeout(() => {
      state.visible = false;
    }, 0);
  };

  const show = (props: Omit<SnackbarProps, 'visible'>) => {
    setTimeout(() => {
      if (props) {
        clearTimeout(timeoutRef.current!);
        state.props = props;
        state.visible = true;
        state.key = props.message;
      }
    }, 0);
  };

  const handleColose = (e: any, reason: 'timeout' | 'clickaway') => {
    hide();

    const callback = state.props?.onClose || props.onClose;

    if (callback) {
      callback(e, reason);
    }
  };

  const rendered = (
    <Snackbar
      {...props}
      {...state.props}
      key={state.key}
      visible={state.visible}
      onClose={handleColose}
    />
  );

  return { rendered, hide, show };
}
