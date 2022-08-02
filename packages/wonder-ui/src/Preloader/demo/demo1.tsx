import * as React from 'react';
import {
  Button,
  ContentBlock,
  Preloader,
  showPreloader,
  hidePreloader,
  LinearProgress,
  WhiteSpace,
  Typography
} from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);

  const open = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  return (
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
            showPreloader();

            setTimeout(() => {
              hidePreloader();
            }, 2000);
          }}
        >
          简单
        </Button>

        <Button
          onClick={() => {
            showPreloader({
              text: '加载中...'
            });

            setTimeout(() => {
              hidePreloader();
            }, 2000);
          }}
        >
          附带文字
        </Button>
      </ContentBlock>

      <ContentBlock title="图标">
        <Button
          onClick={() => {
            showPreloader({
              type: 'spinner',
              text: 'type-spinner'
            });

            setTimeout(() => {
              hidePreloader();
            }, 2000);
          }}
        >
          Spinner
        </Button>

        <Button
          onClick={() => {
            showPreloader({
              type: 'circular',
              text: 'type-circular'
            });

            setTimeout(() => {
              hidePreloader();
            }, 2000);
          }}
        >
          Circular
        </Button>

        <Button
          onClick={() => {
            showPreloader({
              indicator: (
                <div style={{ width: 200, paddingTop: 20 }}>
                  <LinearProgress />
                  <WhiteSpace />
                  <Typography>加载中...</Typography>
                </div>
              )
            });

            setTimeout(() => {
              hidePreloader();
            }, 2000);
          }}
        >
          Custom
        </Button>
      </ContentBlock>

      <ContentBlock title="受控组件">
        <Button onClick={() => open()}>受控组件</Button>
        <Preloader visible={visible} />
      </ContentBlock>
    </div>
  );
};
