import {
  Button,
  ContentBlock,
  message,
  showPreloader,
  hidePreloader
} from '@wonder-ui/core';
import React from 'react';

export default () => (
  <div
    style={
      {
        '--wui-content-block-padding-horizontal': '0px'
      } as React.CSSProperties
    }
  >
    <ContentBlock title="基本使用">
      <Button
        onClick={() => {
          message.alert({ title: '标题', text: 'dialog 1' });
        }}
      >
        alert
      </Button>

      <Button
        onClick={() => {
          message.confirm({
            title: '标题',
            text: '确定这么干吗?',
            danger: true
          });
        }}
      >
        confirm
      </Button>

      <Button
        onClick={() => {
          message.toast('message');
        }}
      >
        message
      </Button>
    </ContentBlock>

    <ContentBlock title="提示栈">
      <Button
        onClick={() => {
          message.alert({ title: '标题', text: 'dialog 1' });
          message.confirm({
            title: '标题',
            text: '确定这么干吗?',
            danger: true
          });
          message.toast('队列结束');
        }}
      >
        消息队列
      </Button>
    </ContentBlock>

    <ContentBlock title="异步">
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
    </ContentBlock>
  </div>
);
