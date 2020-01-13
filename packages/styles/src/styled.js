import theming from './theming';
import { styled as styledWithoutDefault } from 'react-jss';

export default function styled(Component, options) {
  return styledWithoutDefault(Component, { theming, ...options})
}
