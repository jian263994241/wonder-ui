/**
 * URL parseQuery
 * @param {string} url 
 */
export function parse(url){
  const query = {};
  let urlToParse = url || window.location.href;
  let i;
  let params;
  let param;
  let length;
  if (typeof urlToParse === 'string' && urlToParse.length) {
    urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
    params = urlToParse.split('&').filter(paramsPart => paramsPart !== '');
    length = params.length;

    for (i = 0; i < length; i += 1) {
      param = params[i].replace(/#\S+/g, '').split('=');
      query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param.slice(1).join('=')) || '';
    }
  }
  return query;
}

/**
 * URL stringify
 * @param {*} obj 
 * @param {*} parents 
 */
export function stringify(obj, parents = []) {
  if (typeof obj === 'string') return obj;
  const resultArray = [];
  const separator = '&';
  let newParents;
  function varName(name) {
    if (parents.length > 0) {
      let parentParts = '';
      for (let j = 0; j < parents.length; j += 1) {
        if (j === 0) parentParts += parents[j];
        else parentParts += `[${encodeURIComponent(parents[j])}]`;
      }
      return `${parentParts}[${encodeURIComponent(name)}]`;
    }
    return encodeURIComponent(name);
  }
  function varValue(value) {
    return encodeURIComponent(value);
  }
  Object.keys(obj).forEach((prop) => {
    let toPush;
    if (Array.isArray(obj[prop])) {
      toPush = [];
      for (let i = 0; i < obj[prop].length; i += 1) {
        if (!Array.isArray(obj[prop][i]) && typeof obj[prop][i] === 'object') {
          newParents = parents.slice();
          newParents.push(prop);
          newParents.push(String(i));
          toPush.push(stringify(obj[prop][i], newParents));
        } else {
          toPush.push(`${varName(prop)}[]=${varValue(obj[prop][i])}`);
        }
      }
      if (toPush.length > 0) resultArray.push(toPush.join(separator));
    } else if (obj[prop] === null || obj[prop] === '') {
      resultArray.push(`${varName(prop)}=`);
    } else if (typeof obj[prop] === 'object') {
      // Object, convert to named array
      newParents = parents.slice();
      newParents.push(prop);
      toPush = stringify(obj[prop], newParents);
      if (toPush !== '') resultArray.push(toPush);
    } else if (typeof obj[prop] !== 'undefined' && obj[prop] !== '') {
      // Should be string or plain value
      resultArray.push(`${varName(prop)}=${varValue(obj[prop])}`);
    } else if (obj[prop] === '') resultArray.push(varName(prop));
  });
  return resultArray.join(separator);
}