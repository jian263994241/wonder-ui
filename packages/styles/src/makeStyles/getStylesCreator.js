import warning from 'tiny-warning';
import deepmerge from '@wonder-ui/utils/deepmerge';

export default function getStylesCreator(stylesOrCreator){
  const themingEnabled = typeof stylesOrCreator === 'function';

  return {
    create(theme, name){
      const styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      if(!name || !theme.overrides || !theme.overrides[name]){
        return styles;
      }

      const overrides = theme.overrides[name];
      const stylesWithOverrides = { ...styles };

      Object.keys(overrides).forEach( key => {

        warning(
          stylesWithOverrides[key], 
          [
            'Jss styles: you are trying to override a style that does not exist.',
            `Fix the \`${key}\` key of \`theme.overrides.${name}\`.`,
          ].join('\n')
        )

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });

      return stylesWithOverrides;
    }, 
    options: {}
  }
}