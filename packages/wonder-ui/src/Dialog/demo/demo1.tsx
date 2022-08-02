import * as React from 'react';
import { Button, ContentBlock, Dialog, useDialog } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const dialog = useDialog({ title: '提示信息' });

  return (
    <div
      style={
        {
          '--wui-content-block-padding-horizontal': '0px'
        } as React.CSSProperties
      }
    >
      <ContentBlock title="基本使用">
        <Button onClick={() => setVisible(true)}>受控组件</Button>
        <Dialog
          visible={visible}
          title="标题"
          text="内容, 内容, 内容..."
          buttons={[
            {
              text: '好的',
              primary: true,
              onClick: () => {
                setVisible(false);
              }
            }
          ]}
        />

        <Dialog
          title="标题"
          text="内容, 内容, 内容..."
          buttons={[
            {
              text: '知道啦!',
              primary: true
            }
          ]}
        >
          <Button>按钮触发</Button>
        </Dialog>

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
      </ContentBlock>

      <ContentBlock title="自定义内容">
        <Dialog
          title="标题"
          content={
            <div>
              <img
                src="https://img.99bill.com/z/img/new-pos.png"
                width={260}
                height={260}
                alt="img"
              />
            </div>
          }
          buttons={[
            {
              text: '知道啦!',
              primary: true
            }
          ]}
        >
          <Button>自定义内容</Button>
        </Dialog>
      </ContentBlock>

      <ContentBlock title="Hook">
        <Button
          onClick={() => {
            dialog.show({
              text: '文字文字....',
              buttons: [
                {
                  text: '好的',
                  primary: true,
                  onClick: () => {
                    dialog.hide();
                  }
                }
              ]
            });
          }}
        >
          Hook
        </Button>
        {dialog.rendered}
      </ContentBlock>
    </div>
  );
};
