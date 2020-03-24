```js
import React from 'react';
import { Tabs } from '@wonder-ui/core';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

<Tabs 
  tabs={tabs}
  initialPage={0}
  onChange={(tab, index) => { console.log('onChange', index, tab); }}
  onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    Content of first tab
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    Content of second tab
  </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    Content of third tab
  </div>
</Tabs>
```