import { ContentBlock, Ellipsis } from '@wonder-ui/core';

const content =
  'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。';

export default () => (
  <>
    <ContentBlock title="尾部省略">
      <Ellipsis>{content}</Ellipsis>
    </ContentBlock>

    <ContentBlock title="头部省略">
      <Ellipsis direction="start">{content}</Ellipsis>
    </ContentBlock>

    <ContentBlock title="中间省略">
      <Ellipsis direction="middle">{content}</Ellipsis>
    </ContentBlock>

    <ContentBlock title="多行省略">
      <Ellipsis direction="end" rows={2}>
        {content}
      </Ellipsis>
    </ContentBlock>

    <ContentBlock title="展开收起">
      <Ellipsis direction="end" rows={1} expandText="展开" collapseText="收起">
        {content}
      </Ellipsis>
    </ContentBlock>

    <ContentBlock title="仅展开">
      <Ellipsis direction="end" expandText="展开">
        {content}
      </Ellipsis>
      <Ellipsis direction="start" expandText="展开">
        {content}
      </Ellipsis>
      <Ellipsis direction="middle" expandText="展开">
        {content}
      </Ellipsis>
    </ContentBlock>
  </>
);
