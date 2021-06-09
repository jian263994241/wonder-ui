/**
 * title: 基本使用
 * desc: 使用 `Fade` 过渡效果
 */

/** @jsx jsx */
import {
  jsx,
  Button,
  Fade,
  Modal,
  ModalContent,
  Typography
} from '@wonder-ui/core';
import { useBoolean } from '@wonder-ui/hooks';

export default (function Example() {
  const [visible, { setFalse, setTrue }] = useBoolean();

  return (
    <div>
      <Button variant="contained" onClick={() => setTrue()}>
        Open
      </Button>

      <Modal autoFocus visible={visible} onClose={() => setFalse()}>
        <Fade>
          <ModalContent
            title="Modal Title"
            onOk={() => setFalse()}
            onClose={() => setFalse()}
            onCancel={() => setFalse()}
          >
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
});
