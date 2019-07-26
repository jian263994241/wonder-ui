
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

const typography = {
  pxToRem
}


export default typography;