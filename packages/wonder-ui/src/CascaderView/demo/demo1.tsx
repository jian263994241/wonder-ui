import * as React from 'react';
import {
  CascaderOption,
  CascaderView,
  CascaderViewAction,
  List,
  ListHeader,
  ListItem,
  WhiteSpace
} from '@wonder-ui/core';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

export default () => {
  const [values, setValues] = React.useState<string[]>();
  const [options, setOptions] = React.useState<CascaderOption[]>();
  const actionRef = React.useRef<CascaderViewAction>();

  const handleChange = (values: string[]) => {
    setValues(values);
  };

  React.useEffect(() => {
    if (actionRef.current) {
      setOptions(actionRef.current.getSelected());
    }
  }, [values]);

  return (
    <React.Fragment>
      <List>
        <ListHeader>基础用法</ListHeader>

        <ListItem
          extra={options ? options.map((val) => val.name).join(',') : '请选择'}
        >
          地区
        </ListItem>

        <ListItem
          extra={options ? options.map((val) => val.code).join(',') : '请选择'}
        >
          地区码
        </ListItem>
      </List>

      <WhiteSpace />

      <CascaderView
        divider
        actionRef={actionRef}
        defaultValue={['500000', '500100', '500104']}
        value={values}
        options={pca}
        fieldNames={{ label: 'name', value: 'code' }}
        onFinish={handleChange}
        style={{ '--cascader-content-height': '400px' } as React.CSSProperties}
      />
    </React.Fragment>
  );
};
