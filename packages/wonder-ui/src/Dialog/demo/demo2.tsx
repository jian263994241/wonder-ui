import { Button, Dialog, Page } from '@wonder-ui/core';

export default () => {
  return (
    <Page title="Vertical buttons">
      <div style={{ padding: 16 }}>
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
      </div>
    </Page>
  );
};
