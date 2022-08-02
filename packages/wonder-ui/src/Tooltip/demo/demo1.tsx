import { Button, ContentBlock, Space, Tooltip } from '@wonder-ui/core';

export default () => (
  <ContentBlock title="基本使用">
    <Space>
      <Tooltip title="Button tooltip text" placement="auto">
        <Button variant="contained">按钮提示</Button>
      </Tooltip>
    </Space>
  </ContentBlock>
);
