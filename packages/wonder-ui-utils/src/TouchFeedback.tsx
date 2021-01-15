import * as React from 'react';
import clsx from './clsx';

export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  children: React.ReactElement;
}

type EventType =
  | 'TouchStart'
  | 'TouchMove'
  | 'TouchEnd'
  | 'TouchCancel'
  | 'MouseDown'
  | 'MouseUp'
  | 'MouseLeave';

export default function TouchFeedback(props: TouchFeedbackProps) {
  const {
    activeClassName = 'active-state',
    activeStyle,
    children,
    disabled
  } = props;

  const [active, setActive] = React.useState<boolean>(false);

  const triggerEvent = (
    type: EventType,
    isActive: boolean,
    ev: React.MouseEvent | React.TouchEvent
  ) => {
    const eventType = `on${type}`;

    if (children.props[eventType]) {
      children.props[eventType](ev);
    }
    if (isActive !== active) {
      setActive(isActive);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    triggerEvent('TouchStart', true, e);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    triggerEvent('TouchMove', false, e);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    triggerEvent('TouchEnd', false, e);
  };

  const onTouchCancel = (e: React.TouchEvent) => {
    triggerEvent('TouchCancel', false, e);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    // pc simulate mobile
    triggerEvent('MouseDown', true, e);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    triggerEvent('MouseUp', false, e);
  };

  const onMouseLeave = (e: React.MouseEvent) => {
    triggerEvent('MouseLeave', false, e);
  };

  let events;

  if (!disabled) {
    events = {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel,
      onMouseDown,
      onMouseUp,
      onMouseLeave
    };
  }

  const child = React.Children.only(children);

  if (!disabled && active) {
    let { style, className } = child.props;

    if (activeStyle !== false) {
      if (activeStyle) {
        style = { ...style, ...activeStyle };
      }
      className = clsx(className, activeClassName);
    }

    return React.cloneElement(child, {
      className,
      style,
      ...events
    });
  }

  return React.cloneElement(child, events);
}
