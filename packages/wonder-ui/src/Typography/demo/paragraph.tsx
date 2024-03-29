import { Typography } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Typography paragraph>paragraph 带有下边距</Typography>
      <Typography gutterBottom>gutterBottom 带有小一点的下边距</Typography>
      <Typography noWrap style={{ width: 150 }}>
        超出部分隐藏, 超出部分隐藏, 超出部分隐藏, 超出部分隐藏,
      </Typography>
      <Typography align="center">align 对齐文本</Typography>
    </div>
  );
}
