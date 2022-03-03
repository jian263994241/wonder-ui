import { useRef } from 'react';
/**
 * Keep input cursor in the correct position if possible.
 * Is this necessary since we have `formatter` which may mass the content?
 */
export function useCursor(
  input: HTMLInputElement | null | undefined,
  focused: boolean
): [() => void, () => void] {
  const selectionRef =
    useRef<{
      start?: number | null;
      end?: number | null;
      value?: string;
      beforeTxt?: string;
      afterTxt?: string;
    }>();

  function recordCursor() {
    // Record position
    try {
      if (input) {
        const { selectionStart: start, selectionEnd: end, value } = input;
        const beforeTxt = value.substring(0, start || 0);
        const afterTxt = value.substring(end || 0);

        selectionRef.current = {
          start,
          end,
          value,
          beforeTxt,
          afterTxt
        };
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }

  /**
   * Restore logic:
   *  1. back string same
   *  2. start string same
   */
  function restoreCursor() {
    if (input && selectionRef.current && focused) {
      try {
        const { value } = input;
        const { beforeTxt = '', afterTxt = '', start } = selectionRef.current;

        let startPos = value.length;

        if (value.endsWith(afterTxt)) {
          startPos = value.length - afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          const beforeLastChar = beforeTxt[start! - 1];
          const newIndex = value.indexOf(beforeLastChar, start! - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }

        input.setSelectionRange(startPos, startPos);
      } catch (e) {
        console.error(e);
      }
    }
  }

  return [recordCursor, restoreCursor];
}
