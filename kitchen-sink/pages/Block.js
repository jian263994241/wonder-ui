import React from 'react';
import { Page, Block, createUseStyles } from '@wonder-ui/core';

const useStyles = createUseStyles({
  placeHolder: {
    background: '#1976d2',
    height: 50,
    color: '#fff'
  }, 
  block: {
    background: '#4791db',
    marginBottom: 10
  }
});

export default function BlockExamples(props) {
  const classes = useStyles();

  return (
    <Page name="Block" navbar >
      <Block className={classes.block} blank={1}>
        <div className={classes.placeHolder}>blank</div>
      </Block>

      <Block className={classes.block} space={1}>
        <div className={classes.placeHolder}>space</div>
      </Block>

      <Block className={classes.block} space={1} blank={1}>
        <div className={classes.placeHolder}>space & blank</div>
      </Block>

      <Block className={classes.block} space={1} blank={1} left={3}>
        <div className={classes.placeHolder}>space & blank & left</div>
      </Block>

      <Block className={classes.block} space={1} blank={1} right={3}>
        <div className={classes.placeHolder}>space & blank & right</div>
      </Block>

      <Block className={classes.block} space={1} blank={1} top={3}>
        <div className={classes.placeHolder}>space & blank & top</div>
      </Block>

      <Block className={classes.block} space={1} blank={1} bottom={3}>
        <div className={classes.placeHolder}>space & blank & bottom</div>
      </Block>
    </Page>
  )
}