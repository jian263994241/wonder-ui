import * as React from 'react';
import { createId } from '@wonder-ui/utils';

/**
 * 生成随机ID
 */
export function useId(): string {
  return React.useMemo(() => {
    return createId();
  }, []);
}

export default useId;
