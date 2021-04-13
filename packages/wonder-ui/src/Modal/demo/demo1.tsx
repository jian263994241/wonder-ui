/**
 * title: 基础使用
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
import { useToggle } from '@wonder-ui/hooks';

export default function Example() {
  const [visible, { toggle }] = useToggle();

  return (
    <div>
      <Button onClick={() => toggle()}>Open</Button>

      <Modal visible={visible} onClose={() => toggle()}>
        <Fade>
          <ModalContent
            title="Modal Title"
            onOk={() => toggle()}
            onClose={() => toggle()}
          >
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
            <Typography>some contents...</Typography>
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
}
