import * as React from 'react';
import {
  Drawer,
  DrawerProps,
  List,
  ListHeader,
  ListItem,
  Page
} from '@wonder-ui/core';

type Anchor = DrawerProps['anchor'];

export default () => {
  const [visible, setVisible] = React.useState(false);
  const [anchor, setAnchor] = React.useState<Anchor>('left');

  const open = (anchor: Anchor) => {
    setAnchor(anchor);
    setVisible(true);
  };

  return (
    <React.Fragment>
      <List>
        <ListHeader>基本使用</ListHeader>
        <ListItem arrow="horizontal" onClick={() => open('left')}>
          弹出(左)
        </ListItem>
        <ListItem arrow="horizontal" onClick={() => open('right')}>
          弹出(右)
        </ListItem>
        <ListItem arrow="horizontal" onClick={() => open('top')}>
          弹出(上)
        </ListItem>
        <ListItem arrow="horizontal" onClick={() => open('bottom')}>
          弹出(下)
        </ListItem>
      </List>

      <Drawer
        anchor={anchor}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Page
          title="Basic Drawer"
          style={{
            position: 'relative',
            ...(['left', 'right'].indexOf(anchor || '') !== -1
              ? { width: 260, height: '100%' }
              : { width: '100%', height: 200 })
          }}
          showCloseButton
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: '10px 16px' }}>
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
            Some contents... <br />
          </div>
        </Page>
      </Drawer>
    </React.Fragment>
  );
};
