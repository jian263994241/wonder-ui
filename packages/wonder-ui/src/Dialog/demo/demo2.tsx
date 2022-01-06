import { Button, Dialog } from '@wonder-ui/core';

export default () => {
  return (
    <div>
      <Dialog
        buttonsVertical
        buttons={[
          {
            text: '标为未读',
            primary: true,
            onClick: () => {
              console.log('标为未读');
            }
          },
          {
            text: '置顶聊天',
            primary: true,
            onClick: () => {
              console.log('置顶聊天');
            }
          }
        ]}
      >
        <Button>垂直按钮</Button>
      </Dialog>
    </div>
  );
};
