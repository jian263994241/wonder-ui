import * as React from 'react';
import type { Styles, WithStylesOptions, ThemeOfStyles } from './types';
export default function createWithStyles<StylesType extends Styles<any, any>>(styles: StylesType, options?: WithStylesOptions<ThemeOfStyles<StylesType>>): <C>(comp: C) => React.ComponentType<JSX.LibraryManagedAttributes<C, Pick<C extends React.ComponentType<infer P> ? P : never, Exclude<keyof (C extends React.ComponentType<infer P> ? P : never), "classes">> & Partial<import("react-jss").WithStylesProps<StylesType>> & {
    innerRef?: React.RefObject<any> | ((instance: any) => void) | undefined;
}>>;
