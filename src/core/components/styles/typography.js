
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

const variants = {
  h1: buildVariant(fontWeightLight, 96, 1, -1.5),
  h2: buildVariant(fontWeightLight, 60, 1, -0.5),
  h3: buildVariant(fontWeightRegular, 48, 1.04, 0),
  h4: buildVariant(fontWeightRegular, 34, 1.17, 0.25),
  h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
  h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
  subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
  subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
  body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
  body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
  button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
  caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
  overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
};

const ellipsis = {
  width: 'auto',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
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
  ellipsis,
  ...variants
}


export default typography;