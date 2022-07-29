import { Button, ContentBlock, Empty, Image } from '@wonder-ui/core';

export default () => (
  <>
    <ContentBlock title="基本使用">
      <Empty />
    </ContentBlock>

    <ContentBlock title="描述文字">
      <Empty description="暂无数据" />
    </ContentBlock>

    <ContentBlock title="自定义">
      <Empty
        image={
          <Image
            width="150"
            src="https://img01.yzcdn.cn/vant/empty-image-search.png"
          />
        }
        description="暂无数据"
      >
        <Button variant="contained">自定义按钮</Button>
      </Empty>
    </ContentBlock>
  </>
);
