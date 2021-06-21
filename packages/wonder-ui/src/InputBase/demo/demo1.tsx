/**
 * title: 图标按钮
 * desc:
 */
import {
  Button,
  InputBase,
  InputBaseAction,
  Space,
  styled
} from '@wonder-ui/core';
import * as React from 'react';

const InputBox = styled(InputBase)`
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 10px 8px;
`;

export default () => {
  const actionRef = React.useRef<InputBaseAction>(null);

  return (
    <Space>
      <Button
        onClick={() => {
          actionRef.current?.focus({ cursor: 'end' });
        }}
      >
        moveCursorEnd
      </Button>
      <InputBox placeholder="TextField" actionRef={actionRef} />
      <InputBox placeholder="TextField" multiline />
    </Space>
  );
};
