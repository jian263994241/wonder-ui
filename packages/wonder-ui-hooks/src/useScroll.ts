import * as React from 'react';
import { BasicTarget, getTargetElement } from './utils/dom';
import { useEventCallback } from './useEventCallback';
import { useSafeState } from './useSafeState';
interface Position {
  left: number;
  top: number;
}

type Target = BasicTarget<HTMLElement | Document>;
type ScrollListenController = (val: Position) => boolean;

export function useScroll(
  target?: Target,
  shouldUpdate: ScrollListenController = () => true
): Position {
  const [position, setPosition] = useSafeState<Position>({
    left: NaN,
    top: NaN
  });

  const shouldUpdatePersist = useEventCallback(shouldUpdate);

  React.useEffect(() => {
    const el = getTargetElement(target, document);
    if (!el) return;

    function updatePosition(currentTarget: Target): void {
      let newPosition;
      if (currentTarget === document) {
        if (!document.scrollingElement) return;
        newPosition = {
          left: document.scrollingElement.scrollLeft,
          top: document.scrollingElement.scrollTop
        };
      } else {
        newPosition = {
          left: (currentTarget as HTMLElement).scrollLeft,
          top: (currentTarget as HTMLElement).scrollTop
        };
      }
      if (shouldUpdatePersist(newPosition)) setPosition(newPosition);
    }

    updatePosition(el as Target);

    function listener(event: Event): void {
      if (!event.target) return;
      updatePosition(event.target as Target);
    }
    el.addEventListener('scroll', listener);
    return () => {
      el.removeEventListener('scroll', listener);
    };
  }, [target, shouldUpdatePersist]);

  return position;
}

export default useScroll;
