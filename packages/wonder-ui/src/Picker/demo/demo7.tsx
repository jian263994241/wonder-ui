import {
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
        <ListHeader>浮层</ListHeader>
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
      <Picker
        onConfirm={(value: string) => {
          state.value = value;
          state.visible = false;
        }}
        onCancel={() => {
          state.visible = false;
        }}
        visible={state.visible}
        onClose={(e) => {
          state.visible = false;
        }}
        {...props}
      />
    </Page>
  );
};
