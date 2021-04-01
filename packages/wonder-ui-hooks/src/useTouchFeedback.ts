import * as React from 'react';
import clsx from 'clsx';

type HandleEvents =
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onMouseLeave';

export interface TouchFeedbackOptions<T = Element>
  extends Partial<Record<HandleEvents, React.DOMAttributes<T>[HandleEvents]>> {
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 激活className
   */
  activeClassName: string;
  /**
   * extends className
   */
  prefixClassName?: string;
}

export function useTouchFeedback<T = Element>(
  options: TouchFeedbackOptions<T>
) {
  const { disabled, activeClassName, prefixClassName } = options;

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

    if (!disabled && isActive !== active) {
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

  const events = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    onMouseDown,
    onMouseUp,
    onMouseLeave
  };

  return {
    ...events,
    className: clsx(prefixClassName, { [activeClassName]: active })
  };
}

export default useTouchFeedback;
