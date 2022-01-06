import * as React from 'react';
import Preloader from './Preloader';
import { useReactive } from '@wonder-ui/hooks';
import type { PreloaderProps } from './PreloaderTypes';
export interface usePreloaderProps extends Omit<PreloaderProps, 'visible'> {
  timeout?: number;
}

export default function usePreloader(props: usePreloaderProps = {}) {
  const { timeout = 5000, ...PreloaderProps } = props;

  const state = useReactive({
    props: undefined as any,
    visible: false
  });

  const rendered = (
    <Preloader {...PreloaderProps} {...state.props} visible={state.visible} />
  );

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const show = (props?: usePreloaderProps) => {
    if (props) {
      state.props = props;
    }

    state.visible = true;

    if (timeout) {
      timeoutRef.current = setTimeout(hide, timeout);
    }
  };

  const hide = () => {
    clearTimeout(timeoutRef.current!);
    state.visible = false;
  };

  return { rendered, show, hide };
}
