import { ContentBlock, Input, Space, Tooltip } from '@wonder-ui/core';
import { InfoCircle, Person } from '@wonder-ui/icons';

export default () => (
  <>
    <ContentBlock title="基本使用">
      <Input placeholder="请输入" />
    </ContentBlock>

    <ContentBlock title="限制输入长度">
      <Input placeholder="5个字" maxLength={5} />
    </ContentBlock>

    <ContentBlock title="尺寸">
      <Space direction="vertical">
        <Input placeholder="Large" size="large" />
        <Input placeholder="Middle (default)" size="middle" />
        <Input placeholder="Small" size="small" />
      </Space>
    </ContentBlock>

    <ContentBlock title="多行输入">
      <Space direction="vertical" verticalAlign="start">
        <Input multiline minRows={1} maxRows={3} placeholder="文本域" />
        <Input multiline maxRows={3} placeholder="文本域" />
      </Space>
    </ContentBlock>

    <ContentBlock title="带移除图标">
      <Space direction="vertical">
        <Input placeholder="请输入" allowClear />

        <Input placeholder="请输入" allowClear multiline minRows={3} />
      </Space>
    </ContentBlock>

    <ContentBlock title="前缀和后缀">
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
      </Space>
    </ContentBlock>

    <ContentBlock title="密码框">
      <Input type="password" placeholder="请输入" />
    </ContentBlock>

    <ContentBlock title="只读&禁用">
      <Space direction="vertical">
        <Input readOnly placeholder="Basic readOnly" />

        <Input disabled placeholder="Basic disabled" />
      </Space>
    </ContentBlock>
  </>
);
