import * as React from 'react';

export interface TypographyOptions {
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  htmlFontSize?: number;
}

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};

const defaultFontFamily = `"SF Pro Text",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`;

export default function createTypography(typography: TypographyOptions = {}) {
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

  function buildVariant(
    fontWeight: number,
    fontSize: number,
    lineHeight: number | null,
    letterSpacing: number | null,
    allVariants?: object
  ): React.CSSProperties {
    return {
      fontFamily,
      fontWeight,
      fontSize: pxToRem(fontSize),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight ? lineHeight : undefined,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...(fontFamily === defaultFontFamily && letterSpacing
        ? { letterSpacing: `${round(letterSpacing / fontSize)}em` }
        : {}),
      WebkitFontSmoothing: 'antialiased',
      ...allVariants
    };
  }

  const variants = {
    h1: buildVariant(fontWeightMedium, 40, 1.167, -1.5),
    h2: buildVariant(fontWeightMedium, 32, 1.2, -0.5),
    h3: buildVariant(fontWeightMedium, 28, 1.167, 0),
    h4: buildVariant(fontWeightMedium, 24, 1.235, 0.25),
    h5: buildVariant(fontWeightMedium, 20, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 16, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightMedium, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };

  return {
    htmlFontSize,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    pxToRem,
    ...variants
  };
}
