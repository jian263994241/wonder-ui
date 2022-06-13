import * as React from 'react';
import { renderToBody } from './renderToBody';

type HookType<P = {}> = (props: P) => {
  rendered: JSX.Element;
  [k: string]: any;
};

export function createActionFromHookRef<Action = any>(
  hook: HookType,
  props?: any
): React.RefObject<Omit<Action, 'rendered'>> {
  const Expose = React.forwardRef((props, ref) => {
    const { rendered, ...actions } = hook(props);
    React.useImperativeHandle(ref, () => actions);
    return rendered;
  });
  const actionRef = React.createRef<any>();

  renderToBody(<Expose {...props} ref={actionRef} />);

  return actionRef;
}
