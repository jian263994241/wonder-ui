import * as React from 'react';
import {
  ActionSheet,
  Button,
  ContentBlock,
  Typography,
  message,
  useActionSheet
} from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);
  const actionSheet = useActionSheet();

  return (
    <div
      style={
        {
          '--wui-content-block-padding-horizontal': '0px'
        } as React.CSSProperties
      }
    >
      <ContentBlock title="基本使用">
        <ActionSheet
          actions={[
            { text: '复制', key: 'copy' },
            { text: '修改', key: 'edit' },
            { text: '删除', key: 'delete' }
          ]}
          onAction={(action) => {
            message.toast(action.text);
            console.log(action);
          }}
        >
          <Button>简单</Button>
        </ActionSheet>

        <ActionSheet
          title="请选择你要进行的操作"
          cancelText="取消"
          actions={[
            { text: '复制', key: 'copy' },
            { text: '修改', key: 'edit' },
            { text: '删除', key: 'delete' }
          ]}
          onAction={(action) => {
            message.toast(action.text);
            console.log(action);
          }}
        >
          <Button>取消按钮和额外描述</Button>
        </ActionSheet>
      </ContentBlock>

      <ContentBlock title="选项状态">
        <ActionSheet
          title="请选择你要进行的操作"
          cancelText="取消"
          actions={[
            { text: '复制', key: 'copy' },
            { text: '修改', key: 'edit', disabled: true },
            {
              text: '删除',
              key: 'delete',
              description: '删除后数据不可恢复',
              danger: true
            }
          ]}
        >
          <Button>禁用和危险的选项</Button>
        </ActionSheet>
      </ContentBlock>

      <ContentBlock title="受控组件">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          受控组件
        </Button>
        <ActionSheet
          visible={visible}
          actions={[
            { text: '复制', key: 'copy' },
            { text: '修改', key: 'edit' },
            { text: '删除', key: 'delete' }
          ]}
          onAction={(action) => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(false);
          }}
        />
      </ContentBlock>

      <ContentBlock title="事件">
        <ActionSheet
          actions={[
            {
              text: '删除',
              key: 'delete',
              danger: true,
              description: '删除后数据不可恢复'
            }
          ]}
          cancelText="取消"
          onAction={(action) => {
            if (action.key === 'delete') {
              return new Promise((resolve, reject) => {
                message.confirm({
                  title: '提示',
                  text: action.description,
                  onCancel: () => {
                    reject();
                  },
                  onOk: () => {
                    message.toast('删除');
                    resolve({});
                  }
                });
              });
            }
          }}
        >
          <Button>事件处理</Button>
        </ActionSheet>
      </ContentBlock>

      <ContentBlock title="hook">
        <Button
          onClick={() => {
            actionSheet.show({
              actions: [
                { text: '复制', key: 'copy' },
                { text: '修改', key: 'edit' },
                { text: '删除', key: 'delete' }
              ],
              onAction: (action) => {
                message.toast(action.text);
                actionSheet.hide();
              },
              onClose: () => {
                message.toast('onClose');
                actionSheet.hide();
              }
            });
          }}
        >
          hook
        </Button>
        {actionSheet.rendered}
      </ContentBlock>

      <ContentBlock title="自定义">
        <ActionSheet
          title={
            <Typography variant="h6" color="textPrimary">
              立即分享给好友
            </Typography>
          }
          style={
            { '--action-sheet-border-radius': '0px' } as React.CSSProperties
          }
          cancelText="取消"
          onRenderContent={() => {
            return (
              <div style={{ padding: 16 }}>
                <div>自定义内容</div>
              </div>
            );
          }}
        >
          <Button>自定义面板</Button>
        </ActionSheet>
      </ContentBlock>
    </div>
  );
};
