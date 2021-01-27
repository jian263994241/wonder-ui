import * as CSS from 'csstype';
export declare type easingType = {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    ease: string;
    sharp: string;
};
export declare const easing: easingType;
export declare type DurationType = {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
};
export declare const duration: DurationType;
export declare const formatMs: (milliseconds: number) => string;
export declare const create: (props?: CSS.Property.TransitionProperty | (keyof CSS.StandardLonghandProperties)[], options?: {
    duration?: keyof DurationType | number;
    easing?: keyof easingType;
    delay?: number;
}) => string;
