import React from 'react';
import { Page, Block, Drawer, Button } from '@wonder-ui/core';
import styled from 'styled-components';

const FullButton = styled(Button).attrs({ fullWidth: true }) `
  & + & {
    margin-top: 10px;
  }
`

export default function DrawerPage(props){
  const [visible, setVisible] = React.useState(false);
  const [anchor, setAnchor] = React.useState();

  const handleOpen = React.useCallback((_anchor)=>{
    setAnchor(_anchor);
    setVisible(true);
  }, []);

  const handleClose = React.useCallback(()=>{
    setVisible(false);
  }, []);
  
  return (
    <Page name="Drawer" navbar>
      <Block space={2} blank={2}>
        <p>点击按钮从四个方向出现一个半屏的浮层. </p>
        <FullButton onClick={handleOpen.bind(null, 'right')}>Anchor Right</FullButton>
        <FullButton onClick={handleOpen.bind(null, 'left')}>Anchor Left</FullButton>
        <FullButton onClick={handleOpen.bind(null, 'top')}>Anchor Top</FullButton>
        <FullButton onClick={handleOpen.bind(null, 'bottom')}>Anchor Bottom</FullButton>
      </Block>
      <Drawer visible={visible} anchor={anchor} onCancel={handleClose}>
        <Block space={2} blank={2}>
          Components are here...
        </Block>
      </Drawer>
    </Page>
  )
}