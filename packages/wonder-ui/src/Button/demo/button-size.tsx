/**
 * title: 按钮尺寸
 * desc: 按钮尺寸分下面几种类型 `small` | `medium` | `large`, 默认是 `medium`
 */
/** @jsx jsx */
import { Button, jsx } from '@wonder-ui/core';
import { AddCircleOutline } from '@wonder-ui/icons';

export default function Example() {
  return (
    <div
      css={{
        button: {
          margin: '.25rem .125rem'
        }
      }}
    >
      <div>
        <Button size="large">Large button</Button>
        <Button shape="round" size="large">
          Large button
        </Button>
        <Button shape="circle" size="large">
          <AddCircleOutline />
        </Button>
      </div>
      <div>
        <Button size="small">Small button</Button>
        <Button shape="round" size="small">
          Small button
        </Button>
        <Button shape="circle" size="small">
          <AddCircleOutline />
        </Button>
      </div>
    </div>
  );
}
