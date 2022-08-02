import { ArrowUp } from '@wonder-ui/icons';
import { BackTop, IconButton, Container, Typography } from '@wonder-ui/core';

export default () => {
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
            backgroundColor: '#2979ff',
            color: '#fff'
          }}
        >
          <ArrowUp />
        </IconButton>
      </BackTop>
    </div>
  );
};
