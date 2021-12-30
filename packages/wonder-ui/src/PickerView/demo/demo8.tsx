import * as React from 'react';
import { getPCA } from 'lcn';
import {
  List,
  ListHeader,
  ListInputItem,
  Page,
  PickerAction,
  PickerObjectOption,
  PickerView,
  WhiteSpace
} from '@wonder-ui/core';

const pca = getPCA({ inland: true });

export default () => {
  const actionRef = React.useRef<PickerAction>(null);
  const [displayText, setDisplayText] = React.useState('');

  const setValues = () => {
    const values = actionRef.current?.getValues() || [];

    const displayText = values
      .map((item) => (item as PickerObjectOption).name)
      .join(',');

    setDisplayText(displayText);
  };

  React.useEffect(() => {
    setValues();
  }, []);

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
        textKey="name"
        columns={pca}
        onChange={() => {
          setValues();
        }}
      />
    </Page>
  );
};
