import Dialog from './Dialog';
import { useReactive } from '@wonder-ui/hooks';
import type { DialogProps } from './DialogTypes';

export default function useDialog(props: Omit<DialogProps, 'visible'> = {}) {
  const state = useReactive({
    props: undefined as any,
    visible: false
  });

  const rendered = (
    <Dialog {...props} {...state.props} visible={state.visible} />
  );

  const hide = () => {
    state.visible = false;
  };

  const show = (props?: Omit<DialogProps, 'visible'>) => {
    if (props) {
      state.props = props;
    }
    state.visible = true;
  };

  return { rendered, hide, show };
}
