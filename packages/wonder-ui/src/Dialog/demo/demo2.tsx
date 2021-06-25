/**
 * title: 垂直按钮
 * desc: 设置 `buttonsVertical` 按钮排列方向
 */
import { Button, Container, Dialog, Page, WhiteSpace } from '@wonder-ui/core';

export default () => (
  <Page title="Dialog vertical buttons">
    <WhiteSpace />
    <Container>
      <Dialog
        buttonsVertical
        buttons={[
          {
            text: '标为未读',
            onClick: () => {
              console.log('标为未读');
            }
          },
          {
            text: '置顶聊天',
            onClick: () => {
              console.log('置顶聊天');
            }
          }
        ]}
      >
        <Button variant="contained">垂直按钮</Button>
      </Dialog>
    </Container>
  </Page>
);
