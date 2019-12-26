import { create } from 'jss';
import jssPreset from '../jssPreset';
import createGenerateClassName from './createGenerateClassName';


const jss = create(jssPreset());
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

