import * as React from 'react';
import {
  CascaderView,
  List,
  ListHeader,
  ListItem,
  WhiteSpace
} from '@wonder-ui/core';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

export default () => {
  const [value, setValue] = React.useState<(string | number)[]>([]);
  const [displayValue, setDisplayValue] = React.useState<(string | number)[]>(
    []
  );

  return (
    <React.Fragment>
      <List>
        <ListHeader>基础用法</ListHeader>

        <ListItem
          button
          extra={displayValue.length > 0 ? displayValue.join(',') : '无数据'}
        >
          地区
        </ListItem>

        <ListItem extra={value.length > 0 ? value.join('-') : '无数据'}>
          地区码
        </ListItem>
      </List>

      <WhiteSpace />

      <CascaderView
        divider
        value={value}
        options={pca}
        textKey="name"
        valueKey="code"
        onChange={(value) => {
          setValue(value);
        }}
        getOptionsSelected={(options) => {
          setDisplayValue(options.map((item) => item.name));
        }}
        style={{ '--cascader-content-height': '400px' } as React.CSSProperties}
      />
    </React.Fragment>
  );
};
