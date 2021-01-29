# Button 按钮

```tsx
import * as React from 'react';
import { ButtonBase, styled } from '@wonder-ui/core';

const w_styled = c => {
  if (typeof c === 'string') {
    c = props => React.createElement(c, props);
  }

  c.default = {
    theme: {
      color: 'red',
    },
  };

  return styled(c);
};

const CustomButton = w_styled('button')`
  background: pink;

  &:active {
    background: ${props => props.theme.color};
  }
`;

export default function Example() {
  return <CustomButton>自定义按钮</CustomButton>;
}
```
