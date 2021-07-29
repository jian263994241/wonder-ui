import * as React from 'react';
import { BasicTarget, getTargetElement } from './utils/dom';
import { getDocument, on } from '@wonder-ui/utils';

type EventType = MouseEvent | TouchEvent;

const defaultEvent = 'click';

export function useClickAway<T extends Element>(
  onClickAway: (event: EventType) => void,
  target: BasicTarget<T> | BasicTarget<T>[],
  eventName: keyof HTMLElementEventMap = defaultEvent
) {
  const onClickAwayRef = React.useRef(onClickAway);
  onClickAwayRef.current = onClickAway;

  React.useEffect(() => {
    const handler = (event: any) => {
      const targets = Array.isArray(target) ? target : [target];
      if (
        targets.some((targetItem) => {
          const targetElement = getTargetElement(targetItem);

          if (!targetElement) return false;

          let insideDOM;

          // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
          if (event.composedPath) {
            insideDOM = event.composedPath().indexOf(targetElement) > -1;
          } else {
            insideDOM =
              !getDocument(targetElement).documentElement.contains(
                event.target
              ) || targetElement.contains(event.target);
          }

          return insideDOM;
        })
      ) {
        return;
      }
      onClickAwayRef.current(event);
    };

    const dispose = on(getDocument(), eventName, handler, { passive: true });

    return () => {
      dispose();
    };
  }, [target, eventName]);
}

export default useClickAway;
