import warning from 'warning';

export default function styledProps(map, fallback) {
  return function styledCssFn(props) {
    const keysFromProps = Object.keys(map).filter(key => !!props[key]);
    warning(
      keysFromProps.length <= 1,
      `[styledProps] Multiple props provided: ${keysFromProps.join(', ')}.`
    );

    const keyFromProps = keysFromProps[0];
    if (map[keyFromProps] !== undefined) {
      return map[keyFromProps];
    }
    if (fallback) {
      if (props[fallback] && map[props[fallback]] !== undefined) {
        return map[props[fallback]];
      }

      warning(
        map[props[fallback]],
        `[styledProps] Unknown fallback prop provided: ${fallback}.`
      );
    }
    return undefined;
  }
}