```js
import React from 'react';
import { Page, createUseStyles, HeaderBar } from '@wonder-ui/core';

const useStyles = createUseStyles({
  bar: {
    margin: '10px 0'
  }
});

function HeaderBarExamples(props) {
  const classes = useStyles();

  return (
    <Page name="HeaderBar" navbar >
      <HeaderBar
        className={classes.bar}
        barLeft="left"
        title="title"
        barRight="right"
      />
      <HeaderBar
        className={classes.bar}
        title="title"
        showClose
      />
      <HeaderBar
        className={classes.bar}
        title="title"
        showBack
      />
    </Page>
  )
};
<HeaderBarExamples/>
```