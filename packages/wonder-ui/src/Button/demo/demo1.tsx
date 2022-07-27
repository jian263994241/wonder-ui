import { Button, ContentBlock, Space } from '@wonder-ui/core';

export default () => (
  <>
    <ContentBlock title="填充模式">
      <Space>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="按钮尺寸">
      <Space>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="按钮形状">
      <Space>
        <Button color="primary" variant="contained">
          Default
        </Button>
        <Button color="primary" variant="contained" shape="square">
          Square
        </Button>
        <Button color="primary" variant="contained" shape="round">
          Round
        </Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="块级按钮">
      <Button variant="contained" fullWidth>
        fullWidth
      </Button>
    </ContentBlock>

    <ContentBlock title="禁用按钮">
      <Space>
        <Button variant="contained" disabled>
          禁用状态
        </Button>
        <Button variant="outlined" disabled>
          禁用状态
        </Button>
      </Space>
    </ContentBlock>
  </>
);
