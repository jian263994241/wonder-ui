/**
 * title: 地址选择器
 * desc: 使用`lcn`创建组件数据
 */
import {
  Picker,
  PickerProps,
  Page,
  List,
  ListInputItem,
  ListHeader
} from '@wonder-ui/core';
import { useReactive } from '@wonder-ui/hooks';
import { getPCA, CascadeData } from 'lcn';

const pca = getPCA();

const props: PickerProps = {
  columns: pca,
  textKey: 'name',
  drawer: true,
  showNavbar: true
};

export default () => {
  const state = useReactive({ visible: false, value: '', valueCode: '' });

  return (
    <Page>
      <List>
        <ListHeader>地址选择器</ListHeader>
        <ListInputItem
          button
          label="城市"
          readOnly
          placeholder="选择省市区"
          value={state.value}
          onClick={() => {
            state.visible = true;
          }}
        />
      </List>
      <Picker
        visible={state.visible}
        onConfirm={(values: CascadeData[]) => {
          state.visible = false;
          state.value = values.map((item) => item.name).join(',');
          state.valueCode = values.map((item) => item.code).join(',');
        }}
        onCancel={() => {
          state.visible = false;
        }}
        {...props}
      />
    </Page>
  );
};
