import * as React from 'react';
import { ActionSheet, Button, Typography } from '@wonder-ui/core';

export default () => (
  <ActionSheet
    title={
      <Typography variant="h6" color="textPrimary">
        立即分享给好友
      </Typography>
    }
    style={{ '--action-sheet-border-radius': '0px' } as React.CSSProperties}
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
);
