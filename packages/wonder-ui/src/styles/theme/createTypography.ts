import * as React from 'react';

export interface Typography {
  fontFamily: string;
  fontSize: number;
  htmlFontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  pxToRem: (px: number) => string;
  ellipsis: (lines: number, width?: string | number) => React.CSSProperties;
}

export interface TypographyOptions
  extends Partial<
    Pick<
      Typography,
      | 'fontFamily'
      | 'fontSize'
      | 'fontWeightBold'
      | 'fontWeightLight'
      | 'fontWeightMedium'
      | 'fontWeightRegular'
      | 'htmlFontSize'
    >
  > {}

function ellipsis(
  lines: number,
  width: string | number = '100%'
): Record<string, any> {
  const styles = {
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };

  return lines > 1
    ? {
        ...styles,
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: lines,
        display: '-webkit-box',
        whiteSpace: 'normal'
      }
    : styles;
}

const defaultFontFamily = `-apple-system, "SF Pro Text", "SF UI Text", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`;

export default function createTypography(
  typography: TypographyOptions = {}
): Typography {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell Material-UI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16
    // Apply the CSS properties to all the variants.
    // allVariants,
  } = typography;

  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    htmlFontSize,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    pxToRem,
    ellipsis
  };
}
