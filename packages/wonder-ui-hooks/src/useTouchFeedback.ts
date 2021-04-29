import * as React from 'react';

type HandleEvents =
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseLeave'
  | 'onMouseEnter';

const triggerEventsName = {
  touch: [
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'onTouchCancel',
    'onMouseDown',
    'onMouseUp',
    'onMouseLeave'
  ],
  hover: ['onMouseEnter', 'onMouseDown', 'onMouseLeave']
};

export interface TouchFeedbackOptions<T = Element>
  extends Partial<Record<HandleEvents, React.DOMAttributes<T>[HandleEvents]>> {
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 触发类型
   */
  type: 'touch' | 'hover';
}

export function useTouchFeedback<T = Element>(
  options: TouchFeedbackOptions<T>
) {
  const { disabled, type = 'touch' } = options;

  const [active, setActive] = React.useState(false);

  const triggerEvent = (
    eventType: HandleEvents,
    isActive: boolean,
    event: any
  ) => {
    const handleInProp = options[eventType];

    if (handleInProp) {
      handleInProp(event);
    }

    if (disabled) {
      return;
    }

    const eventTypes = triggerEventsName[type];
    if (!eventTypes.some((eventName) => eventName === eventType)) {
      return;
    }

    if (isActive !== active) {
      setActive(isActive);
    }
  };

  const onTouchStart: React.DOMAttributes<T>['onTouchStart'] = (e) => {
    triggerEvent('onTouchStart', true, e);
  };

  const onTouchMove: React.DOMAttributes<T>['onTouchMove'] = (e) => {
    triggerEvent('onTouchMove', false, e);
  };

  const onTouchEnd: React.DOMAttributes<T>['onTouchEnd'] = (e) => {
    triggerEvent('onTouchEnd', false, e);
  };

  const onTouchCancel: React.DOMAttributes<T>['onTouchCancel'] = (e) => {
    triggerEvent('onTouchCancel', false, e);
  };

  const onMouseDown: React.DOMAttributes<T>['onMouseDown'] = (e) => {
    // pc simulate mobile
    triggerEvent('onMouseDown', true, e);
  };

  const onMouseUp: React.DOMAttributes<T>['onMouseUp'] = (e) => {
    triggerEvent('onMouseUp', false, e);
  };

  const onMouseLeave: React.DOMAttributes<T>['onMouseLeave'] = (e) => {
    triggerEvent('onMouseLeave', false, e);
  };

  const onMouseEnter: React.DOMAttributes<T>['onMouseEnter'] = (e) => {
    triggerEvent('onMouseEnter', true, e);
  };

  const handleEvents = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onMouseEnter
  };

  return [active, handleEvents] as const;
}

export default useTouchFeedback;
