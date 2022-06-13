import * as React from 'react';

/**
 * 生成id
 * @param {*} mask
 * @param {*} map
 */
export function createId(mask = 'xxxxxxxxxx', map = '0123456789abcdef') {
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor(Math.random() * length)]);
}

/**
 * 生成随机ID
 */
export function useId(): string {
  if (React.useId) {
    return React.useId();
  }

  return React.useMemo(() => createId(), []);
}

export default useId;
