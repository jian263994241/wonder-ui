import styledProps from './styledProps';

export default function bindStyles(map) {
  return Object.keys(map).reduce((memo, key) => {
    // eslint-disable-next-line no-param-reassign
    memo[key] = styledProps(map[key], key);
    return memo;
  }, {});
}