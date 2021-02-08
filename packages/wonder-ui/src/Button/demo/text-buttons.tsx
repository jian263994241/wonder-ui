/**
 * title: 文字按钮
 * desc: 文本按钮强调的最少。
 */
/** @jsx jsx */
import { Button, jsx } from '@wonder-ui/core';

export default function Example() {
  return (
    <div
      css={{
        button: {
          margin: '.25rem .125rem'
        }
      }}
    >
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="secondary">
        Secondary
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
      <Button variant="text" color="danger">
        Danger
      </Button>
      <Button variant="text" color="warning">
        Warning
      </Button>
      <Button variant="text" color="info">
        Info
      </Button>
    </div>
  );
}
