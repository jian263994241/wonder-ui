import usePreloader, { usePreloaderProps } from './usePreloader';
import { PreloaderProps } from './PreloaderTypes';
import { useHookOutsideRef } from '@wonder-ui/utils';

const actionRef = useHookOutsideRef<ReturnType<typeof usePreloader>>(
  usePreloader,
  { timeout: 0 }
);

let count = 0;

export function showPreloader(props?: Omit<PreloaderProps, 'visible'>) {
  ++count;
  actionRef.current?.show(props);
}

export function hidePreloader(options: { hideAll?: boolean } = {}) {
  if (options.hideAll) {
    count = 0;
  } else {
    if (count > 0) {
      --count;
    }
  }

  if (count <= 0) {
    actionRef.current?.hide();
  }
}
