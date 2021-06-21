/**
 * title: 基础消息条
 * desc: 一条基本的通知消息
 */
import { Button, Snackbar } from '@wonder-ui/core';
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button variant="contained" onClick={() => toggle()}>
        简单的消息条
      </Button>
      <Snackbar
        visible={visible}
        message="简单的消息条"
        autoHideDuration={3000}
        onClose={() => toggle()}
      />
    </div>
  );
}
