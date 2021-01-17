import * as React from 'react';
import addEventListener from 'dom-helpers/addEventListener';
import removeEventListener from 'dom-helpers/removeEventListener';
import addClass from 'dom-helpers/addClass';
import removeClass from 'dom-helpers/removeClass';

interface TouchFeedbackOptions {
  disabled?: boolean;
  activeClassName?: string;
}

export default function useTouchFeedback(
  options: TouchFeedbackOptions = {}
): React.MutableRefObject<HTMLAnchorElement | null> {
  const { disabled, activeClassName = 'active' } = options;
  const ElementRef = React.useRef<HTMLAnchorElement | null>(null);

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
    const node = ElementRef.current;

    if (node && !disabled) {
      const activeTrue = () => {
        addClass(node, activeClassName);
      };

      const activeFalse = () => {
        removeClass(node, activeClassName);
      };
      events.forEach((eventName: typeof events[number]) => {
        if (eventName === 'touchstart' || eventName === 'mousedown') {
          addEventListener(node, eventName, activeTrue);
        } else {
          addEventListener(node, eventName, activeFalse);
        }
      });

      return () => {
        events.forEach((eventName: typeof events[number]) => {
          if (eventName === 'touchstart' || eventName === 'mousedown') {
            removeEventListener(node, eventName, activeTrue);
          } else {
            removeEventListener(node, eventName, activeFalse);
          }
        });
      };
    }
  }, [ElementRef, disabled]);

  return ElementRef;
}
