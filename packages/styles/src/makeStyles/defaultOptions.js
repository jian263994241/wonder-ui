import { create } from 'jss';
import jssPeset from '../jssPeset';
import createGenerateClassName from './createGenerateClassName';


const jss = create(jssPeset());
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

