import { ContentBlock, Divider, Space, Typography } from '@wonder-ui/core';

export default () => (
  <ContentBlock title="基本使用">
    <Space direction="vertical" split={<Divider />}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </Typography>
    </Space>
  </ContentBlock>
);
