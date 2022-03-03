import * as React from 'react';
import { Button, Picker } from '@wonder-ui/core';

const columns = {
  values: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
  defaultIndex: 2
};

export default () => {
  const [value, setValue] = React.useState<string[]>();

  return (
    <Picker
      value={value}
      columns={columns}
      onConfirm={(value) => {
        setValue(value);
      }}
    >
      {({ selected, show }) => {
        return (
          <Button onClick={show}>
            {selected ? `城市: ${selected[0]}` : '选择城市'}
          </Button>
        );
      }}
    </Picker>
  );
};
