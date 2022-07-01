import {
  Button,
  Cascader,
  ListHeader,
  Form,
  FormItem,
  Typography,
  CascaderAction,
  useDialog
} from '@wonder-ui/core';
import { getPCA } from 'lcn';
import React from 'react';

const pca = getPCA({ inland: true });

console.log(pca);

export default () => {
  const dialog = useDialog();
  const onFinish = (values: any) => {
    dialog.show({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
      buttons: [
        {
          text: '关闭',
          primary: true,
          onClick: () => {
            dialog.hide();
          }
        }
      ]
    });
  };

  return (
    <Form
      footer={
        <Button variant="contained" size="large" type="submit" fullWidth>
          提交
        </Button>
      }
      onFinish={onFinish}
    >
      {dialog.rendered}
      <ListHeader>基础用法</ListHeader>
      <FormItem
        name="city"
        label="地区"
        trigger="onConfirm"
        childAlign="right"
        arrow="horizontal"
        rules={[{ required: true, message: '请选择所在地区' }]}
        onClick={(e, childRef: React.RefObject<CascaderAction>) => {
          childRef.current?.show();
        }}
      >
        <Cascader
          title="省市区"
          options={pca}
          fieldNames={{ label: 'name', value: 'code' }}
        >
          {({ selected }) =>
            selected ? (
              selected.map((item: any) => item.name).join(',')
            ) : (
              <Typography color="secondary">请选择</Typography>
            )
          }
        </Cascader>
      </FormItem>
    </Form>
  );
};
