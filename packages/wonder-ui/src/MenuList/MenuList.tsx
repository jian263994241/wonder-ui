import * as React from 'react';
import { isFragment } from 'react-is';
import { getDocument, getScrollbarWidth } from '@wonder-ui/utils';
import { useForkRef, useEnhancedEffect } from '@wonder-ui/hooks';
import List from '../List';
import {
  moveFocus,
  nextItem,
  previousItem,
  TextCriteria,
  textCriteriaMatches
} from './focus';

export type MenuListActions = {
  adjustStyleForScrollbar(
    containerElement: HTMLElement,
    theme: any
  ): HTMLElement;
};

export interface MenuListProps {
  actions?: React.Ref<MenuListActions>;
  autoFocus?: boolean;
  autoFocusItem?: boolean;
  children?: React.ReactNode;
  component?: React.ElementType;
  /**
   * @ignore
   */
  className?: string;
  disabledItemsFocusable?: boolean;
  disableListWrap?: boolean;
  /**
   * @ignore
   */
  onKeyDown?: React.KeyboardEventHandler;
  /**
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * 菜单类型
   * @default selectedMenu
   */
  variant?: 'menu' | 'selectedMenu';
}

/**
 * Menu list
 */
const MenuList: React.FC<MenuListProps> = React.forwardRef((props, ref) => {
  const {
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    disabledItemsFocusable = false,
    disableListWrap = false,
    variant = 'selectedMenu',
    onKeyDown,
    ...rest
  } = props;
  const listRef = React.useRef<HTMLElement>(null);
  const handleRef = useForkRef(listRef, ref);
  const textCriteriaRef = React.useRef<TextCriteria>({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: 0
  });

  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current!.focus();
    }
  }, [autoFocus]);

  React.useImperativeHandle(
    actions,
    () => ({
      adjustStyleForScrollbar: (containerElement: HTMLElement, theme: any) => {
        const list = listRef.current as HTMLElement;
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        const noExplicitWidth = !list.style.width;
        if (
          containerElement.clientHeight < list.clientHeight &&
          noExplicitWidth
        ) {
          const scrollbarSize = `${getScrollbarWidth(
            getDocument(containerElement)
          )}px`;
          list.style[
            theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'
          ] = scrollbarSize;
          list.style.width = `calc(100% + ${scrollbarSize})`;
        }
        return list;
      }
    }),
    []
  );

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    const list = listRef.current as HTMLElement;
    const key = event.key;

    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */
    const currentFocus = getDocument(list).activeElement as HTMLElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        nextItem
      );
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        previousItem
      );
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(
        list,
        null,
        disableListWrap,
        disabledItemsFocusable,
        previousItem
      );
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent =
        currentFocus &&
        !criteria.repeating &&
        textCriteriaMatches(currentFocus, criteria);
      if (
        criteria.previousKeyMatched &&
        (keepFocusOnCurrent ||
          moveFocus(
            list,
            currentFocus,
            false,
            disabledItemsFocusable,
            nextItem,
            criteria
          ))
      ) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  let activeItemIndex = -1;

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return;
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    const newChildProps: Record<string, any> = {};

    if (index === activeItemIndex) {
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return React.cloneElement(child, newChildProps);
    }

    return child;
  });

  return (
    <List
      role="menu"
      ref={handleRef}
      tabIndex={autoFocus ? 0 : -1}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {items}
    </List>
  );
});

export default MenuList;
