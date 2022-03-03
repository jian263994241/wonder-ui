import { ArrowUp } from '@wonder-ui/icons';
import {
  BackTop,
  IconButton,
  useTheme,
  Container,
  Typography
} from '@wonder-ui/core';

export default () => {
  const theme = useTheme();
  return (
    <div>
      按钮出现在右下角
      <Container>
        {Array(120)
          .fill('')
          .map((_, index) => (
            <Typography key={index}>{index}.text....</Typography>
          ))}
      </Container>
      <BackTop style={{ bottom: 30 }} visibilityHeight={20}>
        <IconButton
          style={{
            backgroundColor: theme.palette.colors.blue.A200,
            color: '#fff'
          }}
        >
          <ArrowUp />
        </IconButton>
      </BackTop>
    </div>
  );
};
