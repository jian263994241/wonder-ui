import { css } from 'styled-components';
import warning from 'warning';
import isObject from '@wonder-ui/utils/isObject';

export default function makeStyles (styles = {}, theme = {}){
  const isObjStyle = isObject(styles);

  warning(
    isObjStyle || typeof styles === 'function',
    '@wonder-ui/styles: styles must be an object.'
  )

  const classes = {};

  if(isObjStyle){
    for(let k in styles){
      classes[k] = css(styles[k])
    }
    return classes;
  }

  if(typeof styles === 'function'){
    return makeStyles(styles(theme), theme);
  }

};


