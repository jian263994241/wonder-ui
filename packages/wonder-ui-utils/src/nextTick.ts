/**
 * Defer a task to execute it asynchronously.
 */
export function nextTick(cb: () => void) {
  setTimeout(cb, 0);
}
