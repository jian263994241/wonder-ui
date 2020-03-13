import { withStyles as withStylesWithoutDefault } from 'react-jss';
import theming from './theming';

export default function withStyles(stylesOrCreator, options = {}) {
  const { name, ...rest} = options;
  return function (StyledComponent){
    if(name){
      StyledComponent.displayName = name;
    }
    return withStylesWithoutDefault(stylesOrCreator, { theming, ...rest })(StyledComponent)
  };
}
