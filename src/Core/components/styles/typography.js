
const fontFamily = 'PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif';

const fontSize = 14; // px
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

const pxToRem = size => `${(size / htmlFontSize) * coef}rem`;

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
  htmlFontSize
}


export default typography;