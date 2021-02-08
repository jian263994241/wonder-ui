import { CSSProperties } from 'react';
export interface Typography {
  fontFamily: string;
  fontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  htmlFontSize: number;
}

export interface BuildVariant {
  fontFamily: CSSProperties['fontFamily'];
  fontWeight: CSSProperties['fontWeight'];
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
  letterSpacing?: CSSProperties['letterSpacing'];
  textTransform?: CSSProperties['textTransform'];
}

function round(value: number) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};

const defaultFontFamily = `system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`;

export default function createTypography(typography: Partial<Typography> = {}) {
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
    lineHeight: number,
    letterSpacing: number,
    allVariants?: object
  ): BuildVariant {
    return {
      fontFamily,
      fontWeight,
      fontSize: pxToRem(fontSize),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...(fontFamily === defaultFontFamily
        ? { letterSpacing: `${round(letterSpacing / fontSize)}em` }
        : {}),
      ...allVariants
    };
  }

  const variants = {
    h1: buildVariant(fontWeightLight, 40, 1, -1.5),
    h2: buildVariant(fontWeightLight, 36, 1, -0.5),
    h3: buildVariant(fontWeightRegular, 32, 1.04, 0),
    h4: buildVariant(fontWeightRegular, 28, 1.17, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.5, 0.4),
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
