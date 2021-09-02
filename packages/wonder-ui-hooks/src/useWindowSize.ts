import { nextTick } from '@wonder-ui/utils';
import { useEventCallback } from './useEventCallback';
import { useEventListener } from './useEventListener';
import { useSafeState } from './useSafeState';

export function useWindowSize() {
  const [state, setState] = useSafeState({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0
  });

  const onResize = useEventCallback(() => {
    nextTick(() => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  });

  useEventListener(window, 'resize', onResize);
  useEventListener(window, 'orientationchange', onResize);

  return state;
}
