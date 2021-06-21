export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

export interface InputBaseAction {
  focus(option?: InputFocusOptions): void;
  blur(): void;
  select(): void;
  setSelectionRange(
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none'
  ): void;
}

export function triggerFocus(
  element?: HTMLInputElement | HTMLTextAreaElement | null,
  option?: InputFocusOptions
) {
  if (!element) return;

  element.focus(option);

  // Selection content
  const { cursor } = option || {};
  if (cursor) {
    const len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}

export function getInputActions(
  element?: HTMLInputElement | HTMLTextAreaElement | null
): InputBaseAction {
  return {
    focus(option) {
      triggerFocus(element, option);
    },
    blur() {
      element?.blur();
    },
    select() {
      element?.select();
    },
    setSelectionRange(start, end, direction) {
      element?.setSelectionRange(start, end, direction);
    }
  };
}
