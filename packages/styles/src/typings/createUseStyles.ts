import { ClassNameMap, Styles, WithStylesOptions } from './withStyles';
import { Omit } from './types';
import { DefaultTheme } from './defaultTheme';

/**
 * `createUseStyles` where the passed `styles` do not depend on props
 */
export default function createUseStyles<
  Theme = DefaultTheme,
  ClassKey extends string = string
> (
  style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props?: any) => ClassNameMap<ClassKey>;
/**
 * `createUseStyles` where the passed `styles` do depend on props
 */
export default function createUseStyles<
  Theme = DefaultTheme,
  Props extends {} = {},
  ClassKey extends string = string
> (
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props: Props) => ClassNameMap<ClassKey>;
