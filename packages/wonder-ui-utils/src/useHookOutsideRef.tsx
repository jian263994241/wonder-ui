import * as React from 'react';
import ReactDOM from 'react-dom';

type HookType<P = {}> = (
  props: P
) => { rendered: JSX.Element; [k: string]: any };

export function useHookOutsideRef<Action = any>(
  useHook: HookType,
  props?: any
): React.RefObject<Omit<Action, 'rendered'>> {
  const Expose = React.forwardRef((props, ref) => {
    const { rendered, ...actions } = useHook(props);
    React.useImperativeHandle(ref, () => actions);
    return rendered;
  });
  const actionRef = React.createRef<any>();
  const container = document.createElement('div');
  ReactDOM.render(<Expose {...props} ref={actionRef} />, container);
  return actionRef;
}
