import { ContentBlock, Typography, Divider, Space } from '@wonder-ui/core';

export default () => (
  <div>
    <ContentBlock title="分割线标题">
      <div style={{ display: 'flex' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </Typography>
        <Divider direction="vertical" flexItem>
          <Typography>VERTICAL</Typography>
        </Divider>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </Typography>
      </div>
    </ContentBlock>

    <ContentBlock title="垂直分割线">
      <Space split={<Divider direction="vertical" />}>
        <Typography>Text</Typography>
        <Typography component="a" href="#" color="primary">
          Link
        </Typography>
        <Typography component="a" href="#" color="primary">
          Link
        </Typography>
      </Space>
    </ContentBlock>
  </div>
);
