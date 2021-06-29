/**
 * title: 带移除图标
 * desc: 点击清空内容
 */
import { Input, Space } from '@wonder-ui/core';

export default () => {
  return (
    <Space direction="vertical">
      <Input placeholder="Input with clear button" allowClear />
      <Input
        allowClear
        placeholder="请输入"
        prefix={<span>￥</span>}
        suffix={<span>RMB</span>}
      />
      <Input
        placeholder="Textare with clear button"
        allowClear
        multiline
        minRows={3}
      />
    </Space>
  );
};
