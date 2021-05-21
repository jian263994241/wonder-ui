/**
 *
 * storeStyle.styles.push({
 *    value: doc.body.style.overflow,
 *    property: 'overflow',
 *    el: doc.body
 *  });
 */
export function createStyleStore() {
  const styles: Array<{
    /**
     * CSS property name (HYPHEN CASE) to be modified.
     */
    property: string;
    el: HTMLElement | SVGElement;
    value: string;
  }> = [];

  const restore = () => {
    styles.forEach(({ value, el, property }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return {
    styles,
    restore
  };
}
