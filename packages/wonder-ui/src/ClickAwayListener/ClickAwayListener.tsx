import * as React from 'react';
import { ownerDocument } from '@wonder-ui/utils';
import { useForkRef, useEventCallback } from '@wonder-ui/hooks';

function mapEventPropToEvent(
  eventProp: ClickAwayMouseEventHandler | ClickAwayTouchEventHandler
): 'click' | 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' {
  return eventProp.substring(2).toLowerCase() as any;
}

function clickedRootScrollbar(event: MouseEvent, doc: Document) {
  return (
    doc.documentElement.clientWidth < event.clientX ||
    doc.documentElement.clientHeight < event.clientY
  );
}

type ClickAwayMouseEventHandler = 'onClick' | 'onMouseDown' | 'onMouseUp';
type ClickAwayTouchEventHandler = 'onTouchStart' | 'onTouchEnd';

export interface ClickAwayListenerProps {
  /**
   * The wrapped element.
   */
  children: React.ReactElement;
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree?: boolean;
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent?: ClickAwayMouseEventHandler | false;
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent?: ClickAwayTouchEventHandler | false;
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click Away Listener](https://material-ui.com/components/click-away-listener/)
 * - [Menus](https://material-ui.com/components/menus/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://material-ui.com/api/click-away-listener/)
 */
export default function ClickAwayListener(
  props: ClickAwayListenerProps
): JSX.Element {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef<HTMLElement>(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  const supportTouch = React.useMemo(() => {
    return !!(
      'ontouchstart' in window ||
      ((window as any).DocumentTouch &&
        document instanceof (window as any).DocumentTouch)
    );
  }, []);

  React.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  //@ts-expect-error
  const handleRef = useForkRef(children.ref, nodeRef);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback((event: MouseEvent | TouchEvent) => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;

    const doc = ownerDocument(nodeRef.current!);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (
      !activatedRef.current ||
      !nodeRef.current ||
      ('clientX' in event && clickedRootScrollbar(event, doc))
    ) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM =
        !doc.documentElement.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        ) ||
        nodeRef.current.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        );
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const createHandleSynthetic = (handlerName: string) => (
    event: React.SyntheticEvent
  ) => {
    syntheticEventRef.current = true;

    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps: { ref: React.Ref<Element> } & Pick<
    React.DOMAttributes<Element>,
    ClickAwayMouseEventHandler | ClickAwayTouchEventHandler
  > = { ref: handleRef };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  React.useEffect(() => {
    if (supportTouch && touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current!);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);

      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    if (!supportTouch && mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current!);

      doc.addEventListener(mappedMouseEvent, handleClickAway);

      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [mouseEvent, touchEvent]);

  return (
    <React.Fragment>
      {React.cloneElement(children, childrenProps)}
    </React.Fragment>
  );
}
