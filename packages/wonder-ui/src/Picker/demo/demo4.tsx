import { Picker, PickerProps } from '@wonder-ui/core';

const props: PickerProps = {
  columns: [
    { text: '杭州', disabled: true },
    { text: '宁波' },
    { text: '温州' }
  ],
  defaultIndex: 2
};

export default () => <Picker disableDrawer {...props} />;
