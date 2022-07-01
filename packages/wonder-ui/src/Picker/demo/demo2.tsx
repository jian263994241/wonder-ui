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
        <Button type="submit" variant="contained" size="large" fullWidth>
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
        // initialValue={['310000', '310100', '310105']}
        arrow="horizontal"
        childAlign="right"
        onClick={(e, childRef: React.RefObject<PickerAction>) => {
          childRef.current.show();
        }}
      >
        <Picker columns={pca} fieldNames={{ label: 'name', value: 'code' }}>
          {({ selected }) => {
            return selected ? (
              selected.map((item: any) => item.name).join(',')
            ) : (
              <Typography color="secondary">请选择</Typography>
            );
          }}
        </Picker>
      </FormItem>
    </Form>
  );
};
