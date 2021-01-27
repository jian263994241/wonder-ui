import { CSSProperties } from '../types';
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
export default function createTypography(typography?: Partial<Typography>): {
    h1: BuildVariant;
    h2: BuildVariant;
    h3: BuildVariant;
    h4: BuildVariant;
    h5: BuildVariant;
    h6: BuildVariant;
    subtitle1: BuildVariant;
    subtitle2: BuildVariant;
    body1: BuildVariant;
    body2: BuildVariant;
    button: BuildVariant;
    caption: BuildVariant;
    overline: BuildVariant;
    htmlFontSize: number;
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    pxToRem: (size: number) => string;
};
