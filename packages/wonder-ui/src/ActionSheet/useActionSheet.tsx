import * as React from 'react';
import ActionSheet from './ActionSheet';
import { useReactive } from '@wonder-ui/hooks';
import type { ActionSheetProps } from './ActionSheetTypes';

type useActionSheetProps = Omit<ActionSheetProps, 'visible'>;

export default function useActionSheet(props: useActionSheetProps = {}) {
  const state = useReactive({
    props: undefined as any,
    visible: false
  });

  const rendered = (
    <ActionSheet {...props} {...state.props} visible={state.visible} />
  );

  const hide = () => {
    state.visible = false;
  };

  const show = (props?: useActionSheetProps) => {
    if (props) {
      state.props = props;
    }
    state.visible = true;
  };

  return { rendered, hide, show };
}
