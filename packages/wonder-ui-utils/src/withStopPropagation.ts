import React, { ReactElement } from 'react';

export type PropagationEvent =
  | 'click'
  | 'touch-start'
  | 'touch-move'
  | 'touch-end'
  | 'drag-leave'
  | 'mouse-up'
  | 'mouse-leave'
  | 'mouse-down'
  | 'key-up'
  | 'key-down'
  | 'focus'
  | 'blur'
  | 'context-menu';

export const allPropagationEvent: PropagationEvent[] = [
  'click',
  'touch-start',
  'touch-move',
  'touch-end',
  'drag-leave',
  'mouse-up',
  'mouse-leave',
  'mouse-down',
  'key-up',
  'key-down',
  'focus',
  'blur',
  'context-menu'
];

const eventToPropRecord: Record<PropagationEvent, string> = {
  click: 'onClick',
  'touch-start': 'onTouchStart',
  'touch-move': 'onTouchMove',
  'touch-end': 'onTouchEnd',
  'drag-leave': 'onDragLeave',
  'mouse-up': 'onMouseUp',
  'mouse-leave': 'onMouseLeave',
  'mouse-down': 'onMouseDown',
  'key-up': 'onKeyUp',
  'key-down': 'onKeyDown',
  focus: 'onFocus',
  blur: 'onBlur',
  'context-menu': 'onContextMenu'
};

export function withStopPropagation(
  events: PropagationEvent[] = ['click'],
  element: ReactElement
) {
  const props: Record<string, any> = { ...element.props };
  for (const key of events) {
    const prop = eventToPropRecord[key];
    props[prop] = function (e: Event) {
      e.stopPropagation();
      element.props[prop]?.(e);
    };
  }
  return React.cloneElement(element, props);
}
