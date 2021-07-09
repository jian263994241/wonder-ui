import * as React from 'react';
import { BasicTarget, getTargetElement } from './utils/dom';
import { useSafeState } from './useSafeState';
import 'intersection-observer';

type InViewport = boolean | undefined;

function isInViewPort(el: HTMLElement): InViewport {
  if (!el) {
    return undefined;
  }

  const viewPortWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const rect = el.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return (
      bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0
    );
  }

  return false;
}

export function useInViewport(target: BasicTarget): InViewport {
  const [inViewPort, setInViewport] = useSafeState<InViewport>(() => {
    const el = getTargetElement(target);

    return isInViewPort(el as HTMLElement);
  });

  React.useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInViewport(true);
        } else {
          setInViewport(false);
        }
      }
    });

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return inViewPort;
}

export default useInViewport;
