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
      warn(error as any);
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

  if (e.type === 'click') {
    // click clear icon
    event = Object.create(e);

    const currentTarget = target.cloneNode(true) as E;

    event.target = currentTarget;
    event.currentTarget = currentTarget;

    currentTarget.value = '';
    onChange(event as React.ChangeEvent<E>);
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
