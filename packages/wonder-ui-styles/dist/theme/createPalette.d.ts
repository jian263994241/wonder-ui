import { ColorKeys, ColorType } from './colors';
export interface ThemeColor {
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    divider: string;
    background: {
        paper: string;
        default: string;
    };
    action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        disabled: string;
        disabledBackground: string;
    };
}
declare type Direction = 'light' | 'dark';
declare type ColorIntent = {
    main: string;
    light?: string;
    dark?: string;
    contrastText?: string;
} & Partial<ColorType>;
export interface Palette {
    primary: ColorIntent;
    secondary: ColorIntent;
    error: ColorIntent;
    warning: ColorIntent;
    info: ColorIntent;
    success: ColorIntent;
    type: Direction;
    contrastThreshold: number;
    tonalOffset: number;
}
export interface CommonColor {
    black: string;
    white: string;
}
export declare const light: ThemeColor;
export declare const dark: ThemeColor;
export default function createPalette(palette?: Partial<Palette>): {
    amber: ColorType;
    blue: ColorType;
    blueGrey: ColorType;
    brown: ColorType;
    cyan: ColorType;
    deepOrange: ColorType;
    deepPurple: ColorType;
    green: ColorType;
    grey: ColorType;
    indigo: ColorType;
    lightBlue: ColorType;
    lightGreen: ColorType;
    lime: ColorType;
    orange: ColorType;
    pink: ColorType;
    purple: ColorType;
    red: ColorType;
    teal: ColorType;
    yellow: ColorType;
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        hint: string;
    };
    divider: string;
    background: {
        paper: string;
        default: string;
    };
    action: {
        active: string;
        hover: string;
        hoverOpacity: number;
        selected: string;
        disabled: string;
        disabledBackground: string;
    };
    common: CommonColor;
    type: Direction;
    primary: ColorIntent;
    secondary: ColorIntent;
    error: ColorIntent;
    warning: ColorIntent;
    info: ColorIntent;
    success: ColorIntent;
    contrastThreshold: number;
    getContrastText: (background: string) => string;
    augmentColor: (color: ColorIntent, mainShade?: ColorKeys, lightShade?: ColorKeys, darkShade?: ColorKeys) => ColorIntent;
    tonalOffset: number;
};
export {};
