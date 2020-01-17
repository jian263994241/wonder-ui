
```js
import { Preloader, Button, Page, ContentBlock } from '@wonder-ui/core';

const showPreloader = ()=> {
  Preloader.show();
  setTimeout(()=> Preloader.hide(), 1000);
};

<Page name="Preloader" navbar>
  <ContentBlock>
    <Button onClick={showPreloader}>Show Preloader</Button>
  </ContentBlock>
</Page>
```

### 方法调用

组件提供了2个静态方法调用

```js static
Preloader.show() //显示

Preloader.hide() //隐藏
```
