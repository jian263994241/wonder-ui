import { withStyles as withStylesWithoutDefault } from 'react-jss';
import theming from '../styles/theming';

export default function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, { theming, ...options });
}
