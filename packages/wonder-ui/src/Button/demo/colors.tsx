import { Button, ContentBlock, Space } from '@wonder-ui/core';

const colors = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark'
] as const;

export default () => (
  <div>
    <ContentBlock title="实心按钮">
      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="contained" key={index}>
            {color}
          </Button>
        ))}
      </Space>
    </ContentBlock>

    <ContentBlock title="空心按钮">
      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="outlined" key={index}>
            {color}
          </Button>
        ))}
      </Space>
    </ContentBlock>

    <ContentBlock title="文字按钮">
      <Space>
        {colors.map((color, index) => (
          <Button color={color} variant="text" key={index}>
            {color}
          </Button>
        ))}
      </Space>
    </ContentBlock>
  </div>
);
