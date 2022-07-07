import * as React from 'react';
import { getPCA } from 'lcn';
import {
  List,
  ListHeader,
  ListInputItem,
  Page,
  PickerViewAction,
  PickerView,
  WhiteSpace
} from '@wonder-ui/core';

const pca = getPCA({ inland: true });

export default () => {
  const actionRef = React.useRef<PickerViewAction>(null);
  const [displayText, setDisplayText] = React.useState('');

  const getValues = () => {
    const values = actionRef.current?.getValues() || [];

    const displayText = values.join(',');

    setDisplayText(displayText);
  };

  return (
    <Page>
      <List>
        <ListHeader>地址选择器</ListHeader>

        <ListInputItem
          label="城市"
          placeholder="选择城市"
          value={displayText}
          readOnly
        />
      </List>
      <WhiteSpace />

      <PickerView
        actionRef={actionRef}
        fieldNames={{
          label: 'name'
        }}
        columns={pca}
        onChange={() => {
          getValues();
        }}
      />
    </Page>
  );
};
