import {
  Drawer,
  Picker,
  PickerProps,
  Page,
  List,
  ListInputItem,
  ListHeader
} from '@wonder-ui/core';
import { useReactive } from '@wonder-ui/hooks';

const props: PickerProps = {
  columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => {
  const state = useReactive({ visible: false, value: '' });

  return (
    <Page>
      <List>
        <ListHeader>表单</ListHeader>
        <ListInputItem
          button
          label="城市"
          readOnly
          placeholder="选择城市"
          value={state.value}
          onClick={() => {
            state.visible = true;
          }}
        />
      </List>
      <Drawer
        keepMounted
        anchor="bottom"
        visible={state.visible}
        onClose={() => {
          state.visible = false;
        }}
      >
        <Picker
          onConfirm={(value: string) => {
            state.visible = false;
            state.value = value;
          }}
          onCancel={() => {
            state.visible = false;
          }}
          {...props}
        />
      </Drawer>
    </Page>
  );
};
