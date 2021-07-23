/**
 * title: 地址选择器
 * desc: 使用`lcn`创建组件数据
 */
import {
  Picker,
  PickerAction,
  Page,
  List,
  ListInputItem,
  ListHeader,
  Popup
} from '@wonder-ui/core';
import { useReactive } from '@wonder-ui/hooks';
import { getPCA, CascadeData } from 'lcn';
import * as React from 'react';

const pca = getPCA();

export default () => {
  const state = useReactive({ visible: false, value: '', valueCode: '' });

  const pickActionRef = React.useRef<PickerAction>(null);

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
      <Popup
        keepMounted
        visible={state.visible}
        title="省市区"
        onClose={() => {
          state.visible = false;
          pickActionRef.current?.confirm();
        }}
      >
        <Picker
          actionRef={pickActionRef}
          textKey="name"
          columns={pca}
          visibleItemCount={11}
          showNavbar={false}
          onConfirm={(values: CascadeData[]) => {
            state.value = values.map((item) => item.name).join('/');
            state.valueCode = values.map((item) => item.code).join(',');
          }}
        />
      </Popup>
    </Page>
  );
};
