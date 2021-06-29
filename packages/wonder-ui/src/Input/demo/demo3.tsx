/**
 * title: 前缀&后缀
 * desc: 在输入框上添加前缀或后缀图标。
 */
import { Input, Space, Tooltip, styled } from '@wonder-ui/core';
import { InfoCircle, Person } from '@wonder-ui/icons';

const InputExtra = styled('div')`
  background: rgb(243, 242, 241);
  color: rgb(96, 94, 92);
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 8px;
`;

export default () => {
  return (
    <Space direction="vertical">
      <Input
        placeholder="请输入"
        prefix={<Person fontSize="inherit" color="secondary" />}
        suffix={
          <Tooltip arrow title="Tips tips tips">
            <InfoCircle fontSize="inherit" color="secondary" />
          </Tooltip>
        }
      />
      <Input
        placeholder="请输入"
        prefix={<span>￥</span>}
        suffix={<span>RMB</span>}
      />
      <Input
        placeholder="请输入网址"
        prefix={
          <InputExtra style={{ marginLeft: -8 }}>
            <span>http://</span>
          </InputExtra>
        }
        suffix={
          <InputExtra style={{ marginRight: -8 }}>
            <span>.com</span>
          </InputExtra>
        }
      />
      <Input
        readOnly
        disabledActiveStyle
        placeholder="仅显示数值"
        prefix={<span>￥</span>}
        suffix={<span>RMB</span>}
      />
      <Input
        disabled
        placeholder="请输入"
        prefix={<span>￥</span>}
        suffix={<span>RMB</span>}
      />
    </Space>
  );
};
