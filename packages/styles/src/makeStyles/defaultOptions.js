import jss from '../jss';
import createGenerateClassName from './createGenerateClassName';

const sheetsManager = new Map();
const generateClassName = createGenerateClassName();

const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null,
};

export default defaultOptions;

