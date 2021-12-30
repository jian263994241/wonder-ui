import * as React from 'react';
import {
  CascaderOption,
  CascaderView,
  List,
  ListHeader,
  ListItem,
  WhiteSpace
} from '@wonder-ui/core';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

export default () => {
  const [values, setValues] = React.useState<CascaderOption[]>([]);

  const handleChange = (values: CascaderOption[]) => {
    setValues(values);
  };

  return (
    <React.Fragment>
      <List>
        <ListHeader>基础用法</ListHeader>

        <ListItem
          extra={
            values.length > 0
              ? values.map((val) => val.name).join(',')
              : '请选择'
          }
        >
          地区
        </ListItem>

        <ListItem
          extra={
            values.length > 0
              ? values.map((val) => val.code).join(',')
              : '请选择'
          }
        >
          地区码
        </ListItem>
      </List>

      <WhiteSpace />

      <CascaderView
        divider
        value={values}
        options={pca}
        textKey="name"
        valueKey="code"
        onChange={handleChange}
        style={{ '--cascader-content-height': '400px' } as React.CSSProperties}
      />
    </React.Fragment>
  );
};
