import * as React from 'react';

export interface TouchFeedbackOptions {
  disabled?: boolean;
  activeClassName?: string;
}

export function useTouchFeedback<T extends HTMLElement>(
  options: TouchFeedbackOptions = {}
) {
  const { disabled, activeClassName = 'active' } = options;

  const nodeRef = React.useRef<T>(null);

  const events = <const>[
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'mousedown',
    'mouseup',
    'mouseleave'
  ];

  React.useEffect(() => {
    const node = nodeRef.current;

    if (node && !disabled) {
      const activeTrue = () => {
        node.classList.add(activeClassName);
      };

      const activeFalse = () => {
        node.classList.remove(activeClassName);
      };

      events.forEach((eventName: typeof events[number]) => {
        if (eventName === 'touchstart' || eventName === 'mousedown') {
          node.addEventListener(eventName, activeTrue, { passive: true });
        } else {
          node.addEventListener(eventName, activeFalse, { passive: true });
        }
      });

      return () => {
        events.forEach((eventName: typeof events[number]) => {
          if (eventName === 'touchstart' || eventName === 'mousedown') {
            node.removeEventListener(eventName, activeTrue);
          } else {
            node.removeEventListener(eventName, activeFalse);
          }
        });
      };
    }
  }, [nodeRef, disabled]);

  return nodeRef;
}
