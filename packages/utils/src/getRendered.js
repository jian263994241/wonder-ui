
export default function getRendered(callback, props) {
  return typeof callback === 'function' ? callback(props) : callback;
}