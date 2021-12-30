import { List, ListItem, ListHeader, Ellipsis } from '@wonder-ui/core';

const content =
  'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。';

export default () => (
  <List>
    <ListHeader>尾部省略</ListHeader>
    <ListItem>
      <Ellipsis>{content}</Ellipsis>
    </ListItem>

    <ListHeader>头部省略</ListHeader>
    <ListItem>
      <Ellipsis direction="start">{content}</Ellipsis>
    </ListItem>

    <ListHeader>中间省略</ListHeader>
    <ListItem>
      <Ellipsis direction="middle">{content}</Ellipsis>
    </ListItem>

    <ListHeader>多行省略</ListHeader>
    <ListItem>
      <Ellipsis direction="end" rows={2}>
        {content}
      </Ellipsis>
    </ListItem>

    <ListHeader>展开收起</ListHeader>
    <ListItem>
      <Ellipsis direction="end" rows={2} expandText="展开" collapseText="收起">
        {content}
      </Ellipsis>
    </ListItem>

    <ListHeader>仅展开</ListHeader>
    <ListItem>
      <Ellipsis direction="end" expandText="展开">
        {content}
      </Ellipsis>
      <Ellipsis direction="start" expandText="展开">
        {content}
      </Ellipsis>
      <Ellipsis direction="middle" expandText="展开">
        {content}
      </Ellipsis>
    </ListItem>
  </List>
);
