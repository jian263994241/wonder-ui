import * as React from 'react';
import {
  Page,
  List,
  ListInputItem,
  ListHeader,
  showPicker,
  hidePicker
} from '@wonder-ui/core';

const columns = {
  values: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <Page>
      <List>
        <ListHeader>浮层</ListHeader>
        <ListInputItem
          button
          label="城市"
          readOnly
          placeholder="选择城市"
          value={value}
          onClick={() => {
            showPicker({
              columns,
              onCancel: () => {
                hidePicker();
              },
              onConfirm: (values) => {
                setValue(values[0] as string);
                hidePicker();
              }
            });
          }}
        />
      </List>
    </Page>
  );
};
