import * as React from 'react';
import useThemeProps from '../styles/useThemeProps';
import {
  contains,
  findScrollableParent,
  getElementIndexPath,
  getFocusableByIndexPath,
  getNextElement,
  getPreviousElement,
  isElementFocusSubZone,
  isElementFocusZone,
  isElementTabbable,
  KeyCodes,
  ownerDocument,
  ownerWindow,
  portalContainsElement,
  shouldWrapFocus,
  triggerEvent
} from '@wonder-ui/utils';
import {
  FocusZoneDirection,
  FocusZoneTabbableElements,
  IFocusZone,
  IFocusZoneProps,
  Point
} from './FocusZone.types';
import { useForkRef, useId } from '@wonder-ui/hooks';

const ALLOWED_INPUT_TYPES = [
  'text',
  'number',
  'password',
  'email',
  'tel',
  'url',
  'search'
];

const IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
const IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
const FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
const TABINDEX = 'tabindex';
const NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
const NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
const LARGE_DISTANCE_FROM_CENTER = 999999999;
const LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;

const _allInstances: { [key: string]: IFocusZone } = {};
const _outerZones: Set<IFocusZone> = new Set();

const FocusZone: React.FC<IFocusZoneProps> = React.forwardRef(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'WuiFocusZone' });
    const {
      allowFocusRoot,
      checkForNoWrap = false,
      children,
      defaultTabbableElement,
      direction: directionProp = 'bidirectional',
      disabled = false,
      handleTabKey,
      isCircularNavigation,
      onActiveElementChanged,
      pagingSupportDisabled = false,
      preventDefaultWhenHandled = false,
      preventFocusRestoration = false,
      shouldEnterInnerZone,
      shouldFocusInnerElementWhenReceivedFocus,
      shouldFocusOnMount = false,
      shouldRaiseClicks = true,
      shouldReceiveFocus,
      shouldInputLoseFocusOnArrowKey,
      shouldResetActiveElementWhenTabFromZone,
      stopFocusPropagation,
      theme
    } = props;

    const isRTL = theme.direction === 'rtl';
    const direction = FocusZoneDirection[directionProp];
    const focuszoneId = useId('FocusZone');

    const rootRef = React.useRef<HTMLElement>(null);
    // @ts-expect-error
    const handleRootRef = useForkRef(rootRef, children.ref);

    const isInnerZoneRef = React.useRef(false);
    const activeElementRef = React.useRef<HTMLElement | null>(null);
    const defaultFocusElementRef = React.useRef<HTMLElement | null>(null);
    const focusAlignmentRef = React.useRef<Point>({});
    const isParkedRef = React.useRef(false);
    const parkedTabIndexRef = React.useRef<string | null | undefined>(null);
    const lastIndexPathRef = React.useRef<number[] | undefined>();
    const processingTabKeyRef = React.useRef(false);

    const _updateTabIndexes = (element?: HTMLElement): void => {
      const root = rootRef.current;
      let activeElement = activeElementRef.current;
      if (
        !activeElement &&
        defaultTabbableElement &&
        typeof defaultTabbableElement === 'function'
      ) {
        activeElementRef.current = defaultTabbableElement(root as HTMLElement);
      }

      if (!element && root) {
        defaultFocusElementRef.current = null;
        element = root;

        if (activeElement && !contains(element, activeElement)) {
          activeElementRef.current = null;
        }
      }

      // If active element changes state to disabled, set it to null.
      // Otherwise, we lose keyboard accessibility to other elements in focus zone.
      if (
        activeElementRef.current &&
        !isElementTabbable(activeElementRef.current)
      ) {
        activeElementRef.current = null;
      }

      const childNodes = element && element.children;

      for (
        let childIndex = 0;
        childNodes && childIndex < childNodes.length;
        childIndex++
      ) {
        const child = childNodes[childIndex] as HTMLElement;

        if (!isElementFocusZone(child)) {
          // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
          if (
            child.getAttribute &&
            child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false'
          ) {
            child.setAttribute(TABINDEX, '-1');
          }

          if (isElementTabbable(child)) {
            if (disabled) {
              child.setAttribute(TABINDEX, '-1');
            } else if (
              !isInnerZoneRef.current &&
              ((!activeElementRef.current && !defaultFocusElementRef.current) ||
                activeElementRef.current === child)
            ) {
              defaultFocusElementRef.current = child;
              if (child.getAttribute(TABINDEX) !== '0') {
                child.setAttribute(TABINDEX, '0');
              }
            } else if (child.getAttribute(TABINDEX) !== '-1') {
              child.setAttribute(TABINDEX, '-1');
            }
          } else if (
            child.tagName === 'svg' &&
            child.getAttribute('focusable') !== 'false'
          ) {
            // Disgusting IE hack. Sad face.
            child.setAttribute('focusable', 'false');
          }
        } else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
          if (
            !isInnerZoneRef.current &&
            ((!activeElementRef.current && !defaultFocusElementRef.current) ||
              activeElementRef.current === child)
          ) {
            defaultFocusElementRef.current = child;
            if (child.getAttribute(TABINDEX) !== '0') {
              child.setAttribute(TABINDEX, '0');
            }
          } else if (child.getAttribute(TABINDEX) !== '-1') {
            child.setAttribute(TABINDEX, '-1');
          }
        }

        _updateTabIndexes(child);
      }
    };

    const _setFocusAlignment = (
      element: HTMLElement,
      isHorizontal?: boolean,
      isVertical?: boolean
    ): void => {
      if (
        direction === FocusZoneDirection.bidirectional &&
        (!focusAlignmentRef.current || isHorizontal || isVertical)
      ) {
        const rect = element.getBoundingClientRect();
        const left = rect.left + rect.width / 2;
        const top = rect.top + rect.height / 2;

        if (!focusAlignmentRef.current) {
          focusAlignmentRef.current = { left, top };
        }

        if (isHorizontal) {
          focusAlignmentRef.current.left = left;
        }

        if (isVertical) {
          focusAlignmentRef.current.top = top;
        }
      }
    };

    const _setActiveElement = (
      element: HTMLElement,
      forceAlignment?: boolean
    ): void => {
      const previousActiveElement = activeElementRef.current;

      activeElementRef.current = element;

      if (previousActiveElement) {
        if (isElementFocusZone(previousActiveElement)) {
          _updateTabIndexes(previousActiveElement);
        }

        previousActiveElement.tabIndex = -1;
      }

      if (activeElementRef.current) {
        if (!focusAlignmentRef.current || forceAlignment) {
          _setFocusAlignment(element, true, true);
        }

        activeElementRef.current.tabIndex = 0;
      }
    };

    const _getOwnerZone = (element?: HTMLElement): HTMLElement | null => {
      const root = rootRef.current;
      let parentElement = element?.parentNode as HTMLElement;

      while (
        parentElement &&
        parentElement !== root &&
        parentElement !== ownerDocument(root).body
      ) {
        if (isElementFocusZone(parentElement)) {
          return parentElement;
        }

        parentElement = parentElement.parentNode as HTMLElement;
      }

      return parentElement;
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    const _setParkedFocus = (isParked: boolean): void => {
      const { current: root } = rootRef;

      if (root && isParkedRef.current !== isParked) {
        isParkedRef.current = isParked;

        if (isParked) {
          if (!allowFocusRoot) {
            parkedTabIndexRef.current = root.getAttribute('tabindex');
            root.setAttribute('tabindex', '-1');
          }
          root.focus();
        } else if (!allowFocusRoot) {
          if (parkedTabIndexRef.current) {
            root.setAttribute('tabindex', parkedTabIndexRef.current);
            parkedTabIndexRef.current = undefined;
          } else {
            root.removeAttribute('tabindex');
          }
        }
      }
    };

    const _portalContainsElement = (element: HTMLElement): boolean => {
      return (
        element &&
        !!rootRef.current &&
        portalContainsElement(element, rootRef.current)
      );
    };

    const _shouldWrapFocus = (
      element: HTMLElement,
      noWrapDataAttribute: 'data-no-vertical-wrap' | 'data-no-horizontal-wrap'
    ): boolean => {
      return checkForNoWrap
        ? shouldWrapFocus(element, noWrapDataAttribute)
        : true;
    };

    const _preventDefaultWhenHandled = (
      ev: React.KeyboardEvent<HTMLElement>
    ): void => {
      preventDefaultWhenHandled && ev.preventDefault();
    };

    const _isImmediateDescendantOfZone = (element?: HTMLElement): boolean => {
      return _getOwnerZone(element) === rootRef.current;
    };
    /**
     * Traverse to find first child zone.
     */
    const _getFirstInnerZone = (
      rootElement?: HTMLElement | null
    ): IFocusZone | null => {
      rootElement = rootElement || activeElementRef.current || rootRef.current;

      if (!rootElement) {
        return null;
      }

      if (isElementFocusZone(rootElement)) {
        return _allInstances[
          rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE) as string
        ];
      }

      let child = rootElement.firstElementChild as HTMLElement | null;

      while (child) {
        if (isElementFocusZone(child)) {
          return _allInstances[
            child.getAttribute(FOCUSZONE_ID_ATTRIBUTE) as string
          ];
        }
        const match = _getFirstInnerZone(child);

        if (match) {
          return match;
        }

        child = child.nextElementSibling as HTMLElement | null;
      }

      return null;
    };

    const _isElementInput = (element: HTMLElement): boolean => {
      if (
        element &&
        element.tagName &&
        (element.tagName.toLowerCase() === 'input' ||
          element.tagName.toLowerCase() === 'textarea')
      ) {
        return true;
      }
      return false;
    };

    const _shouldInputLoseFocus = (
      element: HTMLInputElement,
      isForward?: boolean
    ): boolean => {
      // If a tab was used, we want to focus on the next element.
      if (
        !processingTabKeyRef.current &&
        element &&
        element.type &&
        ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1
      ) {
        const selectionStart = element.selectionStart;
        const selectionEnd = element.selectionEnd;
        const isRangeSelected = selectionStart !== selectionEnd;
        const inputValue = element.value;
        const isReadonly = element.readOnly;

        // We shouldn't lose focus in the following cases:
        // 1. There is range selected.
        // 2. When selection start is larger than 0 and it is backward and not readOnly.
        // 3. when selection start is not the end of length, it is forward and not readOnly.
        // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit
        // tab) and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is
        // determined by calling the callback shouldInputLoseFocusOnArrowKey
        if (
          isRangeSelected ||
          (selectionStart! > 0 && !isForward && !isReadonly) ||
          (selectionStart !== inputValue.length && isForward && !isReadonly) ||
          (!!handleTabKey &&
            !(
              shouldInputLoseFocusOnArrowKey &&
              shouldInputLoseFocusOnArrowKey(element)
            ))
        ) {
          return false;
        }
      }

      return true;
    };

    const _moveFocus = (
      isForward: boolean,
      getDistanceFromCenter: (
        activeRect: ClientRect,
        targetRect: ClientRect
      ) => number,
      ev?: Event,
      useDefaultWrap: boolean = true
    ): boolean => {
      let root = rootRef.current;
      let element = activeElementRef.current;
      let candidateDistance = -1;
      let candidateElement: HTMLElement | undefined = undefined;
      let changedFocus = false;
      const isBidirectional = direction === FocusZoneDirection.bidirectional;

      if (!element || !root) {
        return false;
      }

      if (_isElementInput(element)) {
        if (!_shouldInputLoseFocus(element as HTMLInputElement, isForward)) {
          return false;
        }
      }

      const activeRect = isBidirectional
        ? element.getBoundingClientRect()
        : null;

      do {
        element = (isForward
          ? getNextElement(root, element)
          : getPreviousElement(root, element)) as HTMLElement;

        if (isBidirectional) {
          if (element) {
            const targetRect = element.getBoundingClientRect();
            const elementDistance = getDistanceFromCenter(
              activeRect as ClientRect,
              targetRect
            );

            if (elementDistance === -1 && candidateDistance === -1) {
              candidateElement = element;
              break;
            }

            if (
              elementDistance > -1 &&
              (candidateDistance === -1 || elementDistance < candidateDistance)
            ) {
              candidateDistance = elementDistance;
              candidateElement = element;
            }

            if (candidateDistance >= 0 && elementDistance < 0) {
              break;
            }
          }
        } else {
          candidateElement = element;
          break;
        }
      } while (element);

      // Focus the closest candidate
      if (candidateElement && candidateElement !== activeElementRef.current) {
        changedFocus = true;
        focusElement(candidateElement);
      } else if (isCircularNavigation && useDefaultWrap) {
        if (isForward) {
          return focusElement(
            getNextElement(
              root,
              root.firstElementChild as HTMLElement,
              true
            ) as HTMLElement
          );
        } else {
          return focusElement(
            getPreviousElement(
              root,
              root.lastElementChild as HTMLElement,
              true,
              true,
              true
            ) as HTMLElement
          );
        }
      }

      return changedFocus;
    };

    const _moveFocusDown = (): boolean => {
      let targetTop = -1;

      // eslint-disable-next-line deprecation/deprecation
      const leftAlignment = focusAlignmentRef.current.left || 0;

      if (
        _moveFocus(true, (activeRect: ClientRect, targetRect: ClientRect) => {
          let distance = -1;
          // ClientRect values can be floats that differ by very small fractions of a decimal.
          // If the difference between top and bottom are within a pixel then we should treat
          // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
          // but without Math.Floor they will be handled incorrectly.
          const targetRectTop = Math.floor(targetRect.top);
          const activeRectBottom = Math.floor(activeRect.bottom);

          if (targetRectTop < activeRectBottom) {
            if (
              !_shouldWrapFocus(
                activeElementRef.current as HTMLElement,
                NO_VERTICAL_WRAP
              )
            ) {
              return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }

            return LARGE_DISTANCE_FROM_CENTER;
          }

          if (
            (targetTop === -1 && targetRectTop >= activeRectBottom) ||
            targetRectTop === targetTop
          ) {
            targetTop = targetRectTop;
            if (
              leftAlignment >= targetRect.left &&
              leftAlignment <= targetRect.left + targetRect.width
            ) {
              distance = 0;
            } else {
              distance = Math.abs(
                targetRect.left + targetRect.width / 2 - leftAlignment
              );
            }
          }

          return distance;
        })
      ) {
        _setFocusAlignment(
          activeElementRef.current as HTMLElement,
          false,
          true
        );
        return true;
      }

      return false;
    };

    const _moveFocusUp = (): boolean => {
      let targetTop = -1;
      // eslint-disable-next-line deprecation/deprecation
      const leftAlignment = focusAlignmentRef.current.left || 0;

      if (
        _moveFocus(false, (activeRect: ClientRect, targetRect: ClientRect) => {
          let distance = -1;
          // ClientRect values can be floats that differ by very small fractions of a decimal.
          // If the difference between top and bottom are within a pixel then we should treat
          // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
          // but without Math.Floor they will be handled incorrectly.
          const targetRectBottom = Math.floor(targetRect.bottom);
          const targetRectTop = Math.floor(targetRect.top);
          const activeRectTop = Math.floor(activeRect.top);

          if (targetRectBottom > activeRectTop) {
            if (
              !_shouldWrapFocus(
                activeElementRef.current as HTMLElement,
                NO_VERTICAL_WRAP
              )
            ) {
              return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return LARGE_DISTANCE_FROM_CENTER;
          }

          if (
            (targetTop === -1 && targetRectBottom <= activeRectTop) ||
            targetRectTop === targetTop
          ) {
            targetTop = targetRectTop;
            if (
              leftAlignment >= targetRect.left &&
              leftAlignment <= targetRect.left + targetRect.width
            ) {
              distance = 0;
            } else {
              distance = Math.abs(
                targetRect.left + targetRect.width / 2 - leftAlignment
              );
            }
          }

          return distance;
        })
      ) {
        _setFocusAlignment(
          activeElementRef.current as HTMLElement,
          false,
          true
        );
        return true;
      }

      return false;
    };

    const _moveFocusLeft = (): boolean => {
      const shouldWrap = _shouldWrapFocus(
        activeElementRef.current as HTMLElement,
        NO_HORIZONTAL_WRAP
      );
      if (
        _moveFocus(
          isRTL,
          (activeRect: ClientRect, targetRect: ClientRect) => {
            let distance = -1;
            let topBottomComparison;

            if (isRTL) {
              // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
              // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
              // This is important, because we want to be comparing the top of the target rect
              // with the bottom of the active rect.
              topBottomComparison =
                parseFloat(targetRect.top.toFixed(3)) <
                parseFloat(activeRect.bottom.toFixed(3));
            } else {
              topBottomComparison =
                parseFloat(targetRect.bottom.toFixed(3)) >
                parseFloat(activeRect.top.toFixed(3));
            }

            if (
              topBottomComparison &&
              targetRect.right <= activeRect.right &&
              direction !== FocusZoneDirection.vertical
            ) {
              distance = activeRect.right - targetRect.right;
            } else if (!shouldWrap) {
              distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }

            return distance;
          },
          undefined /*ev*/,
          shouldWrap
        )
      ) {
        _setFocusAlignment(
          activeElementRef.current as HTMLElement,
          true,
          false
        );
        return true;
      }

      return false;
    };

    const _moveFocusRight = (): boolean => {
      const shouldWrap = _shouldWrapFocus(
        activeElementRef.current as HTMLElement,
        NO_HORIZONTAL_WRAP
      );
      if (
        _moveFocus(
          !isRTL,
          (activeRect: ClientRect, targetRect: ClientRect) => {
            let distance = -1;
            let topBottomComparison;

            if (isRTL) {
              // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
              // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
              // This is important, because we want to be comparing the bottom of the target rect
              // with the top of the active rect.
              topBottomComparison =
                parseFloat(targetRect.bottom.toFixed(3)) >
                parseFloat(activeRect.top.toFixed(3));
            } else {
              topBottomComparison =
                parseFloat(targetRect.top.toFixed(3)) <
                parseFloat(activeRect.bottom.toFixed(3));
            }

            if (
              topBottomComparison &&
              targetRect.left >= activeRect.left &&
              direction !== FocusZoneDirection.vertical
            ) {
              distance = targetRect.left - activeRect.left;
            } else if (!shouldWrap) {
              distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }

            return distance;
          },
          undefined /*ev*/,
          shouldWrap
        )
      ) {
        _setFocusAlignment(
          activeElementRef.current as HTMLElement,
          true,
          false
        );
        return true;
      }

      return false;
    };

    const _getHorizontalDistanceFromCenter = (
      isForward: boolean,
      activeRect: ClientRect,
      targetRect: ClientRect
    ): number => {
      // eslint-disable-next-line deprecation/deprecation
      const leftAlignment = focusAlignmentRef.current.left || 0;
      // ClientRect values can be floats that differ by very small fractions of a decimal.
      // If the difference between top and bottom are within a pixel then we should treat
      // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
      // but without Math.Floor they will be handled incorrectly.
      const targetRectTop = Math.floor(targetRect.top);
      const activeRectBottom = Math.floor(activeRect.bottom);
      const targetRectBottom = Math.floor(targetRect.bottom);
      const activeRectTop = Math.floor(activeRect.top);
      const isValidCandidateOnpagingDown =
        isForward && targetRectTop > activeRectBottom;
      const isValidCandidateOnpagingUp =
        !isForward && targetRectBottom < activeRectTop;

      if (isValidCandidateOnpagingDown || isValidCandidateOnpagingUp) {
        if (
          leftAlignment >= targetRect.left &&
          leftAlignment <= targetRect.left + targetRect.width
        ) {
          return 0;
        }
        return Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
      }

      if (
        !_shouldWrapFocus(
          activeElementRef.current as HTMLElement,
          NO_VERTICAL_WRAP
        )
      ) {
        return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
      }
      return LARGE_DISTANCE_FROM_CENTER;
    };

    const _isContentEditableElement = (element: HTMLElement): boolean => {
      return element && element.getAttribute('contenteditable') === 'true';
    };

    const _moveFocusPaging = (
      isForward: boolean,
      useDefaultWrap: boolean = true
    ): boolean => {
      let root = rootRef.current;
      let element = activeElementRef.current;
      if (!element || !root) {
        return false;
      }
      if (_isElementInput(element)) {
        if (!_shouldInputLoseFocus(element as HTMLInputElement, isForward)) {
          return false;
        }
      }
      const scrollableParent = findScrollableParent(element);
      if (!scrollableParent) {
        return false;
      }
      let candidateDistance = -1;
      let candidateElement = undefined;
      let targetTop = -1;
      let targetBottom = -1;
      const pagesize = (scrollableParent as HTMLElement).clientHeight;
      const activeRect = element.getBoundingClientRect();
      do {
        element = isForward
          ? getNextElement(rootRef.current!, element)
          : getPreviousElement(rootRef.current!, element);
        if (element) {
          const targetRect = element.getBoundingClientRect();
          const targetRectTop = Math.floor(targetRect.top);
          const activeRectBottom = Math.floor(activeRect.bottom);
          const targetRectBottom = Math.floor(targetRect.bottom);
          const activeRectTop = Math.floor(activeRect.top);
          const elementDistance = _getHorizontalDistanceFromCenter(
            isForward,
            activeRect,
            targetRect
          );
          const isElementPassedPageSizeOnPagingDown =
            isForward && targetRectTop > activeRectBottom + pagesize;
          const isElementPassedPageSizeOnPagingUp =
            !isForward && targetRectBottom < activeRectTop - pagesize;

          if (
            isElementPassedPageSizeOnPagingDown ||
            isElementPassedPageSizeOnPagingUp
          ) {
            break;
          }
          if (elementDistance > -1) {
            // for paging down
            if (isForward && targetRectTop > targetTop) {
              targetTop = targetRectTop;
              candidateDistance = elementDistance;
              candidateElement = element;
            } else if (!isForward && targetRectBottom < targetBottom) {
              // for paging up
              targetBottom = targetRectBottom;
              candidateDistance = elementDistance;
              candidateElement = element;
            } else if (
              candidateDistance === -1 ||
              elementDistance <= candidateDistance
            ) {
              candidateDistance = elementDistance;
              candidateElement = element;
            }
          }
        }
      } while (element);

      let changedFocus = false;
      // Focus the closest candidate
      if (candidateElement && candidateElement !== activeElementRef.current) {
        changedFocus = true;
        focusElement(candidateElement);
        _setFocusAlignment(candidateElement as HTMLElement, false, true);
      } else if (isCircularNavigation && useDefaultWrap) {
        if (isForward) {
          return focusElement(
            getNextElement(
              rootRef.current!,
              rootRef.current!.firstElementChild as HTMLElement,
              true
            ) as HTMLElement
          );
        }
        return focusElement(
          getPreviousElement(
            rootRef.current!,
            rootRef.current!.lastElementChild as HTMLElement,
            true,
            true,
            true
          ) as HTMLElement
        );
      }
      return changedFocus;
    };

    /**
     * Walk up the dom try to find a focusable element.
     */
    const _tryInvokeClickForFocusable = (target: HTMLElement): boolean => {
      if (target === rootRef.current || !shouldRaiseClicks) {
        return false;
      }

      do {
        if (
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA'
        ) {
          return false;
        }

        if (
          _isImmediateDescendantOfZone(target) &&
          target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
          target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true'
        ) {
          triggerEvent(target, 'click');
          return true;
        }

        target = target.parentNode as HTMLElement;
      } while (target !== rootRef.current);

      return false;
    };

    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
     * rather than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    const setFocusAlignment = (point: Point): void => {
      focusAlignmentRef.current = point;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    const focusElement = (
      element: HTMLElement,
      forceAlignment?: boolean
    ): boolean => {
      if (shouldReceiveFocus && !shouldReceiveFocus(element)) {
        return false;
      }

      if (element) {
        // when we set focus to a specific child, we should recalculate the alignment depending on its position.
        _setActiveElement(element, forceAlignment);
        if (activeElementRef.current) {
          activeElementRef.current.focus();
        }

        return true;
      }

      return false;
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    const focus = (forceIntoFirstElement: boolean = false): boolean => {
      const root = rootRef.current;
      const activeElement = activeElementRef.current;
      if (root) {
        if (
          !forceIntoFirstElement &&
          root.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
          isInnerZoneRef.current
        ) {
          const ownerZoneElement = _getOwnerZone(root) as HTMLElement;

          if (ownerZoneElement !== root) {
            const ownerZone =
              _allInstances[
                ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE) as string
              ];

            return !!ownerZone && ownerZone.focusElement(root);
          }

          return false;
        } else if (
          !forceIntoFirstElement &&
          activeElement &&
          contains(root, activeElement) &&
          isElementTabbable(activeElement)
        ) {
          activeElement.focus();
          return true;
        } else {
          const firstChild = root.firstChild as HTMLElement;

          return focusElement(
            getNextElement(root, firstChild, true) as HTMLElement
          );
        }
      }
      return false;
    };
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    const focusLast = (): boolean => {
      const root = rootRef.current;
      if (root) {
        const lastChild = root && (root.lastChild as HTMLElement | null);

        return focusElement(
          getPreviousElement(root, lastChild, true, true, true) as HTMLElement
        );
      }

      return false;
    };
    /**
     * Handle the keystrokes.
     */
    const handleKeyDown = React.useCallback(
      (ev: React.KeyboardEvent<HTMLElement>): boolean | undefined => {
        const root = rootRef.current;

        if (_portalContainsElement(ev.target as HTMLElement)) {
          // If the event target is inside a portal do not process the event.
          return;
        }
        if (disabled) {
          return;
        }
        if (children && children.props.onKeyDown) {
          children.props.onKeyDown(ev);
        }
        if (ev.isDefaultPrevented()) {
          return;
        }
        if (
          ownerDocument(root).activeElement === root &&
          isInnerZoneRef.current
        ) {
          // If this element has focus, it is being controlled by a parent.
          // Ignore the keystroke.
          return;
        }

        if (
          shouldEnterInnerZone &&
          shouldEnterInnerZone(ev) &&
          _isImmediateDescendantOfZone(ev.target as HTMLElement)
        ) {
          // Try to focus
          const innerZone = _getFirstInnerZone();

          if (innerZone) {
            if (!innerZone.focus(true)) {
              return;
            }
          } else if (isElementFocusSubZone(ev.target as HTMLElement)) {
            if (
              !focusElement(
                getNextElement(
                  ev.target as HTMLElement,
                  (ev.target as HTMLElement).firstChild as HTMLElement,
                  true
                ) as HTMLElement
              )
            ) {
              return;
            }
          } else {
            return;
          }
        } else if (ev.altKey) {
          return;
        } else {
          // eslint-disable-next-line @fluentui/deprecated-keyboard-event-props, deprecation/deprecation
          switch (ev.which) {
            case KeyCodes.space:
              if (_tryInvokeClickForFocusable(ev.target as HTMLElement)) {
                break;
              }
              return;

            case KeyCodes.left:
              if (direction !== FocusZoneDirection.vertical) {
                _preventDefaultWhenHandled(ev);
                if (_moveFocusLeft()) {
                  break;
                }
              }
              return;

            case KeyCodes.right:
              if (direction !== FocusZoneDirection.vertical) {
                _preventDefaultWhenHandled(ev);
                if (_moveFocusRight()) {
                  break;
                }
              }
              return;

            case KeyCodes.up:
              if (direction !== FocusZoneDirection.horizontal) {
                _preventDefaultWhenHandled(ev);
                if (_moveFocusUp()) {
                  break;
                }
              }
              return;

            case KeyCodes.down:
              if (direction !== FocusZoneDirection.horizontal) {
                _preventDefaultWhenHandled(ev);
                if (_moveFocusDown()) {
                  break;
                }
              }
              return;
            case KeyCodes.pageDown:
              if (!pagingSupportDisabled && _moveFocusPaging(true)) {
                break;
              }
              return;
            case KeyCodes.pageUp:
              if (!pagingSupportDisabled && _moveFocusPaging(false)) {
                break;
              }
              return;

            case KeyCodes.tab:
              if (
                // eslint-disable-next-line deprecation/deprecation
                handleTabKey === FocusZoneTabbableElements.all ||
                (handleTabKey === FocusZoneTabbableElements.inputOnly &&
                  _isElementInput(ev.target as HTMLElement))
              ) {
                let focusChanged = false;
                processingTabKeyRef.current = true;
                if (
                  direction === FocusZoneDirection.vertical ||
                  !_shouldWrapFocus(
                    activeElementRef.current as HTMLElement,
                    NO_HORIZONTAL_WRAP
                  )
                ) {
                  focusChanged = ev.shiftKey
                    ? _moveFocusUp()
                    : _moveFocusDown();
                } else {
                  const tabWithDirection = isRTL ? !ev.shiftKey : ev.shiftKey;
                  focusChanged = tabWithDirection
                    ? _moveFocusLeft()
                    : _moveFocusRight();
                }
                processingTabKeyRef.current = false;
                if (focusChanged) {
                  break;
                } else if (shouldResetActiveElementWhenTabFromZone) {
                  activeElementRef.current = null;
                }
              }
              return;

            case KeyCodes.home:
              if (
                _isContentEditableElement(ev.target as HTMLElement) ||
                (_isElementInput(ev.target as HTMLElement) &&
                  !_shouldInputLoseFocus(ev.target as HTMLInputElement, false))
              ) {
                return false;
              }
              const firstChild =
                rootRef.current &&
                (rootRef.current.firstChild as HTMLElement | null);
              if (
                rootRef.current &&
                firstChild &&
                focusElement(
                  getNextElement(
                    rootRef.current,
                    firstChild,
                    true
                  ) as HTMLElement
                )
              ) {
                break;
              }
              return;

            case KeyCodes.end:
              if (
                _isContentEditableElement(ev.target as HTMLElement) ||
                (_isElementInput(ev.target as HTMLElement) &&
                  !_shouldInputLoseFocus(ev.target as HTMLInputElement, true))
              ) {
                return false;
              }

              const lastChild =
                rootRef.current &&
                (rootRef.current.lastChild as HTMLElement | null);
              if (
                rootRef.current &&
                focusElement(
                  getPreviousElement(
                    rootRef.current,
                    lastChild,
                    true,
                    true,
                    true
                  ) as HTMLElement
                )
              ) {
                break;
              }
              return;

            case KeyCodes.enter:
              if (_tryInvokeClickForFocusable(ev.target as HTMLElement)) {
                break;
              }
              return;

            default:
              return;
          }
        }

        ev.preventDefault();
        ev.stopPropagation();
      },
      [
        direction,
        disabled,
        handleTabKey,
        pagingSupportDisabled,
        shouldResetActiveElementWhenTabFromZone,
        shouldEnterInnerZone
      ]
    );
    const handleFocus = React.useCallback(
      (ev: React.FocusEvent<HTMLElement>): void => {
        if (_portalContainsElement(ev.target as HTMLElement)) {
          // If the event target is inside a portal do not process the event.
          return;
        }

        const isImmediateDescendant = _isImmediateDescendantOfZone(
          ev.target as HTMLElement
        );
        let newActiveElement: HTMLElement | null | undefined;

        if (isImmediateDescendant) {
          newActiveElement = ev.target as HTMLElement;
        } else {
          let parentElement = ev.target as HTMLElement;

          while (parentElement && parentElement !== rootRef.current) {
            if (
              isElementTabbable(parentElement) &&
              _isImmediateDescendantOfZone(parentElement)
            ) {
              newActiveElement = parentElement;
              break;
            }
            parentElement = parentElement.parentNode as HTMLElement;
          }
        }

        // If an inner focusable element should be focused when FocusZone container receives focus
        if (
          shouldFocusInnerElementWhenReceivedFocus &&
          ev.target === rootRef.current
        ) {
          const maybeElementToFocus =
            defaultTabbableElement &&
            typeof defaultTabbableElement === 'function' &&
            defaultTabbableElement(rootRef.current!);

          // try to focus defaultTabbable element
          if (maybeElementToFocus && isElementTabbable(maybeElementToFocus)) {
            newActiveElement = maybeElementToFocus;
            maybeElementToFocus.focus();
          } else {
            // force focus on first focusable element
            focus(true);
            if (activeElementRef.current) {
              // set to null as new active element was handled in method above
              newActiveElement = null;
            }
          }
        }

        const initialElementFocused = !activeElementRef.current;

        // If the new active element is a child of this zone and received focus,
        // update alignment an immediate descendant
        if (newActiveElement && newActiveElement !== activeElementRef.current) {
          if (isImmediateDescendant || initialElementFocused) {
            _setFocusAlignment(newActiveElement, true, true);
          }

          activeElementRef.current = newActiveElement;

          if (initialElementFocused) {
            _updateTabIndexes();
          }
        }

        if (onActiveElementChanged) {
          onActiveElementChanged(activeElementRef.current as HTMLElement, ev);
        }

        if (stopFocusPropagation) {
          ev.stopPropagation();
        }

        if (children && children.props.onFocus) {
          children.props.onFocus(ev);
        }
      },
      [
        onActiveElementChanged,
        stopFocusPropagation,
        shouldFocusInnerElementWhenReceivedFocus,
        defaultTabbableElement
      ]
    );
    const handleMouseDown = React.useCallback(
      (ev: React.MouseEvent<HTMLElement>): void => {
        if (_portalContainsElement(ev.target as HTMLElement)) {
          // If the event target is inside a portal do not process the event.
          return;
        }

        if (disabled) {
          return;
        }

        let target = ev.target as HTMLElement;
        const path = [];

        while (target && target !== rootRef.current) {
          path.push(target);
          target = target.parentNode as HTMLElement;
        }

        while (path.length) {
          target = path.pop() as HTMLElement;

          if (target && isElementTabbable(target)) {
            _setActiveElement(target, true);
          }

          if (isElementFocusZone(target)) {
            // Stop here since the focus zone will take care of its own children.
            break;
          }
        }
      },
      [disabled]
    );

    const { current: focusZone } = React.useRef<IFocusZone>({
      focusElement,
      focus,
      focusLast,
      setFocusAlignment,
      _updateTabIndexes
    });

    React.useImperativeHandle(ref, () => focusZone, []);

    //componentDidMount
    React.useEffect(() => {
      const { current: root } = rootRef;

      _allInstances[focuszoneId] = focusZone;

      const _onBlur = (): void => {
        _setParkedFocus(false);
      };

      /**
       * Handle global tab presses so that we can patch tabindexes on the fly.
       * HEADS UP: This must not be an arrow function in order to be referentially equal among instances
       * for ref counting to work correctly!
       */
      const _onKeyDownCapture = (ev: KeyboardEvent): void => {
        // eslint-disable-next-line deprecation/deprecation, @fluentui/deprecated-keyboard-event-props
        if (ev.which === KeyCodes.tab) {
          _outerZones.forEach((zone: IFocusZone) => zone._updateTabIndexes());
        }
      };

      if (root) {
        const win = ownerWindow(root);
        let parentElement = root.parentNode as HTMLElement;

        while (
          parentElement &&
          parentElement !== ownerDocument(root).body &&
          parentElement.nodeType === 1
        ) {
          if (isElementFocusZone(parentElement)) {
            isInnerZoneRef.current = true;
            break;
          }
          parentElement = parentElement.parentNode as HTMLElement;
        }

        if (!isInnerZoneRef.current) {
          _outerZones.add(focusZone);

          if (win && _outerZones.size === 1) {
            win.addEventListener('keydown', _onKeyDownCapture, true);
          }
        }

        root && root.addEventListener('blur', _onBlur, true);

        // Assign initial tab indexes so that we can set initial focus as appropriate.
        _updateTabIndexes();

        if (
          defaultTabbableElement &&
          typeof defaultTabbableElement === 'string'
        ) {
          activeElementRef.current = ownerDocument(root).querySelector(
            defaultTabbableElement
          ) as HTMLElement;
          // eslint-disable-next-line deprecation/deprecation
        }

        if (shouldFocusOnMount) {
          focus();
        }
        //componentWillUnmount
        return () => {
          delete _allInstances[focuszoneId];
          if (!isInnerZoneRef.current) {
            _outerZones.delete(focusZone);

            // If this is the last outer zone, remove the keydown listener.
            if (win && _outerZones.size === 0) {
              win.removeEventListener('keydown', _onKeyDownCapture, true);
            }
          }

          if (root) {
            root.removeEventListener('blur', _onBlur, true);
          }

          activeElementRef.current = null;
          defaultFocusElementRef.current = null;
        };
      }

      return undefined;
    }, []);

    //componentDidUpdate
    React.useEffect(() => {
      const { current: root } = rootRef;
      const doc = ownerDocument(root);
      if (
        doc &&
        lastIndexPathRef.current &&
        (doc.activeElement === doc.body ||
          doc.activeElement === null ||
          (!preventFocusRestoration && doc.activeElement === root))
      ) {
        // The element has been removed after the render, attempt to restore focus.
        const elementToFocus = getFocusableByIndexPath(
          root as HTMLElement,
          lastIndexPathRef.current
        );

        if (elementToFocus) {
          _setActiveElement(elementToFocus, true);
          elementToFocus.focus();
          _setParkedFocus(false);
        } else {
          // We had a focus path to restore, but now that path is unresolvable. Park focus
          // on the container until we can try again.
          _setParkedFocus(true);
        }
      }
    });

    const childProps: Record<string, any> = {
      'data-focuszone-id': focuszoneId,
      ref: handleRootRef,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onMouseDownCapture: handleMouseDown
    };

    if (children) {
      const root = rootRef.current;
      const doc = ownerDocument(root);

      if (doc) {
        const focusedElement = doc.activeElement as HTMLElement;

        // Only update the index path if we are not parked on the root.
        if (focusedElement !== root) {
          const shouldRestoreFocus = contains(root!, focusedElement);
          lastIndexPathRef.current = shouldRestoreFocus
            ? getElementIndexPath(root as HTMLElement, focusedElement)
            : undefined;
        }
      }

      return React.cloneElement(children, childProps);
    }

    return null;
  }
);

export default FocusZone;
