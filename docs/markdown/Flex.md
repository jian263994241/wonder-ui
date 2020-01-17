```js
import React from 'react';
import { Page, Flex, createUseStyles } from '@wonder-ui/core';

const useStyles = createUseStyles({
  placeHolder: {
    background: '#1976d2',
    width: 100,
    height: 100,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  }
});

function FlexExamples(props) {
  const classes = useStyles();

  return (
    <Page name="Flex" navbar >
      默认
      <Flex>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
      </Flex>

      换行
      <Flex wrap="wrap">
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
      </Flex>

      间距
      <Flex gutter={0.1}>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
      </Flex>


      等宽伸缩
      <Flex flex>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
        <div className={classes.placeHolder}>FlexItem</div>
      </Flex>
    </Page>
  )
};
<FlexExamples/>
```