/**
 * title: 基本使用
 * desc:
 */
import {
  Page,
  PullRefresh,
  WhiteSpace,
  Checkbox,
  Container,
  withDialog
} from '@wonder-ui/core';
import * as React from 'react';

export default withDialog((props) => {
  const [loading, setLoading] = React.useState(false);
  const [needDialog, setDialogState] = React.useState(true);

  return (
    <Page title="PullRefresh">
      <PullRefresh
        refreshing={loading}
        loadingText="加载中"
        pullingText="下拉即可刷新"
        loosingText="施放即可刷新"
        successText={needDialog ? '' : '加载成功'}
        onRefresh={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            if (needDialog) {
              props.dialog.toast('加载成功');
            }
          }, 2000);
        }}
      >
        <Container>
          <WhiteSpace />
          <Checkbox
            checked={needDialog}
            onChange={(e) => {
              setDialogState(e.target.checked);
            }}
          >
            Toast 提示
          </Checkbox>

          <div style={{ paddingTop: 1500 }}>底部</div>
        </Container>
      </PullRefresh>
    </Page>
  );
});
