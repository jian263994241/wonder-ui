/**
 * title: 图标
 * inline: true
 */

import * as React from 'react';
import * as icons from '@wonder-ui/icons';

export default function Example() {
  return (
    <div>
      {(Object.keys(icons) as Array<keyof typeof icons>).map((key, index) => {
        const Icon = icons[key];
        return <Icon key={index} size="large" />;
      })}
    </div>
  );
}
