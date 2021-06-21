/**
 * title: 换行排列
 * desc: 可以设置水平和垂直方向的间距
 */
import { Space, Button } from '@wonder-ui/core';

export default () => (
  <Space size={['small', 'large']}>
    {new Array(22).fill(null).map((_, index) => (
      <Button variant="contained" key={index}>
        Button
      </Button>
    ))}
  </Space>
);
