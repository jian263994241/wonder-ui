import * as CSS from 'csstype';
import { getComputedStyle } from './getComputedStyle';
import { hyphenate } from './hyphenate';
import { isTransform } from './isTransform';

type HyphenProperty = keyof CSS.PropertiesHyphen;
type CamelProperty = keyof CSS.Properties;
type Property = HyphenProperty | CamelProperty;

export function style(
  node: HTMLElement,
  property: Partial<Record<Property, string>>
): void;

export function style<T extends HyphenProperty>(
  node: HTMLElement,
  property: T
): CSS.PropertiesHyphen[T];

export function style<T extends Property>(
  node: HTMLElement,
  property: T | Record<Property, string | number>
) {
  let css = '';
  let transforms = '';

  if (typeof property === 'string') {
    return (
      node.style.getPropertyValue(hyphenate(property)) ||
      getComputedStyle(node).getPropertyValue(hyphenate(property))
    );
  }
  //@ts-expect-error
  Object.keys(property).forEach((key: Property) => {
    const value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenate(key));
    } else if (isTransform(key)) {
      transforms += `${key}(${value}) `;
    } else {
      css += `${hyphenate(key)}: ${value};`;
    }
  });

  if (transforms) {
    css += `transform: ${transforms};`;
  }

  node.style.cssText += `;${css}`;
}
