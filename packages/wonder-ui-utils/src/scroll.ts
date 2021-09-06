import { createStyleStore } from './createStyleStore';
import { EventGroup } from './EventGroup';
import { getDevice } from './device';
import {
  attribute,
  ownerDocument,
  ownerWindow,
  isWindow,
  getScrollbarSize,
  scrollTop
} from './dom';
import { hasVerticalOverflow } from './overflow';

let _bodyScrollDisabledCount = 0;

const storeStyle = createStyleStore();

const defaultEvents = new EventGroup(null);

/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
export const DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';

/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
export const allowScrollOnElement = (
  element: HTMLElement | null,
  events: EventGroup = defaultEvents
): void => {
  if (!element) {
    return;
  }

  let _previousClientY = 0;
  let _element: Element | null = null;

  // remember the clientY for future calls of _preventOverscrolling
  const _saveClientY = (event: TouchEvent): void => {
    if (event.targetTouches.length === 1) {
      _previousClientY = event.targetTouches[0].clientY;
    }
  };

  // prevent the body from scrolling when the user attempts
  // to scroll past the top or bottom of the element
  const _preventOverscrolling = (event: TouchEvent): void => {
    // only respond to a single-finger touch
    if (event.targetTouches.length !== 1) {
      return;
    }

    // prevent the body touchmove handler from firing
    // so that scrolling is allowed within the element
    event.stopPropagation();

    if (!_element) {
      return;
    }

    const clientY = event.targetTouches[0].clientY - _previousClientY;

    const scrollableParent = findScrollableParent(
      event.target as HTMLElement
    ) as HTMLElement;
    if (scrollableParent) {
      _element = scrollableParent;
    }

    // if the element is scrolled to the top,
    // prevent the user from scrolling up
    if (_element.scrollTop === 0 && clientY > 0) {
      event.preventDefault();
    }

    // if the element is scrolled to the bottom,
    // prevent the user from scrolling down
    if (
      _element.scrollHeight - Math.ceil(_element.scrollTop) <=
        _element.clientHeight &&
      clientY < 0
    ) {
      event.preventDefault();
    }
  };

  events.on(element, 'touchstart', _saveClientY, { passive: false });
  events.on(element, 'touchmove', _preventOverscrolling, { passive: false });

  _element = element;
};

/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
export const allowOverscrollOnElement = (
  element: HTMLElement | null,
  events: EventGroup = defaultEvents
): void => {
  if (!element) {
    return;
  }
  const _allowElementScroll = (event: TouchEvent) => {
    event.stopPropagation();
  };
  events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};

const _disableIosBodyScroll = (event: TouchEvent) => {
  event.preventDefault();
};

// Is a vertical scrollbar displayed?
export const isOverflowing = (container: HTMLElement): boolean => {
  const doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return hasVerticalOverflow(container);
};

const getPaddingRight = (element: Element): number => {
  return (
    parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) ||
    0
  );
};

/**
 * Disables the container scrolling.
 *
 * @public
 */
export function disableBodyScroll(
  container?: HTMLElement | null | undefined
): void {
  container = container || document.body;

  const doc = ownerDocument(container);

  if (isOverflowing(container)) {
    const scrollbarSize = getScrollbarSize();

    storeStyle.styles.push({
      value: container.style.boxSizing,
      property: 'box-sizing',
      el: container
    });

    storeStyle.styles.push({
      value: container.style.paddingRight,
      property: 'padding-right',
      el: container
    });

    // Use computed style, here to get the real padding to add our scrollbar width.
    container.style.paddingRight = `${
      getPaddingRight(container) + scrollbarSize
    }px`;
    container.style.boxSizing = 'border-box';

    // .mui-fixed is a global helper.
    const fixedElements = ownerDocument(container).querySelectorAll('.fixed');
    [].forEach.call(fixedElements, (element: HTMLElement | SVGElement) => {
      storeStyle.styles.push({
        value: element.style.paddingRight,
        property: 'padding-right',
        el: element
      });
      element.style.paddingRight = `${
        getPaddingRight(element) + scrollbarSize
      }px`;
    });
  }

  // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
  const parent = container.parentElement;
  const containerWindow = ownerWindow(container);
  const scrollContainer =
    parent?.nodeName === 'HTML' &&
    containerWindow.getComputedStyle(parent).overflowY === 'scroll'
      ? parent
      : container;

  if (scrollContainer && !_bodyScrollDisabledCount) {
    storeStyle.styles.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    });

    storeStyle.styles.push({
      value: scrollContainer.style.width,
      property: 'width',
      el: scrollContainer
    });

    scrollContainer.style.overflow = 'hidden';
    scrollContainer.style.width = '100%';

    doc.addEventListener('touchmove', _disableIosBodyScroll, {
      passive: false,
      capture: false
    });
  }

  _bodyScrollDisabledCount++;
}

/**
 * Enables the container scrolling.
 *
 * @public
 */
export function enableBodyScroll(
  container?: HTMLElement | null | undefined
): void {
  container = container || document.body;

  if (_bodyScrollDisabledCount > 0) {
    const doc = ownerDocument(container);

    if (container && _bodyScrollDisabledCount === 1) {
      // doc.body.classList.remove(DisabledScrollClassName);

      storeStyle.restore();

      doc.removeEventListener('touchmove', _disableIosBodyScroll);
    }

    _bodyScrollDisabledCount--;
  }
}

/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
export function findScrollableParent(
  startingElement: HTMLElement | null
): HTMLElement | Window | undefined | null {
  let el: HTMLElement | Window | undefined | null = startingElement;
  const doc = ownerDocument(startingElement)!;

  // First do a quick scan for the scrollable attribute.
  while (el && el !== doc.body) {
    if (attribute(el, DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
      return el;
    }
    el = el.parentElement;
  }

  // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
  el = startingElement;

  while (el && el !== doc.body) {
    if (attribute(el, DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
      const computedStyles = getComputedStyle(el);
      let overflowY = computedStyles
        ? computedStyles.getPropertyValue('overflow-y')
        : '';

      if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
        return el;
      }
    }

    el = el.parentElement;
  }

  // Fall back to window scroll.
  if (!el || el === doc.body) {
    el = ownerWindow(startingElement);
  }

  return el;
}

/**
 * scrollTop
 */

export type ScrollElement = Element | Window;

export function getScrollTop(el: Element | Window): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

export function getRootScrollTop(): number {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function setRootScrollTop(value: number) {
  scrollTop(window, value);
  scrollTop(document.body, value);
}

// get distance from element top to page top or scroller top
export function getElementTop(el: ScrollElement, scroller?: ScrollElement) {
  if (isWindow(el)) {
    return 0;
  }

  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

export function getVisibleHeight(el: ScrollElement) {
  if (isWindow(el)) {
    return el.innerHeight;
  }
  return el.getBoundingClientRect().height;
}

export function getVisibleTop(el: ScrollElement) {
  if (isWindow(el)) {
    return 0;
  }
  return el.getBoundingClientRect().top;
}

const device = getDevice();

// hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
export function resetScroll() {
  if (device.ios) {
    setRootScrollTop(getRootScrollTop());
  }
}
