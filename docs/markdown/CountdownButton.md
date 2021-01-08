##

```js
import React from 'react';
import { withStyles, InputBase, CountdownButton } from '@wonder-ui/core';

const Input = withStyles({
  root: {
    width: '100%',
    height: 44,
    border: '1px solid #EAEAEA',
    padding: '0 18px',
    borderRadius: 5,
    marginBottom: 10,
    display: 'flex',
  },
  iconClear: {
    marginTop: 0,
    top: 0,
    right: 'auto',
    position: 'relative',
    flexShrink: 0,
    marginLeft: 3,
  }
})(InputBase);


<div style={{padding: 10}}>
  <Input
    clearButton
    placeholder="请输入验证码"
    type='number'
    endAdornment={
      <CountdownButton
        onStart={(done) => done()}
      />
    }
  />
</div>

```
