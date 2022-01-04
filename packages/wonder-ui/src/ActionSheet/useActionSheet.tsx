import * as React from 'react';
import ActionSheet from './ActionSheet';
import type { ActionSheetProps } from './ActionSheetTypes';

export default function useActionSheet(
  props: Omit<ActionSheetProps, 'visible'>
) {
  const [visible, setVisible] = React.useState(false);
  const rendered = <ActionSheet {...props} visible={visible} />;

  return {
    rendered,
    hide: () => {
      setVisible(false);
    },
    show: () => {
      setVisible(true);

      return () => {
        setVisible(false);
      };
    }
  };
}
