import * as React from 'react';
import { BasicTarget } from './utils/dom';
import { getSupport } from '@wonder-ui/utils';
import { useBoolean } from './useBoolean';
import { useClickAway } from './useClickAway';
import { useConst } from './useConst';
import { useEventListener } from './useEventListener';

const evOptions = { passive: true };

export function useTouchFeedback<T extends Element>(
  options: {
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 触发类型
     */
    type?: 'touch' | 'hover' | 'focus';
    /**
     * Focus node
     */
    focusElement?: BasicTarget<Element>;
  } = {}
) {
  const { disabled = false, type = 'focus', focusElement } = options;

  const targetRef = React.useRef<T>(null);
  const support = useConst(() => getSupport());
  const [active, { setTrue, setFalse }] = useBoolean(false);

  const touchstart = support.touch ? 'touchstart' : 'mousedown';
  const touchmove = support.touch ? 'touchmove' : '';
  const touchend = support.touch ? 'touchend' : 'mouseup';
  const touchcancel = support.touch ? 'touchend' : 'mouseleave';

  const addEvent = (eventName: string, callback: () => void) => {
    useEventListener(targetRef, eventName, callback, { passive: true });
  };

  if (type === 'hover') {
    addEvent('mouseenter', setTrue);
    addEvent('mouseleave', setFalse);
  }

  if (type === 'touch') {
    addEvent(touchstart, setTrue);
    addEvent(touchmove, setFalse);
    addEvent(touchend, setFalse);
    addEvent(touchcancel, setFalse);
  }

  if (type === 'focus') {
    addEvent(touchstart, setTrue);
    useClickAway(setFalse, [targetRef, focusElement], touchstart);
  }

  return { targetRef, active: disabled ? false : active };
}

export default useTouchFeedback;
