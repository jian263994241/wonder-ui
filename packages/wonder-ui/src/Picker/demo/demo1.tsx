import {
  Button,
  Picker,
  PickerAction,
  Form,
  FormItem,
  ListHeader,
  Typography,
  useDialog
} from '@wonder-ui/core';
import { getPCA } from 'lcn';

const pca = getPCA({ inland: true });

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
        <Button type="submit" variant="contained" fullWidth>
          提交
        </Button>
      }
      onFinish={onFinish}
    >
      {dialog.rendered}
      <ListHeader>表单</ListHeader>

      <FormItem
        label="城市"
        name="city"
        trigger="onConfirm"
        arrow="horizontal"
        childAlign="right"
        rules={[
          {
            required: true,
            message: '请选择城市'
          }
        ]}
        onClick={(e, childRef: React.RefObject<PickerAction>) => {
          childRef.current!.show();
        }}
      >
        <Picker columns={pca} fieldNames={{ label: 'name', value: 'name' }}>
          {({ selected }) => {
            return selected ? (
              <Typography>
                {selected.map((item: any) => item.name).join(',')}
              </Typography>
            ) : (
              <Typography color="secondary">请选择</Typography>
            );
          }}
        </Picker>
      </FormItem>
    </Form>
  );
};
