import { createUseStyles as createUseStylesWithoutDefault } from 'react-jss';
import theming from './theming';

export default function createUseStyles(stylesOrCreator, options) {
  return createUseStylesWithoutDefault(stylesOrCreator, {
    theming,
    ...options,
  });
}
