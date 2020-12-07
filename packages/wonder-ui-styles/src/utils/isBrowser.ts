export const isBrowser: boolean =
  typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9;
