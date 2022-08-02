import { ContentBlock, Divider, Space, Typography } from '@wonder-ui/core';

export default () => (
  <ContentBlock title="分割线标题">
    <Space direction="vertical">
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider textAlign="center">
        <Typography>Title</Typography>
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider textAlign="left">
        <Typography>Title</Typography>
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
      <Divider textAlign="right">
        <Typography>Title</Typography>
      </Divider>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </Space>
  </ContentBlock>
);
