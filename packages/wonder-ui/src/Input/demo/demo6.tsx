/**
 * title: 多行输入
 * desc: 限制输入框高度: `maxRows`, `minRows`
 */
import { Input, Space } from '@wonder-ui/core';

export default () => {
  return (
    <Space verticalAlign="start">
      <Input
        style={{ width: 300 }}
        multiline
        minRows={1}
        maxRows={3}
        placeholder="文本域"
      />
      <Input
        style={{ width: 300 }}
        multiline
        maxRows={3}
        placeholder="文本域"
      />
    </Space>
  );
};
