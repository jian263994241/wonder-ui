import { getComputedStyle, ownerDocument } from './dom';
import { isDef, isNumeric } from './validate';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }

  return isNumeric(value) ? `${value}px` : String(value);
}

// cache
let rootFontSize: number;

function getRootFontSize() {
  if (!rootFontSize) {
    const doc = ownerDocument().documentElement;
    const fontSize = doc.style.fontSize || getComputedStyle(doc).fontSize;

    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value: string) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value: string) {
  value = value.replace(/vw/g, '');
  return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
  value = value.replace(/vh/g, '');
  return (+value * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  if (value.includes('rem')) {
    return convertRem(value);
  }
  if (value.includes('vw')) {
    return convertVw(value);
  }
  if (value.includes('vh')) {
    return convertVh(value);
  }

  return parseFloat(value);
}
