import functions from 'jss-plugin-rule-value-function';
import $global from 'jss-plugin-global';
import extend from 'jss-plugin-extend';
import nested from 'jss-plugin-nested';
import compose from 'jss-plugin-compose';
import camelCase from 'jss-plugin-camel-case';
import defaultUnit from 'jss-plugin-default-unit';
import expand from 'jss-plugin-expand';
import vendorPrefixer from 'jss-plugin-vendor-prefixer';
import propsSort from 'jss-plugin-props-sort';

export default function jssPreset (options = {}) {
  return {
    createGenerateId: options.createGenerateId,
    plugins: [
      functions(),
      $global(),
      extend(),
      nested(),
      compose(),
      camelCase(),
      defaultUnit(options.defaultUnit),
      expand(),
      vendorPrefixer(),
      propsSort()
    ]
  };
}