
/**
 * 转换html的prop true => 'true'
 * @param {*} key 
 * @param {*} value 
 */
export function htmlProp(key, props){
  return props[key] != undefined ? { [key]:  String(props[key]) } : {}
}