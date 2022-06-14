import { Button, ContentBlock, Space } from '@wonder-ui/core';

export default () => (
  <div>
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

    <ContentBlock title="按钮尺寸">
      <Space verticalAlign="start">
        <Button variant="contained" size="large">
          Large button
        </Button>
        <Button variant="contained" size="medium">
          Medium button
        </Button>
        <Button variant="contained" size="small">
          Small button
        </Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="块状按钮">
      <Space direction="vertical">
        <Button variant="contained" fullWidth>
          Block button
        </Button>
        <Button variant="contained" fullWidth>
          Block button
        </Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="禁用按钮">
      <Space>
        <Button variant="contained" disabled>
          Contained Button
        </Button>
        <Button variant="outlined" disabled>
          Outlined Button
        </Button>
        <Button variant="text" disabled>
          Text Button
        </Button>
      </Space>
    </ContentBlock>
  </div>
);
