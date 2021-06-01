export type TraversalFunction = (
  list: HTMLElement,
  item: HTMLElement | null,
  disableListWrap?: boolean
) => ChildNode | null;

export type TextCriteria = {
  keys: string[];
  repeating: boolean;
  previousKeyMatched: boolean;
  lastTime: number;
};

/**
 * Next item
 */
export const nextItem: TraversalFunction = (list, item, disableListWrap) => {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
};

/**
 * Previous item
 */
export const previousItem: TraversalFunction = (
  list,
  item,
  disableListWrap
) => {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
};

export function textCriteriaMatches(
  nextFocus: HTMLElement,
  textCriteria?: TextCriteria
) {
  if (textCriteria === undefined) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent as string;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join('')) === 0;
}

export function moveFocus(
  list: HTMLElement,
  currentFocus: HTMLElement | null,
  disableListWrap: boolean,
  disabledItemsFocusable: boolean,
  traversalFunction: TraversalFunction,
  textCriteria?: TextCriteria
) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(
    list,
    currentFocus,
    currentFocus ? disableListWrap : false
  ) as HTMLElement;

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : //@ts-expect-error
        nextFocus.disabled ||
        nextFocus.getAttribute('aria-disabled') === 'true';

    if (
      !nextFocus.hasAttribute('tabindex') ||
      !textCriteriaMatches(nextFocus, textCriteria) ||
      nextFocusDisabled
    ) {
      // Move to the next element.
      nextFocus = traversalFunction(
        list,
        nextFocus,
        disableListWrap
      ) as HTMLElement;
    } else {
      nextFocus.focus();
      return;
    }
  }
}
