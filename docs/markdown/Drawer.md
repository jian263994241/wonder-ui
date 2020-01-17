
```js
import React from 'react';
import { Page, Block, Drawer, Button, styled, ContentBlock } from '@wonder-ui/core';

const FullButton = styled(Button)({
  '& + &': {
    marginTop: 10
  }
});

function DrawerExamples(props){
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
      <ContentBlock>
        <p>点击按钮从四个方向出现一个半屏的浮层.</p>
        <FullButton fullWidth onClick={handleOpen.bind(null, 'right')}>Anchor Right</FullButton>
        <FullButton fullWidth onClick={handleOpen.bind(null, 'left')}>Anchor Left</FullButton>
        <FullButton fullWidth onClick={handleOpen.bind(null, 'top')}>Anchor Top</FullButton>
        <FullButton fullWidth onClick={handleOpen.bind(null, 'bottom')}>Anchor Bottom</FullButton>
      </ContentBlock>
      <Drawer visible={visible} anchor={anchor} onCancel={handleClose}>
        <Block space={2} blank={2}>
          I am here.
        </Block>
      </Drawer>
    </Page>
  )
};
<DrawerExamples/>
```