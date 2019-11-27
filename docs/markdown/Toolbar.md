
### 两按钮工具栏

```jsx
import { Toolbar, Button } from '@wonder-ui/core';

<div className="mobile-preview auto">
  <Toolbar>
    <Button full>取消</Button>
    <Button full color="primary">确认</Button>
  </Toolbar>
</div>
```

### 三按钮工具栏

```jsx
import { Toolbar, Button, Flex, Page } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Page>
  <Toolbar gutter={1}>
    <FlexItem>
      <Button full color="primary">操作一</Button>
    </FlexItem>
    <FlexItem>
      <Button full color="primary">操作二</Button>
    </FlexItem>
    <FlexItem>
      <Button full color="primary">操作二</Button>
    </FlexItem>
  </Toolbar>
</Page>

```