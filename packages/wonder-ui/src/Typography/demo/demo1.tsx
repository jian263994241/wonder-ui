import { ContentBlock, Typography } from '@wonder-ui/core';

export default () => (
  <div>
    <ContentBlock title="基本使用">
      <Typography variant="h1">h1.Heading</Typography>
      <Typography variant="h2">h2.Heading</Typography>
      <Typography variant="h3">h3.Heading</Typography>
      <Typography variant="h4">h4.Heading</Typography>
      <Typography variant="h5">h5.Heading</Typography>
      <Typography variant="h6">h6.Heading</Typography>

      <Typography variant="subtitle1">内容标题1</Typography>
      <Typography variant="body1" gutterBottom>
        内容1
      </Typography>

      <Typography variant="subtitle2">内容标题2</Typography>
      <Typography variant="body2">内容2</Typography>

      <Typography variant="caption">描述文字</Typography>
    </ContentBlock>

    <ContentBlock title="对齐">
      <Typography align="left">左对齐</Typography>
      <Typography align="center">居中对齐</Typography>
      <Typography align="right">右对齐</Typography>
    </ContentBlock>

    <ContentBlock title="文字省略(一行)">
      <Typography noWrap>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字,
      </Typography>
    </ContentBlock>
    <ContentBlock title="文字省略(多行)">
      <Typography lineClamp={2}>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字, 超级多的文字,
      </Typography>
    </ContentBlock>

    <ContentBlock title="间隔">
      <Typography gutterBottom>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字, 超级多的文字,
      </Typography>
      <Typography gutterBottom>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字, 超级多的文字,
      </Typography>
    </ContentBlock>

    <ContentBlock title="段落">
      <Typography paragraph>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字.
      </Typography>
      <Typography paragraph>
        超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字, 超级多的文字,
        超级多的文字, 超级多的文字.
      </Typography>
    </ContentBlock>
  </div>
);
