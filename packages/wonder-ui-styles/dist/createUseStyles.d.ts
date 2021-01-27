import type { Styles, ClassNameMap, AnyProps } from './types';
import { DefaultTheme } from './theme/defaultTheme';
import { CreateUseStylesOptions } from './types';
export default function createUseStyles<Theme = DefaultTheme, Props extends object = {}, ClassKey extends string = string>(styles: Styles<Theme, AnyProps<Props>, ClassKey>, options?: CreateUseStylesOptions<Theme>): (data?: Partial<Props>) => ClassNameMap<ClassKey>;
