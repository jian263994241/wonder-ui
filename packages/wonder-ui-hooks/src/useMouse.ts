import * as React from 'react';
import { getDocument } from '@wonder-ui/utils';
import { useEventListener } from './useEventListener';

export interface CursorState {
  screenX: number;
  screenY: number;
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
}

const initState: CursorState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN
};

export const useMouse = () => {
  const [state, setState] = React.useState(initState);

  useEventListener(getDocument(), 'mousemove', (event: MouseEvent) => {
    const { screenX, screenY, clientX, clientY, pageX, pageY } = event;
    setState({ screenX, screenY, clientX, clientY, pageX, pageY });
  });

  return state;
};

export default useMouse;
