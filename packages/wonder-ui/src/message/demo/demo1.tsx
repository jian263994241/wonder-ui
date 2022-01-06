import { Button, message, showPreloader, hidePreloader } from '@wonder-ui/core';

export default () => (
  <div>
    <Button
      onClick={() => {
        message.alert({ title: '标题', text: 'dialog 1' });
        message.confirm({ title: '标题', text: '确定这么干吗?', danger: true });
        message.toast('队列结束');
      }}
    >
      消息提示栈
    </Button>

    <Button
      onClick={() => {
        message.alert({
          title: '异步',
          text: 'dialog 2',
          onOk: () => {
            return new Promise((resolve, reject) => {
              showPreloader();

              setTimeout(() => {
                hidePreloader();

                resolve({});
              }, 2000);
            });
          }
        });
      }}
    >
      异步关闭
    </Button>
  </div>
);
