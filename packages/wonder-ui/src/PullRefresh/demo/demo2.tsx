/**
 * title: 自定义提示
 * desc:
 */
import { Page, PullRefresh, WhiteSpace, Container } from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Page title="自定义">
      <PullRefresh
        refreshing={loading}
        loadingText="加载中"
        pullingText="下拉即可刷新"
        loosingText="施放即可刷新"
        successText={'加载成功'}
        slots={{
          pulling: (props) => (
            <img
              src="https://img01.yzcdn.cn/vant/doge.png"
              style={{ transform: `scale(${props.distance / 80})`, width: 180 }}
            />
          ),
          loosing: () => (
            <img
              src="https://img01.yzcdn.cn/vant/doge.png"
              style={{ width: 120 }}
            />
          ),
          loading: () => (
            <img
              src="https://img01.yzcdn.cn/vant/doge-fire.jpg"
              style={{ width: 120 }}
            />
          )
        }}
        onRefresh={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}
      >
        <Container>
          <WhiteSpace />
          提示
        </Container>
      </PullRefresh>
    </Page>
  );
};
