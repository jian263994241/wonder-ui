
const defaultFontFamily = 'PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif';

const fontFamily = defaultFontFamily;

const fontSize = 14; // px
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

const caseAllCaps = {
  textTransform: 'uppercase',
};

const pxToRem = size => `${(size / htmlFontSize) * coef}rem`;

const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
  fontFamily,
  fontWeight,
  fontSize: pxToRem(size),
  // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
  lineHeight,
  // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
  // across font-families can cause issues with the kerning.
  ...(fontFamily === defaultFontFamily
    ? { letterSpacing: `${round(letterSpacing / size)}em` }
    : {}),
  ...casing,
  // ...allVariants,
});

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const typography = {
  round,
  pxToRem,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  htmlFontSize,
  body: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
  button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
}


export default typography;