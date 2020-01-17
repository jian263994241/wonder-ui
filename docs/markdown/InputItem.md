
```jsx
import React from 'react';
import { Page, List, InputItem } from '@wonder-ui/core';

<Page name="InputItem" navbar >
  <List renderHeader={()=>`表单`}>
    <InputItem placeholder="请输入">基本</InputItem>
    <InputItem extra="元" placeholder="请输入" alignRight type="number">数字</InputItem>
    <InputItem placeholder="请输入" multiline>多行</InputItem>
  </List>
</Page>

```