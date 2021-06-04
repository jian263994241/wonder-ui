import * as React from 'react';
import { findIndex, getSupport, on } from '@wonder-ui/utils';
import { useEnhancedEffect } from './useEnhancedEffect';
import { useEventCallback } from './useEventCallback';

type HandleEvents =
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseEnter'
  | 'onMouseLeave';

const triggerEventList = {
  touch: [
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'onTouchCancel',
    'onMouseDown',
    'onMouseUp',
    'onMouseLeave'
  ],
  hover: ['onMouseEnter', 'onMouseLeave']
};

type EventHandler = <Ev extends Event>(e: Ev) => void;

export interface TouchFeedbackOptions {
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 触发类型
   */
  type?: 'touch' | 'hover' | 'auto';
}

export function useTouchFeedback<T extends Element>(
  options: TouchFeedbackOptions
) {
  const { disabled = false, type: typeProp = 'auto', ...eventsProp } = options;
  const targetRef = React.useRef<T>(null);
  const type = React.useMemo(() => {
    const support = getSupport();

    if (!typeProp || typeProp === 'auto') {
      return support.touch ? 'touch' : 'hover';
    }
    return typeProp;
  }, [typeProp]);

  const [active, setActive] = React.useState(false);

  const triggerEvent = useEventCallback(
    (eventType: HandleEvents, isActive: boolean, event: any) => {
      //@ts-expect-error
      const handleInProp = eventsProp[eventType];

      if (handleInProp) {
        handleInProp(event);
      }

      if (disabled) {
        if (active) {
          setActive(false);
        }
        return;
      }

      const eventList = triggerEventList[type];

      if (findIndex(eventList, (n) => n === eventType) > -1) {
        if (isActive !== active) {
          setActive(isActive);
        }
      }
    }
  );

  const onTouchStart: EventHandler = (e) => {
    triggerEvent('onTouchStart', true, e);
  };

  const onTouchMove: EventHandler = (e) => {
    triggerEvent('onTouchMove', false, e);
  };

  const onTouchEnd: EventHandler = (e) => {
    triggerEvent('onTouchEnd', false, e);
  };

  const onTouchCancel: EventHandler = (e) => {
    triggerEvent('onTouchCancel', false, e);
  };

  const onMouseDown: EventHandler = (e) => {
    // pc simulate mobile
    triggerEvent('onMouseDown', true, e);
  };

  const onMouseUp: EventHandler = (e) => {
    triggerEvent('onMouseUp', false, e);
  };

  const onMouseLeave: EventHandler = (e) => {
    triggerEvent('onMouseLeave', false, e);
  };

  const onMouseEnter: EventHandler = (e) => {
    triggerEvent('onMouseEnter', true, e);
  };

  useEnhancedEffect(() => {
    const { current: target } = targetRef;
    const evOptions = { passive: true };

    if (target && type === 'hover') {
      const unMouseEnter = on(target, 'mouseenter', onMouseEnter, evOptions);
      const unMouseLeave = on(target, 'mouseleave', onMouseLeave, evOptions);

      return () => {
        unMouseEnter();
        unMouseLeave();
      };
    }

    if (target && type === 'touch') {
      // pc simulate mobile
      const unMouseLeave = on(target, 'mouseleave', onMouseLeave, evOptions);
      const unMouseDown = on(target, 'mousedown', onMouseDown, evOptions);
      const unMouseUp = on(target, 'mouseup', onMouseUp, evOptions);
      //touch
      const unTouchstart = on(target, 'touchstart', onTouchStart, evOptions);
      const unTouchMove = on(target, 'touchmove', onTouchMove, evOptions);
      const unTouchEnd = on(target, 'touchend', onTouchEnd, evOptions);
      const unTouchCancel = on(target, 'touchcancel', onTouchCancel, evOptions);

      return () => {
        unMouseLeave();
        unMouseDown();
        unMouseUp();
        unTouchstart();
        unTouchMove();
        unTouchEnd();
        unTouchCancel();
      };
    }
  }, [targetRef]);

  return { targetRef, active };
}

export default useTouchFeedback;
