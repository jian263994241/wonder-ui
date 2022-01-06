import * as React from 'react';
import Picker from './Picker';
import type { PickerProps } from './PickerTypes';

export default function usePicker(props: Omit<PickerProps, 'visible'> = {}) {
  const [visible, setVisible] = React.useState(false);
  const propsRef = React.useRef<any>();

  const rendered = (
    <Picker {...props} {...propsRef.current} visible={visible} />
  );

  const show = (props?: Omit<PickerProps, 'visible'>) => {
    if (props) {
      propsRef.current = props;
    }

    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return { rendered, show, hide };
}
