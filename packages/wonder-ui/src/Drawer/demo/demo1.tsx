import * as React from 'react';
import { Button, Drawer, DrawerProps, Page, Space } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

type Anchor = DrawerProps['anchor'];

export default () => {
  const [visible, { toggle: toggleVisible }] = useToggle(false);
  const [anchor, { toggle }] = useToggle<Anchor>('left');

  const open = (anchor: Anchor) => {
    toggle(anchor);
    toggleVisible();
  };

  return (
    <React.Fragment>
      <Space>
        <Button variant="contained" onClick={() => open('left')}>
          左
        </Button>
        <Button variant="contained" onClick={() => open('right')}>
          右
        </Button>
        <Button variant="contained" onClick={() => open('top')}>
          上
        </Button>
        <Button variant="contained" onClick={() => open('bottom')}>
          下
        </Button>
      </Space>

      <Drawer anchor={anchor} visible={visible} onClose={() => toggleVisible()}>
        <Page
          title="Basic Drawer"
          style={{
            position: 'relative',
            ...(['left', 'right'].indexOf(anchor || '') !== -1
              ? { width: 260, height: '100%' }
              : { width: '100%', height: 200 })
          }}
          showCloseButton
          onClose={() => toggleVisible()}
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
