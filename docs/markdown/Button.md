

### Contained Buttons (实心按钮)

```js 
import { Button, Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Flex>
  <FlexItem>
    <Button variant="contained">
      默认按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="primary">
      主要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="secondary">
      次要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="secondary" disabled>
      禁用
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" href="#section-button-按钮">
      Link
    </Button>
  </FlexItem>
</Flex>
```

### Outlined Buttons (空心按钮)

```js
import { Button, Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Flex>
  <FlexItem>
    <Button variant="outlined">
      默认按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="outlined" color="primary">
      主要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="outlined" color="secondary">
      次要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="outlined" color="secondary" disabled>
      禁用
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="outlined" href="#section-button-按钮">
      Link
    </Button>
  </FlexItem>
</Flex>
```
### Text Buttons（文本按钮）

```js
import { Button, Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Flex>
  <FlexItem>
    <Button variant="text">
      默认按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button  variant="text" color="primary">
      主要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button  variant="text" color="secondary">
      次要按钮
    </Button>
  </FlexItem>
  <FlexItem>
    <Button  variant="text" color="secondary" disabled>
      禁用
    </Button>
  </FlexItem>
  <FlexItem>
    <Button  variant="text" href="#section-button-按钮">
      Link
    </Button>
  </FlexItem>
</Flex>
```

### Block Buttons（块按钮）

```js
import { Button, Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Flex style={{height: 60}}>
  <FlexItem>
    <Button variant="contained" color="primary" fullWidth>
      100%宽度
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="primary" full>
      100%宽度, 100%高度
    </Button>
  </FlexItem>
</Flex>

```

### 尺寸

```js
import { Button, Flex } from '@wonder-ui/core';

const FlexItem = Flex.Item;

<Flex style={{height: 60}}>
  <FlexItem>
    <Button variant="contained" color="primary" size="small">
      small
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="primary" size="medium">
      medium
    </Button>
  </FlexItem>
  <FlexItem>
    <Button variant="contained" color="primary" size="large">
      large
    </Button>
  </FlexItem>
</Flex>
```
