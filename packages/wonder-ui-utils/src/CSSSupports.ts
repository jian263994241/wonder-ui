/**
 * CSS.supports shim
 */

export const CSSSupports = (propertyName: string, value: string): boolean => {
  if (CSS.supports) {
    return CSS.supports(propertyName, value);
  } else {
    const element = document.createElement('div');
    //@ts-expect-error
    element.style[propertyName] = value;
    document.body.appendChild(element);
    //@ts-expect-error
    const result = window.getComputedStyle(element)[propertyName] === value;
    document.body.removeChild(element);

    return result;
  }
};
