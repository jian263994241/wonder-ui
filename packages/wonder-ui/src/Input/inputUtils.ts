import { warn } from '@wonder-ui/utils';

export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
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

    try {
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
    } catch (error) {
      warn(error);
    }
  }
}

export function resolveOnChange<
  E extends HTMLInputElement | HTMLTextAreaElement
>(
  target: E,
  e:
    | React.ChangeEvent<E>
    | React.MouseEvent<HTMLElement, MouseEvent>
    | React.CompositionEvent<HTMLElement>,
  onChange: undefined | ((event: React.ChangeEvent<E>) => void),
  targetValue?: string
) {
  if (!onChange) {
    return;
  }
  let event = e;
  const originalInputValue = target.value;

  if (e.type === 'click') {
    // click clear icon
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target;
    // change target ref value cause e.target.value should be '' when clear input
    target.value = '';
    onChange(event as React.ChangeEvent<E>);
    // reset target ref value
    target.value = originalInputValue;
    return;
  }

  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target;

    target.value = targetValue;
    onChange(event as React.ChangeEvent<E>);
    return;
  }
  onChange(event as React.ChangeEvent<E>);
}
