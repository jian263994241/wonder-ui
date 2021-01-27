import { Styles } from './types';
import { DefaultTheme } from './theme/defaultTheme';
export default function createStyles<Theme = DefaultTheme, Props extends object = {}, ClassKey extends string = string>(styles: Styles<Theme, Props, ClassKey>): Styles<Theme, Props, ClassKey>;
