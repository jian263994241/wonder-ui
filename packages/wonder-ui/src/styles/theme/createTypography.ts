import { getRootFontSize } from '@wonder-ui/utils';

export interface Typography {
  fontFamily: string;
  fontSize: number;
  htmlFontSize: number;
  pxToRem: (px: number) => string;
}

export type TypographyOptions = Partial<
  Pick<Typography, 'fontFamily' | 'fontSize'>
>;

const defaultFontFamily = `-apple-system, "SF Pro Text", "SF UI Text", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`;

export default function createTypography(
  typography: TypographyOptions = {}
): Typography {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14 // px
  } = typography;

  // 16px is the default font-size used by browsers.
  const htmlFontSize = getRootFontSize(); //16
  const coef = fontSize / 14;
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;

  return {
    htmlFontSize,
    fontFamily,
    fontSize,
    pxToRem
  };
}
