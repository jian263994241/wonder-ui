import * as React from 'react';
import Preloader from './Preloader';
import type { PreloaderProps } from './PreloaderTypes';

interface usePreloaderProps extends Omit<PreloaderProps, 'visible'> {
  timeout?: number;
}

export default function usePreloader(props: usePreloaderProps = {}) {
  const { timeout = 5000, ...PreloaderProps } = props;
  const [visible, setVisible] = React.useState(false);
  const count = React.useRef(0);

  const rendered = <Preloader {...PreloaderProps} visible={visible} />;

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const show = () => {
    ++count.current;
    setVisible(true);

    timeoutRef.current = setTimeout(hide, timeout);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current!);

    if (count.current > 0) {
      --count.current;
    }

    if (count.current <= 0) {
      setVisible(false);
    }
  };

  const hideAll = () => {
    count.current = 0;
    setVisible(false);
  };

  return { rendered, show, hide, hideAll };
}
