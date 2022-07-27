import {
  Button,
  ContentBlock,
  Divider,
  Space,
  Typography
} from '@wonder-ui/core';

export default () => (
  <>
    <ContentBlock title="基本使用">
      <Space>
        <Button variant="contained">Button</Button>
        <Button variant="contained">Button</Button>
      </Space>
    </ContentBlock>

    <ContentBlock title="设置间距">
      <Space gap={[6, 10]}>
        {Array(6)
          .fill('')
          .map((_, index) => (
            <Button variant="contained" key={index}>
              Button
            </Button>
          ))}
      </Space>
    </ContentBlock>

    <ContentBlock title="分隔符">
      <Space split={<Divider direction="vertical" />}>
        <Typography>text</Typography>
        <Typography>text</Typography>
        <Typography>text</Typography>
      </Space>
    </ContentBlock>

    <ContentBlock title="行内等宽">
      <Space itemEqual>
        <Button variant="contained" fullWidth>
          Button
        </Button>
        <Button variant="contained" fullWidth>
          Button
        </Button>
        <Button variant="contained" fullWidth>
          Button
        </Button>
      </Space>
    </ContentBlock>
  </>
);
